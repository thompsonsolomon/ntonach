import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Rocket,
  Handshake,
  Lightbulb,
  Globe2,
  Users,
  PlayCircle,
  ChartNoAxesColumnIncreasing,
  Sprout,
  Laptop,
  Cog,
  Building2,
  Heart,
  Factory,
  ChevronLeft,
  ChevronRight,
  Mail,
  Info,
  Recycle,
  CalendarDays,
  Microchip,
  RadioTower,
  FlaskConical,
  Truck,
  Phone,
  MapPin,
  ExternalLink,
  Sun,
  Moon,
  Monitor,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
} from "lucide-react";

/* BUSINESS DIVISIONS */

const divisions = [
  {
    title: "Media",
    description:
      "Creative content production, digital marketing, and multimedia solutions that engage and inspire audiences worldwide.",
    image: "/assets/media.jpg",
    icon: PlayCircle,
    href: "media.html",
  },
  {
    title: "Market",
    description:
      "Strategic market analysis, trading solutions, and financial services that drive economic growth and market efficiency.",
    image: "/assets/market.jpg",
    icon: ChartNoAxesColumnIncreasing,
    href: "market.html",
  },
  {
    title: "Farms",
    description:
      "Modern agricultural practices, sustainable farming solutions, and food security initiatives that nourish communities globally.",
    image: "/assets/farm.jpg",
    icon: Sprout,
    href: "services/farms/international-farms.html",
  },
  {
    title: "Computer",
    description:
      "Advanced IT solutions, software development, and digital transformation services that power modern businesses.",
    image: "/assets/computer.jpg",
    icon: Laptop,
    href: "computer.html",
  },
  {
    title: "Engineering",
    description:
      "Cutting-edge engineering solutions, infrastructure development, and technical innovation that build tomorrow's world.",
    image: "/assets/engineering.jpg",
    icon: Cog,
    href: "engineering.html",
  },
  {
    title: "Properties",
    description:
      "Premium real estate development, property management, and investment solutions that create lasting value and communities.",
    image: "/assets/real-estate.jpg",
    icon: Building2,
    href: "properties.html",
  },
  {
    title: "WASTE",
    description:
      "Premium waste management and recycling solutions, from waste to resource, that create lasting value and environmental impact.",
    image: "/images/ww29.png",
    icon: Recycle,
    href: "wastes.html",
  },
  {
    title: "Events",
    description:
      "Premium event management and planning, design, and execution that create lasting value impacting communities.",
    image: "/images/ev3.jpg",
    icon: CalendarDays,
    href: "events.html",
  },
  {
    title: "Foundation",
    description:
      "Social impact initiatives, community development programs, and philanthropic efforts that create positive change worldwide.",
    image: "/assets/foundation.jpg",
    icon: Heart,
    href: "foundation.html",
  },
];

/* COMPANY OVERVIEW */

const overview = [
  {
    title: "Innovation Excellence",
    description:
      "Leveraging Information Technology, IoT, and modern design principles to create intelligent, interconnected systems that enhance efficiency and scalability.",
    icon: Lightbulb,
  },
  {
    title: "Sustainable Development",
    description:
      "Committed to global sustainability frameworks including UN SDGs and Africa Agenda 2063, driving economic transformation and lasting value creation.",
    icon: Globe2,
  },
  {
    title: "Strategic Partnerships",
    description:
      "Fostering purposeful collaboration through advanced technological integration and stakeholder dedication to achieve shared visions of progress.",
    icon: Users,
  },
];

/* PARTNERSHIP CATEGORIES */

