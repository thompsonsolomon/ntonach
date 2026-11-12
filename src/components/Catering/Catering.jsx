import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Utensils,
  Heart,
  Briefcase,
  Carrot,
  Leaf,
  Sprout,
  ShieldCheck,
  Clock,
  Users,
  ChefHat,
  Star,
  CalendarDays,
  Mail,
  Phone,
  MapPin,
  Globe,
  CheckCircle2,
  Sun,
  Coffee,
  CakeSlice,
} from "lucide-react";

const heroImages = [
  "/images/ww5.avif",
  "/images/o11.avif",
  "/images/p1.avif",
  "/images/o12.avif",
];

const featuredMenus = [
  {
    title: "Heritage Jollof Experience",
    description:
      "Vibrant smoked tomato rice, seasoned protein, and house-made sides for a satisfying, shareable banquet.",
    image: "/images/o11.avif",
    alt: "Jollof rice served with grilled chicken and greens",
  },
  {
    title: "Plant-Powered Grain Bowl",
    description:
      "Colorful seasonal grains, roasted vegetables, and locally inspired dressings built for balanced plant-based dining.",
    image: "/images/p1.avif",
    alt: "Vegetarian grain bowl with fresh vegetables",
  },
  {
    title: "Continental Fusion Selection",
    description:
      "An international spread that blends European favorites with bold African flavor accents for diverse audiences.",
    image: "/images/o12.avif",
    alt: "Continental fusion plated meal",
  },
];

const services = [
  {
    title: "Corporate Catering",
    description:
      "Thoughtful corporate lunch, conference, and business reception menus built for teams, partners, and brand experiences.",
    icon: Briefcase,
  },
  {
    title: "Weddings & Private Events",
    description:
      "Curated menus for receptions, dinners, launch parties, and private celebrations with hospitality that feels personal.",
    icon: Heart,
  },
  {
    title: "African Delicacies",
    description:
      "Authentic, regionally inspired favourites from Jollof rice and Suya to Egusi, Pounded Yam, Puff-Puff, and more.",
    icon: Utensils,
  },
  {
    title: "Vegetarian & Vegan Menus",
    description:
      "Seasonal plant-based cuisine with clearly labelled vegan, vegetarian, and gluten-friendly choices.",
    icon: Carrot,
  },
];

const menuItems = [
  {
    title: "Signature Jollof Rice",
    description:
      "Smoky tomato rice with spiced vegetables, protein choice, and plantain.",
    category: "African Delicacies",
    tags: ["Spicy", "Halal"],
  },
  {
    title: "Egusi & Pounded Yam",
    description:
      "Rich melon seed soup with tender greens served alongside smooth pounded yam.",
    category: "African Delicacies",
    tags: ["Traditional", "Halal"],
  },
  {
    title: "Suya Skewers",
    description:
      "Grilled spiced beef or chicken skewers served with yaji, onions, and flatbread.",
    category: "African Delicacies",
    tags: ["Spicy", "Halal"],
  },
  {
    title: "Garden Harvest Bowl",
    description:
      "Roasted root vegetables, quinoa, creamy avocado, and zesty citrus dressing.",
    category: "Vegetarian & Vegan",
    tags: ["Vegan", "Gluten-Free"],
  },
  {
    title: "Plantain & Bean Stew",
    description:
      "Comforting vegetarian stew with sweet plantain, peppers, and fragrant spices.",
    category: "Vegetarian & Vegan",
    tags: ["Vegetarian", "Vegan"],
  },
  {
    title: "Continental Buffet Pairings",
    description:
      "Mixed grilled proteins, roasted vegetables, potato gratin, and artisan salads.",
    category: "Continental / Fusion",
    tags: ["Corporate"],
  },
  {
    title: "Fusion Street Tastes",
    description:
      "Mini wraps, spicy slaws, and taste-forward bites that balance local and global flavours.",
    category: "Continental / Fusion",
    tags: ["Spicy", "Shareable"],
  },
  {
    title: "Zobo & Chapman Duo",
    description:
      "Refreshing hibiscus punch served alongside a classic Nigerian soft drink infusion.",
    category: "Beverages & Desserts",
    tags: ["Beverage"],
  },
  {
    title: "Sweet Puff-Puff Platter",
    description:
      "Warm fried dough balls served with chocolate sauce, honey, and cinnamon sugar.",
    category: "Beverages & Desserts",
    tags: ["Dessert"],
  },
];

