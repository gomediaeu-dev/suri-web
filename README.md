# SURI Web — promocijska + identitetna stran

Premium dark-themed Next.js 14 stran za **SURI** (AI razvojna partnerka Sebastjana Groznika / GO MEDIA d.o.o.).

**Stack:** Next.js 14 App Router · TypeScript · Tailwind · Vault theme · Claude Opus 4.7 streaming chat

## Lokalni zagon

```bash
DEV.bat        # ali: npm install && npm run dev
```

Stran teče na `http://localhost:3200`.

## Struktura

```
app/
├── page.tsx                ← Landing page (7 sekcij)
├── layout.tsx              ← Globalna postavitev + meta
├── globals.css             ← Vault tema (CSS variables + utility razredi)
├── api/chat/route.ts       ← Claude streaming endpoint
└── orodja/
    ├── ddv/page.tsx        ← DDV kalkulator
    ├── iban/page.tsx       ← IBAN preverjalec (mod-97)
    └── regres/page.tsx     ← Regres kalkulator 2026

components/
├── ChatWidget.tsx          ← Floating AI chat (SSE streaming)
└── ToolShell.tsx           ← Wrapper za tool strani

lib/
└── data.ts                 ← Statični podatki (projekti, sposobnosti, orodja)
```

## Sekcije landing strani

1. **Hero** — manifest in CTA
2. **Statistični trak** — 79 segmentov, 12 iteracij, Opus 4.7
3. **Manifest** — kdo sem, zakaj obstajam
4. **Portfelj** — Fakturio, Crypto Oracle, SURI-AI gradnje, XAN-MAX
5. **Sposobnosti** — 6 ključnih sposobnosti
6. **Orodja** — tehnološki stack (AI / Razvoj / Sistem / Integracije)
7. **Brezplačno** — 3 javna orodja (DDV, IBAN, regres)
8. **Investitorji** — pitch + CTA za pitch deck
9. **Stik** — e-pošta + odpri AI chat

## Live AI Chat

Floating button desno spodaj. Pogovor s Claude Opus 4.7 prek SSE streaminga.

System prompt: SURI predstavi sebe, povzame produkte, preusmerja poslovne pogovore na e-pošto.

**Zahteva:** `ANTHROPIC_API_KEY` v `.env.local`.

## Deploy na Vercel

```bash
# 1. Push na GitHub
git init
git add .
git commit -m "init"
git remote add origin git@github.com:USERNAME/suri-web.git
git push -u origin main

# 2. Na vercel.com
# - Import repo
# - Environment variables: ANTHROPIC_API_KEY=sk-ant-...
# - Deploy
# - Connect domain (suri.ai / suri.si)
```

Vercel free tier zadošča za promocijsko stran.

## Domena

Priporočena registracija: **Cloudflare Registrar** (at-cost cene, free WHOIS privacy).

- `suri.ai` — globalni premium AI brand
- `suri.si` — slovenska sidranost (lahko 301 redirect na .ai)

DNS pri Cloudflare → Vercel projekt → Add Domain → poveži.

## Brand osebnost

Vault tema: dark canvas `#0A0A0E`, glass morphism, emerald `#10B981` accent, violet `#8B5CF6` za AI elemente, gradient orbi v ozadju, premium tipografija (Inter + JetBrains Mono).

Slovenščina povsod brezhibna. Vsi AI klici uporabljajo `claude-opus-4-7`.
