
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Laptop,
  HardHat,
  RefreshCw,
  Handshake,
  Search,
  BriefcaseBusiness,
  Building2,
  Camera,
  ShoppingBasket,
  Sprout,
  Code2,
  CalendarDays,
  Recycle,
  HeartHandshake,
  ChartNoAxesCombined,
  ShieldCheck,
  Vote,
  PiggyBank,
  GraduationCap,
  Users,
  Lightbulb,
  Scale,
  Award,
  Check,
  Sun,
  Moon,
  Menu,
  X,
  Coins,
  TrendingUp,
  MapPin,
  CircleDollarSign,
} from "lucide-react";

const workModes = [
  {
    title: "Remote",
    count: "150+ positions",
    href: "career-remote.html",
    icon: Laptop,
    color: "orange",
    description:
      "Work from any country on earth with internet access. Fully digital roles across all nine divisions, open to global talent with no location requirement.",
    benefits: [
      "Open to any country in the world",
      "Flexible hours and schedule",
      "Digital-first team collaboration",
      "Media, Market, Computers, Events and more",
    ],
  },
  {
    title: "On-Ground",
    count: "120+ positions",
    href: "career-onground.html",
    icon: HardHat,
    color: "green",
    description:
      "Hands-on, on-site roles across NTONARCH's operational divisions. Entry level to senior, for those who make things happen in the real world.",
    benefits: [
      "On-site at our facilities",
      "All trades and skill levels",
      "Events, Waste, Farms, Engineering and more",
      "Entry level to senior roles",
    ],
  },
  {
    title: "Hybrid",
    count: "80+ positions",
    href: "career-hybrid.html",
    icon: RefreshCw,
    color: "purple",
    description:
      "Remote flexibility paired with scheduled in-person collaboration. Strategic, leadership, and consulting roles that blend the best of both modes.",
    benefits: [
      "Flexible on-site schedule",
      "Leadership and strategic roles",
      "Global team coordination",
      "Senior and consulting positions",
    ],
  },
];

const divisions = [
  {
    name: "NTONARCH Media",
    description: "Digital media and creative services",
    icon: Camera,
  },
  {
    name: "NTONARCH Market",
    description: "Buying, selling and e-commerce",
    icon: ShoppingBasket,
  },
  {
    name: "NTONARCH Farms",
    description: "Smart and sustainable agriculture",
    icon: Sprout,
  },
  {
    name: "NTONARCH Computers",
    description: "Information technology and software",
    icon: Code2,
  },
  {
    name: "NTONARCH Engineering",
    description: "Engineering and infrastructure",
    icon: HardHat,
  },
  {
    name: "NTONARCH Events",
    description: "Premium event management",
    icon: CalendarDays,
  },
  {
    name: "NTONARCH Properties",
    description: "Real estate and development",
    icon: Building2,
  },
  {
    name: "NTONARCH Waste",
    description: "Waste management solutions",
    icon: Recycle,
  },
  {
    name: "NTONARCH Foundation",
    description: "Social impact and community",
    icon: HeartHandshake,
  },
];

const cooperativeStats = [
  ["1,000+", "Active Members"],
  ["15%+", "Annual Returns"],
  ["₦2.5M+", "Distributed"],
  ["1:1", "One Member, One Vote"],
];

const cooperativeBenefits = [
  {
    title: "Profit Sharing",
    icon: ChartNoAxesCombined,
    description:
      "Receive annual profit distributions based on company performance. As NTONARCH grows globally, your share grows with it, regardless of where you live.",
  },
  {
    title: "Job Security",
    icon: ShieldCheck,
    description:
      "Employee-owned cooperatives have 4× lower layoff rates. Your voice matters in every decision that affects your career and your future.",
  },
  {
    title: "Democratic Voice",
    icon: Vote,
    description:
      "One member, one vote. Your vote shapes the company's direction.",
  },
  {
    title: "Real Wealth Building",
    icon: PiggyBank,
    description:
      "Your membership share grows in value as the company expands. Build genuine long-term wealth alongside your career, not just a salary.",
  },
  {
    title: "Skills & Development",
    icon: GraduationCap,
    description:
      "Access exclusive training and leadership programmes funded directly by cooperative returns, and invest in your own growth.",
  },
  {
    title: "Open Internationally",
    icon: Globe2,
    description:
      "Membership is open to individuals from every country. Africans, Europeans, Asians, and Americans are all welcome to join and co-own NTONARCH.",
  },
];

