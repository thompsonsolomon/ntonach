import { useEffect, useMemo, useState } from "react";
import {
  Menu, X, Search, ShoppingCart, Sun, Moon, Monitor, ChevronDown,
  ChevronRight, ArrowRight, ArrowUpRight, Star, Heart, Zap, ShieldCheck,
  Globe2, Truck, Headphones, Package, RotateCcw, Store, Tag, Clock3,
  Laptop, Shirt, House, Sparkles, Dumbbell, Coffee, Watch, Camera,
  Smartphone, SlidersHorizontal, Plus, Minus, Check, Mail, MapPin,
  UserRound, CreditCard, Facebook, Instagram, Linkedin, Youtube,
  CircleHelp, Building2, BriefcaseBusiness, Leaf, Languages, TrendingUp,
  BadgeCheck, XCircle
} from "lucide-react";

/* -------------------------------------------------------
   MARKET DATA
------------------------------------------------------- */

const navigation = [
  { id: "all", label: "All", icon: Store },
  { id: "deals", label: "Deals", icon: Tag },
  { id: "prime", label: "Prime", icon: Zap },
  { id: "bestsellers", label: "Best Sellers", icon: TrendingUp },
  { id: "new", label: "New Releases", icon: Sparkles },
  { id: "electronics", label: "Electronics", icon: Laptop },
  { id: "fashion", label: "Fashion", icon: Shirt },
  { id: "home", label: "Home & Living", icon: House },
  { id: "brands", label: "Global Brands", icon: BadgeCheck },
  { id: "sell", label: "Sell on NTONARCH", icon: Store },
];

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Everyday technology",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=700&q=85",
    icon: Laptop,
  },
  {
    id: "fashion",
    name: "Fashion",
    description: "Style that speaks",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=85",
    icon: Shirt,
  },
  {
    id: "home",
    name: "Home & Living",
    description: "Make yourself at home",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=85",
    icon: House,
  },
  {
    id: "beauty",
    name: "Beauty",
    description: "Care and essentials",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&q=85",
    icon: Sparkles,
  },
  {
    id: "sports",
    name: "Sports",
    description: "Move with purpose",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=700&q=85",
    icon: Dumbbell,
  },
  {
    id: "food",
    name: "Food & Groceries",
    description: "Good things, delivered",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&q=85",
    icon: Coffee,
  },
];

const products = [
  {
    id: 1,
    name: "Noise-cancelling Headphones",
    price: 279.99,
    rating: 4.8,
    reviews: 128,
    category: "electronics",
    badge: "Prime Express",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=85",
  },
  {
    id: 2,
    name: "Ultra-portable Laptop 14”",
    price: 1199,
    rating: 4.7,
    reviews: 86,
    category: "electronics",
    badge: "Top Seller",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&q=85",
  },
  {
    id: 3,
    name: "Minimalist Office Chair",
    price: 239,
    rating: 4.5,
    reviews: 64,
    category: "home",
    badge: "Editor's Pick",
    image:
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=700&q=85",
  },
  {
    id: 4,
    name: "Performance Running Shoes",
    price: 149,
    rating: 4.6,
    reviews: 92,
    category: "sports",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=85",
  },
  {
    id: 5,
    name: "Smart Watch LTE",
    price: 329,
    rating: 4.4,
    reviews: 73,
    category: "electronics",
    badge: "Deals",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=85",
  },
  {
    id: 6,
    name: "Curated Skincare Set",
    price: 89,
    rating: 4.9,
    reviews: 114,
    category: "beauty",
    badge: "Vegan",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700&q=85",
  },
  {
    id: 7,
    name: "Smart Home Speaker",
    price: 99,
    rating: 4.3,
    reviews: 58,
    category: "electronics",
    badge: "Smart Home",
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=700&q=85",
  },
  {
    id: 8,
    name: "Artisanal Coffee Bundle",
    price: 45.5,
    rating: 4.7,
    reviews: 41,
    category: "food",
    badge: "Fair Trade",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=700&q=85",
  },
];

const deals = [
  {
    id: 9,
    name: "4K OLED TV 55”",
    price: 949,
    oldPrice: 1299,
    badge: "-27%",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=700&q=85",
  },
  {
    id: 10,
    name: "Mirrorless Camera Pro Kit",
    price: 1599,
    oldPrice: 1999,
    badge: "Bundle",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&q=85",
  },
  {
    id: 11,
    name: "Ergonomic Standing Desk",
    price: 499,
    oldPrice: 699,
    badge: "Flash Deal",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=85",
  },
];

const bestsellers = [
  "Wireless Earbuds",
  "Portable SSD 2TB",
  "Organic Matcha Set",
  "Smart Door Lock",
  "Travel Backpack 40L",
  "LED Desk Lamp",
];

const brands = [
  { name: "Nimbus", category: "Smart home", initial: "N" },
  { name: "Aria", category: "Audio", initial: "A" },
  { name: "Volt", category: "Mobility", initial: "V" },
  { name: "Atlas", category: "Travel", initial: "A" },
  { name: "Lumen", category: "Beauty tech", initial: "L" },
  { name: "North", category: "Outdoor", initial: "N" },
];

