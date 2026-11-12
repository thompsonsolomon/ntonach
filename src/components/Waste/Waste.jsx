import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Recycle,
  Leaf,
  Factory,
  Truck,
  Cpu,
  Globe,
  Droplets,
  Zap,
  Briefcase,
  Users,
  Sprout,
  ShieldCheck,
  Database,
  Smartphone,
  Wind,
  Activity,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";

const heroImages = [
  "/images/wastes1.jfif",
  "/images/wastes2.png",
  "/images/wastes3.jpg",
  "/images/wastes4.webp",
  "/images/wastes5.jpg",
];

const sdgs = [
  {
    number: "02",
    title: "Zero Hunger",
    description: "Supporting agriculture through organic waste recovery and fertilizer production.",
    icon: Sprout,
    color: "bg-yellow",
  },
  {
    number: "06",
    title: "Clean Water",
    description: "Promoting responsible waste handling and environmental protection.",
    icon: Droplets,
    color: "bg-sky",
  },
  {
    number: "07",
    title: "Clean Energy",
    description: "Exploring energy recovery opportunities from suitable waste materials.",
    icon: Zap,
    color: "bg-amber",
  },
  {
    number: "08",
    title: "Decent Work",
    description: "Encouraging skills development and employment across the waste sector.",
    icon: Briefcase,
    color: "bg-red",
  },
  {
    number: "09",
    title: "Industry & Innovation",
    description: "Applying technology to improve waste collection and processing.",
    icon: Cpu,
    color: "bg-orange-600",
  },
  {
    number: "11",
    title: "Sustainable Cities",
    description: "Supporting cleaner communities through smarter waste management.",
    icon: Globe,
    color: "bg-amber-700",
  },
  {
    number: "12",
    title: "Responsible Consumption",
    description: "Promoting reuse, recycling, and resource recovery.",
    icon: Recycle,
    color: "bg-yellow-700",
  },
  {
    number: "13",
    title: "Climate Action",
    description: "Encouraging waste practices that help reduce environmental impact.",
    icon: Wind,
    color: "bg-green-700",
  },
];

const impactAreas = [
  {
    title: "Waste Recovery",
    description: "Recovering reusable materials and reducing waste sent to disposal sites.",
    icon: Recycle,
  },
  {
    title: "Organic Resources",
    description: "Turning suitable organic waste into useful agricultural resources.",
    icon: Leaf,
  },
  {
    title: "Environmental Awareness",
    description: "Supporting responsible waste practices and environmental protection.",
    icon: Globe,
  },
  {
    title: "Green Employment",
    description: "Creating opportunities for skills development across the waste value chain.",
    icon: Users,
  },
];

const technologies = [
  {
    title: "AI-Powered Sorting",
    description:
      "Using artificial intelligence and computer vision concepts to identify, classify, and separate different waste materials.",
    icon: Cpu,
    features: [
      "Automated material identification",
      "Contamination detection",
      "Intelligent sorting systems",
      "Process monitoring",
    ],
  },
  {
    title: "Smart Collection Platform",
    description:
      "A technology-driven approach to waste collection, monitoring, and operational coordination.",
    icon: Truck,
    features: [
      "Smart bin monitoring",
      "GPS-enabled vehicle tracking",
      "Collection coordination",
      "Route optimisation",
    ],
  },
  {
    title: "Blockchain Tracking",
    description:
      "Exploring transparent digital records for tracking waste movement and resource recovery.",
    icon: ShieldCheck,
    features: [
      "Waste journey records",
      "Digital transaction tracking",
      "Supply chain transparency",
      "Compliance documentation",
    ],
  },
  {
    title: "Cloud Management",
    description:
      "Centralised digital tools for managing operations, reporting, and business information.",
    icon: Database,
    features: [
      "Operational dashboards",
      "Data analytics",
      "Multi-site management",
      "System integrations",
    ],
  },
  {
    title: "IoT Sensor Network",
    description:
      "Connected sensors can support environmental monitoring and improve operational awareness.",
    icon: Activity,
    features: [
      "Temperature monitoring",
      "Humidity monitoring",
      "Environmental sensing",
      "Automated alerts",
    ],
  },
  {
    title: "Farm Integration",
    description:
      "Connecting resource recovery with agricultural needs through suitable organic materials and fertilizer solutions.",
    icon: Sprout,
    features: [
      "Organic resource recovery",
      "Agricultural integration",
      "Fertilizer solutions",
      "Farm feedback systems",
    ],
  },
];

