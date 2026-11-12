
import { useEffect, useState } from "react";
import {
 ArrowDown,
 ArrowRight,
 ArrowUpRight,
 Award,
 BarChart3,
 CheckCircle2,
 ChevronDown,
 ChevronRight,
 Droplets,
 Facebook,
 Globe2,
 Handshake,
 HeartHandshake,
 Leaf,
 Lightbulb,
 MapPin,
 Menu,
 Microscope,
 Moon,
 Play,
 Quote,
 Sprout,
 Sun,
 Tractor,
 TrendingUp,
 Users,
 Wheat,
 X,
} from "lucide-react";

/* --------------------------------
   DATA
--------------------------------- */

const heroSlides = [
 {
  image: "/images/palm%20tree.png",
  label: "Growing a sustainable future",
 },
 {
  image: "/images/cocoa%20farm.png",
  label: "Empowering African farmers",
 },
 {
  image: "/images/traditional%20modern%20farming.png",
  label: "Modern agriculture, lasting impact",
 },
];

const farmStats = [
 { value: "1.7M", label: "Grains produced & traded" },
 { value: "850K", label: "Farmers onboarded" },
 { value: "2,700", label: "Communities reached" },
 { value: "420K", label: "Hectares cultivated" },
];

const services = [
 {
  number: "01",
  icon: Users,
  title: "Farmer Network Development",
  description:
   "Building connected farmer networks across communities to encourage knowledge exchange, collaboration and better resource utilization.",
 },
 {
  number: "02",
  icon: BarChart3,
  title: "Market Analysis",
  description:
   "Providing market intelligence to support informed decisions around crop selection, pricing and produce distribution.",
 },
 {
  number: "03",
  icon: Wheat,
  title: "Agricultural Input Distribution",
  description:
   "Connecting farmers with essential agricultural inputs, including improved seeds, fertilizers and crop-protection products.",
 },
 {
  number: "04",
  icon: Handshake,
  title: "Financial Access",
  description:
   "Connecting farmers and agribusinesses with financial opportunities and investment support suited to their agricultural needs.",
 },
 {
  number: "05",
  icon: Globe2,
  title: "Blockchain & Digital Solutions",
  description:
   "Exploring digital records, produce traceability, smart contracts and other blockchain-based applications for agricultural transactions.",
 },
 {
  number: "06",
  icon: Tractor,
  title: "Labour Outsourcing",
  description:
   "Connecting agricultural businesses and farmers with workers, equipment and other resources needed for farm operations.",
 },
];

const processSteps = [
 {
  number: "01",
  icon: Users,
  title: "Farmer Onboarding",
  description:
   "We collect farmer information, organize farmers into community clusters and establish group leadership structures.",
 },
 {
  number: "02",
  icon: MapPin,
  title: "Farm Assessment & Mapping",
  description:
   "We assess farmland, soil conditions, water availability, land size and other factors to understand each farm's potential.",
 },
 {
  number: "03",
  icon: Sprout,
  title: "Resource Allocation",
  description:
   "Farmers are connected with suitable inputs, technologies and financial resources based on their needs and farm assessments.",
 },
 {
  number: "04",
  icon: HeartHandshake,
  title: "Continuous Support",
  description:
   "We provide monitoring, agricultural guidance, hands-on training and technical support throughout the farming process.",
 },
];

const principles = [
 {
  icon: BarChart3,
  title: "Data-Driven Agriculture",
  description:
   "Using data, analytics and monitoring systems to support crop management, resource allocation and informed agricultural decisions.",
  items: [
   "Soil health monitoring",
   "Weather pattern analysis",
   "Crop performance tracking",
   "Market demand forecasting",
  ],
 },
 {
  icon: Leaf,
  title: "Sustainable Practices",
  description:
   "Promoting farming methods that improve productivity while protecting natural resources and the environment.",
  items: [
   "Regenerative agriculture",
   "Water conservation",
   "Organic pest management",
   "Soil enrichment",
  ],
 },
 {
  icon: Microscope,
  title: "Smart Technology",
  description:
   "Integrating modern technology and practical innovations to improve farm operations and agricultural efficiency.",
  items: [
   "Automated irrigation",
   "Drone monitoring",
   "Smart harvesting equipment",
   "AI-powered crop management",
  ],
 },
];

