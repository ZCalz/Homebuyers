import type { StateData } from "./types";

export const virginia: StateData = {
  slug: "virginia",
  name: "Virginia",
  abbr: "VA",
  phone: "+15712760986",
  phoneDisplay: "(571) 276-0986",
  image: "/images/region-virginia.png",
  imageAlt: "A brick colonial-style suburban home on a leafy Northern Virginia street",
  heroBlurb:
    "From NoVA townhouses to Richmond four-squares, our Virginia buyers move at the speed of the Commonwealth's fast, non-judicial foreclosure clock — so you don't have to.",
  intro:
    "Virginia is a non-judicial foreclosure state, which means a lender can move from missed payments to auction in a matter of weeks — far faster than in Maryland or DC. That speed is exactly why homeowners here need a buyer who can close in days, not months. We buy houses across Northern Virginia, Richmond, and Hampton Roads: inherited properties, military relocations, tenant headaches, and houses that simply need too much work to list.",
  regulationNote: {
    title: "Virginia foreclosures move fast. So do we.",
    body: "Because Virginia allows non-judicial foreclosure under a deed of trust, a trustee's sale can be scheduled with as little as 60 days of missed-payment history and roughly two weeks of published notice. If you've received a notice of trustee sale, the window to sell conventionally has usually already closed — but a cash sale can still complete before auction. We've closed pre-auction purchases in as few as 10 days, paying off the loan and returning the remaining equity to the seller.",
  },
  cities: [
    {
      slug: "arlington",
      name: "Arlington",
      county: "Arlington",
      stateSlug: "virginia",
      neighborhoods: ["Clarendon", "Columbia Pike", "Shirlington", "Ballston"],
      landmark: "the Pentagon",
      zips: ["22201", "22204", "22206"],
      lat: 38.8816,
      lng: -77.091,
      medianDaysToClose: 22,
      intro:
        "Arlington land is worth more than most of the houses sitting on it, which means a dated Columbia Pike rambler or an original-condition brick colonial near Clarendon can be worth serious money without a single repair. We make cash offers on Arlington properties as-is — including teardowns, estate homes, and condos with special-assessment problems.",
      localAngle:
        "Arlington's constant military and federal turnover means PCS orders and sudden relocations drive many of our purchases here. If you're on orders with a report date, we can align the closing to the day you need — and if the house has a VA loan on it, we coordinate the payoff so your entitlement is restored for your next duty station.",
      testimonial: {
        quote:
          "PCS to San Diego with five weeks' notice. They closed on our Columbia Pike condo in eighteen days and worked around the movers.",
        name: "Capt. J. Alvarez",
        area: "Columbia Pike",
      },
      nearby: ["fairfax", "woodbridge"],
    },
    {
      slug: "fairfax",
      name: "Fairfax",
      county: "Fairfax",
      stateSlug: "virginia",
      neighborhoods: ["Annandale", "Burke", "Centreville", "Falls Church"],
      landmark: "George Mason University",
      zips: ["22030", "22031", "22032", "22003"],
      lat: 38.8462,
      lng: -77.3064,
      medianDaysToClose: 23,
      intro:
        "Fairfax County's 1970s and 80s subdivisions are hitting the age where everything fails at once — roofs, HVAC, siding, and the original windows. If your Burke or Annandale home needs a top-to-bottom refresh you'd rather not fund, we'll buy it in current condition, with no contractor quotes and no punch lists.",
      localAngle:
        "Many Fairfax subdivisions carry active HOAs, and unpaid assessments become liens that stall conventional closings. We routinely purchase homes with HOA arrears, resolving the lien from proceeds at settlement so the seller never has to bring money to the table.",
      testimonial: {
        quote:
          "Original owners since 1979 and the house showed it. No staging, no open houses — just a fair number and a settlement date we picked.",
        name: "The Nguyen Family",
        area: "Annandale",
      },
      nearby: ["arlington", "woodbridge"],
    },
    {
      slug: "richmond",
      name: "Richmond",
      county: "Richmond City",
      stateSlug: "virginia",
      neighborhoods: ["Church Hill", "Northside", "Manchester", "Fulton"],
      landmark: "the James River",
      zips: ["23223", "23222", "23224"],
      lat: 37.5407,
      lng: -77.436,
      medianDaysToClose: 19,
      intro:
        "Richmond's Church Hill and Northside blocks are full of hundred-year-old four-squares and Italianate rowhouses — gorgeous bones, brutal repair costs. We buy Richmond houses in every condition: fire-damaged shells in Fulton, tenant-occupied doubles on the Northside, and inherited family homes that have sat vacant since probate opened.",
      localAngle:
        "The City of Richmond actively enforces its vacant building registry, and fees escalate the longer a property sits empty. If you've received a registry notice or accumulating code citations, a direct sale stops the meter — we take over the property and its compliance obligations the day we close.",
      testimonial: {
        quote:
          "The Church Hill house had been vacant since my uncle passed and the city notices kept coming. They closed in two weeks and dealt with the registry themselves.",
        name: "Tamika J.",
        area: "Church Hill",
      },
      nearby: ["norfolk", "fairfax"],
    },
    {
      slug: "norfolk",
      name: "Norfolk",
      county: "Norfolk City",
      stateSlug: "virginia",
      neighborhoods: ["Ocean View", "Park Place", "Berkley", "Wards Corner"],
      landmark: "Naval Station Norfolk",
      zips: ["23503", "23508", "23523"],
      lat: 36.8508,
      lng: -76.2859,
      medianDaysToClose: 20,
      intro:
        "Norfolk is a Navy town, and Navy timelines don't wait for the spring market. Between PCS moves, deployment schedules, and coastal properties with rising insurance costs, Hampton Roads homeowners often need certainty more than they need top dollar from a six-month listing. We buy Norfolk houses as-is with closings timed to your orders.",
      localAngle:
        "Recurrent tidal flooding in Ocean View and Berkley has pushed flood insurance premiums up sharply, and financed buyers increasingly walk when they see the quotes. Cash purchases carry no lender insurance requirements — we underwrite the flood risk ourselves and it's reflected transparently in our offer.",
      testimonial: {
        quote:
          "Deploying in a month, tenant just moved out, house needed work I couldn't manage from a carrier. Signed everything electronically and it was done.",
        name: "PO1 D. Whitfield",
        area: "Ocean View",
      },
      nearby: ["richmond", "woodbridge"],
    },
    {
      slug: "woodbridge",
      name: "Woodbridge",
      county: "Prince William",
      stateSlug: "virginia",
      neighborhoods: ["Lake Ridge", "Dale City", "Occoquan", "Dumfries"],
      landmark: "the Occoquan River",
      zips: ["22191", "22192", "22193"],
      lat: 38.6582,
      lng: -77.2497,
      medianDaysToClose: 21,
      intro:
        "Prince William County was hit harder than almost anywhere in the region during the last downturn, and some Dale City and Lake Ridge homeowners are still carrying loans and repairs from that era. Whether you're underwater on payments, splitting assets in a divorce, or done being a long-distance landlord, we buy Woodbridge houses for cash on your timeline.",
      localAngle:
        "Because Virginia's trustee-sale process moves so quickly, Prince William homeowners in default often have less than 90 days between the first lender letter and the auction date. We maintain relationships with local trustees and can frequently negotiate a short postponement while our purchase — which pays the loan off in full — completes.",
      testimonial: {
        quote:
          "The auction was three weeks out when I called. They talked to the trustee, closed in fifteen days, and I walked away with my equity instead of losing it.",
        name: "Sandra L.",
        area: "Dale City",
      },
      nearby: ["fairfax", "arlington"],
    },
  ],
};
