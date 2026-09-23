import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cash Home Buyer FAQs | Sell House As-Is Fast",
  description:
    "Get answers to cash home buyer questions in DC, MD, VA & DE: selling without realtors, closing costs, timelines, liens & as-is pricing. Call with questions.",
  alternates: { canonical: "/faq" },
};

const faqCategories = [
  {
    category: "Selling Without a Realtor & Commission Savings",
    items: [
      {
        q: "How do I sell my house without a realtor?",
        a: "To sell your house without a realtor, you can either market the property For Sale By Owner (FSBO) or sell directly to an established cash home buyer like USHomeBuy. Selling directly eliminates the standard 5% to 6% agent commission (saving $20,000 to $30,000+ on average), avoids months of showings, and bypasses buyer mortgage contingencies. We evaluate the property as-is, make a written cash offer, and close at a licensed local title company.",
      },
      {
        q: "How much does a realtor make when selling my home?",
        a: "Real estate agents typically charge a 5% to 6% commission fee based on the gross sales price of your home, split between the listing broker and buyer's broker. On a $400,000 home, commissions equal $24,000. On a $600,000 home, commissions reach $36,000. When you sell directly to USHomeBuy, there are zero broker commissions, zero listing fees, and zero administrative transaction charges.",
      },
      {
        q: "Do open houses actually sell homes?",
        a: "According to National Association of Realtors data, less than 3% of homes sell directly as a result of an open house. Agents primarily host open houses to meet prospective buyer clients for other properties. Open houses also create security risks and force homeowners to keep their living spaces pristine for strangers. Selling directly to USHomeBuy requires only one private walkthrough with our local buyer.",
      },
      {
        q: "What does under contract mean in real estate?",
        a: "When a home is 'under contract' (or 'active under contract'), the seller has accepted an offer and both parties have signed a purchase agreement. In traditional real estate, the contract is subject to financing, appraisal, and home inspection contingencies — allowing buyers to cancel or demand tens of thousands in repairs. With USHomeBuy, our cash contracts have zero financing or inspection contingencies.",
      },
    ],
  },
  {
    category: "How Cash Home Buyers & As-Is Offers Work",
    items: [
      {
        q: "What are the best companies that buy houses for cash?",
        a: "The best companies that buy houses for cash are reputable, local investment companies that purchase directly using their own private funds rather than middleman wholesalers who resell contracts. USHomeBuy is a dedicated regional direct buyer in Washington DC, Maryland, Virginia, and Delaware. We provide transparent mathematical breakdowns, pay standard closing costs, buy strictly 100% as-is, and provide a 3-day review window after signing.",
      },
      {
        q: "How do you calculate your cash offer price?",
        a: "We calculate every cash offer using a transparent 3-part formula: (1) After Repair Value (ARV) based on recent sales of renovated homes in your immediate neighborhood, minus (2) realistic contractor repair and material costs from our single walkthrough, minus (3) our standard operating and holding margin. We show you all three numbers in writing so you can verify the math.",
      },
      {
        q: "Will your cash offer match what an agent says my house is worth?",
        a: "Usually not, and we are completely upfront about why. An agent estimates the potential retail price of your home fully renovated, staged, and marketed for months on the MLS. We provide a guaranteed cash price for the property today, in its current as-is condition. For homeowners who want to avoid spending months and thousands of dollars on repairs and commissions, a direct cash sale provides certainty.",
      },
      {
        q: "What does selling a house 'as-is' mean?",
        a: "'As-is' means you sell the property in its exact current condition. You are not required to make any structural, electrical, plumbing, or roof repairs. You do not need to clean, paint, or stage the home, and you can leave behind any unwanted furniture, appliances, or debris. Our crews handle all cleanout and renovations after settlement.",
      },
      {
        q: "Is your cash offer negotiable?",
        a: "Yes. Our offer is built from comparable sales and estimated repair costs. If you have documentation or receipts showing recent capital improvements (such as a newly installed roof, updated HVAC system, or waterproofing), let us know and we will adjust the offer math accordingly.",
      },
    ],
  },
  {
    category: "Closing Costs, Liens & Timelines",
    items: [
      {
        q: "Who pays closing costs: the buyer or the seller?",
        a: "In traditional real estate sales, sellers typically pay 2% to 3% in closing costs (title search, settlement fees, state and county transfer taxes) on top of 6% agent commissions. When you sell to USHomeBuy, we cover 100% of standard seller closing costs, ensuring the offer price is the exact net figure you receive on your settlement statement.",
      },
      {
        q: "How long does it take to sell a house to a cash buyer?",
        a: "While a traditional retail home sale takes an average of 60 to 90+ days, USHomeBuy can close in as little as 7 to 14 business days. The speed is determined by the local title company's title search. If you need more time to pack, locate a new home, or settle an estate, we hold the closing date open at your locked-in cash price for as long as you need.",
      },
      {
        q: "Can I sell a house with a lien, back taxes, or code violations?",
        a: "Yes. We frequently purchase houses with mechanics liens, second mortgages, delinquent real estate taxes, municipal code citations, or HOA arrears across DC, MD, VA, and DE. The local closing title company coordinates formal payoff figures and settles them directly out of the sale proceeds at closing.",
      },
      {
        q: "Tax appraisal vs. market value: how do they differ?",
        a: "A county tax appraisal is an assessed value calculated by local government assessors strictly to determine annual property taxes, often lagging real market conditions by years. Market value reflects what a ready, willing, and able buyer will pay in today's open market. We evaluate current market comps, physical condition, and neighborhood demand rather than tax assessments.",
      },
      {
        q: "How does the closing process work at the title company?",
        a: "Settlement takes place with a reputable, licensed local title company or real estate attorney in your county. The title company acts as a neutral fiduciary, verifies clear title, prepares the deed transfer, payoffs any existing loans, and wires your net proceeds directly into your bank account.",
      },
    ],
  },
  {
    category: "Special Situations: Foreclosure, Tenants & Probate",
    items: [
      {
        q: "Can I sell an inherited house if probate is still open?",
        a: "Yes. We regularly purchase inherited homes throughout DC, Maryland, Virginia, and Delaware during probate. We coordinate with your probate attorney or personal representative to ensure all court orders, Letters of Administration, and heir consents are handled properly for a smooth closing.",
      },
      {
        q: "I am behind on mortgage payments. Can a cash sale stop foreclosure?",
        a: "Yes. Selling your home for cash before the scheduled auction date pays off your mortgage balance, stops the foreclosure proceeding, protects your credit rating, and allows you to pocket any remaining equity. Virginia moves quickly with trustee sales, while MD, DE, and DC involve court proceedings — contact us as early as possible so we can coordinate with your lender.",
      },
      {
        q: "Can I sell a rental property with difficult or non-paying tenants?",
        a: "Yes. Dealing with problem tenants, lease disputes, or eviction moratoriums is one of our specialties. In DC, we handle the full Tenant Opportunity to Purchase Act (TOPA) process. In Maryland, Virginia, and Delaware, tenant leases transfer with the deed and our team takes over all tenant management upon closing.",
      },
      {
        q: "What types of residential properties do you buy?",
        a: "We buy single-family detached houses, brick townhomes and rowhouses, duplexes, small multi-family buildings (up to 4 units), and manufactured homes situated on privately-owned land across DC, MD, VA, and DE.",
      },
      {
        q: "How does selling to USHomeBuy protect my privacy?",
        a: "Listing on the MLS puts photos of your home, bedrooms, and personal belongings on Zillow, Redfin, and social media for thousands to see. With USHomeBuy, your sale is 100% private and confidential. There are no 'For Sale' yard signs, no public lockboxes, and no public listings.",
      },
    ],
  },
];

