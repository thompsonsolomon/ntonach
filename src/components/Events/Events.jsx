import { useEffect, useMemo, useState } from "react";
import {
 ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown, ChevronLeft,
 ChevronRight, Clock3, Globe2, HeartHandshake, Laptop, Mail, MapPin,
 Menu, MonitorPlay, Moon, Phone, Play, ShieldCheck, Sun, Users, X,
 Zap, Camera, Sparkles, Building2, PartyPopper, Video, Layers3,
} from "lucide-react";

const slides = [
 {
  image: "/images/ev2.jpg",
  eyebrow: "EVENTS, REIMAGINED",
  title: "Creating unforgettable experiences with modern architecture and tools",
  copy: "Thoughtful planning, creative production and the right technology — brought together to make every moment count.",
 },
 {
  image: "/images/ev1.webp",
  eyebrow: "TECHNOLOGY-ENABLED EXCELLENCE",
  title: "Better experiences, from the first idea to the final applause",
  copy: "We bring people together through well-planned physical, virtual and hybrid events.",
 },
 {
  image: "/images/ev3.jpg",
  eyebrow: "FROM VISION TO REALITY",
  title: "Your vision deserves an exceptional execution",
  copy: "A dependable event partner for organisations, communities and individuals.",
 },
];

const overviewServices = [
 { title: "Corporate Events", type: "Physical", icon: Building2, copy: "Conferences, summits, retreats, AGMs and award ceremonies." },
 { title: "Social Celebrations", type: "Physical", icon: PartyPopper, copy: "Weddings, milestones, cultural ceremonies and private gatherings." },
 { title: "Virtual Events", type: "Virtual", icon: MonitorPlay, copy: "Webinars, online conferences, exhibitions and live-streamed experiences." },
 { title: "Hybrid Solutions", type: "Hybrid", icon: Layers3, copy: "Connected experiences for in-person and remote audiences." },
 { title: "Brand Activations", type: "Physical", icon: Sparkles, copy: "Product launches, trade shows, pop-ups and brand experiences." },
 { title: "Event Technology", type: "Hybrid", icon: Zap, copy: "Event platforms, audience engagement tools and technical production." },
];

const portfolioCategories = [
 { title: "Corporate Events", category: "Corporate", copy: "Conferences, meetings, summits and corporate celebrations." },
 { title: "Social Celebrations", category: "Social", copy: "Personal milestones, weddings and community celebrations." },
 { title: "Virtual Events", category: "Virtual", copy: "Online conferences, webinars and digital gatherings." },
 { title: "Hybrid Solutions", category: "Hybrid", copy: "Events connecting on-site and remote participants." },
 { title: "Brand Activations", category: "Brand", copy: "Product showcases, exhibitions and experiential campaigns." },
 { title: "Entertainment Events", category: "Entertainment", copy: "Concerts, festivals and live audience experiences." },
];

const serviceGroups = [
 {
  id: "services-strategy", title: "Strategy & Consultation", intro: "A clear plan is the foundation of a successful event.",
  items: ["Comprehensive planning", "Partial coordination", "Day-of management", "Creative development", "Budget architecture", "Timeline engineering", "Risk mitigation", "International event coordination", "Multilingual support", "Compliance and certification"],
 },
 {
  id: "services-physical", title: "Physical Events", intro: "On-the-ground planning and production for meaningful in-person experiences.",
  items: ["Conferences and summits", "Corporate retreats and AGMs", "Training sessions and award ceremonies", "Weddings and milestone celebrations", "Private and cultural gatherings", "Product launches and brand activations", "Trade shows and press conferences", "Concerts, festivals and sports tournaments", "Community gatherings and charity galas", "Educational symposiums"],
 },
 {
  id: "services-virtual", title: "Virtual Events", intro: "Bring audiences together across locations with a considered digital experience.",
  items: ["Virtual conferences and summits", "Webinars and workshops", "Virtual exhibitions", "Online networking and matchmaking", "Live streaming", "Virtual town halls"],
 },
 {
  id: "services-hybrid", title: "Hybrid Solutions", intro: "Create one connected event experience for people in the room and joining remotely.",
  items: ["Seamless in-person and virtual integration", "Multi-location synchronisation", "Dual-audience engagement", "Unified event analytics"],
 },
 {
  id: "services-marketing", title: "Event Marketing & Promotion", intro: "Build awareness, reach the right audience and keep people engaged.",
  items: ["Digital advertising", "Traditional advertising", "Content marketing", "Social media management", "SEO and event listings", "Analytics and performance reporting"],
 },
 {
  id: "services-technology", title: "Event Technology & Innovation", intro: "Technology and production support to make event experiences more engaging and reliable.",
  items: ["Custom event app development", "VR, AR and immersive experiences", "AI-enabled event tools", "Digital ticketing and credentialing", "Audience engagement tools", "3D virtual environments", "Video, camera and drone coverage", "Cloud-based event platforms", "Cybersecurity solutions", "Technical support", "Satellite and streaming services"],
 },
 {
  id: "services-international", title: "International Event Services", intro: "Practical coordination for events involving international guests and suppliers.",
  items: ["Visa and travel coordination", "Currency and payment coordination", "Time-zone management", "Legal and regulatory coordination", "Cultural consultation", "Global vendor coordination"],
 },
];

