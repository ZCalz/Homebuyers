"use client";

import { useEffect, useId, useRef, useState } from "react";

type Step = "zip" | "condition" | "reason" | "contact" | "done";

const CONDITIONS = [
  { value: "move-in-ready", label: "Move-in ready" },
  { value: "some-updates", label: "Needs some updates" },
  { value: "major-repairs", label: "Needs major repairs" },
  { value: "not-livable", label: "Not currently livable" },
];

const REASONS = [
  { value: "inherited", label: "Inherited the property" },
  { value: "foreclosure", label: "Behind on payments" },
  { value: "repairs", label: "Too many repairs" },
  { value: "landlord", label: "Tired of being a landlord" },
  { value: "relocating", label: "Relocating / PCS" },
  { value: "divorce", label: "Divorce or separation" },
  { value: "downsizing", label: "Downsizing" },
  { value: "other", label: "Something else" },
];

const SOURCES = [
  { value: "facebook", label: "Facebook" },
  { value: "google-search", label: "Google Search" },
  { value: "youtube", label: "YouTube" },
  { value: "instagram", label: "Instagram" },
  { value: "referral", label: "Referral" },
  { value: "email", label: "Email" },
  { value: "other", label: "Other" },
];

interface LeadFormProps {
  /** Pre-fill context when embedded on a location page. */
  defaultZip?: string;
  territory?: string;
  compact?: boolean;
}

function phoneDigitsOnly(value: string): string {
  return value.replace(/\D/g, "").slice(0, 10);
}

