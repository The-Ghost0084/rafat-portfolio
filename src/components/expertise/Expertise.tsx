type ExpertiseProps = {
  lang: "en" | "ar";
};

const expertiseItems = {
  en: [
    {
      number: "01",
      title: "Mobile Mapping Systems",
      description:
        "Delivering high-accuracy geospatial data through vehicle-based mapping systems, integrated sensors, point clouds, and efficient field-to-office workflows.",
      tags: ["Mobile Mapping", "Point Clouds", "Data Integration"],
      type: "featured",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M3 16.5h18" />
          <path d="M5 16.5 6.8 11h10.4l1.8 5.5" />
          <path d="M7.5 11 9 7.5h6L16.5 11" />
          <circle cx="7" cy="18.5" r="1.5" />
          <circle cx="17" cy="18.5" r="1.5" />
          <path d="M12 7.5V4" />
          <path d="m9.5 5.5 2.5-2 2.5 2" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "CORS / VRS Infrastructure",
      description:
        "Supporting the deployment, configuration, operation, and maintenance of permanent reference station and real-time correction networks.",
      tags: ["CORS", "VRS Networks", "Infrastructure"],
      type: "standard",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M12 4v16" />
          <path d="M8.5 20h7" />
          <path d="m9 12 3-8 3 8" />
          <path d="M6.5 8.5a8 8 0 0 0 0 7" />
          <path d="M17.5 8.5a8 8 0 0 1 0 7" />
          <path d="M4 6a11 11 0 0 0 0 12" />
          <path d="M20 6a11 11 0 0 1 0 12" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Technical Support",
      description:
        "Providing installation, commissioning, troubleshooting, maintenance, and technical guidance for advanced geospatial systems.",
      tags: ["Support", "Training", "Troubleshooting"],
      type: "standard",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M14.7 6.3a4 4 0 0 0-5.5 5.5L4 17l3 3 5.2-5.2a4 4 0 0 0 5.5-5.5l-2.4 2.4-3-3 2.4-2.4Z" />
          <path d="m5.5 18.5 2-2" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Project Leadership",
      description:
        "Leading technical teams, coordinating stakeholders, managing project requirements, and ensuring reliable delivery from planning to completion.",
      tags: ["Leadership", "Coordination", "Delivery"],
      type: "standard",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="10" r="2.5" />
          <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
          <path d="M14 16.5a4.5 4.5 0 0 1 6.5 2.5" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "3D Laser Scanning",
      description:
        "Capturing precise three-dimensional spatial data for engineering documentation, analysis, verification, and digital project workflows.",
      tags: ["Laser Scanning", "3D Data", "Point Clouds"],
      type: "standard",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
          <path d="m4.5 7.8 7.5 4.3 7.5-4.3" />
          <path d="M12 12.1V21" />
          <path d="m8 10 4-2.3 4 2.3" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Land & Topographic Surveying",
      description:
        "Delivering precise land and topographic surveys for engineering, infrastructure, corridor, and development projects using advanced geospatial technologies.",
      tags: ["Topographic Survey", "Engineering Survey", "GNSS"],
      type: "wide",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v5" />
          <path d="M8.5 12h7" />
          <path d="M10.5 12 7 21" />
          <path d="M13.5 12 17 21" />
          <path d="M12 12v9" />
          <path d="M5 21h14" />
        </svg>
      ),
    },
  ],

  ar: [
    {
      number: "01",
      title: "أنظمة المسح المتحرك",
      description:
        "إنتاج بيانات جيومكانية عالية الدقة باستخدام أنظمة المسح المثبتة على المركبات، والمستشعرات المتكاملة، والسحب النقطية، مع سير عمل فعّال من الميدان إلى المكتب.",
      tags: ["المسح المتحرك", "السحب النقطية", "تكامل البيانات"],
      type: "featured",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M3 16.5h18" />
          <path d="M5 16.5 6.8 11h10.4l1.8 5.5" />
          <path d="M7.5 11 9 7.5h6L16.5 11" />
          <circle cx="7" cy="18.5" r="1.5" />
          <circle cx="17" cy="18.5" r="1.5" />
          <path d="M12 7.5V4" />
          <path d="m9.5 5.5 2.5-2 2.5 2" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "البنية التحتية لشبكات CORS / VRS",
      description:
        "دعم تنفيذ وتهيئة وتشغيل وصيانة شبكات المحطات المرجعية الدائمة وشبكات التصحيحات اللحظية عالية الدقة.",
      tags: ["CORS", "شبكات VRS", "البنية التحتية"],
      type: "standard",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M12 4v16" />
          <path d="M8.5 20h7" />
          <path d="m9 12 3-8 3 8" />
          <path d="M6.5 8.5a8 8 0 0 0 0 7" />
          <path d="M17.5 8.5a8 8 0 0 1 0 7" />
          <path d="M4 6a11 11 0 0 0 0 12" />
          <path d="M20 6a11 11 0 0 1 0 12" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "الدعم الفني",
      description:
        "تقديم خدمات التركيب والتشغيل واستكشاف الأعطال والصيانة والإرشاد الفني للأنظمة الجيومكانية المتقدمة.",
      tags: ["الدعم الفني", "التدريب", "معالجة الأعطال"],
      type: "standard",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M14.7 6.3a4 4 0 0 0-5.5 5.5L4 17l3 3 5.2-5.2a4 4 0 0 0 5.5-5.5l-2.4 2.4-3-3 2.4-2.4Z" />
          <path d="m5.5 18.5 2-2" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "قيادة المشاريع",
      description:
        "قيادة الفرق الفنية، والتنسيق مع أصحاب المصلحة، وإدارة متطلبات المشاريع، وضمان التنفيذ الموثوق من مرحلة التخطيط وحتى الإنجاز.",
      tags: ["القيادة", "التنسيق", "تنفيذ المشاريع"],
      type: "standard",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="10" r="2.5" />
          <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
          <path d="M14 16.5a4.5 4.5 0 0 1 6.5 2.5" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "المسح بالليزر ثلاثي الأبعاد",
      description:
        "التقاط بيانات مكانية ثلاثية الأبعاد عالية الدقة لأغراض التوثيق الهندسي والتحليل والتحقق ودعم سير العمل الرقمي للمشاريع.",
      tags: ["المسح بالليزر", "بيانات ثلاثية الأبعاد", "السحب النقطية"],
      type: "standard",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
          <path d="m4.5 7.8 7.5 4.3 7.5-4.3" />
          <path d="M12 12.1V21" />
          <path d="m8 10 4-2.3 4 2.3" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "المسح الأرضي والطبوغرافي",
      description:
        "تنفيذ أعمال المسح الأرضي والطبوغرافي بدقة عالية لمشاريع الهندسة والبنية التحتية والممرات ومشاريع التطوير باستخدام التقنيات الجيومكانية المتقدمة.",
      tags: ["المسح الطبوغرافي", "المسح الهندسي", "GNSS"],
      type: "wide",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v5" />
          <path d="M8.5 12h7" />
          <path d="M10.5 12 7 21" />
          <path d="M13.5 12 17 21" />
          <path d="M12 12v9" />
          <path d="M5 21h14" />
        </svg>
      ),
    },
  ],
};

