"use client";

import { useState, useMemo } from "react";
import ToolShell from "@/components/ToolShell";
import Icon from "@/components/Icon";

const SLO_BANKE: Record<string, string> = {
  "01": "Banka Slovenije",
  "02": "NLB d.d.",
  "03": "Sparkasse d.d.",
  "04": "Nova KBM d.d.",
  "05": "SKB banka d.d.",
  "06": "Banka Celje (Abanka)",
  "10": "Banka Koper (Intesa Sanpaolo)",
  "14": "Sberbank",
  "15": "Hypo Alpe-Adria-Bank",
  "17": "Deželna banka Slovenije",
  "19": "Sberbank d.d.",
  "20": "Probanka d.d.",
  "24": "Raiffeisen banka",
  "25": "Hranilnica LON",
  "26": "Factor banka",
  "27": "Probanka d.d.",
  "28": "PRIMORSKA HRANILNICA VIPAVA",
  "29": "BKS Bank AG",
  "30": "Sberbank banka d.d.",
  "33": "Addiko Bank d.d.",
  "34": "Banka Sparkasse d.d.",
  "35": "Probanka",
  "36": "KD Banka",
  "61": "Poštna banka Slovenije",
  "75": "Delavska hranilnica d.d.",
};

function validateIBAN(input: string): { ok: boolean; reason?: string; banka?: string; format?: string } {
  const iban = input.replace(/\s+/g, "").toUpperCase();
  if (iban.length === 0) return { ok: false, reason: "Vnesi IBAN številko." };
  if (!/^SI56\d{15}$/.test(iban)) {
    return { ok: false, reason: "Slovenski IBAN ima obliko SI56 + 15 števk (skupaj 19 znakov)." };
  }

  // mod-97 preverba
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const numeric = rearranged.replace(/[A-Z]/g, (c) => (c.charCodeAt(0) - 55).toString());
  let remainder = 0;
  for (let i = 0; i < numeric.length; i++) {
    remainder = (remainder * 10 + parseInt(numeric[i], 10)) % 97;
  }

  if (remainder !== 1) {
    return { ok: false, reason: "Kontrolna vsota ni veljavna (mod-97)." };
  }

  const bankaPrefix = iban.slice(4, 6);
  const banka = SLO_BANKE[bankaPrefix] || "Neznana banka";
  const format = `${iban.slice(0, 4)} ${iban.slice(4, 8)} ${iban.slice(8, 12)} ${iban.slice(12, 16)} ${iban.slice(16)}`;

  return { ok: true, banka, format };
}

export default function IbanPreverjalec() {
  const [iban, setIban] = useState("");
  const rez = useMemo(() => validateIBAN(iban), [iban]);

  return (
    <ToolShell
      kicker="Brezplačno orodje #2"
      title="IBAN preverjalec"
      opis="Preveri pravilnost slovenskega IBAN računa (SI56) z mod-97 algoritmom in identifikacijo banke."
    >
      <div className="space-y-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">IBAN številka</label>
          <input
            type="text"
            value={iban}
            onChange={(e) => setIban(e.target.value)}
            placeholder="SI56 1234 5678 9012 345"
            className="w-full bg-bg-elev border border-border rounded-xl px-4 py-3 text-xl font-mono text-text-primary outline-none focus:border-accent-emerald/50 transition tracking-wider"
          />
        </div>

        {iban.trim().length > 0 && (
          <div className={`surface-elev p-6 ${rez.ok ? "border-emerald-500/50" : "border-red-500/50"}`}>
            {rez.ok ? (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Icon name="shield-check" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-emerald-400 text-lg">Veljaven IBAN</div>
                    <div className="text-xs text-text-muted">Mod-97 kontrolna vsota se ujema</div>
                  </div>
                </div>
                <Row k="Format" v={rez.format!} mono />
                <Row k="Banka" v={rez.banka!} />
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                    <Icon name="x" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-red-400 text-lg">Neveljaven IBAN</div>
                  </div>
                </div>
                <div className="text-text-secondary text-sm pl-13">{rez.reason}</div>
              </>
            )}
          </div>
        )}

        <div className="text-xs text-text-muted leading-relaxed">
          ℹ Tvoja IBAN številka <strong>nikoli ne zapusti tvojega brskalnika</strong>. Preverba poteka lokalno z mod-97 algoritmom (ISO 13616).
        </div>
      </div>
    </ToolShell>
  );
}

function Row({ k, v, mono }: { k: string; v: string; mono?: boolean }) {
  return (
    <div className="flex justify-between items-center py-2.5 border-t border-border-soft first:border-t-0">
      <span className="text-sm text-text-muted">{k}</span>
      <span className={`text-text-primary ${mono ? "font-mono text-sm" : "font-medium"}`}>{v}</span>
    </div>
  );
}
