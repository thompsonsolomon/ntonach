import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Globe2,
  Hammer,
  Home,
  Menu,
  Moon,
  Paintbrush,
  Sun,
  X,
  Settings,
  ChartNoAxesCombined,
  Users,
  ShieldCheck,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  BriefcaseBusiness,
  Store,
} from "lucide-react";

const heroImages = [
  "/images/properties-hero-1.jpg",
  "/images/properties-hero-2.jpg",
  "/images/properties-hero-3.jpg",
];

const services = [
  {
    icon: Hammer,
    title: "Real Estate Development",
    description:
      "Development of residential, commercial, and mixed-use properties with smart, eco-conscious architecture and design.",
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    description:
      "Bespoke interior design services combining functionality with aesthetic appeal, supported by 3D visualisation and AR previews.",
  },
  {
    icon: Settings,
    title: "Property Management",
    description:
      "Comprehensive asset management with organised maintenance systems and technology-enabled tenant solutions.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Marketing & Branding",
    description:
      "Strategic marketing for property sales, rentals, and investment opportunities through digital campaigns and virtual tours.",
  },
  {
    icon: Users,
    title: "Outsourcing",
    description:
      "Staffing and operational support for residential and commercial properties, including cleaners, security personnel, housekeepers, domestic staff, maintenance technicians, and groundskeepers. We also coordinate schedules, tenant services, and quality assurance.",
  },
];

const projects = [
  {
    icon: Home,
    title: "Smart Residential Village",
    type: "Residential",
    description:
      "A residential development concept focused on smart-home technology, sustainable design, and community living.",
  },
  {
    icon: Building2,
    title: "Modern Business Centre",
    type: "Commercial",
    description:
      "A commercial development concept designed around modern infrastructure and energy-conscious systems.",
  },
  {
    icon: Store,
    title: "Urban Living Hub",
    type: "Mixed-use",
    description:
      "A mixed-use development concept bringing residential, retail, and office spaces together.",
  },
];

const languages = [
  ["en", "🇬🇧 / 🇺🇸", "English"],
  ["fr", "🇫🇷", "French"],
  ["zh", "🇨🇳", "Chinese (简体中文)"],
  ["it", "🇮🇹", "Italian"],
  ["es", "🇪🇸", "Spanish"],
  ["de", "🇩🇪", "German"],
  ["ar", "🇸🇦", "Arabic (العربية)"],
  ["pt", "🇵🇹 / 🇧🇷", "Portuguese"],
  ["ru", "🇷🇺", "Russian"],
  ["hi", "🇮🇳", "Hindi (हिन्दी)"],
  ["ja", "🇯🇵", "Japanese"],
  ["ko", "🇰🇷", "Korean"],
  ["sw", "🇰🇪 / 🇹🇿", "Swahili"],
  ["nl", "🇳🇱", "Dutch"],
];