const investmentOptions = [
  {
    badge: "Individual Investors",
    badgeColor: "orange",
    title: "Personal Investment",
    icon: Coins,
    features: [
      "Open to anyone globally, not limited to high-net-worth individuals",
      "Equity or cooperative-backed investment units",
      "Regular dividend distributions",
      "Capital appreciation potential",
      "Access to investor briefings and financial reports",
      "Open to investors from all countries",
    ],
    stats: [
      ["1–2.5%", "Monthly"],
      ["7–12%", "6-Month"],
      ["15%+", "Annual"],
    ],
  },
  {
    badge: "Corporate & Institutional",
    badgeColor: "purple",
    title: "Corporate Investment",
    icon: Building2,
    features: [
      "Structured equity participation models",
      "Strategic partnerships and project-based funding",
      "Structured ROI agreements with quarterly reporting",
      "6-month performance review cycles",
      "Board-level or observer participation (stake-based)",
      "Priority access to expansion and infrastructure projects",
    ],
    stats: [
      ["Quarterly", "Reporting"],
      ["Priority", "Project Access"],
      ["15%+", "Annual Avg"],
    ],
  },
  {
    badge: "Why Invest In NTONARCH?",
    badgeColor: "green",
    title: "The Investment Case",
    icon: TrendingUp,
    features: [
      "Cooperative-backed, transparent ownership structure",
      "Diversified nine-division conglomerate portfolio",
      "Transparent governance and reporting framework",
      "Sustainable multi-sector growth strategy",
      "Performance-driven return model",
      "Open to international investors from all countries",
    ],
  },
];

const reasons = [
  {
    title: "Global Impact",
    icon: Globe2,
    description:
      "Work on projects that create lasting value across multiple industries and communities worldwide, with real, tangible, measurable impact.",
  },
  {
    title: "Rapid Career Growth",
    icon: TrendingUp,
    description:
      "Clear pathways for advancement and cross-division mobility within a fast-growing conglomerate, with no ceiling on where you can go.",
  },
  {
    title: "Co-Ownership",
    icon: Handshake,
    description:
      "You can co-own the company you work for. Share in governance and profits through a democratic cooperative, a rare opportunity available globally.",
  },
  {
    title: "Innovation Culture",
    icon: Lightbulb,
    description:
      "We embrace technology, creativity, and forward thinking, from AI-assisted waste management to smart agriculture, digital events, and IT.",
  },
  {
    title: "True Flexibility",
    icon: Scale,
    description:
      "Remote, on-ground, or hybrid. Choose what fits your lifestyle, situations, and conditions. Our flexibility is real policy, not just a recruitment talking point.",
  },
  {
    title: "Competitive Rewards",
    icon: Award,
    description:
      "Market-rate pay, performance bonuses, cooperative dividends, and long-term equity ownership. Your contribution is recognised and rewarded.",
  },
];

const tickerItems = [
  "Remote Positions Now Open",
  "On-Ground Roles — Africa & Beyond",
  "Hybrid Opportunities Available",
  "Join the Cooperative — Co-Own NTONARCH",
  "15%+ Annual Returns for Members",
  "Open to International Applicants",
  "Nine Divisions — Endless Career Paths",
];

const divisionNames = [
  "NTONARCH Media",
  "NTONARCH Market",
  "NTONARCH Farms",
  "NTONARCH Computers",
  "NTONARCH Engineering",
  "NTONARCH Events",
  "NTONARCH Properties",
  "NTONARCH Waste",
  "NTONARCH Foundation",
];

const colorStyles = {
  orange: {
    icon: "bg-orange-500/10 text-orange-500",
    line: "bg-orange-500",
    text: "text-orange-500",
    hover: "group-hover:border-orange-500/50",
    bullet: "text-orange-500",
  },
  green: {
    icon: "bg-emerald-500/10 text-emerald-500",
    line: "bg-emerald-500",
    text: "text-emerald-500",
    hover: "group-hover:border-emerald-500/50",
    bullet: "text-emerald-500",
  },
  purple: {
    icon: "bg-violet-500/10 text-violet-400",
    line: "bg-violet-500",
    text: "text-violet-400",
    hover: "group-hover:border-violet-500/50",
    bullet: "text-violet-400",
  },
};

