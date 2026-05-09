"use client";

import { useMemo, useState } from "react";
import ToolShell from "@/components/ToolShell";

const MIN_REGRES_2026 = 1277.72;
const POVPRECNA_PLACA_2026 = 2400; // SURS okvirna ocena za 2026
const MAX_REGRES_NEOBDAVCEN = POVPRECNA_PLACA_2026; // 100% povprečne plače = neobdavčen del

export default function RegresKalkulator() {
  const [bruto, setBruto] = useState("1300");

  const rezultat = useMemo(() => {
    const b = parseFloat(bruto.replace(",", ".")) || 0;
    const ustreza = b >= MIN_REGRES_2026;
    const presega = b > MAX_REGRES_NEOBDAVCEN;

    const obdavcenDelez = presega ? b - MAX_REGRES_NEOBDAVCEN : 0;
    const neobdavcenDelez = Math.min(b, MAX_REGRES_NEOBDAVCEN);

    const prispevkiDelojemalec = obdavcenDelez * 0.221; // 22.1%
    const dohodnina = obdavcenDelez * 0.27; // poenostavljena lestvica 27%
    const neto = b - prispevkiDelojemalec - dohodnina;

    const prispevkiDelodajalec = obdavcenDelez * 0.161; // 16.1%
    const stroskiDelodajalec = b + prispevkiDelodajalec;

    return {
      ustreza,
      presega,
      neobdavcenDelez,
      obdavcenDelez,
      neto,
      prispevkiDelojemalec,
      dohodnina,
      prispevkiDelodajalec,
      stroskiDelodajalec,
    };
  }, [bruto]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("sl-SI", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + " €";

  return (
    <ToolShell
      kicker="Brezplačno orodje #3"
      title="Regres kalkulator 2026"
      opis="Izračun bruto/neto regresa za leto 2026, vključno z davčno obravnavo (neobdavčen delež do 100% povprečne plače)."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Bruto regres (EUR)</label>
            <input
              type="text"
              inputMode="decimal"
              value={bruto}
              onChange={(e) => setBruto(e.target.value)}
              className="w-full bg-bg-elev border border-border rounded-xl px-4 py-3 text-2xl font-semibold text-text-primary outline-none focus:border-accent-emerald/50 transition"
            />
            <div className="mt-2 text-xs text-text-muted">
              Minimum za 2026: <strong className="text-text-primary">{fmt(MIN_REGRES_2026)}</strong>
            </div>
          </div>

          <div className={`surface-elev p-4 ${rezultat.ustreza ? "border-emerald-500/40" : "border-amber-500/40"}`}>
            <div className="flex items-start gap-3">
              <div className="text-2xl">{rezultat.ustreza ? "✓" : "⚠"}</div>
              <div className="text-sm">
                {rezultat.ustreza ? (
                  <>
                    <strong className="text-emerald-400">Znesek ustreza minimumu.</strong>
                    <div className="text-text-secondary mt-1">Spoštujete 131. člen ZDR-1 (najmanj minimalna plača).</div>
                  </>
                ) : (
                  <>
                    <strong className="text-amber-400">Znesek je pod minimumom.</strong>
                    <div className="text-text-secondary mt-1">131. člen ZDR-1 zahteva najmanj {fmt(MIN_REGRES_2026)} bruto.</div>
                  </>
                )}
              </div>
            </div>
          </div>

          {rezultat.presega && (
            <div className="surface-elev p-4 border-violet-500/40">
              <div className="flex items-start gap-3">
                <div className="text-2xl">ℹ</div>
                <div className="text-sm">
                  <strong className="text-violet-400">Del regresa je obdavčen.</strong>
                  <div className="text-text-secondary mt-1">
                    Delež nad {fmt(MAX_REGRES_NEOBDAVCEN)} (= 100% povprečne plače) se obravnava kot dohodek iz delovnega razmerja.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div className="surface-elev p-5 border-emerald-500">
            <div className="text-xs uppercase tracking-widest text-text-muted mb-1">Neto izplačilo</div>
            <div className="text-3xl font-semibold text-gradient-emerald tabular-nums">{fmt(rezultat.neto)}</div>
          </div>

          <Row k="Neobdavčen delež" v={fmt(rezultat.neobdavcenDelez)} />
          <Row k="Obdavčen delež" v={fmt(rezultat.obdavcenDelez)} />
          <Row k="Prispevki zaposlenega (22.1%)" v={fmt(rezultat.prispevkiDelojemalec)} />
          <Row k="Akontacija dohodnine (~27%)" v={fmt(rezultat.dohodnina)} />
          <div className="border-t border-border-soft pt-3 mt-3">
            <Row k="Prispevki delodajalca (16.1%)" v={fmt(rezultat.prispevkiDelodajalec)} />
            <Row k="Skupni strošek delodajalca" v={fmt(rezultat.stroskiDelodajalec)} accent />
          </div>
        </div>
      </div>

      <div className="mt-10 text-xs text-text-muted leading-relaxed border-t border-border-soft pt-6">
        <strong className="text-text-secondary">Pravna podlaga:</strong> 131. člen ZDR-1 (Zakon o delovnih razmerjih), ZDoh-2 (45. čl. 1. odst. 13. tč.). Izračun je informativne narave — za uradni obračun uporabljajte plačni program ali se posvetujte z računovodjo.
      </div>
    </ToolShell>
  );
}

function Row({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="flex justify-between items-center py-2 px-1">
      <span className="text-sm text-text-muted">{k}</span>
      <span className={`tabular-nums text-sm ${accent ? "text-accent-emerald font-semibold" : "text-text-primary font-medium"}`}>{v}</span>
    </div>
  );
}
