
import { useEffect, useState } from "react";
import {
 Menu,
 X,
 ArrowRight,
 ChevronLeft,
 ChevronRight,
 GraduationCap,
 Heart,
 Handshake,
 Users,
 Building2,
 BriefcaseBusiness,
 BookOpen,
 Sprout,
 ShieldCheck,
 Globe,
 Target,
 TrendingUp,
 Search,
 DollarSign,
 Gift,
 Lightbulb,
 HeartPulse,
 Sun,
 CalendarDays,
 MapPin,
 Clock,
 Award,
 School,
 Leaf,
 HandHeart,
 Megaphone,
 GraduationCap as GraduationIcon,
} from "lucide-react";

const heroImages = [
 "/assets/nga.png",
 "/assets/ng2.jpg",
 "/assets/ng1.jpg",
];

const sdgs = [
 {
  number: "1",
  title: "No Poverty",
  description: "End poverty in all its forms everywhere.",
  color: "#E5243B",
 },
 {
  number: "3",
  title: "Good Health & Well-being",
  description: "Ensure healthy lives and promote well-being for all.",
  color: "#4C9F38",
 },
 {
  number: "4",
  title: "Quality Education",
  description: "Ensure inclusive and equitable quality education.",
  color: "#C5192D",
 },
 {
  number: "8",
  title: "Decent Work & Economic Growth",
  description: "Promote sustained economic growth and employment.",
  color: "#A21942",
 },
 {
  number: "10",
  title: "Reduced Inequalities",
  description: "Reduce inequality within and among countries.",
  color: "#DD1367",
 },
 {
  number: "11",
  title: "Sustainable Cities & Communities",
  description: "Make cities inclusive, safe, and sustainable.",
  color: "#FD9D24",
 },
];

const initiatives = [
 {
  icon: GraduationCap,
  title: "Education Support",
  description:
   "Providing schoolchildren with essential writing materials and educational resources to enhance learning opportunities and academic success.",
  features: ["School Supplies", "Learning Resources", "Academic Support"],
 },
 {
  icon: School,
  title: "Higher Education Assistance",
  description:
   "Supporting tertiary students through scholarships, mentorship, academic resources, and essential supplies including sanitary products.",
  features: ["Scholarships", "Mentorship", "Student Support"],
 },
 {
  icon: Building2,
  title: "Community Development",
  description:
   "Leading awareness campaigns, infrastructure improvements, and skill-building programs to strengthen community foundations.",
  features: ["Infrastructure", "Skill Building", "Awareness"],
 },
 {
  icon: Users,
  title: "Youth & Women Empowerment",
  description:
   "Equipping young people and women with tools, training, and opportunities for self-sufficiency, social security, engineering, and modern agricultural practices.",
  features: ["Skills Training", "Empowerment", "Agriculture"],
 },
 {
  icon: ShieldCheck,
  title: "Social Engineering",
  description:
   "Engaging student unions, youth groups, and community networks through targeted training, webinars, and symposiums to improve awareness of social engineering threats, foster verification skills, and strengthen collective resilience.",
  features: [
   "Awareness & Recognition",
   "Verification & Response",
   "Community Resilience",
  ],
 },
];

