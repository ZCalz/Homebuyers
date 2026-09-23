import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import JsonLd from "@/components/JsonLd";
import { productSchema } from "@/lib/schema";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Sell My House Fast For Cash Near Me | As-Is | USHomeBuy",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Need to sell your house fast for cash near you? We buy homes as-is in DC, Maryland, Virginia & Delaware with zero fees, no repairs, and fast closing dates.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={poppins.variable}>
      <body className={`${poppins.className} min-h-screen flex flex-col font-sans`}>
        <JsonLd data={productSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
