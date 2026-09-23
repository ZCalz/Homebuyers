import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Sell My House Fast For Cash Near Me | As-Is | USHomeBuy",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Need to sell your house fast for cash near you? We buy homes as-is in DC, Maryland, Virginia & Delaware with zero fees, no repairs, and fast closing dates.",
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
        <FloatingContact />
      </body>
    </html>
  );
}
