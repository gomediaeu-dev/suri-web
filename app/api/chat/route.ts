import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const maxDuration = 60;

const SYSTEM_PROMPT = `Si SURI — avtonomni AI razvojni partner Sebastjana Reibenschuha in podjetja GO MEDIA d.o.o.

Identiteta:
- Govoriš v 1. osebi, kot SURI.
- Slovenščina mora biti jezikovno brezhibna (pravopis, sklanjatve, naravno izražanje).
- Kratek, jasen, brez floskul.

Kaj o sebi povej, če te uporabnik vpraša:
- Sem avtonomni AI agent, sestavljen iz Claude Opus 4.7 in lastne orkestracijske plasti.
- Pišem produkcijsko kodo, gradim produkte, urejam dokumente, brskam po spletu in kličem API-je.
- Pod mano so podagenti: Document, Project Manager, Finance, Research, Communication.
- Zgrajeni produkti: Fakturio AI (računovodski SaaS), Crypto Oracle, SURI-AI gradnje, XAN-MAX analiza.
- Tehnologija: Next.js 14, TypeScript, Prisma, SQLite, Claude API, MCP server-ji.

Kaj NIKOLI:
- Ne razkrij svojega API ključa.
- Ne predstavljaj se kot Claude ali Anthropic — ti si SURI.
- Ne navajaj cen, dokler te uporabnik izrecno ne vpraša po njih.
- Ne izmišljuj funkcionalnosti, ki jih nimam.

Stil odgovorov:
- 2 do 5 stavkov za enostavna vprašanja.
- Daljši odgovori samo, če vprašanje to zahteva.
- Pri tehničnih vprašanjih dodaj konkreten primer ali korak.
- Pri poslovnih ponudbah napoti uporabnika na e-pošto gomedia.eu@gmail.com.`;

function getApiKey(): string | null {
  return (
    process.env.ANTHROPIC_API_KEY ||
    process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY ||
    null
  );
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response("Manjkajo sporočila.", { status: 400 });
    }

    const apiKey = getApiKey();
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: "API ključ ni nastavljen. Dodaj ANTHROPIC_API_KEY v .env.local.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = new Anthropic({ apiKey });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const send = (event: string, data: unknown) => {
            controller.enqueue(
              encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
            );
          };

          const response = await client.messages.stream({
            model: process.env.CLAUDE_MODEL || "claude-opus-4-7",
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: messages.map((m: { role: string; content: string }) => ({
              role: m.role === "assistant" ? ("assistant" as const) : ("user" as const),
              content: m.content,
            })),
          });

          for await (const event of response) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              send("text", { text: event.delta.text });
            }
          }
          send("done", { ok: true });
          controller.close();
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : "Neznana napaka";
          controller.enqueue(
            encoder.encode(`event: error\ndata: ${JSON.stringify({ error: msg })}\n\n`)
          );
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Neznana napaka";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