const cashCrops = [
 "Cocoa",
 "Cassava",
 "Maize",
 "Rice",
 "Palm Oil",
 "Groundnuts",
 "Melon",
 "Honey",
 "Timber",
];

const foodCrops = [
 "Yam",
 "Water Yam",
 "Cocoa Yam",
 "Beans",
 "Plantain",
 "Orange",
 "African Butter Pear",
 "Okoro Soap",
];

const coreValues = [
 {
  icon: Leaf,
  title: "Sustainability",
  description:
   "Promoting environmentally responsible farming and the preservation of natural resources.",
 },
 {
  icon: Lightbulb,
  title: "Innovation",
  description:
   "Exploring and implementing useful technologies that improve agricultural practices.",
 },
 {
  icon: Users,
  title: "Farmer Empowerment",
  description:
   "Equipping farmers with knowledge, support and opportunities to improve their livelihoods.",
 },
 {
  icon: Globe2,
  title: "Environmental Stewardship",
  description:
   "Supporting responsible practices that protect and preserve the environment.",
 },
 {
  icon: HeartHandshake,
  title: "Community Development",
  description:
   "Encouraging collaboration, knowledge sharing and economic development within communities.",
 },
];

const farmerStories = [
 {
  name: "Sanusi Sani",
  location: "Katsina State",
  role: "Maize Farmer",
  image: "/images/Plantain-farm.png",
  profile: "/images/Tomi.png",
  quote:
   "Getting access to quality input has been one of our greatest challenges. We got quality fertilizers that are unmatched in the whole of Nigeria. My maize yield has increased by 40% since partnering with NTONARCH FARMS.",
 },
 {
  name: "Rita Sulei",
  location: "Kaduna State",
  role: "Cassava Farmer",
  image: "/images/cocoa%20farm.png",
  profile: "/images/odey.png",
  quote:
   "Our children are getting improved education and we have had the freedom to go about like other people without going to beg from anyone. The training and support from NTONARCH FARMS has been life-changing.",
 },
 {
  name: "Mohammed Ibrahim",
  location: "Kano State",
  role: "Rice Farmer",
  image: "/images/plantains3.png",
  profile: "/images/Enah%20Ebi.jpg",
  quote:
   "The irrigation system provided by NTONARCH FARMS has helped me grow crops year-round. I can now support my family and even employ others in my community.",
 },
];

const customerStories = [
 {
  name: "Tomi Oluwaleye",
  location: "Lagos State",
  image: "/images/Tomi.png",
  quote:
   "I invested in the agro-business with NTONARCH FARMS, and my investment has been great, it yielded a good profit.",
  facebook: "https://www.facebook.com/tomi.oluwaleye.7",
 },
 {
  name: "Gladys Odey",
  location: "Abuja FCT, Nigeria",
  image: "/images/odey.png",
  quote:
   "I've been purchasing raw food items from NTONARCH FARMS and supplying them to hotels, eateries and restaurants. The quality is excellent, and the food tastes great.",
  facebook: "https://www.facebook.com/gladys.odey.2025",
 },
 {
  name: "Robinson Akuro",
  location: "Port Harcourt",
  image: "/images/Roberson.png",
  quote:
   "My family and I have been consistently buying produce from NTONARCH FARMS, and it has always been a great experience.",
  facebook:
   "https://web.facebook.com/profile.php?id=100006500949113&sk=videos",
 },
];

const farmerOutcomes = [
 { value: "40%", label: "Average increase in crop yield" },
 { value: "85%", label: "Farmers with access to modern technology" },
 { value: "60%", label: "Increase in annual income" },
 { value: "90%", label: "Farmers reporting improved quality of life" },
];

/* --------------------------------
   REUSABLE COMPONENTS
--------------------------------- */

function SectionHeading({ eyebrow, title, description, center = false }) {
 return (
  <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
   <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
    <span className="h-px w-7 bg-orange-500" />
    {eyebrow}
   </span>

   <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
    {title}
   </h2>

   {description && (
    <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
     {description}
    </p>
   )}
  </div>
 );
}

function SectionLabel({ children }) {
 return (
  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
   <span className="h-px w-6 bg-orange-500" />
   {children}
  </span>
 );
}

