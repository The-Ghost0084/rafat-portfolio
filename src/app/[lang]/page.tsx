import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Expertise from "@/components/expertise/Expertise";
import Projects from "@/components/projects/Projects";
import Certifications from "@/components/certifications/Certifications";
import Contact from "@/components/contact/Contact";

type LanguagePageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function LanguagePage({
  params,
}: LanguagePageProps) {
  const { lang } = await params;

  if (lang !== "en" && lang !== "ar") {
    return null;
  }

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      <Navbar lang={lang} />

      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Expertise lang={lang} />
        <Projects lang={lang} />
        <Certifications lang={lang} />
        <Contact lang={lang} />
      </main>
    </div>
  );
}