const currencies = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  NGN: "₦",
};

const regions = [
  { value: "US", label: "United States" },
  { value: "NG", label: "Nigeria" },
  { value: "UK", label: "United Kingdom" },
  { value: "EU", label: "European Union" },
  { value: "UAE", label: "United Arab Emirates" },
  { value: "Global", label: "Global" },
];

const languages = [
  "English",
  "French",
  "Chinese",
  "Spanish",
  "German",
  "Arabic",
  "Portuguese",
  "Japanese",
  "Korean",
  "Swahili",
];

const footerLinks = {
  Company: ["About NTONARCH", "Careers", "Press", "Sustainability"],
  "Sell on NTONARCH": [
    "Become a Seller",
    "Fulfillment",
    "Advertising",
    "Global Selling",
  ],
  Support: ["Help Center", "Returns", "Shipping", "Accessibility"],
  "Payment & Security": [
    "Payment Methods",
    "Buyer Protection",
    "Privacy",
    "Terms",
  ],
};

const footerDescriptions = {
  "About NTONARCH":
    "Learn more about NTONARCH and the marketplace we are building.",
  Careers:
    "Explore opportunities to work with the NTONARCH team.",
  Press:
    "Find company announcements, media resources and press information.",
  Sustainability:
    "Learn about our approach to responsible commerce and sustainability.",
  "Become a Seller":
    "Discover how to introduce your products to customers through NTONARCH.",
  Fulfillment:
    "Explore fulfillment and logistics information for marketplace sellers.",
  Advertising:
    "Learn about potential opportunities to promote products on NTONARCH.",
  "Global Selling":
    "Explore the concept of reaching customers across international markets.",
  "Help Center":
    "Find assistance with shopping, accounts, orders and marketplace questions.",
  Returns:
    "Review return information and the process for requesting assistance.",
  Shipping:
    "Learn about delivery options, shipping destinations and order handling.",
  Accessibility:
    "Learn about accessibility and how to contact us with accessibility concerns.",
  "Payment Methods":
    "Review payment options supported by the marketplace.",
  "Buyer Protection":
    "Learn about the buyer support and protection approach.",
  Privacy:
    "Read how personal information is handled.",
  Terms:
    "Review the terms and conditions that apply to using the marketplace.",
};

/* -------------------------------------------------------
   SHARED UI
------------------------------------------------------- */

