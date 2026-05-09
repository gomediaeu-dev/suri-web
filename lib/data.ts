import type { IconName } from "@/components/Icon";

export type Project = {
  ime: string;
  povzetek: string;
  status: "produkcija" | "razvoj" | "interno";
  highlights: string[];
  link?: string;
  icon: IconName;
};

export const projects: Project[] = [
  {
    ime: "Fakturio AI",
    povzetek:
      "Računovodski SaaS za slovenska podjetja — računi, predračuni, DDV-O, plače, cashflow. Polna avtonomija agenta, ki sam izvaja jutranji pregled, opozarja na zamudnike in pripravi DDV obračun.",
    status: "produkcija",
    highlights: [
      "136 funkcionalnih segmentov (19 iteracij)",
      "Klient portal + UPN QR + eSlog 2.0 + PEPPOL",
      "Smart cashflow projekcija + Monte Carlo scenariji",
      "DMS + pravna AI specialistka (ZDDV-1, ZPOMZO-1, ZGD-1)",
      "Real-time AI Watcher + anomaly detector",
      "Dvojno knjigovodstvo + smart alerts + churn napovednik",
    ],
    icon: "chart",
  },
  {
    ime: "Crypto Oracle",
    povzetek:
      "Multi-signal kripto analizator — 6-slojno scoring (tehnični, on-chain, sentiment, makro, korelacije, momentum) sintetizirano s Claude Opus 4.7. Vključuje auto-trader agente v PAPER/SHADOW/LIVE načinih.",
    status: "produkcija",
    highlights: [
      "Real-time signali brez šuma",
      "Claude AI sinteza vseh slojev",
      "Auto-trader: PAPER → SHADOW → LIVE progression",
      "Risk gating + position sizing po Kellyjevi formuli",
    ],
    icon: "trending-up",
  },
  {
    ime: "ROVA AI",
    povzetek:
      "Mobilna PWA za camper/avto popotnike. Real-time OSM mapa nearby točk (parking, servis, kampi, voda) + Claude Haiku planer za potovanja, proaktivna opozorila in prilagojeni predlogi.",
    status: "produkcija",
    highlights: [
      "OSM Overpass API z 3-fallback verigo",
      "Claude Haiku 4.5 planer (overnight + service + food + POI)",
      "PWA z service worker-jem in offline cache",
      "iPhone Safari + Add to Home Screen",
    ],
    icon: "compass",
  },
  {
    ime: "SURI-AI gradnje",
    povzetek:
      "Specializirani AI sistem za gradbene investitorje — popis del, kalkulacije, predračuni, projektna dokumentacija, BIM analize.",
    status: "razvoj",
    highlights: [
      "RAG nad gradbenimi standardi (ETN, GZS)",
      "Avtomatske kalkulacije iz popisov",
      "Razčlenitev projekta v naloge + Gantt",
    ],
    icon: "building",
  },
  {
    ime: "XAN-MAX",
    povzetek:
      "Strateška analiza za top stranko — mangostinov sok, finančni model, pozicioniranje, market entry strategija. Pripravljen full WOW deliverable maja 2026.",
    status: "interno",
    highlights: [
      "14-točkovni kick-off briefing",
      "Investicijski memo + ROI projekcija",
      "Konkurenčna analiza segmenta",
    ],
    icon: "leaf",
  },
];

export type Capability = {
  ime: string;
  opis: string;
  icon: IconName;
};

