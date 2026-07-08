import type { StateData } from "./types";

export const maryland: StateData = {
  slug: "maryland",
  name: "Maryland",
  abbr: "MD",
  phone: "+14105550164",
  phoneDisplay: "(410) 555-0164",
  image: "/images/region-maryland.png",
  imageAlt: "Brick and painted rowhomes along a Baltimore street at sunset",
  heroBlurb:
    "From Baltimore rowhomes to Prince George's County split-levels, our Maryland buyers close fast and know the state's foreclosure and ground rent rules cold.",
  intro:
    "Maryland sellers deal with a few things most states never see: ground rent on older Baltimore properties, one of the more structured judicial foreclosure processes in the region, and county-by-county transfer taxes that can change your net by thousands. We buy houses across the state — Baltimore City, the DC suburbs, and everywhere between — with cash offers that account for all of it upfront, so the number we quote is the number you walk away with.",
  regulationNote: {
    title: "Behind on the mortgage in Maryland? You have more time than you think.",
    body: "Maryland foreclosures can't begin until you're at least 120 days delinquent, and lenders must file an Order to Docket with the circuit court and offer pre-file mediation. That window is usually enough time to sell and protect your equity — but only if you act before the auction is scheduled. We can typically close in under 30 days, and we coordinate directly with your servicer to stop the clock.",
  },
  cities: [
    {
      slug: "baltimore",
      name: "Baltimore",
      county: "Baltimore City",
      stateSlug: "maryland",
      neighborhoods: ["Highlandtown", "Pigtown", "Belair-Edison", "Hampden", "Park Heights"],
      landmark: "Patterson Park",
      zips: ["21224", "21230", "21213", "21211", "21215"],
      lat: 39.2904,
      lng: -76.6122,
      medianDaysToClose: 18,
      intro:
        "Baltimore has tens of thousands of brick rowhomes, and a lot of them need more than paint. Whether you own a formstone-front shell in Belair-Edison, an inherited rowhome in Park Heights, or a rental in Highlandtown you're ready to be done with, we buy Baltimore houses in absolutely any condition — including vacant, fire-damaged, and code-violation properties.",
      localAngle:
        "Many Baltimore rowhomes still carry ground rent — a colonial-era arrangement where you own the house but lease the land for a small annual fee. Unredeemed ground rent complicates traditional sales and has even led to ejectment actions over trivial sums. We buy ground-rent properties routinely and handle redemption through the SDAT process at closing, at our expense.",
      testimonial: {
        quote:
          "My rental in Highlandtown had a tenant who stopped paying and a ground rent I'd never dealt with. They handled both and I closed in three weeks.",
        name: "Gerald W.",
        area: "Highlandtown",
      },
      nearby: ["dundalk", "silver-spring"],
    },
    {
      slug: "silver-spring",
      name: "Silver Spring",
      county: "Montgomery",
      stateSlug: "maryland",
      neighborhoods: ["Downtown Silver Spring", "Wheaton", "White Oak", "Four Corners"],
      landmark: "the Silver Spring Transit Center",
      zips: ["20901", "20902", "20904", "20910"],
      lat: 38.9907,
      lng: -77.0261,
      medianDaysToClose: 24,
      intro:
        "Montgomery County homes sell fast when they're turnkey — and sit when they're not. If your Silver Spring or Wheaton house has an aging roof, an unfinished basement project, or thirty years of a family's life inside it, we'll make a cash offer that skips the staging, the showings, and the buyer's inspection punch list entirely.",
      localAngle:
        "Montgomery County layers its own transfer and recordation taxes on top of Maryland's, and sellers of long-held homes are often surprised by the closing math. Our offers are net-focused: we walk you through every line of the settlement sheet before you commit, and because we buy directly there are no agent commissions coming out of your side.",
      testimonial: {
        quote:
          "Mom moved to assisted living and the White Oak house needed everything updated. One walkthrough, one offer, thirty days to closing.",
        name: "Priya S.",
        area: "White Oak",
      },
      nearby: ["hyattsville", "baltimore"],
    },
    {
      slug: "hyattsville",
      name: "Hyattsville",
      county: "Prince George's",
      stateSlug: "maryland",
      neighborhoods: ["Riverdale Park", "Mount Rainier", "Landover", "Bladensburg"],
      landmark: "the Hyattsville Arts District",
      zips: ["20781", "20782", "20784", "20785"],
      lat: 38.9559,
      lng: -76.9455,
      medianDaysToClose: 20,
      intro:
        "Prince George's County homeowners come to us for straightforward reasons: an inherited split-level in Landover, a rental in Bladensburg with tenants who've stopped paying, or a mortgage that fell behind after a job change. We buy houses throughout Hyattsville, Riverdale Park, and the inner-Beltway PG suburbs with fast, no-obligation cash offers.",
      localAngle:
        "Prince George's County requires rental licenses and inspections, and unlicensed rentals can face fines that pile up quickly. If you're a landlord out of compliance, selling to a direct buyer avoids the license-and-inspect cycle entirely — we take the property tenant-occupied or vacant, licensed or not.",
      testimonial: {
        quote:
          "Two years of tenant problems and county notices. They bought the Landover house with the tenant still in it and handled everything after settlement.",
        name: "Robert E.",
        area: "Landover",
      },
      nearby: ["silver-spring", "waldorf"],
    },
    {
      slug: "waldorf",
      name: "Waldorf",
      county: "Charles",
      stateSlug: "maryland",
      neighborhoods: ["St. Charles", "Bensville", "Bryans Road", "White Plains"],
      landmark: "the St. Charles Towne Center",
      zips: ["20601", "20602", "20603"],
      lat: 38.6246,
      lng: -76.9391,
      medianDaysToClose: 25,
      intro:
        "Southern Maryland's commuter towns grew fast in the 2000s, and many Waldorf and St. Charles homes bought at the peak carry deferred maintenance their owners can't fund. If you're facing a relocation, a divorce, or a mortgage that no longer fits, we buy Charles County houses as-is and close on your schedule — in weeks, not months.",
      localAngle:
        "Waldorf has a high share of VA and FHA-financed homes, and those government-backed buyers bring strict appraisal condition standards a dated house often can't meet. Selling to a cash buyer sidesteps appraisal repairs entirely — no lender, no required fixes, no re-inspection delays.",
      testimonial: {
        quote:
          "Orders came through and we had six weeks to be in Texas. They closed on our St. Charles townhouse in twenty-two days.",
        name: "Dana & Chris M.",
        area: "St. Charles",
      },
      nearby: ["hyattsville", "dundalk"],
    },
    {
      slug: "dundalk",
      name: "Dundalk",
      county: "Baltimore",
      stateSlug: "maryland",
      neighborhoods: ["Turner Station", "Edgemere", "Gray Manor", "Stanbrook"],
      landmark: "the Dundalk Heritage Fair grounds",
      zips: ["21222", "21219"],
      lat: 39.2507,
      lng: -76.5205,
      medianDaysToClose: 19,
      intro:
        "Dundalk's steelworker-era homes are solid but aging, and many have been in the same family since Bethlehem Steel was running. When it's time to settle an estate, walk away from a flood-prone property near the water, or sell a house that needs a full systems overhaul, we make direct cash offers on Dundalk and Edgemere homes in any state of repair.",
      localAngle:
        "Waterfront-adjacent Dundalk properties increasingly sit in updated FEMA flood zones, and flood insurance requirements can kill financed deals late in the process. We buy flood-zone properties for cash — no lender insurance requirements, no last-minute surprises at the settlement table.",
      testimonial: {
        quote:
          "The insurance quotes scared off two buyers in a row. These folks knew the flood maps better than my agent did and closed without drama.",
        name: "Frank K.",
        area: "Edgemere",
      },
      nearby: ["baltimore", "waldorf"],
    },
  ],
};
