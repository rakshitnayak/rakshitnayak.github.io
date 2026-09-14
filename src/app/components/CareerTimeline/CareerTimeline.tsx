"use client";

import { useState } from "react";
import type { CareerData } from "@/lib/career";
import "./CareerTimeline.css";

type ViewMode = "story" | "recruiter" | "developer";
const viewLabels: Record<ViewMode, string> = {
  story: "Story", recruiter: "Recruiter", developer: "Developer",
};

export default function CareerTimeline({ career }: { career: CareerData }) {
  const { roles: careerRoles, source: careerSource } = career;
  const technologies = Array.from(new Set(careerRoles.flatMap((role) => role.technologies)));
  const [viewMode, setViewMode] = useState<ViewMode>("story");
  const [skill, setSkill] = useState("All skills");
  const [expanded, setExpanded] = useState<string[]>(careerRoles[0] ? [careerRoles[0].id] : []);
  const visibleRoles = careerRoles.filter((role) => skill === "All skills" || role.technologies.includes(skill));
  const allOpen = viewMode !== "story" || visibleRoles.every((role) => expanded.includes(role.id));

  return (
    <main className="career-page px-4 pb-16 pt-8 md:px-8 md:pt-16">
      <section className="mb-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6e57e0]">The journey so far</p>
        <h1 className="text-3xl font-bold md:text-5xl">A career in progress<span className="text-[#6e57e0]">.</span></h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-[#666] sm:text-base">From commerce experiences at Falabella to delivery planning at Lowe’s. Explore the work, the tools, and the impact along the way.</p>
        <div className="career-controls mt-6 flex flex-wrap gap-3 text-sm">
          <a href={careerSource} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#dedede] px-4 py-2 font-semibold hover:border-[#6e57e0]">View on LinkedIn ↗</a>
          <button type="button" onClick={() => window.print()} className="rounded-full bg-[#6e57e0] px-4 py-2 font-semibold text-white hover:bg-[#5943bd]">Print / save as PDF</button>
        </div>
      </section>

      <section aria-label="Career highlights" className="mb-10 grid gap-3 sm:grid-cols-2">
        {careerRoles.slice(0, 2).map((role) => (
          <div key={role.id} className="rounded-2xl border border-[#e9e5f7] bg-[#f8f6ff] p-5">
            <p className="text-lg font-bold text-[#5943bd]">{role.impact}</p>
            <p className="mt-1 text-xs text-[#666]">{role.company} · {role.title}</p>
          </div>
        ))}
      </section>

      <section aria-label="Timeline options" className="career-controls mb-10 space-y-5">
        <div className="inline-flex flex-wrap rounded-full border border-[#e5e5e5] bg-[#fafafa] p-1">
          {(Object.keys(viewLabels) as ViewMode[]).map((mode) => (
            <button key={mode} type="button" aria-pressed={viewMode === mode} onClick={() => setViewMode(mode)} className={`rounded-full px-4 py-2 text-xs font-semibold ${viewMode === mode ? "bg-black text-white" : "text-[#666] hover:text-black"}`}>{viewLabels[mode]}</button>
          ))}
        </div>
        <p className="text-xs text-[#777]">{viewMode === "story" ? "Explore each role at your own pace." : viewMode === "recruiter" ? "See responsibilities and measurable impact at a glance." : "Explore the tools and engineering work behind each role."}</p>
        <div className="flex flex-wrap gap-2" aria-label="Filter by skill">
          {["All skills", ...technologies].map((technology) => (
            <button key={technology} type="button" aria-pressed={skill === technology} onClick={() => { setSkill(technology); if (technology !== "All skills") setExpanded(careerRoles.filter((role) => role.technologies.includes(technology)).map((role) => role.id)); }} className={`rounded-full border px-3 py-1.5 text-xs ${skill === technology ? "border-[#6e57e0] bg-[#f2eeff] text-[#5943bd]" : "border-[#e5e5e5] text-[#666] hover:border-[#6e57e0]"}`}>{technology}</button>
          ))}
        </div>
        <div className="flex items-center justify-between gap-3 text-xs text-[#777]">
          <p role="status" aria-live="polite">{visibleRoles.length} of {careerRoles.length} roles{skill !== "All skills" ? ` · ${skill}` : ""}</p>
          <button type="button" onClick={() => { setViewMode("story"); setExpanded(allOpen ? [] : visibleRoles.map((role) => role.id)); }} className="font-semibold text-[#6e57e0] hover:underline">{allOpen ? "Collapse all" : "Expand all"}</button>
        </div>
      </section>

      <section aria-label="Career timeline" className="relative">
        <div aria-hidden="true" className="absolute bottom-8 left-[11px] top-2 w-px bg-[#dedede] md:left-[15px]" />
        <div className="space-y-8">
          {careerRoles.map((role) => {
            const isOpen = viewMode !== "story" || expanded.includes(role.id);
            const matches = skill === "All skills" || role.technologies.includes(skill);
            return (
              <article className={`career-role relative pl-9 md:pl-12 ${matches ? "" : "hidden"}`} key={role.id}>
                <span aria-hidden="true" className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-white shadow-sm md:h-8 md:w-8" style={{ backgroundColor: role.accent }} />
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#777]">{role.period}</p>
                <h2 className="mt-2 text-xl font-bold md:text-2xl">{role.title}</h2>
                <p className="mt-1 font-semibold" style={{ color: role.accent }}>{role.company}</p>
                <p className="mt-2 text-xs leading-5 text-[#777]">{role.location}</p>
                <p className="mt-3 text-sm leading-6 text-[#555]">{role.summary}</p>
                <button type="button" aria-expanded={isOpen} aria-controls={`${role.id}-details`} onClick={() => { if (viewMode !== "story") { setViewMode("story"); setExpanded(careerRoles.filter((entry) => entry.id !== role.id).map((entry) => entry.id)); } else setExpanded((current) => current.includes(role.id) ? current.filter((id) => id !== role.id) : [...current, role.id]); }} className="career-controls mt-3 text-xs font-semibold text-[#6e57e0] hover:underline">{isOpen ? "Hide details −" : "Explore this role +"}</button>
                <div id={`${role.id}-details`} className={`career-details mt-4 rounded-2xl border border-[#ececec] bg-[#fafafa] p-5 ${isOpen ? "" : "hidden"}`}>
                  <p className="mb-3 text-sm font-bold text-[#444]">{role.impact}</p>
                  <div className={viewMode === "developer" ? "flex flex-col-reverse gap-5" : "space-y-5"}>
                    <ul className="list-disc space-y-2 pl-4 text-sm leading-6 text-[#555]">{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                    <div className="flex flex-wrap gap-2">{role.technologies.map((technology) => <span key={technology} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#555] shadow-sm">{technology}</span>)}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <p className="mt-14 border-t border-[#ececec] pt-6 text-sm text-[#777]">The next chapter is still being written. <a href="mailto:rakshitnayak13@gmail.com" className="career-controls font-semibold text-[#6e57e0] hover:underline">Let’s build something together ↗</a></p>
      <p className="career-print-source">Experience source: {careerSource}</p>
    </main>
  );
}
