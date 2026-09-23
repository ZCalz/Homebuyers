const reviews = [
  {
    quote:
      "They made the process of selling our home easy and quick. They treated our family with respect and compassion.",
    name: "Diane K.",
  },
  {
    quote:
      "Fast, fair, and no pressure. I had a cash offer in two days and closed in three weeks, exactly like they said.",
    name: "Theo B.",
  },
  {
    quote:
      "I was facing an auction date and they closed in fifteen days. I kept my equity instead of losing the house.",
    name: "Renee P.",
  },
  {
    quote:
      "No repairs, no showings, no stress. They walked the house once and the offer never changed.",
    name: "Wanda M.",
  },
];

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
        c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
        c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039
        l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
        c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="text-amber-400 text-sm tracking-wider font-bold" aria-label="5 out of 5 stars">
      ★★★★★
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {reviews.map((r) => (
        <figure
          key={r.name}
          className="flex flex-col items-center rounded-2xl bg-white ring-1 ring-pine-900/10 p-6 text-center"
        >
          <blockquote className="text-sm text-pine-800/80 leading-relaxed">
            {r.quote}
          </blockquote>
          <div className="mt-5 flex items-center gap-2">
            <GoogleLogo />
            <Stars />
          </div>
          <figcaption className="mt-4">
            <p className="font-semibold text-pine-950">{r.name}</p>
            <p className="text-sm text-blue-500 italic">Homeowner</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