// Flat list for JSON-LD schema
const allFaqs = faqCategories.flatMap((c) => c.items);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
        <Breadcrumbs items={[{ name: "FAQ", url: "/faq" }]} />
      </div>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-8 pb-12">
        <h1 className="font-display text-4xl sm:text-5xl text-pine-950">
          Frequently asked questions about selling your house fast
        </h1>
        <p className="mt-4 text-lg text-pine-800/85 leading-relaxed">
          Clear, transparent answers about cash home buyers, selling without a realtor, closing costs, timelines, and as-is property purchases across DC, Maryland, Virginia, and Delaware.
        </p>

        <div className="mt-12 space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="font-display text-2xl text-pine-900 border-b border-pine-200 pb-3">
                {cat.category}
              </h2>
              <div className="mt-6 space-y-4">
                {cat.items.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl bg-white ring-1 ring-pine-900/10 px-6 py-5 shadow-sm hover:shadow transition-shadow"
                  >
                    <summary className="cursor-pointer font-bold text-pine-950 list-none flex justify-between items-center gap-4 text-base sm:text-lg">
                      <span>{f.q}</span>
                      <span
                        aria-hidden
                        className="text-pine-600 group-open:rotate-45 transition-transform text-2xl font-light leading-none shrink-0"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-pine-800/85 border-t border-pine-50 pt-3">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-8">
        <CtaBand heading="Have a question about your specific property?" sub="Speak directly with our local acquisition specialists in DC, MD, VA, or DE." />
      </section>
    </>
  );
}

