import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import JsonLd from "@/components/JsonLd";
import { orgSchema, productSchema } from "@/lib/schema";

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
    title: "Sell My House Fast For Cash Near Me | As-Is | USHomeBuy",
    description:
      "We buy houses cash as-is across Washington DC, Maryland, Virginia, and Delaware. Zero commissions, zero fees, fast closing dates.",
    url: SITE.url,
    images: [
      {
        url: `${SITE.url}/images/USHomeBuyLogo.png`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Direct Cash Home Buyers`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell My House Fast For Cash Near Me | USHomeBuy",
    description:
      "We buy houses cash as-is in DC, MD, VA & DE. Zero fees, no repairs, fast cash closing.",
    images: [`${SITE.url}/images/USHomeBuyLogo.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={poppins.variable}>
      <body className={`${poppins.className} min-h-screen flex flex-col font-sans`}>
        <JsonLd data={orgSchema()} />
        <JsonLd data={productSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