const partnersData = [
  {
    name: "Tech Innovation Partners",
    logo: "",
    icon: Microchip,
    category: "Technology Partnership",
    description:
      "Collaborating on cutting-edge technology solutions, IoT integration, and digital transformation initiatives across multiple sectors.",
    website: "#",
  },
  {
    name: "Global Agriculture Alliance",
    logo: "",
    icon: Sprout,
    category: "Agricultural Partnership",
    description:
      "Strategic partnership focused on sustainable farming practices, agricultural technology, and food security initiatives across continents.",
    website: "#",
  },
  {
    name: "Media & Content Network",
    logo: "",
    icon: RadioTower,
    category: "Media Partnership",
    description:
      "Joint ventures in content production, digital marketing, and multimedia solutions for global audiences.",
    website: "#",
  },
  {
    name: "Engineering Solutions Group",
    logo: "",
    icon: Cog,
    category: "Engineering Partnership",
    description:
      "Collaborative engineering projects, infrastructure development, and technical innovation for sustainable development.",
    website: "#",
  },
  {
    name: "Real Estate Investment Consortium",
    logo: "",
    icon: Building2,
    category: "Real Estate Partnership",
    description:
      "Strategic alliances in property development, real estate investment, and urban planning projects worldwide.",
    website: "#",
  },
  {
    name: "Financial Services Network",
    logo: "",
    icon: ChartNoAxesColumnIncreasing,
    category: "Financial Partnership",
    description:
      "Partnerships in market analysis, trading solutions, and financial services driving economic growth.",
    website: "#",
  },
  {
    name: "Social Impact Foundation",
    logo: "",
    icon: Heart,
    category: "Foundation Partnership",
    description:
      "Collaborative social impact initiatives, community development programs, and philanthropic efforts creating positive change.",
    website: "#",
  },
  {
    name: "Research & Development Labs",
    logo: "",
    icon: FlaskConical,
    category: "Research Partnership",
    description:
      "Joint research initiatives, innovation labs, and knowledge sharing programs advancing technology and sustainability.",
    website: "#",
  },
];

/* ONGOING PARTNERSHIPS */

const ongoingPartnershipsData = [
  {
    name: "GOCITY GROUP",
    logo: "/assets/GOCITY logo 1.png",
    icon: Microchip,
    type: "Technology & Research & Development Partner",
    typeIcon: Laptop,
    contact: {
      email: "contact@gocitygroup.org",
      phone: "+39 351 293 5108",
      website: "https://gocitygroup.org",
      address: "Via Aleradi Alerado 56, Venezia (ve), Italy",
    },
  },
  {
    name: "ECO FERME AGRIC & LOGISTICS COMPANY",
    logo: "/images/ECO FERME.png",
    icon: Sprout,
    type: "Agricultural Partner",
    typeIcon: Sprout,
    contact: {
      email: "ecoferme@gmail.com",
      phone: "+234 90 68 068 024",
      website: "https://www.instagram.com/ecofermeagric/reels/",
      address: "New Ananikog Extension, Uyo, Akwa Ibom State, Nigeria.",
    },
  },
  {
    name: "DHL Logistics",
    logo: "/images/DHL_Logistics.svg.png",
    icon: Truck,
    type: "Logistics Partner",
    typeIcon: Truck,
    contact: {
      email: "ng.expressmanagement@dhl.com",
      phone: "0700 225 5345",
      website: "https://www.dhl.com/ng-en/home.html",
      address: "",
    },
  },
  {
    name: "Luminescene Nigeria Limited",
    logo: "/images/Luminescene Nigeria .jpeg",
    icon: Cog,
    type: "Elecrical Elecronics Partnership",
    typeIcon: Cog,
    contact: {
      email: "",
      phone: "+2349134144252",
      website: "https://luminescene.com.ng",
      address: "1 Calarbar Street, off Nepaline, off Aback Road, Uyo, Nigeria",
    },
  },
  {
    name: "CropCura",
    logo: "/images/cropcura.png",
    icon: Sprout,
    type: "Agricultural Partnership",
    typeIcon: Sprout,
    contact: {
      email: "",
      phone: "+2342013306117",
      website: "https://cropcura.com/",
      address: "Citiview Estate, Abeokuta, Ogun State, Nigeria",
    },
  },
  {
    name: "Acadeva",
    logo: "/images/Acadeva.ico",
    icon: Cog,
    type: "Academic Partnership",
    typeIcon: Users,
    contact: {
      email: "",
      phone: "+234 811 786 9512",
      website: "https://acadeva.xyz/",
      address: "",
    },
  },
  {
    name: "NYAN",
    logo: "/images/nyan logo.png",
    icon: Users,
    type: "Youth Partnership",
    typeIcon: Users,
    contact: {
      email: "",
      phone: "+234 810 480 9910",
      website: "https://www.nyan.org.ng/",
      address: "",
    },
  },
  {
    name: "NYAN",
    logo: "/images/pstcsl logo1.png",
    icon: Building2,
    type: "Oganization Partnership",
    typeIcon: Building2,
    contact: {
      email: "pstcsl@pstcls.com",
      phone: "+234 803 666 0387",
      website: "https://www.pstcls.com/",
      address: "",
    },
  },
  {
    name: "AFRIGENT CLOTHING",
    logo: "/images/afri.png",
    icon: Heart,
    type: "Fashion Partnership",
    typeIcon: Heart,
    contact: {
      email: "",
      phone: "+234 9068068024",
      website:
        "https://www.instagram.com/p/DUkwBp0DDhj/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      address: "",
    },
  },
];

