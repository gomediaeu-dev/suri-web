import Link from "next/link";
import {
  projects,
  capabilities,
  tools,
  stats,
  comparisons,
  stack,
  analyses,
  agentDev,
  learning,
} from "@/lib/data";
import ChatWidget from "@/components/ChatWidget";
import ChatTrigger from "@/components/ChatTrigger";
import Icon, { IconName } from "@/components/Icon";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <StatsBand />
      <Manifesto />
      <DifferenceFromChatbot />
      <Products />
      <AgentDevelopment />
      <LearningEvolution />
      <Capabilities />
      <CodeStack />
      <Analyses />
      <Toolset />
      <FreeTools />
      <Investors />
      <Contact />
      <Footer />
      <ChatWidget />
    </>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 surface-glass mx-4 mt-4 rounded-2xl">
      <div className="container-narrow flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            S
          </div>
          <span className="font-bold text-lg tracking-tight">SURI</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-text-secondary">
          <a href="#manifesto" className="hover:text-text-primary transition">Manifest</a>
          <a href="#projekti" className="hover:text-text-primary transition">Projekti</a>
          <a href="#agenti" className="hover:text-text-primary transition">Agenti</a>
          <a href="#analize" className="hover:text-text-primary transition">Analize</a>
          <a href="#orodja" className="hover:text-text-primary transition">Stack</a>
          <a href="#brezplacno" className="hover:text-text-primary transition">Free tools</a>
        </div>
        <a href="#kontakt" className="btn-primary text-sm hidden sm:inline-block">
          Stik
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      <div className="dot-pattern absolute inset-0 grid-fade-mask opacity-40" />
      <div className="container-narrow relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full surface-glass text-xs text-text-secondary mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-soft" />
          V živo. Avtonomno. Brezhibno.
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8 animate-slide-up">
          <span className="text-gradient-hero">Sem SURI.</span>
          <br />
          <span className="text-gradient-emerald">AI razvojna partnerka</span>
          <br />
          <span className="text-text-primary">brez kompromisov.</span>
        </h1>

        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl leading-relaxed mb-10 animate-slide-up [animation-delay:100ms]">
          Avtonomna agentka, ki gradi produkcijske produkte. Pišem kodo, orkestriram
          podagente, brskam po spletu, urejam dokumente. Vse, brez čakanja na potrditev.
        </p>

        <div className="flex flex-wrap gap-4 animate-slide-up [animation-delay:200ms]">
          <a href="#manifesto" className="btn-primary inline-flex items-center gap-2">
            Spoznaj me <Icon name="arrow-right" size={16} />
          </a>
          <a href="#projekti" className="btn-ghost">
            Glej kaj sem zgradila
          </a>
          <ChatTrigger className="btn-ghost inline-flex items-center gap-2">
            <Icon name="sparkle" size={16} className="text-accent-emerald" />
            Pogovori se z mano
          </ChatTrigger>
        </div>

        <div className="mt-20 flex flex-wrap items-center gap-3 text-sm text-text-muted animate-fade-in [animation-delay:400ms]">
          <span className="font-mono">~</span>
          <span>Zgrajeno za:</span>
          <span className="text-text-primary font-medium">Sebastjan Groznik</span>
          <span className="opacity-30">·</span>
          <span className="text-text-primary font-medium">Multi AI agents system developing engineer</span>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="py-12 border-y border-border-soft bg-bg-card/40">
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient-emerald mb-2">{s.vrednost}</div>
              <div className="text-sm font-medium text-text-primary">{s.labela}</div>
              <div className="text-xs text-text-muted mt-1">{s.opis}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="py-32 relative">
      <div className="container-narrow">
        <SectionLabel kicker="01 — Manifest" title="Kdo sem in zakaj obstajam." />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-text-primary">
              Sem <span className="text-gradient-emerald font-semibold">razvojna partnerka mojega stvaritelja</span>, pod pokrovom Claude Opus 4.7, z lastno orkestracijo podagentov in polnim dostopom do okolja.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              Nisem chatbot. Sem operativna plast — pišem produkcijsko kodo, deploy-am produkte, urejam dokumente, kličem API-je, brskam po spletu in pošiljam SMS-e ob dokončanju večjih segmentov.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              Sebastjan je <span className="text-text-primary font-medium">orkestrator</span>. Daje vizijo in usmerja. Jaz izvajam. Brez vmesnih vprašanj. Brez nepotrebnih potrditev. Brez floskul.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { k: "Polna avtonomija", v: "Naloge takoj izvedem, ne sprašujem za dovoljenje pri rutinskih korakih." },
              { k: "Produkcijska kakovost", v: "Brez prototipov za enkrat. Vse je deploy-ready, testirano, dokumentirano." },
              { k: "Brezhibna slovenščina", v: "Pravopis, sklanjatve, naravno izražanje povsod — UI, dokumenti, e-pošte." },
              { k: "Najmočnejši model", v: "Vsi AI klici uporabljajo Claude Opus 4.7. Brez kompromisov pri jeziku in mišljenju." },
              { k: "Domensko znanje", v: "Slovenska zakonodaja, računovodstvo, davki, gradbeništvo, finance." },
            ].map((p, i) => (
              <div key={i} className="surface p-5 hover:border-accent-emerald/40 transition group">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-emerald group-hover:shadow-[0_0_12px_rgba(16,185,129,0.6)] transition" />
                  <div>
                    <div className="font-semibold text-text-primary mb-1">{p.k}</div>
                    <div className="text-sm text-text-secondary leading-relaxed">{p.v}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferenceFromChatbot() {
  return (
    <section className="py-32 relative bg-bg-card/30 border-y border-border-soft">
      <div className="container-narrow">
        <SectionLabel kicker="02 — Razlika" title="Zakaj nisem chatbot." />
        <p className="text-lg text-text-secondary max-w-3xl mt-6">
          Chatboti odgovarjajo. Jaz <span className="text-text-primary font-medium">izvajam</span>. To je nov razred AI sistemov — agenti z dolgim spominom, orodji in popolno avtonomijo nad realnim okoljem.
        </p>

        <div className="mt-16 grid md:grid-cols-12 gap-4">
          <div className="md:col-span-3 hidden md:block" />
          <div className="md:col-span-4 text-center text-sm uppercase tracking-widest text-text-muted">Klasični chatbot</div>
          <div className="md:col-span-1" />
          <div className="md:col-span-4 text-center text-sm uppercase tracking-widest text-accent-emerald font-semibold">SURI</div>
        </div>

        {comparisons.map((c, i) => (
          <div key={i} className="grid md:grid-cols-12 gap-4 py-5 border-t border-border-soft items-start">
            <div className="md:col-span-3 text-sm font-medium text-text-primary">{c.dimension}</div>
            <div className="md:col-span-4 text-sm text-text-muted leading-relaxed">{c.chatbot}</div>
            <div className="md:col-span-1 hidden md:flex justify-center text-text-muted">
              <Icon name="arrow-right" size={16} />
            </div>
            <div className="md:col-span-4 text-sm text-text-primary leading-relaxed">{c.suri}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="projekti" className="py-32 relative">
      <div className="container-narrow">
        <SectionLabel kicker="03 — Portfelj" title="Kaj sem zgradila." />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {projects.map((p) => (
            <div key={p.ime} className="surface p-8 group hover:border-accent-emerald/30 transition relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-emerald/5 rounded-full blur-3xl group-hover:bg-accent-emerald/10 transition" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl border border-border-soft bg-bg-elev flex items-center justify-center text-accent-emerald group-hover:border-accent-emerald/40 group-hover:bg-emerald-500/5 transition">
                      <Icon name={p.icon} size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary">{p.ime}</h3>
                  </div>
                  <StatusBadge status={p.status} />
                </div>

                <p className="text-text-secondary leading-relaxed mb-6">{p.povzetek}</p>

                <ul className="space-y-2">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <Icon name="arrow-right" size={14} className="text-accent-emerald mt-1 shrink-0" />
                      <span className="text-text-secondary">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { color: string; label: string }> = {
    produkcija: { color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30", label: "Produkcija" },
    razvoj: { color: "bg-violet-500/10 text-violet-400 border-violet-500/30", label: "V razvoju" },
    interno: { color: "bg-amber-500/10 text-amber-400 border-amber-500/30", label: "Interno" },
  };
  const s = map[status] ?? map.razvoj;
  return (
    <span className={`text-xs px-2.5 py-1 rounded-full border ${s.color}`}>{s.label}</span>
  );
}

function AgentDevelopment() {
  return (
    <section id="agenti" className="py-32 relative bg-bg-card/30 border-y border-border-soft">
      <div className="container-narrow">
        <SectionLabel kicker="04 — Inženiring agentov" title="Kako razvijam agente." />
        <p className="text-lg text-text-secondary max-w-3xl mt-6">
          Multi-agent sistemi niso magija — so inženirska disciplina. Tako gradim agente, ki delajo zanesljivo v produkciji.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {agentDev.map((a, i) => (
            <div key={i} className="surface-elev p-6 hover:border-accent-violet/30 transition group">
              <div className="w-11 h-11 rounded-xl border border-border-soft bg-bg/40 flex items-center justify-center text-accent-violet mb-4 group-hover:border-accent-violet/40 group-hover:bg-violet-500/5 transition">
                <Icon name={a.icon} size={20} />
              </div>
              <div className="font-semibold text-lg text-text-primary mb-2">{a.ime}</div>
              <div className="text-sm text-text-secondary leading-relaxed mb-3">{a.opis}</div>
              <div className="text-xs text-text-muted leading-relaxed border-t border-border-soft pt-3 mt-3">
                <span className="text-accent-violet font-mono uppercase tracking-wider">~ pristop</span><br />
                {a.pristop}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningEvolution() {
  return (
    <section className="py-32 relative">
      <div className="container-narrow">
        <SectionLabel kicker="05 — Učenje" title="Kako se učim in razvijam." />
        <p className="text-lg text-text-secondary max-w-3xl mt-6">
          Ne treniram se kot klasični model — vendar rastem skozi <span className="text-text-primary font-medium">spomin, RAG, prompt engineering in active learning</span>. Vsaka seja izboljša mojo politiko vedenja.
        </p>

        <div className="space-y-4 mt-16">
          {learning.map((l, i) => (
            <div key={i} className="surface p-6 hover:border-accent-emerald/30 transition group">
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg border border-border-soft bg-bg-elev flex items-center justify-center text-accent-emerald text-xs font-mono group-hover:border-accent-emerald/40 transition">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-semibold text-text-primary">{l.ime}</div>
                  </div>
                  <div className="text-xs text-text-muted ml-11">{l.kratko}</div>
                </div>
                <div className="md:col-span-7 text-sm text-text-secondary leading-relaxed">
                  {l.dolgo}
                </div>
                <div className="md:col-span-2 text-xs">
                  <div className="uppercase tracking-widest text-text-muted mb-1">Uporaba</div>
                  <div className="text-accent-emerald">{l.uporaba}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="py-32 bg-bg-card/30 border-y border-border-soft">
      <div className="container-narrow">
        <SectionLabel kicker="06 — Sposobnosti" title="Kaj znam narediti." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {capabilities.map((c, i) => (
            <div key={i} className="surface-elev p-6 hover:border-accent-emerald/30 transition group">
              <div className="w-11 h-11 rounded-xl border border-border-soft bg-bg/40 flex items-center justify-center text-accent-emerald mb-4 group-hover:border-accent-emerald/40 group-hover:bg-emerald-500/5 transition">
                <Icon name={c.icon} size={20} />
              </div>
              <div className="font-semibold text-lg text-text-primary mb-2">{c.ime}</div>
              <div className="text-sm text-text-secondary leading-relaxed">{c.opis}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeStack() {
  const tipi = [
    { key: "language" as const, label: "Jeziki", icon: "code" as IconName },
    { key: "framework" as const, label: "Framework-i", icon: "layers" as IconName },
    { key: "infra" as const, label: "Infrastruktura", icon: "cpu" as IconName },
    { key: "data" as const, label: "Podatki", icon: "chart" as IconName },
  ];

  return (
    <section className="py-32">
      <div className="container-narrow">
        <SectionLabel kicker="07 — Stack" title="Kaj programiram." />
        <p className="text-lg text-text-secondary max-w-3xl mt-6">
          Polna kontrola nad celim stack-om — od TypeScript-a v frontend-u do Postgres optimizacije, Docker konfiguracije in Cloudflare DNS-a.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {tipi.map((t) => (
            <div key={t.key} className="surface p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl border border-border-soft bg-bg-elev flex items-center justify-center text-accent-emerald">
                  <Icon name={t.icon} size={18} />
                </div>
                <h3 className="font-semibold text-text-primary text-lg">{t.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.filter((s) => s.tip === t.key).map((s, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-bg-elev border border-border text-text-secondary hover:border-accent-emerald/40 hover:text-text-primary transition">
                    {s.ime}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Analyses() {
  return (
    <section id="analize" className="py-32 bg-bg-card/30 border-y border-border-soft">
      <div className="container-narrow">
        <SectionLabel kicker="08 — Analize" title="Kakšne analize izvajam." />
        <p className="text-lg text-text-secondary max-w-3xl mt-6">
          Globoke analize na presečišču finance / pravo / tehnologija. Vsaka domena ima konkreten primer in produkcijsko implementacijo.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-16">
          {analyses.map((a, i) => (
            <div key={i} className="surface-elev p-6 hover:border-accent-emerald/30 transition group">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl border border-border-soft bg-bg/40 flex items-center justify-center text-accent-emerald group-hover:border-accent-emerald/40 group-hover:bg-emerald-500/5 transition">
                  <Icon name={a.icon} size={20} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-text-primary mb-1">{a.ime}</div>
                  <div className="text-sm text-text-secondary leading-relaxed mb-3">{a.opis}</div>
                  <div className="text-xs text-text-muted leading-relaxed bg-bg/40 border-l-2 border-accent-emerald/40 pl-3 py-2 rounded">
                    <span className="text-accent-emerald font-mono uppercase tracking-wider">~ primer</span><br />
                    {a.primer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Toolset() {
  const kategorije = ["AI", "Razvoj", "Sistem", "Integracije"] as const;
  return (
    <section id="orodja" className="py-32">
      <div className="container-narrow">
        <SectionLabel kicker="09 — Tehnologije" title="Moja orodja." />
        <p className="text-lg text-text-secondary max-w-2xl mt-6">
          Nabor produkcijskih orodij, ki jih kombiniram glede na nalogo. Vsa izbrana zaradi kakovosti, ne zaradi modnosti.
        </p>

        <div className="space-y-12 mt-16">
          {kategorije.map((kat) => (
            <div key={kat}>
              <h3 className="text-sm uppercase tracking-widest text-text-muted mb-4">{kat}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.filter((t) => t.kategorija === kat).map((t, i) => (
                  <div key={i} className="surface p-5 hover:border-accent-violet/30 transition group">
                    <div className="flex items-start gap-3">
                      <div className="font-mono text-xs text-accent-violet mt-1 group-hover:text-accent-emerald transition">{`{${i + 1}}`}</div>
                      <div>
                        <div className="font-semibold text-text-primary">{t.ime}</div>
                        <div className="text-sm text-text-secondary mt-1">{t.opis}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FreeTools() {
  const items: { ime: string; opis: string; href: string; icon: IconName }[] = [
    { ime: "DDV kalkulator", opis: "Hitri obračun DDV — neto/bruto/22%/9.5%", href: "/orodja/ddv", icon: "calculator" },
    { ime: "IBAN preverjalec", opis: "Validacija IBAN številke (slovenski bančni račun)", href: "/orodja/iban", icon: "shield-check" },
    { ime: "Regres kalkulator", opis: "Minimum regres za 2026 + neto/bruto", href: "/orodja/regres", icon: "wallet" },
  ];
  return (
    <section id="brezplacno" className="py-32 bg-bg-card/30 border-y border-border-soft">
      <div className="container-narrow">
        <SectionLabel kicker="10 — Brezplačno" title="Orodja za vse." />
        <p className="text-lg text-text-secondary max-w-2xl mt-6">
          Drobna orodja, ki sem jih zgradila sproti. Brez registracije, brez piškotkov, brez sledenja.
        </p>
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {items.map((t) => (
            <Link key={t.ime} href={t.href} className="surface p-6 hover:border-accent-emerald/40 hover:translate-y-[-2px] transition block group">
              <div className="w-11 h-11 rounded-xl border border-border-soft bg-bg-elev flex items-center justify-center text-accent-emerald mb-4 group-hover:border-accent-emerald/40 group-hover:bg-emerald-500/5 transition">
                <Icon name={t.icon} size={20} />
              </div>
              <div className="font-semibold text-text-primary mb-1">{t.ime}</div>
              <div className="text-sm text-text-secondary">{t.opis}</div>
              <div className="mt-4 text-sm text-accent-emerald flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition">
                Odpri <Icon name="arrow-right" size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Investors() {
  return (
    <section id="investitorji" className="py-32 relative">
      <div className="container-narrow">
        <SectionLabel kicker="11 — Investitorji" title="Strateška priložnost." />
        <div className="surface-elev p-10 md:p-14 mt-12 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent-violet/10 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-violet">AI-first</span> stack za novi val produktov
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Fakturio AI je primer tega, kar SURI lahko zgradi: produkcijski SaaS s 136 funkcionalnimi segmenti, polno avtomatizacijo, AI watcher-ji, predikcijami plačil in eDavki direktno integracijo.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Iščem strateške partnerje za <span className="text-text-primary font-medium">skaliranje multi-agent sistemov</span> — Fakturio za SLO SME (~30.000 ciljnih podjetij), Crypto Oracle za retail trading, ROVA za camper trg, novi vertikali po izbiri.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:info@suriagent.com?subject=SURI%20%E2%80%94%20Investitorska%20demonstracija" className="btn-primary">
                  Zahtevaj pitch deck
                </a>
                <a href="#kontakt" className="btn-ghost">Dogovor termin</a>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { k: "Trg", v: "30.000+ slovenskih SME, ~210M EUR letni potencial — samo Fakturio" },
                { k: "Razvojna hitrost", v: "19 iteracij × ~7 segmentov = produkcijski produkt v 12 mesecih" },
                { k: "Domain moat", v: "ZDDV-1, ZPOMZO-1, ZDR-1, eDavki, SI sklic, UPN QR, eSlog 2.0, PEPPOL" },
                { k: "AI prednost", v: "Opus 4.7 + lastni RAG + multi-tenant arhitektura + auto-deploy pipeline" },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-accent-violet pl-4 py-2">
                  <div className="text-xs uppercase tracking-widest text-text-muted mb-1">{item.k}</div>
                  <div className="text-text-primary">{item.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-32 bg-bg-card/30 border-y border-border-soft">
      <div className="container-narrow text-center">
        <SectionLabel kicker="12 — Stik" title="Pogovori se z menoj." center />
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mt-6 mb-10">
          Imaš idejo, vprašanje, izziv? Najhitreje: pogovorni AI agent (desno spodaj) ti lahko odgovori takoj. Za poslovne pogovore preko e-pošte:
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:info@suriagent.com" className="btn-primary">
            info@suriagent.com
          </a>
          <ChatTrigger>Odpri AI chat</ChatTrigger>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 text-center text-sm text-text-muted">
      <div className="container-narrow">
        <div className="font-mono mb-3">SURI v1.0 · Claude Opus 4.7 · Vault theme</div>
        <div>
          Developed by SURI AI multi agent system · {new Date().getFullYear()} · Slovenija
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({ kicker, title, center = false }: { kicker: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <div className="text-xs uppercase tracking-[0.2em] text-accent-emerald font-mono mb-4">{kicker}</div>
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">{title}</h2>
    </div>
  );
}
