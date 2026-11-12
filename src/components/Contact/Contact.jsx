import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  X,
  Camera,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const ORANGE = "#ff6b00";

const teamMembers = [
  {
    name: "Enah Ebi Ngoro",
    role: "Marketing Manager",
    image: "/assets/Enah Ebi.jpg",
    social: "https://www.facebook.com/share/1AQc68zbbY/",
  },
  {
    name: "Chibueze Ogwu",
    role: "Chief Technology Manager",
    image: "/assets/Agu1.jpg",
    social: "https://www.facebook.com/chibueze.ogwu.5",
  },
  {
    name: "Agbor Philemon Agbor",
    role: "Chief Operating/Financial Officer",
    image: "/assets/Philemon.jpg",
    social: "https://www.facebook.com/wilmont.agbor",
  },
  {
    name: "Ufot, Patrick Samuel",
    role: "Logistics (Delivery) Manager",
    image: "/assets/Patrick1.png",
    social: "https://www.facebook.com/patrick.ufot.5",
  },
  {
    name: "Bassey Esikpong Nton",
    role: "Farms Manager",
    image: "/assets/esikpong1.png",
    social: "https://www.facebook.com/bassey.esikpong.nton",
  },
  {
    name: "Izuchukwu Ndiodimma",
    role: "Social Media Manager",
    image: "/assets/IZ.png",
    social: "https://www.facebook.com/share/1LFh8TrrUr/?mibextid=wwXIfr",
  },
  {
    name: "Tomi Oluwaleye",
    role: "Procurement Manager",
    image: "/assets/Tomi.png",
    social: "https://www.facebook.com/bassey.esikpong.nton",
  },
  {
    name: "Victory Sakey",
    role: "IT Manager",
    image: "/assets/Victory Sakey.jpg",
    social: "https://www.facebook.com/profile.php?id=100090378947238",
  },
];

const stakeholders = [
  {
    name: "Esikup Kennedy",
    role: "Board Member, Chief Executive",
    image: "/assets/es.jpg",
    social: "https://web.facebook.com/esikup.kennedy",
    platform: "facebook",
  },
  {
    name: "Major Ogabor",
    role: "Board Member, Secretary",
    image: "/assets/mj.jpg",
    social: "https://web.facebook.com/engr.major.ogabor",
    platform: "facebook",
  },
  {
    name: "Baribor Saturday",
    role: "Board Member, Technical",
    image: "/assets/Baribor Saturday.jpg",
    social: "https://www.linkedin.com/in/bariborsaturday/",
    platform: "linkedin",
  },
  {
    name: "Ekomabasi Ukanga",
    role: "Board Member, Technical",
    image: "/assets/Ekomabasi Ukanga.jfif",
    social: "https://www.linkedin.com/in/ekomabasi-ukanga-aaa72a225/",
    platform: "linkedin",
  },
  {
    name: "Gideon Onyekwelu",
    role: "Board Member, Operations",
    image: "/assets/Gideon Onyekwelu.jpg",
    social: "https://www.linkedin.com/in/gideon-onyekwelu-840a19256/",
    platform: "linkedin",
  },
];

const trustees = [
  {
    name: "Princess Nkom",
    role: "Chief Executive, Board of Trustees",
    image: "/assets/Princess2.jpg",
    social: "https://web.facebook.com/nkom.bola",
    platform: "facebook",
  },
  {
    name: "Babatunde Monye",
    role: "Deputy Chief Executive, Board of Trustees",
    image: "/assets/monye babatunde.jpg",
    social: "https://www.linkedin.com/in/babatundemonye/",
    platform: "linkedin",
  },
  {
    name: "Bassey Nton Nton",
    role: "CEO",
    image: "/assets/Bassey Nton Nton.jpg",
    social: "https://www.linkedin.com/feed/",
    platform: "linkedin",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
        {eyebrow}
      </p>

      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-xl text-sm leading-7 text-white/55">
          {description}
        </p>
      )}
    </div>
  );
}

