import { useEffect, useMemo, useState } from "react";
import {
 ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Search, Sun, Moon,
 Globe2, ChevronDown, Newspaper, Landmark, Cpu, Palette, Trophy,
 HeartPulse, Leaf, Coins, Shield, Megaphone, MessageSquare, Bug,
 Lightbulb, Mail, Play, Quote, ExternalLink, CheckCircle2
} from "lucide-react";

const categories = [
 { name: "Government & Governance", icon: Landmark },
 { name: "Engineering & Technology", icon: Cpu },
 { name: "Culture & Tourism", icon: Palette },
 { name: "Sports & Entertainment", icon: Trophy },
 { name: "Health", icon: HeartPulse },
 { name: "Climate & Agriculture", icon: Leaf },
 { name: "Religious & Mythology", icon: Globe2 },
 { name: "Economy & Business", icon: Coins },
 { name: "Crime & Defence", icon: Shield },
 { name: "Global", icon: Globe2 },
 { name: "Opinion", icon: MessageSquare },
 { name: "Fact Check", icon: CheckCircle2 },
 { name: "Advertisement", icon: Megaphone },
];

const divisions = [
 { name: "NTONARCH MARKET", desc: "Marketplace solutions and trading platforms.", mark: "M" },
 { name: "NTONARCH FARMS", desc: "Sustainable agriculture and smart farming.", mark: "F" },
 { name: "NTONARCH ENGINEERING", desc: "Engineering, infrastructure and practical innovation.", mark: "E" },
 { name: "NTONARCH COMPUTERS", desc: "Technology services and digital solutions.", mark: "C" },
 { name: "NTONARCH REAL ESTATE", desc: "Real estate development and property management.", mark: "R" },
 { name: "NTONARCH FOUNDATION", desc: "Community development and social impact.", mark: "N" },
];

const caseStudies = [
 {
  title: "Digital Transformation Success",
  client: "Global Tech Solutions",
  division: "NTONARCH Computers",
  description: "Modernising technology infrastructure and improving operational efficiency through digital solutions.",
  result: "200% efficiency improvement",
 },
 {
  title: "Smart Agriculture Implementation",
  client: "Green Valley Farms",
  division: "NTONARCH Farms",
  description: "Applying IoT and automation to improve the management of traditional farming operations.",
  result: "Smart farming deployment",
 },
 {
  title: "Media Campaign Excellence",
  client: "Premier Entertainment",
  division: "NTONARCH Media",
  description: "A media campaign strategy designed to strengthen audience reach and engagement.",
  result: "150% audience engagement increase",
 },
 {
  title: "Engineering Innovation",
  client: "Metro Infrastructure Corp",
  division: "NTONARCH Engineering",
  description: "Sustainable engineering solutions for urban development projects.",
  result: "Infrastructure innovation",
 },
];

const testimonials = [
 {
  quote: "The digital transformation solutions revolutionised our operations. The team's expertise and dedication made a real difference.",
  name: "Sarah Johnson",
  role: "CEO, Global Tech Solutions",
  image: "/images/testimonials/sarah-johnson.jpg",
 },
 {
  quote: "Their smart agriculture approach helped us improve yield while reducing resource consumption.",
  name: "Michael Chen",
  role: "Director, Green Valley Farms",
  image: "/images/testimonials/michael-chen.jpg",
 },
 {
  quote: "The campaign strategy helped us achieve a significant increase in audience engagement.",
  name: "Emma Rodriguez",
  role: "Marketing Director, Premier Entertainment",
  image: "/images/testimonials/emma-rodriguez.jpg",
 },
 {
  quote: "Their engineering solutions and attention to detail made them a valued project partner.",
  name: "David Thompson",
  role: "Project Manager, Metro Infrastructure Corp",
  image: "/images/testimonials/david-thompson.jpg",
 },
];

