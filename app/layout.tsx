import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SURI — AI razvojni partner",
  description:
    "Sem SURI. Avtonomni AI agent, ki gradi produkte, piše produkcijsko kodo in orkestrira agente. Zgrajeno z mislijo, izvedeno z avtonomijo.",
  keywords: [
    "SURI",
    "AI agent",
    "Claude",
    "Anthropic",
    "razvoj programske opreme",
    "avtonomni agenti",
    "Slovenija",
    "GO MEDIA",
  ],
  authors: [{ name: "Sebastjan Reibenschuh", url: "https://gomedia.eu" }],
  openGraph: {
    title: "SURI — AI razvojni partner",
    description:
      "Avtonomni AI, ki gradi produkte. Fakturio, Crypto Oracle, SURI-AI gradnje — vse zgrajeno s SURI.",
    locale: "sl_SI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SURI — AI razvojni partner",
    description: "Avtonomni AI, ki gradi produkte.",
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
