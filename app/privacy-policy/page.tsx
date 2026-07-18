import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects the information you share with us.`,
  alternates: { canonical: "/privacy-policy" },
};

const EFFECTIVE_DATE = "July 18, 2026";
const LAST_UPDATED = "July 18, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs items={[{ name: "Privacy Policy", url: "/privacy-policy" }]} />
      </div>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-8 pb-20">
        <h1 className="font-display text-4xl text-pine-950">Privacy Policy</h1>
        <p className="mt-3 text-sm text-pine-700/70">
          Effective date: {EFFECTIVE_DATE} · Last updated: {LAST_UPDATED}
        </p>

        <p className="mt-6 text-lg text-pine-800/85 leading-relaxed">
          {SITE.legalEntity}, doing business as {SITE.name} (&ldquo;
          {SITE.name},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;), respects your privacy. This Privacy Policy
          explains how we collect, use, disclose, and protect information
          when you visit {SITE.url.replace("https://", "")}, submit a form,
          call us, text us, or otherwise communicate with us (collectively,
          the &ldquo;Site&rdquo;).
        </p>
        <p className="mt-4 text-pine-800/85 leading-relaxed">
          By accessing or using the Site, or by submitting your information
          to us, you agree to the terms of this Privacy Policy.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          1. Information We Collect
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          <span className="font-semibold text-pine-900">
            Information you provide directly.
          </span>{" "}
          When you fill out a form, request a cash offer, or contact us, we
          may collect:
        </p>
        <ul className="mt-3 space-y-1.5 text-pine-800/85 leading-relaxed list-disc pl-5">
          <li>Name, email address, mailing address, and phone number</li>
          <li>
            Property address and details (condition, square footage,
            occupancy status, etc.)
          </li>
          <li>
            Mortgage, lien, tax, repair, or other property-related
            information you voluntarily share
          </li>
          <li>Any other information you choose to provide in communications with us</li>
        </ul>
        <p className="mt-4 text-pine-800/85 leading-relaxed">
          <span className="font-semibold text-pine-900">
            Information collected automatically.
          </span>{" "}
          When you visit the Site, we may automatically collect:
        </p>
        <ul className="mt-3 space-y-1.5 text-pine-800/85 leading-relaxed list-disc pl-5">
          <li>IP address, browser type, device type, and operating system</li>
          <li>Pages visited, referring pages, and time spent on the Site</li>
          <li>Cookies and similar tracking technologies (see Section 5)</li>
        </ul>
        <p className="mt-4 text-pine-800/85 leading-relaxed">
          <span className="font-semibold text-pine-900">
            Third-party address lookup.
          </span>{" "}
          As you type a property address into our form, we send that
          partial text to OpenStreetMap&apos;s Nominatim geocoding service
          to suggest matching addresses. That service receives only the
          text you&apos;ve typed, not your name or contact details, and
          operates under its own privacy practices.
        </p>
        <p className="mt-4 text-pine-800/85 leading-relaxed">
          You may browse the Site anonymously; providing personal
          information is only required if you request a cash offer or
          contact us directly.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          2. How We Use Your Information
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">We use the information we collect to:</p>
        <ul className="mt-3 space-y-1.5 text-pine-800/85 leading-relaxed list-disc pl-5">
          <li>Evaluate your property and prepare a cash offer</li>
          <li>Communicate with you by phone, email, or text message about your inquiry or offer</li>
          <li>Improve and maintain the Site</li>
          <li>Comply with legal obligations and enforce our Terms and Conditions</li>
          <li>Send you marketing communications about our services, where permitted (see Section 3)</li>
        </ul>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          3. SMS / Text Message Consent
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          By submitting a form on the Site, you consent to receive SMS
          text messages from {SITE.name} related to your inquiry and our
          services. Message and data rates may apply. Message frequency
          varies. You may opt out at any time by replying
          &ldquo;STOP&rdquo; to any text message. Reply &ldquo;HELP&rdquo;
          for assistance. Consent to receive text messages is not a
          condition of any purchase or service.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          4. Do We Sell or Share Your Information?
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          We do not sell, trade, or rent your personally identifiable
          information to third parties for their independent marketing
          purposes.
        </p>
        <p className="mt-3 text-pine-800/85 leading-relaxed">We may share your information with:</p>
        <ul className="mt-3 space-y-1.5 text-pine-800/85 leading-relaxed list-disc pl-5">
          <li>
            Trusted third-party service providers who help us operate the
            Site, process your request, or facilitate a transaction (e.g.,
            title companies, closing attorneys, contractors performing
            inspections), who are required to keep your information
            confidential
          </li>
          <li>Parties involved in a property transaction you have engaged with us on</li>
          <li>Law enforcement or regulators, if required by law, subpoena, or legal process</li>
          <li>
            A successor entity, in the event {SITE.legalEntity} is
            acquired by, merged with, or sells substantially all of its
            assets to another company — you will be notified of any such
            change and how it affects your information
          </li>
        </ul>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          5. Cookies and Tracking Technologies
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          The Site may use cookies and similar technologies, including
          analytics and remarketing tools such as Google Analytics, Google
          Ads, and Meta/Facebook Pixel, if enabled, to understand Site
          usage and to show relevant ads on other websites based on your
          visit to our Site. These third parties may use their own
          cookies to serve ads based on your prior visits to the Site.
          You can control cookies through your browser settings, and you
          can opt out of Google&apos;s use of cookies for ad
          personalization by visiting Google&apos;s Ads Settings.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          6. Your Privacy Rights
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          Depending on your state of residence, you may have rights under
          state privacy laws (such as those in California, Colorado,
          Connecticut, Virginia, Utah, and others), which may include the
          right to:
        </p>
        <ul className="mt-3 space-y-1.5 text-pine-800/85 leading-relaxed list-disc pl-5">
          <li>Know what personal information we have collected about you</li>
          <li>Request deletion of your personal information</li>
          <li>Correct inaccurate personal information</li>
          <li>Opt out of the sale or sharing of personal information, or targeted advertising</li>
          <li>Not be discriminated against for exercising these rights</li>
        </ul>
        <p className="mt-4 text-pine-800/85 leading-relaxed">
          To exercise any of these rights, contact us using the
          information in Section 10. We will verify your request and
          respond within the timeframe required by applicable law.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          7. Children&apos;s Privacy
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          The Site is not directed to individuals under the age of 18, and
          we do not knowingly collect personal information from children.
          If we learn that we have collected personal information from a
          child without parental consent, we will delete it.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          8. Third-Party Links
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          The Site may contain links to third-party websites. We are not
          responsible for the privacy practices or content of those
          websites. We encourage you to review the privacy policy of any
          third-party site you visit.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          9. Data Security
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          We implement reasonable administrative, technical, and physical
          safeguards designed to protect your personal information.
          However, no method of transmission or storage is 100% secure,
          and we cannot guarantee absolute security.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          10. Contact Us
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          If you have questions about this Privacy Policy or wish to
          exercise your privacy rights, contact us at:
        </p>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          <span className="font-semibold text-pine-900">{SITE.name}</span>
          <br />
          <a
            href={`tel:${SITE.phone}`}
            className="underline underline-offset-2 hover:text-pine-950"
          >
            {SITE.phoneDisplay}
          </a>
          <br />
          <a
            href={`mailto:${SITE.email}`}
            className="underline underline-offset-2 hover:text-pine-950"
          >
            {SITE.email}
          </a>
        </p>
        <p className="mt-4 text-pine-800/85 leading-relaxed">
          See also our{" "}
          <Link
            href="/terms-and-conditions"
            className="underline underline-offset-2 hover:text-pine-950"
          >
            Terms and Conditions
          </Link>
          .
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          11. Changes to This Policy
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          We may update this Privacy Policy from time to time. The
          &ldquo;Last updated&rdquo; date at the top of this page reflects
          the most recent revision. Continued use of the Site after
          changes are posted constitutes acceptance of the revised policy.
        </p>
      </section>
    </>
  );
}
