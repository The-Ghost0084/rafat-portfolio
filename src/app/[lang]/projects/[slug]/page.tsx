// src/app/[lang]/projects/[slug]/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import ProjectGallery from "@/components/projects/ProjectGallery";

import { projects } from "@/data/projects";

import {
  getLocalizedProject,
  getLocalizedProjectBySlug,
  type SiteLanguage,
} from "@/data/localized-projects";

type ProjectPageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

/* ---------------------------------------------
   Static routes
--------------------------------------------- */

export function generateStaticParams() {
  const languages: SiteLanguage[] = ["en", "ar"];

  return languages.flatMap((lang) =>
    projects.map((project) => ({
      lang,
      slug: project.slug,
    }))
  );
}

/* ---------------------------------------------
   Metadata
--------------------------------------------- */

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (lang !== "en" && lang !== "ar") {
    return {
      title: "Project Not Found | Rafat Mohammed",
    };
  }

  const project = getLocalizedProjectBySlug(
    slug,
    lang as SiteLanguage
  );

  if (!project) {
    return {
      title:
        lang === "ar"
          ? "المشروع غير موجود | رأفت محمد"
          : "Project Not Found | Rafat Mohammed",
    };
  }

  return {
    title:
      lang === "ar"
        ? `${project.title} | رأفت محمد`
        : `${project.title} | Rafat Mohammed`,

    description: project.summary,
  };
}

/* ---------------------------------------------
   Page text
--------------------------------------------- */

const pageContent = {
  en: {
    backToProjects: "Back to Projects",

    completed: "Completed",
    ongoing: "Ongoing",

    overviewLabel: "Project Overview",
    overviewTitle:
      "Delivering practical geospatial infrastructure and reliable engineering outcomes.",

    technologies: "Technologies",
    systemsEquipment: "Systems & equipment",

    responsibilities: "Responsibilities",
    projectContribution: "Project contribution",

    factsLabel: "Project Facts",
    factsTitle: "At a glance",

    organization: "Organization",
    projectPeriod: "Project Period",
    location: "Location",
    category: "Category",

    projectScope: "Project Scope",

    exploreMore: "Explore more work",
    archiveTitle: "Continue through the project archive.",
    allProjects: "All Projects",

    previousProject: "Previous Project",
    nextProject: "Next Project",

    firstProject: "You are viewing the first project.",
    latestProject: "You are viewing the latest project.",
  },

  ar: {
    backToProjects: "العودة إلى المشاريع",

    completed: "مكتمل",
    ongoing: "قيد التنفيذ",

    overviewLabel: "نظرة عامة على المشروع",
    overviewTitle:
      "تنفيذ حلول جيومكانية عملية وتحقيق نتائج هندسية موثوقة.",

    technologies: "التقنيات",
    systemsEquipment: "الأنظمة والمعدات",

    responsibilities: "المسؤوليات",
    projectContribution: "المساهمة في المشروع",

    factsLabel: "بيانات المشروع",
    factsTitle: "نظرة سريعة",

    organization: "الجهة",
    projectPeriod: "فترة المشروع",
    location: "الموقع",
    category: "التصنيف",

    projectScope: "نطاق المشروع",

    exploreMore: "استكشف المزيد من المشاريع",
    archiveTitle: "واصل استعراض أرشيف المشاريع.",
    allProjects: "جميع المشاريع",

    previousProject: "المشروع السابق",
    nextProject: "المشروع التالي",

    firstProject: "أنت تستعرض أول مشروع في القائمة.",
    latestProject: "أنت تستعرض أحدث مشروع في القائمة.",
  },
};

/* ---------------------------------------------
   Project page
--------------------------------------------- */

