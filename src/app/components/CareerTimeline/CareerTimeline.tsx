"use client";

import { useState } from "react";

type ViewMode = "story" | "recruiter" | "developer";

type Milestone = {
  period: string;
  title: string;
  summary: string;
  story: string;
  recruiter: string;
  developer: string;
  technologies: string[];
  accent: string;
};

const milestones: Milestone[] = [
  {
    period: "2020",
    title: "Learning by building",
    summary: "Started turning web fundamentals into practical projects.",
    story:
      "Curiosity became a habit: learn a concept, build something with it, and share the lesson.",
    recruiter:
      "Built a foundation in JavaScript and web development through consistent hands-on practice.",
    developer:
      "Explored the DOM and browser fundamentals, with a focus on understanding how interfaces work under the hood.",
    technologies: ["JavaScript", "DOM", "Web fundamentals"],
    accent: "#6e57e0",
  },
  {
    period: "2021",
    title: "Thinking beyond the browser",
    summary: "Expanded into cloud concepts and production-minded engineering.",
    story:
      "The question grew from “how do I build this?” to “how does this reach people reliably?”",
    recruiter:
      "Developed an understanding of cloud platforms and the systems that support modern products.",
    developer:
      "Studied GCP concepts and the infrastructure patterns behind scalable applications.",
    technologies: ["GCP", "Cloud", "Scalability"],
    accent: "#ef8354",
  },
  {
    period: "2023",
    title: "Going full-stack",
    summary: "Focused on robust, polished experiences with Next.js.",
    story:
      "Frontend craft and backend thinking started meeting in the same projects.",
    recruiter:
      "Worked across the stack to create performant, maintainable web experiences.",
    developer:
      "Worked with Next.js rendering patterns, including server-side rendering and responsive UI behavior.",
    technologies: ["Next.js", "React", "SSR"],
    accent: "#3a9d8f",
  },
  {
    period: "Now",
    title: "Building what is next",
    summary: "Combining product thinking, engineering, and AI-assisted creativity.",
    story:
      "Today, the goal is simple: make useful things, keep learning, and leave every product better than I found it.",
    recruiter:
      "A full-stack software engineer from India who enjoys owning problems from idea to polished product.",
    developer:
      "Exploring thoughtful AI integrations, reliable APIs, and interfaces that make complex technology feel approachable.",
    technologies: ["TypeScript", "Next.js", "AI"],
    accent: "#d9578c",
  },
];

const viewLabels: Record<ViewMode, string> = {
  story: "Story",
  recruiter: "Recruiter",
  developer: "Developer",
};

export default function CareerTimeline() {
  const [viewMode, setViewMode] = useState<ViewMode>("story");
  const [openMilestone, setOpenMilestone] = useState<string | null>("Now");

  return (
    <main className="px-4 pb-16 pt-8 md:px-8 md:pt-16">
      <section className="mb-12">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6e57e0]">
          The journey so far
        </p>
        <h1 className="text-3xl font-bold md:text-5xl">
          A career in progress<span className="text-[#6e57e0]">.</span>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-[#666] sm:text-base">
          An interactive timeline of the ideas, technologies, and questions
          shaping my path as a software engineer.
        </p>
      </section>

      <section aria-label="Timeline view options" className="mb-10">
        <div className="inline-flex rounded-full border border-[#e5e5e5] bg-[#fafafa] p-1">
          {(Object.keys(viewLabels) as ViewMode[]).map((mode) => (
            <button
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                viewMode === mode
                  ? "bg-black text-white"
                  : "text-[#666] hover:text-black"
              }`}
              key={mode}
              onClick={() => setViewMode(mode)}
              type="button"
              aria-pressed={viewMode === mode}
            >
              {viewLabels[mode]}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-[#888]">
          Change the lens to see the same journey from a different perspective.
        </p>
      </section>

      <section aria-label="Career timeline" className="relative">
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-[11px] top-2 w-px bg-[#dedede] md:left-[15px]"
        />
        <div className="space-y-8">
          {milestones.map((milestone) => {
            const isOpen = openMilestone === milestone.period;
            const description = milestone[viewMode];

            return (
              <article className="relative pl-9 md:pl-12" key={milestone.period}>
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-white shadow-sm md:h-8 md:w-8"
                  style={{ backgroundColor: milestone.accent }}
                />
                <button
                  className="w-full text-left"
                  onClick={() =>
                    setOpenMilestone(isOpen ? null : milestone.period)
                  }
                  type="button"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#777]">
                      {milestone.period}
                    </p>
                    <span className="text-lg text-[#999]" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                  <h2 className="mt-1 text-xl font-bold md:text-2xl">
                    {milestone.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#555]">
                    {milestone.summary}
                  </p>
                </button>

                {isOpen && (
                  <div className="mt-4 rounded-2xl border border-[#ececec] bg-[#fafafa] p-5">
                    <p className="text-sm leading-7 text-[#444]">{description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {milestone.technologies.map((technology) => (
                        <span
                          className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#555] shadow-sm"
                          key={technology}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <p className="mt-14 border-t border-[#ececec] pt-6 text-center text-sm text-[#777]">
        The next chapter is still being written.
      </p>
    </main>
  );
}
