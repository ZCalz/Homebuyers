import type { StateData } from "./types";

export const dc: StateData = {
  slug: "washington-dc",
  name: "Washington, DC",
  abbr: "DC",
  phone: "+12025550137",
  phoneDisplay: "(202) 555-0137",
  image: "/images/region-dc.png",
  imageAlt: "A row of colorful historic rowhouses on a tree-lined DC street with the Capitol dome visible in the distance",
  heroBlurb:
    "From rowhouses east of the river to condos in NoMa, our DC team makes fair cash offers on properties in any condition — and we know how to navigate TOPA.",
  intro:
    "Selling a house in the District comes with rules that don't exist anywhere else in the country. The Tenant Opportunity to Purchase Act (TOPA) can add months to a sale if your property has tenants, and many DC rowhouses carry decades of deferred maintenance that scare off conventional buyers. We buy DC properties directly, handle the paperwork, and time the closing around your situation — not the other way around.",
  regulationNote: {
    title: "Selling with tenants in DC? TOPA matters.",
    body: "Under DC's Tenant Opportunity to Purchase Act, tenants in most rental properties must be given notice and an opportunity to purchase before the property is sold. Single-family sellers have a streamlined exemption process, but multi-unit buildings require formal offers of sale and statutory negotiation windows. We've closed TOPA-affected deals across all eight wards and will walk you through the notice timeline before you sign anything.",
  },
  cities: [
    {
      slug: "capitol-hill",
      name: "Capitol Hill",
      county: "Washington",
      stateSlug: "washington-dc",
      neighborhoods: ["Eastern Market", "Barracks Row", "Hill East", "Lincoln Park"],
      landmark: "Eastern Market",
      zips: ["20002", "20003"],
      lat: 38.8866,
      lng: -76.9962,
      medianDaysToClose: 21,
      intro:
        "Capitol Hill's Victorian rowhouses are beautiful — and expensive to keep standing. Hundred-year-old brick, knob-and-tube wiring, and shared party walls mean repair bills that routinely hit six figures. If your Hill East or Eastern Market rowhouse needs more work than you can take on, we'll buy it exactly as it sits.",
      localAngle:
        "Much of Capitol Hill sits inside a historic district, which means exterior repairs need approval from the Historic Preservation Review Board before work can start. That process alone deters most retail buyers from touching a fixer-upper here. We buy historic-district properties as-is and take on the HPRB process ourselves after closing.",
      testimonial: {
        quote:
          "My grandmother's rowhouse near Lincoln Park needed a new roof, new wiring, everything. They gave me a number in two days and we closed in three weeks.",
        name: "Denise R.",
        area: "Hill East",
      },
      nearby: ["anacostia", "petworth"],
    },
    {
      slug: "anacostia",
      name: "Anacostia",
      county: "Washington",
      stateSlug: "washington-dc",
      neighborhoods: ["Historic Anacostia", "Fairlawn", "Congress Heights", "Barry Farm"],
      landmark: "the Frederick Douglass National Historic Site",
      zips: ["20020", "20032"],
      lat: 38.8623,
      lng: -76.9857,
      medianDaysToClose: 19,
      intro:
        "East of the river, homeowners often sit on properties that have been in the family for generations — and sorting out heirs' property, back taxes, or a house that's been vacant for years can feel impossible. We buy houses across Anacostia, Congress Heights, and Fairlawn in any condition, including properties with title complications that need to be untangled before closing.",
      localAngle:
        "Ward 8 has some of the highest rates of tangled-title and heirs' property in the District. If a parent or grandparent passed without a will, you may need to open probate with the DC Superior Court before you can sell. Our title team handles that process regularly and can often fund the legal work needed to clear title as part of the purchase.",
      testimonial: {
        quote:
          "The house sat vacant for six years after my father passed. They helped me get the estate opened and still closed faster than the agent who wanted me to renovate first.",
        name: "Marcus T.",
        area: "Congress Heights",
      },
      nearby: ["capitol-hill", "brookland"],
    },
    {
      slug: "petworth",
      name: "Petworth",
      county: "Washington",
      stateSlug: "washington-dc",
      neighborhoods: ["Park View", "16th Street Heights", "Brightwood Park", "Grant Circle"],
      landmark: "the Georgia Avenue corridor",
      zips: ["20011", "20010"],
      lat: 38.9422,
      lng: -77.0242,
      medianDaysToClose: 22,
      intro:
        "Petworth's porch-front rowhouses have appreciated fast, but appreciation doesn't fix a cracked foundation or a basement that floods every summer. Whether you're a longtime owner cashing out, a landlord done with the DC rental market, or an heir managing a property from out of state, we make direct offers on Petworth houses in any condition.",
      localAngle:
        "Many Petworth homes have basement units rented informally over the years. DC requires a basic business license and certificate of occupancy for rentals, and unlicensed units can complicate a traditional sale. We buy properties with unpermitted units regularly — no need to legalize or vacate before selling to us.",
      testimonial: {
        quote:
          "I'd been renting out the basement for years without the right paperwork and dreaded listing it. They didn't blink — fair offer, clean closing, done in a month.",
        name: "Angela P.",
        area: "Park View",
      },
      nearby: ["brookland", "capitol-hill"],
    },
    {
      slug: "brookland",
      name: "Brookland",
      county: "Washington",
      stateSlug: "washington-dc",
      neighborhoods: ["Edgewood", "Michigan Park", "Woodridge", "Fort Totten"],
      landmark: "the Basilica of the National Shrine",
      zips: ["20017", "20018"],
      lat: 38.9339,
      lng: -76.9894,
      medianDaysToClose: 23,
      intro:
        "Brookland's detached homes and bungalows are rare for DC, and many have been held by the same families since the 1960s. When it's time to sell — because of retirement, a move closer to family, or an estate to settle — a full renovation to satisfy today's buyers can cost more than it returns. We buy Brookland and Woodridge homes as-is, with no showings and no contingencies.",
      localAngle:
        "Estate sales are common in Brookland, and DC probate can take six months or more before an executor has authority to sell. We regularly write offers contingent only on probate completion, so the estate has a locked-in price and a guaranteed buyer the day the court issues letters of administration.",
      testimonial: {
        quote:
          "As executor living in Atlanta, I couldn't manage contractors in DC. They bought my aunt's house in Michigan Park exactly as she left it.",
        name: "Yvonne C.",
        area: "Michigan Park",
      },
      nearby: ["petworth", "anacostia"],
    },
  ],
};
