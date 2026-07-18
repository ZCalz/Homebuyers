import { randomUUID } from "node:crypto";
import { put } from "@vercel/blob";

/**
 * Lead storage schema for the `homebuyers-blob` Vercel Blob store.
 *
 * Blob storage has no query language and no atomic in-place updates across
 * records, so the shape here is deliberately append-only: one immutable JSON
 * object per form submission, never edited after write. `submittedAt` and the
 * `leads/{yyyy-mm}/...` pathname convention (see `saveLead` below) exist so a
 * future admin view or CRM sync job can page through a month at a time with
 * `list({ prefix: "leads/2026-07/" })` without needing a real database.
 *
 * If a later feature needs mutable state per lead (e.g. "contacted" /
 * "closed" status), the cleanest fit for Blob is a *second* object per lead
 * at a stable pathname (e.g. `leads/status/{id}.json`) written with
 * `allowOverwrite: true` — keep the original submission immutable and layer
 * status on top, rather than rewriting the submission record itself.
 */
export interface LeadRecord {
  /** `${epochMillis}-${8-char uuid segment}` — sortable and unique without a DB sequence. */
  id: string;
  /** ISO 8601, set server-side at write time (never trust a client timestamp). */
  submittedAt: string;
  zip: string;
  address: string;
  name: string;
  phone: string;
  email: string | null;
  /** LeadForm CONDITIONS value, e.g. "move-in-ready" | "major-repairs" | "not-livable" */
  condition: string;
  /** LeadForm REASONS value, e.g. "foreclosure" | "inherited" | "landlord" */
  reason: string;
  /** LeadForm SOURCES label, or the free-text "other" entry. */
  howDidYouFindUs: string;
  smsEmailConsent: boolean;
  /** Resolved by routeZip() — a city/state pair, or "regional intake" if no zip match. */
  territory: string;
  priority: "high" | "standard";
  status: "new";
  source: "web";
}

export type NewLeadInput = Omit<
  LeadRecord,
  "id" | "submittedAt" | "status" | "source"
>;

export interface SaveLeadResult {
  ok: boolean;
  pathname?: string;
  id?: string;
  error?: string;
}

/**
 * Persists a submitted lead as its own JSON blob.
 *
 * `access: "private"` keeps PII (name, phone, email, address) unreachable by
 * a guessable URL — reading a private blob back requires the store's
 * read/write token, the same credential this function already uses to write,
 * so nothing extra is exposed by choosing private over public here.
 *
 * Failure is returned, not thrown: a Blob outage shouldn't be the reason a
 * seller's submission fails in front of them. The caller decides how loudly
 * to surface it server-side.
 */
export async function saveLead(input: NewLeadInput): Promise<SaveLeadResult> {
  const submittedAt = new Date().toISOString();
  const id = `${Date.now()}-${randomUUID().slice(0, 8)}`;
  const yearMonth = submittedAt.slice(0, 7); // "2026-07"
  const pathname = `leads/${yearMonth}/${id}.json`;

  const record: LeadRecord = {
    ...input,
    id,
    submittedAt,
    status: "new",
    source: "web",
  };

  try {
    await put(pathname, JSON.stringify(record, null, 2), {
      access: "private",
      contentType: "application/json",
      addRandomSuffix: false,
    });
    return { ok: true, pathname, id };
  } catch (err) {
    console.error("[leads:blob] failed to persist lead", err);
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown storage error",
    };
  }
}
