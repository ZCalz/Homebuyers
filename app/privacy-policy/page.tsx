import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects the information you share with us.`,
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "July 14, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs items={[{ name: "Privacy Policy", url: "/privacy-policy" }]} />
      </div>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-8 pb-20">
        <h1 className="font-display text-4xl text-pine-950">Privacy Policy</h1>
        <p className="mt-3 text-sm text-pine-700/70">Last updated: {LAST_UPDATED}</p>

        <p className="mt-6 text-lg text-pine-800/85 leading-relaxed">
          This Privacy Policy explains how {SITE.legalEntity}, doing
          business as {SITE.name} (&ldquo;{SITE.legalEntity}
          ,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
          collects, uses, shares, and protects information when you visit{" "}
          {SITE.url.replace("https://", "")} (the &ldquo;Site&rdquo;) or
          submit a request for a cash offer on your property. By using the
          Site or submitting a form, you agree to the practices described
          here.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Information We Collect
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          We collect information in three ways: what you give us directly,
          what your device sends us automatically, and what a third-party
          service provides while assisting our forms.
        </p>
        <ul className="mt-4 space-y-2 text-pine-800/85 leading-relaxed list-disc pl-5">
          <li>
            <span className="font-semibold text-pine-900">
              Information you provide:
            </span>{" "}
            your name, phone number, email address, property address, zip
            code, property condition, reason for selling, how you heard
            about us, and any other details you choose to share when you
            request an offer, call us, or email us.
          </li>
          <li>
            <span className="font-semibold text-pine-900">
              Information collected automatically:
            </span>{" "}
            IP address, browser and device type, pages visited, referring
            page, and general usage data, typically gathered through
            standard web server logs and analytics cookies.
          </li>
          <li>
            <span className="font-semibold text-pine-900">
              Third-party address lookup:
            </span>{" "}
            as you type a property address into our form, we send that
            partial text to OpenStreetMap&apos;s Nominatim geocoding
            service to suggest matching addresses. That service receives
            only the text you&apos;ve typed, not your name or contact
            details, and operates under its own privacy practices.
          </li>
        </ul>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          How We Use Your Information
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          We use the information we collect to route your request to the
          local acquisition team covering your zip code, prepare and
          communicate a cash offer, respond to your questions, schedule a
          walkthrough, service any resulting purchase, improve the Site and
          our offer process, and meet legal and accounting obligations. We
          do not use your property or contact information to make
          decisions about you outside the scope of evaluating and
          purchasing your property.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Email &amp; SMS Communications
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          If you check the consent box on our lead form, you agree to join
          our email list and receive SMS messages from {SITE.legalEntity}{" "}
          (doing business as {SITE.name}) about your request and our
          latest offers and services. Message and
          data rates may apply, and message frequency varies. Consent to
          receive marketing messages is never a condition of getting an
          offer or purchasing our services. You can opt out of SMS at any
          time by replying &ldquo;STOP&rdquo; to any message, and opt out
          of email by using the unsubscribe link in any message or by
          contacting us directly. We may still contact you by phone or
          email regarding an active offer or transaction even if you opt
          out of marketing messages.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          How We Share Information
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          We share information with the local {SITE.name} acquisition team
          responsible for your zip code, and with service providers who
          help us operate the Site and our business — including hosting,
          customer relationship management, email/SMS delivery, and the
          address-lookup provider described above. These providers are
          only permitted to use your information to perform services on
          our behalf. We may also disclose information if required by
          law, to protect our rights, or in connection with a merger,
          financing, or sale of business assets. We do not sell your
          personal information to third parties for their own marketing
          purposes.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Cookies &amp; Tracking
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          The Site uses basic cookies and similar technologies to remember
          your progress through our lead form and to understand how
          visitors use the Site. You can control or disable cookies through
          your browser settings; doing so may affect some Site
          functionality, such as multi-step form progress.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Data Retention
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          We retain the information you submit for as long as needed to
          respond to your request, service any resulting transaction, and
          meet our legal, accounting, and record-keeping obligations. If
          you ask us to delete your information and we have no legal
          obligation to keep it, we will do so.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Your Rights &amp; Choices
        </h2>
        <ul className="mt-4 space-y-2 text-pine-800/85 leading-relaxed list-disc pl-5">
          <li>Ask what personal information we hold about you and request a copy.</li>
          <li>Ask us to correct inaccurate information.</li>
          <li>Ask us to delete your information, subject to legal and record-keeping exceptions.</li>
          <li>Opt out of email and SMS marketing at any time, as described above.</li>
          <li>Depending on your state of residence, you may have additional rights under laws such as the California Consumer Privacy Act.</li>
        </ul>
        <p className="mt-4 text-pine-800/85 leading-relaxed">
          To exercise any of these rights, contact us using the details
          below. We will respond within a reasonable time.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Children&apos;s Privacy
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          The Site is intended for adults evaluating the sale of real
          property. We do not knowingly collect personal information from
          anyone under 18. If you believe a minor has provided us
          information, contact us and we will delete it.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Data Security
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          We use reasonable administrative and technical safeguards to
          protect the information you share with us. No method of
          transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Changes to This Policy
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          We may update this Privacy Policy from time to time. We will
          post the revised version on this page with an updated
          &ldquo;Last updated&rdquo; date. Continued use of the Site after
          a change means you accept the revised policy.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          Contact Us
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          Questions about this policy or your information? Reach us at{" "}
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
            href="/terms-and-conditions"
            className="underline underline-offset-2 hover:text-pine-950"
          >
            Terms and Conditions
          </Link>
          .
        </p>

        <p className="mt-10 text-xs text-pine-700/60 leading-relaxed border-t border-pine-900/10 pt-6">
          Demonstration project: this policy is sample content for a
          portfolio site and has not been reviewed by an attorney. Do not
          rely on it as an actual privacy policy for a live business.
        </p>
      </section>
    </>
  );
}
