
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Building2,
} from "lucide-react";

const heroImages = [
   "/assets/computer.jpg",
   "/assets/engineering.jpg",
];

const divisions = [
  ["Ntonarch Media", "Media & communications"],
  ["Ntonarch Market", "Commerce & trade"],
  ["Ntonarch Engineering", "Engineering & technology"],
  ["Ntonarch Events", "Events & experiences"],
  ["Ntonarch Computer", "Digital solutions"],
  ["Ntonarch Farms", "Agriculture"],
  ["Ntonarch Properties", "Real estate"],
  ["Ntonarch Foundation", "Community development"],
  ["Ntonarch Catering", "Food & hospitality"],
  ["Ntonarch Waste", "Environmental services"],
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Exploring better ideas and practical solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Building relationships through trust and accountability.",
  },
  {
    icon: Target,
    title: "Excellence",
    text: "Maintaining quality in everything we do.",
  },
];

export default function About() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#f7f7f5] text-[#171b18]">

      {/* HERO — TWO IMAGE BACKGROUND */}
      <section className="relative flex min-h-[520px] items-end overflow-hidden bg-[#101714] sm:min-h-[580px]">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
              activeImage === index ? "opacity-50" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-[#101714]/95 via-[#101714]/65 to-[#101714]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101714]/80 via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-36 sm:px-10">
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00]" />
            About NTONARCH
          </span>

          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            A network of ideas.
            <span className="block text-[#ff6b00]">Built for possibilities.</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            NTONARCH ACUMEN NETWORK brings together diverse business
            interests, people and opportunities under one shared vision.
          </p>

          <a
            href="#about-overview"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ff6b00] px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#171b18]"
          >
            Explore our network
            <ArrowUpRight size={16} />
          </a>

          <div className="mt-12 flex items-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  activeImage === index
                    ? "w-9 bg-[#ff6b00]"
                    : "w-4 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW + NAME */}
      <section id="about-overview" className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff6b00]">
              Who we are
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              One identity.
              <br />
              Many opportunities.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-neutral-600">
              NTONARCH ACUMEN NETWORK is a diversified business network
              connecting different sectors through enterprise, innovation
              and strategic collaboration. We focus on developing
              opportunities, delivering practical solutions and creating
              lasting value.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-6">
              <div>
                <p className="text-2xl font-semibold">10</p>
                <p className="mt-1 text-xs text-neutral-500">Business divisions</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">01</p>
                <p className="mt-1 text-xs text-neutral-500">Unified network</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#ff6b00]">∞</p>
                <p className="mt-1 text-xs text-neutral-500">Possibilities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-2xl border border-neutral-200 bg-white sm:grid-cols-3">
          {[
            ["NTONARCH", "Our collective identity"],
            ["ACUMEN", "Insight and strategic thinking"],
            ["NETWORK", "People and collaboration"],
          ].map(([title, description], index) => (
            <div
              key={title}
              className={`p-6 sm:p-7 ${
                index !== 2 ? "border-b border-neutral-200 sm:border-b-0 sm:border-r" : ""
              }`}
            >
              <span className="text-xs text-[#ff6b00]">0{index + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-neutral-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS DIVISIONS */}
      <section className="bg-[#101714] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff6b00]">
                Our ecosystem
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Our business divisions
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/55">
              A collection of businesses operating across different sectors,
              connected by a common vision.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map(([name, category], index) => (
              <div
                key={name}
                className="group flex items-center justify-between gap-4 bg-[#101714] p-5 transition hover:bg-[#1c2822] sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="pt-1 text-xs text-[#ff6b00]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">{name}</h3>
                    <p className="mt-1 text-xs text-white/45">{category}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ff6b00]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl bg-[#ff6b00] p-7 text-white sm:p-9">
            <Target size={25} />
            <p className="mt-7 text-xs font-semibold uppercase tracking-widest text-white/70">
              Our mission
            </p>
            <h3 className="mt-3 max-w-md text-2xl font-semibold leading-snug sm:text-3xl">
              Creating opportunities through innovation, enterprise and
              purposeful action.
            </h3>
          </div>

          <div className="rounded-2xl bg-[#e9ebe6] p-7 sm:p-9">
            <Eye size={25} />
            <p className="mt-7 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Our vision
            </p>
            <h3 className="mt-3 max-w-md text-2xl font-semibold leading-snug sm:text-3xl">
              Building a respected network of businesses that creates
              lasting value and positive impact.
            </h3>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff6b00]">
            What guides us
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 border-t border-neutral-200 pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0e6] text-[#ff6b00]">
                  <Icon size={19} />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC APPROACH */}
      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ff6b00]">
              Looking ahead
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Growth through collaboration.
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-500">
              We approach growth through partnerships, strategic planning,
              responsible resource management and the exploration of new
              opportunities.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Strategic development", "Building sustainable business opportunities."],
              ["Partnerships", "Creating value through collaboration."],
              ["Resource management", "Using resources responsibly and effectively."],
              ["Market opportunities", "Responding to changing needs across sectors."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl bg-[#f7f7f5] p-5">
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#101714] px-6 py-16 text-white sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ff6b00]">
              NTONARCH ACUMEN NETWORK
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let's build something meaningful.
            </h2>
            <p className="mt-3 text-sm text-white/50">
              Ideas, partnerships and opportunities start with a conversation.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#ff6b00] px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-[#101714]"
          >
            Contact us
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
