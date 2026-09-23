"use client";

import { SITE } from "@/lib/data";

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
    <>
      {/* ============================================================== */}
      {/* MOBILE STICKY BOTTOM BAR (< md)                                */}
      {/* 3 prominent touch targets fixed to bottom of screen            */}
      {/* ============================================================== */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-pine-200/90 shadow-[0_-4px_25px_rgba(15,23,42,0.12)] px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          {/* Call Link */}
          <a
            href={`tel:${phone}`}
            aria-label={`Call us at ${phoneFormatted}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-pine-900 active:bg-pine-950 text-white font-bold text-xs shadow-sm transition-transform active:scale-95"
          >
            <svg
              className="w-4 h-4 shrink-0 text-amber-300 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Call</span>
          </a>

          {/* SMS / Text Link */}
          <a
            href={`sms:${phone}?body=${smsBody}`}
            aria-label={`Send text SMS to ${phoneFormatted}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-clay-600 active:bg-clay-700 text-white font-bold text-xs shadow-sm transition-transform active:scale-95"
          >
            <svg
              className="w-4 h-4 shrink-0 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>Text</span>
          </a>

          {/* WhatsApp Link */}
          <a
            href={`https://wa.me/15712760986?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] active:bg-[#20ba59] text-white font-bold text-xs shadow-sm transition-transform active:scale-95"
          >
            <svg
              className="w-4 h-4 shrink-0 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.529 1.77.813 2.796.813 3.183 0 5.77-2.587 5.77-5.766-.001-3.18-2.588-5.766-5.77-5.766zm9.969 5.766c0 5.505-4.475 9.97-9.97 9.97-1.748 0-3.385-.453-4.81-1.246l-5.22 1.368 1.393-5.088c-.902-1.488-1.423-3.23-1.423-5.094 0-5.505 4.475-9.97 9.97-9.97 5.495 0 9.97 4.465 9.97 9.97z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP FLOATING ACTION DOCK (>= md)                             */}
      {/* Sleek bottom-right floating pill with status badge & 3 actions */}
      {/* ============================================================== */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-2 pointer-events-none">
        {/* Availability Badge */}
        <div className="pointer-events-auto rounded-full bg-white/90 backdrop-blur-md px-3 py-1 ring-1 ring-pine-900/10 shadow-sm flex items-center gap-2 text-[11px] font-medium text-pine-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Fast As-Is Offers · DC, MD, VA, DE</span>
        </div>

        {/* 3 Channel Buttons Row */}
        <div className="pointer-events-auto flex items-center gap-2 p-1.5 rounded-2xl bg-white/95 backdrop-blur-md ring-1 ring-pine-900/15 shadow-xl">
          {/* Call Button */}
          <a
            href={`tel:${phone}`}
            aria-label={`Call us at ${phoneFormatted}`}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pine-900 hover:bg-pine-800 text-white text-xs font-semibold shadow-sm transition-all hover:shadow"
          >
            <svg
              className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-12 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Call: {phoneFormatted}</span>
          </a>

          {/* SMS / Text Button */}
          <a
            href={`sms:${phone}?body=${smsBody}`}
            aria-label={`Send SMS text to ${phoneFormatted}`}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-clay-600 hover:bg-clay-500 text-white text-xs font-semibold shadow-sm transition-all hover:shadow"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>Text Us</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/15712760986?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with our acquisitions team on WhatsApp"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-sm transition-all hover:shadow"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.529 1.77.813 2.796.813 3.183 0 5.77-2.587 5.77-5.766-.001-3.18-2.588-5.766-5.77-5.766zm9.969 5.766c0 5.505-4.475 9.97-9.97 9.97-1.748 0-3.385-.453-4.81-1.246l-5.22 1.368 1.393-5.088c-.902-1.488-1.423-3.23-1.423-5.094 0-5.505 4.475-9.97 9.97-9.97 5.495 0 9.97 4.465 9.97 9.97z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