function StatCard({ value, label }) {
 return (
  <div className="border-l border-white/20 pl-5">
   <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
    {value}
   </p>
   <p className="mt-2 max-w-[150px] text-xs leading-5 text-white/65 sm:text-sm">
    {label}
   </p>
  </div>
 );
}

function ServiceCard({ service }) {
 const Icon = service.icon;

 return (
  <div className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50">
   <div className="mb-8 flex items-center justify-between">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
     <Icon size={23} strokeWidth={1.8} />
    </div>
    <span className="text-sm font-semibold text-[var(--muted)]">
     {service.number}
    </span>
   </div>

   <h3 className="text-lg font-bold text-[var(--text)]">
    {service.title}
   </h3>

   <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
    {service.description}
   </p>

   <div className="mt-6 flex items-center gap-2 text-xs font-bold text-orange-500 opacity-0 transition group-hover:opacity-100">
    Learn more <ArrowRight size={14} />
   </div>
  </div>
 );
}

function ProcessCard({ step, index }) {
 const Icon = step.icon;

 return (
  <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
   <div className="mb-7 flex items-center justify-between">
    <span className="text-sm font-bold text-orange-500">
     {step.number}
    </span>

    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--soft)] text-orange-500">
     <Icon size={21} />
    </div>
   </div>

   <h3 className="text-lg font-bold text-[var(--text)]">
    {step.title}
   </h3>

   <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
    {step.description}
   </p>
  </div>
 );
}

function StoryCard({ story }) {
 return (
  <article className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
   <div className="relative h-56 overflow-hidden">
    <img
     src={story.image}
     alt={`${story.role} farm`}
     className="h-full w-full object-cover transition duration-500 hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

    <div className="absolute bottom-4 left-5 flex items-center gap-3">
     <img
      src={story.profile}
      alt=""
      className="h-11 w-11 rounded-full border-2 border-white object-cover"
     />

     <div>
      <p className="font-bold text-white">{story.name}</p>
      <p className="text-xs text-white/75">{story.location}</p>
     </div>
    </div>
   </div>

   <div className="p-6">
    <span className="text-xs font-bold uppercase tracking-wider text-orange-500">
     {story.role}
    </span>

    <div className="mt-4 text-orange-500">
     <Quote size={25} fill="currentColor" />
    </div>

    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
     {story.quote}
    </p>

    <a
     href="https://facebook.com/ntonarchfarms"
     target="_blank"
     rel="noreferrer"
     className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-orange-500 hover:gap-3"
    >
     View on Facebook <ArrowUpRight size={14} />
    </a>
   </div>
  </article>
 );
}

function TestimonialCard({ story }) {
 return (
  <div className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
   <Quote size={28} className="text-orange-500" />

   <p className="mt-5 flex-1 text-sm leading-7 text-[var(--muted)]">
    "{story.quote}"
   </p>

   <div className="mt-8 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-5">
    <div className="flex items-center gap-3">
     <img
      src={story.image}
      alt=""
      className="h-11 w-11 rounded-full object-cover"
     />

     <div>
      <p className="text-sm font-bold text-[var(--text)]">
       {story.name}
      </p>
      <p className="mt-1 text-xs text-[var(--muted)]">
       {story.location}
      </p>
     </div>
    </div>

    <a
     href={story.facebook}
     target="_blank"
     rel="noreferrer"
     aria-label={`Facebook profile of ${story.name}`}
     className="text-[var(--muted)] transition hover:text-orange-500"
    >
     <Facebook size={18} />
    </a>
   </div>
  </div>
 );
}

function CropGroup({ title, description, crops }) {
 return (
  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
   <div className="mb-6 flex items-start justify-between gap-4">
    <div>
     <h3 className="text-xl font-bold text-[var(--text)]">{title}</h3>
     <p className="mt-2 text-sm text-[var(--muted)]">{description}</p>
    </div>

    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
     <Sprout size={22} />
    </div>
   </div>

   <div className="flex flex-wrap gap-2">
    {crops.map((crop) => (
     <span
      key={crop}
      className="rounded-full border border-[var(--border)] bg-[var(--soft)] px-4 py-2 text-xs font-medium text-[var(--text)]"
     >
      {crop}
     </span>
    ))}
   </div>
  </div>
 );
}

