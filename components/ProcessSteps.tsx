const steps = [
  {
    n: "01",
    title: "Tell us about the property",
    body: "Share the zip code, the condition, and what's prompting the sale. It takes under a minute, and there's no obligation at any point.",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3BN2auOjygT6osLgy24syDyl5yW/hf_20260714_225317_9bd82bab-2926-4b20-b97f-4935bc17882a.png",
    imageAlt: "A homeowner sharing details about her property on her phone",
  },
  {
    n: "02",
    title: "Get a transparent offer",
    body: "A local buyer walks the property once, then shows you the math behind the number — comparable values, repair estimates, and our margin.",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3BN2auOjygT6osLgy24syDyl5yW/hf_20260714_225454_cf765e3d-a83c-4751-8fc1-bcbe032ecff3.png",
    imageAlt: "A local buyer reviewing offer paperwork with a homeowner on her porch",
  },
  {
    n: "03",
    title: "Close on your calendar",
    body: "Pick the settlement date. We can close in as little as two weeks, or hold the date for months while probate, a move, or a divorce resolves.",
    image:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3BN2auOjygT6osLgy24syDyl5yW/hf_20260714_225610_05210eca-5ae8-45a0-af39-6404a6f71f07.png",
    imageAlt: "A homeowner and buyer shaking hands to close the deal",
    imagePosition: "top",
  },
];

export default function ProcessSteps() {
  return (
    <ol className="grid md:grid-cols-3 gap-6">
      {steps.map((s) => (
        <li
          key={s.n}
          className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-pine-900/10"
        >
          <img
            src={s.image}
            alt={s.imageAlt}
            style={{ objectPosition: s.imagePosition ?? "center" }}
            className="block h-44 w-full shrink-0 object-cover align-top"
          />
          <div className="p-6">
            <span className="font-display text-3xl text-sand-500">{s.n}</span>
            <h3 className="mt-3 font-display text-lg text-pine-950">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-pine-800/80">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