export default async function ProjectDetailsPage({
  params,
}: ProjectPageProps) {
  const { lang, slug } = await params;

  /* Validate language */
  if (lang !== "en" && lang !== "ar") {
    notFound();
  }

  const currentLang = lang as SiteLanguage;
  const isArabic = currentLang === "ar";

  const text = pageContent[currentLang];

  /* Localized current project */
  const project = getLocalizedProjectBySlug(
    slug,
    currentLang
  );

  if (!project) {
    notFound();
  }

  /* Project images */
  const projectImages = [
    ...(project.image ? [project.image] : []),

    ...project.gallery.filter(
      (image) => image !== project.image
    ),
  ];

  /* ---------------------------------------------
     Previous / Next projects
  --------------------------------------------- */

  const currentProjectIndex = projects.findIndex(
    (item) => item.slug === project.slug
  );

  const previousBaseProject =
    currentProjectIndex > 0
      ? projects[currentProjectIndex - 1]
      : null;

  const nextBaseProject =
    currentProjectIndex < projects.length - 1
      ? projects[currentProjectIndex + 1]
      : null;

  const previousProject = previousBaseProject
    ? getLocalizedProject(
        previousBaseProject,
        currentLang
      )
    : null;

  const nextProject = nextBaseProject
    ? getLocalizedProject(nextBaseProject, currentLang)
    : null;

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <Navbar lang={currentLang} />

      <main className="min-h-screen bg-white pt-24">
        {/* =============================================
            HERO
        ============================================== */}

        <section className="relative overflow-hidden bg-slate-950">
          {project.image && (
            <div className="absolute inset-0 overflow-hidden">
              {/* Blurred background */}
              <Image
                src={project.image}
                alt=""
                fill
                priority
                sizes="100vw"
                aria-hidden="true"
                className="scale-110 object-cover object-center blur-2xl"
              />

              {/* Dark overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-slate-950/35"
              />

              {/* Main full image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain object-center"
                />
              </div>

              {/* Readability gradients */}
              <div
                aria-hidden="true"
                className={
                  isArabic
                    ? "absolute inset-0 bg-gradient-to-l from-slate-950/75 via-slate-950/30 to-transparent"
                    : "absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/30 to-transparent"
                }
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/15"
              />
            </div>
          )}

          <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-end px-6 pb-16 pt-24 lg:px-8 lg:pb-20">
            <div className="max-w-4xl">
              {/* Back */}
              <Link
                href={`/${currentLang}#projects`}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
              >
                <span aria-hidden="true">
                  {isArabic ? "→" : "←"}
                </span>

                {text.backToProjects}
              </Link>

              {/* Badges */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white backdrop-blur-md">
                  {project.categoryLabel}
                </span>

                <span className="rounded-full border border-white/15 bg-slate-950/35 px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur-md">
                  {project.status === "completed"
                    ? text.completed
                    : text.ongoing}
                </span>
              </div>

              {/* Project title */}
              <h1 className="mt-7 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
                {project.title}
              </h1>

              {/* Project description */}
              <p className="mt-7 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                {project.description ?? project.summary}
              </p>
            </div>
          </div>
        </section>

        {/* =============================================
            PROJECT INFORMATION
        ============================================== */}

        <section className="relative overflow-hidden py-20 sm:py-24">
          <div
            aria-hidden="true"
            className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -left-32 bottom-12 h-80 w-80 rounded-full bg-slate-100 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-14">
              {/* =============================================
                  OVERVIEW
              ============================================== */}

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
                  {text.overviewLabel}
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
                  {text.overviewTitle}
                </h2>

                <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
                  {project.description ?? project.summary}
                </p>

                {/* =============================================
                    TECHNOLOGIES
                ============================================== */}

                <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_-42px_rgba(15,23,42,0.35)] sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {text.technologies}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-slate-950">
                        {text.systemsEquipment}
                      </h3>
                    </div>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {project.technologies.length}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2.5 text-sm font-medium text-blue-700"
                        >
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-blue-600"
                          />

                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* =============================================
                    RESPONSIBILITIES
                ============================================== */}

                {project.role &&
                  project.role.length > 0 && (
                    <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {text.responsibilities}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-slate-950">
                        {text.projectContribution}
                      </h3>

                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {project.role.map(
                          (responsibility) => (
                            <li
                              key={responsibility}
                              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-600"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600"
                              />

                              <span>
                                {responsibility}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
              </div>

              {/* =============================================
                  PROJECT FACTS
              ============================================== */}

              <aside className="h-fit rounded-[2rem] border border-slate-200 bg-slate-950 p-6 shadow-[0_28px_80px_-50px_rgba(15,23,42,0.7)] sm:p-7 lg:sticky lg:top-28">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                      {text.factsLabel}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {text.factsTitle}
                    </h3>
                  </div>

                  {/* Status */}
                  <span
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                      project.status === "completed"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : "border-amber-400/20 bg-amber-400/10 text-amber-300"
                    }`}
                  >
                    {project.status === "completed"
                      ? text.completed
                      : text.ongoing}
                  </span>
                </div>

                {/* Facts */}
                <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {/* Organization */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      {text.organization}
                    </dt>

                    <dd className="mt-2 text-sm font-semibold leading-6 text-white">
                      {project.organization}
                    </dd>
                  </div>

                  {/* Period */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      {text.projectPeriod}
                    </dt>

                    <dd className="mt-2 text-sm font-semibold leading-6 text-white">
                      {project.year.replace(
                        /\s*[–—-]\s*/g,
                        " → "
                      )}
                    </dd>
                  </div>

                  {/* Location */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      {text.location}
                    </dt>

                    <dd className="mt-2 text-sm font-semibold leading-6 text-white">
                      {project.locations.join(", ")}
                    </dd>
                  </div>

                  {/* Category */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                      {text.category}
                    </dt>

                    <dd className="mt-2 text-sm font-semibold leading-6 text-white">
                      {project.categoryLabel}
                    </dd>
                  </div>
                </dl>

                {/* Scope */}
                <div className="mt-5 rounded-2xl border border-blue-400/15 bg-blue-400/[0.06] p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-300">
                    {text.projectScope}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {project.summary}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* =============================================
            GALLERY
        ============================================== */}

        {projectImages.length > 0 && (
          <ProjectGallery
            images={projectImages}
            projectTitle={project.title}
          />
        )}

        {/* =============================================
            BOTTOM NAVIGATION
        ============================================== */}

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_28px_80px_-50px_rgba(15,23,42,0.7)]">
              {/* Archive heading */}
              <div className="border-b border-white/10 px-6 py-6 sm:px-8 lg:px-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                      {text.exploreMore}
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                      {text.archiveTitle}
                    </h2>
                  </div>

                  <Link
                    href={`/${currentLang}#projects`}
                    className="inline-flex w-fit items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    {text.allProjects}

                    <span
                      className={
                        isArabic ? "mr-2" : "ml-2"
                      }
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </Link>
                </div>
              </div>

              {/* Previous / Next */}
              <div className="grid md:grid-cols-2">
                {/* =============================================
                    PREVIOUS PROJECT
                ============================================== */}

                {previousProject ? (
                  <Link
                    href={`/${currentLang}/projects/${previousProject.slug}`}
                    className="group border-b border-white/10 p-6 transition hover:bg-white/[0.05] sm:p-8 md:border-b-0 md:border-r"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-lg text-white transition group-hover:bg-blue-600"
                      >
                        {isArabic ? "→" : "←"}
                      </span>

                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                          {text.previousProject}
                        </p>

                        <h3 className="mt-2 text-lg font-semibold leading-7 text-white transition group-hover:text-blue-300">
                          {previousProject.title}
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                          {previousProject.year} ·{" "}
                          {previousProject.categoryLabel}
                        </p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="border-b border-white/10 p-6 sm:p-8 md:border-b-0 md:border-r">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {text.previousProject}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      {text.firstProject}
                    </p>
                  </div>
                )}

                {/* =============================================
                    NEXT PROJECT
                ============================================== */}

                {nextProject ? (
                  <Link
                    href={`/${currentLang}/projects/${nextProject.slug}`}
                    className="group p-6 transition hover:bg-white/[0.05] sm:p-8"
                  >
                    <div
                      className={
                        isArabic
                          ? "flex items-start gap-4"
                          : "flex items-start gap-4 md:flex-row-reverse"
                      }
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-lg text-white transition group-hover:bg-blue-600"
                      >
                        {isArabic ? "←" : "→"}
                      </span>

                      <div
                        className={`min-w-0 flex-1 ${
                          isArabic
                            ? "text-right"
                            : "md:text-right"
                        }`}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                          {text.nextProject}
                        </p>

                        <h3 className="mt-2 text-lg font-semibold leading-7 text-white transition group-hover:text-blue-300">
                          {nextProject.title}
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                          {nextProject.year} ·{" "}
                          {nextProject.categoryLabel}
                        </p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div
                    className={`p-6 sm:p-8 ${
                      isArabic
                        ? "text-right"
                        : "text-left md:text-right"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {text.nextProject}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      {text.latestProject}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}