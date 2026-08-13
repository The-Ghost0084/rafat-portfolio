import Image from "next/image";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-100/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
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

        <ul className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-blue-600"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}