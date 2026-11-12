
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Building2,
  SunMedium,
  ShieldCheck,
  Settings,
  Lightbulb,
  HardHat,
  Wrench,
  Cpu,
  Calculator,
  FileText,
  Truck,
  Search,
  Handshake,
  CheckCircle2,
  Facebook,
  MapPin,
  CalendarDays,
  Quote,
  Award,
  Leaf,
  Eye,
  Layers,
  ClipboardCheck,
  Network,
  Plug,
  Cog,
  Clock3,
  MessageCircle,
} from "lucide-react";

const asset = (name) => `/assets/${name}`;

const heroImages = [
  { src: asset("ee2.png"), alt: "Electrical engineering systems" },
  { src: asset("ee3.webp"), alt: "Engineering installation" },
  { src: asset("ee4.jpg"), alt: "Electrical control systems" },
  { src: asset("e1.png"), alt: "Engineering infrastructure" },
  { src: asset("e2.jpg"), alt: "Civil engineering project" },
  { src: asset("e3.jpg"), alt: "Structural engineering" },
  { src: asset("e10.jpg"), alt: "Construction management" },
  { src: asset("ee1.jpg"), alt: "Electronics integration" },
];

const divisions = [
  {
    icon: Zap,
    title: "Electrical & Electronics Engineering",
    description:
      "We design, install, and maintain power distribution, control systems, automation, and smart electronics for residential, commercial, and industrial environments.",
  },
  {
    icon: Building2,
    title: "Civil & Structural Engineering",
    description:
      "From architectural planning and structural analysis to construction management and site development, we deliver practical infrastructure solutions.",
  },
  {
    icon: SunMedium,
    title: "Energy & Infrastructure",
    description:
      "Renewable energy integration, solar power systems, transmission infrastructure, and smart technologies that support sustainable communities.",
  },
];

const serviceCategories = [
  {
    icon: Zap,
    title: "Electrical & Electronics Services",
    services: [
      {
        title: "Power System Design & Installation",
        description:
          "Electrical power system engineering, including load calculations, circuit design, distribution boards, and installation for homes, offices, and industrial facilities.",
      },
      {
        title: "Control Panel Installation",
        description:
          "Design, assembly, and commissioning of custom control panels for automation, motor control, and industrial processes.",
      },
      {
        title: "Electrical Maintenance",
        description:
          "Preventive and corrective maintenance to extend equipment life, reduce downtime, and support electrical safety.",
      },
      {
        title: "Electronics Integration",
        description:
          "Integration of sensors, microcontrollers, IoT devices, and smart building systems for intelligent monitoring and automated control.",
      },
      {
        title: "Solar & Green Energy Systems",
        description:
          "Design and installation of photovoltaic systems, battery storage, inverters, and hybrid renewable energy solutions.",
      },
      {
        title: "Electrical Project Design",
        description:
          "Project support covering feasibility studies, schematic design, implementation, testing, and handover documentation.",
      },
      {
        title: "Automation & Smart Technologies",
        description:
          "IoT-based automation, smart power systems, automatic switch installations, and intelligent energy management.",
      },
      {
        title: "Internet & Security Systems",
        description:
          "Starlink satellite connectivity installation, CCTV surveillance systems, and integrated security infrastructure.",
      },
    ],
  },
  {
    icon: HardHat,
    title: "Civil & Structural Services",
    services: [
      {
        title: "Structural Design",
        description:
          "Structural analysis and design for residential, commercial, and institutional buildings, with emphasis on safety and cost efficiency.",
      },
      {
        title: "Construction Management",
        description:
          "Project oversight covering scheduling, budgeting, quality control, contractor coordination, and on-site supervision.",
      },
      {
        title: "Site Development",
        description:
          "Land preparation, grading, drainage planning, and infrastructure layout for residential and commercial developments.",
      },
      {
        title: "Building Inspection",
        description:
          "Structural and compliance inspections to assess workmanship, identify defects, and support building safety.",
      },
      {
        title: "Architectural Design",
        description:
          "Conceptual and detailed architectural planning for residential and commercial buildings.",
      },
      {
        title: "Drainage & Infrastructure",
        description:
          "Design and construction of drainage systems, foundations, and civil infrastructure.",
      },
    ],
  },
  {
    icon: Plug,
    title: "Energy & Power Infrastructure",
    services: [
      {
        title: "Solar Power Systems",
        description:
          "Grid-tied and off-grid solar installations for homes, businesses, and public infrastructure.",
      },
      {
        title: "Automatic Switch Installations",
        description:
          "Automatic transfer switches and changeover systems for switching between grid power and backup sources.",
      },
      {
        title: "Solar-Powered Traffic Lights",
        description:
          "Solar-powered traffic control systems designed to reduce grid dependency and support road infrastructure.",
      },
      {
        title: "Power Distribution Infrastructure",
        description:
          "Electrical distribution infrastructure for rural electrification, estates, and industrial networks.",
      },
    ],
  },
  {
    icon: Handshake,
    title: "Professional & Support Services",
    services: [
      {
        title: "System Design",
        description:
          "Engineering design covering electrical schematics, structural drawings, BIM modelling, and technical specifications.",
      },
      {
        title: "Installation & Commissioning",
        description:
          "On-site installation, testing, and commissioning of engineered systems, with documentation and client handover.",
      },
      {
        title: "Maintenance & Upgrades",
        description:
          "Support contracts, system upgrades, retrofits, and modernization of existing infrastructure.",
      },
      {
        title: "Expert Consultation",
        description:
          "Technical advisory, feasibility assessments, engineering reviews, and consultancy for developers and organizations.",
      },
      {
        title: "Project Management & Supervision",
        description:
          "Coordination of project timelines, resources, and stakeholders to support delivery within agreed specifications.",
      },
      {
        title: "Quality Assurance & Compliance",
        description:
          "Inspection, testing, and quality assurance aligned with applicable engineering and safety requirements.",
      },
      {
        title: "Workforce Outsourcing",
        description:
          "Deployment and coordination of engineers, artisans, and technical specialists for project requirements.",
      },
      {
        title: "Equipment Financing Options",
        description:
          "Structured lease-to-own and rent-to-own arrangements for eligible engineering equipment and systems.",
      },
    ],
  },
];