function SectionHeading({ label, title, description, light = false }) {
  return (
    <div className="max-w-2xl">
      <div
        className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${
          light ? "text-white/65" : "text-orange-500"
        }`}
      >
        <span className="h-px w-7 bg-current" />
        {label}
      </div>

      <h2
        className={`text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.8rem] ${
          light ? "text-white" : "text-[var(--text)]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 max-w-xl text-sm leading-7 sm:text-base ${
            light ? "text-white/65" : "text-[var(--muted)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function Careers() {
  const [theme, setTheme] = useState("dark");

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <main
      data-theme={theme}
      className={`career-page ${
        isDark ? "career-dark" : "career-light"
      } overflow-hidden`}
      style={{
        "--orange": "#ff5c00",
        "--page-bg": isDark ? "#080808" : "#f7f5f0",
        "--surface": isDark ? "#111111" : "#ffffff",
        "--surface-2": isDark ? "#181818" : "#f0ede6",
        "--border": isDark ? "#272727" : "#e4dfd6",
        "--text": isDark ? "#edeae4" : "#18150f",
        "--muted": isDark ? "#929292" : "#777168",
        backgroundColor: "var(--page-bg)",
        color: "var(--text)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .career-page {
          min-height: 100vh;
          transition: background .3s ease, color .3s ease;
        }

        .career-page * {
          box-sizing: border-box;
        }

        .career-page .serif {
          font-family: 'Instrument Serif', serif;
        }

        .career-page .display-font {
          font-family: 'Syne', sans-serif;
        }

        .career-page ::selection {
          background: #ff5c00;
          color: white;
        }

        .career-page .ticker-track {
          animation: careerTicker 38s linear infinite;
          width: max-content;
        }

        .career-page .marquee-track {
          animation: careerMarquee 30s linear infinite;
          width: max-content;
        }

        .career-page .floating-card {
          animation: careerFloat 6s ease-in-out infinite;
        }

        .career-page .floating-card:nth-child(2) {
          animation-delay: 1.5s;
        }

        .career-page .floating-card:nth-child(3) {
          animation-delay: 3s;
        }

        .career-page .soft-glow {
          background: radial-gradient(
            ellipse at center,
            rgba(255, 92, 0, .14),
            transparent 70%
          );
        }

        @keyframes careerTicker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes careerMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes careerFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .career-page *,
          .career-page *::before,
          .career-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* Theme control */}
      <div className="mx-auto flex max-w-[1280px] justify-end px-5 pt-5 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          className="flex h-10 w-10 items-center justify-center rounded-xl border transition hover:border-orange-500 hover:text-orange-500"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
            color: "var(--muted)",
          }}
        >
          {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>

      {/* HERO */}
      <section className="relative mx-auto max-w-[1280px] mt-20 px-5 pb-16 pt-8 sm:px-8 sm:pb-20 lg:px-10 lg:pt-12">
        <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full soft-glow" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-8">
          <div>
            <div
              className="mb-7 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] font-bold uppercase tracking-[.13em] sm:text-xs"
              style={{
                borderColor: "rgba(255,92,0,.35)",
                background: "rgba(255,92,0,.07)",
                color: "var(--muted)",
              }}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              200+ Live Positions · 9 Divisions · Global
            </div>

            <h1 className="serif max-w-[750px] text-[3.6rem] leading-[.94] tracking-[-.045em] sm:text-6xl lg:text-[5.3rem]">
              Your career.
              <span className="block italic text-orange-500">
                Your company.
              </span>
              <span className="block">Worldwide.</span>
            </h1>

            <p
              className="mt-7 max-w-[590px] text-sm leading-7 sm:text-base sm:leading-8"
              style={{ color: "var(--muted)" }}
            >
              NTONARCH ACUMEN NETWORK is a fast-growing multi-sector
              conglomerate that hires globally and invites you to co-own the
              company you work for through our democratic Cooperative
              membership, open to international members everywhere.
              Individual and corporate investment is open. Social impact
              activities are open for your contribution.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#positions"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-orange-500"
              >
                <Search size={16} />
                Browse Positions
                <ArrowRight size={16} />
              </a>

              <a
                href="#cooperative"
                className="inline-flex items-center gap-2 rounded-lg border px-5 py-3.5 text-sm font-semibold transition hover:border-orange-500 hover:text-orange-500"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                <Handshake size={16} />
                Join Cooperative
              </a>

              <a
                href="career-investment.html"
                className="inline-flex items-center gap-2 rounded-lg border px-5 py-3.5 text-sm font-semibold transition hover:border-orange-500 hover:text-orange-500"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                <TrendingUp size={16} />
                Invest
              </a>
            </div>

            <div
              className="mt-12 grid grid-cols-2 overflow-hidden rounded-xl border sm:grid-cols-4"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              {[
                ["9", "Divisions"],
                ["200+", "Open Roles"],
                ["Global", "Reach"],
                ["15%+", "Co-op Return"],
              ].map(([number, label], index) => (
                <div
                  key={label}
                  className={`px-4 py-5 ${
                    index < 3 ? "sm:border-r" : ""
                  } ${index < 2 ? "border-b sm:border-b-0" : ""}`}
                  style={{ borderColor: "var(--border)" }}
                >
                  <span className="serif block text-3xl italic text-orange-500">
                    {number}
                  </span>
                  <span
                    className="mt-1 block text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: "var(--muted)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto hidden h-[440px] w-full max-w-[540px] lg:block">
            <div className="absolute inset-10 rounded-full border border-dashed opacity-40" style={{ borderColor: "var(--border)" }} />
            <div className="absolute inset-[76px] rounded-full border opacity-50" style={{ borderColor: "var(--border)" }} />
            <div className="absolute inset-[112px] rounded-full soft-glow" />

            <div className="absolute left-1/2 top-1/2 z-10 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border text-center shadow-2xl"
              style={{
                background: "var(--surface)",
                borderColor: "rgba(255,92,0,.5)",
                boxShadow: "0 0 70px rgba(255,92,0,.12)",
              }}
            >
              <span className="display-font text-2xl font-extrabold tracking-tight text-orange-500">
                NTONARCH
              </span>
              <span
                className="mt-1 text-[9px] font-bold uppercase tracking-[.2em]"
                style={{ color: "var(--muted)" }}
              >
                Acumen Network
              </span>
              <span className="mt-3 h-1 w-8 rounded-full bg-orange-500" />
            </div>

            <div className="floating-card absolute left-0 top-9 z-20 w-48 rounded-2xl border p-5 shadow-xl"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                <Laptop size={20} />
              </div>
              <h3 className="display-font text-sm font-bold">Remote</h3>
              <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                150+ open positions
              </p>
            </div>

            <div className="absolute right-0 top-4 z-20 rounded-xl bg-gradient-to-br from-orange-500 to-red-700 px-6 py-5 text-center text-white shadow-xl shadow-orange-950/30">
              <span className="block text-[9px] font-bold uppercase tracking-widest text-white/70">
                Co-op Return
              </span>
              <span className="serif mt-1 block text-4xl italic">15%+</span>
              <span className="mt-1 block text-[10px] text-white/75">
                Annual member returns
              </span>
            </div>

            <div className="floating-card absolute bottom-16 right-0 z-20 w-48 rounded-2xl border p-5 shadow-xl"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <HardHat size={20} />
              </div>
              <h3 className="display-font text-sm font-bold">On-Ground</h3>
              <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                120+ open positions
              </p>
            </div>

            <div className="floating-card absolute bottom-0 left-10 z-20 w-48 rounded-2xl border p-5 shadow-xl"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <RefreshCw size={20} />
              </div>
              <h3 className="display-font text-sm font-bold">Hybrid</h3>
              <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                80+ open positions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div
        className="overflow-hidden border-y py-4"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface)",
        }}
      >
        <div className="ticker-track flex">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-4 px-7 text-[10px] font-bold uppercase tracking-[.13em] sm:text-xs"
              style={{ color: "var(--muted)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* WORK ARRANGEMENTS */}
      <section id="positions" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            label="Work Arrangements"
            title="Three ways to work with us."
            description="Digital nomad, hands-on professional, or somewhere in between. There is a role shaped around your life at NTONARCH."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {workModes.map((mode) => {
              const Icon = mode.icon;
              const style = colorStyles[mode.color];

              return (
                <a
                  href={mode.href}
                  key={mode.title}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7 ${style.hover}`}
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className={`absolute inset-x-0 top-0 h-[3px] ${style.line}`} />

                  <div className="flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.icon}`}>
                      <Icon size={22} />
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-semibold"
                      style={{
                        background: "var(--surface-2)",
                        color: "var(--muted)",
                      }}
                    >
                      {mode.count}
                    </span>
                  </div>

                  <h3 className="display-font mt-6 text-xl font-bold">
                    {mode.title}
                  </h3>

                  <p
                    className="mt-3 text-sm leading-7"
                    style={{ color: "var(--muted)" }}
                  >
                    {mode.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {mode.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-xs leading-5"
                        style={{ color: "var(--muted)" }}
                      >
                        <Check
                          size={14}
                          className={`mt-0.5 shrink-0 ${style.text}`}
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="mt-7 flex items-center justify-between border-t pt-5"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span className={`text-sm font-bold ${style.text}`}>
                      Explore opportunities
                    </span>
                    <ArrowUpRight
                      size={18}
                      className={`transition group-hover:translate-x-1 group-hover:-translate-y-1 ${style.text}`}
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section
        className="border-y px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 grid items-end gap-7 lg:grid-cols-2">
            <SectionHeading
              label="The Portfolio"
              title="Nine industries. One conglomerate."
              description="From digital media to smart waste management, your career can evolve and transfer across NTONARCH's nine interconnected divisions. No career ceiling."
            />

            <div
              className="space-y-4 text-sm leading-7"
              style={{ color: "var(--muted)" }}
            >
              <p>
                NTONARCH ACUMEN NETWORK is a multi-sector conglomerate driven
                by innovation, strategic leadership, and sustainable impact.
                We are growing and expanding every day, built on core values
                of excellence and integrity, delivering forward-thinking
                solutions that address real-world challenges across diverse
                industries.
              </p>
              <p>
                Our strength lies in our diversity, collaborative mindset,
                and commitment to building interconnected ecosystems that
                foster growth, inclusivity, and transformation for people,
                businesses, and the planet.
              </p>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-3"
            style={{ borderColor: "var(--border)", gap: "1px", background: "var(--border)" }}
          >
            {divisions.map((division, index) => {
              const Icon = division.icon;

              return (
                <div
                  key={division.name}
                  className="group flex items-start gap-4 p-5 transition hover:bg-orange-500/[.04] sm:p-6"
                  style={{ background: "var(--surface)" }}
                >
                  <span
                    className="pt-1 font-mono text-[10px]"
                    style={{ color: "var(--muted)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3 className="display-font text-sm font-bold">
                      {division.name}
                    </h3>
                    <p
                      className="mt-1 text-xs leading-5"
                      style={{ color: "var(--muted)" }}
                    >
                      {division.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COOPERATIVE */}
      <section
        id="cooperative"
        className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-900 px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="pointer-events-none absolute -right-40 -top-48 h-[600px] w-[600px] rounded-full border-[80px] border-white/[.04]" />
        <div className="pointer-events-none absolute -bottom-64 -left-32 h-[500px] w-[500px] rounded-full bg-white/[.04] blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-white/65">
                <span className="h-px w-7 bg-white/60" />
                NTONARCH Cooperative
              </div>

              <h2 className="serif text-5xl leading-[.98] tracking-tight sm:text-6xl lg:text-[4.5rem]">
                Don't just work here.
                <span className="mt-2 block italic text-white/65">
                  Own it.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                The NTONARCH Cooperative is open to employees and external
                members worldwide across Africa and beyond. Whether you work
                with us or not, you can join as a member, participate in
                democratic governance, and share in the profits of a growing
                global conglomerate. This is not just a job. This is ownership.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="cooperative-registration.html"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3.5 text-sm font-bold text-orange-600 transition hover:-translate-y-1 hover:bg-orange-50"
                >
                  <Users size={17} />
                  Become a Member
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#investor"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/35 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <ChartNoAxesCombined size={17} />
                  Invest Externally
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/20 bg-white/20">
              {cooperativeStats.map(([number, label]) => (
                <div
                  key={label}
                  className="bg-white/[.08] p-6 backdrop-blur-sm sm:p-8"
                >
                  <span className="serif block text-3xl italic sm:text-4xl">
                    {number}
                  </span>
                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-wider text-white/60">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cooperativeBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-white/15 bg-white/[.07] p-6 transition hover:-translate-y-1 hover:bg-white/[.12]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                    <Icon size={20} />
                  </div>
                  <h3 className="display-font text-sm font-bold">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-white/65 sm:text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section id="investor" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            label="Investment Opportunities"
            title="You don't have to work here to grow here."
            description="External investors worldwide — individuals, corporates, and institutions — can participate in NTONARCH's growth through approved equity and cooperative-backed investment units, open internationally."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {investmentOptions.map((option) => {
              const style = colorStyles[option.badgeColor];
              const Icon = option.icon;

              return (
                <div
                  key={option.title}
                  className="flex flex-col rounded-2xl border p-6 sm:p-7"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`rounded-md px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider ${style.icon}`}
                    >
                      {option.badge}
                    </span>
                    <Icon size={20} className={style.text} />
                  </div>

                  <h3 className="display-font mt-5 text-xl font-bold">
                    {option.title}
                  </h3>

                  <ul className="mt-6 flex-1 space-y-3">
                    {option.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs leading-5 sm:text-[13px]"
                        style={{ color: "var(--muted)" }}
                      >
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-orange-500"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {option.stats && (
                    <div
                      className="mt-7 grid grid-cols-3 gap-2 border-t pt-5"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {option.stats.map(([number, label]) => (
                        <div key={label} className="text-center">
                          <span className="serif block text-lg italic text-orange-500 sm:text-xl">
                            {number}
                          </span>
                          <span
                            className="mt-1 block text-[9px] font-bold uppercase tracking-wide"
                            style={{ color: "var(--muted)" }}
                          >
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {option.title === "The Investment Case" && (
                    <a
                      href="career-investment.html"
                      className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3 text-xs font-bold text-white transition hover:bg-orange-500"
                    >
                      <Users size={15} />
                      Register & Invest Now
                      <ArrowRight size={15} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section
        className="border-y px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            label="Why Join NTONARCH?"
            title="Six reasons the best talent chooses us."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group rounded-xl border p-6 transition hover:-translate-y-1 hover:border-orange-500/50"
                  style={{
                    background: "var(--page-bg)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <span
                      className="font-mono text-xs"
                      style={{ color: "var(--muted)" }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="display-font mt-5 text-sm font-bold">
                    {reason.title}
                  </h3>

                  <p
                    className="mt-3 text-xs leading-6 sm:text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS LINK */}
      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 rounded-2xl border p-7 sm:flex-row sm:items-center sm:p-10"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <div>
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[.2em] text-orange-500">
              Testimonials
            </div>
            <h2 className="serif text-3xl sm:text-4xl">
              Hear from members across NTONARCH.
            </h2>
            <p
              className="mt-3 max-w-xl text-sm leading-6"
              style={{ color: "var(--muted)" }}
            >
              Discover experiences and stories from people connected to our
              growing network.
            </p>
          </div>

          <a
            href="testimonials.html"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border px-5 py-3 text-sm font-bold transition hover:border-orange-500 hover:text-orange-500"
            style={{
              borderColor: "var(--border)",
              color: "var(--text)",
            }}
          >
            View Testimonials
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* DIVISION MARQUEE */}
      <section
        className="overflow-hidden border-y py-8"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface)",
        }}
      >
        <p
          className="mb-6 text-center text-[10px] font-bold uppercase tracking-[.2em]"
          style={{ color: "var(--muted)" }}
        >
          Actively hiring across all nine divisions
        </p>

        <div className="overflow-hidden">
          <div className="marquee-track flex">
            {[...divisionNames, ...divisionNames].map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="mx-2 inline-flex shrink-0 items-center gap-3 rounded-full border px-5 py-2.5 text-xs font-bold"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--page-bg)",
                  color: "var(--muted)",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-2xl border p-8 text-center sm:p-12 lg:p-16"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[90px]" />

          <div className="relative">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
              <BriefcaseBusiness size={23} />
            </div>

            <h2 className="serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Your next chapter
              <span className="block italic text-orange-500">
                starts here.
              </span>
            </h2>

            <p
              className="mx-auto mt-5 max-w-xl text-sm leading-7 sm:text-base"
              style={{ color: "var(--muted)" }}
            >
              350+ open positions across nine industries. Remote, on-ground,
              and hybrid opportunities. A cooperative ownership model open to
              international members and investors. The opportunity won't wait.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="career-remote.html"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-orange-500"
              >
                <Laptop size={17} />
                Remote Positions
                <ArrowRight size={16} />
              </a>

              <a
                href="career-onground.html"
                className="inline-flex items-center gap-2 rounded-lg border px-5 py-3.5 text-sm font-semibold transition hover:border-orange-500 hover:text-orange-500"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                <HardHat size={17} />
                On-Ground
              </a>

              <a
                href="career-hybrid.html"
                className="inline-flex items-center gap-2 rounded-lg border px-5 py-3.5 text-sm font-semibold transition hover:border-orange-500 hover:text-orange-500"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              >
                <RefreshCw size={17} />
                Hybrid
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Careers;
