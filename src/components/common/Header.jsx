
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Globe,
  Moon,
  Sun,
  Menu,
  X,
  UserRound,
  ArrowUpRight,
} from "lucide-react";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Career", href: "/career" },
  { label: "FAQ", href: "/faq" },
];

const serviceLinks = [
  { label: "Media", href: "media", desc: "Media and communications" },
  { label: "Market", href: "market", desc: "Trade and commerce" },
  {
    label: "Farms",
    href: "farm",
    desc: "Agriculture and farming",
  },
  { label: "Computer", href: "computer", desc: "Technology solutions" },
  {
    label: "Engineering",
    href: "engineering",
    desc: "Engineering services",
  },
  { label: "Events", href: "events", desc: "Events and experiences" },
  {
    label: "Properties",
    href: "properties",
    desc: "Real estate and property",
  },
  { label: "Waste", href: "wastes", desc: "Waste management" },
  { label: "Catering", href: "catering", desc: "Food and hospitality" },
  {
    label: "Foundation",
    href: "foundation",
    desc: "Community development",
  },
];

const languages = [
  "English",
  "French",
  "Chinese",
  "Italian",
  "Spanish",
  "German",
  "Arabic",
  "Portuguese",
  "Russian",
  "Hindi",
  "Japanese",
  "Korean",
  "Swahili",
  "Dutch",
];

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="relative py-2 text-[14px] font-medium text-gray-200 transition-colors hover:text-[#ff6b00] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#ff6b00] after:transition-all hover:after:w-full"
    >
      {children}
    </a>
  );
}

function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`flex items-center gap-1.5 py-2 text-[14px] font-medium transition-colors ${
          open ? "text-[#ff6b00]" : "text-gray-200 hover:text-[#ff6b00]"
        }`}
      >
        {label}
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#151515]/95">
      <nav className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">

        {/* Brand */}
        <a href="/" className="flex shrink-0 items-center gap-3">
          <img
            src="/images/Ntonarch logo1.png"
            alt="NTONARCH Conglomerate"
            className="h-11 w-auto object-contain"
          />

          <div className="leading-tight">
            <span className="block text-[21px] font-bold tracking-tight text-[#ff6b00]">
              NTONARCH
            </span>
            <span className="mt-1 block text-[9px] font-semibold tracking-[0.24em] text-gray-500 dark:text-gray-400">
              CONGLOMERATE
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>

          {/* Company dropdown for secondary pages */}
          <Dropdown label="Company">
            <div className="w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-[#222]">
              {companyLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-sm text-white transition hover:bg-orange-50 hover:text-[#ff6b00] dark:text-white dark:hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </Dropdown>

          {/* Services mega menu */}
          <Dropdown label="Services">
            <div className="w-[560px] rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-[#222]">
              <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3 dark:border-white/10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#ff6b00]">
                    Our Expertise
                  </p>
                  <p className="mt-1 text-sm text-white dark:text-white">
                    Explore our business divisions
                  </p>
                </div>
                <a
                  href="services"
                  className="flex items-center gap-1 text-xs font-semibold text-[#ff6b00]"
                >
                  All services <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-1">
                {serviceLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group rounded-xl p-3 transition hover:bg-orange-50 dark:hover:bg-white/5"
                  >
                    <span className="block text-sm font-semibold text-gray-800 transition group-hover:text-[#ff6b00] dark:text-gray-100">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                      {item.desc}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Dropdown>

          <NavLink href="contact">Contact</NavLink>
        </div>

        {/* Right controls */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
            >
              <Globe size={17} />
              <span>{language === "English" ? "EN" : language}</span>
              <ChevronDown size={13} />
            </button>

            {languageOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 max-h-72 w-48 overflow-y-auto rounded-xl border border-gray-100 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-[#222]">
                {languages.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setLanguage(item);
                      setLanguageOpen(false);
                    }}
                    className="block w-full rounded-lg px-3 py-2.5 text-left text-sm text-gray-600 transition hover:bg-orange-50 hover:text-[#ff6b00] dark:text-gray-300 dark:hover:bg-white/5"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Profile */}
          <a
            href="profile"
            aria-label="Profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-[#ff6b00] hover:text-[#ff6b00] dark:border-white/20 dark:text-gray-300"
          >
            <UserRound size={18} />
          </a>

          {/* CTA */}
          <a
            href="contact"
            className="ml-2 flex items-center gap-2 rounded-full bg-[#ff6b00] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e85f00] hover:shadow-lg hover:shadow-orange-500/20"
          >
            Get in touch
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 lg:hidden dark:border-white/20 dark:text-white"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-5 shadow-lg lg:hidden dark:border-white/10 dark:bg-[#151515]">
          <div className="flex flex-col gap-1">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Career", "/career"],
              ["FAQ", "/faq"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-[#ff6b00] dark:text-gray-200"
              >
                {label}
              </a>
            ))}

            <p className="px-4 pb-2 pt-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Services
            </p>

            <div className="grid grid-cols-2 gap-2 px-4">
              {serviceLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg bg-gray-50 px-3 py-3 text-sm text-gray-600 hover:text-[#ff6b00] dark:bg-white/5 dark:text-gray-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="contact.html"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-5 py-3.5 text-sm font-semibold text-white"
            >
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
