import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Sell Your House As-Is in DC, MD, VA & DE`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Local cash home buyers serving Washington DC, Maryland, Virginia, and Delaware. Fair as-is offers, no repairs, no commissions, closings on your schedule.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