function formatPhoneDisplay(digits: string): string {
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function isValidPhone(digits: string): boolean {
  return /^\d{10}$/.test(digits);
}

interface AddressSuggestion {
  display: string;
}

interface NominatimResult {
  display_name: string;
}

// Roughly bounds DC/MD/VA/DE so nearby results rank first without excluding
// the rest of the country. Free OSM lookup — swap for a paid geocoder
// (Google Places, Mapbox) before sending real production traffic.
const SERVICE_AREA_VIEWBOX = "-79.5,39.9,-74.9,36.5";

function useAddressAutocomplete() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestId = useRef(0);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (query.trim().length < 4) {
      setSuggestions([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const thisRequest = ++requestId.current;

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&addressdetails=0&limit=5&countrycodes=us&viewbox=${SERVICE_AREA_VIEWBOX}&bounded=0&q=${encodeURIComponent(
            query
          )}`
        );
        const data = (await res.json()) as NominatimResult[];
        if (thisRequest !== requestId.current) return;
        setSuggestions(
          Array.isArray(data) ? data.map((d) => ({ display: d.display_name })) : []
        );
      } catch {
        if (thisRequest === requestId.current) setSuggestions([]);
      } finally {
        if (thisRequest === requestId.current) setLoading(false);
      }
    }, 350);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  return { query, setQuery, suggestions, setSuggestions, open, setOpen, loading };
}

export default function LeadForm({ defaultZip = "", territory, compact }: LeadFormProps) {
  const [step, setStep] = useState<Step>("zip");
  const [zip, setZip] = useState(defaultZip);
  const [condition, setCondition] = useState("");
  const [reason, setReason] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const {
    query: address,
    setQuery: setAddress,
    suggestions: addressSuggestions,
    setSuggestions: setAddressSuggestions,
    open: showAddressSuggestions,
    setOpen: setShowAddressSuggestions,
    loading: loadingAddress,
  } = useAddressAutocomplete();
  const addressListId = useId();
  const [source, setSource] = useState("");
  const [sourceOther, setSourceOther] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [routedTo, setRoutedTo] = useState("");

  const stepIndex = { zip: 0, condition: 1, reason: 2, contact: 3, done: 4 }[step];

  function nextFromZip(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\d{5}$/.test(zip)) {
      setError("Please enter a 5-digit zip code.");
      return;
    }
    setError("");
    setStep("condition");
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!address.trim()) {
      setError("Please add the property address.");
      return;
    }
    if (!name.trim()) {
      setError("Please add your name.");
      return;
    }
    if (!isValidPhone(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    setError("");
    setSubmitting(true);
    const howDidYouFindUs =
      source === "other"
        ? sourceOther.trim()
        : SOURCES.find((s) => s.value === source)?.label ?? "";
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          zip,
          condition,
          reason,
          name,
          phone,
          email,
          address,
          howDidYouFindUs,
          territory,
          submittedAt: new Date().toISOString(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setRoutedTo(data.territory ?? "");
      setStep("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us instead.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className={`rounded-2xl bg-white shadow-xl shadow-pine-900/10 ring-1 ring-pine-900/10 ${
        compact ? "p-5" : "p-6 sm:p-8"
      }`}
    >
      {step !== "done" && (
        <div className="flex items-center gap-1.5 mb-5" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= stepIndex ? "bg-clay-500" : "bg-sand-200"
              }`}
            />
          ))}
        </div>
      )}

      {step === "zip" && (
        <form onSubmit={nextFromZip}>
          <label htmlFor="lead-zip" className="block font-display text-xl text-pine-950">
            Where is the property?
          </label>
          <p className="mt-1 text-sm text-pine-700">
            Enter the zip code to route your request to the right local team.
          </p>
          <div className="mt-4 flex gap-2">
            <input
              id="lead-zip"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
              placeholder="e.g. 21224"
              className="w-full rounded-lg border border-pine-900/20 bg-sand-50 px-4 py-3 text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-clay-500"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-clay-500 hover:bg-clay-600 text-white font-semibold px-5 py-3 transition-colors"
            >
              Start
            </button>
          </div>
        </form>
      )}

      {step === "condition" && (
        <fieldset>
          <legend className="font-display text-xl text-pine-950">
            What condition is the house in?
          </legend>
          <p className="mt-1 text-sm text-pine-700">Honest answers get accurate offers. There is no wrong answer.</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CONDITIONS.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => {
                  setCondition(c.value);
                  setStep("reason");
                }}
                className="rounded-lg border border-pine-900/15 bg-sand-50 hover:border-clay-500 hover:bg-white px-4 py-3 text-left text-sm font-medium text-pine-900 transition-colors"
              >
                {c.label}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === "reason" && (
        <fieldset>
          <legend className="font-display text-xl text-pine-950">
            What&apos;s prompting the sale?
          </legend>
          <p className="mt-1 text-sm text-pine-700">
            This helps us match you with a buyer who has handled your exact situation.
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {REASONS.map((r) => (
              <button
                key={r.value}
                type="button"
                onClick={() => {
                  setReason(r.value);
                  setStep("contact");
                }}
                className="rounded-lg border border-pine-900/15 bg-sand-50 hover:border-clay-500 hover:bg-white px-4 py-3 text-left text-sm font-medium text-pine-900 transition-colors"
              >
                {r.label}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {step === "contact" && (
        <form onSubmit={submit} className="space-y-3">
          <p className="font-display text-xl text-pine-950">
            Where should we send your offer?
          </p>
          <div className="relative">
            <input
              aria-label="Property address"
              required
              role="combobox"
              aria-expanded={showAddressSuggestions && addressSuggestions.length > 0}
              aria-autocomplete="list"
              aria-controls={addressListId}
              autoComplete="off"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setShowAddressSuggestions(true);
              }}
              onFocus={() => setShowAddressSuggestions(true)}
              onBlur={() => setTimeout(() => setShowAddressSuggestions(false), 120)}
              placeholder="Start typing the property address"
              className="w-full rounded-lg border border-pine-900/20 bg-sand-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-clay-500"
            />
            {loadingAddress && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-pine-600">
                Searching…
              </span>
            )}
            {showAddressSuggestions && addressSuggestions.length > 0 && (
              <ul
                id={addressListId}
                role="listbox"
                className="absolute z-20 mt-1.5 w-full max-h-56 overflow-auto rounded-lg border border-pine-900/15 bg-white shadow-lg shadow-pine-900/10 text-sm"
              >
                {addressSuggestions.map((s, i) => (
                  <li key={`${s.display}-${i}`} role="option" aria-selected={s.display === address}>
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setAddress(s.display);
                        setAddressSuggestions([]);
                        setShowAddressSuggestions(false);
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-sand-100 text-pine-900 leading-snug"
                    >
                      {s.display}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <input
            aria-label="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            className="w-full rounded-lg border border-pine-900/20 bg-sand-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-clay-500"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              aria-label="Phone number"
              required
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              value={formatPhoneDisplay(phone)}
              onChange={(e) => setPhone(phoneDigitsOnly(e.target.value))}
              placeholder="(555) 555-0100"
              className="w-full rounded-lg border border-pine-900/20 bg-sand-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-clay-500"
            />
            <input
              aria-label="Email (optional)"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email (optional)"
              autoComplete="email"
              className="w-full rounded-lg border border-pine-900/20 bg-sand-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-clay-500"
            />
          </div>
          <div>
            <select
              aria-label="How did you find us? (optional)"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full rounded-lg border border-pine-900/20 bg-sand-50 px-4 py-3 text-sm text-pine-900 focus:outline-none focus:ring-2 focus:ring-clay-500"
            >
              <option value="">How did you find us? (optional)</option>
              {SOURCES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            {source === "other" && (
              <input
                aria-label="Tell us how you found us"
                value={sourceOther}
                onChange={(e) => setSourceOther(e.target.value)}
                placeholder="Tell us how you found us"
                className="mt-2 w-full rounded-lg border border-pine-900/20 bg-sand-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-clay-500"
              />
            )}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-clay-500 hover:bg-clay-600 disabled:opacity-60 text-white font-semibold px-5 py-3.5 transition-colors"
          >
            {submitting ? "Sending…" : "Get My Cash Offer"}
          </button>
          <p className="text-xs text-pine-700/70 leading-relaxed">
            No obligation, no fees, and we never sell your information. A local
            buyer will reach out — usually within the hour during business
            hours.
          </p>
        </form>
      )}

      {step === "done" && (
        <div className="text-center py-4">
          <div className="mx-auto grid place-items-center w-12 h-12 rounded-full bg-pine-100 text-pine-700 text-2xl" aria-hidden>
            ✓
          </div>
          <p className="mt-4 font-display text-xl text-pine-950">
            Request received{name ? `, ${name.split(" ")[0]}` : ""}.
          </p>
          <p className="mt-2 text-sm text-pine-700 leading-relaxed">
            {routedTo
              ? `Your request was routed to our ${routedTo} team.`
              : "Your request was routed to the local team for your zip code."}{" "}
            Expect a call shortly to schedule a quick walkthrough.
          </p>
        </div>
      )}

      {error && (
        <p role="alert" className="mt-3 text-sm text-clay-600 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
