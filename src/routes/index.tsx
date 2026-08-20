import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/deck/Deck";

const title = "ASAL Formworks — Cinematic Documentary & Personal Brand Film";
const description =
  "A creative film proposal for ASAL Engineering Services: a premium documentary-led content system built around the formwork process and the person behind it.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <h1 className="sr-only">
        ASAL Formworks — a cinematic documentary and personal brand film proposal
      </h1>
      <Deck />
    </main>
  );
}