const aboutTabs = [
  { id: "who", label: "Who We Are" },
  { id: "what", label: "What We Do" },
  { id: "support", label: "Professional Support" },
  { id: "budget", label: "Budgeting & Procurement" },
];

const projects = [
  {
    title: "Renewable Energy (Solar)",
    description:
      "Electrical and electronic systems for residential use and street lighting, integrated with renewable energy solutions.",
    image: asset("sss3.jpg"),
    tags: ["Electrical", "Renewable Energy"],
  },
  {
    title: "Electrical Innovation Laboratory",
    description:
      "Electrical and electronics systems, facility engineering, and practical technology demonstrations.",
    image: asset("ee1.jpg"),
    tags: ["Innovation", "Electrical"],
  },
  {
    title: "Modern Residential Building",
    description:
      "Infrastructure development for a modern single-storey residential building.",
    image: asset("e10.jpg"),
    tags: ["Residential", "Civil & Structural"],
  },
  {
    title: "Internet & Security Installation",
    description:
      "Starlink connectivity and CCTV camera installation to improve connectivity and building security.",
    image: asset("sss7.jpg"),
    tags: ["Connectivity", "Security"],
  },
];

const testimonials = [
  {
    quote:
      "NTONARCH ENGINEERING designed and delivered exceptional results on my mother's residential building. Their attention to detail and professional approach exceeded our expectations.",
    name: "Dominic Arop",
    location:
      "Nde 3 Corners, Ikom Local Government, Cross River State, Nigeria.",
    image: asset("arop.jpg"),
    link: "https://www.facebook.com/media/set/?set=a.114892047870880&type=3",
  },
  {
    quote:
      "The electrical systems designed and installed by NTONARCH ENGINEERING incorporate a 5-kilowatt solar renewable energy solution and have been running reliably. I highly recommend their services.",
    name: "Mr Emma Okon",
    location:
      "Nwaniba, Uyo, Akwa Ibom State, Nigeria.",
    image: asset("arop.jpg"),
  },
  {
    quote:
      "NTONARCH ENGINEERING is a forward-thinking firm specializing in modern electrical, electronics, and civil engineering solutions. Their expertise helped us complete our projects within the required specifications.",
    name: "Professor (Dr.) Danlady Tukura",
    location:
      "Researcher & Development Specialist, CEO, KASA Engineering Ltd, Kaduna, Nigeria.",
    image: asset("arop.jpg"),
  },
];