const menuCategories = [
  "All",
  "African Delicacies",
  "Vegetarian & Vegan",
  "Continental / Fusion",
  "Beverages & Desserts",
];

const serviceCommitments = [
  {
    title: "Fresh Sourcing",
    description:
      "A focus on quality ingredients and sourcing opportunities through the wider Ntonarch network.",
    icon: Sprout,
  },
  {
    title: "Event Integration",
    description:
      "Coordination with Ntonarch Events to support organised and memorable event experiences.",
    icon: CalendarDays,
  },
  {
    title: "Quality & Hygiene",
    description:
      "Attention to food handling, cleanliness, presentation, and consistent service standards.",
    icon: ShieldCheck,
  },
  {
    title: "Personalised Hospitality",
    description:
      "Menus and service arrangements designed around the occasion, guests, and dietary preferences.",
    icon: Heart,
  },
];

function SectionHeading({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
        {eyebrow}
      </span>

      <h2
        className={`mb-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-[#24170f]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`text-sm leading-8 sm:text-base ${
            dark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Catering() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredMenus.length);
    }, 5000);

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

  const filteredMenus =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const navLinks = [
    ["Home", "#home"],
    ["About Us", "#about"],
    ["Menus", "#menus"],
    ["Services", "#services"],
    ["Gallery", "#gallery"],
    ["Get a Quote", "#quote"],
    ["Blog", "blog.html"],
    ["Contact", "contact.html"],
  ];

  const pageClass = dark
    ? "bg-[#17120e] text-white"
    : "bg-[#fffaf5] text-[#24170f]";

  const cardClass = dark
    ? "border border-white/10 bg-[#241b15]"
    : "border border-orange-100 bg-white";

  return (
   <>
    <main className={pageClass}>
      {/* NAVIGATION */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#1d130d]/95 shadow-lg backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/images/Ntonarch%20logo1.png"
              alt="Ntonarch logo"
              className="h-11 w-11 rounded-full object-contain"
            />

            <div>
              <h1 className="text-base font-black tracking-wide text-[#ff6a00] sm:text-lg">
                Ntonarch Catering
              </h1>
              <p className="text-[10px] text-gray-400 sm:text-xs">
                Flavors with Purpose
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-xs font-semibold text-gray-300 transition hover:text-[#ff8a36]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="#quote"
              className="rounded-lg bg-[#ff6a00] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#e85e00]"
            >
              Book Catering
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            className="rounded-lg border border-white/20 p-2 text-white xl:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#1d130d] px-5 py-5 xl:hidden">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-gray-300 transition hover:text-[#ff8a36]"
                >
                  {label}
                </a>
              ))}

              <a
                href="#quote"
                onClick={() => setMenuOpen(false)}
                className="col-span-2 rounded-lg bg-[#ff6a00] px-5 py-3 text-center text-sm font-bold text-white sm:col-span-1"
              >
                Book Catering
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[720px] items-center overflow-hidden pt-24"
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
              alt="Ntonarch Catering food and hospitality"
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1009]/95 via-[#1c1009]/75 to-[#1c1009]/25" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
              <Utensils size={15} />
              A Division of Ntonarch Acumen Network
            </span>

            <h1 className="mb-7 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              International Catering with{" "}
              <span className="text-[#ff8a36]">Authentic African Soul.</span>
            </h1>

            <p className="mb-9 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
              Ntonarch Catering brings warm hospitality, modern event menus,
              and sustainable sourcing together for corporate functions,
              weddings, festivals, and private experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-lg bg-[#ff6a00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e85e00]"
              >
                Get a Quote
                <ArrowRight size={17} />
              </a>

              <a
                href="#menus"
                className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                View Menus
                <Utensils size={17} />
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={prevHero}
          aria-label="Previous hero image"
          className="absolute left-4 top-1/2 z-20 rounded-full border border-white/20 bg-black/30 p-3 text-white backdrop-blur transition hover:bg-[#ff6a00]"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={nextHero}
          aria-label="Next hero image"
          className="absolute right-4 top-1/2 z-20 rounded-full border border-white/20 bg-black/30 p-3 text-white backdrop-blur transition hover:bg-[#ff6a00]"
        >
          <ChevronRight size={22} />
        </button>

        <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroIndex(index)}
              aria-label={`Show hero image ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                heroIndex === index
                  ? "w-9 bg-[#ff8a36]"
                  : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              About Us
            </span>

            <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Flavors with Purpose
            </h2>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-base font-medium leading-8 text-orange-500">
                Ntonarch Catering is the hospitality division of Ntonarch
                Acumen Network. We deliver international catering with
                authentic African soul—warm hospitality, modern event menus,
                and sustainable sourcing for corporate functions, weddings,
                festivals, and private experiences.
              </p>

              <p
                className={`mb-7 text-sm leading-8 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Flavors with Purpose is our promise. Our approach combines
                authentic African delicacies, plant-forward menus, and
                international fusion dishes with coordinated sourcing and
                event delivery.
              </p>

              <ul className="mb-9 space-y-5">
                {[
                  [
                    "Fresh sourcing:",
                    "A focus on quality ingredients and responsible sourcing.",
                  ],
                  [
                    "Event integration:",
                    "Coordination with Ntonarch Events for organised event delivery.",
                  ],
                  [
                    "Premium standards:",
                    "Attention to hygiene, food handling, presentation, and quality controls.",
                  ],
                ].map(([title, description]) => (
                  <li key={title} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-orange-500"
                    />

                    <p
                      className={`text-sm leading-7 ${
                        dark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <strong>{title}</strong> {description}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#ff6a00] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e85e00]"
                >
                  Get a Quote
                  <ArrowRight size={16} />
                </a>

                <a
                  href="about.html"
                  className={`inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-bold transition ${
                    dark
                      ? "border-white/20 text-white hover:bg-white/10"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Ntonarch Corporate
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/ww5.avif"
                alt="Catering food preparation"
                loading="lazy"
                className="h-[420px] w-full rounded-3xl object-cover sm:h-[520px]"
              />

              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl bg-[#ff6a00] p-6 text-white shadow-xl sm:block">
                <ChefHat size={32} className="mb-3" />
                <p className="text-lg font-extrabold">Flavors with Purpose</p>
                <p className="mt-1 text-xs text-white/80">
                  Food, hospitality & experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE SERVICES */}
      <section
        id="services"
        className={`px-5 py-24 lg:px-8 ${
          dark ? "bg-[#211810]" : "bg-[#fff0e4]"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Signature Offerings"
            title="Catering Designed for Every Event."
            description="From corporate gatherings to private celebrations, we create food experiences that bring people together."
            dark={dark}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className={`${cardClass} group rounded-2xl p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-400/50`}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition group-hover:bg-[#ff6a00] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mb-3 text-lg font-bold">{service.title}</h3>

                  <p
                    className={`text-sm leading-7 ${
                      dark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              Why Choose Ntonarch Catering?
            </span>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl">
              Hospitality Powered by Purpose, Quality, and Trusted Sourcing.
            </h2>

            <p
              className={`mb-8 text-sm leading-8 ${
                dark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              We draw on the wider Ntonarch network to support dependable
              catering experiences. Our approach connects food sourcing,
              event coordination, and hospitality to deliver menus that feel
              elevated, thoughtful, and welcoming.
            </p>

            <div className="mb-9 space-y-6">
              {serviceCommitments.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="mb-1 font-bold">{item.title}</h3>
                      <p
                        className={`text-sm leading-7 ${
                          dark ? "text-gray-400" : "text-gray-600"
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
                href="services/farms/what-we-do.html"
                className={`inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-bold transition ${
                  dark
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Explore Farms
                <ArrowRight size={16} />
              </a>

              <a
                href="events.html"
                className={`inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-bold transition ${
                  dark
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Meet Events
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div>
            <img
              src="/images/ww5.avif"
              alt="Food preparation and catering service"
              loading="lazy"
              className="h-[420px] w-full rounded-3xl object-cover sm:h-[500px]"
            />
          </div>
        </div>
      </section>
            {/* FEATURED MENU PREVIEW */}
      <section
        id="gallery"
        className={`px-5 py-24 lg:px-8 ${
          dark ? "bg-[#211810]" : "bg-[#fff0e4]"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured Menu Preview"
            title="Signature Dishes That Tell Our Story."
            description="Discover a selection of African favourites, plant-powered dishes, and international fusion meals."
            dark={dark}
          />

          <div className="relative overflow-hidden rounded-3xl bg-[#1d130d]">
            <div className="grid min-h-[450px] lg:grid-cols-2">
              {/* IMAGE */}
              <div className="relative min-h-[300px] overflow-hidden lg:min-h-[500px]">
                {featuredMenus.map((item, index) => (
                  <img
                    key={item.image}
                    src={item.image}
                    alt={item.alt}
                    className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
                      featuredIndex === index
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <span className="absolute bottom-7 left-7 rounded-full bg-[#ff6a00] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                  Featured Selection
                </span>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center p-8 text-white sm:p-12 lg:p-14">
                <span className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                  0{featuredIndex + 1} / 0{featuredMenus.length}
                </span>

                <h3 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                  {featuredMenus[featuredIndex].title}
                </h3>

                <p className="mb-9 text-sm leading-8 text-gray-300">
                  {featuredMenus[featuredIndex].description}
                </p>

                <div className="mb-10 flex flex-wrap gap-3">
                  <a
                    href="#menus"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#ff6a00] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e85e00]"
                  >
                    Explore Full Menu
                    <ArrowRight size={16} />
                  </a>

                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Request Catering
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {featuredMenus.map((item, index) => (
                      <button
                        key={item.title}
                        onClick={() => setFeaturedIndex(index)}
                        aria-label={`Show ${item.title}`}
                        className={`h-2 rounded-full transition-all ${
                          featuredIndex === index
                            ? "w-10 bg-[#ff8a36]"
                            : "w-3 bg-white/30 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        setFeaturedIndex(
                          (prev) =>
                            (prev - 1 + featuredMenus.length) %
                            featuredMenus.length
                        )
                      }
                      aria-label="Previous featured dish"
                      className="rounded-full border border-white/20 p-3 transition hover:border-orange-500 hover:bg-orange-500"
                    >
                      <ChevronLeft size={19} />
                    </button>

                    <button
                      onClick={() =>
                        setFeaturedIndex(
                          (prev) => (prev + 1) % featuredMenus.length
                        )
                      }
                      aria-label="Next featured dish"
                      className="rounded-full border border-white/20 p-3 transition hover:border-orange-500 hover:bg-orange-500"
                    >
                      <ChevronRight size={19} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menus" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Menus"
            title="Find Something for Every Taste."
            description="Filter our menu selection by cuisine, dietary preference, or the experience you're planning."
            dark={dark}
          />

          {/* FILTER BUTTONS */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-3 text-xs font-bold transition sm:text-sm ${
                  activeCategory === category
                    ? "border-[#ff6a00] bg-[#ff6a00] text-white"
                    : dark
                      ? "border-white/15 text-gray-300 hover:border-orange-500 hover:text-orange-400"
                      : "border-orange-200 bg-white text-gray-700 hover:border-orange-500 hover:text-orange-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* MENU GRID */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMenus.map((item) => (
              <article
                key={item.title}
                className={`${cardClass} group rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-400/60`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition group-hover:bg-[#ff6a00] group-hover:text-white">
                  {item.category === "African Delicacies" ? (
                    <Utensils size={23} />
                  ) : item.category === "Vegetarian & Vegan" ? (
                    <Leaf size={23} />
                  ) : item.category === "Continental / Fusion" ? (
                    <ChefHat size={23} />
                  ) : (
                    <Coffee size={23} />
                  )}
                </div>

                <span className="mb-3 inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-orange-500">
                  {item.category}
                </span>

                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>

                <p
                  className={`mb-7 text-sm leading-7 ${
                    dark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => {
                    const tagColors = {
                      Spicy: "bg-red-500/10 text-red-500",
                      Halal: "bg-emerald-500/10 text-emerald-500",
                      Vegan: "bg-green-500/10 text-green-500",
                      Vegetarian: "bg-lime-500/10 text-lime-600",
                      "Gluten-Free": "bg-blue-500/10 text-blue-500",
                      Traditional: "bg-orange-500/10 text-orange-500",
                      Corporate: "bg-indigo-500/10 text-indigo-500",
                      Shareable: "bg-pink-500/10 text-pink-500",
                      Beverage: "bg-cyan-500/10 text-cyan-600",
                      Dessert: "bg-rose-500/10 text-rose-500",
                    };

                    return (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${
                          tagColors[tag] ||
                          (dark
                            ? "bg-white/10 text-gray-300"
                            : "bg-gray-100 text-gray-600")
                        }`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>

          {filteredMenus.length === 0 && (
            <p className="py-12 text-center text-sm text-gray-500">
              No menu items found in this category.
            </p>
          )}

          <div className="mt-12 text-center">
            <p
              className={`mb-5 text-sm ${
                dark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Looking for something different? We can discuss a menu tailored
              to your event.
            </p>

            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-lg bg-[#ff6a00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e85e00]"
            >
              Customise Your Menu
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* CATERING QUOTE FORM */}
      <section
        id="quote"
        className={`px-5 py-24 lg:px-8 ${
          dark ? "bg-[#211810]" : "bg-[#fff0e4]"
        }`}
      >
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* FORM INTRODUCTION */}
          <div className="lg:sticky lg:top-28">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
              Start Planning
            </span>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Get a Personalised Proposal for Your Next Event.
            </h2>

            <p
              className={`mb-9 text-sm leading-8 ${
                dark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Tell us about your audience, guest count, taste preferences,
              and event goals. We'll use the details to understand your
              requirements and prepare a catering proposal.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: CalendarDays,
                  title: "Tell Us About Your Event",
                  description:
                    "Share your event type, date, and expected guest count.",
                },
                {
                  icon: Utensils,
                  title: "Choose Your Food Preferences",
                  description:
                    "Let us know your preferred cuisine and dietary requirements.",
                },
                {
                  icon: Mail,
                  title: "Receive a Proposal",
                  description:
                    "We'll review your request and get back to you.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="mb-1 font-bold">{item.title}</h3>
                      <p
                        className={`text-sm leading-6 ${
                          dark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6">
              <div className="mb-3 flex items-center gap-3 text-orange-500">
                <Phone size={20} />
                <h3 className="font-bold">Have a quick question?</h3>
              </div>

              <p
                className={`text-sm leading-7 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Reach out through our contact page for general enquiries
                and additional information.
              </p>

              <a
                href="contact.html"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600"
              >
                Contact Us
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* QUOTE FORM */}
          <form
            action="https://formspree.io/f/xwpoleed"
            method="POST"
            className={`${cardClass} rounded-3xl p-6 shadow-sm sm:p-9`}
          >
            <div className="mb-8 border-b border-gray-500/15 pb-6">
              <h3 className="mb-2 text-2xl font-extrabold">
                Catering Enquiry Form
              </h3>

              <p
                className={`text-sm ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Fields marked with * are required.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* FULL NAME */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">
                  Full Name *
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 ${
                    dark
                      ? "border-white/10 bg-[#17120e] text-white placeholder:text-gray-600"
                      : "border-gray-200 bg-[#fffaf5] text-gray-800 placeholder:text-gray-400"
                  }`}
                />
              </label>

              {/* ORGANIZATION */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">
                  Organization
                </span>
                <input
                  type="text"
                  name="organization"
                  placeholder="Company or organisation"
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 ${
                    dark
                      ? "border-white/10 bg-[#17120e] text-white placeholder:text-gray-600"
                      : "border-gray-200 bg-[#fffaf5] text-gray-800 placeholder:text-gray-400"
                  }`}
                />
              </label>

              {/* EMAIL */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">
                  Email Address *
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 ${
                    dark
                      ? "border-white/10 bg-[#17120e] text-white placeholder:text-gray-600"
                      : "border-gray-200 bg-[#fffaf5] text-gray-800 placeholder:text-gray-400"
                  }`}
                />
              </label>

              {/* PHONE */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">
                  Phone Number *
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+234..."
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 ${
                    dark
                      ? "border-white/10 bg-[#17120e] text-white placeholder:text-gray-600"
                      : "border-gray-200 bg-[#fffaf5] text-gray-800 placeholder:text-gray-400"
                  }`}
                />
              </label>

              {/* EVENT TYPE */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">
                  Event Type *
                </span>
                <select
                  name="event_type"
                  required
                  defaultValue="Corporate"
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 ${
                    dark
                      ? "border-white/10 bg-[#17120e] text-white"
                      : "border-gray-200 bg-[#fffaf5] text-gray-800"
                  }`}
                >
                  <option value="Corporate">Corporate</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Private">Private</option>
                  <option value="Festival">Festival</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              {/* GUEST COUNT */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">
                  Estimated Guest Count *
                </span>
                <input
                  type="number"
                  name="guest_count"
                  min="1"
                  required
                  placeholder="e.g. 100"
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 ${
                    dark
                      ? "border-white/10 bg-[#17120e] text-white placeholder:text-gray-600"
                      : "border-gray-200 bg-[#fffaf5] text-gray-800 placeholder:text-gray-400"
                  }`}
                />
              </label>

              {/* CUISINE */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">
                  Preferred Cuisine Focus *
                </span>
                <select
                  name="cuisine_focus"
                  required
                  defaultValue="African"
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 ${
                    dark
                      ? "border-white/10 bg-[#17120e] text-white"
                      : "border-gray-200 bg-[#fffaf5] text-gray-800"
                  }`}
                >
                  <option value="African">African</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Mixed">Mixed</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              {/* EVENT DATE */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">
                  Event Date *
                </span>
                <input
                  type="date"
                  name="event_date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 ${
                    dark
                      ? "border-white/10 bg-[#17120e] text-white"
                      : "border-gray-200 bg-[#fffaf5] text-gray-800"
                  }`}
                />
              </label>

              {/* LOCATION */}
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">
                  Venue Location *
                </span>
                <input
                  type="text"
                  name="event_location"
                  required
                  placeholder="City, venue or address"
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 ${
                    dark
                      ? "border-white/10 bg-[#17120e] text-white placeholder:text-gray-600"
                      : "border-gray-200 bg-[#fffaf5] text-gray-800 placeholder:text-gray-400"
                  }`}
                />
              </label>

              {/* BUDGET */}
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">
                  Budget Range (Optional)
                </span>
                <input
                  type="text"
                  name="budget"
                  placeholder="e.g. ₦500k - ₦1M"
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 ${
                    dark
                      ? "border-white/10 bg-[#17120e] text-white placeholder:text-gray-600"
                      : "border-gray-200 bg-[#fffaf5] text-gray-800 placeholder:text-gray-400"
                  }`}
                />
              </label>

              {/* NOTES */}
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">
                  Additional Notes / Dietary Restrictions
                </span>
                <textarea
                  name="notes"
                  rows={5}
                  placeholder="Tell us about your menu preferences, dietary requirements, allergies, or any other details..."
                  className={`w-full resize-y rounded-xl border px-4 py-3.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 ${
                    dark
                      ? "border-white/10 bg-[#17120e] text-white placeholder:text-gray-600"
                      : "border-gray-200 bg-[#fffaf5] text-gray-800 placeholder:text-gray-400"
                  }`}
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#ff6a00] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#e85e00]"
            >
              Submit Catering Request
              <ArrowRight size={18} />
            </button>

            <p
              className={`mt-4 text-center text-xs leading-6 ${
                dark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Your information will be used to review and respond to your
              catering enquiry.
            </p>
          </form>
        </div>
      </section>
            {/* SERVICE PROMISE */}
      <section
        className={`px-5 py-24 lg:px-8 ${
          dark ? "bg-[#17120e]" : "bg-[#fffaf5]"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Service Promise"
            title="Every Detail Matters."
            description="From ingredient selection to the final presentation, we pay attention to the details that make every catering experience special."
            dark={dark}
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCommitments.map((item, index) => {
              const icons = [
                <Leaf key="leaf" size={25} />,
                <CalendarDays key="calendar" size={25} />,
                <ShieldCheck key="shield" size={25} />,
                <Heart key="heart" size={25} />,
              ];

              return (
                <div
                  key={item.title}
                  className={`${cardClass} rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-400/60`}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                    {icons[index % icons.length]}
                  </div>

                  <h3 className="mb-3 text-lg font-bold">{item.title}</h3>

                  <p
                    className={`text-sm leading-7 ${
                      dark ? "text-gray-400" : "text-gray-600"
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

      {/* FINAL CALL TO ACTION */}
      <section className="relative overflow-hidden bg-[#21140d] px-5 py-20 text-white lg:px-8">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
            Let's Make It Memorable
          </span>

          <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Great Food. Meaningful Moments. Exceptional Experiences.
          </h2>

          <p className="mx-auto mb-9 max-w-2xl text-sm leading-8 text-gray-300 sm:text-base">
            Whether you're planning a corporate gathering, a wedding, or a
            private celebration, let's create a catering experience worth
            remembering.
          </p>

          <a
            href="#quote"
            className="inline-flex items-center gap-3 rounded-xl bg-[#ff6a00] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#e85e00]"
          >
            Plan Your Event
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>

    <footer
      className={`px-5 pt-16 lg:px-8 ${
        dark ? "bg-[#100c09] text-white" : "bg-[#21140d] text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <a href="/" className="mb-6 inline-flex items-center gap-3">
              <img
                src="/images/Ntonarch%20logo1.png"
                alt="Ntonarch Acumen Network"
                className="h-12 w-auto object-contain"
              />
            </a>

            <h3 className="mb-4 text-lg font-extrabold">
              NTONARCH CATERING
            </h3>

            <p className="max-w-xs text-sm leading-7 text-gray-400">
              Thoughtful food experiences for corporate functions, private
              celebrations, and special occasions. Proudly part of Ntonarch
              Acumen Network.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-orange-400">
                <Utensils size={17} />
              </span>
              <span className="text-xs font-semibold tracking-wide text-gray-400">
                Flavors with Purpose
              </span>
            </div>
          </div>

          {/* SISTER DIVISIONS */}
          <div>
            <h3 className="mb-6 text-sm font-extrabold uppercase tracking-wider">
              Our Network
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a
                  href="events.html"
                  className="transition hover:text-orange-400"
                >
                  Ntonarch Events
                </a>
              </li>
              <li>
                <a
                  href="services/farms/what-we-do.html"
                  className="transition hover:text-orange-400"
                >
                  Ntonarch Farms
                </a>
              </li>
              <li>
                <a
                  href="market.html"
                  className="transition hover:text-orange-400"
                >
                  Ntonarch Market
                </a>
              </li>
              <li>
                <a
                  href="about.html"
                  className="transition hover:text-orange-400"
                >
                  Ntonarch Corporate
                </a>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-6 text-sm font-extrabold uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a
                  href="#about"
                  className="transition hover:text-orange-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition hover:text-orange-400"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#menus"
                  className="transition hover:text-orange-400"
                >
                  Explore Menus
                </a>
              </li>
              <li>
                <a
                  href="terms.html"
                  className="transition hover:text-orange-400"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="privacy.html"
                  className="transition hover:text-orange-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="transition hover:text-orange-400"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-6 text-sm font-extrabold uppercase tracking-wider">
              Get In Touch
            </h3>

            <p className="mb-5 text-sm leading-7 text-gray-400">
              Have an event coming up? Reach out and tell us what you have
              in mind.
            </p>

            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-lg bg-[#ff6a00] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e85e00]"
            >
              Request a Quote
              <ArrowRight size={16} />
            </a>

            <div className="mt-7 flex items-center gap-3">
              <button
                onClick={() => setDark((prev) => !prev)}
                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-gray-300 transition hover:border-orange-400 hover:text-orange-400"
                aria-label="Toggle page theme"
              >
                {dark ? <Sun size={15} /> : <Coffee size={15} />}
                {dark ? "Light appearance" : "Dark appearance"}
              </button>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col gap-4 py-7 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Ntonarch Acumen Network. All rights
            reserved.
          </p>

          <p className="font-semibold tracking-wide">
            NTONARCH CATERING — FLAVORS WITH PURPOSE
          </p>
        </div>
      </div>
    </footer>
  </>
  );
}