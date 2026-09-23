"use client";

export default function FloatingContact() {
  const phone = "+15712760986";
  const phoneFormatted = "(571) 276-0986";
  const smsBody = encodeURIComponent(
    "Hi, I would like to get a fair cash offer on my house."
  );
  const whatsappText = encodeURIComponent(
    "Hi, I would like to get a fair cash offer on my property."
  );

  return (
    <aside
      aria-label="Direct Cash Offer Contact Channels"
      className="fixed bottom-6 right-4 sm:right-6 z-[9999] flex flex-col items-end gap-3.5 select-none"
    >
      {/* 1. CALL CIRCLE */}
      <div className="relative flex items-center group">
        {/* Desktop Tooltip Pill */}
        <span
          className="hidden md:block pointer-events-none absolute right-full mr-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-pine-950 text-white text-xs font-extrabold py-1.5 px-3 rounded-xl shadow-xl border border-white/15 whitespace-nowrap"
        >
          Call: {phoneFormatted}
        </span>

        {/* Circular Action Button */}
        <a
          href={`tel:${phone}`}
          aria-label={`Call us at ${phoneFormatted}`}
          className="relative w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-pine-950 active:bg-black text-white flex items-center justify-center shadow-[0_8px_25px_rgba(12,20,40,0.45)] ring-2 ring-white/95 hover:ring-pine-400 hover:scale-110 active:scale-95 transition-all duration-200"
        >
          {/* Subtle Attention Ping Ring */}
          <span className="absolute inset-0 rounded-full bg-amber-400/25 animate-ping pointer-events-none" />

          {/* Phone Icon */}
          <svg
            className="w-6 h-6 text-amber-300 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.4}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>
      </div>

      {/* 2. TEXT (SMS) CIRCLE */}
      <div className="relative flex items-center group">
        {/* Desktop Tooltip Pill */}
        <span
          className="hidden md:block pointer-events-none absolute right-full mr-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-[#b7333f] text-white text-xs font-extrabold py-1.5 px-3 rounded-xl shadow-xl border border-white/15 whitespace-nowrap"
        >
          Text Us: {phoneFormatted}
        </span>

        {/* Circular Action Button */}
        <a
          href={`sms:${phone}?body=${smsBody}`}
          aria-label={`Send text SMS to ${phoneFormatted}`}
          className="w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#b7333f] active:bg-[#9c2733] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(183,51,63,0.45)] ring-2 ring-white/95 hover:ring-rose-300 hover:scale-110 active:scale-95 transition-all duration-200"
        >
          {/* SMS / Chat Bubble Icon */}
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.4}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </a>
      </div>

      {/* 3. WHATSAPP CIRCLE */}
      <div className="relative flex items-center group">
        {/* Desktop Tooltip Pill */}
        <span
          className="hidden md:block pointer-events-none absolute right-full mr-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-[#128C7E] text-white text-xs font-extrabold py-1.5 px-3 rounded-xl shadow-xl border border-white/15 whitespace-nowrap"
        >
          Chat on WhatsApp
        </span>

        {/* Circular Action Button */}
        <a
          href={`https://wa.me/15712760986?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with our acquisitions team on WhatsApp"
          className="w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] active:bg-[#1faa53] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] ring-2 ring-white/95 hover:ring-emerald-300 hover:scale-110 active:scale-95 transition-all duration-200"
        >
          {/* Authentic WhatsApp Logo Icon */}
          <svg
            className="w-7 h-7 fill-current text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.529 1.77.813 2.796.813 3.183 0 5.77-2.587 5.77-5.766-.001-3.18-2.588-5.766-5.77-5.766zm9.969 5.766c0 5.505-4.475 9.97-9.97 9.97-1.748 0-3.385-.453-4.81-1.246l-5.22 1.368 1.393-5.088c-.902-1.488-1.423-3.23-1.423-5.094 0-5.505 4.475-9.97 9.97-9.97 5.495 0 9.97 4.465 9.97 9.97z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
