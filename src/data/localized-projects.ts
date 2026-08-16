import { featuredProjects, projects } from "@/data/projects";
import { projectsAr } from "@/data/projects-ar";

export type SiteLanguage = "en" | "ar";

const categoryTranslations = {
  "VRS Infrastructure": "البنية التحتية لشبكات VRS",
  "Mobile Mapping": "المسح المتحرك",
  "Green Riyadh": "الرياض الخضراء",
  "Corridor & Infrastructure": "الممرات والبنية التحتية",
} as const;

export function getCategoryLabel(
  category: keyof typeof categoryTranslations,
  lang: SiteLanguage
) {
  return lang === "ar" ? categoryTranslations[category] : category;
}

export function getLocalizedProject(
  project: (typeof projects)[number],
  lang: SiteLanguage
) {
  if (lang === "en") {
    return {
      ...project,
      categoryLabel: project.category,
    };
  }

  const translation = projectsAr[project.slug];

  if (!translation) {
    return {
      ...project,
      categoryLabel: getCategoryLabel(project.category, lang),
    };
  }

  return {
    ...project,

    title: translation.title,

    locations: translation.locations,

    tags: translation.tags,

    summary: translation.summary,

    description:
      translation.summary,

    categoryLabel: getCategoryLabel(project.category, lang),
  };
}

export function getLocalizedProjects(lang: SiteLanguage) {
  return projects.map((project) =>
    getLocalizedProject(project, lang)
  );
}

export function getLocalizedFeaturedProjects(lang: SiteLanguage) {
  return featuredProjects.map((project) =>
    getLocalizedProject(project, lang)
  );
}

export function getLocalizedProjectBySlug(
  slug: string,
  lang: SiteLanguage
) {
  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return undefined;
  }

  return getLocalizedProject(project, lang);
}