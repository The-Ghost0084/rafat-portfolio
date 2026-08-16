import Image from "next/image";

type AboutProps = {
  lang: "en" | "ar";
};

const content = {
  en: {
    sectionLabel: "About Me",

    headingBefore:
      "Engineering reliable geospatial solutions through",
    headingHighlight:
      "expertise, leadership, and innovation.",

    paragraphs: [
      <>
        For more than a decade, I have been helping organizations across
        Saudi Arabia deliver complex geospatial projects through{" "}
        <strong className="font-semibold text-slate-950">
          technical leadership, advanced mapping technologies, and reliable
          engineering support
        </strong>
        .
      </>,

      <>
        From installing and maintaining{" "}
        <strong className="font-semibold text-slate-950">
          CORS and VRS infrastructure
        </strong>{" "}
        to supporting{" "}
        <strong className="font-semibold text-slate-950">
          Mobile Mapping and 3D Laser Scanning projects
        </strong>
        , my work has focused on turning complex technical challenges into
        practical, accurate, and dependable solutions.
      </>,

      <>
        Today, I combine engineering knowledge, technical support, and project
        leadership to guide teams, support clients, and deliver geospatial
        solutions that meet real operational needs. I believe successful
        projects depend on careful planning, effective teamwork, reliable
        support, and a clear understanding of each client&apos;s objectives.
      </>,
    ],

    skills: [
      "Mobile Mapping",
      "CORS / VRS Infrastructure",
      "3D Laser Scanning",
      "Technical Support",
      "Project Leadership",
      "Customer Training",
    ],

    highlights: [
      {
        value: "13+",
        label: "Years of Experience",
        description: "Delivering technical and geospatial solutions.",
      },
      {
        value: "300+",
        label: "VRS Stations",
        description:
          "Installed, operated, and maintained across Saudi Arabia.",
      },
      {
        value: "21",
        label: "Documented Projects",
        description:
          "Across positioning, mapping, and infrastructure sectors.",
      },
      {
        value: "KSA",
        label: "Project Coverage",
        description:
          "Experience across multiple regions of Saudi Arabia.",
      },
    ],

    careerLabel: "Career Snapshot",
    careerHeading: "Professional journey",
    careerDescription:
      "A concise overview of the professional roles that shaped my technical and leadership experience.",

    career: [
      {
        period: "2012 – 2013",
        role: "System Engineer",
        company: "Al-Salam Company",
        description:
          "System administration, help desk support, and hardware and software troubleshooting.",
      },
      {
        period: "2013 – Present",
        role: "Technical Support & Projects Team Leader",
        company: "Al-Jehat Company",
        description:
          "Leading technical support teams and delivering geospatial projects and infrastructure solutions across Saudi Arabia.",
      },
    ],
  },

  ar: {
    sectionLabel: "نبذة عني",

    headingBefore:
      "تقديم حلول جيومكانية موثوقة من خلال",
    headingHighlight:
      "الخبرة والقيادة والابتكار.",

    paragraphs: [
      <>
        لأكثر من عقد من الزمن، ساهمت في دعم المؤسسات في مختلف أنحاء المملكة
        العربية السعودية لتنفيذ مشاريع جيومكانية متقدمة من خلال{" "}
        <strong className="font-semibold text-slate-950">
          القيادة الفنية، وتقنيات المسح المتطورة، والدعم الهندسي الموثوق
        </strong>
        .
      </>,

      <>
        بدءًا من تركيب وصيانة{" "}
        <strong className="font-semibold text-slate-950">
          البنية التحتية لشبكات CORS وVRS
        </strong>{" "}
        وصولًا إلى دعم{" "}
        <strong className="font-semibold text-slate-950">
          مشاريع المسح المتحرك والمسح بالليزر ثلاثي الأبعاد
        </strong>
        ، ركز عملي على تحويل التحديات التقنية المعقدة إلى حلول عملية ودقيقة
        وموثوقة.
      </>,

      <>
        اليوم، أجمع بين المعرفة الهندسية والدعم الفني وقيادة المشاريع لإدارة
        فرق العمل ودعم العملاء وتنفيذ حلول جيومكانية تلبي الاحتياجات التشغيلية
        الفعلية. وأؤمن بأن نجاح المشاريع يعتمد على التخطيط الدقيق والعمل
        الجماعي الفعّال والدعم الموثوق والفهم الواضح لأهداف كل عميل.
      </>,
    ],

    skills: [
      "المسح المتحرك",
      "البنية التحتية لشبكات CORS / VRS",
      "المسح بالليزر ثلاثي الأبعاد",
      "الدعم الفني",
      "قيادة المشاريع",
      "تدريب العملاء",
    ],

    highlights: [
      {
        value: "+13",
        label: "عامًا من الخبرة",
        description: "في تقديم الحلول التقنية والجيومكانية.",
      },
      {
        value: "+300",
        label: "محطة VRS",
        description:
          "تركيب وتشغيل وصيانة المحطات في مختلف أنحاء المملكة.",
      },
      {
        value: "21",
        label: "مشروعًا موثقًا",
        description:
          "في مجالات تحديد المواقع والمسح والبنية التحتية.",
      },
      {
        value: "KSA",
        label: "نطاق المشاريع",
        description:
          "خبرة في تنفيذ المشاريع بمناطق متعددة من المملكة العربية السعودية.",
      },
    ],

    careerLabel: "المسيرة المهنية",
    careerHeading: "رحلتي المهنية",
    careerDescription:
      "نظرة موجزة على المسيرة المهنية التي ساهمت في بناء خبرتي الفنية والقيادية.",

    career: [
      {
        period: "2012 – 2013",
        role: "مهندس أنظمة",
        company: "شركة السلام",
        description:
          "إدارة الأنظمة، ودعم المستخدمين، وتشخيص ومعالجة مشكلات الأجهزة والبرمجيات.",
      },
      {
        period: "2013 – حتى الآن",
        role: "قائد فريق الدعم الفني والمشاريع",
        company: "شركة الجهات",
        description:
          "قيادة فرق الدعم الفني وتنفيذ المشاريع الجيومكانية وحلول البنية التحتية في مختلف أنحاء المملكة العربية السعودية.",
      },
    ],
  },
};

