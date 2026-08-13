export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f7faff] pt-24"
    >
      {/* Light background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.13),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(14,165,233,0.10),transparent_34%)]" />

        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center justify-center px-6 py-16 lg:px-8">
        <div className="-mt-6 w-full text-center">

          {/* Name */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="text-slate-900">Eng.</span>{" "}
            <span className="text-[#123A73]">Rafat Mohammed</span>
          </h1>

          {/* Position */}
          <p className="mt-7 text-xl font-medium text-slate-600 sm:text-2xl lg:text-3xl">
            Technical Support &amp; Projects Team Leader
          </p>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Leading and delivering geospatial projects across Saudi Arabia,
            with specialized experience in Mobile Mapping, CORS and VRS
            infrastructure, technical support, and project leadership.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              View Projects
            </a>

            <a
              href="/Rafat-Mohammed-CV.pdf"
              download="Rafat-Mohammed-CV.pdf"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/70 px-7 py-4 font-semibold text-slate-800 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-700 hover:shadow-md"
            >
              <svg
                viewBox="0 0 24 24"
                className="mr-3 h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>

              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/40 px-7 py-4 font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-700"
            >
              Contact Me
            </a>
          </div>

          {/* Expertise */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              "Mobile Mapping",
              "CORS & VRS",
              "Technical Support",
              "Project Leadership",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Point cloud city */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[280px] overflow-hidden opacity-55">
        <svg
          viewBox="0 0 1600 300"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="dots"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.1" fill="#3B82F6" opacity="0.7" />
            </pattern>

            <linearGradient id="cityFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          <path
            d="M0 230h90v-80h50v80h65V115h55v115h70V160h45v70h80V90h60v140h80v-50h50v50h75V65h65v165h90V135h55v95h65V110h70v120h70V155h55v75h70V75h70v155h100V120h65v110h90v70H0Z"
            fill="url(#dots)"
            stroke="url(#cityFade)"
            strokeWidth="1.5"
          />

          <path
            d="M0 265C250 210 410 290 620 235s390-40 560 10 300 15 420-15"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeDasharray="5 8"
            opacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
}