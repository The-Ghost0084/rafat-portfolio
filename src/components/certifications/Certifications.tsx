const certificationGroups = [
  {
    category: "Academic Qualification",
    description:
      "Formal academic foundation supporting my technical and engineering career.",
    featured: true,
    items: [
      {
        title: "Diploma in Computer Networks Systems Technology",
        issuer: "University of Science & Technology",
        year: "2011",
        type: "Academic Qualification",
        href: "/certificates/university-science-technology-diploma.pdf",
      },
    ],
  },
  {
    category: "Technical Certifications & Training",
    description:
      "Technical training and vendor-focused development across networking and geospatial technologies.",
    featured: false,
    items: [
      {
        title: "Cisco Certified Network Associate (CCNA)",
        issuer: "Sudan Telecommunications Academy",
        year: "2012",
        type: "Technical Training",
        href: "/certificates/ccna-sudacad-2012.pdf",
      },
      {
        title: "Implementing Cisco Unified Wireless Networking Essentials",
        issuer: "Gateway",
        year: "2010",
        type: "Technical Training",
        href: "/certificates/gateway-cisco-wireless-2010.pdf",
      },
      {
        title: "Trimble Mobile Mapping Systems",
        issuer: "Trimble",
        year: "2023",
        type: "Professional Recognition",
        href: "/certificates/trimble-mobile-mapping-2023.pdf",
      },
    ],
  },
  {
    category: "Professional Participation & Recognition",
    description:
      "Participation, contribution, and recognition through professional events and geospatial forums.",
    featured: false,
    items: [
      {
        title: "10th GIS Symposium in the Eastern Province",
        issuer: "University of Dammam",
        year: "2015",
        type: "Professional Participation",
        href: "/certificates/gis-symposium-2015.pdf",
      },
      {
        title: "11th GIS Symposium in Saudi Arabia",
        issuer: "Imam Abdulrahman Bin Faisal University",
        year: "2017",
        type: "Professional Participation",
        href: "/certificates/gis-symposium-2017.pdf",
      },
      {
        title: "Career Forum Appreciation Certificate",
        issuer: "University of Dammam",
        year: "2016",
        type: "Recognition",
        href: "/certificates/career-forum-appreciation-2016.pdf",
      },
    ],
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#f8fbff] py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[440px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-cyan-100/35 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-blue-600" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
              Certifications & Recognition
            </p>

            <span className="h-px w-8 bg-blue-600" />
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
            Academic foundation, technical development, and professional
            recognition.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            A selection of academic qualifications, technical training,
            professional participation, and recognition developed throughout
            my career.
          </p>
        </div>

        {/* Groups */}
        <div className="mt-16 space-y-14 lg:mt-20">
          {certificationGroups.map((group) => (
            <div key={group.category}>
              {/* Group heading */}
              <div className="mb-7 max-w-2xl">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {group.category}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {group.description}
                </p>
              </div>

              {/* Academic Qualification */}
              {group.featured ? (
                <div className="grid grid-cols-1">
                  {group.items.map((item) => (
                    <article
                      key={`${item.title}-${item.year}`}
                      className="group relative flex min-h-[210px] flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-7 shadow-[0_18px_45px_-38px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_60px_-38px_rgba(37,99,235,0.28)] sm:p-8"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-50 transition duration-300 group-hover:bg-blue-100"
                      />

                      <div className="relative z-10">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                            {item.year}
                          </span>

                          <span className="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
                            {item.type}
                          </span>
                        </div>

                        <h4 className="mt-6 text-xl font-semibold leading-7 text-slate-950 sm:text-2xl">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-sm font-medium text-blue-600">
                          {item.issuer}
                        </p>
                      </div>

                      <div className="relative z-10 mt-auto pt-7">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-700"
                        >
                          View Certificate

                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M7 17 17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                /* Small certification cards */
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <article
                      key={`${item.title}-${item.year}`}
                      className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-[22px] border border-slate-200/80 bg-white p-6 shadow-[0_16px_38px_-34px_rgba(15,23,42,0.30)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_48px_-34px_rgba(37,99,235,0.26)]"
                    >
                      {/* Decorative shape */}
                      <div
                        aria-hidden="true"
                        className="absolute -right-9 -top-9 h-24 w-24 rounded-full bg-blue-50 transition duration-300 group-hover:bg-blue-100"
                      />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between gap-3">
                          <span className="inline-flex shrink-0 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                            {item.year}
                          </span>

                          <span className="max-w-[55%] text-right text-[10px] font-medium uppercase leading-4 tracking-[0.1em] text-slate-400">
                            {item.type}
                          </span>
                        </div>

                        <h4 className="mt-5 text-lg font-semibold leading-6 text-slate-950">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-sm font-medium leading-6 text-blue-600">
                          {item.issuer}
                        </p>
                      </div>

                      <div className="relative z-10 mt-auto pt-6">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-700"
                        >
                          View Certificate

                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M7 17 17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}