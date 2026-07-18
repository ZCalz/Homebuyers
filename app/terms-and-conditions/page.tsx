import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `The terms that govern your use of ${SITE.name} and any offer you request through our site.`,
  alternates: { canonical: "/terms-and-conditions" },
};

const EFFECTIVE_DATE = "July 18, 2026";
const LAST_UPDATED = "July 18, 2026";

export default function TermsAndConditionsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs items={[{ name: "Terms and Conditions", url: "/terms-and-conditions" }]} />
      </div>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-8 pb-20">
        <h1 className="font-display text-4xl text-pine-950">Terms and Conditions</h1>
        <p className="mt-3 text-sm text-pine-700/70">
          Effective date: {EFFECTIVE_DATE} · Last updated: {LAST_UPDATED}
        </p>

        <p className="mt-6 text-lg text-pine-800/85 leading-relaxed">
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your
          access to and use of the {SITE.name} website{" "}
          {SITE.url.replace("https://", "")} (the &ldquo;Site&rdquo;) and
          any services offered by {SITE.legalEntity}, doing business as{" "}
          {SITE.name} (&ldquo;{SITE.name},&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing the Site
          or submitting a form, you agree to be bound by these Terms. If
          you do not agree, please do not use the Site.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          1. Who We Are
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          {SITE.name} is a real estate investment company that purchases
          residential properties directly from homeowners. We are not a
          real estate brokerage, and we do not list properties on behalf
          of sellers. Any cash offer we provide reflects our own interest
          in purchasing your property directly, not a market listing
          valuation.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          2. No Obligation
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          Submitting a form, requesting a cash offer, or speaking with a{" "}
          {SITE.name} representative does not obligate you to sell your
          property, and does not obligate us to purchase it. Any offer we
          extend is non-binding until both parties execute a written
          purchase agreement.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          3. Consent to Contact
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          By submitting your information through the Site, you expressly
          consent to be contacted by {SITE.name}, its agents, and assigns
          by phone, text message (SMS), and email at the number(s) and
          address(es) provided, including through the use of an automatic
          telephone dialing system or prerecorded/artificial voice
          messages, for purposes related to your inquiry and our
          services. Message and data rates may apply. You may revoke this
          consent at any time by replying &ldquo;STOP&rdquo; to a text
          message or contacting us directly (see Section 11).
        </p>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          Your submission of contact information constitutes your
          electronic signature and express written consent under
          applicable telemarketing and consumer protection laws,
          including the Telephone Consumer Protection Act (TCPA).
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          4. Accuracy of Information
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          Any cash offer provided through the Site is preliminary and
          based solely on the information you provide and publicly
          available data. Final offers are subject to an in-person or
          virtual property evaluation. You represent that any
          information you submit is accurate and that you are the legal
          owner of the property in question, or are authorized to act on
          the owner&apos;s behalf.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          5. No Professional Advice
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          Nothing on the Site constitutes legal, financial, tax, or real
          estate advice. We encourage you to consult with a licensed
          attorney, financial advisor, or real estate professional before
          making decisions about selling your property.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          6. Intellectual Property
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          All content on the Site, including text, graphics, logos, and
          images, is the property of {SITE.legalEntity} or its licensors
          and is protected by applicable copyright and trademark laws.
          You may not reproduce, distribute, or create derivative works
          from Site content without our prior written consent.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          7. Third-Party Links
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          The Site may contain links to third-party websites for your
          convenience. We do not control and are not responsible for the
          content, accuracy, or practices of any linked third-party site.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          8. Disclaimer of Warranties
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          The Site and all content, offers, and information provided
          through it are offered &ldquo;as is&rdquo; and &ldquo;as
          available,&rdquo; without warranties of any kind, express or
          implied, including but not limited to warranties of
          merchantability, fitness for a particular purpose, or
          non-infringement. We do not warrant that the Site will be
          uninterrupted, error-free, or secure.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          9. Limitation of Liability
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          To the fullest extent permitted by law, {SITE.legalEntity} and
          its officers, employees, and agents shall not be liable for any
          indirect, incidental, special, consequential, or punitive
          damages arising out of or relating to your use of the Site or
          any transaction contemplated through it. Our total liability
          for any claim arising from your use of the Site shall not
          exceed the amount, if any, you paid to us in connection with
          the claim.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          10. Governing Law and Disputes
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          These Terms are governed by the laws of the Commonwealth of
          Virginia, without regard to conflict-of-law principles. Any
          dispute arising out of or relating to these Terms or the Site
          shall be resolved in the state or federal courts located in
          Virginia, and you consent to the personal jurisdiction of such
          courts.
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          11. Contact Us
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          Questions about these Terms can be directed to:
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
            href="/privacy-policy"
            className="underline underline-offset-2 hover:text-pine-950"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <h2 className="mt-10 font-display text-2xl text-pine-950">
          12. Changes to These Terms
        </h2>
        <p className="mt-3 text-pine-800/85 leading-relaxed">
          We may revise these Terms at any time by updating this page.
          Your continued use of the Site after changes are posted
          constitutes your acceptance of the revised Terms. We encourage
          you to review this page periodically.
        </p>
      </section>
    </>
  );
}
