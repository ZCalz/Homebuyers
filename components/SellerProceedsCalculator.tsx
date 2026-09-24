"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { SITE } from "@/lib/data";

export default function SellerProceedsCalculator() {
  const [homeValue, setHomeValue] = useState<number>(450000);
  const [mortgageBalance, setMortgageBalance] = useState<number>(180000);
  const [repairEstimate, setRepairEstimate] = useState<number>(25000);
  const [holdingMonths, setHoldingMonths] = useState<number>(3);
  const [monthlyHoldingCost, setMonthlyHoldingCost] = useState<number>(2200);

  const homeValueId = useId();
  const mortgageId = useId();
  const repairId = useId();
  const holdingMonthsId = useId();

  // Currency Formatter
  const fmt = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(Math.max(0, val));

  // Traditional Realtor Sale Math
  const realtorCommission = homeValue * 0.055; // 5.5% avg commission
  const sellerClosingCosts = homeValue * 0.025; // 2.5% transfer taxes & title fees
  const totalHoldingCost = holdingMonths * monthlyHoldingCost;
  const traditionalTotalCosts =
    realtorCommission + sellerClosingCosts + repairEstimate + totalHoldingCost;
  const traditionalNetWalkaway = Math.max(
    0,
    homeValue - traditionalTotalCosts - mortgageBalance
  );

  // USHomeBuy Direct Cash Offer Math
  // Direct investors offer based on ARV minus repairs & margin, but cover all closing fees and 0% commission.
  // Standard rule of thumb: ~85% of ARV minus internal repair cost
  const cashOfferGross = Math.max(
    0,
    Math.round(homeValue * 0.85 - repairEstimate * 0.75)
  );
  const cashNetWalkaway = Math.max(0, cashOfferGross - mortgageBalance);

  // Difference
  const diff = traditionalNetWalkaway - cashNetWalkaway;

  return (
    <div className="w-full">
      {/* Calculator Container */}
      <div className="bg-white rounded-2xl border border-pine-900/10 shadow-xl overflow-hidden">
        <div className="bg-pine-950 text-sand-50 px-6 py-6 sm:px-8">
          <p className="text-xs uppercase tracking-widest text-sand-400 font-semibold">
            Interactive Financial Tool
          </p>
          <h2 className="text-2xl sm:text-3xl font-display text-white mt-1">
            House Sale & Net Proceeds Calculator
          </h2>
          <p className="text-sand-200/80 text-sm mt-1 max-w-2xl">
            Compare what you realistically walk away with after realtor commissions, closing costs, and repairs versus a guaranteed, as-is cash sale.
          </p>
        </div>

        <div className="p-6 sm:p-8 grid lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-lg text-pine-950 font-semibold border-b border-pine-100 pb-2">
              1. Your Property Details
            </h3>

            {/* Estimated Market Value */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor={homeValueId}
                  className="text-sm font-semibold text-pine-900"
                >
                  Estimated Retail Market Value
                </label>
                <span className="text-base font-bold text-pine-950">
                  {fmt(homeValue)}
                </span>
              </div>
              <input
                id={homeValueId}
                type="range"
                min={100000}
                max={1500000}
                step={10000}
                value={homeValue}
                onChange={(e) => setHomeValue(Number(e.target.value))}
                className="w-full h-2 bg-sand-200 rounded-lg appearance-none cursor-pointer accent-pine-700"
              />
              <div className="flex justify-between text-[11px] text-pine-600 mt-1">
                <span>$100k</span>
                <span>$750k</span>
                <span>$1.5M+</span>
              </div>
            </div>

            {/* Existing Mortgage Balance */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor={mortgageId}
                  className="text-sm font-semibold text-pine-900"
                >
                  Current Mortgage / Lien Payoff
                </label>
                <span className="text-base font-bold text-pine-950">
                  {fmt(mortgageBalance)}
                </span>
              </div>
              <input
                id={mortgageId}
                type="range"
                min={0}
                max={Math.min(homeValue, 1000000)}
                step={5000}
                value={mortgageBalance}
                onChange={(e) => setMortgageBalance(Number(e.target.value))}
                className="w-full h-2 bg-sand-200 rounded-lg appearance-none cursor-pointer accent-pine-700"
              />
              <div className="flex justify-between text-[11px] text-pine-600 mt-1">
                <span>$0 (Paid Off)</span>
                <span>$500k</span>
                <span>$1M</span>
              </div>
            </div>

            {/* Estimated Repairs Needed */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor={repairId}
                  className="text-sm font-semibold text-pine-900"
                >
                  Estimated Repairs & Updates Needed
                </label>
                <span className="text-base font-bold text-clay-600">
                  {fmt(repairEstimate)}
                </span>
              </div>
              <input
                id={repairId}
                type="range"
                min={0}
                max={120000}
                step={2500}
                value={repairEstimate}
                onChange={(e) => setRepairEstimate(Number(e.target.value))}
                className="w-full h-2 bg-sand-200 rounded-lg appearance-none cursor-pointer accent-clay-500"
              />
              {/* Quick Preset Buttons */}
              <div className="grid grid-cols-4 gap-2 mt-2">
                {[
                  { label: "None ($0)", val: 0 },
                  { label: "Light ($10k)", val: 10000 },
                  { label: "Medium ($30k)", val: 30000 },
                  { label: "Major ($60k)", val: 60000 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    type="button"
                    onClick={() => setRepairEstimate(preset.val)}
                    className={`text-xs py-1.5 px-2 rounded border transition-colors ${
                      repairEstimate === preset.val
                        ? "bg-pine-900 text-white border-pine-900 font-medium"
                        : "bg-sand-50 text-pine-800 border-pine-900/10 hover:bg-sand-100"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Holding Period (Months on Market) */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor={holdingMonthsId}
                  className="text-sm font-semibold text-pine-900"
                >
                  Months on Open Market (Holding Costs)
                </label>
                <span className="text-base font-bold text-pine-950">
                  {holdingMonths} Months ({fmt(totalHoldingCost)})
                </span>
              </div>
              <input
                id={holdingMonthsId}
                type="range"
                min={1}
                max={6}
                step={1}
                value={holdingMonths}
                onChange={(e) => setHoldingMonths(Number(e.target.value))}
                className="w-full h-2 bg-sand-200 rounded-lg appearance-none cursor-pointer accent-pine-700"
              />
              <p className="text-[11px] text-pine-600 mt-1">
                Includes mortgage payments, taxes, utilities, and insurance while listed (~$2,200/mo).
              </p>
            </div>
          </div>

          {/* Results Comparison Column */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display text-lg text-pine-950 font-semibold border-b border-pine-100 pb-2">
              2. Realistic Net Cash Proceeds Comparison
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Traditional Realtor Card */}
              <div className="rounded-xl border border-pine-900/15 bg-sand-50/60 p-5 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-2.5 py-1 rounded bg-pine-100 text-pine-800 text-xs font-semibold mb-2">
                    Traditional Listing
                  </div>
                  <p className="text-xs text-pine-600">Listing Price</p>
                  <p className="text-lg font-bold text-pine-950">{fmt(homeValue)}</p>

                  <div className="mt-4 space-y-2 text-xs border-t border-pine-900/10 pt-3 text-pine-800">
                    <div className="flex justify-between">
                      <span>Realtor Commission (5.5%)</span>
                      <span className="text-clay-600 font-medium">-{fmt(realtorCommission)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Seller Closing Fees (2.5%)</span>
                      <span className="text-clay-600 font-medium">-{fmt(sellerClosingCosts)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Repair & Staging Prep</span>
                      <span className="text-clay-600 font-medium">-{fmt(repairEstimate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{holdingMonths} Mos. Holding Costs</span>
                      <span className="text-clay-600 font-medium">-{fmt(totalHoldingCost)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mortgage Payoff</span>
                      <span className="text-pine-700 font-medium">-{fmt(mortgageBalance)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-pine-900/10">
                  <p className="text-xs font-medium text-pine-600 uppercase tracking-wide">
                    Estimated Net In Pocket
                  </p>
                  <p className="text-2xl font-black text-pine-950">
                    {fmt(traditionalNetWalkaway)}
                  </p>
                  <p className="text-[11px] text-pine-600 mt-1">
                    Takes 60–90+ days · Risk of financing collapse
                  </p>
                </div>
              </div>

              {/* USHomeBuy Direct Cash Card */}
              <div className="rounded-xl border-2 border-clay-500 bg-clay-500/5 p-5 flex flex-col justify-between relative shadow-md">
                <div className="absolute -top-3 right-4 bg-clay-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Guaranteed Fast
                </div>
                <div>
                  <div className="inline-block px-2.5 py-1 rounded bg-clay-500 text-white text-xs font-semibold mb-2">
                    USHomeBuy Cash Offer
                  </div>
                  <p className="text-xs text-pine-600">Estimated Cash Offer</p>
                  <p className="text-lg font-bold text-pine-950">{fmt(cashOfferGross)}</p>

                  <div className="mt-4 space-y-2 text-xs border-t border-clay-500/20 pt-3 text-pine-800">
                    <div className="flex justify-between">
                      <span>Realtor Commission</span>
                      <span className="text-emerald-700 font-bold">$0 (Zero)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Seller Closing Fees</span>
                      <span className="text-emerald-700 font-bold">$0 (We Pay 100%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Repairs Required</span>
                      <span className="text-emerald-700 font-bold">$0 (Sold 100% As-Is)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Holding Costs</span>
                      <span className="text-emerald-700 font-bold">$0 (Closed in 14 Days)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mortgage Payoff</span>
                      <span className="text-pine-700 font-medium">-{fmt(mortgageBalance)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-clay-500/30">
                  <p className="text-xs font-semibold text-clay-600 uppercase tracking-wide">
                    Estimated Net In Pocket
                  </p>
                  <p className="text-2xl font-black text-clay-600">
                    {fmt(cashNetWalkaway)}
                  </p>
                  <p className="text-[11px] text-emerald-800 font-semibold mt-1">
                    Closed in 7–14 days · Zero inspection re-trades
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Reality Insight */}
            <div className="rounded-xl bg-pine-50 border border-pine-200 p-4 text-xs text-pine-900 leading-relaxed">
              <strong className="text-pine-950">The Real Takeaway:</strong> On paper, a traditional listing looks like it yields more. But once you subtract{" "}
              <strong>{fmt(realtorCommission)} in commissions</strong>,{" "}
              <strong>{fmt(sellerClosingCosts)} in transfer fees</strong>, out-of-pocket repair bills, and months of mortgage payments, the actual net difference is often only{" "}
              <strong>{fmt(Math.abs(diff))}</strong>. Most sellers conclude that skipping 3 months of showings, stranger walkthroughs, and contractor stress is well worth closing in days.
            </div>

            <div className="pt-2">
              <Link
                href="/get-offer"
                className="w-full block text-center rounded-xl bg-clay-500 hover:bg-clay-600 text-white font-bold py-3.5 px-6 text-base transition-colors shadow-md hover:shadow-lg"
              >
                Get Your Exact Cash Offer in 24 Hours →
              </Link>
              <p className="text-center text-[11px] text-pine-600 mt-2">
                No obligation · 100% Free · Written offer guaranteed for 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