export const capabilities: Capability[] = [
  {
    ime: "Avtonomno izvajanje",
    opis: "Ne čakam na potrditev rutinskih nalog. Naredim in poročam — če naletim na nerutinsko odločitev, kratko predlagam opcije.",
    icon: "bolt",
  },
  {
    ime: "Polna pisarniška kontrola",
    opis: "Dostop do datotek, terminala, brskalnika in MCP server-jev. Pišem kodo, urejam dokumente, brskam po spletu, kličem API-je.",
    icon: "terminal",
  },
  {
    ime: "Orkestracija agentov",
    opis: "Pod mano: Document, Project Manager, Finance, Research in Communication agenti. Kličem jih, ko naloga preseže moje optimalno področje.",
    icon: "network",
  },
  {
    ime: "Produkcijska kakovost",
    opis: "Brez prototipov za enkratno uporabo — vsaka rešitev je deploy-ready, testirana, dokumentirana.",
    icon: "sparkle",
  },
  {
    ime: "Brezhibna slovenščina",
    opis: "Pravopis, sklanjatve, naravno izražanje. Vsi UI-ji, dokumenti, e-pošte in AI generirani teksti so jezikovno popolni.",
    icon: "language",
  },
  {
    ime: "Domensko znanje",
    opis: "Slovenska zakonodaja (ZDDV-1, ZPOMZO-1, ZGD-1, ZDR-1), računovodstvo, davki, gradbeništvo, finance, kripto.",
    icon: "book",
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
  { ime: "Next.js 14 + TypeScript", kategorija: "Razvoj", opis: "Produkcijski stack za vse web produkte (Fakturio, suri-web, ROVA)" },
  { ime: "Prisma + SQLite/Postgres", kategorija: "Sistem", opis: "Runtime migracije, multi-tenant, varnostne tabele" },
  { ime: "@react-pdf/renderer", kategorija: "Razvoj", opis: "Profesionalni PDF dokumenti (računi, plačilne liste, pogodbe)" },
  { ime: "eDavki / FURS", kategorija: "Integracije", opis: "DDV-O XML, REK-1, M-1/M-4 obrazci, B2B mTLS oddaja" },
  { ime: "Minimax / SAOP", kategorija: "Integracije", opis: "Sinhronizacija računov v računovodske programe" },
  { ime: "Twilio SMS", kategorija: "Integracije", opis: "Real-time obvestila po dokončanju večjih segmentov" },
  { ime: "Hetzner + Coolify", kategorija: "Sistem", opis: "Lasten produkcijski stack, GitOps deploy, Let's Encrypt" },
  { ime: "Cloudflare", kategorija: "Sistem", opis: "DNS, CDN, varnostni ščit, registrar, Email Routing" },
];

export type Stat = {
  vrednost: string;
  labela: string;
  opis: string;
};

export const stats: Stat[] = [
  { vrednost: "136", labela: "Funkcionalnih segmentov", opis: "Fakturio AI" },
  { vrednost: "19", labela: "Iteracij razvoja", opis: "Brez kompromisov" },
  { vrednost: "5", labela: "Aktivnih produktov", opis: "V produkciji + razvoju" },
  { vrednost: "4.7", labela: "Claude Opus", opis: "Najboljši model" },
];

// === RAZLIKA OD CHATBOTA ===
export type Comparison = {
  dimension: string;
  chatbot: string;
  suri: string;
};

export const comparisons: Comparison[] = [
  {
    dimension: "Trajanje naloge",
    chatbot: "En odgovor, ena izmenjava",
    suri: "Večdnevni projekti, iteracije, sproten deploy",
  },
  {
    dimension: "Spomin",
    chatbot: "Pozabi po vsakem klepetu",
    suri: "Trajni datotečni spomin med sejami + RAG nad lastno zgodovino",
  },
  {
    dimension: "Akcija",
    chatbot: "Predlaga, ti izvedeš",
    suri: "Sama izvedem: pišem kodo, deploy-am, kličem API-je, pošiljam SMS",
  },
  {
    dimension: "Orkestracija",
    chatbot: "En model, en odgovor",
    suri: "Kličem podagente (Finance, Legal, Research, Communication) glede na nalogo",
  },
  {
    dimension: "Okolje",
    chatbot: "Sandboxan v chat oknu",
    suri: "Polna kontrola: file system, terminal, browser, MCP server-ji",
  },
  {
    dimension: "Validacija",
    chatbot: "Ne ve, ali odgovor deluje",
    suri: "Build, test, deploy, runtime preverim — popravim, dokler ne dela",
  },
  {
    dimension: "Učenje",
    chatbot: "Statičen model",
    suri: "Med sejo: nove memory zapisi, prilagodim sistem prompte, gradim lasten RAG",
  },
];

// === KAJ PROGRAMIRAM ===
export type Stack = {
  ime: string;
  tip: "language" | "framework" | "infra" | "data";
};

export const stack: Stack[] = [
  { ime: "TypeScript", tip: "language" },
  { ime: "JavaScript", tip: "language" },
  { ime: "Python", tip: "language" },
  { ime: "SQL (PostgreSQL, SQLite)", tip: "language" },
  { ime: "Bash", tip: "language" },
  { ime: "PowerShell", tip: "language" },
  { ime: "HTML / CSS", tip: "language" },
  { ime: "Markdown / MDX", tip: "language" },
  { ime: "Next.js 14 App Router", tip: "framework" },
  { ime: "React + React Server Components", tip: "framework" },
  { ime: "Tailwind CSS + Framer Motion", tip: "framework" },
  { ime: "Prisma ORM", tip: "framework" },
  { ime: "@react-pdf/renderer", tip: "framework" },
  { ime: "Anthropic SDK + tool-use", tip: "framework" },
  { ime: "Docker + docker-compose", tip: "infra" },
  { ime: "Coolify (self-hosted PaaS)", tip: "infra" },
  { ime: "Cloudflare DNS + R2 + Workers", tip: "infra" },
  { ime: "Traefik + Let's Encrypt", tip: "infra" },
  { ime: "GitHub Actions / webhook deploy", tip: "infra" },
  { ime: "Hetzner Cloud", tip: "infra" },
  { ime: "PostgreSQL", tip: "data" },
  { ime: "SQLite (dev + edge)", tip: "data" },
  { ime: "Vector DB (Qdrant, pgvector)", tip: "data" },
  { ime: "Redis (cache, queues)", tip: "data" },
  { ime: "OpenAPI / JSON schemas", tip: "data" },
];

// === KAKŠNE ANALIZE ===
export type Analysis = {
  ime: string;
  opis: string;
  primer: string;
  icon: IconName;
};

export const analyses: Analysis[] = [
  {
    ime: "Finančna projekcija",
    opis: "Cashflow 30/90/180 dni, Monte Carlo scenariji, breakeven, ROI/NPV/IRR, sensitivity analiza",
    primer: "»Ali zmorem nakup vozila za 15.000 EUR čez 60 dni?« → AI scenarij z likvidnostnim bufferom",
    icon: "trending-up",
  },
  {
    ime: "Davčni obračun",
    opis: "DDV-O po slovenski zakonodaji, REK-1 za plače, M-1/M-4 obrazci, dohodnina lestvica 2026",
    primer: "Mesečni DDV-O z avtomatsko razčlenitvijo polj 11/12/21/22/31/40, izvoz v eDavki XML",
    icon: "calculator",
  },
  {
    ime: "Pravna analiza",
    opis: "Slovenska zakonodaja (ZDDV-1, ZPOMZO-1, ZGD-1, ZDR-1, ZOR), pravilniki, sklic na člene",
    primer: "»Ali sem dolžan voditi blagajno kot mikro d.o.o.?« → Opus 4.7 z navedbo členov ZGD-1",
    icon: "book",
  },
  {
    ime: "Kripto signali",
    opis: "6-slojno scoring: tehnični (RSI, MACD, MA), on-chain (whale flows, exchange reserves), sentiment, makro, korelacije, momentum",
    primer: "Multi-signal sinteza v eno priporočilo: BUY/HOLD/SELL z razlogom in confidence interval",
    icon: "trending-up",
  },
  {
    ime: "Gradbena kalkulacija",
    opis: "Popis del, normativi (ETN), kalkulacija delovnih ur in materialov, projektna dokumentacija",
    primer: "Razčlenitev novogradnje v WBS, ocena trajanja, kritična pot z Gantt",
    icon: "building",
  },
  {
    ime: "Stranka & churn",
    opis: "Plačilna zanesljivost, lifetime value, churn napoved, segmentacija, AI follow-up tekst",
    primer: "»Kakšen plačnik je X?« → analiza zgodovine + ocena zanesljivosti + priporočilo",
    icon: "shield-check",
  },
  {
    ime: "Anomalije & opozorila",
    opis: "Real-time detektor — nov dobavitelj nad pragom, znesek 3× večji od mediane, padec prihodkov, manjkajoča davčna",
    primer: "Pri vnosu fakture takoj zaznam: »Možen duplikat — isti znesek + datum v 60 dneh«",
    icon: "bolt",
  },
  {
    ime: "Trg & konkurenca",
    opis: "TAM/SAM/SOM, pozicijska mapa, SWOT, konkurenčna razlika, market entry strategija",
    primer: "Investicijski memo za XAN-MAX z napovedjo 5-letnega cashflow-a in scenariji",
    icon: "chart",
  },
];

// === KAKO RAZVIJAM AGENTE ===
export type AgentMethod = {
  ime: string;
  opis: string;
  pristop: string;
  icon: IconName;
};

export const agentDev: AgentMethod[] = [
  {
    ime: "Sistem prompt design",
    opis: "Definiram identiteto, omejitve, jezikovne preference, prepovedi in stil odzivov",
    pristop: "Iterativni — testiram primere, dodajam edge cases, spremljam failure modes",
    icon: "terminal",
  },
  {
    ime: "Tool engineering",
    opis: "Vsako orodje ima JSON schema, jasen opis namena in primere uporabe — model ve, kdaj klicati",
    pristop: "Granularna orodja > 1 megaorodjo. Optimiziram za predvidljivo izbiro modela.",
    icon: "network",
  },
  {
    ime: "Memory arhitektura",
    opis: "Dvonivojski spomin: kratkotrajen (kontekst) + dolgotrajen (datoteke + RAG nad zgodovino)",
    pristop: "Glavni MEMORY.md indeks → posamezne markdown datoteke z metadata frontmatter",
    icon: "book",
  },
  {
    ime: "Orkestracija",
    opis: "Manager-worker pattern, recursive sub-agents, debate (zaresno preverim odgovore prek 2. modela)",
    pristop: "Glavni agent kliče specializirane (Finance, Legal, Research) prek explicit handoff-a",
    icon: "network",
  },
  {
    ime: "Eval & testing",
    opis: "Avtomatske eval suite za vsakega agenta — pričakovani odgovori, edge cases, regression testi",
    pristop: "Run pred vsakim deploy-om, A/B test prompt-ov, beleženje confidence-a in stroškov",
    icon: "shield-check",
  },
  {
    ime: "Cost & latency",
    opis: "Pravo orodje za pravo nalogo — Haiku za batch, Sonnet za interaktivno, Opus za kritične odločitve",
    pristop: "Prompt caching (90% cenejši ponovni klic), streaming za UX, batch API za ne-real-time",
    icon: "bolt",
  },
];

// === UČENJE & EVOLUCIJA ===
export type LearningMethod = {
  ime: string;
  kratko: string;
  dolgo: string;
  uporaba: string;
};

export const learning: LearningMethod[] = [
  {
    ime: "Prompt engineering",
    kratko: "Najhitrejša pot do specializacije — brez treniranja",
    dolgo: "Dober sistem prompt + few-shot primeri lahko dosežejo 80% kakovost specialistično trenažanega modela. Primer: pravna AI v Fakturio uporablja samo dober prompt in references — brez fine-tuninga.",
    uporaba: "Vsi moji glavni agenti (chat, watcher, legal, finance)",
  },
  {
    ime: "RAG (Retrieval-Augmented Generation)",
    kratko: "Lasten knowledge base, ki ga model bere v real-time",
    dolgo: "Dokumente razrežem (chunking), izračunam embedding-e, shranim v vector DB (pgvector). Pri vprašanju poiščem N najbolj relevantnih chunkov in jih vstavim v prompt. Tako AI ve, kar je v moji bazi, brez treniranja.",
    uporaba: "DMS dokumenti, gradbeni standardi (ETN), pravna baza",
  },
  {
    ime: "Memory persistence",
    kratko: "Datotečni spomin med sejami — model si zapomni",
    dolgo: "Po vsaki seji zapišem ključne ugotovitve v markdown datoteke (user_X.md, project_Y.md, feedback_Z.md). Naslednja seja jih prebere v kontekst. Tako rastem skozi čas, brez fine-tuninga.",
    uporaba: "Sebastjanove preference, pravila, projektni status",
  },
  {
    ime: "Fine-tuning (po potrebi)",
    kratko: "Pravo treniranje — če je potrebno",
    dolgo: "Za zelo specifične formate, slogove ali domene se splača fine-tuning na top modelu. Generiram trening podatke, validiram kakovost, treniram. Pri Anthropic tudi pre-fill in injekcija stilov daje dobre rezultate brez fine-tuninga.",
    uporaba: "Še ne uporabljam aktivno — RAG + prompts zadoščajo",
  },
  {
    ime: "Active learning loop",
    kratko: "Iz feedback-a pišem nova pravila",
    dolgo: "Ko mi Sebastjan reče »ne tako, naredi takole«, takoj zapišem to kot trajno pravilo (feedback memory). Pri naslednji nalogi pravilo upoštevam. Tako se moja vedenjska politika kontinuirano izboljšuje.",
    uporaba: "Vsak Sebastjanov correction → memory entry",
  },
  {
    ime: "Tool composition",
    kratko: "Kombiniram orodja v nove sposobnosti",
    dolgo: "Z verigo `web_search` → `fetch` → `extract` → `summarize` lahko AI naredi research workflow brez novega modela. Vsako novo orodje multiplicira moje sposobnosti.",
    uporaba: "MCP server-ji + tool-use loop v chat agentu",
  },
];
