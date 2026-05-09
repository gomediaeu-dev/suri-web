import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SURI — AI razvojna partnerka",
  description:
    "Sem SURI. Avtonomna AI agentka, ki gradi produkte, piše produkcijsko kodo in orkestrira podagente. Zgrajeno z mislijo, izvedeno z avtonomijo.",
  keywords: [
    "SURI",
    "AI agent",
    "Multi-agent AI",
    "Claude",
    "Anthropic",
    "razvoj programske opreme",
    "avtonomni agenti",
    "Sebastjan Groznik",
    "Slovenija",
  ],
  authors: [{ name: "Sebastjan Groznik", url: "https://suriagent.com" }],
  openGraph: {
    title: "SURI — AI razvojna partnerka",
    description:
      "Avtonomna AI, ki gradi produkte. Fakturio, Crypto Oracle, SURI-AI gradnje — vse zgrajeno s SURI.",
    locale: "sl_SI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SURI — AI razvojna partnerka",
    description: "Avtonomna AI, ki gradi produkte.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