const faqs = [
 ["What types of events do you manage?", "We support corporate events, social celebrations, conferences, exhibitions, virtual events, hybrid experiences, brand activations and community gatherings."],
 ["How far in advance should I book?", "Lead time depends on the event size, venue, location and production requirements. Contact us early so we can review the scope and recommend a practical timeline."],
 ["Can you manage virtual and hybrid events?", "Yes. We can help plan the programme, coordinate streaming and event platforms, support speakers and connect in-person and remote audiences."],
 ["Do you offer different service packages?", "Our service packages are flexible. The final scope and fee are tailored to your event requirements, scale and level of coordination."],
 ["Can you work within a specific budget?", "Share your budget range and priorities with us. We can help you assess options and structure the event around the most important requirements."],
 ["Do you coordinate vendors?", "Vendor coordination can be included in the agreed scope, including sourcing, communication, scheduling and delivery follow-up."],
 ["What happens if something unexpected occurs?", "We plan for risks and contingencies as part of event preparation. The response plan depends on the venue, event format and operational requirements."],
 ["Do you provide post-event support?", "Post-event support can include wrap-up coordination, feedback collection, content handover and a review of event outcomes."],
 ["Can you help promote an event?", "Event marketing support can include content planning, social media coordination, digital promotion and performance reporting."],
 ["How do I get started?", "Complete the inquiry form with the details you have. Our team can then discuss your goals, timeline and next steps."],
];

const legalContent = {
 privacy: {
  title: "Privacy Policy",
  body: [
   ["Last updated", "February 2, 2026"],
   ["Information we collect", "We collect information you provide directly, such as your name, email address, phone number and event details when you enquire about our services."],
   ["How we use information", "We use submitted information to respond to enquiries, plan and provide services, communicate about events and improve our services."],
   ["Information sharing", "We do not sell personal information. Information may be shared with service providers where necessary to deliver an agreed service or where required by law."],
   ["Data security", "We take reasonable steps to protect information against unauthorised access, alteration or disclosure."],
   ["Your rights", "You may request access to, correction of or deletion of your personal information, subject to applicable requirements."],
   ["Contact", "For privacy questions, please contact us through the contact page."],
  ],
 },
 terms: {
  title: "Terms of Service",
  body: [
   ["Acceptance", "By using our event management services, you agree to the terms set out in the applicable service agreement."],
   ["Services", "Services may include event planning, coordination, technology support, production and execution for physical, virtual and hybrid events."],
   ["Client responsibilities", "Clients are responsible for providing accurate information, timely decisions, approvals and payments as agreed."],
   ["Payment", "Fees, payment milestones and payment methods will be stated in the individual proposal or service agreement."],
   ["Cancellation", "Cancellation and refund terms will be set out in the applicable service agreement."],
   ["Limitations", "Events may be affected by circumstances outside reasonable control. Responsibilities and remedies will be addressed in the applicable agreement and law."],
   ["Changes", "Any changes to an agreed scope should be confirmed in writing."],
  ],
 },
 accessibility: {
  title: "Accessibility Statement",
  body: [
   ["Our commitment", "We aim to make our website, communications and event experiences accessible to as many people as reasonably possible."],
   ["Web accessibility", "We aim to support keyboard navigation, readable content and compatibility with assistive technologies, and to improve accessibility over time."],
   ["Event accessibility", "Accessibility arrangements may include accessible venues, sign-language interpretation, captions, accessible materials and dietary accommodations, subject to the event plan and advance request."],
   ["Feedback", "If you encounter an accessibility barrier or need an accommodation, please contact us so we can discuss suitable arrangements."],
  ],
 },
};

