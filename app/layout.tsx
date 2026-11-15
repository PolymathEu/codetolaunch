import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";

import SiteHeader from "@/components/layout/site-header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const SITE_URL = "https://codetolaunch.page.dev";
const SITE_NAME = "Code To Launch";
const TITLE = "Code To Launch — Skip the setup. Ship this week.";
const DESCRIPTION =
  "Code To Launch gives you a production-ready Next.js SaaS boilerplate and a built-in AI marketing strategist. Stop configuring. Start building.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s — ${SITE_NAME}` },
  description: DESCRIPTION,
  keywords: [
    "nextjs boilerplate",
    "nextjs starter kit",
    "saas boilerplate",
    "saas starter kit",
    "supabase nextjs starter",
    "ship saas fast",
  ],
  authors: [{ name: "Zeiyn", url: SITE_URL }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@iamzeiyn",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

// Structured data so Google can render this as a Product/Organization rich result.
// Keep in sync with SITE_URL/SITE_NAME/DESCRIPTION above — no separate source of truth.
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: SITE_NAME,
        url: SITE_URL,
        sameAs: ["https://x.com/zeiynz"],
      },
      {
        "@type": "Product",
        name: "Code To Launch Next.js Starter Kit",
        description: DESCRIPTION,
        brand: { "@id": `${SITE_URL}/#org` },
        offers: { "@type": "Offer", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}