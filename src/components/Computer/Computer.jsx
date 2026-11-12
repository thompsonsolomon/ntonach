
import { useState } from "react";
import {
 ArrowRight,
 ArrowUpRight,
 ArrowDown,
 Menu,
 X,
 Sun,
 Moon,
 ChevronDown,
 Globe,
 Code2,
 Cpu,
 Lightbulb,
 Database,
 ShieldCheck,
 Palette,
 BriefcaseBusiness,
 Wifi,
 Smartphone,
 BarChart3,
 HeartPulse,
 GraduationCap,
 ShoppingBag,
 Landmark,
 Zap,
 Building2,
 Users,
 Target,
 Eye,
 Layers3,
 Settings,
 MessageCircle,
 Mail,
 MapPin,
 Facebook,
 Instagram,
 Linkedin,
 Youtube,
 CheckCircle2,
 Network,
 Monitor,
 Sparkles,
} from "lucide-react";

const COLORS = {
 orange: "#ff6b00",
 orangeHover: "#e05a00",
 background: "#0e0e10",
 secondary: "#161618",
 card: "#1c1c20",
 border: "#2a2a2e",
 text: "#e8e8ec",
 muted: "#888890",
};

const heroImages = [
 "/images/IoTIT1.png",
 "/images/IoTIT2.jpg",
 "/images/IoTIT3.webp",
 "/images/IoTIT4.jpg",
 "/images/IoTIT5.jpg",
];

const navigation = [
  { label: "Home", href: "/" }, 
 { label: "About", href: "#about" },
 { label: "Services", href: "#services" },
 { label: "Industries", href: "#industries" },
 { label: "Case Studies", href: "#case-studies" },
 { label: "Career", href: "/career" },
];

const overview = [
 {
  icon: Code2,
  title: "Software Development",
  description:
   "Building modern software and digital platforms that solve business challenges and create opportunities.",
 },
 {
  icon: Cpu,
  title: "IoT & Embedded Systems",
  description:
   "Connecting devices, systems, and environments through intelligent and integrated technology.",
 },
 {
  icon: Lightbulb,
  title: "Technology Consulting",
  description:
   "Helping organizations make smarter technology decisions and navigate digital transformation.",
 },
];

const capabilities = [
 {
  icon: Database,
  title: "Data Analytics & AI",
  description:
   "Transforming information into meaningful insights through analytics, intelligent systems, and data-driven solutions.",
 },
 {
  icon: Code2,
  title: "Software & Web Development",
  description:
   "Developing custom websites, applications, and software platforms built around business needs.",
 },
 {
  icon: ShieldCheck,
  title: "Cybersecurity",
  description:
   "Helping organizations protect their digital assets through security planning and risk management.",
 },
 {
  icon: Palette,
  title: "UX/UI Design",
  description:
   "Designing intuitive and engaging digital experiences through research, prototyping, and testing.",
 },
 {
  icon: BriefcaseBusiness,
  title: "Project Management",
  description:
   "Coordinating technology projects through structured planning, execution, and delivery.",
 },
];