export default function About({ lang }: AboutProps) {
  const text = content[lang];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.22]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sky-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            <span className="h-px w-8 bg-blue-600" />
            {text.sectionLabel}
            <span className="h-px w-8 bg-blue-600" />
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {text.headingBefore}{" "}
            <span className="text-blue-600">
              {text.headingHighlight}
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-[460px] lg:-translate-y-4">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/25 blur-[95px]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-5 bottom-4 top-8 rounded-[46%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.13),rgba(219,234,254,0.05)_52%,transparent_75%)]"
            />

            {/* Geospatial contour lines */}
            <svg
              aria-hidden="true"
              viewBox="0 0 460 500"
              fill="none"
              className="absolute inset-0 h-full w-full opacity-[0.11]"
            >
              <path
                d="M-45 105C45 25 125 35 180 105C235 175 315 170 380 105C430 55 485 65 525 115"
                stroke="#2563EB"
                strokeWidth="1.4"
              />

              <path
                d="M-35 165C55 95 135 105 190 170C245 235 320 225 390 165C445 115 495 130 535 180"
                stroke="#2563EB"
                strokeWidth="1.3"
              />

              <path
                d="M-20 230C65 170 145 180 200 235C255 290 330 285 400 235C455 195 505 205 545 255"
                stroke="#2563EB"
                strokeWidth="1.2"
              />

              <path
                d="M0 300C80 250 155 255 215 305C275 355 345 350 415 305C470 270 515 280 555 325"
                stroke="#2563EB"
                strokeWidth="1.1"
              />
            </svg>

            <div className="relative flex min-h-[500px] items-end justify-center overflow-visible">
              <Image
                src="/rafat-about.png"
                alt="Eng. Rafat Mohammed"
                width={760}
                height={920}
                className="relative z-20 h-auto w-full scale-[1.16] object-contain object-bottom drop-shadow-[0_30px_50px_rgba(30,64,175,0.18)]"
              />
            </div>
          </div>

          {/* Text content */}
          <div>
            {text.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg leading-8 text-slate-600 ${
                  index > 0 ? "mt-6" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}

            {/* Skills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {text.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200/70 bg-white/80 px-5 py-2.5 text-sm font-medium tracking-wide text-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Professional highlights */}
        <div className="mt-16 grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.35)] sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {text.highlights.map((highlight, index) => (
            <article
              key={highlight.label}
              className={`relative p-6 sm:p-7 ${
                index < text.highlights.length - 1
                  ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-blue-50/80"
              />

              <div className="relative">
                <p className="text-3xl font-semibold tracking-tight text-blue-600">
                  {highlight.value}
                </p>

                <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950">
                  {highlight.label}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {highlight.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Career Snapshot */}
        <div className="mt-16 lg:mt-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
              {text.careerLabel}
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {text.careerHeading}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              {text.careerDescription}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {text.career.map((career) => (
              <article
                key={`${career.company}-${career.period}`}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-7 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_-35px_rgba(37,99,235,0.35)] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-blue-50 transition duration-300 group-hover:bg-blue-100"
                />

                <div className="relative">
                  <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-blue-700">
                    {career.period}
                  </span>

                  <h4 className="mt-6 text-xl font-semibold text-slate-950">
                    {career.role}
                  </h4>

                  <p className="mt-2 font-medium text-blue-600">
                    {career.company}
                  </p>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                    {career.description}
                  </p>

                  <div className="mt-7 h-px w-12 bg-blue-600 transition-all duration-300 group-hover:w-20" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}