const navLinks = [
 { label: "Home", href: "#home" },
 { label: "About", href: "#about" },
 { label: "Initiatives", href: "#initiatives" },
 { label: "Gallery", href: "#gallery" },
 { label: "Impact", href: "#impact" },
 { label: "Donate", href: "#donate" },
 { label: "Partnership", href: "#partnership" },
 { label: "Career", href: "career.html" },
 { label: "Contact", href: "#contact" },
];
const galleryCategories = [
 {
  id: "student-support",
  title: "Student Support Program",
  icon: GraduationCap,
  images: ["/assets/fp.png", "/assets/fp2.png", "/assets/fp3.png"],
  events: [
   {
    title: "School Supplies Distribution",
    location: "Rivers State Primary School, Port Harcourt",
    date: "March 15, 2024",
    time: "10:00 AM",
    description:
     "Providing essential school supplies to support students' academic journey and ensure equal access to educational resources.",
   },
   {
    title: "Learning Materials Workshop",
    location: "Community Center, Okrika",
    date: "March 20, 2024",
    time: "2:00 PM",
    description:
     "An interactive workshop teaching students how to use their learning materials effectively and develop better study techniques.",
   },
   {
    title: "Educational Assessment",
    location: "Rivers State Secondary School",
    date: "March 25, 2024",
    time: "9:00 AM",
    description:
     "Evaluating student progress and identifying areas where additional support is needed for academic excellence.",
   },
  ],
 },
 {
  id: "community-event",
  title: "Community Events",
  icon: Users,
  images: ["/assets/sc1.jpg", "/assets/sce.jpg", "/assets/fp.png"],
  events: [
   {
    title: "Annual Community Gathering",
    location: "Rivers State Convention Center",
    date: "June 10, 2024",
    time: "5:00 PM",
    description:
     "An annual gathering bringing together community leaders, stakeholders, and residents to discuss development initiatives.",
   },
   {
    title: "Leadership Workshop",
    location: "Hotel Presidential, Port Harcourt",
    date: "June 15, 2024",
    time: "9:00 AM",
    description:
     "A leadership development workshop for community leaders, focusing on effective governance and community building.",
   },
   {
    title: "Cultural Celebration",
    location: "Liberation Stadium",
    date: "June 20, 2024",
    time: "6:00 PM",
    description:
     "Celebrating Rivers State cultural heritage with traditional music, dance, and community unity activities.",
   },
  ],
 },
 {
  id: "skills-development",
  title: "Skills Development",
  icon: BriefcaseBusiness,
  images: ["/assets/fp.png", "/assets/fp2.png", "/assets/fp3.png"],
  events: [
   {
    title: "Technical Training Program",
    location: "Rivers State Technical College",
    date: "July 5, 2024",
    time: "8:00 AM",
    description:
     "Technical skills training for young people in engineering, electronics, and modern technology applications.",
   },
   {
    title: "Digital Literacy Workshop",
    location: "Port Harcourt ICT Hub",
    date: "July 12, 2024",
    time: "10:00 AM",
    description:
     "Teaching digital literacy skills, computer applications, and online business fundamentals to young participants.",
   },
   {
    title: "Certification Ceremony",
    location: "Government House, Port Harcourt",
    date: "July 20, 2024",
    time: "3:00 PM",
    description:
     "Awarding certificates to successful participants and launching their career development initiatives.",
   },
  ],
 },
 {
  id: "library-project",
  title: "Library Project",
  icon: BookOpen,
  images: ["/assets/fp.png", "/assets/fp2.png", "/assets/fp3.png"],
  events: [
   {
    title: "Library Construction",
    location: "Andoni Rural Community",
    date: "August 2, 2024",
    time: "7:00 AM",
    description:
     "Building community libraries to promote reading culture and provide access to educational resources.",
   },
   {
    title: "Book Donation Drive",
    location: "Opobo Kingdom Library",
    date: "August 8, 2024",
    time: "12:00 PM",
    description:
     "A community book donation initiative to stock libraries with diverse educational and recreational reading materials.",
   },
   {
    title: "Library Opening Ceremony",
    location: "Degema Community Library",
    date: "August 15, 2024",
    time: "4:00 PM",
    description:
     "Opening a new community library with reading programs and literacy initiatives for all ages.",
   },
  ],
 },
 {
  id: "health-outreach",
  title: "Health Outreach",
  icon: HeartPulse,
  images: ["/assets/fp.png", "/assets/fp2.png", "/assets/fp3.png"],
  events: [
   {
    title: "Free Health Screening",
    location: "Abua Primary Health Center",
    date: "September 3, 2024",
    time: "8:00 AM",
    description:
     "Providing free health screenings, basic medical care, and health education to rural community members.",
   },
   {
    title: "Vaccination Campaign",
    location: "Khana Community Health Center",
    date: "September 10, 2024",
    time: "9:00 AM",
    description:
     "A vaccination campaign for children and adults to help prevent communicable diseases and promote community health.",
   },
   {
    title: "Health Education Workshop",
    location: "Gokana Community Hall",
    date: "September 17, 2024",
    time: "2:00 PM",
    description:
     "Workshops on hygiene, nutrition, and disease prevention to improve community health awareness.",
   },
  ],
 },
 {
  id: "community-outreach",
  title: "Community Outreach",
  icon: HandHeart,
  images: ["/assets/fp.png", "/assets/fp2.png", "/assets/fp3.png"],
  events: [
   {
    title: "Infrastructure Development",
    location: "Ahoada Rural Community",
    date: "February 10, 2024",
    time: "8:00 AM",
    description:
     "A community-led infrastructure improvement project focusing on road repairs and drainage systems.",
   },
   {
    title: "Clean Water Initiative",
    location: "Bonny Island Community",
    date: "February 18, 2024",
    time: "11:00 AM",
    description:
     "Installing clean water facilities to improve access to safe drinking water for rural communities.",
   },
   {
    title: "Community Garden Project",
    location: "Ogbakiri Village",
    date: "February 25, 2024",
    time: "7:00 AM",
    description:
     "Establishing community gardens to promote food security and sustainable agricultural practices.",
   },
  ],
 },
 {
  id: "women-empowerment",
  title: "Women Empowerment",
  icon: Users,
  images: ["/assets/fp.png", "/assets/fp2.png", "/assets/fp3.png"],
  events: [
   {
    title: "Vocational Skills Training",
    location: "Women Development Center, Port Harcourt",
    date: "January 12, 2024",
    time: "1:00 PM",
    description:
     "Vocational training for women in tailoring, craft-making, and entrepreneurship skills.",
   },
   {
    title: "Business Development Workshop",
    location: "Eleme Community Hall",
    date: "January 20, 2024",
    time: "10:00 AM",
    description:
     "Teaching women essential business skills, financial literacy, and micro-enterprise development strategies.",
   },
   {
    title: "Graduation Ceremony",
    location: "Rivers State Cultural Center",
    date: "January 28, 2024",
    time: "3:00 PM",
    description:
     "Celebrating women who completed the empowerment program and launching their businesses.",
   },
  ],
 },
 {
  id: "scholarship-program",
  title: "Scholarship Program",
  icon: Award,
  images: ["/assets/fp.png", "/assets/fp2.png", "/assets/fp3.png"],
  events: [
   {
    title: "Scholarship Award Ceremony",
    location: "University of Port Harcourt",
    date: "April 5, 2024",
    time: "11:00 AM",
    description:
     "An annual scholarship presentation to outstanding students pursuing higher education in various fields.",
   },
   {
    title: "Mentorship Session",
    location: "Rivers State University",
    date: "April 12, 2024",
    time: "2:00 PM",
    description:
     "Connecting scholarship recipients with industry mentors for career guidance and professional development.",
   },
   {
    title: "Academic Excellence Recognition",
    location: "State Government House",
    date: "April 20, 2024",
    time: "4:00 PM",
    description:
     "Recognizing the academic achievements of scholarship recipients and their contributions to society.",
   },
  ],
 },
 {
  id: "agriculture-training",
  title: "Agriculture Training",
  icon: Sprout,
  images: ["/assets/fp.png", "/assets/fp2.png", "/assets/fp3.png"],
  events: [],
 },
];