function SectionHeading({ eyebrow, title, description, dark }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-orange-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className={`mt-4 text-sm leading-7 sm:text-base ${dark ? "text-white/60" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function Properties() {
  const [dark, setDark] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroImages.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const jumpTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const page = dark ? "bg-[#101714] text-white" : "bg-white text-slate-900";
  const muted = dark ? "text-white/60" : "text-slate-600";
  const sectionAlt = dark ? "bg-[#151e1a]" : "bg-slate-50";
  const border = dark ? "border-white/10" : "border-slate-200";
  const card = dark ? "border-white/10 bg-[#17211c]" : "border-slate-200 bg-white";

  return (
    <main className={`min-h-screen overflow-hidden font-sans transition-colors duration-300 ${page}`}>
      {/* Navigation */}
      <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${dark ? "border-white/10 bg-[#101714]/90" : "border-slate-200 bg-white/90"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <img
              src="/images/Ntonarch logo1.png"
              alt="NTONARCH logo"
              className="h-11 w-11 rounded-lg object-contain"
            />
            <span className="whitespace-nowrap text-sm font-extrabold tracking-wide sm:text-base">
              NTONARCH <span className="text-orange-500">PROPERTIES</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => jumpTo(item.toLowerCase())}
                className={`text-sm font-medium transition hover:text-orange-500 ${muted}`}
              >
                {item}
              </button>
            ))}
            <a href="/career.html" className={`text-sm font-medium transition hover:text-orange-500 ${muted}`}>
              Career
            </a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle colour theme"
              className={`grid h-10 w-10 place-items-center rounded-full border ${border} ${muted} transition hover:border-orange-500 hover:text-orange-500`}
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-orange-600"
              >
                <Globe2 size={15} />
                {language}
                <ChevronDown size={14} />
              </button>
              {languageOpen && (
                <div className={`absolute right-0 top-12 max-h-80 w-60 overflow-y-auto rounded-xl border p-2 shadow-2xl ${dark ? "border-white/10 bg-[#17211c]" : "border-slate-200 bg-white"}`}>
                  {languages.map(([code, flag, name]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLanguage(name);
                        setLanguageOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition hover:bg-orange-500/10 ${name === language ? "text-orange-500" : ""}`}
                    >
                      <span>{flag}</span>
                      {name}
                      {name === language && <Check className="ml-auto" size={14} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle colour theme"
              className={`grid h-10 w-10 place-items-center rounded-full border ${border}`}
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
              className={`grid h-10 w-10 place-items-center rounded-full border ${border}`}
            >
              {mobileOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className={`border-t px-5 py-5 lg:hidden ${border} ${dark ? "bg-[#101714]" : "bg-white"}`}>
            <nav className="mx-auto flex max-w-7xl flex-col gap-1">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => jumpTo(item.toLowerCase())}
                  className="rounded-lg px-3 py-3 text-left text-sm font-medium transition hover:bg-orange-500/10 hover:text-orange-500"
                >
                  {item}
                </button>
              ))}
              <a href="/career.html" className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-orange-500/10 hover:text-orange-500">
                Career
              </a>
              <div className="mt-3 flex flex-wrap gap-2 border-t border-current/10 pt-4">
                {languages.map(([code, flag, name]) => (
                  <button
                    key={code}
                    onClick={() => setLanguage(name)}
                    className={`rounded-full border px-3 py-1.5 text-xs ${name === language ? "border-orange-500 text-orange-500" : border}`}
                  >
                    {flag} {name}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative flex min-h-[760px] items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${activeSlide === index ? "opacity-100" : "opacity-0"}`}
              style={{ backgroundImage: `url("${src}")` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07110e] via-[#07110e]/90 to-[#07110e]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07110e]/60 via-transparent to-[#07110e]/20" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
              <span className="h-px w-9 bg-orange-500" />
              Real Estate Innovation & Development
            </p>
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Building Tomorrow&apos;s Communities <span className="text-orange-500">Today.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
              Elevating real estate through modern sustainability, technology, and purpose. We aim to create distinctive spaces for a smarter future while delivering modern living and investment experiences.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/marketplace.html"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Explore Properties in Ntonarch Marketplace <ArrowRight size={17} />
              </a>
              <a
                href="/contact.html"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:border-orange-400 hover:bg-white/10"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="relative w-full max-w-sm rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
              <div className="mb-10 grid h-16 w-16 place-items-center rounded-2xl bg-orange-500 text-white">
                <Building2 size={32} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">Spaces with purpose</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white">Designed for living. Built for possibility.</h2>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Explore property development, design, management, and support services from one team.
              </p>
              <div className="mt-8 h-px bg-white/20" />
              <p className="mt-5 text-xs text-white/60">NTONARCH ACUMEN NETWORK</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              aria-label={`Show hero slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-9 bg-orange-500" : "w-2 bg-white/50 hover:bg-white"}`}
            />
          ))}
        </div>
        <button
          onClick={() => jumpTo("about")}
          aria-label="Scroll to about section"
          className="absolute bottom-8 right-8 z-10 hidden text-white/70 transition hover:text-orange-400 md:block"
        >
          <ArrowDown size={22} />
        </button>
      </section>

      {/* About */}
      <section id="about" className={`px-5 py-24 lg:px-8 ${sectionAlt}`}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Who we are"
            title="About NTONARCH PROPERTIES"
            description="Real Estate Innovation & Development"
            dark={dark}
          />
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-base leading-8">
                NTONARCH PROPERTIES is a forward-thinking real estate development and innovation company committed to creating sustainable, technologically advanced properties that contribute to modern living and investment experiences.
              </p>
              <p className={`mt-5 text-sm leading-8 ${muted}`}>
                As a division of the NTONARCH ACUMEN NETWORK, we focus on residential, commercial, and investment-oriented real estate opportunities that bring together innovation, sustainability, and community impact.
              </p>
              <a href="/contact.html" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:gap-3">
                Discuss a property opportunity <ArrowRight size={17} />
              </a>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#263a30]">
              <img
                src="/images/properties-about.jpg"
                alt="Contemporary sustainable residential architecture"
                className="absolute inset-0 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#16382b]/35 to-[#07110e]/70">
                <div className="text-center text-white">
                  <Home className="mx-auto mb-4 text-orange-400" size={48} />
                  <p className="text-sm font-semibold tracking-wide">Sustainable spaces. Stronger communities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we do"
            title="Our Services"
            description="Comprehensive real estate solutions, from development and design to property operations and marketing."
            dark={dark}
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className={`group rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 ${card}`}
              >
                <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-orange-500/10 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={25} />
                </div>
                <p className="mb-3 text-xs font-bold tracking-[0.18em] text-orange-500">0{index + 1}</p>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className={`mt-4 text-sm leading-7 ${muted}`}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`px-5 py-24 lg:px-8 ${sectionAlt}`}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our work"
            title="Featured Projects"
            description="Explore the types of property developments and spaces that inform our vision."
            dark={dark}
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map(({ icon: Icon, title, type, description }, index) => (
              <article key={title} className={`overflow-hidden rounded-2xl border ${card}`}>
                <div className="relative grid h-60 place-items-center overflow-hidden bg-gradient-to-br from-[#234536] to-[#0d1b15]">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(135deg, transparent 45%, rgba(255,255,255,.18) 45%, transparent 46%)", backgroundSize: "28px 28px" }} />
                  <Icon className="relative text-white/80" size={58} strokeWidth={1.2} />
                  <span className="absolute left-5 top-5 rounded-full bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Concept {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-7">
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-500">{type}</span>
                  <h3 className="mt-3 text-xl font-bold">{title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${muted}`}>{description}</p>
                </div>
              </article>
            ))}
          </div>
          <p className={`mt-6 text-center text-xs ${muted}`}>
            The project examples above illustrate development categories and are not presented as verified completed projects.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#14251d] px-7 py-14 text-center text-white sm:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-400">Start a conversation</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">Have a property project or opportunity in mind?</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65">
            Speak with our team about property development, management, interior design, marketing, or operational support.
          </p>
          <a href="/contact.html" className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-600">
            Contact Us & Send Message <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t px-5 pb-8 pt-16 lg:px-8 ${border} ${sectionAlt}`}>
        <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#home" className="text-lg font-extrabold tracking-wide">
              NTONARCH <span className="text-orange-500">PROPERTIES</span>
            </a>
            <p className={`mt-4 max-w-xs text-sm leading-7 ${muted}`}>
              Building tomorrow&apos;s communities today through thoughtful real estate development and property solutions.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                [Facebook, "#", "Facebook"],
                [Twitter, "#", "Twitter"],
                [Linkedin, "#", "LinkedIn"],
                [Instagram, "#", "Instagram"],
              ].map(([Icon, href, label]) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`grid h-10 w-10 place-items-center rounded-full border ${border} transition hover:border-orange-500 hover:bg-orange-500 hover:text-white`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul className={`mt-5 space-y-3 text-sm ${muted}`}>
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <button onClick={() => jumpTo(item.toLowerCase())} className="transition hover:text-orange-500">{item}</button>
                </li>
              ))}
              <li><a href="/career.html" className="hover:text-orange-500">Career</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Our Services</h3>
            <ul className={`mt-5 space-y-3 text-sm ${muted}`}>
              {["Real Estate Development", "Interior Design", "Property Management", "Marketing & Branding", "Outsourcing"].map((item) => (
                <li key={item}><a href="#services" className="transition hover:text-orange-500">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Resources & Support</h3>
            <ul className={`mt-5 space-y-3 text-sm ${muted}`}>
              {[
                ["Blog", "/blog.html"],
                ["System Status", "/system-status.html"],
                ["API Access", "/api-access.html"],
                ["Report Bug", "/report-bug.html"],
                ["Feature Request", "/feature-request.html"],
                ["Feedback", "/feedback.html"],
                ["Advertisement", "/advertisement.html"],
                ["Case Studies", "/case-studies.html"],
                ["Testimonials", "/testimonials.html"],
                ["Achievements", "/achievements.html"],
                ["Terms of Service", "/terms.html"],
                ["Privacy Policy", "/privacy.html"],
              ].map(([label, href]) => (
                <li key={label}><a href={href} className="transition hover:text-orange-500">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t pt-7 text-xs ${border} ${muted} sm:flex-row sm:items-center sm:justify-between`}>
          <p>© {new Date().getFullYear()} NTONARCH PROPERTIES. All rights reserved.</p>
          <p>Part of NTONARCH ACUMEN NETWORK</p>
        </div>
      </footer>
    </main>
  );
}