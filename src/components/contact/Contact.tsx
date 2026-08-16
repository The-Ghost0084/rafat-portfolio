type Language = "en" | "ar";

type ContactProps = {
  lang: Language;
};

const contactItems = [
  {
    value: "rafat.adil@hotmail.com",
    href: "mailto:rafat.adil@hotmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    value: "+966553101476",
    href: "tel:+966553101476",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
];

const content = {
  en: {
    label: "Contact",
    title: "Let's connect and discuss your next project.",
    description:
      "For project collaboration, technical support, geospatial solutions, or professional opportunities, feel free to get in touch.",

    sendEmail: "Send Email",
    linkedin: "Visit LinkedIn",

    footer:
      "Rafat Mohammed · Technical Support & Projects Team Leader · Geospatial Engineering",
  },

  ar: {
    label: "تواصل معي",
    title: "لنتواصل ونتحدث عن مشروعك القادم.",
    description:
      "للتعاون في المشاريع، أو الدعم الفني، أو الحلول الجيومكانية، أو الفرص المهنية، يسعدني تواصلك معي.",

    sendEmail: "إرسال بريد إلكتروني",
    linkedin: "زيارة LinkedIn",

    footer:
      "رأفت محمد · قائد فريق الدعم الفني والمشاريع · الهندسة الجيومكانية",
  },
};

export default function Contact({ lang }: ContactProps) {
  const isArabic = lang === "ar";
  const text = content[lang];

  return (
    <section
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/35 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-100/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
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

        {/* Contact cards */}
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16">
          {contactItems.map((item) => (
            <a
              key={item.value}
              href={item.href}
              dir="ltr"
              className="relative flex min-h-[105px] items-center gap-4 overflow-hidden rounded-[18px] border border-slate-200/80 bg-white px-5 py-4 shadow-[0_14px_35px_-32px_rgba(15,23,42,0.30)]"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                {item.icon}
              </div>

              {/* Information */}
              <div className="min-w-0">
                <p className="break-words text-sm font-semibold leading-6 text-slate-950 sm:text-base">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Main actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://outlook.live.com/mail/0/deeplink/compose?to=rafat.adil@hotmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:bg-blue-700"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>

            {text.sendEmail}
          </a>

          <a
            href="https://www.linkedin.com/in/rafat/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 shadow-sm transition duration-300 hover:border-blue-400 hover:text-blue-700"
          >
            {/* LinkedIn icon */}
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
            </svg>

            {text.linkedin}
          </a>
        </div>

        {/* Footer note */}
        <div className="mx-auto mt-16 max-w-5xl border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-500">
            {text.footer}
          </p>
        </div>
      </div>
    </section>
  );
}