function SectionHeading({ eyebrow, title, description, light = false }) {
 return (
  <div className="mx-auto mb-14 max-w-3xl text-center">
   {eyebrow && (
    <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#ff6a00]">
     {eyebrow}
    </span>
   )}

   <h2
    className={`mb-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-[#10251d]"
     }`}
   >
    {title}
   </h2>

   {description && (
    <p
     className={`text-sm leading-8 sm:text-base ${light ? "text-gray-300" : "text-gray-600"
      }`}
    >
     {description}
    </p>
   )}
  </div>
 );
}

export default function Foundation() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [heroIndex, setHeroIndex] = useState(0);
 const [galleryIndexes, setGalleryIndexes] = useState({});

 useEffect(() => {
  const interval = setInterval(() => {
   setHeroIndex((prev) => (prev + 1) % heroImages.length);
  }, 5500);

  return () => clearInterval(interval);
 }, []);

 const missionValues = [
  {
   icon: Target,
   title: "Our Mission",
   description:
    "To create sustainable change through purposeful community development and social empowerment initiatives.",
  },
  {
   icon: Heart,
   title: "Our Vision",
   description:
    "Building a world of opportunity, education, and empowerment, one community at a time.",
  },
  {
   icon: Handshake,
   title: "Our Values",
   description:
    "Collaboration, transparency, sustainability, and community-centered impact.",
  },
 ];

 return (
   
   <main className="overflow-hidden bg-white text-[#10251d]">
    {/* NAVIGATION */}
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#071c15]/95 text-white shadow-lg backdrop-blur-xl">
     <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
      <a href="#home" className="flex shrink-0 items-center gap-3">
       <img
        src="/images/Ntonarch%20logo1.png"
        alt="NTONARCH Foundation Logo"
        className="h-11 w-11 object-contain"
       />

       <h2 className="text-base font-extrabold tracking-wide sm:text-lg">
        NTONARCH
        <span className="block text-xs font-semibold tracking-[0.2em] text-[#ff6a00]">
         FOUNDATION
        </span>
       </h2>
      </a>

      {/* DESKTOP NAVIGATION */}
      <div className="hidden items-center gap-5 xl:flex">
       {navLinks.map((link) => (
        <a
         key={link.label}
         href={link.href}
         className="text-xs font-semibold text-gray-300 transition hover:text-[#ff6a00]"
        >
         {link.label}
        </a>
       ))}
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
       onClick={() => setMenuOpen((prev) => !prev)}
       className="rounded-lg border border-white/15 p-2 text-white xl:hidden"
       aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
       {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>
     </div>

     {/* MOBILE NAVIGATION */}
     {menuOpen && (
      <div className="border-t border-white/10 bg-[#071c15] px-5 py-5 xl:hidden">
       <div className="mx-auto flex max-w-7xl flex-col gap-1">
        {navLinks.map((link) => (
         <a
          key={link.label}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-[#ff6a00]"
         >
          {link.label}
         </a>
        ))}
       </div>
      </div>
     )}
    </nav>

    {/* HERO SECTION */}
    <section
     id="home"
     className="relative flex min-h-[760px] items-center overflow-hidden bg-[#ff6a00] pt-24 text-white lg:min-h-[850px]"
    >
     {/* BACKGROUND SLIDES */}
     <div className="absolute inset-0">
      {heroImages.map((image, index) => (
       <div
        key={image}
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ${heroIndex === index ? "opacity-100" : "opacity-0"
         }`}
        style={{ backgroundImage: `url("${image}")` }}
       />
      ))}
     </div>

     <div className="absolute inset-0 bg-gradient-to-r from-[#061b13]/95 via-[#061b13]/75 to-[#061b13]/30" />
     <div className="absolute inset-0 bg-gradient-to-t from-[#061b13] via-transparent to-[#061b13]/20" />

     {/* HERO CONTENT */}
     <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-36 pt-20 lg:px-8">
      <div className="max-w-3xl">
       <span className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#ff6a00]/30 bg-[#ff6a00]/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff6a00]">
        <Heart size={15} />
        Purpose • People • Progress
       </span>

       <h1 className="mb-7 text-4xl font-extrabold leading-[1.12] sm:text-5xl lg:text-7xl">
        Driving Social Impact Through{" "}
        <span className="text-[#ff6a00]">
         Community Empowerment.
        </span>
       </h1>

       <p className="mb-10 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
        Creating sustainable change in education, community
        development, and social welfare.
       </p>

       <div className="flex flex-wrap gap-4">
        <a
         href="#donate"
         className="inline-flex items-center gap-3 rounded-lg bg-[#ff6a00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#ff6a00]"
        >
         Donate Now
         <ArrowRight size={18} />
        </a>

        <a
         href="#initiatives"
         className="inline-flex items-center gap-3 rounded-lg border border-white/40 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
        >
         Our Initiatives
         <ArrowRight size={18} />
        </a>
       </div>
      </div>
     </div>

     {/* HERO SLIDE INDICATORS */}
     <div className="absolute bottom-36 right-6 z-10 flex gap-2 lg:right-12">
      {heroImages.map((image, index) => (
       <button
        key={image}
        onClick={() => setHeroIndex(index)}
        aria-label={`Show hero image ${index + 1}`}
        className={`h-1.5 rounded-full transition-all ${heroIndex === index
          ? "w-10 bg-[#ff6a00]"
          : "w-4 bg-white/50 hover:bg-white"
         }`}
       />
      ))}
     </div>

     {/* HERO STATS */}
     <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#061b13]/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/10 px-5 py-7 lg:px-8 lg:py-9">
       {[
        { value: "34+", label: "Students Supported" },
        { value: "7+", label: "Communities Reached" },
        { value: "5+", label: "Active Programs" },
       ].map((stat) => (
        <div key={stat.label} className="px-3 text-center">
         <h3 className="mb-2 text-2xl font-extrabold text-[#ff6a00] sm:text-4xl">
          {stat.value}
         </h3>
         <p className="text-[10px] font-medium text-gray-300 sm:text-sm">
          {stat.label}
         </p>
        </div>
       ))}
      </div>
     </div>
    </section>

    {/* ABOUT SECTION */}
    <section id="about" className="px-5 py-24 lg:px-8">
     <div className="mx-auto max-w-7xl">
      <SectionHeading
       eyebrow="Who We Are"
       title="About NTONARCH Foundation"
       description="A proud subsidiary of NTONARCH ACUMEN NETWORK (NAN), committed to meaningful community development and sustainable social impact."
      />

      <div className="mx-auto max-w-5xl">
       <div className="rounded-3xl border border-[#ff6a00] bg-[#f5faf6] p-7 sm:p-10">
        <div className="mb-5 flex items-center gap-3 text-[#ff6a00]">
         <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6a00]">
          <HandHeart size={23} />
         </span>
         <h3 className="text-xl font-extrabold">Our Commitment</h3>
        </div>

        <p className="text-sm leading-8 text-gray-700 sm:text-base">
         NTONARCH FOUNDATION is committed to driving social impact
         and empowering communities through strategic initiatives
         that uplift individuals and strengthen societies. Our
         mission is to foster sustainable, long-term change by
         addressing critical challenges in education, community
         development, and social welfare.
        </p>
       </div>

       {/* SDG ALIGNMENT */}
       <div className="mt-16">
        <div className="mb-8 text-center">
         <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#ff6a00]">
          Global Development Priorities
         </span>
         <h3 className="text-2xl font-extrabold sm:text-3xl">
          Aligned with United Nations Sustainable Development Goals
         </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
         {sdgs.map((sdg) => (
          <div
           key={sdg.number}
           className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
           <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl font-extrabold text-white"
            style={{ backgroundColor: sdg.color }}
           >
            {sdg.number}
           </div>

           <div>
            <h4 className="mb-1 font-bold">{sdg.title}</h4>
            <p className="text-xs leading-6 text-gray-500">
             {sdg.description}
            </p>
           </div>
          </div>
         ))}
        </div>
       </div>

       {/* FOUNDATION PHILOSOPHY */}
       <div className="my-16 rounded-3xl bg-[#0c2b20] p-8 text-white sm:p-10">
        <div className="mb-4 flex items-center gap-3 text-[#ff6a00]">
         <Globe size={24} />
         <h3 className="text-xl font-extrabold">
          Our Foundation Philosophy
         </h3>
        </div>

        <p className="text-sm leading-8 text-gray-300 sm:text-base">
         Grounded in grassroots engagement, we believe in empowering
         communities and driving sustainable change through local
         action — working together for a better, more sustainable
         future.
        </p>
       </div>

       {/* MISSION, VISION AND VALUES */}
       <div className="grid gap-5 md:grid-cols-3">
        {missionValues.map((item) => {
         const Icon = item.icon;

         return (
          <div
           key={item.title}
           className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
           <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6a00] text-[#ff6a00]">
            <Icon size={26} />
           </div>

           <h3 className="mb-3 text-xl font-extrabold">
            {item.title}
           </h3>

           <p className="text-sm leading-7 text-gray-600">
            {item.description}
           </p>
          </div>
         );
        })}
       </div>
      </div>
     </div>
    </section>

    {/* INITIATIVES SECTION */}
    <section
     id="initiatives"
     className="bg-[#f5faf6] px-5 py-24 lg:px-8"
    >
     <div className="mx-auto max-w-7xl">
      <SectionHeading
       eyebrow="What We Do"
       title="Our Core Initiatives"
       description="Comprehensive programs designed to create lasting impact and strengthen communities."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {initiatives.map((item) => {
        const Icon = item.icon;

        return (
         <article
          key={item.title}
          className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#ff6a00] hover:shadow-xl"
         >
          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6a00] text-[#ff6a00] transition group-hover:bg-[#ff6a00] group-hover:text-white">
           <Icon size={27} />
          </div>

          <h3 className="mb-4 text-xl font-extrabold">
           {item.title}
          </h3>

          <p className="mb-7 text-sm leading-7 text-gray-600">
           {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
           {item.features.map((feature) => (
            <span
             key={feature}
             className="rounded-full bg-[#ff6a00] px-3 py-2 text-[10px] font-bold text-[#ff6a00]"
            >
             {feature}
            </span>
           ))}
          </div>
         </article>
        );
       })}
      </div>
     </div>
    </section>
    {/* GALLERY */}
    <section id="gallery" className="bg-[#f5f8f5] py-24">
     <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
       eyebrow="Our Activities"
       title="Moments That Make a Difference"
       description="Explore activities and programs connected to our commitment to education, empowerment, and community development."
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2">
       {galleryCategories.map((category) => {
        const Icon = category.icon;
        const currentIndex = galleryIndexes[category.id] ?? 0;
        const currentEvent = category.events[currentIndex];

        const changeSlide = (direction) => {
         setGalleryIndexes((previous) => {
          const current = previous[category.id] ?? 0;
          const total = category.images.length;

          return {
           ...previous,
           [category.id]: (current + direction + total) % total,
          };
         });
        };

        return (
         <article
          key={category.id}
          className="overflow-hidden rounded-2xl border border-[#e4ebe5] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
         >
          <div className="relative h-64 overflow-hidden bg-[#e8eee9]">
           <img
            src={category.images[currentIndex]}
            alt={category.title}
            className="h-full w-full object-cover transition duration-500"
           />

           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

           <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff6a00]">
             <Icon size={21} />
            </span>
            <h3 className="text-xl font-bold">{category.title}</h3>
           </div>

           <button
            type="button"
            onClick={() => changeSlide(-1)}
            aria-label={`Previous ${category.title} image`}
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#123b2c] transition hover:bg-[#ff6a00] hover:text-white"
           >
            <ChevronLeft size={21} />
           </button>

           <button
            type="button"
            onClick={() => changeSlide(1)}
            aria-label={`Next ${category.title} image`}
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#123b2c] transition hover:bg-[#ff6a00] hover:text-white"
           >
            <ChevronRight size={21} />
           </button>

           <div className="absolute bottom-5 right-5 flex gap-2">
            {category.images.map((_, index) => (
             <button
              key={index}
              type="button"
              onClick={() =>
               setGalleryIndexes((previous) => ({
                ...previous,
                [category.id]: index,
               }))
              }
              aria-label={`Show image ${index + 1}`}
              className={`h-2 rounded-full transition-all ${currentIndex === index
                ? "w-6 bg-white"
                : "w-2 bg-white/60"
               }`}
             />
            ))}
           </div>
          </div>

          <div className="p-6">
           {currentEvent ? (
            <>
             <div className="mb-4 flex flex-wrap gap-4 text-xs font-medium text-[#648074]">
              <span className="flex items-center gap-1.5">
               <CalendarDays size={14} />
               {currentEvent.date}
              </span>
              <span className="flex items-center gap-1.5">
               <Clock size={14} />
               {currentEvent.time}
              </span>
             </div>

             <h4 className="text-lg font-bold text-[#153b2c]">
              {currentEvent.title}
             </h4>

             <p className="mt-2 flex items-center gap-2 text-sm text-[#648074]">
              <MapPin size={15} className="shrink-0" />
              {currentEvent.location}
             </p>

             <p className="mt-4 text-sm leading-7 text-[#66776e]">
              {currentEvent.description}
             </p>
            </>
           ) : (
            <p className="text-sm leading-7 text-[#66776e]">
             Explore moments from our agriculture training activities and
             community development efforts.
            </p>
           )}

           <div className="mt-5 flex items-center justify-between border-t border-[#edf1ed] pt-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#789084]">
             {currentIndex + 1} / {category.images.length}
            </span>

            <span className="text-sm font-semibold text-[#ff6a00]">
             {category.title}
            </span>
           </div>
          </div>
         </article>
        );
       })}
      </div>
     </div>
    </section>

    {/* IMPACT & STRATEGY */}
    <section id="impact" className="bg-[#0c2b20] py-24 text-white">
     <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
       eyebrow="Our Approach"
       title="Creating Impact Through Strategy"
       description="We focus on practical approaches, meaningful partnerships, and sustainable programs to address community needs."
       light
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
       {[
        {
         icon: Handshake,
         title: "Strategic Alliances",
         description:
          "Form strategic alliances with NGOs and international organizations to maximize reach and effectiveness.",
        },
        {
         icon: DollarSign,
         title: "Funding & Grants",
         description:
          "Pursue donor funding and grants through transparent processes and measurable impact reporting.",
        },
        {
         icon: Target,
         title: "High-Impact Programs",
         description:
          "Implement evidence-based programs in education, healthcare, and youth empowerment.",
        },
        {
         icon: Search,
         title: "Community Assessment",
         description:
          "Conduct structured surveys and stakeholder engagements to understand local needs.",
        },
        {
         icon: Globe,
         title: "SDG Alignment",
         description:
          "Align programs with the UN Sustainable Development Goals to support meaningful global progress.",
        },
        {
         icon: TrendingUp,
         title: "Trend Monitoring",
         description:
          "Monitor social trends to adapt initiatives in education, health, and economic empowerment.",
        },
       ].map((item) => {
        const Icon = item.icon;

        return (
         <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#ff6a00]/50 hover:bg-white/[0.07]"
         >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff6a00]/15 text-[#ff6a00]">
           <Icon size={23} />
          </div>

          <h3 className="text-lg font-bold">{item.title}</h3>

          <p className="mt-3 text-sm leading-7 text-white/65">
           {item.description}
          </p>
         </div>
        );
       })}
      </div>
     </div>
    </section>

    {/* DONATION */}
    <section id="donate" className="bg-[#f5f8f5] py-24">
     <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-[#123b2c] px-7 py-16 text-center text-white sm:px-14">
       <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-white/[0.04]" />
       <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[50px] border-white/[0.04]" />

       <div className="relative mx-auto max-w-3xl">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff6a00]/20 text-[#ff6a00]">
         <Heart size={30} />
        </span>

        <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#ff6a00]">
         Make A Difference
        </p>

        <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
         Support Our Mission
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
         Your support can help us create lasting impact in communities
         across Nigeria. Join us in building opportunities and improving
         lives.
        </p>

        <a
         href="#contact"
         className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#ff6a00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#ff6a00]"
        >
         Contact Us to Support
         <ArrowRight size={18} />
        </a>

        <p className="mt-5 text-xs text-white/50">
         Get in touch with the Foundation to discuss ways to contribute.
        </p>
       </div>
      </div>

      <div className="mt-16">
       <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff6a00]">
         Get Involved
        </p>
        <h3 className="mt-3 text-2xl font-extrabold text-[#123b2c] sm:text-3xl">
         Other Ways to Support
        </h3>
       </div>

       <div className="mt-9 grid gap-6 md:grid-cols-3">
        {[
         {
          icon: Users,
          title: "Volunteer",
          description: "Join our team of dedicated volunteers and contribute your time and skills.",
          link: "#contact",
          action: "Get Involved",
         },
         {
          icon: Megaphone,
          title: "Spread the Word",
          description: "Help more people discover our mission by sharing our work with others.",
          link: "#contact",
          action: "Connect With Us",
         },
         {
          icon: Building2,
          title: "Corporate Partnership",
          description: "Partner with us to support sustainable community development.",
          link: "#partnership",
          action: "Explore Partnership",
         },
        ].map((item) => {
         const Icon = item.icon;

         return (
          <div
           key={item.title}
           className="rounded-2xl border border-[#e3ebe4] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
           <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff6a00] text-[#ff6a00]">
            <Icon size={23} />
           </div>

           <h4 className="mt-5 text-lg font-bold text-[#153b2c]">
            {item.title}
           </h4>

           <p className="mt-3 text-sm leading-7 text-[#718078]">
            {item.description}
           </p>

           <a
            href={item.link}
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#ff6a00] transition hover:text-[#ff6a00]"
           >
            {item.action}
            <ArrowRight size={16} />
           </a>
          </div>
         );
        })}
       </div>
      </div>
     </div>
    </section>
    {/* PARTNERSHIP */}
    <section id="partnership" className="bg-white py-24">
     <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-2">
       <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff6a00]">
         Work With Us
        </p>

        <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#123b2c] sm:text-5xl">
         Building a Better Future Through Partnership
        </h2>

        <p className="mt-6 text-base leading-8 text-[#718078]">
         NTONARCH FOUNDATION believes in the power of collaboration to
         create lasting impact. We invite corporate organizations,
         government agencies, NGOs, philanthropists, and individuals to
         partner with us in shaping a better future from the grassroots.
        </p>

        <a
         href="#contact"
         className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#ff6a00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#ff6a00]"
        >
         Become a Partner
         <ArrowRight size={18} />
        </a>
       </div>

       <div className="grid gap-5 sm:grid-cols-2">
        {[
         {
          icon: DollarSign,
          title: "Financial Support & Funding",
          description:
           "Support our programs through financial contributions and funding opportunities.",
         },
         {
          icon: Lightbulb,
          title: "Expertise & Knowledge Sharing",
          description:
           "Share professional knowledge, experience, and technical expertise with our communities.",
         },
         {
          icon: Gift,
          title: "Material Donations & Resources",
          description:
           "Contribute useful materials, equipment, and resources that support our initiatives.",
         },
         {
          icon: HandHeart,
          title: "Volunteerism & Time",
          description:
           "Give your time and participate directly in activities that improve people's lives.",
         },
        ].map((item) => {
         const Icon = item.icon;

         return (
          <div
           key={item.title}
           className="rounded-2xl border border-[#e5ece6] bg-[#f8faf8] p-6 transition hover:-translate-y-1 hover:border-[#ff6a00] hover:shadow-md"
          >
           <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff6a00] text-[#ff6a00]">
            <Icon size={23} />
           </div>

           <h3 className="mt-5 text-base font-bold text-[#153b2c]">
            {item.title}
           </h3>

           <p className="mt-3 text-sm leading-7 text-[#718078]">
            {item.description}
           </p>
          </div>
         );
        })}
       </div>
      </div>

      <div className="mt-16 rounded-2xl bg-[#f0f6f1] px-7 py-10 text-center sm:px-12">
       <h3 className="text-2xl font-extrabold text-[#123b2c]">
        Together, We Can Do More
       </h3>

       <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#718078]">
        Every partnership creates an opportunity to reach more people,
        strengthen communities, and build sustainable solutions.
       </p>

       <a
        href="#contact"
        className="mt-7 inline-flex items-center gap-2 font-bold text-[#ff6a00] transition hover:text-[#ff6a00]"
       >
        Let's Start a Conversation
        <ArrowRight size={17} />
       </a>
      </div>
     </div>
    </section>

    {/* CONTACT CTA */}
    <section id="contact" className="bg-[#0c2b20] py-20 text-white">
     <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6a00]/15 text-[#ff6a00]">
       <Handshake size={27} />
      </span>

      <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#ff6a00]">
       Make an Impact
      </p>

      <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
       Partner With Us Today
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65">
       Let's work together to create sustainable change, empower
       communities, and build a better future for everyone.
      </p>

      <a
       href="contact.html"
       className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#ff6a00] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#ff6a00]"
      >
       Contact Us
       <ArrowRight size={18} />
      </a>
     </div>
    </section>

    {/* FOOTER */}
    <footer className="bg-[#071c15] text-white">
     <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
      <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
       {/* BRAND */}
       <div>
        <a href="#home" className="inline-flex items-center gap-3">
         <img
          src="/images/Ntonarch%20logo1.png"
          alt="NTONARCH logo"
          className="h-12 w-auto object-contain"
         />

         <div>
          <p className="text-lg font-extrabold tracking-wide">
           NTONARCH
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ff6a00]">
           Foundation
          </p>
         </div>
        </a>

        <p className="mt-6 text-sm leading-7 text-white/55">
         A subsidiary of NTONARCH ACUMEN NETWORK (NAN), dedicated to
         driving social impact and community empowerment through
         sustainable development initiatives that create lasting
         positive change.
        </p>

        <div className="mt-6 flex items-center gap-3">
         {[
          { label: "Facebook", href: "#", icon: Globe },
          { label: "Instagram", href: "#", icon: Globe },
          { label: "LinkedIn", href: "#", icon: Globe },
         ].map((social) => {
          const Icon = social.icon;

          return (
           <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition hover:border-[#ff6a00] hover:bg-[#ff6a00] hover:text-white"
           >
            <Icon size={17} />
           </a>
          );
         })}
        </div>
       </div>

       {/* QUICK LINKS */}
       <div>
        <h3 className="text-sm font-bold uppercase tracking-wider">
         Quick Links
        </h3>

        <ul className="mt-6 space-y-3 text-sm text-white/55">
         {[
          ["Home", "#home"],
          ["About Us", "#about"],
          ["Our Initiatives", "#initiatives"],
          ["Gallery", "#gallery"],
          ["Impact Stories", "#impact"],
          ["Donate Now", "#donate"],
         ].map(([label, href]) => (
          <li key={label}>
           <a
            href={href}
            className="transition hover:text-[#ff6a00]"
           >
            {label}
           </a>
          </li>
         ))}
        </ul>
       </div>

       {/* PROGRAMS */}
       <div>
        <h3 className="text-sm font-bold uppercase tracking-wider">
         Our Programs
        </h3>

        <ul className="mt-6 space-y-3 text-sm text-white/55">
         {[
          "Education Support & Scholarships",
          "Community Development",
          "Youth Empowerment",
          "Social Welfare",
          "Environmental Sustainability",
          "Healthcare Access",
         ].map((program) => (
          <li key={program}>
           <a
            href="#initiatives"
            className="transition hover:text-[#ff6a00]"
           >
            {program}
           </a>
          </li>
         ))}
        </ul>
       </div>

       {/* COMPANY & SUPPORT */}
       <div>
        <h3 className="text-sm font-bold uppercase tracking-wider">
         Company
        </h3>

        <ul className="mt-6 space-y-3 text-sm text-white/55">
         {[
          ["Blog & News", "blog.html"],
          ["System Status", "system-status.html"],
          ["API Access", "api-access.html"],
         ].map(([label, href]) => (
          <li key={label}>
           <a
            href={href}
            className="transition hover:text-[#ff6a00]"
           >
            {label}
           </a>
          </li>
         ))}
        </ul>

        <h3 className="mt-9 text-sm font-bold uppercase tracking-wider">
         Support
        </h3>

        <ul className="mt-5 space-y-3 text-sm text-white/55">
         {[
          ["Report Bug", "report-bug.html"],
          ["Feature Request", "feature-request.html"],
          ["Feedback", "feedback.html"],
          ["Advertisement", "advertisement.html"],
         ].map(([label, href]) => (
          <li key={label}>
           <a
            href={href}
            className="transition hover:text-[#ff6a00]"
           >
            {label}
           </a>
          </li>
         ))}
        </ul>
       </div>
      </div>

      {/* EXTRA FOOTER LINKS */}
      <div className="grid gap-10 border-b border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-3">
       <div>
        <h3 className="text-sm font-bold uppercase tracking-wider">
         Success Stories
        </h3>

        <ul className="mt-5 space-y-3 text-sm text-white/55">
         {[
          ["Case Studies", "case-studies.html"],
          ["Testimonials", "testimonials.html"],
          ["Achievements", "achievements.html"],
         ].map(([label, href]) => (
          <li key={label}>
           <a href={href} className="transition hover:text-[#ff6a00]">
            {label}
           </a>
          </li>
         ))}
        </ul>
       </div>

       <div>
        <h3 className="text-sm font-bold uppercase tracking-wider">
         Legal
        </h3>

        <ul className="mt-5 space-y-3 text-sm text-white/55">
         <li>
          <a href="terms.html" className="transition hover:text-[#ff6a00]">
           Terms & Conditions
          </a>
         </li>
         <li>
          <a href="privacy.html" className="transition hover:text-[#ff6a00]">
           Privacy Policy
          </a>
         </li>
        </ul>
       </div>

       <div>
        <h3 className="text-sm font-bold uppercase tracking-wider">
         Stay Updated
        </h3>

        <p className="mt-5 text-sm leading-7 text-white/55">
         Keep up with NTONARCH Foundation activities and the latest
         updates from NTONARCH Media.
        </p>

        <a
         href="contact.html"
         className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#ff6a00] transition hover:text-[#ff6a00]"
        >
         NTONARCH Foundation News
         <ArrowRight size={16} />
        </a>
       </div>
      </div>

      {/* COPYRIGHT */}
      <div className="flex flex-col gap-4 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
       <p>
        © {new Date().getFullYear()} NTONARCH Foundation. All rights
        reserved.
       </p>

       <p>
        A division of NTONARCH ACUMEN NETWORK (NAN).
       </p>
      </div>
     </div>
    </footer>
   </main>
   )
   }