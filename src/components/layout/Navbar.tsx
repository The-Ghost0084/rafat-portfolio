"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = {
  en: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ],
  ar: [
    { name: "الرئيسية", href: "#home" },
    { name: "نبذة عني", href: "#about" },
    { name: "الخبرات", href: "#expertise" },
    { name: "المشاريع", href: "#projects" },
    { name: "الشهادات", href: "#certifications" },
    { name: "تواصل معي", href: "#contact" },
  ],
};

type NavbarProps = {
  lang: "en" | "ar";
};

export default function Navbar({ lang }: NavbarProps) {
  const pathname = usePathname();

  const isArabic = lang === "ar";
  const currentNavigation = navigation[lang];

  const targetLang = isArabic ? "en" : "ar";

  /*
   * Keep the current page when switching languages.
   *
   * Example:
   * /en/projects/project-name
   * becomes:
   * /ar/projects/project-name
   */
  const languageSwitchHref = pathname.startsWith(`/${lang}`)
    ? pathname.replace(`/${lang}`, `/${targetLang}`)
    : `/${targetLang}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-100/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href={`/${lang}#home`}
          aria-label="RAM Geospatial home"
          className="flex items-center"
        >
          <Image
            src="/ram-logo-transparent.png"
            alt="RAM Geospatial"
            width={220}
            height={110}
            priority
            className="h-auto w-[145px] object-contain sm:w-[170px]"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {/* Navigation */}
          <ul className="flex items-center gap-8">
            {currentNavigation.map((item) => (
              <li key={item.name}>
                <a
                  href={`/${lang}${item.href}`}
                  className="relative text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-blue-600"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <a
            href={languageSwitchHref}
            className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
          >
            {isArabic ? "EN" : "العربية"}
          </a>
        </div>
      </nav>
    </header>
  );
}