function SectionHeading({ eyebrow, title, description, action, onAction }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
            {eyebrow}
          </p>
        )}
        <h2 className="font-['Syne'] text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-market-muted">
            {description}
          </p>
        )}
      </div>

      {action && (
        <button
          onClick={onAction}
          className="inline-flex items-center gap-2 text-sm font-semibold text-market-text transition hover:text-[#ff6b00]"
        >
          {action}
          <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
}

function ProductCard({ product, currency, onAdd, onNotify }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="group min-w-0 overflow-hidden rounded-2xl border border-market-border bg-market-card transition duration-200 hover:-translate-y-1 hover:border-[#ff6b00]/50 hover:shadow-xl hover:shadow-black/5">
      <div className="relative aspect-[4/3] overflow-hidden bg-market-soft">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-market-card/95 px-3 py-1 text-[10px] font-bold text-market-text shadow-sm">
            {product.badge}
          </span>
        )}

        <button
          onClick={() => {
            setSaved((value) => !value);
            onNotify(
              saved ? "Removed from your saved items" : "Added to your saved items"
            );
          }}
          aria-label="Save product"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-market-card/95 text-market-text shadow-sm transition hover:text-[#ff6b00]"
        >
          <Heart size={16} fill={saved ? "currentColor" : "none"} />
        </button>

        <button
          onClick={() => onAdd(product)}
          className="absolute bottom-3 right-3 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-[#ff6b00] text-white opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus size={19} />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center gap-1.5 text-xs text-market-muted">
          <Star size={13} className="fill-[#ff6b00] text-[#ff6b00]" />
          <span className="font-semibold text-market-text">{product.rating}</span>
          <span>({product.reviews} reviews)</span>
        </div>

        <h3 className="min-h-10 text-sm font-semibold leading-5 text-market-text">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between gap-2">
          <p className="text-lg font-bold text-market-text">
            {currencies[currency]}
            {product.price.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>

          <button
            onClick={() => onAdd(product)}
            className="rounded-lg border border-market-border px-3 py-2 text-xs font-semibold text-market-text transition hover:border-[#ff6b00] hover:bg-[#ff6b00] hover:text-white"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

function DealCard({ deal, currency, onAdd }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-market-border bg-market-card">
      <div className="relative aspect-[16/10] overflow-hidden bg-market-soft">
        <img
          src={deal.image}
          alt={deal.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-lg bg-[#ff6b00] px-3 py-1.5 text-xs font-bold text-white">
          {deal.badge}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-market-text">{deal.name}</h3>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xl font-bold text-market-text">
            {currencies[currency]}
            {deal.price.toLocaleString("en-US")}
          </span>
          <span className="text-sm text-market-muted line-through">
            {currencies[currency]}
            {deal.oldPrice.toLocaleString("en-US")}
          </span>
        </div>
        <button
          onClick={() => onAdd(deal)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-market-text px-4 py-3 text-sm font-semibold text-market-bg transition hover:bg-[#ff6b00] hover:text-white"
        >
          Add to cart <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}

function EmptyState({ icon: Icon = Package, title, description }) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-market-border bg-market-card px-6 py-12 text-center">
      <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-market-soft text-market-muted">
        <Icon size={25} />
      </div>
      <h3 className="font-['Syne'] text-lg font-bold text-market-text">
        {title}
      </h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-market-muted">
        {description}
      </p>
    </div>
  );
}

/* -------------------------------------------------------
   MARKET SECTIONS
------------------------------------------------------- */

function MarketHero({ onNavigate }) {
  const slides = [
    {
      eyebrow: "A world of possibilities",
      title: "Built for\ninternational commerce.",
      description:
        "Discover products from different markets, explore new brands and shop across borders.",
      tags: ["Multi-currency shopping", "Cross-border commerce", "Buyer support"],
      primary: "Shop global deals",
      secondary: "Start selling",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&q=90",
      target: "deals",
    },
    {
      eyebrow: "Discover something different",
      title: "Find brands worth\nknowing.",
      description:
        "Explore a curated marketplace of products, independent sellers and global brands.",
      tags: ["Brand discovery", "Curated products", "More to explore"],
      primary: "Explore brands",
      secondary: "Browse products",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=90",
      target: "brands",
    },
    {
      eyebrow: "Your next opportunity",
      title: "Take your business\nto the world.",
      description:
        "Introduce your products to a wider audience and explore opportunities to grow.",
      tags: ["Seller opportunities", "Global audience", "Marketplace"],
      primary: "Become a seller",
      secondary: "Explore marketplace",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=90",
      target: "sell",
    },
  ];

  const [active, setActive] = useState(0);
  const slide = slides[active];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate min-h-[420px] overflow-hidden rounded-3xl bg-[#101714] sm:min-h-[470px]">
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45 transition-opacity duration-700"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101714] via-[#101714]/85 to-[#101714]/20" />

      <div className="flex min-h-[420px] max-w-3xl flex-col justify-center px-6 py-12 sm:min-h-[470px] sm:px-12 lg:px-14">
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff9a52]">
          {slide.eyebrow}
        </p>

        <h1 className="whitespace-pre-line font-['Syne'] text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {slide.title}
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
          {slide.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {slide.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium text-white/85 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate(slide.target)}
            className="inline-flex items-center gap-2 rounded-xl bg-[#ff6b00] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#e65f00]"
          >
            {slide.primary} <ArrowRight size={16} />
          </button>
          <button
            onClick={() =>
              onNavigate(slide.target === "sell" ? "all" : "sell")
            }
            className="rounded-xl border border-white/30 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {slide.secondary}
          </button>
        </div>

        <div className="mt-10 flex items-center gap-2">
          {slides.map((item, index) => (
            <button
              key={item.eyebrow}
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${active === index ? "w-9 bg-[#ff6b00]" : "w-4 bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketTrustStrip() {
  const items = [
    { icon: Globe2, title: "Global Marketplace", text: "Explore products across markets" },
    { icon: Truck, title: "Shipping Options", text: "Delivery information at checkout" },
    { icon: ShieldCheck, title: "Buyer Support", text: "Help when you need it" },
    { icon: BadgeCheck, title: "Curated Discovery", text: "Find products and brands" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 py-7 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, text }) => (
        <div
          key={title}
          className="flex items-center gap-3 rounded-xl border border-market-border bg-market-card p-4"
        >
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-market-soft text-[#ff6b00]">
            <Icon size={19} />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-market-text">{title}</p>
            <p className="mt-1 text-[10px] leading-4 text-market-muted">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MarketCategories({ onSelect }) {
  return (
    <section>
      <SectionHeading
        eyebrow="Explore the marketplace"
        title="Shop by category"
        description="Browse different collections and discover something you need."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className="group overflow-hidden rounded-2xl border border-market-border bg-market-card text-left transition hover:-translate-y-1 hover:border-[#ff6b00]/60"
          >
            <div className="aspect-[5/4] overflow-hidden bg-market-soft">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-3">
              <p className="text-sm font-bold text-market-text">{category.name}</p>
              <p className="mt-1 text-[10px] text-market-muted">
                {category.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function MarketFeaturedProducts({ items, currency, onAdd, onNotify, onNavigate }) {
  return (
    <section>
      <SectionHeading
        eyebrow="Handpicked for you"
        title="Featured products"
        description="Explore a selection of products across the marketplace."
        action="View all products"
        onAction={() => onNavigate("all")}
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
        {items.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            currency={currency}
            onAdd={onAdd}
            onNotify={onNotify}
          />
        ))}
      </div>
    </section>
  );
}

function MarketDeals({ currency, onAdd }) {
  return (
    <div>
      <div className="mb-8 rounded-2xl bg-[#171a18] px-6 py-8 text-white sm:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9a52]">
              Limited-time selections
            </p>
            <h2 className="font-['Syne'] text-3xl font-bold sm:text-4xl">
              Today's best deals.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">
              Explore selected products and compare their listed prices.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Clock3 size={17} /> Deal selections
          </div>
        </div>
      </div>

      <SectionHeading
        eyebrow="Worth a closer look"
        title="Featured deals"
        description="Selected offers from the NTONARCH MARKET sample catalogue."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {deals.map((deal) => (
          <DealCard
            key={deal.id}
            deal={deal}
            currency={currency}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );
}

function MarketPrime({ onNavigate }) {
  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-3xl bg-[#101714] p-7 text-white sm:p-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff6b00]/40 bg-[#ff6b00]/10 px-3 py-1.5 text-xs font-bold text-[#ff9a52]">
            <Zap size={14} /> NTONARCH PRIME
          </span>
          <h2 className="mt-6 font-['Syne'] text-4xl font-extrabold leading-tight sm:text-5xl">
            A more considered way to shop.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
            Discover the idea behind a premium shopping experience, with
            selected products and delivery-focused shopping options.
          </p>
          <button
            onClick={() => onNavigate("all")}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#ff6b00] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#e65f00]"
          >
            Explore products <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: Package, title: "Selected products", text: "Browse products highlighted across the marketplace." },
          { icon: Truck, title: "Delivery information", text: "Review available delivery options for each listing." },
          { icon: Headphones, title: "Shopping support", text: "Find help with marketplace and order questions." },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-market-border bg-market-card p-5">
            <Icon className="text-[#ff6b00]" size={23} />
            <h3 className="mt-4 font-bold text-market-text">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-market-muted">{text}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-market-muted">
        Prime is currently presented as a marketplace concept. Subscription,
        membership and delivery benefits are not connected to a live service.
      </p>
    </div>
  );
}

function MarketBestSellers() {
  return (
    <div>
      <SectionHeading
        eyebrow="Popular picks"
        title="Best sellers"
        description="A selection of product names from the supplied marketplace catalogue."
      />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {bestsellers.map((name, index) => (
          <div
            key={name}
            className="flex items-center gap-4 rounded-2xl border border-market-border bg-market-card p-5"
          >
            <span className="font-['Syne'] text-2xl font-extrabold text-market-muted/50">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-market-text">{name}</p>
              <p className="mt-1 text-xs text-market-muted">Product listing</p>
            </div>
            <TrendingUp size={18} className="text-[#ff6b00]" />
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-market-muted">
        Product images, prices and listing details can be added when the
        complete bestsellers catalogue is available.
      </p>
    </div>
  );
}

function MarketNewReleases() {
  return (
    <div>
      <SectionHeading
        eyebrow="Fresh finds"
        title="New releases"
        description="Discover the latest additions to the marketplace."
      />
      <EmptyState
        icon={Sparkles}
        title="New releases are on the way"
        description="There are no new-release products in the supplied catalogue yet. Newly added products can appear here once the product data is connected."
      />
    </div>
  );
}

function MarketCategoryPage({ category, currency, onAdd, onNotify }) {
  const categoryInfo = categories.find((item) => item.id === category);
  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <SectionHeading
        eyebrow="Browse category"
        title={categoryInfo?.name || "Products"}
        description={categoryInfo?.description || "Explore available products."}
      />

      {categoryProducts.length ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currency={currency}
              onAdd={onAdd}
              onNotify={onNotify}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Package}
          title="No products in this category yet"
          description="Products will appear here when listings are added to this category."
        />
      )}
    </div>
  );
}

function MarketGlobalBrands({ onNotify }) {
  return (
    <div>
      <SectionHeading
        eyebrow="Discover the names"
        title="Global brands"
        description="Explore the brand names and categories included in the marketplace concept."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => onNotify(`${brand.name} brand page is not connected yet`)}
            className="group rounded-2xl border border-market-border bg-market-card p-5 text-left transition hover:border-[#ff6b00]/60"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-market-soft font-['Syne'] text-2xl font-extrabold text-market-text transition group-hover:bg-[#ff6b00] group-hover:text-white">
              {brand.initial}
            </div>
            <h3 className="mt-5 text-lg font-bold text-market-text">{brand.name}</h3>
            <p className="mt-1 text-xs text-market-muted">{brand.category}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function MarketSell({ onNotify }) {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-[#101714] px-6 py-10 text-white sm:px-12 sm:py-14">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9a52]">
          For businesses and entrepreneurs
        </p>
        <h2 className="mt-5 max-w-2xl font-['Syne'] text-4xl font-extrabold leading-tight sm:text-5xl">
          Your products deserve a wider market.
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
          Explore the opportunity to introduce your products to customers
          through NTONARCH MARKET.
        </p>
        <button
          onClick={() => onNotify("Seller registration is not connected yet")}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#ff6b00] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#e65f00]"
        >
          Get started <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: Store, title: "Showcase your products", text: "Create a space for your products and brand." },
          { icon: Globe2, title: "Reach wider audiences", text: "Explore opportunities beyond your local market." },
          { icon: TrendingUp, title: "Grow your business", text: "Build your presence as your catalogue develops." },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-market-border bg-market-card p-5">
            <Icon size={23} className="text-[#ff6b00]" />
            <h3 className="mt-4 font-bold text-market-text">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-market-muted">{text}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-market-muted">
        Seller registration, product uploads and seller dashboards are not
        connected in this frontend component yet.
      </p>
    </div>
  );
}

/* -------------------------------------------------------
   SIDEBAR
------------------------------------------------------- */

function MarketSidebar({ active, onNavigate, open, onClose }) {
  return (
    <>
      {open && (
        <button
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/55 lg:hidden"
        />
      )}

      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 flex w-[280px] flex-col border-r border-market-border bg-market-bg transition-transform duration-300 lg:sticky lg:top-0 lg:z-20 lg:h-screen lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex h-[76px] items-center justify-between border-b border-market-border px-5">
          <div className="flex items-center gap-3">
            <img
              src="/images/Ntonarch logo1.png"
              alt="NTONARCH"
              className="h-9 w-9 rounded-lg object-contain"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div>
              <p className="font-['Syne'] text-sm font-extrabold tracking-wide text-market-text">
                NTONARCH
              </p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
                Market
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-market-muted hover:bg-market-soft lg:hidden"
          >
            <X size={19} />
          </button>
        </div>

        <div className="px-4 pt-7">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-market-muted">
            Marketplace
          </p>

          <nav className="max-h-[calc(100dvh-350px)] space-y-1 overflow-y-auto overflow-x-hidden overscroll-contain px-1 [scrollbar-width:thin]">                  {navigation.map(({ id, label, icon: Icon }) => {
            const selected = active === id;

            return (
              <button
                key={id}
                onClick={() => {
                  onNavigate(id);
                  onClose();
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${selected
                  ? "bg-[#ff6b00] text-white"
                  : "text-market-muted hover:bg-market-soft hover:text-market-text"
                  }`}
              >
                <Icon size={17} />
                <span className="flex-1">{label}</span>
                {selected && <ChevronRight size={15} />}
              </button>
            );
          })}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <div className="rounded-2xl border border-market-border bg-market-card p-4">
            <div className="mb-3 grid h-9 w-9 place-items-center rounded-xl bg-market-soft text-[#ff6b00]">
              <Headphones size={18} />
            </div>
            <p className="text-sm font-bold text-market-text">Need a hand?</p>
            <p className="mt-1 text-xs leading-5 text-market-muted">
              Visit our support section for marketplace assistance.
            </p>
            <button
              onClick={() => {
                onNavigate("all");
                onClose();
              }}
              className="mt-3 text-xs font-bold text-[#ff6b00]"
            >
              Explore marketplace <ArrowRight className="ml-1 inline" size={13} />
            </button>
          </div>
          <p className="mt-4 text-center text-[10px] text-market-muted">
            © {new Date().getFullYear()} NTONARCH
          </p>
        </div>
      </aside>
    </>
  );
}

/* -------------------------------------------------------
   HEADER
------------------------------------------------------- */

function MarketHeader({
  onMenu,
  search,
  setSearch,
  onSearch,
  region,
  setRegion,
  currency,
  setCurrency,
  language,
  setLanguage,
  theme,
  setTheme,
  cartCount,
  onCart,
  onNotify,
}) {
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-market-border bg-market-bg/95 backdrop-blur-xl">
      <div className="flex min-h-[72px] items-center gap-3 px-4 sm:px-6 xl:px-8">
        <button
          onClick={onMenu}
          className="rounded-xl border border-market-border p-2.5 text-market-text hover:bg-market-soft lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={19} />
        </button>

        <div className="hidden min-w-0 items-center gap-2 text-xs text-market-muted xl:flex">
          <MapPin size={15} />
          <select
            value={region}
            onChange={(event) => setRegion(event.target.value)}
            className="max-w-[135px] bg-transparent font-semibold text-market-text outline-none"
            aria-label="Delivery region"
          >
            {regions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSearch();
          }}
          className="flex min-w-0 flex-1 items-center rounded-xl border border-market-border bg-market-card focus-within:border-[#ff6b00]"
        >
          <Search size={17} className="ml-3 shrink-0 text-market-muted" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products, brands and more..."
            className="h-11 min-w-0 flex-1 bg-transparent px-3 text-sm text-market-text outline-none placeholder:text-market-muted"
          />
          <button
            type="submit"
            className="hidden h-11 items-center gap-2 rounded-r-xl bg-[#ff6b00] px-5 text-xs font-bold text-white transition hover:bg-[#e65f00] sm:flex"
          >
            Search
          </button>
        </form>

        <div className="hidden items-center gap-2 md:flex">
          <select
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
            className="h-10 rounded-lg border border-market-border bg-market-card px-2 text-xs font-semibold text-market-text outline-none"
            aria-label="Currency"
          >
            {Object.keys(currencies).map((code) => (
              <option key={code} value={code}>{code}</option>
            ))}
          </select>

          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : theme === "light" ? "system" : "dark")
            }
            className="grid h-10 w-10 place-items-center rounded-lg border border-market-border text-market-muted transition hover:bg-market-soft hover:text-market-text"
            title={`Theme: ${theme}`}
          >
            {theme === "dark" ? (
              <Moon size={17} />
            ) : theme === "light" ? (
              <Sun size={17} />
            ) : (
              <Monitor size={17} />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setLanguageOpen((value) => !value)}
              className="flex h-10 items-center gap-2 rounded-lg border border-market-border px-3 text-xs font-semibold text-market-text hover:bg-market-soft"
            >
              <Languages size={15} />
              <span className="hidden xl:inline">{language}</span>
              <ChevronDown size={13} />
            </button>

            {languageOpen && (
              <div className="absolute right-0 top-12 z-50 max-h-72 w-44 overflow-y-auto rounded-xl border border-market-border bg-market-card p-1 shadow-xl">
                {languages.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setLanguage(item);
                      setLanguageOpen(false);
                      if (item !== "English") {
                        onNotify("Language selection is saved locally; translations are not connected yet.");
                      }
                    }}
                    className={`w-full rounded-lg px-3 py-2 text-left text-xs hover:bg-market-soft ${language === item ? "font-bold text-[#ff6b00]" : "text-market-text"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={onCart}
          className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-market-border text-market-text transition hover:bg-market-soft"
          aria-label="Open cart"
        >
          <ShoppingCart size={18} />
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#ff6b00] px-1 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <div className="flex items-center justify-between border-t border-market-border px-4 py-2.5 text-[10px] text-market-muted sm:px-6 xl:px-8">
        <div className="flex items-center gap-2">
          <Globe2 size={13} />
          <span>
            {region === "NG"
              ? "Shopping in Nigeria"
              : region === "EU"
                ? "Shopping in the European Union"
                : region === "UAE"
                  ? "Shopping in the UAE"
                  : region === "UK"
                    ? "Shopping in the United Kingdom"
                    : region === "US"
                      ? "Shopping in the United States"
                      : "Explore the global marketplace"}
          </span>
        </div>
        <div className="hidden items-center gap-4 sm:flex">
          <span className="inline-flex items-center gap-1"><Headphones size={12} /> Support</span>
          <span className="inline-flex items-center gap-1"><RotateCcw size={12} /> Returns information</span>
          <span className="inline-flex items-center gap-1"><Package size={12} /> Order information</span>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------
   FOOTER
------------------------------------------------------- */

function MarketFooter({ onOpenInfo, onNotify }) {
  const [email, setEmail] = useState("");

  return (
    <footer className="mt-16 border-t border-market-border bg-market-card">
      <div className="grid gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-['Syne'] text-xl font-extrabold tracking-wide text-market-text">
            NTONARCH<span className="text-[#ff6b00]">.</span>
          </p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-market-muted">
            Global Market
          </p>
          <p className="mt-5 max-w-sm text-sm leading-6 text-market-muted">
            Discover products, explore brands and find new opportunities
            through the NTONARCH marketplace.
          </p>

          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
              <button
                key={index}
                onClick={() => onNotify("Social media link is not configured yet")}
                className="grid h-9 w-9 place-items-center rounded-lg border border-market-border text-market-muted transition hover:border-[#ff6b00] hover:text-[#ff6b00]"
              >
                <Icon size={15} />
              </button>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="mb-4 text-sm font-bold text-market-text">{heading}</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onOpenInfo(link)}
                    className="text-left text-xs text-market-muted transition hover:text-[#ff6b00]"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-market-border px-5 py-5 text-center text-[10px] text-market-muted sm:flex sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} NTONARCH. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Built for a connected marketplace.</p>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------
   MAIN MARKET COMPONENT
------------------------------------------------------- */

export default function Market() {
  const [active, setActive] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const [currency, setCurrency] = useState("USD");
  const [region, setRegion] = useState("Global");
  const [language, setLanguage] = useState("English");

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme-mode") || "system";
    } catch {
      return "system";
    }
  });

  const [systemDark, setSystemDark] = useState(false);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");
  const [infoModal, setInfoModal] = useState("");

  const [cartOpen, setCartOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("all");

  const isDark = theme === "dark" || (theme === "system" && systemDark);

  useEffect(() => {
    try {
      localStorage.setItem("theme-mode", theme);
    } catch {
      // Local storage may be unavailable in some environments.
    }
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDark(media.matches);

    const handleChange = (event) => setSystemDark(event.matches);
    media.addEventListener?.("change", handleChange);

    return () => media.removeEventListener?.("change", handleChange);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  const notify = (message) => setToast(message);

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
    notify(`${product.name} added to your cart`);
  };

  const removeFromCart = (index) => {
    setCart((current) => current.filter((_, itemIndex) => itemIndex !== index));
  };

  const handleSearch = () => {
    setSubmittedSearch(search.trim());
    setActive("all");
    setCategoryFilter("all");
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        !submittedSearch ||
        product.name.toLowerCase().includes(submittedSearch.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" || product.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [submittedSearch, categoryFilter]);

  const cartCount = cart.length;

  const cartTotal = cart.reduce((total, product) => total + product.price, 0);

  const navigate = (section) => {
    setActive(section);
    setSidebarOpen(false);
    setSubmittedSearch("");
    setSearch("");
    setCategoryFilter("all");
    setCartOpen(false);
  };

  const renderContent = () => {
    switch (active) {
      case "deals":
        return <MarketDeals currency={currency} onAdd={addToCart} />;

      case "prime":
        return <MarketPrime onNavigate={navigate} />;

      case "bestsellers":
        return <MarketBestSellers />;

      case "new":
        return <MarketNewReleases />;

      case "electronics":
      case "fashion":
      case "home":
        return (
          <MarketCategoryPage
            category={active}
            currency={currency}
            onAdd={addToCart}
            onNotify={notify}
          />
        );

      case "brands":
        return <MarketGlobalBrands onNotify={notify} />;

      case "sell":
        return <MarketSell onNotify={notify} />;

      default:
        return (
          <div className="space-y-10">
            {submittedSearch && (
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-market-border bg-market-card p-4">
                <p className="text-sm text-market-text">
                  Search results for <strong>“{submittedSearch}”</strong>
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSubmittedSearch("");
                  }}
                  className="text-xs font-bold text-[#ff6b00]"
                >
                  Clear search
                </button>
              </div>
            )}

            <MarketHero onNavigate={navigate} />
            <MarketTrustStrip />

            <MarketCategories
              onSelect={(category) => {
                if (["electronics", "fashion", "home"].includes(category)) {
                  navigate(category);
                } else {
                  setCategoryFilter(category);
                  setActive("all");
                  setSubmittedSearch("");
                  setSearch("");
                }
              }}
            />

            {categoryFilter !== "all" && (
              <div className="flex items-center justify-between rounded-xl border border-market-border bg-market-card p-4">
                <p className="text-sm text-market-text">
                  Showing: <strong className="capitalize">{categoryFilter}</strong>
                </p>
                <button
                  onClick={() => setCategoryFilter("all")}
                  className="text-xs font-bold text-[#ff6b00]"
                >
                  Clear filter
                </button>
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <MarketFeaturedProducts
                items={filteredProducts}
                currency={currency}
                onAdd={addToCart}
                onNotify={notify}
                onNavigate={navigate}
              />
            ) : (
              <EmptyState
                icon={Search}
                title="No matching products"
                description="Try another search term or clear your current category filter."
              />
            )}

            <section>
              <SectionHeading
                eyebrow="Don't miss out"
                title="Today's best deals"
                description="Take a look at selected offers from the marketplace."
                action="View all deals"
                onAction={() => navigate("deals")}
              />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {deals.map((deal) => (
                  <DealCard
                    key={deal.id}
                    deal={deal}
                    currency={currency}
                    onAdd={addToCart}
                  />
                ))}
              </div>
            </section>

            <section>
              <SectionHeading
                eyebrow="Meet the names"
                title="Featured brands"
                description="Explore the brands included in the marketplace catalogue."
                action="Explore brands"
                onAction={() => navigate("brands")}
              />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
                {brands.map((brand) => (
                  <button
                    key={brand.name}
                    onClick={() => navigate("brands")}
                    className="rounded-2xl border border-market-border bg-market-card p-5 text-center transition hover:border-[#ff6b00]/60"
                  >
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-market-soft font-['Syne'] text-xl font-extrabold text-market-text">
                      {brand.initial}
                    </span>
                    <p className="mt-3 text-sm font-bold text-market-text">{brand.name}</p>
                    <p className="mt-1 text-[10px] text-market-muted">{brand.category}</p>
                  </button>
                ))}
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div
      className={`${isDark ? "dark" : ""} market-theme`}
      data-theme={isDark ? "dark" : "light"}
    >
      <style>{`
        .market-theme {
          --market-bg: #f5f5f7;
          --market-card: #ffffff;
          --market-soft: #f0f0f2;
          --market-border: #dde0e6;
          --market-text: #111114;
          --market-muted: #666672;
          color: var(--market-text);
          background: var(--market-bg);
          color-scheme: light;
        }
        .market-theme[data-theme="dark"] {
          --market-bg: #0e0e10;
          --market-card: #161618;
          --market-soft: #1c1c20;
          --market-border: #2a2a2e;
          --market-text: #e8e8ec;
          --market-muted: #888890;
          color-scheme: dark;
        }
        .market-theme .bg-market-bg { background-color: var(--market-bg); }
        .market-theme .bg-market-card { background-color: var(--market-card); }
        .market-theme .bg-market-soft { background-color: var(--market-soft); }
        .market-theme .border-market-border { border-color: var(--market-border); }
        .market-theme .text-market-text { color: var(--market-text); }
        .market-theme .text-market-muted { color: var(--market-muted); }
        .market-theme .text-market-bg { color: var(--market-bg); }
        .market-theme .bg-market-text { background-color: var(--market-text); }
        .market-theme .text-market-card { color: var(--market-card); }
      `}</style>

      <div className="max-h-screen bg-market-bg text-market-text">
        <div className="flex min-h-screen">
          <MarketSidebar
            active={active}
            onNavigate={navigate}
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <div className="min-w-0 flex-1">
            <MarketHeader
              onMenu={() => setSidebarOpen(true)}
              search={search}
              setSearch={setSearch}
              onSearch={handleSearch}
              region={region}
              setRegion={setRegion}
              currency={currency}
              setCurrency={setCurrency}
              language={language}
              setLanguage={setLanguage}
              theme={theme}
              setTheme={setTheme}
              cartCount={cartCount}
              onCart={() => setCartOpen(true)}
              onNotify={notify}
            />

            <main className="mx-auto w-full max-w-[1600px] px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
              {renderContent()}
            </main>

            <MarketFooter
              onOpenInfo={setInfoModal}
              onNotify={notify}
            />
          </div>
        </div>
      </div>

      {/* CART DRAWER */}
      {cartOpen && (
        <div className="fixed inset-0 z-[70] flex justify-end">
          <button
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
            className="absolute inset-0 bg-black/55"
          />
          <div className="relative flex h-full w-full max-w-md flex-col border-l border-market-border bg-market-bg shadow-2xl">
            <div className="flex items-center justify-between border-b border-market-border px-5 py-5">
              <div>
                <h2 className="font-['Syne'] text-xl font-bold text-market-text">
                  Your cart
                </h2>
                <p className="mt-1 text-xs text-market-muted">
                  {cartCount} {cartCount === 1 ? "item" : "items"}
                </p>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="rounded-lg p-2 text-market-muted hover:bg-market-soft"
              >
                <X size={19} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingCart size={36} className="text-market-muted" />
                  <h3 className="mt-4 font-bold text-market-text">Your cart is empty</h3>
                  <p className="mt-2 text-sm text-market-muted">
                    Add products to your cart and they will appear here.
                  </p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-5 rounded-xl bg-[#ff6b00] px-5 py-3 text-sm font-bold text-white"
                  >
                    Continue shopping
                  </button>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex gap-3 rounded-xl border border-market-border bg-market-card p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-market-text">
                        {item.name}
                      </p>
                      <p className="mt-2 text-sm font-bold text-market-text">
                        {currencies[currency]}{item.price.toLocaleString("en-US")}
                      </p>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="mt-2 text-xs font-semibold text-[#ff6b00]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-market-border p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-market-muted">Subtotal</span>
                  <strong className="text-lg text-market-text">
                    {currencies[currency]}
                    {cartTotal.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </strong>
                </div>
                <button
                  onClick={() => notify("Checkout is not connected yet")}
                  className="w-full rounded-xl bg-[#ff6b00] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#e65f00]"
                >
                  Continue to checkout
                </button>
                <p className="mt-3 text-center text-[10px] text-market-muted">
                  Checkout and payment processing are not connected yet.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER INFORMATION MODAL */}
      {infoModal && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/55 p-4">
          <div className="w-full max-w-md rounded-2xl border border-market-border bg-market-card p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
                  NTONARCH MARKET
                </p>
                <h2 className="mt-2 font-['Syne'] text-xl font-bold text-market-text">
                  {infoModal}
                </h2>
              </div>
              <button
                onClick={() => setInfoModal("")}
                className="rounded-lg p-2 text-market-muted hover:bg-market-soft"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mt-4 text-sm leading-7 text-market-muted">
              {footerDescriptions[infoModal] ||
                "More information about this section will be available soon."}
            </p>
            <button
              onClick={() => setInfoModal("")}
              className="mt-6 w-full rounded-xl bg-[#ff6b00] px-4 py-3 text-sm font-bold text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 z-[100] flex max-w-[calc(100%-32px)] -translate-x-1/2 items-center gap-3 rounded-xl bg-[#171a18] px-4 py-3 text-sm font-medium text-white shadow-2xl">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ff6b00]">
            <Check size={14} />
          </span>
          {toast}
          <button onClick={() => setToast("")} className="ml-2 text-white/60">
            <X size={15} />
          </button>
        </div>
      )}
    </div>
  );
}