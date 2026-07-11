import type { Metadata } from "next";
import { Shippori_Mincho, Noto_Sans_JP, Cormorant } from "next/font/google";
import "./globals.css";
import { seo } from "@/data/summerCampaign";
import GtmScript from "@/components/summer/GtmScript";
import StickyReserveCTA from "@/components/summer/StickyReserveCTA";

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.enowa-yufuin.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/",
    siteName: "ENOWA YUFUIN",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${notoSansJp.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-enowa-cream text-enowa-black">
        <GtmScript />
        {children}
        <StickyReserveCTA />
      </body>
    </html>
  );
}
