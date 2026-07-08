import type { StateData } from "./types";

export const delaware: StateData = {
  slug: "delaware",
  name: "Delaware",
  abbr: "DE",
  phone: "+13025550172",
  phoneDisplay: "(302) 555-0172",
  image: "/images/region-delaware.png",
  imageAlt: "A sandy beach-town street lined with shingled cottages leading down to the Delaware shore",
  heroBlurb:
    "From Wilmington rowhomes to Sussex County beach cottages, our Delaware buyers know the state's judicial foreclosure timeline and its no-sales-tax closing math inside out.",
  intro:
    "Delaware may be small, but its three counties are three different markets: Wilmington's urban rowhome blocks, Dover's commuter and base-adjacent neighborhoods, and the Sussex County beach towns where cottages meet development pressure. We buy houses in all three — and because Delaware uses judicial foreclosure with mandatory mediation, sellers behind on payments here usually have a real window to sell with equity intact, if they move before judgment.",
  regulationNote: {
    title: "Delaware foreclosure runs through the courts — use that time.",
    body: "Delaware lenders must sue in Superior Court to foreclose, and homeowners can request the state's Residential Mortgage Foreclosure Mediation Program before judgment. From first filing to sheriff's sale commonly takes many months. That's often enough time to complete a cash sale, pay the loan in full, and keep the deficiency and credit damage off your record entirely — we'll help you map the court timeline against a realistic closing date.",
  },
  cities: [
    {
      slug: "wilmington",
      name: "Wilmington",
      county: "New Castle",
      stateSlug: "delaware",
      neighborhoods: ["Trolley Square", "Hilltop", "Riverside", "Browntown"],
      landmark: "the Wilmington Riverfront",
      zips: ["19801", "19802", "19805"],
      lat: 39.7391,
      lng: -75.5398,
      medianDaysToClose: 18,
      intro:
        "Wilmington's brick rowhome stock ranges from renovated Trolley Square blocks to Riverside houses that have sat vacant for a decade. We buy across that entire spectrum: inherited rowhomes with tangled titles, rentals with non-paying tenants, and properties carrying L&I violations the owner can't afford to cure.",
      localAngle:
        "Wilmington enforces a vacant property registration fee that escalates every year a house sits empty — it can reach thousands annually. If registry fees and code liens are stacking up on a property you can't maintain, a direct sale transfers those obligations to us at closing and stops the escalation immediately.",
      testimonial: {
        quote:
          "The vacant property fees on my mother's Riverside house were growing faster than the house was worth. They bought it liens and all.",
        name: "Charlene B.",
        area: "Riverside",
      },
      nearby: ["newark", "dover"],
    },
    {
      slug: "newark",
      name: "Newark",
      county: "New Castle",
      stateSlug: "delaware",
      neighborhoods: ["College Square", "Brookside", "Christiana", "Bear"],
      landmark: "the University of Delaware",
      zips: ["19702", "19711", "19713"],
      lat: 39.6837,
      lng: -75.7497,
      medianDaysToClose: 21,
      intro:
        "Newark's mix of student rentals and 1960s family subdivisions creates two very different reasons to sell fast: landlords exiting the student-housing business, and longtime Brookside owners facing a whole-house update they don't want to fund. We buy both — leases in place or vacant, updated or untouched since the Nixon administration.",
      localAngle:
        "The City of Newark requires rental permits and regular inspections for student rentals, and losing a permit can zero out a property's income overnight. We purchase rental properties with or without active permits, and existing leases transfer to us at settlement so tenants' school years aren't disrupted.",
      testimonial: {
        quote:
          "Fifteen years of student tenants was enough. They took over the leases mid-semester and I was out before spring break.",
        name: "Paul D.",
        area: "College Square",
      },
      nearby: ["wilmington", "dover"],
    },
    {
      slug: "dover",
      name: "Dover",
      county: "Kent",
      stateSlug: "delaware",
      neighborhoods: ["Rodney Village", "Capitol Park", "Camden", "Cheswold"],
      landmark: "Dover Air Force Base",
      zips: ["19901", "19904"],
      lat: 39.1582,
      lng: -75.5244,
      medianDaysToClose: 20,
      intro:
        "Dover moves on two clocks: state government and Dover Air Force Base. PCS orders, retirements, and estate sales drive most of our Kent County purchases, and our closings flex to match — we've settled in as few as twelve days for airmen on short-notice orders and held closings open for months for estates working through Register of Wills.",
      localAngle:
        "Kent County has a large share of manufactured and modular homes, which many banks won't finance on resale — sharply shrinking the buyer pool for owners who need out. We buy manufactured homes on owned land for cash, where conventional listings routinely stall for lack of financeable buyers.",
      testimonial: {
        quote:
          "Every financed buyer fell through because of the home's classification. These folks paid cash and closed at the Kent County courthouse three weeks later.",
        name: "Rita G.",
        area: "Camden",
      },
      nearby: ["milford", "wilmington"],
    },
    {
      slug: "milford",
      name: "Milford",
      county: "Sussex",
      stateSlug: "delaware",
      neighborhoods: ["Downtown Milford", "Lincoln", "Ellendale", "Slaughter Beach"],
      landmark: "the Mispillion Riverwalk",
      zips: ["19963"],
      lat: 38.9126,
      lng: -75.4277,
      medianDaysToClose: 22,
      intro:
        "Straddling the Kent–Sussex line, Milford mixes historic downtown Victorians with rural properties on well and septic. Homes like these are hard to sell conventionally when systems age out — a failed septic inspection alone can end a financed deal. We buy Milford-area properties as-is, septic problems, aging wells, outbuildings and all.",
      localAngle:
        "Sussex County requires septic inspections at transfer, and a failed system can mean a five-figure replacement before a conventional sale can close. We buy properties with failing or unpermitted septic systems outright and manage the DNREC permitting and replacement after settlement — it's priced into our offer, not billed to you.",
      testimonial: {
        quote:
          "The septic quote was $28,000 and the buyer walked. This team bought the farmhouse as-is and handled the system replacement themselves.",
        name: "Earl & Nancy T.",
        area: "Lincoln",
      },
      nearby: ["rehoboth-beach", "dover"],
    },
    {
      slug: "rehoboth-beach",
      name: "Rehoboth Beach",
      county: "Sussex",
      stateSlug: "delaware",
      neighborhoods: ["Dewey Beach", "Lewes", "Midway", "Long Neck"],
      landmark: "the Rehoboth Boardwalk",
      zips: ["19971", "19958"],
      lat: 38.7168,
      lng: -75.0768,
      medianDaysToClose: 24,
      intro:
        "Beach-area properties come with beach-area problems: salt-air deterioration, aging cottages on valuable lots, leasehold land arrangements, and family co-ownership disputes that surface when it's time to sell. We buy Rehoboth, Lewes, and Long Neck properties for cash — including inherited cottages split among siblings and homes on leased land that traditional buyers can't finance.",
      localAngle:
        "Much of the Long Neck and inland Sussex resort area sits on leased land, where the home is owned but the ground is rented from a community operator. Most lenders won't touch these on resale, leaving sellers stuck. We purchase leasehold properties for cash and work directly with the community operator on the lease transfer.",
      testimonial: {
        quote:
          "Four siblings, one inherited cottage, zero agreement — until a clean cash offer gave us a number we could split and be done.",
        name: "The Callahan Family",
        area: "Lewes",
      },
      nearby: ["milford", "dover"],
    },
  ],
};
