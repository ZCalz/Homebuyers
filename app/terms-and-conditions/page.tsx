import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `The terms that govern your use of ${SITE.name} and any offer you request through our site.`,
  alternates: { canonical: "/terms-and-conditions" },
};

const LAST_UPDATED = "July 14, 2026";

export default function TermsAndConditionsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs items={[{ name: "Terms and Conditions", url: "/terms-and-conditions" }]} />
      </div>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-8 pb-20">
        <h1 className="font-display text-4xl text-pine-950">Terms and Conditions</h1>
        <p className="mt-3 text-sm text-pine-700/70">Last updated: {LAST_UPDATED}</p>

        <p className="mt-6 text-lg text-pine-800/85 leading-relaxed">
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use
          of {SITE.url.replace("https://", "")} (the &ldquo;Site&rdquo;),
          operated by {SITE.legalEntity}, doing business as {SITE.name}{" "}
          (&ldquo;{SITE.legalEntity}
          ,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          By visiting the Site or submitting a form, you agree to these
          Terms. If you do not agree, please do not use the Site.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Who We Are
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          {SITE.legalEntity}, doing business as {SITE.name}, is a direct
          home-buying company with local acquisition teams serving
          Washington DC, Maryland, Virginia, and Delaware. We evaluate
          properties and, when a fit makes sense, purchase them directly
          with our own funds. We are not a real estate brokerage and do
          not list properties on your behalf.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Requesting an Offer Is Not a Purchase Agreement
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          Submitting a form, receiving a call, or receiving a preliminary
          or verbal offer through the Site does not create a binding
          obligation for either party to buy or sell any property. A sale
          is only binding once both parties sign a written purchase and
          sale agreement. Any figures, timelines, or offer ranges shown or
          discussed before that point are estimates and subject to change
          based on a property walkthrough, title review, and other
          diligence.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Using the Site
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          You agree to provide accurate information about yourself and the
          property when using our forms, to use the Site only for
          legitimate purposes related to evaluating a potential sale, and
          not to interfere with the Site&apos;s operation, probe it for
          vulnerabilities, or scrape its content. We may refuse service,
          decline to make an offer, or terminate access to the Site at our
          discretion.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Communications Consent
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          If you opt in on our lead form, you consent to receive email and
          SMS messages from us about your request and our services,
          consistent with our{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-2 hover:text-pine-950"
          >
            Privacy Policy
          </Link>
          . Message and data rates may apply, message frequency varies,
          and consent is never a condition of any purchase. Reply
          &ldquo;STOP&rdquo; to any text message to opt out of SMS at any
          time.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          No Professional Advice
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          Content on the Site — including information about local
          regulations, timelines, or the general process of selling a
          house — is provided for general informational purposes only and
          is not legal, tax, financial, or real estate advice. Please
          consult a licensed professional about your specific situation
          before making a decision.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Intellectual Property
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          The Site&apos;s text, design, logos, and other content are owned
          by {SITE.legalEntity} or its licensors and are protected by
          intellectual property laws. You may view and use the Site for
          your own personal, non-commercial purpose of evaluating a sale,
          but you may not reproduce, distribute, or create derivative
          works from Site content without our permission.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Disclaimers &amp; Limitation of Liability
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          The Site is provided &ldquo;as is&rdquo; without warranties of
          any kind, express or implied. We do not guarantee that the Site
          will be uninterrupted, error-free, or that any estimate shown
          will match a final written offer. To the fullest extent
          permitted by law, {SITE.legalEntity} is not liable for any indirect,
          incidental, or consequential damages arising from your use of
          the Site or reliance on information it contains.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Governing Law
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          These Terms are governed by the laws of the state in which the
          relevant property is located, without regard to conflict-of-law
          principles, except where federal law applies.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Changes to These Terms
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          We may update these Terms from time to time. We will post the
          revised version on this page with an updated &ldquo;Last
          updated&rdquo; date. Continued use of the Site after a change
          means you accept the revised Terms.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Contact Us
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          Questions about these Terms? Reach us at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="underline underline-offset-2 hover:text-pine-950"
          >
            {SITE.email}
          </a>{" "}
          or{" "}
          <a
            href={`tel:${SITE.phone}`}
            className="underline underline-offset-2 hover:text-pine-950"
          >
            {SITE.phoneDisplay}
          </a>
          . See also our{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-2 hover:text-pine-950"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <p className="mt-10 text-xs text-pine-700/60 leading-relaxed border-t border-pine-900/10 pt-6">
          Demonstration project: these terms are sample content for a
          portfolio site and have not been reviewed by an attorney. Do not
          rely on them as actual terms of service for a live business.
        </p>
      </section>
    </>
  );
}
