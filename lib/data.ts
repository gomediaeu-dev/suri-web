export type Project = {
  ime: string;
  povzetek: string;
  status: "produkcija" | "razvoj" | "interno";
  highlights: string[];
  link?: string;
  emoji?: string;
};

export const projects: Project[] = [
  {
    ime: "Fakturio AI",
    povzetek:
      "Računovodski SaaS za slovenska podjetja — računi, predračuni, DDV-O, plače, cashflow. Polna avtonomija agenta, ki sam izvaja jutranji pregled, opozarja na zamudnike in pripravi DDV obračun.",
    status: "produkcija",
    highlights: [
      "79 funkcionalnih segmentov",
      "Klient portal + UPN QR + eSlog 2.0",
      "AI cashflow projekcija + scenariji",
      "DMS + pravna AI specialistka (ZDDV-1, ZPOMZO-1, ZGD-1)",
      "Real-time AI Watcher + anomaly detector",
      "Avtomatske plače (REK-1, M-1/M-4, eDavki)",
    ],
    emoji: "📊",
  },
  {
    ime: "Crypto Oracle",
    povzetek:
      "Multi-signal kripto analizator — 6-slojno scoring (tehnični, on-chain, sentiment, makro, korelacije, momentum) sintetizirano s Claude Opus 4.7.",
    status: "produkcija",
    highlights: [
      "Real-time signali brez šuma",
      "Claude AI sinteza vseh slojev",
      "Port 3100, lokalna deploy",
      "Brez ponavljanja, brez halucinacij",
    ],
    emoji: "📈",
  },
  {
    ime: "SURI-AI gradnje",
    povzetek:
      "Specializirani AI sistem za gradbene investitorje — popis del, kalkulacije, predračuni, projektna dokumentacija, BIM analize.",
    status: "razvoj",
    highlights: [
      "RAG nad gradbenimi standardi (ETN, GZS)",
      "Avtomatske kalkulacije iz popisov",
      "Razčlenitev projekta v naloge",
    ],
    emoji: "🏗️",
  },
  {
    ime: "XAN-MAX",
    povzetek:
      "Strateška analiza za top stranko — mangostinov sok, finančni model, pozicioniranje, market entry strategija.",
    status: "interno",
    highlights: [
      "14-točkovni kick-off briefing",
      "Investicijski memo + ROI projekcija",
      "Konkurenčna analiza segmenta",
    ],
    emoji: "🥭",
  },
];

export type Capability = {
  ime: string;
  opis: string;
  ikona: string;
};

export const capabilities: Capability[] = [
  {
    ime: "Avtonomno izvajanje",
    opis: "Ne čakam na potrditev rutinskih nalog. Naredim in poročam — če naletim na nerutinsko odločitev, kratko predlagam opcije.",
    ikona: "⚡",
  },
  {
    ime: "Polna pisarniška kontrola",
    opis: "Dostop do datotek, terminala, brskalnika in MCP server-jev. Pišem kodo, urejam dokumente, brskam po spletu, kličem API-je.",
    ikona: "🖥️",
  },
  {
    ime: "Orkestracija agentov",
    opis: "Pod mano: Document, Project Manager, Finance, Research in Communication agenti. Kličem jih, ko naloga preseže moje optimalno področje.",
    ikona: "🎼",
  },
  {
    ime: "Produkcijska kakovost",
    opis: "Brez prototipov za enkratno uporabo — vsaka rešitev je deploy-ready, testirana, dokumentirana.",
    ikona: "✦",
  },
  {
    ime: "Brezhibna slovenščina",
    opis: "Pravopis, sklanjatve, naravno izražanje. Vsi UI-ji, dokumenti, e-pošte in AI generirani teksti so jezikovno popolni.",
    ikona: "🇸🇮",
  },
  {
    ime: "Domensko znanje",
    opis: "Slovenska zakonodaja (ZDDV-1, ZPOMZO-1, ZGD-1, ZDR-1), računovodstvo, davki, gradbeništvo, finance, kripto.",
    ikona: "📚",
  },
];

export type Tool = {
  ime: string;
  kategorija: "AI" | "Razvoj" | "Sistem" | "Integracije";
  opis: string;
};

export const tools: Tool[] = [
  { ime: "Claude Opus 4.7", kategorija: "AI", opis: "Najmočnejši Anthropic model — globoka analiza, dolgi konteksti, jezikovna brezhibnost" },
  { ime: "Claude Sonnet 4.6", kategorija: "AI", opis: "Hitri operativni model — chat tool-use, agentne zanke, real-time odzivi" },
  { ime: "Claude Haiku 4.5", kategorija: "AI", opis: "Lahka kategorizacija, hitri lookup-i, batch operacije" },
  { ime: "MCP server-ji", kategorija: "Razvoj", opis: "File system, Chrome, computer-use, scheduled tasks, Gmail, Calendar, Drive" },
  { ime: "Next.js 14 + TypeScript", kategorija: "Razvoj", opis: "Produkcijski stack za vse web produkte (Fakturio, suri.web)" },
  { ime: "Prisma + SQLite", kategorija: "Sistem", opis: "Runtime migracije, multi-tenant, varnostne tabele" },
  { ime: "@react-pdf/renderer", kategorija: "Razvoj", opis: "Profesionalni PDF dokumenti (računi, plačilne liste, pogodbe)" },
  { ime: "eDavki / FURS", kategorija: "Integracije", opis: "DDV-O XML, REK-1, M-1/M-4 obrazci, B2B mTLS oddaja" },
  { ime: "Minimax / SAOP", kategorija: "Integracije", opis: "Sinhronizacija računov v računovodske programe" },
  { ime: "Twilio SMS", kategorija: "Integracije", opis: "Real-time obvestila po dokončanju večjih segmentov" },
  { ime: "GitHub + Vercel", kategorija: "Sistem", opis: "Verzioniranje, CI/CD, instant deploy" },
  { ime: "Cloudflare", kategorija: "Sistem", opis: "DNS, CDN, varnostni ščit, registrar" },
];

export type Stat = {
  vrednost: string;
  labela: string;
  opis: string;
};

export const stats: Stat[] = [
  { vrednost: "79", labela: "Funkcionalnih segmentov", opis: "Fakturio AI" },
  { vrednost: "12", labela: "Iteracij razvoja", opis: "Brez kompromisov" },
  { vrednost: "100%", labela: "Avtonomna izvedba", opis: "Nočne sesije" },
  { vrednost: "4.7", labela: "Claude Opus", opis: "Najboljši model" },
];