const supportItems = [
 { title: "Report a Bug", text: "Found a broken link or something that isn't working as expected?", icon: Bug, type: "bug-report" },
 { title: "Feature Request", text: "Have an idea that could make our platforms better?", icon: Lightbulb, type: "feature-request" },
 { title: "Share Feedback", text: "Tell us about your experience with NTONARCH.", icon: MessageSquare, type: "feedback" },
 { title: "Advertise With Us", text: "Reach audiences across NTONARCH Media channels.", icon: Megaphone, type: "advertising" },
];

const navLinks = [
 ["Home", "/"], ["Categories", "#categories"], ["Divisions", "#divisions"],
 ["About", "#about"], ["Case Studies", "#case-studies"], ["Testimonials", "#testimonials"]
];

function Media() {
 const [dark, setDark] = useState(true);
 const [mobileOpen, setMobileOpen] = useState(false);
 const [query, setQuery] = useState("");
 const [activeCase, setActiveCase] = useState(null);
 const [language, setLanguage] = useState("English");
 const [languageOpen, setLanguageOpen] = useState(false);
 const [email, setEmail] = useState("");
 const [subscribed, setSubscribed] = useState(false);

 const filteredCategories = useMemo(
  () => categories.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())),
  [query]
 );

 const theme = dark ? "site-dark" : "site-light";
 const surface = dark ? "surface-dark" : "surface-light";
 const muted = dark ? "muted-dark" : "muted-light";
 const border = dark ? "border-[#2a2a2e]" : "border-[#dde0e6]";

 const toggleTheme = () => {
  setDark((value) => {
   const next = !value;
   document.documentElement.classList.toggle("dark", next);
   return next;
  });
 };

 const closeMobile = () => setMobileOpen(false);


 const heroImages = [
  "/images/reader-laptop.jpg",
  "/images/reader-tablet.jpg",
  "/images/reader-phone.jpg",
 ];

 const [heroSlide, setHeroSlide] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setHeroSlide((prev) => (prev + 1) % heroImages.length);
  }, 5000);

  return () => clearInterval(interval);
 }, []);


 return (
  <main className={`${theme} min-h-screen overflow-hidden transition-colors duration-300`}>
   <header className={`sticky top-0 z-40 border-b ${border} ${dark ? "bg-[#0e0e10]/90" : "bg-white/90"} backdrop-blur-xl`}>
    <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
     <a href="#home" className="flex items-center gap-3" onClick={closeMobile}>
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ff6b00] font-display text-lg font-extrabold text-white">N</span>
      <span className="leading-tight">
       <span className="font-display block text-[15px] font-extrabold tracking-[.12em]">NTONARCH</span>
       <span className={`block text-[9px] font-bold tracking-[.32em] ${muted}`}>MEDIA</span>
      </span>
     </a>

     <nav className="hidden items-center gap-7 lg:flex">
      {navLinks.map(([label, href]) => (
       <a key={label} href={href} className={`text-[13px] font-medium transition hover:text-[#ff6b00] ${muted}`}>{label}</a>
      ))}
     </nav>

     <div className="hidden items-center gap-3 lg:flex">
      <div className="relative">
       <button onClick={() => setLanguageOpen(!languageOpen)} className={`flex items-center gap-2 rounded-full border ${border} px-3 py-2 text-xs ${muted}`}>
        <Globe2 size={14} /> {language} <ChevronDown size={13} />
       </button>
       {languageOpen && (
        <div className={`absolute right-0 top-12 z-50 max-h-64 w-40 overflow-y-auto rounded-xl border ${border} ${surface} p-2 shadow-2xl`}>
         {["English", "French", "Chinese", "Italian", "Spanish", "German", "Arabic", "Portuguese", "Russian", "Hindi", "Japanese", "Korean", "Swahili", "Dutch"].map((item) => (
          <button key={item} onClick={() => { setLanguage(item); setLanguageOpen(false); }} className={`block w-full rounded-lg px-3 py-2 text-left text-xs hover:bg-[#ff6b00]/10 hover:text-[#ff6b00] ${language === item ? "text-[#ff6b00]" : ""}`}>{item}</button>
         ))}
        </div>
       )}
      </div>
      <button aria-label="Toggle colour theme" onClick={toggleTheme} className={`grid h-10 w-10 place-items-center rounded-full border ${border} transition hover:border-[#ff6b00] hover:text-[#ff6b00]`}>
       {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
      <a href="/contact" className="rounded-full bg-[#ff6b00] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#e85f00]">Contact Us <ArrowUpRight className="ml-1 inline" size={13} /></a>
     </div>

     <div className="flex items-center gap-2 lg:hidden">
      <button aria-label="Toggle colour theme" onClick={toggleTheme} className={`grid h-10 w-10 place-items-center rounded-full border ${border}`}>
       {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
      <button aria-label="Open navigation" onClick={() => setMobileOpen(!mobileOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-[#ff6b00]/40 text-[#ff6b00]">
       {mobileOpen ? <X size={19} /> : <Menu size={19} />}
      </button>
     </div>
    </div>
    {mobileOpen && (
     <div className={`border-t ${border} ${surface} px-5 py-5 lg:hidden`}>
      <nav className="grid grid-cols-2 gap-3">
       {navLinks.map(([label, href]) => <a key={label} href={href} onClick={closeMobile} className={`rounded-lg px-3 py-2 text-sm ${muted} hover:bg-[#ff6b00]/10 hover:text-[#ff6b00]`}>{label}</a>)}
       <a href="/contact" onClick={closeMobile} className="col-span-2 rounded-lg bg-[#ff6b00] px-3 py-3 text-center text-sm font-bold text-white">Contact Us <ArrowUpRight className="ml-1 inline" size={14} /></a>
      </nav>
      <div className="mt-4 flex flex-wrap gap-2">
       {["English", "French", "Spanish", "Arabic", "Swahili"].map((item) => <button key={item} onClick={() => setLanguage(item)} className={`rounded-full border ${border} px-3 py-1 text-xs ${language === item ? "border-[#ff6b00] text-[#ff6b00]" : muted}`}>{item}</button>)}
      </div>
     </div>
    )}
   </header>


   <section id="home" className="relative isolate overflow-hidden">
    {/* Sliding background images */}
    <div className="absolute inset-0 -z-20">
     {heroImages.map((image, index) => (
      <div
       key={image}
       className={`absolute inset-0 transition-opacity duration-1000 ${heroSlide === index ? "opacity-100" : "opacity-0"
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

    {/* Dark overlay */}
    <div className="absolute inset-0 -z-10 bg-black/70" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

    <div className="mx-auto flex min-h-[540px] max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:min-h-[600px] lg:px-12">
     <div className="max-w-[650px] text-white">

      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff6b00]/40 bg-[#ff6b00]/15 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[.16em] text-[#ff9b58] backdrop-blur-sm">
       <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00]" />
       Independent perspective. Wider coverage.
      </div>

      <h1 className="font-display text-[clamp(2.5rem,5vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-.055em]">
       Your world.
       <br />
       <span className="text-[#ff6b00]">In perspective.</span>
      </h1>

      <p className="mt-5 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
       Your source for comprehensive news, insights and updates across
       the issues, ideas and industries shaping our world.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-5">
       <a
        href="#categories"
        className="rounded-full bg-[#ff6b00] px-6 py-3.5 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#e85f00]"
       >
        Explore coverage
        <ArrowRight className="ml-2 inline" size={15} />
       </a>

       <a
        href="#about"
        className="inline-flex items-center gap-2 text-xs font-semibold text-white/75 transition hover:text-[#ff6b00]"
       >
        Who we are
        <ArrowDown size={14} />
       </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-5 text-[10px] text-white/70">
       <span className="inline-flex items-center gap-2">
        <Newspaper size={14} className="text-[#ff6b00]" />
        News & insights
       </span>

       <span className="inline-flex items-center gap-2">
        <Globe2 size={14} className="text-[#ff6b00]" />
        Global perspectives
       </span>

       <span className="inline-flex items-center gap-2">
        <CheckCircle2 size={14} className="text-[#ff6b00]" />
        Fact-conscious reporting
       </span>
      </div>

      {/* Slide indicators */}
      <div className="mt-7 flex items-center gap-2">
       {heroImages.map((_, index) => (
        <button
         key={index}
         onClick={() => setHeroSlide(index)}
         aria-label={`Show slide ${index + 1}`}
         className={`h-1.5 rounded-full transition-all duration-300 ${heroSlide === index
           ? "w-8 bg-[#ff6b00]"
           : "w-3 bg-white/40 hover:bg-white/70"
          }`}
        />
       ))}
      </div>

     </div>
    </div>
   </section>


   <section className={`border-y ${border} ${dark ? "bg-[#121214]" : "bg-white"}`}>
    <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-12">
     <p className={`text-xs font-semibold uppercase tracking-[.16em] ${muted}`}>Explore what matters to you</p>
     <div className="flex w-full max-w-md items-center gap-3 rounded-full border border-transparent bg-black/[.04] px-4 py-3 dark:bg-white/[.05]">
      <Search size={16} className={muted} />
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search news categories..." className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500" />
      {query && <button onClick={() => setQuery("")} className="text-xs text-[#ff6b00]">Clear</button>}
     </div>
    </div>
   </section>

   <section id="categories" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
    <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
     <div><p className="section-kicker">Explore our coverage</p><h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Stories across every subject.</h2></div>
     <p className={`max-w-md text-sm leading-7 ${muted}`}>From public affairs to technology, culture and business, explore the subjects shaping conversations around the world.</p>
    </div>
    {filteredCategories.length ? (
     <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {filteredCategories.map(({ name, icon: Icon }, index) => (
       <a key={name} href={`/category/${name.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}`} className={`group flex min-h-[112px] items-center justify-between rounded-2xl border ${border} ${surface} p-4 transition duration-300 hover:-translate-y-1 hover:border-[#ff6b00]/60 sm:p-5`}>
        <div className="flex items-center gap-3">
         <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#ff6b00]/10 text-[#ff6b00]"><Icon size={18} /></span>
         <span className="max-w-[145px] text-sm font-semibold leading-5">{name}</span>
        </div>
        <ArrowUpRight size={15} className={`${muted} transition group-hover:text-[#ff6b00]`} />
       </a>
      ))}
     </div>
    ) : (
     <div className={`rounded-2xl border ${border} ${surface} p-8 text-center text-sm ${muted}`}>No categories match “{query}”. Try another search.</div>
    )}
   </section>

   <section id="divisions" className={`${dark ? "bg-[#161618]" : "bg-[#ececf0]"}`}>
    <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
     <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
      <div><p className="section-kicker">The NTONARCH network</p><h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">One network. Many capabilities.</h2></div>
      <p className={`max-w-md text-sm leading-7 ${muted}`}>Discover the divisions working across business, technology, agriculture, infrastructure and community development.</p>
     </div>
     <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {divisions.map((item, index) => (
       <div key={item.name} className={`group rounded-2xl border ${border} ${dark ? "bg-[#1c1c20]" : "bg-white"} p-6 transition hover:border-[#ff6b00]/50`}>
        <div className="mb-7 flex items-center justify-between">
         <span className="font-display text-3xl font-extrabold text-[#ff6b00]/80">{item.mark}</span>
         <span className={`text-[10px] font-bold tracking-[.15em] ${muted}`}>0{index + 1}</span>
        </div>
        <h3 className="font-display text-base font-bold tracking-wide">{item.name}</h3>
        <p className={`mt-3 max-w-xs text-sm leading-6 ${muted}`}>{item.desc}</p>
        <div className="mt-6 h-px w-full bg-current opacity-10" />
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#ff6b00]">Explore division <ArrowUpRight size={14} /></span>
       </div>
      ))}
     </div>
    </div>
   </section>

   <section id="about" className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-28">
    <div><p className="section-kicker">About NTONARCH Media</p><h2 className="font-display mt-4 max-w-md text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Information that connects the dots.</h2></div>
    <div>
     <p className="text-xl leading-9 sm:text-2xl">NTONARCH MEDIA is a digital platform for gathering and sharing information across the subjects that shape our communities and the wider world.</p>
     <p className={`mt-6 max-w-2xl text-sm leading-8 ${muted}`}>Our coverage spans governance, technology, culture, sports, health, agriculture, business and more. We aim to make information accessible through broad coverage, timely updates, factual reporting and a community-aware perspective.</p>
     <a href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#ff6b00] hover:gap-3">Get in touch <ArrowRight size={16} /></a>
    </div>
   </section>

   <section id="latest" className={`${dark ? "bg-[#161618]" : "bg-white"}`}>
    <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
     <div className="flex flex-wrap items-end justify-between gap-5">
      <div><p className="section-kicker">From the newsroom</p><h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Latest updates & insights.</h2></div>
      <a href="#categories" className="inline-flex items-center gap-2 text-sm font-bold text-[#ff6b00]">Browse coverage <ArrowUpRight size={15} /></a>
     </div>
     <div className={`mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border ${border} ${dark ? "bg-[#1c1c20]" : "bg-[#f5f5f7]"} p-7 sm:flex-row sm:items-center sm:p-9`}>
      <div className="flex items-start gap-4">
       <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#ff6b00]/10 text-[#ff6b00]"><Newspaper size={22} /></span>
       <div><h3 className="font-display text-lg font-bold">Fresh stories are on the way.</h3><p className={`mt-2 max-w-xl text-sm leading-6 ${muted}`}>New articles will appear here as they are published. Explore our coverage categories in the meantime.</p></div>
      </div>
      <a href="#categories" className="shrink-0 rounded-full border border-[#ff6b00]/50 px-5 py-3 text-xs font-bold text-[#ff6b00] transition hover:bg-[#ff6b00] hover:text-white">Explore categories <ArrowRight className="ml-2 inline" size={14} /></a>
     </div>
    </div>
   </section>

   <section id="case-studies" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
    <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
     <div><p className="section-kicker">Work in action</p><h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Selected case studies.</h2></div>
     <p className={`max-w-md text-sm leading-7 ${muted}`}>A look at projects and initiatives described across the NTONARCH divisions.</p>
    </div>
    <div className="grid gap-3 md:grid-cols-2">
     {caseStudies.map((item, index) => (
      <button key={item.title} onClick={() => setActiveCase(item)} className={`group text-left rounded-2xl border ${border} ${surface} p-6 transition hover:border-[#ff6b00]/60 sm:p-7`}>
       <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[.16em] text-[#ff6b00]">{item.division}</span><ArrowUpRight size={17} className={`${muted} transition group-hover:text-[#ff6b00]`} /></div>
       <h3 className="font-display mt-7 text-xl font-bold">{item.title}</h3>
       <p className={`mt-2 text-xs ${muted}`}>Client: {item.client}</p>
       <p className={`mt-4 max-w-lg text-sm leading-7 ${muted}`}>{item.description}</p>
       <p className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#ff6b00]">View case study <ArrowRight size={14} /></p>
      </button>
     ))}
    </div>
    <p className={`mt-5 text-[11px] leading-5 ${muted}`}>Project descriptions and outcome figures are based on the supplied source material and should be confirmed before publication.</p>
   </section>

   <section className={`${dark ? "bg-[#161618]" : "bg-[#ececf0]"}`}>
    <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
     <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
      <div><p className="section-kicker">Progress & milestones</p><h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Building with purpose.</h2></div>
      <p className={`max-w-md text-sm leading-7 ${muted}`}>The milestones and recognitions supplied for NTONARCH's story, presented without adding unverified details.</p>
     </div>
     <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {[
       ["Industry recognition", "2023 Tech Excellence Award"],
       ["Environmental impact", "Green Innovation Award"],
       ["Business growth", "Fastest Growing Company"],
       ["Community impact", "CSR Award"],
      ].map(([label, value], i) => (
       <div key={label} className={`rounded-2xl border ${border} ${dark ? "bg-[#1c1c20]" : "bg-white"} p-6`}>
        <Trophy className="mb-7 text-[#ff6b00]" size={21} />
        <p className={`text-xs ${muted}`}>{label}</p><p className="font-display mt-2 text-lg font-bold leading-6">{value}</p>
       </div>
      ))}
     </div>
     <p className={`mt-5 text-[11px] leading-5 ${muted}`}>Please verify award names, dates and milestone figures before making this section public.</p>
    </div>
   </section>

   <section id="testimonials" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
    <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
     <div><p className="section-kicker">Client experiences</p><h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">What people say.</h2></div>
     <p className={`max-w-md text-sm leading-7 ${muted}`}>Experiences shared in the supplied NTONARCH testimonial material.</p>
    </div>
    <div className="grid gap-3 md:grid-cols-2">
     {testimonials.map((item) => (
      <article key={item.name} className={`rounded-2xl border ${border} ${surface} p-6 sm:p-7`}>
       <Quote className="mb-5 text-[#ff6b00]" size={22} />
       <p className="text-base leading-8">“{item.quote}”</p>
       <div className={`mt-7 flex items-center gap-3 border-t ${border} pt-5`}>
        <img src={item.image} alt="" className="h-11 w-11 rounded-full bg-black/10 object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
        <div><p className="text-sm font-bold">{item.name}</p><p className={`mt-1 text-xs ${muted}`}>{item.role}</p></div>
       </div>
      </article>
     ))}
    </div>
    <p className={`mt-5 text-[11px] leading-5 ${muted}`}>Confirm testimonial permissions, names, roles and statements before publication.</p>
   </section>

   <section id="support" className={`${dark ? "bg-[#161618]" : "bg-white"}`}>
    <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
     <div className="mb-10"><p className="section-kicker">We're listening</p><h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">How can we help?</h2><p className={`mt-3 max-w-xl text-sm leading-7 ${muted}`}>Reach the right team for support, ideas, feedback or advertising enquiries.</p></div>
     <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {supportItems.map(({ title, text, icon: Icon, type }) => (
       <a key={title} href={`/contact?type=${type}`} className={`group rounded-2xl border ${border} ${dark ? "bg-[#1c1c20]" : "bg-[#f5f5f7]"} p-6 transition hover:-translate-y-1 hover:border-[#ff6b00]/60`}>
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ff6b00]/10 text-[#ff6b00]"><Icon size={19} /></span>
        <h3 className="font-display mt-6 text-base font-bold">{title}</h3>
        <p className={`mt-2 min-h-[60px] text-sm leading-6 ${muted}`}>{text}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#ff6b00]">Contact the team <ArrowUpRight size={14} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
       </a>
      ))}
     </div>
    </div>
   </section>

   <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
    <div className="relative overflow-hidden rounded-[28px] bg-[#ff6b00] px-7 py-10 text-white sm:px-12 sm:py-14 lg:px-16">
     <div className="absolute -right-12 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
     <div className="relative grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
      <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/75">The NTONARCH briefing</p><h2 className="font-display mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">Stay informed. Stay connected.</h2><p className="mt-4 max-w-lg text-sm leading-7 text-white/80">Get updates and insights from across the NTONARCH network.</p></div>
      <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubscribed(true); }} className="flex flex-col gap-3 sm:flex-row">
       <input type="email" required value={email} onChange={(e) => { setEmail(e.target.value); setSubscribed(false); }} placeholder="Enter your email address" className="min-h-14 min-w-0 flex-1 rounded-full border border-white/30 bg-white/15 px-5 text-sm text-white outline-none placeholder:text-white/65 focus:border-white" />
       <button type="submit" className="min-h-14 rounded-full bg-white px-7 text-sm font-bold text-[#d95700] transition hover:bg-[#171719] hover:text-white">{subscribed ? "You're on the list" : "Subscribe"} <ArrowRight className="ml-1 inline" size={15} /></button>
      </form>
     </div>
     {subscribed && <p className="relative mt-4 flex items-center gap-2 text-xs text-white"><CheckCircle2 size={14} /> Thanks. Connect this form to your newsletter service to receive subscriptions.</p>}
    </div>
   </section>

   <footer className={`border-t ${border} ${dark ? "bg-[#0a0a0b]" : "bg-[#f0f0f2]"}`}>
    <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
     <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
      <div>
       <a href="#home" className="inline-flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ff6b00] font-display text-lg font-extrabold text-white">N</span><span className="font-display text-sm font-extrabold tracking-[.12em]">NTONARCH MEDIA</span></a>
       <p className={`mt-5 max-w-xs text-sm leading-7 ${muted}`}>Your source for comprehensive news, insights and updates.</p>
      </div>
      <div><h4 className="mb-5 text-xs font-bold uppercase tracking-[.15em]">Explore</h4><div className={`grid gap-3 text-sm ${muted}`}><a className="hover:text-[#ff6b00]" href="#categories">Categories</a><a className="hover:text-[#ff6b00]" href="#divisions">Our Divisions</a><a className="hover:text-[#ff6b00]" href="#about">About Media</a><a className="hover:text-[#ff6b00]" href="#case-studies">Case Studies</a></div></div>
      <div><h4 className="mb-5 text-xs font-bold uppercase tracking-[.15em]">Company</h4><div className={`grid gap-3 text-sm ${muted}`}><a className="hover:text-[#ff6b00]" href="/contact">Contact Us</a><a className="hover:text-[#ff6b00]" href="/careers">Careers</a><a className="hover:text-[#ff6b00]" href="/about">About NTONARCH</a></div></div>
      <div><h4 className="mb-5 text-xs font-bold uppercase tracking-[.15em]">Legal</h4><div className={`grid gap-3 text-sm ${muted}`}><a className="hover:text-[#ff6b00]" href="/terms">Terms & Conditions</a><a className="hover:text-[#ff6b00]" href="/privacy">Privacy Policy</a></div></div>
     </div>
     <div className={`mt-12 flex flex-col justify-between gap-3 border-t ${border} pt-6 text-xs ${muted} sm:flex-row`}><span>© {new Date().getFullYear()} NTONARCH MEDIA. All rights reserved.</span><span>Built to inform. Designed to connect.</span></div>
    </div>
   </footer>

   {activeCase && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={() => setActiveCase(null)}>
     <div role="dialog" aria-modal="true" aria-labelledby="case-title" onClick={(e) => e.stopPropagation()} className={`relative w-full max-w-xl rounded-3xl border ${border} ${surface} p-7 shadow-2xl sm:p-9`}>
      <button aria-label="Close case study" onClick={() => setActiveCase(null)} className={`absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border ${border} ${muted} hover:text-[#ff6b00]`}><X size={17} /></button>
      <p className="section-kicker">{activeCase.division}</p>
      <h3 id="case-title" className="font-display mt-4 pr-8 text-2xl font-bold">{activeCase.title}</h3>
      <p className={`mt-2 text-xs ${muted}`}>Client: {activeCase.client}</p>
      <p className={`mt-6 text-sm leading-8 ${muted}`}>{activeCase.description}</p>
      <div className="mt-7 rounded-2xl bg-[#ff6b00]/10 p-5"><p className="text-[10px] font-bold uppercase tracking-[.15em] text-[#ff6b00]">Reported outcome</p><p className="mt-2 font-display text-lg font-bold">{activeCase.result}</p></div>
      <p className={`mt-5 text-[11px] leading-5 ${muted}`}>Confirm the project details and outcome with the relevant team before publishing.</p>
     </div>
    </div>
   )}
  </main>
 );
}

export default Media