/* STATISTICS */

const statItems = [
  { target: 7, label: "Business Divisions", icon: Factory },
  { target: 15, label: "Countries Served", icon: Globe2 },
  { target: 500, label: "Team Members", icon: Users },
  { target: 100, label: "Strategic Partners", icon: Handshake },
];

/* REUSABLE SECTION HEADING */

function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-slate-950"
          }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg ${light ? "text-white/65" : "text-slate-600"
            }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ANIMATED STATISTICS */

function StatCard({ target, label, icon: Icon, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame;
    const duration = 1500;
    const start = performance.now();

    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);

      setCount(Math.ceil(target * progress));

      if (progress < 1) {
        frame = requestAnimationFrame(update);
      }
    };

    frame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center sm:p-8">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff6b00]/15 text-[#ff8a3d]">
        <Icon size={23} />
      </div>

      <div className="mt-5 text-3xl font-extrabold sm:text-4xl">
        {active ? `${count}+` : "0"}
      </div>

      <div className="mt-2 text-sm text-white/60">{label}</div>
    </div>
  );
}

/* PARTNER CATEGORY CARD */

function PartnerCard({ partner }) {
  const Icon = partner.icon || Handshake;

  return (
    <a
      href={partner.website || "#"}
      target={partner.website && partner.website !== "#" ? "_blank" : undefined}
      rel={
        partner.website && partner.website !== "#" ? "noreferrer" : undefined
      }
      title={`${partner.name} — ${partner.category}: ${partner.description}`}
      className="group flex w-64 shrink-0 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-7 text-center transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#ff6b00] transition group-hover:bg-[#ff6b00] group-hover:text-white">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={partner.name}
            className="h-10 w-10 object-contain"
          />
        ) : (
          <Icon size={27} />
        )}
      </div>

      <span className="mt-4 font-bold text-slate-900">{partner.name}</span>

      <span className="mt-1 text-xs font-medium text-[#e85f00]">
        {partner.category}
      </span>

      <span className="mt-3 text-xs leading-5 text-slate-500">
        {partner.description}
      </span>
    </a>
  );
}

/* PARTNERSHIP CONTACT ROW */

