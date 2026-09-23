export interface Situation {
  slug: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  heading: string;
  lede: string;
  sections: { heading: string; body: string }[];
  faq: { q: string; a: string }[];
}

export const situations: Situation[] = [
  {
    slug: "inherited-house",
    title: "Sell Inherited House Fast | Probate Cash Buyers",
    shortTitle: "Inherited House",
    metaDescription:
      "Inherited a house in DC, MD, VA, or DE? We buy inherited & probate homes as-is for cash. No cleanouts, no agent fees, and closings timed to court orders.",
    heading: "Sell Inherited House Fast | Probate Cash Home Buyers — As-Is Sale",
    lede: "An inherited property usually arrives with three problems at once: a house full of belongings, a legal process you've never navigated, and co-heirs who may not agree on anything. We buy inherited homes across DC, Maryland, Virginia, and Delaware exactly as they stand — furniture, deferred maintenance, and all.",
    sections: [
      {
        heading: "Probate works differently in each of our four jurisdictions",
        body: "DC estates run through the Superior Court's Probate Division and commonly take six months or more before an executor can convey title. Maryland offers a streamlined 'small estate' track below certain asset thresholds, while regular estates work through the county Register of Wills and Orphans' Court. Virginia's process is comparatively fast — executors qualify before the circuit court clerk and can often act within weeks. Delaware estates open with the county Register of Wills and typically remain open at least eight months for creditor claims. We write offers that stay open through probate, so the estate has a committed buyer the day you have authority to sell.",
      },
      {
        heading: "You don't need to clean it out",
        body: "Nearly every inherited house we buy still has a lifetime of belongings inside. Take the photo albums and anything meaningful; leave the rest. We handle cleanout after closing at our expense — no dumpsters to rent, no estate-sale companies to coordinate from three states away.",
      },
      {
        heading: "Multiple heirs, one clean number",
        body: "When a property is split among siblings, a single as-is cash offer is often the fastest path to agreement: one number, divided per the will or intestacy shares, with no arguments about renovation budgets or which agent to hire. If one heir lives in the property, we can structure extended possession after closing to give them time to relocate.",
      },
      {
        heading: "Managing estate taxes, liens, and reverse mortgages",
        body: "Many inherited homes come with complex title clouds, overdue county property taxes, municipal utility liens, or reverse mortgages with 30-day notice letters from servicers. Our experienced title settlement partners work directly with lenders and estate attorneys to calculate exact payoff amounts and ensure clean transfer.",
      },
    ],
    faq: [
      {
        q: "Can I sell before probate is complete?",
        a: "You can sign a purchase contract before probate closes in most cases, but the deed can't transfer until the court grants authority. We routinely hold contracts open through the probate timeline at a locked price.",
      },
      {
        q: "What about the mortgage on the inherited house?",
        a: "Federal rules let heirs take over communication with the servicer, and the loan is paid off from sale proceeds at closing. If the balance exceeds the home's value, ask us about short-sale coordination.",
      },
      {
        q: "Do all heirs have to agree?",
        a: "Everyone with an ownership interest must sign. If an heir can't be located or won't engage, a partition action may be needed — we can point you to local attorneys who handle them.",
      },
      {
        q: "What if the house has years of accumulated clutter or trash?",
        a: "Take only the personal keepsakes, heirlooms, and legal records you want. Everything else — old furniture, appliances, clothing, yard debris — can be left behind at zero charge to you.",
      },
      {
        q: "Are there capital gains taxes when selling an inherited house?",
        a: "Inherited properties usually benefit from a 'step-up in basis' to the fair market value on the date of death. This often minimizes or eliminates capital gains taxes upon sale. Consult an estate tax advisor for specifics.",
      },
    ],
  },
  {
    slug: "avoid-foreclosure",
    title: "Stop Foreclosure Fast | Pre-Foreclosure Cash",
    shortTitle: "Avoiding Foreclosure",
    metaDescription:
      "Facing foreclosure? Stop foreclosure fast in DC, MD, VA & DE. Sell your house for cash before auction, protect your equity and credit. Call for fair offer.",
    heading: "Stop Foreclosure Fast | Pre-Foreclosure Cash Home Buyers",
    lede: "The single most important fact about foreclosure in our region: Virginia can move from default to auction in about two months, while Maryland, Delaware, and DC give homeowners considerably longer. Knowing which clock you're on determines which options are still open.",
    sections: [
      {
        heading: "Virginia: the fastest clock in the region",
        body: "Virginia's non-judicial process lets a trustee schedule a sale with brief published notice once the loan is in default. If you've received a notice of trustee sale, most conventional options are already gone — but a cash closing in 10–15 days can still pay off the loan before auction and return your remaining equity to you.",
      },
      {
        heading: "Maryland and Delaware: structured court processes",
        body: "Maryland requires 120 days of delinquency plus a court filing and offers pre-file mediation; Delaware requires a full lawsuit in Superior Court with access to its mediation program. Both timelines typically leave months of runway. That's enough time to sell at a fair price rather than lose the house — but the runway shrinks every week you wait.",
      },
      {
        heading: "A sale beats an auction in almost every case",
        body: "At auction, your home typically sells below market, the costs of the foreclosure come out first, and the credit damage follows you for seven years. A pre-foreclosure sale pays the loan in full, stops the process, avoids a deficiency, and puts whatever equity remains in your pocket. We coordinate directly with servicers and trustees to get payoff letters and, when needed, short postponements.",
      },
      {
        heading: "Preventing severe long-term credit damage",
        body: "A completed foreclosure remains on your credit report for seven years and can prevent you from qualifying for conventional, FHA, or VA mortgage financing for three to seven years. In contrast, selling prior to auction allows your loan balance to be reported as 'paid in full / satisfied', protecting your future borrowing power.",
      },
    ],
    faq: [
      {
        q: "The auction is two weeks away. Is it too late?",
        a: "Maybe not. We've closed pre-auction purchases in as few as 10 days, and trustees will sometimes grant brief postponements when a bona fide payoff is imminent. Call us before assuming it's over.",
      },
      {
        q: "What if I owe more than the house is worth?",
        a: "That requires a short sale — the lender agreeing to accept less than the balance. It takes longer and needs lender approval, but we can manage that negotiation with you.",
      },
      {
        q: "Will you talk to my lender for me?",
        a: "With your written authorization, yes. We request payoff statements, confirm per-diem interest, and keep the servicer informed of the closing date so the file gets flagged correctly.",
      },
      {
        q: "Can I stay in the home after settlement while looking for a new place?",
        a: "Yes. We frequently offer leasebacks or post-settlement occupancy agreements so you receive cash proceeds at closing and have time to transition peacefully to your next residence.",
      },
    ],
  },
  {
    slug: "house-needs-repairs",
    title: "Sell House As-Is Fast | Cash For Damaged Homes",
    shortTitle: "House Needs Repairs",
    metaDescription:
      "Sell your house as-is with zero repairs needed in DC, MD, VA & DE. We buy ugly, damaged, foundation-flawed properties for cash. No fees or inspections.",
    heading: "Sell House As-Is Fast | Cash Buyers For Damaged Houses In Any Condition",
    lede: "The regional housing stock we work in is old: DC and Baltimore rowhouses from the 1900s, post-war NoVA ramblers, Delaware farmhouses on original septic. When the repair list outgrows the budget, we buy the house as-is and price the work into a transparent offer.",
    sections: [
      {
        heading: "The repairs that kill traditional sales here",
        body: "In our markets the deal-breakers are predictable: foundation and party-wall movement in rowhouses, knob-and-tube or aluminum wiring that insurers refuse, underground oil tanks in older NoVA and Montgomery County lots, failed septic systems in Sussex and Charles counties, and roofs past their life on 1980s subdivisions. Financed buyers can't close on these because their lenders and insurers won't allow it. Cash buyers can.",
      },
      {
        heading: "How we price an as-is offer",
        body: "We start from the renovated value of comparable homes in your immediate neighborhood, subtract the realistic cost of the work (we walk the property with our own contractors), and subtract our margin. You'll see each of those numbers — if another buyer beats our offer, you should take it, and we'll tell you so.",
      },
      {
        heading: "No inspections used against you",
        body: "A traditional buyer's inspection is a renegotiation tool. Ours isn't: we do one walkthrough before we make the offer, and the number we give you is the number on the settlement statement. No repair credits, no re-trades the week of closing.",
      },
      {
        heading: "Major structural, plumbing, and roof issues",
        body: "Whether the house has cracked basement cinder blocks, active termites, black mold behind drywall, sagging joists, or severe water penetration from an ancient roof, we buy the home in its exact present state. You never need to hire contractors, pull county permits, or spend tens of thousands out of pocket.",
      },
    ],
    faq: [
      {
        q: "Do you buy houses with major structural or water damage?",
        a: "Yes, including houses that are not safe to enter. We can often assess from the exterior plus photos and public records.",
      },
      {
        q: "Do you buy condemned properties or houses with code violations?",
        a: "Yes. Open violations and vacant-property registry fees transfer to us at closing and become our responsibility.",
      },
      {
        q: "What if the house is fine and just dated?",
        a: "We buy those too — 'as-is' includes 1987 oak cabinets. You'll simply see a higher offer because the work is cosmetic.",
      },
      {
        q: "Do I need to clean out trash or abandoned furniture?",
        a: "No. Leave behind whatever you don't want. We manage all debris removal, hazmat clearance, and cleanup post-closing.",
      },
      {
        q: "Are there any hidden inspection or appraisal fees?",
        a: "Never. We do not charge application fees, appraisal fees, or inspection surcharges. We cover all typical seller closing costs.",
      },
    ],
  },
  {
    slug: "fire-damaged-house",
    title: "Sell Fire Damaged House Fast | Cash Buyers",
    shortTitle: "Fire Damaged House",
    metaDescription:
      "Sell your fire damaged house as-is for cash in Delaware, Maryland & Virginia. Zero repairs or cleanup needed. We buy burnt homes and close on your schedule.",
    heading: "Sell Fire Damaged House Fast | Burnt Home Cash Buyers — 100% As-Is",
    lede: "A residential fire leaves homeowners overwhelmed by insurance paperwork, structural condemnation orders, and mounting municipal fines. Whether your home suffered minor smoke damage in Maryland, electrical fire in Richmond, or total loss in Delaware, we buy fire-damaged properties for cash in 100% as-is condition.",
    sections: [
      {
        heading: "Why selling a burnt home for cash makes financial sense",
        body: "Restoration costs routinely exceed insurance payouts, and finding licensed contractors willing to rebuild fire-gutted framing can take months. Meanwhile, mortgage payments, taxes, and vacant-property registry fees continue to accumulate. Selling directly to USHomeBuy allows you to cash out your equity immediately, transfer all demolition liability to us, and move forward without touching a shovel.",
      },
      {
        heading: "We handle city code violations and condemnation notices",
        body: "Municipal building inspectors in Baltimore, Richmond, DC, and Wilmington issue emergency board-up orders and escalating fines on fire-damaged structures. Our team assumes full legal responsibility for all open citations, working directly with local housing code enforcement agencies upon settlement.",
      },
      {
        heading: "Insurance claims and settlement coordination",
        body: "You can sell your fire-damaged property even if your insurance claim is still pending or already settled. Keep your insurance payout for personal property and structure loss, and sell the underlying property and land to us for cash at closing.",
      },
      {
        heading: "Complete structural and demolition solutions",
        body: "Rebuilding a burnt property requires specialized architectural permits, structural truss replacements, and hazmat soot remediation. Our construction teams handle all engineering sign-offs, city tear-down approvals, and rebuilds after title transfers.",
      },
    ],
    faq: [
      {
        q: "Can I sell my house if it is condemned or unsafe to enter?",
        a: "Yes. Our acquisition specialists and structural engineers routinely evaluate fire-damaged homes from exterior walk-arounds, drone imaging, and architectural records without requiring interior entry.",
      },
      {
        q: "Do I have to clean out smoke-damaged furniture or debris?",
        a: "No. Leave everything behind. We handle total property remediation, hazmat debris clearance, and structural cleanouts at our own expense after closing.",
      },
      {
        q: "Can I keep the insurance check if I sell to you?",
        a: "Yes. In most situations, you retain your insurance settlement proceeds and receive our cash offer for the real estate. Consult your adjuster and our team for precise coordination.",
      },
      {
        q: "How fast can we close on a burnt house?",
        a: "We can close in as few as 10 to 14 days once clear title is established with our local settlement attorney.",
      },
    ],
  },
  {
    slug: "tired-landlord",
    title: "Sell Rental Property Fast | Houses With Tenants",
    shortTitle: "Tired Landlord",
    metaDescription:
      "Tired of non-paying tenants and evictions? Sell your rental property as-is for cash in DC, MD, VA & DE. Leases transferred, no repairs or agent fees.",
    heading: "Sell Rental Property Fast | Cash Buyers For Houses With Tenants",
    lede: "Landlord-tenant law in this region is some of the most tenant-protective in the country — DC especially. If you're done with 2 a.m. maintenance calls, non-paying tenants, or escalating license requirements, we buy rentals with leases in place and take over the landlord role at settlement.",
    sections: [
      {
        heading: "DC rentals: TOPA is not optional",
        body: "Selling a tenanted property in the District triggers the Tenant Opportunity to Purchase Act: tenants must receive statutory notice and, in multi-unit buildings, a formal offer of sale with defined negotiation windows. Done wrong, it can unwind a sale after the fact. We've completed TOPA-compliant purchases across the city and will map the exact notice timeline for your property before you commit to anything.",
      },
      {
        heading: "Licensing and inspection headaches end at closing",
        body: "Prince George's County rental licenses, Newark's student-rental permits, Baltimore's registration and lead-paint certificates — jurisdictions in our region layer real compliance costs on small landlords. We buy properties whether or not their paperwork is current, and bringing the property into compliance afterward is our job, not yours.",
      },
      {
        heading: "Non-paying tenants and mid-eviction sales",
        body: "A property mid-eviction is nearly impossible to sell on the open market, but it's routine for us. We price the property with the occupancy situation factored in, take assignment of the existing lease or court case, and you stop accruing losses on the day we close.",
      },
      {
        heading: "Selling rental property with damaged interiors",
        body: "Tenants often cause significant wear and tear: ruined carpet, broken drywall, unauthorized pets, or abandoned furniture. When you sell to USHomeBuy, you don't have to hire painters, replace appliances, or clean trash. We take over the property in 100% as-is condition.",
      },
    ],
    faq: [
      {
        q: "Do I have to tell my tenants I'm selling?",
        a: "In DC, yes — TOPA notice is mandatory. In Maryland, Virginia, and Delaware, notice rules depend on the lease and jurisdiction; leases generally survive the sale and transfer to us.",
      },
      {
        q: "The tenant hasn't paid in months. Does that lower my offer?",
        a: "Occupancy status and arrears are part of pricing, but they rarely reduce an offer as much as six more months of carrying costs would. We'll show you both numbers.",
      },
      {
        q: "Can you buy my whole portfolio?",
        a: "Yes — we regularly purchase multi-property portfolios across the four states in a single coordinated closing.",
      },
      {
        q: "What happens to the tenant security deposits?",
        a: "Security deposits and prorated rents are accounted for on the final settlement statement and transferred smoothly at closing.",
      },
      {
        q: "Do I need to stage or show the home to multiple buyers?",
        a: "No. We perform a single discreet walkthrough without disturbing your tenants or placing unsightly for-sale signs on the lawn.",
      },
    ],
  },
  {
    slug: "relocating",
    title: "Sell House Fast Relocating | Quick Cash Closing",
    shortTitle: "Relocation & PCS",
    metaDescription:
      "Need to relocate fast for work or military PCS orders? Sell your house as-is for cash in DC, MD, VA & DE. Pick your closing date and skip all showings.",
    heading: "Sell House Fast Relocating | Quick Cash Closing For Relocating Homeowners",
    lede: "The DMV runs on transfers: military PCS orders, federal reassignments, and private-sector relocations. When you have a report date, a 60-to-90-day listing process with financing contingencies is a risk you can't price. A cash closing dated to your calendar is.",
    sections: [
      {
        heading: "Built around military timelines",
        body: "With the Pentagon, Naval Station Norfolk, Joint Base Andrews, and Dover AFB all in our footprint, PCS purchases are a core part of our business. We schedule settlements around report dates, sign documents remotely once you've moved, and coordinate VA loan payoffs so your entitlement is restored for the next station.",
      },
      {
        heading: "No double mortgage, no vacant-house risk",
        body: "Carrying two payments while a vacant house sits listed 1,500 miles behind you is how relocation budgets die. A dated cash closing means one moving budget, one mortgage, and no winterizing an empty property or paying vacant-home insurance premiums.",
      },
      {
        heading: "Leave what you can't take",
        body: "Movers charge by weight. Anything that isn't worth shipping — furniture, the garage shelving, the half-used paint cans — stays behind, and we deal with it after closing.",
      },
      {
        heading: "Seamless digital and remote mail-away closings",
        body: "If you have already departed for your new assignment or out-of-state job, our settlement attorneys arrange remote electronic notary closings or overnight FedEx document packages so you never need to travel back for settlement.",
      },
    ],
    faq: [
      {
        q: "Can we close after we've already left the state?",
        a: "Yes. Remote and mail-away closings are standard for us; most relocation sellers sign from their new city.",
      },
      {
        q: "What if my report date moves?",
        a: "We build flexibility into the contract — closings can typically shift by a few weeks in either direction without penalty.",
      },
      {
        q: "Is a cash offer lower than what I'd get listing?",
        a: "Usually, yes — our offers trade some price for speed and certainty. We'll give you an honest comparison so you can weigh the carrying costs and risk of a traditional listing against the net of a dated cash closing.",
      },
      {
        q: "Can I restore my VA loan entitlement quickly?",
        a: "Yes. As soon as our cash closing funds and your existing VA mortgage is paid off, the title company issues a payoff confirmation letter so your lender can restore your VA certificate of eligibility.",
      },
    ],
  },
  {
    slug: "divorce",
    title: "Sell House During Divorce Fast | Cash Home Sale",
    shortTitle: "Divorce",
    metaDescription:
      "Selling a house during a divorce in DC, MD, VA, or DE? Get a fair as-is cash offer, split equity cleanly without agent commissions, and close quickly.",
    heading: "Sell House During Divorce Fast | Cash Home Buyers For Quick Settlement",
    lede: "In most divorces the house is the largest shared asset and the biggest point of friction. Months of showings, staging, and price-drop debates keep two people tied together long after they've decided not to be. A direct sale replaces all of it with a single verifiable offer and a settlement date the attorneys can put in the agreement.",
    sections: [
      {
        heading: "A neutral number both attorneys can work with",
        body: "Our offer comes with the math shown: renovated comparable values, repair estimates, and our margin. That transparency matters in a divorce, where each side's counsel needs to verify the sale price was fair market for the property's condition. We'll provide documentation directly to both attorneys on request.",
      },
      {
        heading: "Proceeds split at the settlement table",
        body: "The title company disburses according to the signed separation agreement or court order — each party's share goes directly to them. Neither spouse has to trust the other to forward a check.",
      },
      {
        heading: "When one spouse still lives in the house",
        body: "We can schedule closing around a move-out date, or structure a short post-settlement occupancy so the resident spouse has time to relocate after the sale funds. What we can't do is buy a house with only one owner's signature — both names on the deed must sign, or a court order must authorize the sale.",
      },
      {
        heading: "Eliminating mortgage liability and marital debt disputes",
        body: "Joint mortgage obligations carry ongoing financial risk for both spouses if one party defaults. A cash sale completely satisfies the joint note, cancels the deed of trust, and provides clean financial separation so both parties can purchase new homes independently.",
      },
    ],
    faq: [
      {
        q: "My ex won't cooperate. Can you still buy the house?",
        a: "Not without their signature or a court order. If you're at an impasse, your attorney can seek an order compelling sale — our offer can serve as the evidence of a ready buyer.",
      },
      {
        q: "Can the sale close before the divorce is final?",
        a: "Yes, if both parties sign. Many couples sell during the separation period and hold proceeds in escrow pending the final decree.",
      },
      {
        q: "Who pays the mortgage until closing?",
        a: "That's between you and your agreement — but a fast closing shrinks the number of payments in dispute, which is often the point.",
      },
      {
        q: "Do both spouses need to attend the closing together?",
        a: "No. Separate closing appointments, mobile notaries, and digital signing options are available so neither party has to be in the same room.",
      },
    ],
  },
  {
    slug: "downsizing",
    title: "Sell Parents House Fast | Senior Downsizing",
    shortTitle: "Downsizing",
    metaDescription:
      "Downsizing or transitioning a parent to assisted living? Sell the home as-is for cash in DC, MD, VA & DE. Leave unwanted furniture behind; zero fees.",
    heading: "Sell Parents House Fast | Senior Downsizing & Estate Cash Home Buyers",
    lede: "The houses we buy from downsizing sellers are usually well-loved and long-held — and 'well-loved and long-held' is exactly what today's financed buyers renovate away. Rather than fund a kitchen remodel to satisfy strangers, many longtime owners choose one as-is offer and a moving date they control.",
    sections: [
      {
        heading: "Timed to your next community's schedule",
        body: "Senior communities and assisted-living facilities run on their own admission calendars, and deposits are often due before a traditional sale could possibly close. We time settlements to entrance dates — and when needed, we can close first so the proceeds fund the entrance fee, with post-settlement occupancy while you move.",
      },
      {
        heading: "Take the memories, not the furniture",
        body: "After decades in one house, the cleanout is often more daunting than the sale. Our purchase includes whatever you leave behind: furniture, tools, holiday decorations in the attic. Families take what matters and we handle the rest respectfully after closing.",
      },
      {
        heading: "For adult children helping from a distance",
        body: "Roughly half our downsizing purchases are coordinated by adult children, often out of state, holding power of attorney. We're comfortable working with POAs, elder-law attorneys, and fiduciaries, and we'll keep every sibling on the email chain so no one wonders what happened.",
      },
      {
        heading: "Zero staging, cleaning, or open houses",
        body: "Traditional listings require frequent open houses, spotless kitchens, and constant disruptions that can be stressful for senior homeowners. With USHomeBuy, you receive a direct cash offer with only one quiet visit and zero strangers touring the bedrooms.",
      },
    ],
    faq: [
      {
        q: "Mom has dementia and I hold her power of attorney. Can we sell?",
        a: "Generally yes, if the POA grants real estate authority and was validly executed. The title company will review the document early so there are no surprises at settlement.",
      },
      {
        q: "Can we stay in the house after closing while we move?",
        a: "Yes — short post-settlement occupancy is one of the most common terms we write for downsizing sellers.",
      },
      {
        q: "Will the offer account for the house being dated?",
        a: "Cosmetically dated homes in good structural shape receive our strongest offers — the gap between our price and a renovated sale is smallest in exactly this situation.",
      },
      {
        q: "Can sale proceeds be used directly for assisted living community entrance fees?",
        a: "Yes. Settlement proceeds can be wired directly into designated trust or escrow accounts on the date of your choosing.",
      },
    ],
  },
];

export function getSituation(slug: string): Situation | undefined {
  return situations.find((s) => s.slug === slug);
}
