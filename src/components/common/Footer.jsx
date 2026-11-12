import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Globe2,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const divisions = [
    { name: "Media", link: "media.html" },
    { name: "Market", link: "market.html" },
    { name: "Farms", link: "services/farms/international-farms.html" },
    { name: "Computer", link: "computer.html" },
    { name: "Engineering", link: "engineering.html" },
    { name: "Properties", link: "properties.html" },
    { name: "Waste Management", link: "wastes.html" },
    { name: "Events", link: "events.html" },
    { name: "Foundation", link: "foundation.html" },
  ];

  const companyLinks = [
    { name: "About Us", link: "about.html" },
    { name: "Our Vision", link: "about.html#vision" },
    { name: "Our Mission", link: "about.html#mission" },
    { name: "Partnerships", link: "partnership.html" },
    { name: "Our Team", link: "team.html" },
    { name: "Contact Us", link: "contact.html" },
  ];

  const resourceLinks = [
    { name: "News & Updates", link: "news.html" },
    { name: "Events", link: "events.html" },
    { name: "Gallery", link: "gallery.html" },
    { name: "Careers", link: "careers.html" },
    { name: "FAQs", link: "faq.html" },
  ];

  const socials = [
    { icon: Facebook, link: "#", label: "Facebook" },
    { icon: Instagram, link: "#", label: "Instagram" },
    { icon: Linkedin, link: "#", label: "LinkedIn" },
    { icon: Youtube, link: "#", label: "YouTube" },
    { icon: Twitter, link: "#", label: "Twitter" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#101714] text-white">

    
      {/* MAIN FOOTER */}

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-12">

          {/* BRAND COLUMN */}

          <div className="lg:col-span-4">

            <a href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff6b00] text-xl font-black text-white">
                N
              </div>

              <div>
                <div className="text-xl font-extrabold tracking-wide">
                  NTONARCH
                </div>

                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                  Acumen Network
                </div>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Ntonarch is a diversified business network driven by
              innovation, strategic partnerships, and sustainable
              development. We bring ideas, industries, and opportunities
              together to create meaningful impact.
            </p>

            <div className="mt-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/40">
                Connect With Us
              </p>

              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, link, label }) => (
                  <a
                    key={label}
                    href={link}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#ff6b00] hover:bg-[#ff6b00] hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* COMPANY LINKS */}

          <div className="lg:col-span-2">

            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Company
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="group inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-[#ff6b00]"
                  >
                    {item.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* DIVISIONS */}

          <div className="lg:col-span-2">

            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Our Divisions
            </h3>

            <ul className="space-y-4">
              {divisions.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-sm text-white/50 transition hover:text-[#ff6b00]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* RESOURCES */}

          <div className="lg:col-span-2">

            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Resources
            </h3>

            <ul className="space-y-4">
              {resourceLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-sm text-white/50 transition hover:text-[#ff6b00]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* CONTACT */}

          <div className="lg:col-span-2">

            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Get In Touch
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:info@ntonarch.com"
                className="flex items-start gap-3 text-sm text-white/55 transition hover:text-[#ff6b00]"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#ff6b00]"
                />
                <span>info@ntonarch.com</span>
              </a>

              <a
                href="tel:+2340000000000"
                className="flex items-start gap-3 text-sm text-white/55 transition hover:text-[#ff6b00]"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#ff6b00]"
                />
                <span>Contact our team</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-white/55">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#ff6b00]"
                />
                <span>
                  Nigeria
                  <br />
                  Serving opportunities worldwide
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-white/55">
                <Globe2 size={17} className="text-[#ff6b00]" />
                <span>Global Network</span>
              </div>

            </div>

          </div>

        </div>

        {/* NEWSLETTER */}

        <div className="mt-16 flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:flex-row lg:items-center">

          <div>
            <h3 className="text-xl font-bold">
              Stay Connected With Ntonarch
            </h3>

            <p className="mt-2 text-sm text-white/50">
              Get updates on our latest developments, initiatives, and
              opportunities.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.currentTarget.email.value;

              window.location.href = `mailto:info@ntonarch.com?subject=${encodeURIComponent(
                "Newsletter Subscription"
              )}&body=${encodeURIComponent(
                `Please add me to the Ntonarch newsletter: ${email}`
              )}`;
            }}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#ff6b00]"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>

        </div>

      </div>

      {/* BOTTOM BAR */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 text-center sm:px-8 md:flex-row md:text-left lg:px-12">

          <p className="text-xs leading-6 text-white/40">
            © {year} Ntonarch Acumen Network. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="privacy-policy.html"
              className="text-xs text-white/40 transition hover:text-[#ff6b00]"
            >
              Privacy Policy
            </a>

            <a
              href="terms.html"
              className="text-xs text-white/40 transition hover:text-[#ff6b00]"
            >
              Terms & Conditions
            </a>

            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#ff6b00] hover:bg-[#ff6b00] hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;