const services = [
 {
  number: "01",
  icon: Wifi,
  title: "Internet Services & IT Support",
  description:
   "Connectivity and technical support that help organizations maintain reliable technology operations.",
  items: [
   "High-speed internet access",
   "IT documentation and support",
   "Network setup and management",
  ],
 },
 {
  number: "02",
  icon: Code2,
  title: "Software Development & Engineering",
  description:
   "Custom software solutions designed to improve business processes and support growth.",
  items: [
   "Custom web and mobile applications",
   "Enterprise software development",
   "Software maintenance and upgrades",
   "Cloud-based and SaaS solutions",
  ],
 },
 {
  number: "03",
  icon: Smartphone,
  title: "Web & Mobile Development",
  description:
   "Modern digital experiences that help businesses connect with their customers.",
  items: [
   "Corporate websites and landing pages",
   "E-commerce platforms",
   "Android and iOS applications",
   "Cross-platform development",
  ],
 },
 {
  number: "04",
  icon: Palette,
  title: "Creative & Multimedia",
  description:
   "Creative digital communication that helps businesses express their identity.",
  items: [
   "Graphic design and branding",
   "Video editing and production",
   "Motion graphics and animation",
  ],
 },
 {
  number: "05",
  icon: BarChart3,
  title: "Data & Analytics",
  description:
   "Turning business information into useful insights for better decision-making.",
  items: [
   "Data science and analysis",
   "Business intelligence",
   "Predictive modelling",
   "Reporting and dashboards",
  ],
 },
 {
  number: "06",
  icon: ShieldCheck,
  title: "Cybersecurity",
  description:
   "Security solutions that help protect systems, infrastructure, and digital information.",
  items: [
   "Cybersecurity assessments",
   "Risk and compliance support",
   "Security monitoring",
   "Threat prevention",
  ],
 },
 {
  number: "07",
  icon: Layers3,
  title: "UI/UX & Product Design",
  description:
   "User-centred design that balances functionality, accessibility, and business objectives.",
  items: [
   "User interface design",
   "User experience research",
   "Interactive prototyping",
   "Usability testing",
  ],
 },
 {
  number: "08",
  icon: Globe,
  title: "Content & Digital Strategy",
  description:
   "Digital communication and marketing solutions that help brands reach their audiences.",
  items: [
   "Content creation",
   "Social media management",
   "Digital marketing strategy",
  ],
 },
 {
  number: "09",
  icon: Cpu,
  title: "IoT & Embedded Systems",
  description:
   "Connected technology that brings automation and intelligence to physical environments.",
  items: [
   "Smart home and industrial automation",
   "Device integration",
   "Sensor networks",
   "Telemetry solutions",
  ],
 },
 {
  number: "10",
  icon: Lightbulb,
  title: "Tech Consulting & Training",
  description:
   "Technical guidance and knowledge-sharing that help teams make better use of technology.",
  items: [
   "Digital transformation strategy",
   "Infrastructure planning",
   "Technology advisory",
   "Staff training",
  ],
 },
];

const industries = [
 { icon: HeartPulse, title: "Healthcare" },
 { icon: GraduationCap, title: "Education" },
 { icon: ShoppingBag, title: "Retail & Commerce" },
 { icon: Landmark, title: "Government" },
 { icon: Zap, title: "Energy & Utilities" },
 { icon: Building2, title: "Real Estate" },
 { icon: BriefcaseBusiness, title: "Business" },
];

const values = [
 {
  icon: ShieldCheck,
  title: "Integrity & Trust",
  description:
   "We value honesty, transparency, and accountability in every relationship.",
 },
 {
  icon: Lightbulb,
  title: "Innovation",
  description:
   "We embrace new ideas and continuously explore better ways to solve problems.",
 },
 {
  icon: Users,
  title: "Collaboration",
  description:
   "We believe meaningful results come from teamwork and shared knowledge.",
 },
 {
  icon: Target,
  title: "Customer Success",
  description:
   "We focus on understanding our clients and creating solutions that serve their goals.",
 },
];

const footerLinks = {
 Company: [
  ["About Us", "#about"],
  ["Our Services", "#services"],
  ["Careers", "#careers"],
  ["Blog", "#blog"],
 ],
 Explore: [
  ["Industries", "#industries"],
  ["Case Studies", "#case-studies"],
  ["Technology", "#services"],
  ["Contact", "#contact"],
 ],
 Support: [
  ["Report an Issue", "mailto:info@ntonarch.com"],
  ["Make an Enquiry", "#contact"],
  ["Feedback", "mailto:info@ntonarch.com"],
  ["Contact Developer", "mailto:info@ntonarch.com"],
 ],
};

function SectionLabel({ children }) {
 return (
  <div className="mb-6 flex items-center gap-3">
   <span className="h-[2px] w-9 bg-[#ff6b00]" />
   <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff6b00]">
    {children}
   </span>
  </div>
 );
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
 return (
  <div className={`mb-14 ${centered ? "text-center" : ""}`}>
   {eyebrow && (
    <div className={`flex ${centered ? "justify-center" : ""}`}>
     <SectionLabel>{eyebrow}</SectionLabel>
    </div>
   )}
   <h2 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-[-0.045em] sm:text-5xl">
    {title}
   </h2>
   {description && (
    <p className="mt-6 max-w-2xl text-sm leading-8 text-[#888890]">
     {description}
    </p>
   )}
  </div>
 );
}

