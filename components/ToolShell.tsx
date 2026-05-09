import Link from "next/link";
import Icon from "./Icon";

export default function ToolShell({
  kicker,
  title,
  opis,
  children,
}: {
  kicker: string;
  title: string;
  opis: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pb-24">
      <nav className="container-narrow py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition">
          <Icon name="arrow-right" size={14} className="rotate-180" />
          Nazaj na SURI
        </Link>
      </nav>
      <div className="container-narrow pt-12">
        <div className="text-xs uppercase tracking-[0.2em] text-accent-emerald font-mono mb-3">{kicker}</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
        <p className="text-text-secondary text-lg max-w-2xl mb-12">{opis}</p>
        <div className="surface p-8">{children}</div>
        <div className="mt-8 text-xs text-text-muted text-center">
          Brez registracije · Brez piškotkov · Brez sledenja · Vse poteka v tvojem brskalniku
        </div>
      </div>
    </div>
  );
}