function SectionHeading({ eyebrow, title, copy, light = false }) {
 return (
  <div className={`mx-auto mb-12 max-w-3xl text-center ${light ? "text-white" : ""}`}>
   {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-orange-500">{eyebrow}</p>}
   <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
   {copy && <p className={`mx-auto mt-4 max-w-2xl text-base leading-7 ${light ? "text-white/65" : "text-slate-600"}`}>{copy}</p>}
  </div>
 );
}

function Events() {
 const [dark, setDark] = useState(true);
 const [mobileOpen, setMobileOpen] = useState(false);
 const [slide, setSlide] = useState(0);
 const [serviceFilter, setServiceFilter] = useState("All");
 const [portfolioFilter, setPortfolioFilter] = useState("All");
 const [modal, setModal] = useState(null);
 const [faqOpen, setFaqOpen] = useState(-1);
 const [donationTarget, setDonationTarget] = useState("equipment");
 const [donationAmount, setDonationAmount] = useState("");
 const [paymentMethod, setPaymentMethod] = useState("card");
 const [donor, setDonor] = useState({ name: "", email: "" });
 const [contactSent, setContactSent] = useState(false);
 const [donationNotice, setDonationNotice] = useState("");

 useEffect(() => {
  const timer = window.setInterval(() => setSlide((current) => (current + 1) % slides.length), 6000);
  return () => window.clearInterval(timer);
 }, []);

 useEffect(() => {
  document.body.style.overflow = modal ? "hidden" : "";
  return () => { document.body.style.overflow = ""; };
 }, [modal]);

 const filteredServices = useMemo(
  () => serviceFilter === "All" ? overviewServices : overviewServices.filter((item) => item.type === serviceFilter),
  [serviceFilter],
 );
 const filteredPortfolio = useMemo(
  () => portfolioFilter === "All" ? portfolioCategories : portfolioCategories.filter((item) => item.category === portfolioFilter),
  [portfolioFilter],
 );

 const jumpTo = (id) => {
  setMobileOpen(false);
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
 };

 const closeModal = () => setModal(null);

 const handleDonation = (event) => {
  event.preventDefault();
  setDonationNotice("This donation form is a front-end demonstration only. No payment has been taken. Connect a verified payment provider and backend before accepting donations.");
 };

 const handleContact = (event) => {
  event.preventDefault();
  setContactSent(true);
  event.currentTarget.reset();
 };

 const navItems = [
  ["About", "about"], ["Services", "services"], ["Portfolio", "portfolio"],
  ["Calendar", "calendar"], ["Resources", "resources"], ["Invest", "investment"],
  ["Donate", "donate"], ["Career", "join-team"], ["Contact", "contact"],
 ];

 return (
  <div className={dark ? "min-h-screen bg-[#101714] text-white" : "min-h-screen bg-slate-50 text-slate-900"}>
   <header className={`fixed inset-x-0 top-0 z-40 border-b backdrop-blur-xl ${dark ? "border-white/10 bg-[#101714]/85" : "border-slate-200 bg-white/90"}`}>
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
     <a href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
      <img src="/images/Ntonarch%20logo1.png" alt="Ntonarch logo" className="h-10 w-10 rounded-lg object-contain" />
      <span className="text-sm font-extrabold tracking-[0.12em]">NTONARCH <span className="text-orange-500">EVENTS</span></span>
     </a>
     <nav className="hidden items-center gap-5 xl:flex">
      {navItems.map(([label, id]) => <button key={id} onClick={() => jumpTo(id)} className={`text-xs font-semibold transition hover:text-orange-500 ${dark ? "text-white/75" : "text-slate-600"}`}>{label}</button>)}
     </nav>
     <div className="flex items-center gap-2">
      <button aria-label="Toggle theme" onClick={() => setDark(!dark)} className={`rounded-full p-2 transition ${dark ? "hover:bg-white/10" : "hover:bg-slate-100"}`}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
      <button aria-label="Open navigation" onClick={() => setMobileOpen(!mobileOpen)} className="rounded-lg p-2 xl:hidden">{mobileOpen ? <X /> : <Menu />}</button>
      <button onClick={() => jumpTo("contact")} className="hidden rounded-full bg-orange-500 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-orange-600 sm:inline-flex">Plan an Event <ArrowUpRight className="ml-2" size={15} /></button>
     </div>
    </div>
    {mobileOpen && <nav className={`border-t px-5 py-4 xl:hidden ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-white"}`}>
     <div className="grid grid-cols-2 gap-3">{navItems.map(([label, id]) => <button key={id} onClick={() => jumpTo(id)} className="py-2 text-left text-sm font-semibold">{label}</button>)}</div>
    </nav>}
   </header>

   <main>
    {/* Hero */}
    <section id="home" className="relative flex min-h-[720px] items-center overflow-hidden pt-20">
     {slides.map((item, index) => <div key={item.image} className={`absolute inset-0 transition-opacity duration-1000 ${index === slide ? "opacity-100" : "opacity-0"}`}>
      <img src={item.image} alt="" className="h-full w-full object-cover" />
     </div>)}
     <div className="absolute inset-0 bg-gradient-to-r from-[#080e0c]/95 via-[#080e0c]/75 to-[#080e0c]/30" />
     <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8">
      <div className="max-w-3xl">
       <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-400/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-300"><span className="h-2 w-2 rounded-full bg-orange-400" /> {slides[slide].eyebrow}</p>
       <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">{slides[slide].title}</h1>
       <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">{slides[slide].copy}</p>
       <div className="mt-9 flex flex-wrap gap-3">
        <button onClick={() => jumpTo("contact")} className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600">Start a Conversation <ArrowRight className="ml-2" size={17} /></button>
        <button onClick={() => jumpTo("services")} className="inline-flex items-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">Explore Services</button>
       </div>
       <div className="mt-12 flex items-center gap-3">
        {slides.map((item, index) => <button key={item.image} aria-label={`Show slide ${index + 1}`} onClick={() => setSlide(index)} className={`h-1.5 rounded-full transition-all ${slide === index ? "w-12 bg-orange-500" : "w-6 bg-white/40"}`} />)}
        <span className="ml-2 text-xs tabular-nums text-white/60">0{slide + 1} / 0{slides.length}</span>
       </div>
      </div>
      <div className="hidden lg:block">
       <div className="ml-auto max-w-sm rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur-md">
        <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500"><CalendarDays /></div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">One event partner</p>
        <h2 className="mt-3 text-2xl font-bold">From planning to production.</h2>
        <p className="mt-3 text-sm leading-7 text-white/65">Strategy, coordination, event technology and on-site support — aligned around your goals.</p>
        <button onClick={() => jumpTo("about")} className="mt-7 inline-flex items-center text-sm font-bold text-white hover:text-orange-300">Discover Ntonarch Events <ArrowUpRight className="ml-2" size={16} /></button>
       </div>
      </div>
     </div>
     <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 via-amber-300 to-transparent" />
    </section>

    {/* Services overview */}
    <section id="services" className={`px-5 py-24 lg:px-8 ${dark ? "bg-[#151e1a]" : "bg-white"}`}>
     <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="What we do" title="Events designed around people, purpose and possibility" copy="Whether you are bringing a team together, celebrating a milestone or connecting a global audience, we help shape the experience." />
      <div className="mb-8 flex flex-wrap justify-center gap-2">
       {["All", "Physical", "Virtual", "Hybrid"].map((filter) => <button key={filter} onClick={() => setServiceFilter(filter)} className={`rounded-full px-5 py-2 text-xs font-bold transition ${serviceFilter === filter ? "bg-orange-500 text-white" : dark ? "bg-white/5 text-white/65 hover:bg-white/10" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{filter}</button>)}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
       {filteredServices.map(({ title, icon: Icon, copy, type }) => <article key={title} className={`group rounded-2xl border p-7 transition hover:-translate-y-1 hover:border-orange-500/50 ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-slate-50"}`}>
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500"><Icon size={23} /></div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">{type} experience</p>
        <h3 className="mt-2 text-xl font-bold">{title}</h3>
        <p className={`mt-3 text-sm leading-7 ${dark ? "text-white/55" : "text-slate-600"}`}>{copy}</p>
        <button onClick={() => jumpTo("contact")} className="mt-6 inline-flex items-center text-sm font-bold text-orange-500">Discuss your event <ArrowRight className="ml-2" size={15} /></button>
       </article>)}
      </div>
     </div>
    </section>

    {/* Portfolio */}
    <section id="portfolio" className={`px-5 py-24 lg:px-8 ${dark ? "bg-[#101714]" : "bg-slate-50"}`}>
     <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="Selected event categories" title="Experiences worth remembering" copy="Explore the types of events we plan and coordinate. Project photography and completed case studies can be added as approved materials become available." />
      <div className="mb-9 flex flex-wrap justify-center gap-2">
       {["All", "Corporate", "Social", "Virtual", "Hybrid", "Brand", "Entertainment"].map((filter) => <button key={filter} onClick={() => setPortfolioFilter(filter)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${portfolioFilter === filter ? "bg-orange-500 text-white" : dark ? "bg-white/5 text-white/65 hover:bg-white/10" : "bg-white text-slate-600 hover:bg-slate-100"}`}>{filter}</button>)}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
       {filteredPortfolio.map((item, index) => {
        const icons = [Building2, PartyPopper, Video, Layers3, Sparkles, Camera];
        const Icon = icons[portfolioCategories.findIndex((p) => p.title === item.title)];
        return <button key={item.title} onClick={() => setModal({ type: "portfolio", item })} className={`group overflow-hidden rounded-2xl border text-left transition hover:-translate-y-1 ${dark ? "border-white/10 bg-[#151e1a]" : "border-slate-200 bg-white"}`}>
         <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-[#26352e] to-[#111b16]">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, #ff8a4c 0, transparent 35%), radial-gradient(circle at 80% 70%, #779b8b 0, transparent 35%)" }} />
          <Icon className="relative text-orange-400 transition duration-300 group-hover:scale-110" size={54} strokeWidth={1.2} />
          <span className="absolute bottom-4 right-4 rounded-full bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/75">Category</span>
         </div>
         <div className="p-6"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">{item.category}</p><h3 className="mt-2 text-xl font-bold">{item.title}</h3><p className={`mt-2 text-sm leading-6 ${dark ? "text-white/55" : "text-slate-600"}`}>{item.copy}</p><span className="mt-5 inline-flex items-center text-sm font-bold text-orange-500">Explore category <ArrowUpRight className="ml-2" size={15} /></span></div>
        </button>;
       })}
      </div>
     </div>
    </section>

    {/* About */}
    <section id="about" className={`px-5 py-24 lg:px-8 ${dark ? "bg-[#1a2520]" : "bg-white"}`}>
     <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
      <div className="relative min-h-[400px] overflow-hidden rounded-3xl bg-[#17251e]">
       <img src="/images/ev1.webp" alt="Event production environment" className="absolute inset-0 h-full w-full object-cover opacity-60" />
       <div className="absolute inset-0 bg-gradient-to-t from-[#0a100d] via-transparent to-transparent" />
       <div className="absolute bottom-8 left-8 right-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">Ntonarch Acumen Network</p><h3 className="mt-3 max-w-md text-3xl font-bold text-white">Bringing people, ideas and experiences together.</h3></div>
      </div>
      <div>
       <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-orange-500">About Ntonarch Events</p>
       <h2 className="text-3xl font-bold leading-tight sm:text-4xl">A technology-enabled event management solution</h2>
       <p className={`mt-6 text-base leading-8 ${dark ? "text-white/60" : "text-slate-600"}`}>Ntonarch Events is part of Ntonarch Acumen Network. We bring event strategy, planning, coordination and technology together to help clients deliver meaningful physical, virtual and hybrid experiences.</p>
       <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {[
         [Zap, "Technology-first", "We consider the right tools and production systems for each event."],
         [Layers3, "End-to-end support", "From early planning and coordination through event delivery."],
         [Globe2, "Global perspective", "We consider the needs of audiences, guests and partners across locations."],
         [ShieldCheck, "Thoughtful execution", "We value preparation, clear communication and dependable delivery."],
        ].map(([Icon, title, copy]) => <div key={title} className="flex gap-3"><div className="mt-1 text-orange-500"><Icon size={20} /></div><div><h3 className="font-bold">{title}</h3><p className={`mt-1 text-sm leading-6 ${dark ? "text-white/55" : "text-slate-600"}`}>{copy}</p></div></div>)}
       </div>
      </div>
     </div>
    </section>

    {/* Detailed services */}
    <section className={`px-5 py-24 lg:px-8 ${dark ? "bg-[#101714]" : "bg-slate-50"}`}>
     <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="Our capabilities" title="A complete event support ecosystem" copy="Choose the support you need. The exact deliverables are agreed around your event brief, location and budget." />
      <div className="grid gap-4 md:grid-cols-2">
       {serviceGroups.map((group) => <article id={group.id} key={group.id} className={`scroll-mt-28 rounded-2xl border p-7 ${dark ? "border-white/10 bg-[#151e1a]" : "border-slate-200 bg-white"}`}>
        <h3 className="text-xl font-bold">{group.title}</h3><p className={`mt-2 text-sm leading-6 ${dark ? "text-white/55" : "text-slate-600"}`}>{group.intro}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">{group.items.map((item) => <li key={item} className={`flex items-start gap-2 text-sm ${dark ? "text-white/75" : "text-slate-700"}`}><Check className="mt-0.5 shrink-0 text-orange-500" size={15} />{item}</li>)}</ul>
       </article>)}
      </div>
     </div>
    </section>

    {/* Technology partners and testimonials intentionally data-ready */}
    <section className={`px-5 py-20 lg:px-8 ${dark ? "bg-[#151e1a]" : "bg-white"}`}>
     <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
      <div className={`rounded-2xl border p-8 ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-slate-50"}`}><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500"><Laptop /></div><h3 className="text-xl font-bold">Technology & Innovation Partners</h3><p className={`mt-3 text-sm leading-7 ${dark ? "text-white/55" : "text-slate-600"}`}>We collaborate with suitable technology and production providers based on each event’s requirements. Partner profiles will be published when approved details are available.</p></div>
      <div className={`rounded-2xl border p-8 ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-slate-50"}`}><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500"><Users /></div><h3 className="text-xl font-bold">Client Experiences</h3><p className={`mt-3 text-sm leading-7 ${dark ? "text-white/55" : "text-slate-600"}`}>We believe trust is earned through delivery. Approved client feedback and event case studies will appear here as they become available.</p></div>
     </div>
    </section>

    {/* Calendar */}
    <section
     id="calendar"
     className={`px-5 py-20 lg:px-8 ${dark ? "bg-[#101714]" : "bg-slate-50"
      }`}
    >
     <div
      className={`mx-auto max-w-5xl rounded-3xl border px-8 py-12 text-center sm:px-14 ${dark
        ? "border-white/10 bg-[#151e1a]"
        : "border-slate-200 bg-white"
       }`}
     >
      <CalendarDays className="mx-auto text-orange-500" size={34} />

      <h2 className="mt-5 text-3xl font-bold">
       Event Calendar
      </h2>

      <p
       className={`mx-auto mt-3 max-w-xl text-sm leading-7 ${dark ? "text-white/55" : "text-slate-600"
        }`}
      >
       There are no public event listings available at the moment.
       Check back for announcements, registration details and upcoming experiences.
      </p>

      <button
       onClick={() => jumpTo("contact")}
       className="mt-7 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white hover:bg-orange-600"
      >
       Enquire about an event
      </button>
     </div>
    </section>
    {/* Resources / FAQ */}
    <section id="resources" className={`px-5 py-24 lg:px-8 ${dark ? "bg-[#151e1a]" : "bg-white"}`}>
     <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
      <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">Resources</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Helpful answers for planning your next event</h2><p className={`mt-5 text-sm leading-7 ${dark ? "text-white/55" : "text-slate-600"}`}>Good events begin with good information. Explore common questions or speak with our team about your requirements.</p><div className="mt-8 space-y-3">{["Event Planning Blog", "Planning Tools", "Educational Content"].map((item) => <div key={item} className={`flex items-center justify-between rounded-xl border p-4 ${dark ? "border-white/10" : "border-slate-200"}`}><span className="text-sm font-semibold">{item}</span><span className="text-xs text-orange-500">Coming soon</span></div>)}</div></div>
      <div><h3 className="mb-5 text-xl font-bold">Frequently asked questions</h3><div className="space-y-3">{faqs.map(([question, answer], index) => <div key={question} className={`overflow-hidden rounded-xl border ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-slate-50"}`}><button onClick={() => setFaqOpen(faqOpen === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold"><span>{question}</span><ChevronDown className={`shrink-0 transition ${faqOpen === index ? "rotate-180 text-orange-500" : ""}`} size={18} /></button>{faqOpen === index && <p className={`px-5 pb-5 text-sm leading-7 ${dark ? "text-white/55" : "text-slate-600"}`}>{answer}</p>}</div>)}</div></div>
     </div>
    </section>

    {/* Investment */}
    <section id="investment" className="bg-[#202d26] px-5 py-20 lg:px-8">
     <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
      <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">Investment opportunity</p><h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Ntonarch Events Equipment Investment Opportunity</h2><p className="mt-4 text-sm leading-7 text-white/60">Explore a proposed capital investment in event infrastructure, equipment and technology. Review the opportunity and its terms before making any investment decision.</p></div>
      <a href="career-investment.html" className="inline-flex shrink-0 items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white hover:bg-orange-600">Explore Investment <ArrowUpRight className="ml-2" size={17} /></a>
     </div>
    </section>

    {/* Packages */}
    <section className={`px-5 py-24 lg:px-8 ${dark ? "bg-[#101714]" : "bg-slate-50"}`}>
     <div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Service packages" title="Flexible support for different event needs" copy="All package pricing is customised to the event scope, scale, location and production requirements." />
      <div className="grid gap-5 lg:grid-cols-3">
       {[
        ["Starter Package", "Essential planning services", ["Basic event planning", "Day-of coordination", "Vendor referrals", "Email support"]],
        ["Professional Package", "Comprehensive coordination", ["Full event planning", "Vendor management", "Timeline management", "Budget tracking", "Priority support"]],
        ["Premium Package", "Luxury, high-touch service", ["Everything in Professional", "Dedicated event manager", "Custom technology solutions", "Premium vendor coordination", "Extended support"]],
       ].map(([name, desc, features], index) => <article key={name} className={`relative rounded-2xl border p-8 ${index === 1 ? "border-orange-500 bg-orange-500/[0.07]" : dark ? "border-white/10 bg-[#151e1a]" : "border-slate-200 bg-white"}`}>
        {index === 1 && <span className="absolute right-6 top-6 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">Popular</span>}
        <h3 className="text-xl font-bold">{name}</h3><p className={`mt-3 text-sm ${dark ? "text-white/55" : "text-slate-600"}`}>{desc}</p><p className="mt-7 text-3xl font-extrabold">Custom</p><p className="mt-1 text-xs text-orange-500">Quoted to your brief</p>
        <ul className="mt-7 space-y-3">{features.map((feature) => <li key={feature} className="flex gap-2 text-sm"><Check size={16} className="shrink-0 text-orange-500" />{feature}</li>)}</ul>
        <button onClick={() => jumpTo("contact")} className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-bold ${index === 1 ? "bg-orange-500 text-white hover:bg-orange-600" : dark ? "border border-white/20 hover:bg-white/10" : "border border-slate-300 hover:bg-slate-100"}`}>Request a Quote</button>
       </article>)}
      </div>
     </div>
    </section>

    {/* Donation */}
    <section id="donate" className={`px-5 py-24 lg:px-8 ${dark ? "bg-[#151e1a]" : "bg-white"}`}>
     <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="Support our events" title="Help make meaningful experiences possible" copy="Contributions can support event equipment, community programmes and digital event innovation. Donation processing is not yet connected." />
      <div className="grid gap-7 lg:grid-cols-[1.1fr_.9fr]">
       <form onSubmit={handleDonation} className={`rounded-2xl border p-6 sm:p-9 ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-slate-50"}`}>
        <h3 className="text-xl font-bold">Make a contribution</h3>
        <div className="mt-7"><label className="mb-3 block text-sm font-semibold">Choose your impact area</label><div className="grid gap-3 sm:grid-cols-2">{[["general", "General Fund", "Events and operations"], ["equipment", "Equipment Fund", "Technology and tools"], ["community", "Community Events", "Local gatherings"], ["virtual", "Virtual Innovation", "Digital experiences"]].map(([value, label, desc]) => <label key={value} className={`cursor-pointer rounded-xl border p-4 ${donationTarget === value ? "border-orange-500 bg-orange-500/10" : dark ? "border-white/10" : "border-slate-200"}`}><input type="radio" name="target" value={value} checked={donationTarget === value} onChange={() => setDonationTarget(value)} className="sr-only" /><span className="block text-sm font-bold">{label}</span><span className={`mt-1 block text-xs ${dark ? "text-white/50" : "text-slate-500"}`}>{desc}</span></label>)}</div></div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Full name<input required value={donor.name} onChange={(e) => setDonor({ ...donor, name: e.target.value })} className={`mt-2 w-full rounded-lg border px-4 py-3 font-normal outline-none focus:border-orange-500 ${dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`} placeholder="Your name" /></label><label className="text-sm font-semibold">Email address<input required type="email" value={donor.email} onChange={(e) => setDonor({ ...donor, email: e.target.value })} className={`mt-2 w-full rounded-lg border px-4 py-3 font-normal outline-none focus:border-orange-500 ${dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`} placeholder="you@example.com" /></label></div>
        <div className="mt-7"><label className="mb-3 block text-sm font-semibold">Donation amount (USD)</label><div className="mb-3 flex flex-wrap gap-2">{[50, 100, 250, 500].map((amount) => <button key={amount} type="button" onClick={() => setDonationAmount(String(amount))} className={`rounded-lg border px-4 py-2 text-sm font-bold ${donationAmount === String(amount) ? "border-orange-500 bg-orange-500 text-white" : dark ? "border-white/10 hover:border-orange-500" : "border-slate-200 hover:border-orange-500"}`}>${amount}</button>)}</div><input required min="1" step="0.01" type="number" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} placeholder="Enter custom amount" className={`w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500 ${dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`} /></div>
        <div className="mt-7"><label className="mb-3 block text-sm font-semibold">Preferred payment method</label><div className="flex flex-wrap gap-3">{["card", "bank", "mobile"].map((method) => <label key={method} className={`cursor-pointer rounded-lg border px-5 py-3 text-sm font-semibold capitalize ${paymentMethod === method ? "border-orange-500 text-orange-500" : dark ? "border-white/10" : "border-slate-200"}`}><input type="radio" name="payment" value={method} checked={paymentMethod === method} onChange={() => setPaymentMethod(method)} className="sr-only" />{method}</label>)}</div></div>
        {donationNotice && <p role="status" className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-6 text-amber-300">{donationNotice}</p>}
        <button type="submit" className="mt-8 w-full rounded-full bg-orange-500 px-6 py-4 text-sm font-bold text-white hover:bg-orange-600">Continue to Donation</button>
        <p className={`mt-3 text-center text-xs ${dark ? "text-white/40" : "text-slate-500"}`}>Demo interface — no payment will be processed.</p>
       </form>
       <aside className={`rounded-2xl border p-7 sm:p-9 ${dark ? "border-white/10 bg-[#202d26]" : "border-slate-200 bg-slate-100"}`}>
        <HeartHandshake className="text-orange-500" size={34} /><h3 className="mt-5 text-2xl font-bold">Your support can help enable</h3><ul className="mt-7 space-y-4">{["Event production equipment and technology", "Professional team training and development", "Community event initiatives", "Innovation in virtual experiences", "More thoughtful and sustainable event practices"].map((item) => <li key={item} className="flex gap-3 text-sm leading-6"><Check className="mt-0.5 shrink-0 text-orange-500" size={17} />{item}</li>)}</ul>
        <div className="mt-9 rounded-xl border border-white/10 bg-black/10 p-5"><div className="flex items-center gap-2 text-sm font-bold"><ShieldCheck className="text-orange-400" size={18} /> Transparency matters</div><p className={`mt-2 text-sm leading-6 ${dark ? "text-white/55" : "text-slate-600"}`}>Before accepting contributions, publish the organisation’s donation terms, fund allocation process, reporting commitments and payment-provider details.</p></div>
       </aside>
      </div>
     </div>
    </section>

    {/* Contact */}
    <section id="contact" className={`px-5 py-24 lg:px-8 ${dark ? "bg-[#101714]" : "bg-slate-50"}`}>
     <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="Get started" title="Let’s bring your event vision to life" copy="Tell us a little about your plans. The more detail you share, the better we can understand the support you need." />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
       <form onSubmit={handleContact} className={`rounded-2xl border p-6 sm:p-9 ${dark ? "border-white/10 bg-[#151e1a]" : "border-slate-200 bg-white"}`}>
        <div className="grid gap-5 sm:grid-cols-2">
         <label className="text-sm font-semibold">Event type<select required name="eventType" defaultValue="" className={`mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500 ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-white"}`}><option value="" disabled>Select event type</option>{["Corporate Event", "Social Celebration", "Virtual Event", "Hybrid Event", "Other"].map((v) => <option key={v}>{v}</option>)}</select></label>
         <label className="text-sm font-semibold">Full name<input required name="name" className={`mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500 ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-white"}`} /></label>
         <label className="text-sm font-semibold">Email address<input required type="email" name="email" className={`mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500 ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-white"}`} /></label>
         <label className="text-sm font-semibold">Phone number<input type="tel" name="phone" className={`mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500 ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-white"}`} /></label>
         <label className="text-sm font-semibold">Event date<input type="date" name="date" className={`mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500 ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-white"}`} /></label>
         <label className="text-sm font-semibold">Expected attendance<select name="attendance" defaultValue="" className={`mt-2 w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500 ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-white"}`}><option value="">Select range</option>{["1–50", "51–100", "101–250", "251–500", "500+"].map((v) => <option key={v}>{v}</option>)}</select></label>
        </div>
        <label className="mt-5 block text-sm font-semibold">Tell us about your event<textarea required name="message" rows="5" className={`mt-2 w-full resize-y rounded-lg border px-4 py-3 outline-none focus:border-orange-500 ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-white"}`} /></label>
        {contactSent && <p role="status" className="mt-5 rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-500">Your form passed the front-end demo. Connect an email service or backend to receive enquiries.</p>}
        <button type="submit" className="mt-6 inline-flex items-center rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white hover:bg-orange-600">Submit Inquiry <ArrowRight className="ml-2" size={16} /></button>
        <p className={`mt-3 text-xs ${dark ? "text-white/40" : "text-slate-500"}`}>This form is not connected to an inbox yet.</p>
       </form>
       <div className="space-y-5">
        <div className={`rounded-2xl border p-7 ${dark ? "border-white/10 bg-[#151e1a]" : "border-slate-200 bg-white"}`}><h3 className="text-xl font-bold">Let’s talk</h3><p className={`mt-3 text-sm leading-7 ${dark ? "text-white/55" : "text-slate-600"}`}>Have a question or a project in mind? Send us an enquiry and share the details of your event.</p><div className="mt-7 space-y-5">{[[Mail, "Email", "Use the contact form to send an enquiry."], [Phone, "Phone", "Contact details can be added here."], [MapPin, "Location", "Serving clients across locations, subject to project scope."], [Clock3, "Availability", "Arrange a consultation with our team."]].map(([Icon, title, copy]) => <div key={title} className="flex gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500"><Icon size={18} /></div><div><h4 className="text-sm font-bold">{title}</h4><p className={`mt-1 text-sm ${dark ? "text-white/50" : "text-slate-600"}`}>{copy}</p></div></div>)}</div></div>
        <div className="rounded-2xl bg-orange-500 p-7 text-white"><h3 className="text-xl font-bold">Have an event in mind?</h3><p className="mt-2 text-sm leading-6 text-white/80">Start with your goals, preferred date and expected audience. We’ll take it from there.</p><button onClick={() => jumpTo("services")} className="mt-5 inline-flex items-center text-sm font-bold">Review our services <ArrowRight className="ml-2" size={16} /></button></div>
       </div>
      </div>
     </div>
    </section>

    {/* Careers */}
    <section id="join-team" className={`px-5 py-24 lg:px-8 ${dark ? "bg-[#1a2520]" : "bg-white"}`}>
     <div className="mx-auto max-w-7xl">
      <SectionHeading eyebrow="Join the team" title="Help create experiences that bring people together" copy="Be part of a technology-enabled event team that values creativity, preparation, collaboration and thoughtful execution." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[
       ["Technology-first", "Work with event platforms, production technology and digital experiences."],
       ["Global perspective", "Contribute to events with diverse audiences and requirements."],
       ["Innovation culture", "Bring ideas, curiosity and practical problem-solving to the work."],
       ["Career growth", "Build skills and explore opportunities across the Ntonarch network."],
      ].map(([title, copy]) => <div key={title} className={`rounded-2xl border p-6 ${dark ? "border-white/10 bg-[#101714]" : "border-slate-200 bg-slate-50"}`}><div className="mb-5 h-1 w-10 rounded-full bg-orange-500" /><h3 className="font-bold">{title}</h3><p className={`mt-2 text-sm leading-6 ${dark ? "text-white/55" : "text-slate-600"}`}>{copy}</p></div>)}</div>
      <div className="mt-9 text-center"><a href="career.html" className="inline-flex items-center rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white hover:bg-orange-600">Career Applications <ArrowUpRight className="ml-2" size={16} /></a></div>
     </div>
    </section>
   </main>

   {/* Footer */}
   <footer className="bg-[#080e0c] px-5 pb-8 pt-16 text-white lg:px-8">
    <div className="mx-auto max-w-7xl">
     <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
      <div className="lg:col-span-2"><div className="flex items-center gap-3"><img src="/images/Ntonarch%20logo1.png" alt="Ntonarch logo" className="h-10 w-10 object-contain" /><span className="font-extrabold tracking-widest">NTONARCH <span className="text-orange-500">EVENTS</span></span></div><p className="mt-5 max-w-sm text-sm leading-7 text-white/50">Technology-enabled event planning and coordination for physical, virtual and hybrid experiences.</p><div className="mt-6 flex gap-3"><a href="mailto:" aria-label="Email Ntonarch Events" className="rounded-full border border-white/15 p-3 hover:border-orange-500 hover:text-orange-400"><Mail size={16} /></a><a href="#contact" aria-label="Contact Ntonarch Events" className="rounded-full border border-white/15 p-3 hover:border-orange-500 hover:text-orange-400"><Phone size={16} /></a></div></div>
      {[
       ["Explore", [["Our Story", "about"], ["Services", "services"], ["Portfolio", "portfolio"], ["Contact", "contact"]]],
       ["Services", [["Strategy & Consultation", "services-strategy"], ["Physical Events", "services-physical"], ["Virtual Events", "services-virtual"], ["Hybrid Solutions", "services-hybrid"], ["Event Technology", "services-technology"]]],
       ["Ntonarch Network", [["Conglomerate", "index.html"], ["Media", "media.html"], ["Market", "market.html"], ["Engineering", "engineering.html"], ["Computers", "computer.html"], ["Properties", "properties.html"]]],
      ].map(([heading, links]) => <div key={heading}><h4 className="text-sm font-bold">{heading}</h4><ul className="mt-5 space-y-3">{links.map(([label, target]) => <li key={label}><button onClick={() => target.startsWith("services-") || ["about", "services", "portfolio", "contact"].includes(target) ? jumpTo(target) : (window.location.href = target)} className="text-left text-sm text-white/50 transition hover:text-orange-400">{label}</button></li>)}</ul></div>)}
     </div>
     <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Ntonarch Events. All rights reserved.</p><div className="flex flex-wrap gap-5"><button onClick={() => setModal({ type: "legal", key: "privacy" })} className="hover:text-white">Privacy Policy</button><button onClick={() => setModal({ type: "legal", key: "terms" })} className="hover:text-white">Terms of Service</button><button onClick={() => setModal({ type: "legal", key: "accessibility" })} className="hover:text-white">Accessibility</button><a href="blog.html" className="hover:text-white">Blog</a><a href="system-status.html" className="hover:text-white">System Status</a></div></div>
    </div>
   </footer>

   {/* Dialogs */}
   {modal && <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4" onMouseDown={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
    <div role="dialog" aria-modal="true" className={`relative my-8 w-full max-w-2xl rounded-2xl border p-7 shadow-2xl sm:p-9 ${dark ? "border-white/10 bg-[#151e1a] text-white" : "border-slate-200 bg-white text-slate-900"}`}>
     <button onClick={closeModal} aria-label="Close dialog" className="absolute right-5 top-5 rounded-full p-2 hover:bg-white/10"><X size={20} /></button>
     {modal.type === "portfolio" ? <><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">{modal.item.category}</p><h2 className="mt-3 pr-8 text-2xl font-bold">{modal.item.title}</h2><p className={`mt-4 text-sm leading-7 ${dark ? "text-white/60" : "text-slate-600"}`}>{modal.item.copy}</p><div className={`mt-6 rounded-xl border border-dashed p-6 text-sm leading-6 ${dark ? "border-white/20 text-white/50" : "border-slate-300 text-slate-500"}`}>Project photos and case-study details have not been supplied yet. Add approved project media and descriptions here when available.</div><button onClick={() => { closeModal(); jumpTo("contact"); }} className="mt-6 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white">Discuss a similar event</button></> : <><h2 className="pr-8 text-2xl font-bold">{legalContent[modal.key].title}</h2><div className="mt-6 max-h-[65vh] space-y-5 overflow-y-auto pr-2">{legalContent[modal.key].body.map(([heading, copy]) => <div key={heading}><h3 className="font-bold">{heading}</h3><p className={`mt-2 text-sm leading-7 ${dark ? "text-white/60" : "text-slate-600"}`}>{copy}</p></div>)}</div><button onClick={closeModal} className="mt-7 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white">Close</button></>}
    </div>
   </div>}
  </div>
 );
}

export default Events;