import type { Metadata } from "next";
import { Inter, DynaPuff, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const bubbly = DynaPuff({ subsets: ["latin"], variable: "--font-bubbly", display: "swap" });
const sketch = Caveat({ subsets: ["latin"], variable: "--font-sketch", display: "swap" });

import { getMetadata } from "@/lib/seo";
import { CookieConsent } from "@/components/ui/CookieConsent";

// Use English as primary SEO language (content dalej może być wielojęzyczne)
export const metadata = getMetadata("en");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bubbly.variable} ${sketch.variable} scroll-smooth dark`}>
      <head>
        <script src="https://app.lemonsqueezy.com/js/lemon.js" defer></script>
        {process.env.NEXT_PUBLIC_LS_STORE_SLUG && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `window.lemonSqueezyAffiliateConfig={store:"${process.env.NEXT_PUBLIC_LS_STORE_SLUG}"};`,
              }}
            />
            <script src="https://lmsqueezy.com/affiliate.js" defer />
          </>
        )}
      </head>
      <body className={`font-sans bg-[#030307] text-white antialiased selection:bg-indigo-500/30 selection:text-white`}>
        <a href="#main-content" className="absolute left-4 top-0 -translate-y-full focus:translate-y-4 focus:outline-none focus:ring-2 focus:ring-white rounded-xl z-[200] px-4 py-2 bg-indigo-600 text-white font-bold transition-transform">
          Skip to main content
        </a>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}