function ContactRow({ icon: Icon, children, href, external = false }) {
  const content = (
    <>
      {Icon && (
        <Icon size={16} className="mt-0.5 shrink-0 text-[#ff6b00]" />
      )}
      {children}
    </>
  );

  if (!href) {
    return (
      <div className="flex items-start gap-3 text-sm text-slate-600">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-start gap-3 break-all text-sm text-slate-600 transition hover:text-[#e85f00]"
    >
      {content}
    </a>
  );
}

/* ONGOING PARTNERSHIP CARD */

function PartnershipCard({ partnership }) {
  const [expanded, setExpanded] = useState(false);

  const LogoIcon = partnership.icon || Handshake;
  const TypeIcon = partnership.typeIcon || Handshake;

  const { email, phone, website, address } = partnership.contact || {};

  const hasContact = [email, phone, website, address].some((item) =>
    item?.trim()
  );

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-24 items-center justify-center rounded-xl bg-slate-50 p-4">
        {partnership.logo ? (
          <img
            src={partnership.logo}
            alt={`${partnership.name} logo`}
            loading="lazy"
            className="max-h-16 max-w-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <LogoIcon size={34} className="text-[#ff6b00]" />
        )}
      </div>

      <h3 className="mt-5 text-lg font-bold leading-snug text-slate-950">
        {partnership.name}
      </h3>

      <div className="mt-3 flex items-start gap-2 text-sm font-medium text-[#e85f00]">
        <TypeIcon size={17} className="mt-0.5 shrink-0" />
        <span>{partnership.type}</span>
      </div>

      <div className="mt-5 border-t border-slate-100 pt-4">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="flex w-full items-center justify-between gap-3 text-left text-sm font-semibold text-slate-700 transition hover:text-[#e85f00]"
        >
          {expanded
            ? "Hide Contact Information"
            : "Show Contact Information"}

          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {expanded && (
          <div className="mt-4 space-y-3">
            {email?.trim() && (
              <ContactRow icon={Mail} href={`mailto:${email}`}>
                {email}
              </ContactRow>
            )}

            {phone?.trim() && (
              <ContactRow
                icon={Phone}
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              >
                {phone.trim()}
              </ContactRow>
            )}

            {website?.trim() && (
              <ContactRow
                icon={ExternalLink}
                href={
                  /^https?:\/\//i.test(website)
                    ? website
                    : `https://${website}`
                }
                external
              >
                Visit Website
              </ContactRow>
            )}

            {address?.trim() && (
              <ContactRow icon={MapPin}>{address}</ContactRow>
            )}

            {!hasContact && (
              <p className="text-sm text-slate-500">
                Contact information is not currently available.
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

/* THEME TOGGLE
   Add <ThemeToggle /> to your Navbar if needed.
*/

export function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = (selectedTheme) => {
      const resolved =
        selectedTheme === "system"
          ? media.matches
            ? "dark"
            : "light"
          : selectedTheme;

      root.setAttribute("data-theme", resolved);

      root.classList.remove(
        "light-theme",
        "dark-theme",
        "system-theme"
      );

      root.classList.add(`${selectedTheme}-theme`);
    };

    apply(theme);

    localStorage.setItem("theme", theme);

    const onSystemChange = () => {
      if (theme === "system") {
        apply("system");
      }
    };

    media.addEventListener?.("change", onSystemChange);

    return () => {
      media.removeEventListener?.("change", onSystemChange);
    };
  }, [theme]);

  const cycleTheme = () => {
    setTheme((current) =>
      current === "light"
        ? "dark"
        : current === "dark"
          ? "system"
          : "light"
    );
  };

  const Icon =
    theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Current theme: ${theme}. Click to change theme.`}
      title={`Theme: ${theme}`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-[#ff6b00] hover:text-[#ff6b00]"
    >
      <Icon size={19} />
    </button>
  );
}

/* MAIN HOME PAGE COMPONENT */

export default function NtonarchHomeSections() {
  const partnersViewportRef = useRef(null);
  const statsSectionRef = useRef(null);

  const [statsActive, setStatsActive] = useState(false);
  const [partnersPaused, setPartnersPaused] = useState(false);

  const duplicatedPartners = useMemo(
    () => [...partnersData, ...partnersData],
    []
  );

  const heroImages = [
    "/assets/computer.jpg",
    "/assets/engineering.jpg",
    "/assets/foundation.jpg",
    "/assets/market.jpg",
    "/assets/media.jpg",
    "/assets/real-estate.jpg",
  ];

  /* START STAT COUNTERS WHEN VISIBLE */

  useEffect(() => {
    const element = statsSectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  /* AUTOMATIC PARTNER CAROUSEL */

  useEffect(() => {
    const viewport = partnersViewportRef.current;

    if (!viewport || partnersPaused) return;

    let frameId;

    const speed = 0.45;

    const animate = () => {
      viewport.scrollLeft += speed;

      const loopPoint = viewport.scrollWidth / 2;

      if (loopPoint > 0 && viewport.scrollLeft >= loopPoint) {
        viewport.scrollLeft -= loopPoint;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [partnersPaused]);

  /* MANUAL CAROUSEL CONTROLS */

  const movePartners = (direction) => {
    const viewport = partnersViewportRef.current;

    if (!viewport) return;

    setPartnersPaused(true);

    viewport.scrollBy({
      left: direction * 400,
      behavior: "smooth",
    });

    window.setTimeout(() => {
      setPartnersPaused(false);
    }, 1800);
  };


  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-hidden bg-white text-slate-900">




      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#101714]">

        {/* SLIDING BACKGROUND */}

        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${activeSlide === index
                  ? "translate-x-0 scale-100 opacity-100"
                  : index < activeSlide
                    ? "-translate-x-full scale-105 opacity-0"
                    : "translate-x-full scale-105 opacity-0"
                }`}
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#101714]/95 via-[#101714]/75 to-[#101714]/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#101714]/70 via-transparent to-[#101714]/20" />

        {/* CONTENT */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-4xl">

            <div className="m-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff6b00]" />
              Ntonarch Acumen Network
            </div>

            <h1 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building progress through{" "}
              <span className="text-[#ff6b00]">innovation</span> and
              enterprise.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75">
              Welcome to Ntonarch conglomerate, a dynamic ecosystem of
              innovation, excellence, and strategic partnerships driving
              sustainable growth across diverse industries. We harness
              cutting-edge technology, sustainable practices, and
              collaborative excellence to create lasting value and
              transformative impact.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="about.html"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-1 hover:bg-orange-600"
              >
                <Rocket size={18} />
                Explore Our Vision
              </a>

              <a
                href="contact.html"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
              >
                Partner With Us
                <Handshake size={18} />
              </a>
            </div>
          </div>

          {/* HERO STATISTICS */}

          <div className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/20 pt-7">
            {[
              ["9+", "Business Divisions"],
              ["Global", "Presence"],
              ["Innovation", "Driven"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-xl font-bold text-white sm:text-2xl">
                  {value}
                </div>

                <div className="mt-1 text-xs text-white/60 sm:text-sm">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* SLIDE INDICATORS */}

          <div className="mt-10 flex items-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${activeSlide === index
                    ? "w-10 bg-[#ff6b00]"
                    : "w-5 bg-white/40 hover:bg-white"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* COMPANY OVERVIEW */}

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Building Tomorrow's Ecosystem Today & The Future, With Modern Architecture."
            subtitle="Our conglomerate represents a strategic convergence of diverse expertise, cutting-edge technology, and sustainable practices that drive meaningful progress across multiple sectors."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {overview.map(
              ({ title, description, icon: Icon }, index) => (
                <article
                  key={title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#ff6b00] transition group-hover:bg-[#ff6b00] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <div className="mb-3 text-xs font-bold tracking-widest text-orange-500">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* BUSINESS PORTFOLIO */}

      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Our Business Portfolio"
            subtitle="Nine distinct divisions working synergistically to deliver comprehensive solutions and drive innovation across multiple industries."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map(
              ({ title, description, image, icon: Icon, href }, index) => (
                <article
                  key={title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <a href={href} className="block">
                    <div className="relative h-56 overflow-hidden bg-slate-200">
                      <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                      <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6b00] text-white">
                        <Icon size={21} />
                      </div>

                      <span className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white">
                        Division 0{index + 1}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-950">
                        {title}
                      </h3>

                      <p className="mt-3 min-h-[84px] leading-7 text-slate-600">
                        {description}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 font-semibold text-[#e85f00]">
                        Learn More
                        <ArrowRight
                          size={17}
                          className="transition group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </a>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* STATISTICS */}

      <section
        ref={statsSectionRef}
        className="bg-[#101714] px-5 py-20 text-white sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Our Impact in Numbers"
            subtitle="Measurable results that demonstrate our commitment to excellence and sustainable growth across all our business divisions."
            light
          />

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {statItems.map((item) => (
              <StatCard
                key={item.label}
                {...item}
                active={statsActive}
              />
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PARTNERSHIP CATEGORIES */}

      <section className="overflow-hidden px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Our Global Partnerships Categories"
            subtitle="Trusted collaborations driving innovation and excellence worldwide."
          />

          <div className="relative">
            <div
              ref={partnersViewportRef}
              className="overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onMouseEnter={() => setPartnersPaused(true)}
              onMouseLeave={() => setPartnersPaused(false)}
              onFocus={() => setPartnersPaused(true)}
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(event.relatedTarget)
                ) {
                  setPartnersPaused(false);
                }
              }}
            >
              <div className="flex w-max gap-5">
                {duplicatedPartners.map((partner, index) => (
                  <PartnerCard
                    key={`${partner.name}-${index}`}
                    partner={partner}
                  />
                ))}
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => movePartners(-1)}
                aria-label="Scroll partners left"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition hover:border-[#ff6b00] hover:bg-[#ff6b00] hover:text-white"
              >
                <ChevronLeft size={19} />
              </button>

              <button
                type="button"
                onClick={() => movePartners(1)}
                aria-label="Scroll partners right"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition hover:border-[#ff6b00] hover:bg-[#ff6b00] hover:text-white"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ONGOING PARTNERSHIPS */}

      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Ongoing Partnerships"
            subtitle="Active collaborations with leading organizations driving innovation and sustainable growth across industries."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ongoingPartnershipsData.map((partnership, index) => (
              <PartnershipCard
                key={`${partnership.name}-${index}`}
                partnership={partnership}
              />
            ))}
          </div>
        </div>
      </section>

        {/* TOP CTA */}

      <div className="border-b border-white/10 bg-[#101714] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center lg:px-12">

          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
              <span className="h-2 w-2 rounded-full bg-[#ff6b00]" />
              Let's Build Something Great
            </span>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Together, we can create a{" "}
              <span className="text-[#ff6b00]">better future.</span>
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-white/55">
              Have a project, business idea, or partnership opportunity?
              Let's connect and explore what's possible.
            </p>
          </div>

          <a
            href="contact.html"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#ff6b00] px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            Start a Conversation
            <ArrowUpRight
              size={19}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </div>
      </div>

    </main>
  )
}