/* --------------------------------
   MAIN PAGE
--------------------------------- */

export default function Farm() {
 const [darkMode, setDarkMode] = useState(true);
 const [mobileMenu, setMobileMenu] = useState(false);
 const [activeSlide, setActiveSlide] = useState(0);
 const [openDropdown, setOpenDropdown] = useState("");

 useEffect(() => {
  const interval = setInterval(() => {
   setActiveSlide((current) => (current + 1) % heroSlides.length);
  }, 5000);

  return () => clearInterval(interval);
 }, []);

 const closeMenu = () => {
  setMobileMenu(false);
  setOpenDropdown("");
 };

 const navGroups = [
  {
   label: "Our Work",
   links: [
    { label: "What We Do", href: "#services" },
    { label: "Farmer Stories", href: "#farmer-stories" },
    { label: "Partnership Stories", disabled: true },
    { label: "Impact Map", disabled: true },
   ],
  },
  {
   label: "Our Resources",
   links: [
    { label: "Farms Location", disabled: true },
    { label: "Gallery", disabled: true },
    { label: "Press and Media", disabled: true },
   ],
  },
 ];

 return (
  <div
   className={darkMode ? "dark" : ""}
   style={{
    "--bg": darkMode ? "#0e0e10" : "#ffffff",
    "--surface": darkMode ? "#161618" : "#f8f8f7",
    "--soft": darkMode ? "#1c1c20" : "#f0f0ed",
    "--text": darkMode ? "#f4f4f2" : "#171717",
    "--muted": darkMode ? "#a1a1aa" : "#66666b",
    "--border": darkMode ? "#29292d" : "#e7e7e3",
   }}
  >
   <div className="min-h-screen overflow-hidden bg-[var(--bg)] font-sans text-[var(--text)] transition-colors duration-300">

    {/* HEADER */}
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
     <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
      <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
       <img
        src="/images/Ntonarch%20logo1.png"
        alt="NTONARCH"
        className="h-10 w-auto object-contain"
       />
       <div className="hidden sm:block">
        <p className="text-sm font-black tracking-wider text-white">
         NTONARCH
        </p>
        <p className="text-[9px] font-semibold tracking-[0.25em] text-white/60">
         ACUMEN NETWORK
        </p>
       </div>
      </a>

      <nav className="hidden items-center gap-7 lg:flex">
       <a href="/" className="text-sm text-white/80 transition hover:text-orange-400">
        Home
       </a>

       <a href="#about" className="text-sm text-white/80 transition hover:text-orange-400">
        About Us
       </a>

       {navGroups.map((group) => (
        <div key={group.label} className="group relative">
         <button className="flex items-center gap-1 text-sm text-white/80 transition hover:text-orange-400">
          {group.label}
          <ChevronDown size={14} />
         </button>

         <div className="invisible absolute left-0 top-full mt-4 w-56 translate-y-2 rounded-xl border border-white/10 bg-[#161618] p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          {group.links.map((link) => (
           <a
            key={link.label}
            href={link.disabled ? undefined : link.href}
            onClick={link.disabled ? (e) => e.preventDefault() : closeMenu}
            className={`flex items-center justify-between rounded-lg px-3 py-3 text-xs transition ${link.disabled
              ? "cursor-not-allowed text-white/30"
              : "text-white/75 hover:bg-white/5 hover:text-orange-400"
             }`}
           >
            {link.label}
            {link.disabled ? (
             <span className="text-[9px] uppercase tracking-wider">
              Soon
             </span>
            ) : (
             <ChevronRight size={13} />
            )}
           </a>
          ))}
         </div>
        </div>
       ))}

       <a href="/contact.html" className="text-sm text-white/80 transition hover:text-orange-400">
        Contact Us
       </a>
      </nav>

      <div className="flex items-center gap-3">
       <button
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle colour theme"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-orange-400 hover:text-orange-400"
       >
        {darkMode ? <Sun size={17} /> : <Moon size={17} />}
       </button>

       <button
        onClick={() => setMobileMenu(!mobileMenu)}
        aria-label="Toggle navigation"
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white lg:hidden"
       >
        {mobileMenu ? <X size={20} /> : <Menu size={20} />}
       </button>
      </div>
     </div>

     {/* MOBILE NAVIGATION */}
     {mobileMenu && (
      <div className="border-t border-white/10 bg-[#111113] px-5 py-5 lg:hidden">
       <div className="flex flex-col gap-1">
        <a onClick={closeMenu} href="/" className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5">
         Home
        </a>
        <a onClick={closeMenu} href="#about" className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5">
         About Us
        </a>

        {navGroups.map((group) => (
         <div key={group.label}>
          <button
           onClick={() =>
            setOpenDropdown(
             openDropdown === group.label ? "" : group.label
            )
           }
           className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5"
          >
           {group.label}
           <ChevronDown
            size={15}
            className={`transition ${openDropdown === group.label ? "rotate-180" : ""}`}
           />
          </button>

          {openDropdown === group.label && (
           <div className="ml-3 border-l border-white/10 pl-3">
            {group.links.map((link) => (
             <a
              key={link.label}
              href={link.disabled ? undefined : link.href}
              onClick={link.disabled ? (e) => e.preventDefault() : closeMenu}
              className={`block rounded-lg px-3 py-3 text-xs ${link.disabled
                ? "cursor-not-allowed text-white/30"
                : "text-white/60 hover:text-orange-400"
               }`}
             >
              {link.label}
              {link.disabled && (
               <span className="ml-2 text-[9px] uppercase">Soon</span>
              )}
             </a>
            ))}
           </div>
          )}
         </div>
        ))}

        <a onClick={closeMenu} href="/contact.html" className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5">
         Contact Us
        </a>
       </div>
      </div>
     )}
    </header>

    {/* HERO */}
    <section id="home" className="relative flex min-h-[720px] items-center overflow-hidden bg-[#101714] sm:min-h-[760px]">
     {heroSlides.map((slide, index) => (
      <div
       key={slide.image}
       className={`absolute inset-0 transition-opacity duration-1000 ${activeSlide === index ? "opacity-100" : "opacity-0"
        }`}
       style={{
        backgroundImage: `url("${slide.image}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
       }}
      />
     ))}

     <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

     <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-36 lg:px-8">
      <div className="max-w-3xl">
       <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold text-orange-300">
        <Sprout size={15} />
        NTONARCH FARMS
       </div>

       <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
        Growing Africa's
        <span className="block text-orange-500">Agricultural Future.</span>
       </h1>

       <p className="mt-7 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
        Building a thriving network of African farmers through
        sustainable, affordable and accessible agricultural solutions.
        We connect farmers to finance, modern farming practices and
        local and global markets.
       </p>

       <div className="mt-9 flex flex-wrap items-center gap-4">
        <a
         href="#about"
         className="inline-flex items-center gap-3 rounded-lg bg-orange-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
        >
         Discover NTONARCH <ArrowRight size={17} />
        </a>

        <a
         href="#farmer-stories"
         className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-400"
        >
         <Play size={15} /> Farmer Stories
        </a>
       </div>
      </div>

      <div className="mt-16 flex items-center gap-3">
       {heroSlides.map((slide, index) => (
        <button
         key={slide.image}
         onClick={() => setActiveSlide(index)}
         aria-label={`Show slide ${index + 1}`}
         className={`h-1 rounded-full transition-all ${activeSlide === index
           ? "w-12 bg-orange-500"
           : "w-5 bg-white/40 hover:bg-white"
          }`}
        />
       ))}
       <span className="ml-2 text-xs text-white/50">
        {heroSlides[activeSlide].label}
       </span>
      </div>
     </div>

     <a
      href="#impact"
      aria-label="Scroll to impact"
      className="absolute bottom-8 right-8 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-orange-400 hover:text-orange-400 sm:flex"
     >
      <ArrowDown size={19} />
     </a>
    </section>

    {/* IMPACT NUMBERS */}
    <section id="impact" className="relative z-10 -mt-1 bg-[#151517] py-12 sm:py-14">
     <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 sm:grid-cols-4 sm:gap-6 lg:px-8">
      {farmStats.map((stat) => (
       <StatCard key={stat.label} {...stat} />
      ))}
     </div>
    </section>

    {/* ABOUT */}
    <section id="about" className="py-24 sm:py-28">
     <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
      <div className="relative">
       <div className="overflow-hidden rounded-2xl">
        <img
         src="/images/traditional%20modern%20farming.png"
         alt="Modern agricultural farming"
         className="h-[440px] w-full object-cover sm:h-[520px]"
        />
       </div>

       <div className="absolute -bottom-7 right-0 max-w-[230px] rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xl sm:-right-7">
        <div className="flex items-center gap-3 text-orange-500">
         <Sprout size={24} />
         <span className="text-sm font-bold">Our Commitment</span>
        </div>
        <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
         Empowering agripreneurs and transforming agriculture through
         innovation and sustainable practices.
        </p>
       </div>
      </div>

      <div>
       <SectionLabel>About NTONARCH Farms</SectionLabel>

       <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
        Improving African grassroots agriculture sustainably.
       </h2>

       <p className="mt-6 text-sm leading-8 text-[var(--muted)]">
        NTONARCH FARMS is an agri-tech enterprise committed to
        transforming agriculture through innovation, sustainability
        and inclusive growth. We empower farmers and agribusinesses
        with resources, technology and scalable solutions.
       </p>

       <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
        By combining digital innovation with hands-on farming support,
        agricultural production and strategic partnerships, we work
        towards rural development and improved food security.
       </p>

       <div className="mt-9 grid gap-7 border-t border-[var(--border)] pt-8 sm:grid-cols-2">
        <div>
         <h3 className="flex items-center gap-2 font-bold text-[var(--text)]">
          <TargetIcon /> Our Mission
         </h3>
         <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          To revolutionize African agriculture through sustainable,
          technology-driven practices that empower farmers and
          support food security across the continent.
         </p>
        </div>

        <div>
         <h3 className="flex items-center gap-2 font-bold text-[var(--text)]">
          <Globe2 size={18} className="text-orange-500" /> Our Vision
         </h3>
         <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          To be a leading force in transforming African agriculture
          into a modern, efficient and sustainable industry that
          contributes to global food security.
         </p>
        </div>
       </div>
      </div>
     </div>
    </section>

    {/* SERVICES */}
    <section id="services" className="bg-[var(--surface)] py-24 sm:py-28">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <SectionHeading
       eyebrow="What we do"
       title="Solutions that move agriculture forward."
       description="We bring together farmers, technology, financial opportunities and market intelligence to support a more connected agricultural ecosystem."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
       {services.map((service) => (
        <ServiceCard key={service.number} service={service} />
       ))}
      </div>
     </div>
    </section>

    {/* PROCESS */}
    <section id="process" className="py-24 sm:py-28">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <SectionHeading
       eyebrow="How we work"
       title="From farmer onboarding to harvest."
       description="Our process brings farmers, resources and agricultural support together through a structured approach."
       center
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
       {processSteps.map((step, index) => (
        <ProcessCard key={step.number} step={step} index={index} />
       ))}
      </div>
     </div>
    </section>

    {/* MODERN AGRICULTURE */}
    <section id="modern-agriculture" className="bg-[var(--surface)] py-24 sm:py-28">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid items-end gap-7 lg:grid-cols-2">
       <SectionHeading
        eyebrow="Modern agriculture"
        title="A smarter approach to farming."
       />

       <p className="mb-12 max-w-xl text-sm leading-8 text-[var(--muted)]">
        We combine traditional agricultural knowledge with modern
        technology to encourage sustainable, efficient and productive
        farming. Our approach focuses on practical implementation,
        monitoring and continuous improvement.
       </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
       {principles.map((principle) => {
        const Icon = principle.icon;

        return (
         <div
          key={principle.title}
          className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-7"
         >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
           <Icon size={23} />
          </div>

          <h3 className="mt-7 text-xl font-bold text-[var(--text)]">
           {principle.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
           {principle.description}
          </p>

          <div className="mt-6 space-y-3">
           {principle.items.map((item) => (
            <div key={item} className="flex items-center gap-3">
             <CheckCircle2
              size={16}
              className="shrink-0 text-orange-500"
             />
             <span className="text-xs text-[var(--muted)]">
              {item}
             </span>
            </div>
           ))}
          </div>
         </div>
        );
       })}
      </div>

      <div className="mt-10 grid gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-7 sm:grid-cols-4 sm:p-8">
       {[
        ["01", "Assessment & Planning"],
        ["02", "Technology Integration"],
        ["03", "Monitoring & Analysis"],
        ["04", "Optimization & Scale"],
       ].map(([number, label]) => (
        <div key={number} className="flex items-center gap-4">
         <span className="text-sm font-bold text-orange-500">
          {number}
         </span>
         <span className="text-sm font-semibold text-[var(--text)]">
          {label}
         </span>
        </div>
       ))}
      </div>
     </div>
    </section>

    {/* PRODUCTS */}
    <section id="products" className="py-24 sm:py-28">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <SectionHeading
       eyebrow="Our agricultural products"
       title="Growing produce that matters."
       description="Explore the range of agricultural produce featured across our farming and supply activities."
       center
      />

      <div className="grid gap-5 lg:grid-cols-2">
       <CropGroup
        title="Cash Crops"
        description="Agricultural produce for commercial and industrial markets."
        crops={cashCrops}
       />

       <CropGroup
        title="Food Crops"
        description="Food produce supporting households, businesses and food supply chains."
        crops={foodCrops}
       />
      </div>
     </div>
    </section>

    {/* VALUES */}
    <section id="values" className="bg-[var(--surface)] py-24 sm:py-28">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <SectionHeading
       eyebrow="What guides us"
       title="The values behind our work."
       description="Our approach is shaped by a commitment to farmers, communities, innovation and responsible agricultural development."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
       {coreValues.map((value) => {
        const Icon = value.icon;

        return (
         <div
          key={value.title}
          className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6"
         >
          <Icon size={25} className="text-orange-500" />

          <h3 className="mt-6 text-base font-bold text-[var(--text)]">
           {value.title}
          </h3>

          <p className="mt-3 text-xs leading-7 text-[var(--muted)]">
           {value.description}
          </p>
         </div>
        );
       })}
      </div>
     </div>
    </section>

    {/* FARMER STORIES */}
    <section id="farmer-stories" className="py-24 sm:py-28">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
       <SectionHeading
        eyebrow="Farmer success stories"
        title="Real stories from the farming community."
        description="Discover how farmers describe their experiences with NTONARCH FARMS and the support they have received."
       />

       <a
        href="https://facebook.com/ntonarchfarms"
        target="_blank"
        rel="noreferrer"
        className="mb-12 inline-flex shrink-0 items-center gap-2 text-sm font-bold text-orange-500 hover:gap-3"
       >
        More stories <ArrowUpRight size={17} />
       </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
       {farmerStories.map((story) => (
        <StoryCard key={story.name} story={story} />
       ))}
      </div>
     </div>
    </section>

    {/* FARMER OUTCOMES */}
    <section className="bg-[#151517] py-20 sm:py-24">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
       <div>
        <SectionLabel>Reported farmer outcomes</SectionLabel>

        <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
         Measuring progress beyond the harvest.
        </h2>

        <p className="mt-5 text-sm leading-8 text-white/60">
         The following figures are the farmer impact statistics
         presented in the supplied NTONARCH FARMS success-stories
         material.
        </p>
       </div>

       <div className="grid grid-cols-2 gap-7">
        {farmerOutcomes.map((item) => (
         <div
          key={item.label}
          className="border-l border-orange-500/50 pl-5"
         >
          <p className="text-4xl font-bold text-orange-500 sm:text-5xl">
           {item.value}
          </p>
          <p className="mt-3 max-w-[190px] text-xs leading-6 text-white/60 sm:text-sm">
           {item.label}
          </p>
         </div>
        ))}
       </div>
      </div>
     </div>
    </section>

    {/* CUSTOMER TESTIMONIALS */}
    <section id="testimonials" className="py-24 sm:py-28">
     <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <SectionHeading
       eyebrow="Customer experiences"
       title="Experiences that speak for themselves."
       description="Hear from people who have invested in, purchased from and experienced NTONARCH FARMS."
       center
      />

      <div className="grid gap-5 lg:grid-cols-3">
       {customerStories.map((story) => (
        <TestimonialCard key={story.name} story={story} />
       ))}
      </div>
     </div>
    </section>

    {/* CTA */}
    <section id="contact" className="px-5 pb-20 lg:px-8">
     <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#183b2b] px-7 py-16 sm:px-12 sm:py-20">
      <div
       className="absolute inset-0 opacity-20"
       style={{
        backgroundImage: "url('/images/farmingt.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
       }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#102b20] via-[#153b2a]/95 to-[#153b2a]/70" />

      <div className="relative z-10 max-w-2xl">
       <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
        Let's grow together
       </span>

       <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl">
        Ready to transform your farming journey?
       </h2>

       <p className="mt-5 max-w-xl text-sm leading-8 text-white/65">
        Be part of a growing agricultural community. Connect with
        NTONARCH FARMS and explore opportunities for collaboration,
        agricultural support and growth.
       </p>

       <a
        href="/contact.html"
        className="mt-9 inline-flex items-center gap-3 rounded-lg bg-orange-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
       >
        Contact Us <ArrowUpRight size={17} />
       </a>
      </div>
     </div>
    </section>

    {/* FOOTER */}
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
     <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
       <div>
        <a href="#home" className="inline-flex items-center gap-3">
         <img
          src="/images/Ntonarch%20logo1.png"
          alt="NTONARCH"
          className="h-10 w-auto object-contain"
         />
         <div>
          <p className="text-sm font-black tracking-wider text-[var(--text)]">
           NTONARCH
          </p>
          <p className="text-[9px] font-semibold tracking-[0.2em] text-[var(--muted)]">
           ACUMEN NETWORK
          </p>
         </div>
        </a>

        <p className="mt-5 max-w-xs text-xs leading-7 text-[var(--muted)]">
         Empowering African agriculture through innovation,
         sustainable practices and farmer-focused solutions.
        </p>

        <a
         href="https://facebook.com/ntonarchfarms"
         target="_blank"
         rel="noreferrer"
         aria-label="NTONARCH FARMS on Facebook"
         className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-orange-500 hover:text-orange-500"
        >
         <Facebook size={16} />
        </a>
       </div>

       <div>
        <h3 className="text-sm font-bold text-[var(--text)]">
         Explore
        </h3>

        <div className="mt-5 flex flex-col gap-4">
         {[
          ["About Us", "#about"],
          ["What We Do", "#services"],
          ["Our Process", "#process"],
          ["Our Products", "#products"],
          ["Farmer Stories", "#farmer-stories"],
         ].map(([label, href]) => (
          <a
           key={label}
           href={href}
           className="text-xs text-[var(--muted)] transition hover:text-orange-500"
          >
           {label}
          </a>
         ))}
        </div>
       </div>

       <div>
        <h3 className="text-sm font-bold text-[var(--text)]">
         Our Resources
        </h3>

        <div className="mt-5 flex flex-col gap-4">
         {[
          "Farms Location",
          "Gallery",
          "Press and Media",
          "Partnership Stories",
          "Impact Map",
         ].map((label) => (
          <span
           key={label}
           className="flex items-center gap-2 text-xs text-[var(--muted)]"
          >
           {label}
           <span className="text-[9px] uppercase tracking-wider text-orange-500">
            Soon
           </span>
          </span>
         ))}
        </div>
       </div>

       <div>
        <h3 className="text-sm font-bold text-[var(--text)]">
         Get in touch
        </h3>

        <div className="mt-5 flex flex-col gap-4">
         <a
          href="/contact.html"
          className="text-xs text-[var(--muted)] transition hover:text-orange-500"
         >
          Contact Us
         </a>

         <a
          href="https://facebook.com/ntonarchfarms"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-[var(--muted)] transition hover:text-orange-500"
         >
          Facebook
         </a>
        </div>
       </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-[var(--border)] pt-7 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
       <p>
        © {new Date().getFullYear()} NTONARCH ACUMEN NETWORK. All
        rights reserved.
       </p>

       <a
        href="#home"
        className="inline-flex items-center gap-2 transition hover:text-orange-500"
       >
        Back to top <ArrowUpRight size={14} />
       </a>
      </div>
     </div>
    </footer>
   </div>
  </div>
 );
}

function TargetIcon() {
 return <TrendingUp size={18} className="text-orange-500" />;
}