const innovations = [
  {
    title: "Drone Monitoring",
    description: "Exploring aerial monitoring for waste sites and environmental assessment.",
    icon: Globe,
  },
  {
    title: "Autonomous Vehicles",
    description: "Research into intelligent vehicle systems for future collection operations.",
    icon: Truck,
  },
  {
    title: "Bio-Plastics",
    description: "Exploring alternative materials and opportunities for sustainable packaging.",
    icon: Leaf,
  },
  {
    title: "Waste-to-Hydrogen",
    description: "Investigating emerging technologies for converting suitable waste streams into energy resources.",
    icon: Zap,
  },
  {
    title: "Nanotechnology",
    description: "Exploring advanced material applications in waste treatment and environmental processes.",
    icon: Cpu,
  },
  {
    title: "Carbon Marketplace",
    description: "Exploring digital approaches to environmental reporting and carbon-related initiatives.",
    icon: Activity,
  },
];

const services = [
  {
    title: "Smart Waste Collection",
    description:
      "Organised waste collection solutions supported by digital coordination and operational monitoring.",
    icon: Truck,
  },
  {
    title: "Organic Fertilizer",
    description:
      "Resource recovery solutions that convert suitable organic waste into useful agricultural products.",
    icon: Sprout,
  },
  {
    title: "Waste-to-Energy",
    description:
      "Exploring responsible technologies for recovering energy from suitable waste materials.",
    icon: Zap,
  },
  {
    title: "Enterprise Solutions",
    description:
      "Waste management systems and operational support for businesses and institutions.",
    icon: Factory,
  },
  {
    title: "Municipal Services",
    description:
      "Waste management support for communities, local authorities, and public institutions.",
    icon: Globe,
  },
  {
    title: "Electronic Waste Services",
    description:
      "Responsible handling and recovery of electronic waste, including selected components and devices.",
    icon: Cpu,
  },
  {
    title: "Outsourcing & Staff Management",
    description:
      "Operational staffing and workforce coordination for waste management activities.",
    icon: Users,
  },
  {
    title: "Events Services",
    description:
      "Waste collection and environmental management support for events and public gatherings.",
    icon: Briefcase,
  },
  {
    title: "API Integration",
    description:
      "Digital integration opportunities for connecting waste management systems with other platforms.",
    icon: Database,
  },
];

const galleryGroups = [
  {
    title: "Waste Processing Equipment",
    images: [
      "/images/ww.avif",
      "/images/ww3.jpg",
      "/images/ww5.avif",
      "/images/ww6.webp",
      "/images/ww7.avif",
    ],
  },
  {
    title: "Collection Vehicles",
    images: [
      "/images/ww8.jpg",
      "/images/ww9.webp",
      "/images/ww10.png",
      "/images/ww11.jpg",
      "/images/wastes5.jpg",
    ],
  },
  {
    title: "Energy Recovery Systems",
    images: [
      "/images/ww13.webp",
      "/images/ww14.jpg",
      "/images/ww16.webp",
      "/images/ww17.jpg",
      "/images/ww18.webp",
    ],
  },
  {
    title: "Maintenance Facilities",
    images: [
      "/images/ww20.png",
      "/images/ww21.jpg",
      "/images/ww22.jpg",
      "/images/ww19.webp",
      "/images/ww24.jfif",
    ],
  },
  {
    title: "Control Systems",
    images: [
      "/images/ww26.webp",
      "/images/ww27.jpg",
      "/images/ww28.webp",
      "/images/ww29.png",
      "/images/ww30.jpg",
    ],
  },
  {
    title: "Monitoring Equipment",
    images: [
      "/images/ww31.png",
      "/images/ww33.jpg",
      "/images/ww36.jpg",
      "/images/ww39.jpg",
      "/images/ww37.jpg",
    ],
  },
];

const sortingItems = [
  "Robotic Sorting Arms",
  "Computer Vision Systems",
  "Material Separation Lines",
  "Quality Control Stations",
  "Automated Classification",
  "Contamination Detection",
];

