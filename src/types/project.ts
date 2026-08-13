// src/types/project.ts

export type ProjectCategory =
  | "VRS Infrastructure"
  | "Mobile Mapping"
  | "Green Riyadh"
  | "Corridor & Infrastructure";

export type ProjectStatus = "completed" | "ongoing";

export interface Project {
  /**
   * Unique identifier used internally by the application.
   */
  id: string;

  /**
   * URL-friendly project identifier.
   * Example: /projects/national-vrs-network-deployment
   */
  slug: string;

  /**
   * Short professional title displayed on project cards.
   */
  title: string;

  /**
   * Client, authority, contractor, or organization associated
   * with the project.
   */
  organization: string;

  /**
   * Project period as displayed on the website.
   * A string is used because some projects span multiple years.
   */
  year: string;

  /**
   * Cities, provinces, or geographic areas covered by the project.
   */
  locations: string[];

  /**
   * Primary classification used by the project filters.
   */
  category: ProjectCategory;

  /**
   * Additional searchable labels.
   */
  tags: string[];

  /**
   * Systems, equipment, and technologies used.
   */
  technologies: string[];

  /**
   * Short description displayed in the project archive.
   */
  summary: string;

  /**
   * Longer description reserved for the future case-study page.
   */
  description?: string;

  /**
   * Rafat's specific responsibilities.
   * To be completed after reviewing each project.
   */
  role?: string[];

  /**
   * Controls whether the project appears in Featured Projects.
   */
  featured: boolean;

  /**
   * Controls the ordering of featured projects.
   * Lower numbers appear first.
   */
  featuredOrder?: number;

  /**
   * Main project image.
   * Null means that an image has not been assigned yet.
   */
  image: string | null;

  /**
   * Additional images for the future project details page.
   */
  gallery: string[];

  /**
   * Used for projects that may still be active.
   */
  status: ProjectStatus;
}