const points = [
  { stat: "0", label: "commissions or fees" },
  { stat: "14+", label: "days to close, your choice of date" },
  { stat: "4", label: "states served by local teams" },
  { stat: "As-is", label: "no repairs, no cleanout, no staging" },
];

export default function TrustBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden ring-1 ring-pine-900/10 bg-pine-900/10">
      {points.map((p) => (
        <div key={p.label} className="bg-white px-5 py-6 text-center">
          <p className="font-display text-2xl text-pine-800">{p.stat}</p>
          <p className="mt-1 text-xs text-pine-700/80 leading-snug">{p.label}</p>
        </div>
      ))}
    </div>
  );
}