function SocialLink({ href, platform = "facebook" }) {
  const Icon =
    platform === "linkedin"
      ? Linkedin
      : platform === "instagram"
        ? Instagram
        : Facebook;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${platform} profile`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-[#ff6b00] hover:bg-[#ff6b00] hover:text-white"
    >
      <Icon size={16} />
    </a>
  );
}

function PersonCard({ person, onImageClick }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-[#ff6b00]/40">
      <button
        type="button"
        onClick={() => onImageClick(person)}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-white/5 text-left"
        aria-label={`View photo of ${person.name}`}
      >
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
        />

        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition group-hover:bg-[#ff6b00]">
          <Camera size={16} />
        </span>
      </button>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-white">{person.name}</h3>

        <p className="mt-1 min-h-10 text-xs leading-5 text-white/50">
          {person.role}
        </p>

        {person.social && (
          <div className="mt-3 border-t border-white/[0.08] pt-3">
            <SocialLink
              href={person.social}
              platform={person.platform || "facebook"}
            />
          </div>
        )}
      </div>
    </article>
  );
}

export default function Contact() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState("");

  const closeModal = () => setSelectedImage(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email");
    const phone = formData.get("phone");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s()-]{10,}$/;

    if (!emailRegex.test(email)) {
      setFormStatus("error");
      setFormMessage("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setFormStatus("error");
      setFormMessage("Please enter a valid phone number.");
      return;
    }

    setFormStatus("loading");
    setFormMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xwpoleed", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.errors?.[0]?.message ||
            "Something went wrong. Please try again."
        );
      }

      form.reset();
      setFormStatus("success");
      setFormMessage(
        "Your message has been sent successfully. We'll get back to you soon."
      );
    } catch (error) {
      setFormStatus("error");
      setFormMessage(
        error.message || "Unable to send your message. Please try again."
      );
    }
  };

  return (
    <main className="min-h-screen mt-20 overflow-hidden bg-[#101714] text-white">
      {/* Page intro */}
      <section className="relative border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
              <span className="h-px w-8 bg-[#ff6b00]" />
              Get in touch
            </p>

            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Let's start a <span className="text-[#ff6b00]">conversation.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Have a question, business enquiry or partnership opportunity?
              We'd love to hear from you. Reach out to our team and let's
              explore what we can accomplish together.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#ff6b00]/[0.07] blur-[100px]" />
      </section>

      {/* Contact information and form */}
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-16">
        {/* Contact details */}
        <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff6b00]">
              Contact information
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              We'd love to hear from you.
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/50">
              Get in touch through any of the channels below. Our team is ready
              to assist you.
            </p>
          </div>

          <div className="mt-8 space-y-7">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ff6b00]/10 text-[#ff6b00]">
                <Phone size={19} />
              </span>

              <div>
                <p className="text-xs text-white/40">Phone number</p>
                <a
                  href="tel:+2348103562802"
                  className="mt-1 block text-sm font-medium text-white transition hover:text-[#ff6b00]"
                >
                  (+234) 8103562802
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ff6b00]/10 text-[#ff6b00]">
                <Mail size={19} />
              </span>

              <div>
                <p className="text-xs text-white/40">Email address</p>
                <a
                  href="mailto:ntonarch@gmail.com"
                  className="mt-1 block break-all text-sm font-medium text-white transition hover:text-[#ff6b00]"
                >
                  ntonarch@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ff6b00]/10 text-[#ff6b00]">
                <MapPin size={19} />
              </span>

              <div>
                <p className="text-xs text-white/40">Administration office</p>
                <p className="mt-1 text-sm leading-6 text-white/80">
                  Block C, Flat (House) 2, State House Quarters, Karu, Abuja
                  Municipal Area Council (AMAC), Abuja, Nigeria.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto border-t border-white/10 pt-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              Follow our social channels
            </p>

            <div className="flex gap-3">
              <SocialLink
                href="https://x.com/home"
                platform="facebook"
              />
              <SocialLink
                href="https://www.instagram.com/ntonarch/"
                platform="instagram"
              />
              <SocialLink
                href="https://www.facebook.com/"
                platform="facebook"
              />

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/55 transition hover:border-[#ff6b00] hover:bg-[#ff6b00] hover:text-white"
              >
                TT
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff6b00]">
            Send us a message
          </p>

          <h2 className="mt-3 text-2xl font-semibold">How can we help?</h2>

          <p className="mt-2 text-sm text-white/50">
            Complete the form and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-medium text-white/70"
                >
                  Full name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#101714] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#ff6b00]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-xs font-medium text-white/70"
                >
                  Phone number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="+234..."
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#101714] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#ff6b00]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-xs font-medium text-white/70"
              >
                Email address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-white/10 bg-[#101714] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#ff6b00]"
              />
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-xs font-medium text-white/70"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="What is your enquiry about?"
                required
                className="w-full rounded-lg border border-white/10 bg-[#101714] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#ff6b00]"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-medium text-white/70"
              >
                Your message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full resize-y rounded-lg border border-white/10 bg-[#101714] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#ff6b00]"
              />
            </div>

            {formMessage && (
              <div
                role="status"
                className={`flex items-start gap-3 rounded-lg p-4 text-sm ${
                  formStatus === "success"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {formStatus === "success" ? (
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                ) : (
                  <AlertCircle size={18} className="mt-0.5 shrink-0" />
                )}
                {formMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#ff6b00] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e85f00] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {formStatus === "loading" ? "Sending message..." : "Send message"}
              {formStatus !== "loading" && <Send size={16} />}
            </button>
          </form>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
          <SectionHeading
            eyebrow="The people behind our work"
            title="Meet our team"
            description="The professionals driving our operations, innovation and everyday excellence."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((person) => (
              <PersonCard
                key={person.name}
                person={person}
                onImageClick={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="border-t border-white/[0.08] bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
          <SectionHeading
            eyebrow="Leadership and governance"
            title="Key stakeholders"
            description="Meet the individuals contributing their experience and direction to the organisation."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {stakeholders.map((person) => (
              <PersonCard
                key={person.name}
                person={person}
                onImageClick={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Board of trustees */}
      <section className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
          <SectionHeading
            eyebrow="Our oversight"
            title="Board of trustees"
            description="The leadership providing guidance, accountability and strategic oversight."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {trustees.map((person) => (
              <PersonCard
                key={person.name}
                person={person}
                onImageClick={setSelectedImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image preview modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-[#18211c] p-3 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={`Photo of ${selectedImage.name}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close image preview"
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-[#ff6b00]"
            >
              <X size={19} />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="max-h-[65vh] w-full rounded-lg object-contain"
            />

            <div className="px-3 py-4">
              <h3 className="font-semibold text-white">
                {selectedImage.name}
              </h3>
              <p className="mt-1 text-sm text-white/50">
                {selectedImage.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}