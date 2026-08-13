// src/components/projects/Projects.tsx

import Image from "next/image";
import Link from "next/link";

import {
  featuredProjects,
  projectStatistics,
  projects,
} from "@/data/projects";
import type { ProjectCategory } from "@/types/project";

function getCategoryStyles(category: ProjectCategory) {
  switch (category) {
    case "VRS Infrastructure":
      return {
        badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
        accent: "bg-emerald-500",
        glow: "bg-emerald-200/40",
      };

    case "Green Riyadh":
      return {
        badge: "border-green-200 bg-green-50 text-green-700",
        accent: "bg-green-500",
        glow: "bg-green-200/40",
      };

    case "Corridor & Infrastructure":
      return {
        badge: "border-orange-200 bg-orange-50 text-orange-700",
        accent: "bg-orange-500",
        glow: "bg-orange-200/40",
      };

    default:
      return {
        badge: "border-blue-200 bg-blue-50 text-blue-700",
        accent: "bg-blue-500",
        glow: "bg-blue-200/40",
      };
  }
}

function getProjectStartYear(year: string) {
  const firstYear = year.match(/\d{4}/);

  return firstYear ? Number.parseInt(firstYear[0], 10) : 0;
}

function formatProjectYear(year: string) {
  return year.replace(/\s*[–—-]\s*/g, " → ");
}

export default function Projects() {
  const careerYears =
    projectStatistics.latestProjectYear -
    projectStatistics.careerStartYear;

  const archiveProjects = [...projects].sort(
    (a, b) => getProjectStartYear(b.year) - getProjectStartYear(a.year),
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 bottom-40 h-96 w-96 rounded-full bg-slate-100 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <div className="flex w-full max-w-sm items-center justify-center gap-4 sm:gap-5">
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-blue-600"
            />

            <span className="shrink-0 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
              Projects
            </span>

            <span
              aria-hidden="true"
              className="h-px flex-1 bg-blue-600"
            />
          </div>

          <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl xl:text-6xl">
            Engineering experience translated into real-world impact.
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            More than a decade of contributing to geospatial, infrastructure,
            urban development, and positioning projects across Saudi Arabia.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_70px_-45px_rgba(15,23,42,0.35)] lg:grid-cols-4">
          <div className="border-b border-r border-slate-200 p-6 sm:p-8 lg:border-b-0">
            <p className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {projectStatistics.documentedProjects}+
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Documented projects
            </p>
          </div>

          <div className="border-b border-slate-200 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {careerYears}+
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Years of experience
            </p>
          </div>

          <div className="border-r border-slate-200 p-6 sm:p-8">
            <p className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {projectStatistics.vrsStations}+
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              VRS stations deployed
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {projectStatistics.featuredProjects}
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Selected projects
            </p>
          </div>
        </div>

        {/* Career timeline */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50/80 px-6 py-7 sm:px-8">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Career timeline
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-950">
                Continuous geospatial project contribution
              </p>
            </div>

            <p className="hidden text-sm text-slate-500 sm:block">
              Saudi Arabia
            </p>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <span className="text-sm font-semibold text-slate-950">
              {projectStatistics.careerStartYear}
            </span>

            <div className="relative h-px flex-1 bg-slate-300">
              <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-blue-600" />

              <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-blue-600" />

              <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-400" />
            </div>

            <span className="text-sm font-semibold text-slate-950">
              {projectStatistics.latestProjectYear}
            </span>
          </div>
        </div>

        {/* Selected projects */}
        <div className="mt-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Selected Projects
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Projects that define the journey.
            </h3>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
              A curated selection representing national positioning
              infrastructure, mobile mapping, corridor surveys, and regional
              development projects.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => {
              const styles = getCategoryStyles(project.category);

              return (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="block h-full rounded-[1.75rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
                >
                  <article
                    className="group relative h-[460px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950 shadow-[0_20px_65px_-40px_rgba(15,23,42,0.65)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_-38px_rgba(15,23,42,0.72)]"
                  >
                    {/* Project image */}
                  {project.image && (
                    <div className="absolute inset-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/25 to-slate-950/70"
                      />
                    </div>
                  )}

                  {/* Default background for projects without images */}
                  {!project.image && (
                    <>
                      <div
                        aria-hidden="true"
                        className={`absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110 ${styles.glow}`}
                      />

                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                          backgroundSize: "42px 42px",
                        }}
                      />
                    </>
                  )}

                  <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-5">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-semibold ${styles.badge}`}
                      >
                        {project.category}
                      </span>

                      <span className="text-4xl font-semibold tracking-[-0.06em] text-white/20 sm:text-5xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-auto pt-6">
                      <div
                        className={`mb-4 h-1 w-10 rounded-full ${styles.accent}`}
                      />

                      <p className="text-sm font-medium text-slate-300">
                        {formatProjectYear(project.year)} ·{" "}
                        {project.locations.join(" · ")}
                      </p>

                      <h4 className="mt-3 max-w-xl text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                        {project.title}
                      </h4>

                      <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-6 text-slate-200">
                        {project.summary}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 2).map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/15 bg-slate-950/35 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm"
                          >
                            {technology}
                          </span>
                        ))}

                        {project.technologies.length > 2 && (
                          <span className="rounded-full border border-white/15 bg-slate-950/35 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>

                      <div className="mt-5 flex items-end justify-between gap-4 border-t border-white/15 pt-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                            Organization
                          </p>

                          <p className="mt-1 text-sm font-medium text-white">
                            {project.organization}
                          </p>
                        </div>

                        <span className="text-right text-sm font-semibold text-white transition group-hover:text-blue-200">
                          View project details
                          <span className="ml-2" aria-hidden="true">
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>

        {/* All projects */}
        <div className="mt-28">
          <div className="border-b border-slate-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              All Projects
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Complete project archive.
            </h3>

            <p className="mt-4 text-sm text-slate-500">
              {projects.length} documented projects
            </p>
          </div>

          <div className="divide-y divide-slate-200">
            {archiveProjects.map((project, index) => {
              const styles = getCategoryStyles(project.category);

              return (
                <article
                  key={project.id}
                  className="grid gap-5 py-8 sm:grid-cols-[52px_1fr_auto] sm:items-center sm:gap-7"
                >
                  <span className="text-sm font-medium tabular-nums text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="text-xl font-semibold tracking-[-0.02em] text-slate-950">
                        {project.title}
                      </h4>

                      <span
                        className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${styles.badge}`}
                      >
                        {project.category}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
                      <span>{project.organization}</span>
                      <span aria-hidden="true">•</span>
                      <span>{project.locations.join(", ")}</span>
                      <span aria-hidden="true">•</span>
                      <span>{project.technologies.join(", ")}</span>
                    </div>
                  </div>

                  <span className="text-sm font-semibold tabular-nums text-slate-700">
                    {formatProjectYear(project.year)}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}