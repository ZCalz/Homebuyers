const steps = [
  {
    n: "01",
    title: "Tell us about the property",
    body: "Share the zip code, the condition, and what's prompting the sale. It takes under a minute, and there's no obligation at any point.",
  },
  {
    n: "02",
    title: "Get a transparent offer",
    body: "A local buyer walks the property once, then shows you the math behind the number — comparable values, repair estimates, and our margin.",
  },
  {
    n: "03",
    title: "Close on your calendar",
    body: "Pick the settlement date. We can close in as little as two weeks, or hold the date for months while probate, a move, or a divorce resolves.",
  },
];

export default function ProcessSteps() {
  return (
    <ol className="grid md:grid-cols-3 gap-6">
      {steps.map((s) => (
        <li
          key={s.n}
          className="rounded-2xl bg-white ring-1 ring-pine-900/10 p-6"
        >
          <span className="font-display text-3xl text-sand-500">{s.n}</span>
          <h3 className="mt-3 font-display text-lg text-pine-950">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-pine-800/80">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