const sectionContent = {
  en: {
    label: "Professional Expertise",
    title: "Technical expertise built through real-world engineering.",
    description:
      "Specialized capabilities developed through more than a decade of delivering geospatial solutions, technical support, infrastructure, and engineering projects across Saudi Arabia.",
  },

  ar: {
    label: "الخبرات المهنية",
    title: "خبرات تقنية بُنيت من خلال العمل الهندسي الميداني.",
    description:
      "خبرات متخصصة تطورت على مدار أكثر من عقد من العمل في تنفيذ الحلول الجيومكانية والدعم الفني ومشاريع البنية التحتية والهندسة في مختلف أنحاء المملكة العربية السعودية.",
  },
};

export default function Expertise({ lang }: ExpertiseProps) {
  const items = expertiseItems[lang];
  const text = sectionContent[lang];

  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-blue-600" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
              {text.label}
            </p>

            <span className="h-px w-8 bg-blue-600" />
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
            {text.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {text.description}
          </p>
        </div>

        {/* Expertise grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-2">
          {items.map((item) => {
            const isFeatured = item.type === "featured";
            const isWide = item.type === "wide";

            return (
              <article
                key={item.number}
                className={`group relative cursor-default overflow-hidden rounded-[26px] border border-slate-200/80 bg-white transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_24px_60px_-44px_rgba(15,23,42,0.32)] ${
                  isFeatured
                    ? "min-h-[320px] lg:col-span-2 lg:min-h-[340px]"
                    : isWide
                      ? "min-h-[270px] lg:col-span-2"
                      : "min-h-[270px]"
                }`}
              >
                {/* Subtle card gradient */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    isFeatured || isWide
                      ? "bg-[radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.09),transparent_42%)]"
                      : "bg-[radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.06),transparent_45%)]"
                  }`}
                />

                {/* Decorative grid */}
                {(isFeatured || isWide) && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] opacity-[0.08] lg:block"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
                      backgroundSize: "34px 34px",
                      maskImage:
                        "linear-gradient(to left, black, transparent 90%)",
                      WebkitMaskImage:
                        "linear-gradient(to left, black, transparent 90%)",
                    }}
                  />
                )}

                {/* Large decorative card number */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute font-semibold tracking-[-0.08em] text-slate-950/[0.035] transition-colors duration-500 group-hover:text-blue-600/[0.05] ${
                    isFeatured
                      ? "-right-3 -top-12 text-[190px] sm:text-[230px]"
                      : isWide
                        ? "-right-2 -top-10 text-[170px]"
                        : "-right-2 -top-8 text-[145px]"
                  }`}
                >
                  {item.number}
                </span>

                <div
                  className={`relative z-10 flex h-full flex-col ${
                    isFeatured
                      ? "p-7 sm:p-8 lg:p-9"
                      : "p-6 sm:p-7 lg:p-8"
                  }`}
                >
                  {/* Expertise identity */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
                      {item.icon}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold tracking-[0.16em] text-slate-400">
                        {item.number}
                      </span>

                      <span
                        aria-hidden="true"
                        className="h-px w-10 bg-slate-200"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={
                      isFeatured
                        ? "mt-auto max-w-3xl pt-10 sm:pt-12"
                        : "mt-auto pt-8"
                    }
                  >
                    <h3
                      className={`font-semibold tracking-[-0.03em] text-slate-950 ${
                        isFeatured
                          ? "text-3xl sm:text-4xl lg:text-[40px]"
                          : "text-2xl sm:text-[28px]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-4 leading-7 text-slate-600 ${
                        isFeatured
                          ? "max-w-2xl text-base sm:text-lg"
                          : isWide
                            ? "max-w-3xl text-base"
                            : "max-w-xl text-base"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Informational tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="cursor-default select-none rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}