const galleryItems = [
  {
    title: "Smart Domestic Electrical Installation",
    description:
      "Electrical power distribution and domestic installation.",
    category: "Electrical",
    client: "Elder Goddy Ekpe",
    location: "Yala Local Government Area, Cross River State, Nigeria",
    year: "2022",
    images: ["ee1.jpg", "ee4.jpg", "ee6.jpg", "ee7.webp", "ee9.jpeg", "ee10.jpg"],
  },
  {
    title: "Residential Building Project",
    description: "Modern residential building construction.",
    category: "Civil",
    client: "Mr Ikanem Orok",
    location: "Uyo, Akwa Ibom State, Nigeria",
    year: "2022",
    images: ["e3.jpg", "e4.jpg", "e5.jpeg", "e5a.jpeg", "e6.jpg", "e6a.jpeg", "e7.jpeg", "e7a.jpeg", "e10.jpg"],
  },
  {
    title: "Starlink Internet Installation",
    description:
      "Installation of Starlink connectivity equipment for a workspace.",
    category: "Electrical",
    client: "Gocity Group Workspace",
    location: "Nwaniba, Uyo, Akwa Ibom State, Nigeria",
    year: "2025",
    images: ["sta.jpg", "st1.jpg", "st4.jpg", "st3.jpg", "st5.jpg"],
  },
  {
    title: "Green Power Pack",
    description:
      "Design and implementation of a renewable energy backup power system.",
    category: "Electrical",
    client: "Research, Design & Implementation",
    location: "Uyo, Akwa Ibom State, Nigeria",
    year: "2024",
    images: ["pk1.jpg", "pk2.jpg", "pk3.jpg", "pk4.jpg", "pk5.jpg", "pk6.jpg", "pk7.jpg"],
  },
  {
    title: "Palace Renovation",
    description:
      "Redesign of electrical infrastructure and structural drainage works.",
    category: "Civil",
    client: "His Royal Highness Palace",
    location: "Ikom, Cross River State, Nigeria",
    year: "2023",
    images: ["r1.jpg", "r2.jpg", "r3.jpeg"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consult & Assess",
    description:
      "We begin with site assessments, requirements analysis, and feasibility studies to define project scope, budget, and timeline.",
  },
  {
    number: "02",
    title: "Design & Engineer",
    description:
      "Our engineering process produces detailed schematics, structural drawings, and technical specifications.",
  },
  {
    number: "03",
    title: "Install & Build",
    description:
      "Our teams execute installation and construction with quality checks, safety procedures, and progress reporting.",
  },
  {
    number: "04",
    title: "Test & Commission",
    description:
      "Systems undergo testing and performance verification before handover and documentation delivery.",
  },
  {
    number: "05",
    title: "Support & Maintain",
    description:
      "Maintenance, upgrades, and ongoing technical support help keep infrastructure operating reliably.",
  },
];

const workModes = [
  {
    id: "on-site",
    label: "On Site",
    title: "On-Site Engineering Support",
    description:
      "Our team deploys directly to your site for installation, supervision, inspection, and construction management.",
  },
  {
    id: "remote",
    label: "Remote",
    title: "Remote Design & Coordination",
    description:
      "Our team provides design reviews, technical coordination, monitoring, and reporting remotely.",
  },
  {
    id: "all-round",
    label: "All Round",
    title: "Complete Engineering Delivery",
    description:
      "A combination of on-site and remote support gives your project coordinated engineering assistance from planning to delivery.",
  },
];

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      {eyebrow && (
        <span
          className={`mb-4 inline-block text-xs font-bold uppercase tracking-[0.22em] ${
            light ? "text-orange-300" : "text-orange-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-slate-950 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-8 ${
            light ? "text-white/65" : "text-slate-500 dark:text-slate-400"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function Engineering() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("who");
  const [testimonial, setTestimonial] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [gallerySlides, setGallerySlides] = useState({});
  const [activeMode, setActiveMode] = useState("on-site");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((current) => (current + 1) % heroImages.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const changeSlide = (direction) => {
    setSlide(
      (current) =>
        (current + direction + heroImages.length) % heroImages.length,
    );
  };

  const changeGallerySlide = (index, direction, total) => {
    setGallerySlides((current) => ({
      ...current,
      [index]: ((current[index] || 0) + direction + total) % total,
    }));
  };

  const filteredGallery =
    galleryFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === galleryFilter);

  const currentMode = workModes.find((mode) => mode.id === activeMode);

  const navLinks = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["About Us", "#about"],
    ["Projects", "#projects"],
    ["Gallery", "#gallery"],
    ["Contact", "/contact"],
  ];

  return (
    <div
      className={`${dark ? "dark" : ""} min-h-screen bg-white font-[Inter,sans-serif] text-slate-900 transition-colors duration-300 dark:bg-[#101714] dark:text-white`}
    >
      {/* Header */}
      <header className="fixed w-full top-0 z-50 border-b border-white/10 bg-[#101714]/95 text-white shadow-lg shadow-black/5 backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <img
              src="/images/Ntonarch logo1.png"
              alt="Ntonarch Engineering"
              className="h-12 w-12 shrink-0 object-contain"
            />
            <span className="text-sm font-extrabold tracking-wide sm:text-base">
              NTONARCH <span className="text-orange-400">ENGINEERING</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-white/75 transition hover:text-orange-400"
              >
                {label}
              </a>
            ))}

            {/* <a
              href="/"
              className="rounded-lg border border-orange-400/50 px-4 py-2 text-sm font-semibold text-orange-300 transition hover:bg-orange-500 hover:text-white"
            >
              Conglomerate
            </a> */}

            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="rounded-full border border-white/15 p-2.5 transition hover:bg-white/10"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-orange-300"
              >
                <Globe size={17} />
                English
                <ChevronDown size={14} />
              </button>

              {languageOpen && (
                <div className="absolute right-0 top-10 z-50 max-h-80 w-52 overflow-y-auto rounded-xl border border-white/10 bg-[#17221e] p-2 shadow-2xl">
                  {[
                    "🇬🇧 English",
                    "🇫🇷 French",
                    "🇨🇳 Chinese",
                    "🇮🇹 Italian",
                    "🇪🇸 Spanish",
                    "🇩🇪 German",
                    "🇸🇦 Arabic",
                    "🇵🇹 Portuguese",
                    "🇷🇺 Russian",
                    "🇮🇳 Hindi",
                    "🇯🇵 Japanese",
                    "🇰🇷 Korean",
                    "🇰🇪 Swahili",
                    "🇳🇱 Dutch",
                  ].map((language) => (
                    <button
                      key={language}
                      onClick={() => setLanguageOpen(false)}
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm text-white/80 hover:bg-white/10"
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="rounded-full border border-white/15 p-2.5"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              className="rounded-lg border border-white/15 p-2.5"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#101714] px-6 py-5 xl:hidden">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-1">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-orange-400"
                >
                  {label}
                </a>
              ))}
              <a
                href="/"
                className="mt-2 rounded-lg bg-orange-500 px-4 py-3 text-center text-sm font-bold text-white"
              >
                Conglomerate
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative isolate flex min-h-[700px] items-center overflow-hidden bg-[#101714]"
      >
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              slide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#07120f] via-[#07120f]/90 to-[#07120f]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07120f]/70 via-transparent to-[#07120f]/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-orange-300">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              A Division of Ntonarch Acumen Network
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Excellence in
              <span className="block text-orange-400">
                Engineering Solutions
              </span>
              & Innovation
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              A multidisciplinary engineering division delivering electrical,
              electronics, civil, and structural solutions across Nigeria,
              West Africa, and international markets — from concept and design
              through execution and maintenance.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-3 rounded-lg bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600"
              >
                Explore Services <ArrowRight size={18} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Request a Quote <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/20 pt-7">
              {[
                ["Electrical", "Engineering"],
                ["Civil", "& Structural"],
                ["Energy", "& Infrastructure"],
              ].map(([first, second]) => (
                <div key={first}>
                  <p className="text-lg font-extrabold text-white sm:text-xl">
                    {first}
                  </p>
                  <p className="mt-1 text-xs text-white/55 sm:text-sm">
                    {second}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-5 z-20 flex items-center gap-3 sm:right-10">
          <button
            onClick={() => changeSlide(-1)}
            aria-label="Previous image"
            className="rounded-full border border-white/30 bg-black/20 p-3 text-white backdrop-blur transition hover:bg-orange-500"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => changeSlide(1)}
            aria-label="Next image"
            className="rounded-full border border-white/30 bg-black/20 p-3 text-white backdrop-blur transition hover:bg-orange-500"
          >
            <ChevronRight size={20} />
          </button>
          <div className="ml-2 flex gap-2">
            {heroImages.map((image, index) => (
              <button
                key={image.src}
                onClick={() => setSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  slide === index ? "w-8 bg-orange-400" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-[#f7f8f6] px-5 py-24 dark:bg-[#141e19] sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="What We Deliver"
            title="Comprehensive Engineering Services"
            description="End-to-end engineering solutions covering planning, design, installation, construction, and ongoing technical support."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <article
                  key={division.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl hover:shadow-slate-900/5 dark:border-white/10 dark:bg-[#1b2822]"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white dark:bg-orange-500/10">
                    <Icon size={28} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
                    0{index + 1} / Division
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                    {division.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {division.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-24">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                  Our Expertise
                </span>
                <h3 className="mt-3 text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">
                  Explore Our Service Catalogue
                </h3>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:gap-3"
              >
                Discuss a Project <ArrowRight size={17} />
              </a>
            </div>

            <div className="space-y-12">
              {serviceCategories.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <div key={category.title}>
                    <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-5 dark:border-white/10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#101714] text-orange-400 dark:bg-orange-500/10">
                        <Icon size={24} />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                          Category 0{categoryIndex + 1}
                        </span>
                        <h4 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                          {category.title}
                        </h4>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {category.services.map((service) => (
                        <article
                          key={service.title}
                          className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-orange-300 hover:shadow-lg dark:border-white/10 dark:bg-[#1b2822]"
                        >
                          <div className="mb-4 h-1 w-9 rounded-full bg-orange-500" />
                          <h5 className="font-bold text-slate-900 dark:text-white">
                            {service.title}
                          </h5>
                          <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                            {service.description}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#101714] px-5 py-12 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Award,
              title: "Engineering Standards",
              description: "Quality-focused engineering practices.",
            },
            {
              icon: Globe,
              title: "Regional Reach",
              description: "Serving projects across Nigeria and beyond.",
            },
            {
              icon: ShieldCheck,
              title: "Safety First",
              description: "Safety-conscious project execution.",
            },
            {
              icon: Leaf,
              title: "Sustainable Solutions",
              description: "Renewable energy and efficient infrastructure.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="rounded-xl bg-orange-500/10 p-3 text-orange-400">
                  <Icon size={25} />
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-white px-5 py-24 dark:bg-[#101714] sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              About Ntonarch Engineering
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-4xl">
              Trusted Multidisciplinary Engineering Excellence
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-500 dark:text-slate-400">
              Ntonarch Engineering is the technical arm of the Ntonarch Acumen
              Network — a multidisciplinary engineering consultancy delivering
              sustainable, code-conscious, and cost-effective solutions across
              civil, structural, electrical, and electronics disciplines.
            </p>

            <div className="mt-9 flex flex-wrap gap-2">
              {aboutTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    activeTab === tab.id
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : "bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-orange-600 dark:bg-white/5 dark:text-slate-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-8 min-h-[360px]">
              {activeTab === "who" && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Who We Are
                  </h3>
                  <p className="mt-4 leading-8 text-slate-500 dark:text-slate-400">
                    Our team combines practical field experience with modern
                    engineering design tools to support projects from
                    feasibility and planning through implementation and
                    maintenance.
                  </p>
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {[
                      [Lightbulb, "Innovation Driven", "Design thinking and value engineering focused on practical solutions."],
                      [HardHat, "Safety & Compliance", "Attention to safety, quality, and applicable engineering requirements."],
                      [Globe, "Local & Regional Reach", "Engineering support for projects in Nigeria, West Africa, and beyond."],
                      [CheckCircle2, "Client-Focused Delivery", "Solutions shaped around project requirements and client objectives."],
                    ].map(([Icon, title, description]) => (
                      <div
                        key={title}
                        className="flex gap-3 rounded-xl bg-slate-50 p-4 dark:bg-white/5"
                      >
                        <Icon className="mt-1 shrink-0 text-orange-500" size={22} />
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white">
                            {title}
                          </h4>
                          <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            {description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "what" && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    What We Do
                  </h3>
                  <p className="mt-3 leading-8 text-slate-500 dark:text-slate-400">
                    We provide engineering services across the full project
                    lifecycle.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      [Zap, "Power Systems & Distribution"],
                      [SunMedium, "Renewables & Energy Storage"],
                      [Building2, "Civil & Structural Design"],
                      [Cpu, "Automation & Smart Systems"],
                      [Wrench, "Installation & Commissioning"],
                      [Settings, "Maintenance & Upgrades"],
                    ].map(([Icon, title]) => (
                      <div
                        key={title}
                        className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 dark:border-white/10"
                      >
                        <Icon className="text-orange-500" size={21} />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          {title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "support" && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Professional & Support Services
                  </h3>
                  <p className="mt-3 leading-8 text-slate-500 dark:text-slate-400">
                    Specialist support helps projects meet their technical,
                    commercial, and operational objectives.
                  </p>
                  <ul className="mt-6 space-y-4">
                    {[
                      "System design and detailed engineering specifications",
                      "Project management, site supervision, and quality assurance",
                      "Installation, testing, commissioning, and client training",
                      "Warranty management and long-term support contracts",
                      "Workforce outsourcing and specialist personnel",
                      "Technical documentation, O&M manuals, and training packages",
                      "Vendor assessment and performance reviews",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-orange-500" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "budget" && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Engineering Budgeting & Procurement
                  </h3>
                  <p className="mt-3 leading-8 text-slate-500 dark:text-slate-400">
                    We support engineering budgeting, procurement, and
                    commercial planning to help clients manage project costs
                    and procurement requirements.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[
                      [Calculator, "Cost Estimation & BOQ"],
                      [FileText, "Procurement Strategy"],
                      [ClipboardCheck, "Tendering & Contract Support"],
                      [Truck, "Supply Chain & Logistics"],
                      [Search, "Value Engineering"],
                      [ShieldCheck, "Compliance & Assurance"],
                    ].map(([Icon, title]) => (
                      <div
                        key={title}
                        className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-white/5"
                      >
                        <Icon className="text-orange-500" size={22} />
                        <span className="text-sm font-semibold text-slate-800 dark:text-white">
                          {title}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                  >
                    Request a Procurement Proposal <ArrowRight size={17} />
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-2xl bg-orange-500/10" />
            <img
              src={asset("e10.jpg")}
              alt="Engineering project"
              className="relative z-10 h-[520px] w-full rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -right-4 -top-4 z-20 rounded-xl bg-orange-500 p-5 text-white shadow-xl sm:-right-6">
              <Building2 size={30} />
              <p className="mt-3 text-sm font-bold">Engineering</p>
              <p className="text-xs text-white/75">Solutions & Innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery process */}
      <section className="bg-[#f7f8f6] px-5 py-24 dark:bg-[#141e19] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Engineering Delivery Process"
            description="A structured approach from initial consultation to project handover and ongoing support."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-[#1b2822]"
              >
                <span className="text-4xl font-black text-orange-500/25">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        className="bg-white px-5 py-24 dark:bg-[#101714] sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Engineering Projects"
            description="A selection of engineering and infrastructure work represented in our project portfolio."
          />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-[#1b2822]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                    Project
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 dark:bg-orange-500/10 dark:text-orange-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#101714] px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Client Experiences"
            title="What Our Clients Say"
            description="Feedback shared by clients about their experience with Ntonarch Engineering."
            light
          />

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12">
            <Quote className="mb-7 text-orange-400" size={40} />

            <blockquote className="min-h-[150px] text-xl font-medium leading-9 text-white/90 sm:text-2xl">
              “{testimonials[testimonial].quote}”
            </blockquote>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-7">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[testimonial].image}
                  alt={testimonials[testimonial].name}
                  className="h-14 w-14 rounded-full border-2 border-orange-400 object-cover"
                />
                <div>
                  <h3 className="font-bold text-white">
                    {testimonials[testimonial].name}
                  </h3>
                  <p className="mt-1 max-w-md text-xs leading-5 text-white/50">
                    {testimonials[testimonial].location}
                  </p>
                </div>
              </div>

              {testimonials[testimonial].link && (
                <a
                  href={testimonials[testimonial].link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View testimonial source"
                  className="rounded-full border border-white/15 p-3 text-orange-400 transition hover:bg-orange-500 hover:text-white"
                >
                  <Facebook size={19} />
                </a>
              )}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() =>
                  setTestimonial(
                    (testimonial - 1 + testimonials.length) %
                      testimonials.length,
                  )
                }
                aria-label="Previous testimonial"
                className="rounded-full border border-white/20 p-3 transition hover:bg-orange-500"
              >
                <ChevronLeft size={19} />
              </button>
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    testimonial === index
                      ? "w-9 bg-orange-400"
                      : "w-2 bg-white/30"
                  }`}
                />
              ))}
              <button
                onClick={() =>
                  setTestimonial((testimonial + 1) % testimonials.length)
                }
                aria-label="Next testimonial"
                className="rounded-full border border-white/20 p-3 transition hover:bg-orange-500"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact and capabilities */}
      <section className="bg-[#f7f8f6] px-5 py-24 dark:bg-[#141e19] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Engineering With Purpose"
            description="Our work is guided by practical engineering principles, continuous improvement, and a commitment to delivering dependable solutions."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "Applying modern tools and practical design thinking to engineering challenges.",
              },
              {
                icon: ShieldCheck,
                title: "Quality & Safety",
                description:
                  "Prioritising quality control, safety procedures, and responsible execution.",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description:
                  "Supporting renewable energy and efficient infrastructure solutions.",
              },
              {
                icon: Handshake,
                title: "Client Partnership",
                description:
                  "Working closely with clients to understand needs and project objectives.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-7 shadow-sm dark:bg-[#1b2822]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-500/10">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Our Standards
              </span>
              <h3 className="mt-3 text-2xl font-extrabold text-slate-950 dark:text-white">
                Quality, Safety & Engineering Standards
              </h3>
              <p className="mt-4 leading-8 text-slate-500 dark:text-slate-400">
                Our engineering work is guided by applicable technical
                standards, regulatory requirements, and project-specific
                specifications. Relevant standards and professional
                certifications are confirmed for each project.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["COREN", "Nigerian engineering regulation"],
                ["ISO 9001", "Quality management framework"],
                ["IEC", "Electrotechnical standards"],
                ["FIDIC", "Engineering and construction contracts"],
              ].map(([name, description]) => (
                <div
                  key={name}
                  className="rounded-xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#1b2822]"
                >
                  <Award className="mb-4 text-orange-500" size={24} />
                  <h4 className="font-extrabold text-slate-900 dark:text-white">
                    {name}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="bg-white px-5 py-24 dark:bg-[#101714] sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Project Gallery"
            title="Our Work In Focus"
            description="Explore selected electrical, construction, connectivity, and renewable energy projects."
          />

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {["All", "Electrical", "Civil"].map((filter) => (
              <button
                key={filter}
                onClick={() => setGalleryFilter(filter)}
                className={`rounded-full px-6 py-3 text-sm font-bold transition ${
                  galleryFilter === filter
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "bg-slate-100 text-slate-600 hover:bg-orange-50 hover:text-orange-600 dark:bg-white/5 dark:text-slate-300"
                }`}
              >
                {filter === "All" ? "All Projects" : filter}
              </button>
            ))}
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filteredGallery.map((item) => {
              const originalIndex = galleryItems.indexOf(item);
              const activeImage = gallerySlides[originalIndex] || 0;

              return (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#1b2822]"
                >
                  <div className="relative h-[320px] overflow-hidden bg-slate-100">
                    <img
                      src={asset(item.images[activeImage])}
                      alt={item.title}
                      onClick={() =>
                        setSelectedImage({
                          src: asset(item.images[activeImage]),
                          title: item.title,
                        })
                      }
                      className="h-full w-full cursor-zoom-in object-cover transition duration-700 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase text-white">
                      {item.category}
                    </span>

                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      <button
                        onClick={() =>
                          changeGallerySlide(
                            originalIndex,
                            -1,
                            item.images.length,
                          )
                        }
                        aria-label="Previous gallery image"
                        className="rounded-full bg-black/60 p-2.5 text-white backdrop-blur hover:bg-orange-500"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <span className="rounded-full bg-black/60 px-3 py-2 text-xs font-bold text-white backdrop-blur">
                        {activeImage + 1} / {item.images.length}
                      </span>
                      <button
                        onClick={() =>
                          changeGallerySlide(
                            originalIndex,
                            1,
                            item.images.length,
                          )
                        }
                        aria-label="Next gallery image"
                        className="rounded-full bg-black/60 p-2.5 text-white backdrop-blur hover:bg-orange-500"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        setSelectedImage({
                          src: asset(item.images[activeImage]),
                          title: item.title,
                        })
                      }
                      aria-label="View full image"
                      className="absolute right-4 top-4 rounded-full bg-black/50 p-2.5 text-white backdrop-blur transition hover:bg-orange-500"
                    >
                      <Eye size={17} />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {item.description}
                    </p>
                    <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
                      <div className="flex items-start gap-2">
                        <Handshake size={15} className="shrink-0 text-orange-500" />
                        <span>{item.client}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin size={15} className="shrink-0 text-orange-500" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarDays size={15} className="text-orange-500" />
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full image viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-orange-500"
          >
            <X size={24} />
          </button>
          <div
            className="max-h-[90vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[80vh] max-w-full rounded-xl object-contain"
            />
            <p className="mt-4 text-center font-semibold text-white">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}

      {/* Team work mode */}
      <section
        id="team-work-toggle"
        className="bg-[#f7f8f6] px-5 py-24 dark:bg-[#141e19] sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Flexible Project Support"
            title="How Would You Like Us To Work?"
            description="Our team can support projects through on-site deployment, remote coordination, or a combination of both."
          />

          <div className="flex flex-wrap justify-center gap-3">
            {workModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`rounded-lg px-7 py-3 text-sm font-bold transition ${
                  activeMode === mode.id
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-orange-400 dark:border-white/10 dark:bg-[#1b2822] dark:text-slate-300"
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-[#1b2822] sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 dark:bg-orange-500/10">
              {activeMode === "on-site" ? (
                <HardHat size={30} />
              ) : activeMode === "remote" ? (
                <Network size={30} />
              ) : (
                <Layers size={30} />
              )}
            </div>
            <h3 className="mt-6 text-2xl font-extrabold text-slate-950 dark:text-white">
              {currentMode.title}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-500 dark:text-slate-400">
              {currentMode.description}
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Discuss Your Project <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#101714] px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="absolute -right-20 -top-40 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              Let's Build Something
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Have an Engineering Project in Mind?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/60">
              Talk to our team about your electrical, civil, structural, or
              renewable energy project. Let's discuss the right approach for
              your requirements.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-orange-500 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-orange-600"
          >
            Request a Consultation <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a100d] px-5 pb-8 pt-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <a href="#home" className="flex items-center gap-3">
                <img
                  src="/images/Ntonarch logo1.png"
                  alt="Ntonarch Engineering"
                  className="h-12 w-12 object-contain"
                />
                <span className="text-sm font-extrabold tracking-wide">
                  NTONARCH <span className="text-orange-400">ENGINEERING</span>
                </span>
              </a>
              <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
                Excellence in engineering solutions. Delivering electrical,
                civil, structural, and energy infrastructure services.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="rounded-full border border-white/10 p-3 text-white/60 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <Facebook size={17} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
                Services
              </h3>
              <ul className="space-y-4 text-sm text-white/50">
                {[
                  "Electrical Engineering",
                  "Civil Engineering",
                  "Structural Engineering",
                  "Renewable Energy",
                  "Engineering Consultation",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="transition hover:text-orange-400"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
                Company
              </h3>
              <ul className="space-y-4 text-sm text-white/50">
                {[
                  ["About Us", "#about"],
                  ["Projects", "#projects"],
                  ["Gallery", "#gallery"],
                  ["Conglomerate", "/"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="transition hover:text-orange-400"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
                Get In Touch
              </h3>
              <p className="text-sm leading-7 text-white/50">
                Have a project or need engineering assistance? Reach out to
                discuss your requirements.
              </p>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-400 transition hover:gap-3"
              >
                Contact Our Team <ArrowRight size={16} />
              </a>
              <div className="mt-5 flex items-center gap-2 text-xs text-white/40">
                <MessageCircle size={15} />
                Project enquiries welcome
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/40 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Ntonarch Acumen Network. All rights
              reserved.
            </p>
            <p>
              NTONARCH ENGINEERING · A Division of Ntonarch Acumen Network
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Engineering;
