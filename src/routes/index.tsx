import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/odas/Nav";
import { DoorHero } from "@/components/odas/DoorHero";
import {
  WhatIsOdas,
  Journey,
  SynapseWay,
  ExperienceSynapse,
  BigIdea,
} from "@/components/odas/Sections";
import { ApplySection, ApplyDialog } from "@/components/odas/Apply";
import { SynapseLogo } from "@/components/odas/SynapseLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "One Day at Synapse — ODAS | Synapse Advertising" },
      {
        name: "description",
        content:
          "One Day at Synapse (ODAS) is an immersive experience inside the thinking, strategy and execution behind marketing campaigns. Step inside and apply.",
      },
      { property: "og:title", content: "One Day at Synapse — ODAS" },
      {
        property: "og:description",
        content:
          "An immersive experience inside the world of Synapse: briefs, insight, strategy, storytelling and execution.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const apply = () => setOpen(true);

  return (
    <main className="bg-background">
      <Nav onApply={apply} />
      <DoorHero onApply={apply} />
      <WhatIsOdas />
      <Journey />
      <SynapseWay />
      <ExperienceSynapse />
      <BigIdea />
      <ApplySection onApply={apply} />

      <footer className="bg-ink px-5 pb-12 text-ink-foreground md:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 border-t border-ink-foreground/12 pt-10 md:flex-row md:items-center md:justify-between">
          <SynapseLogo className="h-5" />
          <p className="eyebrow text-ink-foreground/40">One Day at Synapse — ODAS</p>
        </div>
      </footer>

      {/* mobile sticky CTA */}
      <button
        onClick={apply}
        className="eyebrow fixed inset-x-0 bottom-0 z-40 bg-primary py-4 text-primary-foreground md:hidden"
      >
        Apply Now →
      </button>

      <ApplyDialog open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