function ServiceCard({ service }) {
 const Icon = service.icon;

 return (
  <article className="group flex flex-col rounded-2xl border border-[#2a2a2e] bg-[#1c1c20] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#ff6b00]/60">
   <div className="mb-8 flex items-center justify-between">
    <div className="rounded-xl bg-[#ff6b00]/10 p-3 text-[#ff6b00] transition group-hover:bg-[#ff6b00] group-hover:text-white">
     <Icon size={25} />
    </div>
    <span className="text-sm font-bold text-[#888890]">
     {service.number}
    </span>
   </div>

   <h3 className="text-xl font-bold text-[#e8e8ec]">
    {service.title}
   </h3>

   <p className="mt-3 text-sm leading-7 text-[#888890]">
    {service.description}
   </p>

   <ul className="mt-7 flex-1 space-y-3 border-t border-[#2a2a2e] pt-6">
    {service.items.map((item) => (
     <li key={item} className="flex gap-3 text-sm text-[#888890]">
      <CheckCircle2
       size={16}
       className="mt-0.5 shrink-0 text-[#ff6b00]"
      />
      {item}
     </li>
    ))}
   </ul>

   <a
    href="#contact"
    className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff6b00] transition-all group-hover:gap-4"
   >
    Make an Enquiry <ArrowRight size={15} />
   </a>
  </article>
 );
}