const manureItems = [
  "Organic Waste Collection",
  "Composting Process",
  "Fertilizer Production",
  "Farm Delivery",
  "Soil Enrichment",
  "Yield Improvement",
];

function SectionHeading({ eyebrow, title, description, dark }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-[#ff6b00]-500">
        {eyebrow}
      </span>

      <h2
        className={`mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-[#10251c]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-base leading-8 ${
            dark ? "text-gray" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function WasteManagement() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [galleryTab, setGalleryTab] = useState("machinery");
  const [galleryIndexes, setGalleryIndexes] = useState({});
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextHero = () => {
    setHeroIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevHero = () => {
    setHeroIndex((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  const changeGallerySlide = (groupIndex, direction) => {
    const total = galleryGroups[groupIndex].images.length;

    setGalleryIndexes((prev) => {
      const current = prev[groupIndex] || 0;

      return {
        ...prev,
        [groupIndex]:
          direction === "next"
            ? (current + 1) % total
            : (current - 1 + total) % total,
      };
    });
  };

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Technology", "#technology"],
    ["Gallery", "#gallery"],
    ["Innovation", "#innovation"],
    ["Global Impact", "#global-impact"],
    ["Services", "#services"],
    ["Impact Map", "#impact-map"],
    ["Careers", "#careers"],
    ["Contact", "#contact"],
  ];

  const sectionClass = dark
    ? "bg-[#101714] text-white"
    : "bg-[#f5faf6] text-[#10251c]";

  const cardClass = dark
    ? "border border-white/10 bg-[#101714]"
    : "border border-gray-200 bg-white";

  return (
    <main className={sectionClass}>
      {/* NAVIGATION */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#071710]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/images/Ntonarch logo1.png"
              alt="Ntonarch Logo"
              className="h-11 w-11 rounded-full object-contain"
            />

            <div>
              <h1 className="text-sm font-black tracking-wider text-white sm:text-base">
                NTONARCH <span className="text-[#ff6b00">WASTE</span>
              </h1>
              <p className="text-[10px] text-gray sm:text-xs">
                Digital Waste Management Solutions
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 xl:flex">
            {navLinks.map(([label, link]) => (
              <a
                key={label}
                href={link}
                className="text-xs font-semibold text-gray-300 transition hover:text-[#ff6b00"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="rounded-full border border-white/15 p-2 text-white transition hover:bg-white/10"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              className="rounded-lg border border-white/15 p-2 text-white xl:hidden"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#071710] px-5 py-5 xl:hidden">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {navLinks.map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-gray-300 transition hover:text-[#ff6b00"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[750px] items-center overflow-hidden pt-24"
      >
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              heroIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt="Waste management and resource recovery"
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#04140d] via-[#04140d]/85 to-[#04140d]/30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff6b00] bg-[#ff6b00]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
              <Recycle size={15} />
              Waste Management & Resource Recovery
            </span>

            <h1 className="mb-7 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              Modern Waste-to-Resource{" "}
              <span className="text-[#ff6b00]">Platform</span>
            </h1>

            <p className="mb-9 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Transforming waste into valuable resources through technology,
              responsible collection, innovative processing, and sustainable
              resource recovery.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-[#ff6b00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#ff6b00]-600"
              >
                Get Smart Quote
                <ArrowRight size={17} />
              </a>

              <a
                href="#technology"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore Technology
                <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[#ff6b00/40 px-7 py-4 text-sm font-bold text-[#ff6b00]-300 transition hover:bg-[#ff6b00/10"
              >
                Contact Us
                <Smartphone size={17} />
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={prevHero}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 rounded-full border border-white/20 bg-black/30 p-3 text-white backdrop-blur transition hover:bg-[#ff6b00]"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={nextHero}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 rounded-full border border-white/20 bg-black/30 p-3 text-white backdrop-blur transition hover:bg-[#ff6b00]"
        >
          <ChevronRight size={22} />
        </button>

        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                heroIndex === index
                  ? "w-9 bg-[#ff6b00"
                  : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* IMPACT DASHBOARD */}
      <section id="global-impact" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Impact Approach"
            title="Building a More Sustainable Future"
            description="Our approach focuses on responsible waste management, resource recovery, environmental awareness, and opportunities within the circular economy."
            dark={dark}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`${cardClass} rounded-2xl p-7 transition duration-300 hover:-translate-y-2 hover:border-[#ff6b00]/50`}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ff6b00]/10 text-[#ff6b00">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold">{item.title}</h3>

                  <p
                    className={`text-sm leading-7 ${
                      dark ? "text-gray" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UN SDG ALIGNMENT */}
      <section
        className={`px-5 py-24 lg:px-8 ${
          dark ? "bg-[#0c2017]" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Global Sustainability"
            title="Aligned With Global Development Goals"
            description="Our waste management approach supports the broader objectives of sustainable development and responsible resource use."
            dark={dark}
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sdgs.map((sdg) => {
              const Icon = sdg.icon;

              return (
                <div
                  key={sdg.number}
                  className={`${cardClass} overflow-hidden rounded-2xl transition hover:-translate-y-1`}
                >
                  <div className={`${sdg.color} flex items-center justify-between p-5 text-white`}>
                    <span className="text-3xl font-black">{sdg.number}</span>
                    <Icon size={30} />
                  </div>

                  <div className="p-6">
                    <h3 className="mb-3 font-bold">{sdg.title}</h3>

                    <p
                      className={`text-sm leading-7 ${
                        dark ? "text-gray" : "text-gray-600"
                      }`}
                    >
                      {sdg.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
            {/* GALLERY */}
      <section id="gallery" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Gallery"
            title="Waste Management in Action"
            description="Explore different areas of waste collection, processing, sorting, and resource recovery."
            dark={dark}
          />

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {[
              ["machinery", "Machinery"],
              ["sorting", "Sorting Process"],
              ["manure", "Waste to Manure"],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setGalleryTab(value)}
                className={`rounded-full px-6 py-3 text-sm font-bold transition ${
                  galleryTab === value
                    ? "bg-[#ff6b00] text-white"
                    : dark
                      ? "border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                      : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {galleryTab === "machinery" && (
            <div className="grid gap-8 md:grid-cols-2">
              {galleryGroups.map((group, groupIndex) => {
                const currentIndex = galleryIndexes[groupIndex] || 0;

                return (
                  <div
                    key={group.title}
                    className={`${cardClass} overflow-hidden rounded-2xl`}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={group.images[currentIndex]}
                        alt={group.title}
                        className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-5 text-white">
                        <h3 className="text-lg font-bold">{group.title}</h3>
                        <p className="text-xs text-gray-300">
                          Image {currentIndex + 1} of {group.images.length}
                        </p>
                      </div>

                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <button
                          onClick={() =>
                            changeGallerySlide(groupIndex, "prev")
                          }
                          aria-label={`Previous ${group.title} image`}
                          className="rounded-full bg-black/50 p-2 text-white backdrop-blur hover:bg-[#ff6b00]"
                        >
                          <ChevronLeft size={19} />
                        </button>

                        <button
                          onClick={() =>
                            changeGallerySlide(groupIndex, "next")
                          }
                          aria-label={`Next ${group.title} image`}
                          className="rounded-full bg-black/50 p-2 text-white backdrop-blur hover:bg-[#ff6b00]"
                        >
                          <ChevronRight size={19} />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 p-4">
                      {group.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            setGalleryIndexes((prev) => ({
                              ...prev,
                              [groupIndex]: index,
                            }))
                          }
                          aria-label={`Show image ${index + 1}`}
                          className={`h-2 rounded-full transition-all ${
                            currentIndex === index
                              ? "w-7 bg-[#ff6b00]"
                              : "w-2 bg-gray/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {galleryTab === "sorting" && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sortingItems.map((item, index) => (
                <div
                  key={item}
                  className={`${cardClass} rounded-2xl p-7 transition hover:-translate-y-1 hover:border-[#ff6b00]/50`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ff6b00]/10 text-[#ff6b00">
                    {index % 2 === 0 ? (
                      <Cpu size={28} />
                    ) : (
                      <Recycle size={28} />
                    )}
                  </div>

                  <h3 className="font-bold">{item}</h3>
                  <p
                    className={`mt-3 text-sm leading-7 ${
                      dark ? "text-gray" : "text-gray-600"
                    }`}
                  >
                    Technology and processes that can support efficient
                    material identification, separation, and quality control.
                  </p>
                </div>
              ))}
            </div>
          )}

          {galleryTab === "manure" && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {manureItems.map((item, index) => (
                <div
                  key={item}
                  className={`${cardClass} rounded-2xl p-7 transition hover:-translate-y-1 hover:border-[#ff6b00]/50`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green/10 text-green">
                    {index % 2 === 0 ? (
                      <Sprout size={28} />
                    ) : (
                      <Leaf size={28} />
                    )}
                  </div>

                  <h3 className="font-bold">{item}</h3>
                  <p
                    className={`mt-3 text-sm leading-7 ${
                      dark ? "text-gray" : "text-gray-600"
                    }`}
                  >
                    Organic resource recovery processes designed to support
                    responsible agricultural use and soil improvement.
                  </p>
                </div>
              ))}
            </div>
          )}

          <p className={`mt-8 text-center text-xs ${dark ? "text-gray" : "text-gray"}`}>
            Gallery images are illustrative references and should not be
            interpreted as verified Ntonarch facilities or completed projects.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        id="technology"
        className={`px-5 py-24 lg:px-8 ${
          dark ? "bg-[#0c2017]" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Technology"
            title="Technology Driving Smarter Waste Management"
            description="We explore digital systems and innovative technologies that can improve waste collection, processing, monitoring, and resource recovery."
            dark={dark}
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`${cardClass} group rounded-2xl p-7 transition duration-300 hover:-translate-y-2 hover:border-[#ff6b00]/50`}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ff6b00]/10 text-[#ff6b00 transition group-hover:bg-[#ff6b00] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>

                  <p
                    className={`mb-6 text-sm leading-7 ${
                      dark ? "text-gray" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  <ul className="space-y-3">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-sm ${
                          dark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ff6b00]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/wastes3.jpg"
              alt="Waste management and environmental resource recovery"
              className="h-[420px] w-full rounded-3xl object-cover sm:h-[520px]"
            />

            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-[#ff6b00]/30 bg-[#10251c] p-6 shadow-2xl sm:block">
              <Recycle size={35} className="mb-3 text-[#ff6b00" />
              <p className="text-lg font-bold text-white">
                Circular Economy
              </p>
              <p className="mt-1 text-xs text-gray">
                Turning waste into value
              </p>
            </div>
          </div>

          <div>
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-[#ff6b00]">
              About Ntonarch Waste
            </span>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              International Waste Management for{" "}
              <span className="text-[#ff6b00]">Global Impact</span>
            </h2>

            <p
              className={`mb-5 text-base leading-8 ${
                dark ? "text-gray" : "text-gray-600"
              }`}
            >
              Ntonarch Waste Management is part of Ntonarch Acumen Network,
              focused on developing responsible waste management approaches
              and resource recovery opportunities.
            </p>

            <p
              className={`mb-8 text-base leading-8 ${
                dark ? "text-gray" : "text-gray-600"
              }`}
            >
              We believe waste should be managed as a resource wherever
              practical. Through technology, innovation, environmental
              awareness, and collaboration, we aim to support cleaner
              communities and a more sustainable future.
            </p>

            <div className="mb-9 grid grid-cols-2 gap-5">
              {[
                ["Technology-led", "Digital solutions"],
                ["Resource Recovery", "Circular economy"],
                ["Environmental Care", "Responsible practices"],
                ["Innovation", "Future-focused thinking"],
              ].map(([title, description]) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-[#ff6b00]/10 p-2 text-[#ff6b00">
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold">{title}</h3>
                    <p
                      className={`mt-1 text-xs ${
                        dark ? "text-gray" : "text-gray"
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg bg-[#ff6b00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#ff6b00]-600"
            >
              Explore Our Services
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* INNOVATION LAB */}
      <section
        id="innovation"
        className={`px-5 py-24 lg:px-8 ${
          dark ? "bg-[#0c2017]" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Innovation Lab & Research"
            title="Exploring the Future of Resource Recovery"
            description="We keep exploring emerging ideas and technologies that may shape the future of waste management and environmental sustainability."
            dark={dark}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {innovations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`${cardClass} rounded-2xl p-7 transition hover:-translate-y-2 hover:border-[#ff6b00]/50`}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ff6b00]/10 text-[#ff6b00">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold">{item.title}</h3>

                  <p
                    className={`text-sm leading-7 ${
                      dark ? "text-gray" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GLOBAL STANDARDS */}
      <section id="standards" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Global Standards & Alignment"
            title="Working Towards Responsible Global Practices"
            description="Our approach considers recognised sustainability frameworks and management standards relevant to waste operations and environmental responsibility."
            dark={dark}
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className={`${cardClass} rounded-2xl p-8`}>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ff6b00]/10 text-[#ff6b00">
                <Globe size={28} />
              </div>

              <h3 className="mb-4 text-xl font-bold">
                International Frameworks
              </h3>

              <div className="space-y-5">
                {[
                  {
                    name: "African Union Agenda 2063",
                    description:
                      "A continental development framework with objectives related to sustainable growth and environmental responsibility.",
                  },
                  {
                    name: "United Nations Sustainable Development Goals",
                    description:
                      "Global goals covering responsible consumption, sustainable cities, climate action, and other development priorities.",
                  },
                  {
                    name: "World Health Organization",
                    description:
                      "Public health guidance relevant to sanitation, waste handling, and environmental health.",
                  },
                ].map((item) => (
                  <div key={item.name}>
                    <h4 className="mb-2 font-bold text-[#ff6b00]">
                      {item.name}
                    </h4>
                    <p
                      className={`text-sm leading-7 ${
                        dark ? "text-gray" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${cardClass} rounded-2xl p-8`}>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ff6b00]/10 text-[#ff6b00">
                <ShieldCheck size={28} />
              </div>

              <h3 className="mb-4 text-xl font-bold">
                Relevant ISO Standards
              </h3>

              <p
                className={`mb-6 text-sm leading-7 ${
                  dark ? "text-gray" : "text-gray-600"
                }`}
              >
                The following standards may provide useful guidance for
                environmental management, quality, occupational safety,
                energy management, and sustainability reporting.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["ISO 1", "Environmental Management"],
                  ["ISO 9001", "Quality Management"],
                  ["ISO 45001", "Occupational Health & Safety"],
                  ["ISO 50001", "Energy Management"],
                  ["ISO 14064", "Greenhouse Gas Reporting"],
                  ["ISO 26000", "Social Responsibility"],
                ].map(([standard, description]) => (
                  <div
                    key={standard}
                    className={`rounded-xl p-4 ${
                      dark ? "bg-white/5" : "bg-gray-100"
                    }`}
                  >
                    <h4 className="mb-1 font-bold text-[#ff6b00]">
                      {standard}
                    </h4>
                    <p
                      className={`text-xs leading-5 ${
                        dark ? "text-gray" : "text-gray-600"
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs text-gray">
                These are reference standards, not a statement that Ntonarch
                holds any of these certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className={`px-5 py-24 lg:px-8 ${
          dark ? "bg-[#0c2017]" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Waste Management Services"
            description="A range of waste management and resource recovery solutions designed for organisations, communities, businesses, and institutions."
            dark={dark}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className={`${cardClass} group rounded-2xl p-7 transition duration-300 hover:-translate-y-2 hover:border-[#ff6b00]/50`}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ff6b00]/10 text-[#ff6b00 transition group-hover:bg-[#ff6b00] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold">
                    {service.title}
                  </h3>

                  <p
                    className={`mb-6 text-sm leading-7 ${
                      dark ? "text-gray" : "text-gray-600"
                    }`}
                  >
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#ff6b00] transition hover:gap-3"
                  >
                    Make an Enquiry
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
            {/* GLOBAL IMPACT MAP */}
      <section id="impact-map" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Global Vision"
            title="Building a Sustainable Future Across Africa"
            description="Our long-term vision is to support communities and organisations with responsible waste management and resource recovery solutions."
            dark={dark}
          />

          <div className={`${cardClass} overflow-hidden rounded-3xl`}>
            <div className="grid lg:grid-cols-2">
              <div className="flex min-h-[380px] items-center justify-center bg-[#10251c] p-8 sm:p-12">
                <div className="max-w-md text-center">
                  <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-[#ff6b00/30 bg-[#ff6b00]/10 text-[#ff6b00">
                    <Globe size={48} />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    Africa-Focused Solutions
                  </h3>

                  <p className="text-sm leading-8 text-gray">
                    Developing practical approaches to waste management,
                    environmental responsibility, and resource recovery
                    across African communities.
                  </p>
                </div>
              </div>

              <div className="p-8 sm:p-12">
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
                  Our Areas of Focus
                </span>

                <h3 className="mb-6 text-2xl font-bold">
                  Supporting a Circular Economy
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      title: "Community Waste Management",
                      description:
                        "Encouraging cleaner communities through responsible waste collection and handling.",
                      icon: Users,
                    },
                    {
                      title: "Agricultural Resource Recovery",
                      description:
                        "Exploring ways to transform suitable organic waste into useful agricultural resources.",
                      icon: Sprout,
                    },
                    {
                      title: "Technology & Innovation",
                      description:
                        "Applying digital systems and emerging technologies to improve waste operations.",
                      icon: Cpu,
                    },
                    {
                      title: "Environmental Responsibility",
                      description:
                        "Supporting sustainable practices that protect communities and natural resources.",
                      icon: Leaf,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ff6b00]/10 text-[#ff6b00]">
                          <Icon size={22} />
                        </div>

                        <div>
                          <h4 className="mb-1 font-bold">{item.title}</h4>
                          <p
                            className={`text-sm leading-7 ${
                              dark ? "text-gray" : "text-gray-600"
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 p-5 text-center">
              <p className="text-xs text-gray">
                Verified operational locations and regional impact data will
                be published as they become available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS & INVESTMENT */}
      <section
        id="careers"
        className={`px-5 py-24 lg:px-8 ${
          dark ? "bg-[#0c2017]" : "bg-white"
        }`}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.25em] text-[#ff6b00]">
              Careers & Opportunities
            </span>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Be Part of a{" "}
              <span className="text-[#ff6b00]">Greener Future</span>
            </h2>

            <p
              className={`mb-8 text-base leading-8 ${
                dark ? "text-gray" : "text-gray-600"
              }`}
            >
              Join a growing vision focused on environmental responsibility,
              resource recovery, technology, and sustainable development.
              We welcome people who are passionate about making a positive
              contribution.
            </p>

            <div className="mb-9 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Learning & Development",
                  description:
                    "Opportunities to develop skills and professional experience.",
                  icon: Briefcase,
                },
                {
                  title: "Global Impact",
                  description:
                    "Contribute to solutions addressing environmental challenges.",
                  icon: Globe,
                },
                {
                  title: "Innovation Culture",
                  description:
                    "Explore ideas and technologies for better waste management.",
                  icon: Cpu,
                },
                {
                  title: "Team Collaboration",
                  description:
                    "Work with people committed to sustainable solutions.",
                  icon: Users,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ff6b00]/10 text-[#ff6b00]">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h4 className="mb-1 text-sm font-bold">{item.title}</h4>
                      <p
                        className={`text-xs leading-6 ${
                          dark ? "text-gray" : "text-gray-600"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="contact.html"
                className="inline-flex items-center gap-2 rounded-lg bg-[#ff6b00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#ff6b00]-600"
              >
                Explore Opportunities
                <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 rounded-lg border px-7 py-4 text-sm font-bold transition ${
                  dark
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Investment Enquiry
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/wastes4.webp"
              alt="Waste management team and operations"
              className="h-[450px] w-full rounded-3xl object-cover sm:h-[520px]"
            />

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#04140d]/80 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <span className="mb-3 inline-block rounded-full bg-[#ff6b00]/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#ff6b00]-300 backdrop-blur">
                Our Vision
              </span>

              <h3 className="max-w-md text-2xl font-extrabold text-white sm:text-3xl">
                Innovation, Responsibility & Sustainable Growth.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b4932] to-[#071710] p-8 text-center sm:p-14 lg:p-20">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#ff6b00]-300">
            <Mail size={32} />
          </div>

          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#ff6b00]-300">
            Get In Touch
          </span>

          <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Ready to Transform Waste Into Value?
          </h2>

          <p className="mx-auto mb-9 max-w-2xl text-sm leading-8 text-gray-300 sm:text-base">
            Whether you're a business, organisation, institution, or
            community looking for waste management solutions, we'd love to
            hear from you.
          </p>

          <a
            href="contact.html"
            className="inline-flex items-center gap-3 rounded-lg bg-[#ff6b00] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#ff6b00"
          >
            Contact Us & Send a Message
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#04110b] px-5 pb-8 pt-16 text-gray-300 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {/* BRAND */}
            <div className="sm:col-span-2 xl:col-span-1">
              <a href="#home" className="mb-6 inline-flex items-center gap-3">
                <img
                  src="/images/Ntonarch%20logo1.png"
                  alt="Ntonarch Logo"
                  className="h-12 w-12 rounded-full object-contain"
                />

                <div>
                  <h3 className="font-black tracking-wider text-white">
                    NTONARCH
                  </h3>
                  <p className="text-xs text-[#ff6b00">WASTE MANAGEMENT</p>
                </div>
              </a>

              <p className="mb-6 max-w-xs text-sm leading-7 text-gray">
                Technology-led waste management and resource recovery.
                Part of Ntonarch Acumen Network.
              </p>

              <div className="flex gap-3">
                {[
                  { icon: Globe, href: "#home", label: "Website" },
                  { icon: Mail, href: "contact.html", label: "Email" },
                  { icon: Phone, href: "contact.html", label: "Contact" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="rounded-lg border border-white/10 p-3 text-gray transition hover:border-[#ff6b00] hover:bg-[#ff6b00] hover:text-white"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="mb-6 font-bold text-white">Quick Links</h4>

              <ul className="space-y-4 text-sm">
                {[
                  ["About Us", "#about"],
                  ["Technology", "#technology"],
                  ["Innovation Lab", "#innovation"],
                  ["Our Services", "#services"],
                  ["Impact Map", "#impact-map"],
                  ["Careers", "#careers"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="transition hover:text-[#ff6b00"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* GLOBAL IMPACT */}
            <div>
              <h4 className="mb-6 font-bold text-white">Global Alignment</h4>

              <ul className="space-y-4 text-sm">
                {[
                  ["UN Sustainable Development Goals", "#standards"],
                  ["African Union Agenda 2063", "#standards"],
                  ["Environmental Responsibility", "#global-impact"],
                  ["Circular Economy", "#about"],
                  ["Resource Recovery", "#services"],
                  ["Sustainability", "#global-impact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="transition hover:text-[#ff6b00"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* NETWORK DIVISIONS */}
            <div>
              <h4 className="mb-6 font-bold text-white">Our Network</h4>

              <ul className="space-y-4 text-sm">
                {[
                  ["Ntonarch Computers", "computer.html"],
                  ["Ntonarch Engineering", "engineering.html"],
                  ["Ntonarch Farms", "international-farms.html"],
                  ["Ntonarch Events", "events.html"],
                  ["Ntonarch Media", "media.html"],
                  ["Ntonarch Properties", "properties.html"],
                  ["Ntonarch Foundation", "foundation.html"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="transition hover:text-[#ff6b00"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h4 className="mb-6 font-bold text-white">Support</h4>

              <ul className="space-y-4 text-sm">
                {[
                  ["Contact Support", "contact.html"],
                  ["Report a Problem", "report-bug.html"],
                  ["Send Feedback", "feedback.html"],
                  ["Feature Request", "feature-request.htm"],
                  ["System Status", "system-status.html"],
                  ["API Enquiries", "contact.html"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="transition hover:text-[#ff6b00"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 text-xs text-gray md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Ntonarch Waste Management. All
              rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="privacy.html"
                className="transition hover:text-[#ff6b00"
              >
                Privacy Policy
              </a>

              <a
                href="terms.html"
                className="transition hover:text-[#ff6b00"
              >
                Terms & Conditions
              </a>

              <a
                href="#home"
                className="transition hover:text-[#ff6b00"
              >
                Ntonarch Acumen Network
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP */}
      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
          className="fixed bottom-7 right-7 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b00] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#ff6b00"
        >
          <ArrowUp size={21} />
        </button>
      )}
    </main>
  );
}