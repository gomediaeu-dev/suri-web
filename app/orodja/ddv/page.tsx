"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/ToolShell";

const STOPNJE = [
  { v: 22, l: "Splošna 22%" },
  { v: 9.5, l: "Znižana 9.5%" },
  { v: 5, l: "Posebna 5%" },
  { v: 0, l: "Oproščeno 0%" },
];

export default function DdvKalkulator() {
  const [vhodTip, setVhodTip] = useState<"neto" | "bruto">("neto");
  const [znesek, setZnesek] = useState("100");
  const [stopnja, setStopnja] = useState(22);

  const rezultat = useMemo(() => {
    const z = parseFloat(znesek.replace(",", ".")) || 0;
    if (vhodTip === "neto") {
      const ddv = (z * stopnja) / 100;
      return { neto: z, ddv, bruto: z + ddv };
    } else {
      const neto = z / (1 + stopnja / 100);
      const ddv = z - neto;
      return { neto, ddv, bruto: z };
    }
  }, [znesek, stopnja, vhodTip]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("sl-SI", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + " €";

  return (
    <ToolShell
      kicker="Brezplačno orodje #1"
      title="DDV kalkulator"
      opis="Hitri preračun med neto in bruto zneskom za vse veljavne slovenske stopnje DDV."
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Vhod</label>
            <div className="flex gap-2">
              <button
                onClick={() => setVhodTip("neto")}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition ${vhodTip === "neto" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "surface-elev text-text-secondary hover:text-text-primary"}`}
                type="button"
              >
                Vnesi neto
              </button>
              <button
                onClick={() => setVhodTip("bruto")}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition ${vhodTip === "bruto" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "surface-elev text-text-secondary hover:text-text-primary"}`}
                type="button"
              >
                Vnesi bruto
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Znesek (EUR)</label>
            <input
              type="text"
              inputMode="decimal"
              value={znesek}
              onChange={(e) => setZnesek(e.target.value)}
              className="w-full bg-bg-elev border border-border rounded-xl px-4 py-3 text-2xl font-semibold text-text-primary outline-none focus:border-accent-emerald/50 transition"
              placeholder="100,00"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">Stopnja DDV</label>
            <div className="grid grid-cols-2 gap-2">
              {STOPNJE.map((s) => (
                <button
                  key={s.v}
                  onClick={() => setStopnja(s.v)}
                  className={`py-2.5 rounded-lg text-sm font-medium transition ${stopnja === s.v ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "surface-elev text-text-secondary hover:text-text-primary"}`}
                  type="button"
                >
                  {s.l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Card label="Neto znesek" value={fmt(rezultat.neto)} />
          <Card label={`DDV (${stopnja}%)`} value={fmt(rezultat.ddv)} accent />
          <Card label="Bruto skupaj" value={fmt(rezultat.bruto)} big />
        </div>
      </div>
    </ToolShell>
  );
}

function Card({ label, value, accent, big }: { label: string; value: string; accent?: boolean; big?: boolean }) {
  return (
    <div className={`surface-elev p-5 ${accent ? "border-accent-emerald/40" : ""} ${big ? "border-emerald-500" : ""}`}>
      <div className="text-xs uppercase tracking-widest text-text-muted mb-1">{label}</div>
      <div className={`font-semibold tabular-nums ${big ? "text-3xl text-gradient-emerald" : accent ? "text-2xl text-emerald-400" : "text-2xl text-text-primary"}`}>{value}</div>
    </div>
  );
}