export default function InformationTechnology() {
 const [mobileMenu, setMobileMenu] = useState(false);
 const [darkMode, setDarkMode] = useState(true);
 const [languageOpen, setLanguageOpen] = useState(false);
 const [language, setLanguage] = useState("EN");

 const page = darkMode
  ? "bg-[#0e0e10] text-[#e8e8ec]"
  : "bg-[#f7f7f8] text-[#222222]";

 const muted = darkMode ? "text-[#888890]" : "text-[#66666e]";
 const border = darkMode ? "border-[#2a2a2e]" : "border-black/10";
 const card = darkMode
  ? "border-[#2a2a2e] bg-[#1c1c20]"
  : "border-black/10 bg-white";

 const closeMenu = () => setMobileMenu(false);

 return (
  <main
   className={`${page} min-h-screen overflow-hidden transition-colors duration-300`}
  >
   {/* HEADER */}
   <header
    className={`fixed left-0 right-0 top-0 z-50 border-b ${border} ${darkMode ? "bg-[#0e0e10]/95" : "bg-white/95"
     } backdrop-blur-xl`}
   >
    <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
     <a href="#" className="flex shrink-0 items-center">
      <img
       src="/images/Ntonarch logo1.png"
       alt="Ntonarch Computers"
       className="h-11 w-auto object-contain"
      />
     </a>

     <nav className="hidden items-center gap-6 xl:flex">
      {navigation.map((link) => (
       <a
        key={link.label}
        href={link.href}
        className={`text-[11px] font-bold uppercase tracking-[0.08em] transition hover:text-[#ff6b00] ${muted}`}
       >
        {link.label}
       </a>
      ))}
     </nav>

     <div className="hidden items-center gap-3 xl:flex">
      <div className="relative">
       <button
        onClick={() => setLanguageOpen(!languageOpen)}
        className={`flex items-center gap-2 rounded-full border ${border} px-3 py-2 text-xs`}
       >
        <Globe size={14} />
        {language}
        <ChevronDown size={13} />
       </button>

       {languageOpen && (
        <div
         className={`absolute right-0 top-12 z-50 min-w-28 rounded-xl border ${border} ${darkMode ? "bg-[#1c1c20]" : "bg-white"
          } p-2 shadow-xl`}
        >
         {["EN", "FR", "ES"].map((item) => (
          <button
           key={item}
           onClick={() => {
            setLanguage(item);
            setLanguageOpen(false);
           }}
           className={`block w-full rounded-lg px-3 py-2 text-left text-xs transition hover:bg-[#ff6b00]/10 hover:text-[#ff6b00] ${language === item ? "text-[#ff6b00]" : ""
            }`}
          >
           {item}
          </button>
         ))}
        </div>
       )}
      </div>

      <button
       onClick={() => setDarkMode(!darkMode)}
       aria-label="Toggle theme"
       className={`rounded-full border ${border} p-2.5 transition hover:border-[#ff6b00] hover:text-[#ff6b00]`}
      >
       {darkMode ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <a
       href="#contact"
       className="rounded-full bg-[#ff6b00] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#e05a00]"
      >
       Let's Talk <ArrowUpRight className="ml-1 inline" size={14} />
      </a>
     </div>

     <div className="flex items-center gap-3 xl:hidden">
      <button
       onClick={() => setDarkMode(!darkMode)}
       aria-label="Toggle theme"
       className={`rounded-full border ${border} p-2.5`}
      >
       {darkMode ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <button
       onClick={() => setMobileMenu(!mobileMenu)}
       aria-label="Toggle navigation"
       className={`rounded-full border ${border} p-2.5`}
      >
       {mobileMenu ? <X size={20} /> : <Menu size={20} />}
      </button>
     </div>
    </div>

    {mobileMenu && (
     <div
      className={`border-t ${border} ${darkMode ? "bg-[#0e0e10]" : "bg-white"
       } px-6 py-6 xl:hidden`}
     >
      <nav className="flex flex-col gap-5">
       {navigation.map((link) => (
        <a
         key={link.label}
         href={link.href}
         onClick={closeMenu}
         className="text-sm font-semibold uppercase tracking-wider transition hover:text-[#ff6b00]"
        >
         {link.label}
        </a>
       ))}

       <a
        href="#contact"
        onClick={closeMenu}
        className="mt-2 rounded-full bg-[#ff6b00] px-5 py-3 text-center text-sm font-bold text-white"
       >
        Let's Talk
       </a>
      </nav>
     </div>
    )}
   </header>

   {/* HERO */}
   <section className="relative flex min-h-[760px] items-center overflow-hidden pt-28 lg:min-h-[850px]">
    <div className="absolute inset-0">
     <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0e0e10] via-[#0e0e10]/95 to-[#0e0e10]/35" />
     <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0e0e10] via-transparent to-[#0e0e10]/40" />

     <div className="absolute inset-0 grid grid-cols-5 gap-2 opacity-40">
      {heroImages.map((src, index) => (
       <div key={src} className="h-full overflow-hidden">
        <img
         src={src}
         alt={`Information technology visual ${index + 1}`}
         className="h-full w-full object-cover animate-[heroFloat_18s_ease-in-out_infinite]"
         style={{ animationDelay: `${index * -2}s` }}
        />
       </div>
      ))}
     </div>
    </div>

    <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 pb-24 pt-16 sm:px-8 lg:px-14">
     <div className="max-w-5xl">
      <SectionLabel>Ntonarch Computers</SectionLabel>

      <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-[88px]">
       Leading the Digital Age with{" "}
       <span className="text-[#ff6b00]">
        World-Class IT & IoT Solutions.
       </span>
      </h1>

      <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
       We combine technology, software engineering, connected systems,
       and strategic consulting to help businesses solve problems and
       build for the future.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
       <a
        href="#services"
        className="group inline-flex items-center gap-3 rounded-full bg-[#ff6b00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e05a00]"
       >
        Explore Our Services
        <ArrowUpRight
         size={17}
         className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />
       </a>

       <a
        href="#about"
        className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#ff6b00] hover:text-[#ff6b00]"
       >
        Discover Ntonarch <ArrowDown size={16} />
       </a>
      </div>

      <div className="mt-20 grid max-w-3xl grid-cols-1 border-t border-white/15 sm:grid-cols-3">
       {[
        ["Technology", "Built around your needs"],
        ["Innovation", "Designed for tomorrow"],
        ["Partnership", "Focused on your goals"],
       ].map(([title, description]) => (
        <div
         key={title}
         className="border-b border-white/15 py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
        >
         <p className="text-sm font-bold text-white">{title}</p>
         <p className="mt-1 text-xs text-white/50">
          {description}
         </p>
        </div>
       ))}
      </div>
     </div>
    </div>

    <div className="absolute bottom-10 right-8 z-20 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50 lg:flex">
     Scroll to explore <ArrowDown size={15} />
    </div>
   </section>

   {/* OVERVIEW */}
   <section className="relative z-20 mx-auto -mt-2 max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
    <div className="grid gap-4 md:grid-cols-3">
     {overview.map((item, index) => {
      const Icon = item.icon;

      return (
       <div
        key={item.title}
        className={`group relative overflow-hidden rounded-2xl border ${card} p-7 transition duration-300 hover:-translate-y-2 hover:border-[#ff6b00]/60`}
       >
        <div className="flex items-start justify-between">
         <div className="rounded-xl bg-[#ff6b00]/10 p-3 text-[#ff6b00]">
          <Icon size={25} />
         </div>
         <span className={`text-sm font-bold ${muted}`}>
          0{index + 1}
         </span>
        </div>

        <h3 className="mt-9 text-xl font-bold">{item.title}</h3>
        <p className={`mt-3 text-sm leading-7 ${muted}`}>
         {item.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
         <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00]">
          Explore
         </span>
         <ArrowUpRight
          size={18}
          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
         />
        </div>
       </div>
      );
     })}
    </div>
   </section>

   {/* ABOUT */}
   <section id="about" className={`border-y ${border}`}>
    <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-14 lg:py-32">
     <div>
      <SectionLabel>Who We Are</SectionLabel>

      <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">
       Technology that moves{" "}
       <span className="text-[#ff6b00]">business forward.</span>
      </h2>

      <p className={`mt-7 text-base leading-8 ${muted}`}>
       Ntonarch Computers is an information technology and IoT
       solutions company and a subsidiary of Ntonarch Acumen Network.
       We empower organizations through intelligent, secure, and
       scalable technology services.
      </p>

      <p className={`mt-5 text-base leading-8 ${muted}`}>
       Headquartered in Nigeria, Africa, we bring together software
       engineering, connected technology, creative thinking, and
       technical expertise to help organizations navigate an evolving
       digital world.
      </p>

      <a
       href="#contact"
       className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-[#ff6b00] transition hover:gap-5"
      >
       Work with our team <ArrowRight size={17} />
      </a>
     </div>

     <div className="grid gap-4 sm:grid-cols-2">
      {[
       {
        icon: Globe,
        title: "Global Perspective",
        text: "Building technology solutions with a broader, connected world in mind.",
       },
       {
        icon: Layers3,
        title: "Connected Expertise",
        text: "Bringing software, IT infrastructure, IoT, and creative capabilities together.",
       },
       {
        icon: Lightbulb,
        title: "Innovation Focus",
        text: "Exploring practical ways technology can solve everyday challenges.",
       },
       {
        icon: ShieldCheck,
        title: "Security & Scalability",
        text: "Considering reliability, security, and future growth in our solutions.",
       },
      ].map((item) => {
       const Icon = item.icon;

       return (
        <div key={item.title} className={`rounded-2xl border ${card} p-6`}>
         <div className="mb-7 inline-flex rounded-xl bg-[#ff6b00]/10 p-3 text-[#ff6b00]">
          <Icon size={23} />
         </div>
         <h3 className="text-lg font-bold">{item.title}</h3>
         <p className={`mt-3 text-sm leading-7 ${muted}`}>
          {item.text}
         </p>
        </div>
       );
      })}
     </div>
    </div>
   </section>

   {/* WHAT WE DO */}
   <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
    <SectionHeading
     eyebrow="Our Capabilities"
     title={
      <>
       What we bring to the{" "}
       <span className="text-[#ff6b00]">table.</span>
      </>
     }
     description="Our capabilities cover the technology and digital services organizations need to build, improve, and adapt."
    />

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
     {capabilities.map((item, index) => {
      const Icon = item.icon;

      return (
       <div
        key={item.title}
        className={`rounded-2xl border ${card} p-6 transition hover:-translate-y-1 hover:border-[#ff6b00]/50`}
       >
        <div className="mb-8 flex items-center justify-between">
         <Icon size={27} className="text-[#ff6b00]" />
         <span className={`text-xs ${muted}`}>0{index + 1}</span>
        </div>

        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className={`mt-3 text-sm leading-7 ${muted}`}>
         {item.description}
        </p>
       </div>
      );
     })}
    </div>
   </section>

   {/* VISION AND MISSION */}
   <section className="relative overflow-hidden bg-[#161618] py-24 lg:py-32">
    <div className="absolute -right-20 -top-32 h-[500px] w-[500px] rounded-full border border-white/5" />
    <div className="absolute -right-4 -top-16 h-[370px] w-[370px] rounded-full border border-white/5" />

    <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
     <div className="mb-16 max-w-3xl">
      <SectionLabel>Our Direction</SectionLabel>

      <h2 className="text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-6xl">
       Driven by purpose.
       <br />
       <span className="text-[#ff6b00]">Powered by innovation.</span>
      </h2>
     </div>

     <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
       <div className="mb-7 inline-flex rounded-xl bg-[#ff6b00]/10 p-4 text-[#ff6b00]">
        <Eye size={28} />
       </div>
       <h3 className="text-2xl font-bold">Our Vision</h3>
       <p className="mt-5 max-w-xl text-base leading-8 text-[#888890]">
        To become a globally trusted technology partner, empowering
        organizations and communities through innovative IT and IoT
        solutions that drive meaningful transformation.
       </p>
      </div>

      <div>
       <div className="mb-7 inline-flex rounded-xl bg-[#ff6b00]/10 p-4 text-[#ff6b00]">
        <Target size={28} />
       </div>
       <h3 className="text-2xl font-bold">Our Mission</h3>

       <div className="mt-5 space-y-5">
        {[
         "Deliver exceptional value through thoughtful digital strategies and technology solutions.",
         "Lead with innovation, reliability, and a commitment to quality service.",
         "Encourage continuous learning, collaboration, and positive impact.",
        ].map((item) => (
         <div key={item} className="flex gap-3">
          <CheckCircle2
           size={19}
           className="mt-1 shrink-0 text-[#ff6b00]"
          />
          <p className="text-sm leading-7 text-[#888890]">
           {item}
          </p>
         </div>
        ))}
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* CORE VALUES */}
   <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
    <SectionHeading
     eyebrow="What Guides Us"
     centered
     title={
      <>
       Our Core <span className="text-[#ff6b00]">Values.</span>
      </>
     }
    />

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
     {values.map((item) => {
      const Icon = item.icon;

      return (
       <div key={item.title} className={`rounded-2xl border ${card} p-7`}>
        <div className="mb-8 inline-flex rounded-xl bg-[#ff6b00]/10 p-3 text-[#ff6b00]">
         <Icon size={25} />
        </div>
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className={`mt-3 text-sm leading-7 ${muted}`}>
         {item.description}
        </p>
       </div>
      );
     })}
    </div>
   </section>

   {/* GLOBAL PRESENCE */}
   <section className={`border-y ${border}`}>
    <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-14">
     <div>
      <SectionLabel>Where We Are</SectionLabel>

      <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
       Rooted in Africa.
       <br />
       <span className="text-[#ff6b00]">Looking beyond borders.</span>
      </h2>

      <p className={`mt-6 max-w-lg text-sm leading-8 ${muted}`}>
       Our operations are headquartered in Nigeria, Africa. We aim to
       build partnerships and deliver technology solutions across
       borders.
      </p>
     </div>

     <div className={`flex items-center gap-6 rounded-2xl border ${card} p-8 sm:p-10`}>
      <div className="rounded-2xl bg-[#ff6b00]/10 p-5 text-[#ff6b00]">
       <MapPin size={35} />
      </div>
      <div>
       <p className={`text-xs font-bold uppercase tracking-widest ${muted}`}>
        Headquarters
       </p>
       <h3 className="mt-2 text-2xl font-bold">Nigeria, Africa</h3>
       <p className={`mt-2 text-sm ${muted}`}>Ntonarch Computers</p>
      </div>
     </div>
    </div>
   </section>

   {/* SERVICES */}
   <section id="services" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
    <SectionHeading
     eyebrow="Our Services"
     title={
      <>
       Technology solutions for{" "}
       <span className="text-[#ff6b00]">real-world needs.</span>
      </>
     }
     description="From the first idea to implementation and ongoing support, we provide services across the technology landscape."
    />

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
     {services.map((service) => (
      <ServiceCard key={service.number} service={service} />
     ))}
    </div>
   </section>

   {/* INDUSTRIES */}
   <section id="industries" className="bg-[#161618] py-24 lg:py-32">
    <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
     <SectionHeading
      eyebrow="Industries We Serve"
      title={
       <>
        Technology for every{" "}
        <span className="text-[#ff6b00]">industry.</span>
       </>
      }
      description="We apply our technology capabilities across different sectors, adapting our approach to the needs of each environment."
     />

     <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
      {industries.map((industry) => {
       const Icon = industry.icon;

       return (
        <div
         key={industry.title}
         className="group flex min-h-40 flex-col justify-between rounded-2xl border border-[#2a2a2e] bg-[#1c1c20] p-5 transition hover:-translate-y-1 hover:border-[#ff6b00]/60"
        >
         <Icon
          size={27}
          className="text-[#ff6b00] transition group-hover:scale-110"
         />
         <p className="mt-8 text-sm font-semibold leading-5">
          {industry.title}
         </p>
        </div>
       );
      })}
     </div>
    </div>
   </section>

   {/* CASE STUDIES */}
   <section id="case-studies" className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
     <div>
      <SectionLabel>Selected Work</SectionLabel>

      <h2 className="text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">
       Turning ideas into{" "}
       <span className="text-[#ff6b00]">digital experiences.</span>
      </h2>

      <p className={`mt-6 max-w-lg text-sm leading-8 ${muted}`}>
       We design and develop digital solutions that help organizations
       communicate, operate, and grow. Explore the Ntonarch Acumen
       Network website as an example of our digital work.
      </p>

      <a
       href="#contact"
       className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ff6b00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e05a00]"
      >
       Discuss a Project <ArrowUpRight size={17} />
      </a>
     </div>

     <div className={`overflow-hidden rounded-2xl border ${border} bg-[#1c1c20]`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-[#161618]">
       <img
        src="/images/IoTIT3.webp"
        alt="Digital technology project"
        className="h-full w-full object-cover opacity-75 transition duration-700 hover:scale-105"
       />

       <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent" />

       <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
        Website Development
       </span>

       <div className="absolute bottom-6 left-6 right-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#ff6b00]">
         Digital Experience
        </p>
        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
         Ntonarch Acumen Network
        </h3>
       </div>
      </div>

      <div className="flex items-center justify-between gap-4 p-6">
       <div>
        <p className="font-bold">Corporate Website</p>
        <p className={`mt-1 text-xs ${muted}`}>
         Design & Development
        </p>
       </div>
       <ArrowUpRight size={21} className="text-[#ff6b00]" />
      </div>
     </div>
    </div>
   </section>

   {/* CAREERS */}
   <section id="careers" className={`border-y ${border}`}>
    <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-14">
     <div>
      <SectionLabel>Careers</SectionLabel>

      <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
       Build the future{" "}
       <span className="text-[#ff6b00]">with us.</span>
      </h2>

      <p className={`mt-6 max-w-lg text-sm leading-8 ${muted}`}>
       We believe in curiosity, collaboration, and continuous learning.
       We welcome people who are passionate about technology and
       meaningful problem-solving.
      </p>

      <a
       href="#contact"
       className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#ff6b00] transition hover:gap-5"
      >
       Connect with our team <ArrowRight size={17} />
      </a>
     </div>

     <div className="grid gap-4 sm:grid-cols-2">
      {[
       "Innovative and collaborative culture",
       "Opportunities to learn and grow",
       "Exposure to modern technologies",
       "A focus on meaningful work",
      ].map((item) => (
       <div
        key={item}
        className={`flex items-start gap-3 rounded-xl border ${card} p-5`}
       >
        <CheckCircle2
         size={19}
         className="mt-0.5 shrink-0 text-[#ff6b00]"
        />
        <p className="text-sm font-medium leading-6">{item}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* CONTACT */}
   <section id="contact" className="px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
    <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-[#ff6b00] px-7 py-16 text-white sm:px-12 lg:px-20 lg:py-24">
     <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/20" />
     <div className="absolute -right-5 -top-16 h-64 w-64 rounded-full border border-white/20" />

     <div className="relative z-10 max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
       Let's Build Something
      </p>

      <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-6xl">
       Have a technology challenge?
       <br />
       Let's solve it together.
      </h2>

      <p className="mt-6 max-w-xl text-sm leading-7 text-white/80">
       Whether you're planning a new digital product, improving your
       infrastructure, or exploring connected technology, our team is
       ready to hear from you.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
       <a
        href="mailto:info@ntonarch.com"
        className="inline-flex items-center gap-3 rounded-full bg-[#0e0e10] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#1c1c20]"
       >
        Contact Our Team <ArrowUpRight size={17} />
       </a>

       <a
        href="#services"
        className="inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
       >
        Explore Services <ArrowRight size={17} />
       </a>
      </div>
     </div>
    </div>
   </section>

   {/* FOOTER */}
   <footer className={`border-t ${border} bg-[#0e0e10] text-[#e8e8ec]`}>
    <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14">
     <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
      <div className="lg:col-span-2">
       <a href="#" className="inline-flex">
        <img
         src="/images/Ntonarch logo1.png"
         alt="Ntonarch Computers"
         className="h-12 w-auto object-contain"
        />
       </a>

       <p className="mt-6 max-w-sm text-sm leading-7 text-[#888890]">
        Empowering organizations through intelligent technology,
        software engineering, and connected digital solutions.
       </p>

       <div className="mt-7 flex items-center gap-3">
        {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
         <a
          key={index}
          href="#contact"
          aria-label={`Social link ${index + 1}`}
          className="rounded-full border border-[#2a2a2e] p-3 text-[#888890] transition hover:border-[#ff6b00] hover:text-[#ff6b00]"
         >
          <Icon size={16} />
         </a>
        ))}
       </div>
      </div>

      {Object.entries(footerLinks).map(([heading, links]) => (
       <div key={heading}>
        <h4 className="text-sm font-bold">{heading}</h4>
        <ul className="mt-6 space-y-4 text-sm text-[#888890]">
         {links.map(([label, href]) => (
          <li key={label}>
           <a
            href={href}
            className="transition hover:text-[#ff6b00]"
           >
            {label}
           </a>
          </li>
         ))}
        </ul>
       </div>
      ))}
     </div>

     <div className="mt-16 flex flex-col justify-between gap-5 border-t border-[#2a2a2e] pt-7 text-xs text-[#888890] sm:flex-row sm:items-center">
      <p>
       © {new Date().getFullYear()} Ntonarch Computers. All rights reserved.
      </p>

      <div className="flex flex-wrap items-center gap-5">
       <a href="#contact" className="transition hover:text-[#ff6b00]">
        Privacy Policy
       </a>
       <a href="#contact" className="transition hover:text-[#ff6b00]">
        Terms of Service
       </a>
       <span>
        Designed by{" "}
        <span className="font-bold text-[#ff6b00]">
         NTONARCH COMPUTERS
        </span>
       </span>
      </div>
     </div>
    </div>
   </footer>

   <style>{`
        @keyframes heroFloat {
          0%, 100% {
            transform: scale(1.05) translateY(0);
          }
          50% {
            transform: scale(1.12) translateY(-12px);
          }
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }
      `}</style>
  </main>
 );
}
