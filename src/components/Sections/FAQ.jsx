import { useState } from "react";
import {
 ChevronDown,
 ChevronUp,
 Handshake,
 Globe2,
 ClipboardList,
 Gift,
 Users,
 Boxes,
 Megaphone,
 Coins,
 Calculator,
 Network,
 Layers3,
 X,
} from "lucide-react";
import Navbar from "../common/Header";

const orange = "#ff6b00";

const faqSections = [
 {
  title: "Key Partnerships",
  icon: Handshake,
  items: [
   {
    question: "Who are our Key Partners?",
    answer:
     "NGOs, government agencies, tech firms, agro-allied organizations, real estate developers, media companies, and international development bodies.",
   },
   {
    question: "Who are our key suppliers?",
    answer:
     "Local farmers, construction material vendors, tech hardware and software providers, media equipment suppliers, and real estate service providers.",
   },
   {
    question:
     "Which Key Resources are we acquiring from partners?",
    answer:
     "Raw agricultural produce, engineering components, digital tools, branding resources, real estate properties, and grant funding.",
   },
   {
    question: "Which Key Activities do partners perform?",
    list: [
     "NGO partnerships drive social programs through the Foundation.",
     "Suppliers ensure consistent flow of raw materials and infrastructure tools.",
     "Media partners amplify brand awareness.",
     "Tech collaborators support software/hardware infrastructure.",
    ],
   },
  ],
 },
 {
  title: "Key Activities",
  icon: ClipboardList,
  items: [
   {
    question:
     "What Key Activities does our Value Propositions require?",
    answer:
     "Media content creation, eCommerce logistics, IT/software development, engineering & design, farm operations, real estate development, community outreach, event planning and execution (Ntonarch Events), and waste management and waste-to-resource operations (Ntonarch Waste).",
   },
   {
    question:
     "How do these activities impact our distribution channels?",
    answer:
     "They ensure timely service delivery, build customer trust, and enable efficiency through digital platforms.",
   },
   {
    question:
     "How do these activities impact Customer Relationships?",
    answer:
     "Activities are tailored to meet client expectations through quality, innovation, and seamless support, reinforcing loyalty and trust.",
   },
  ],
 },
 {
  title: "Value Propositions",
  icon: Gift,
  items: [
   {
    question: "What value do we deliver to the customer?",
    answer:
     "Innovative, integrated solutions that solve societal, infrastructural, and technological challenges while promoting sustainability and empowerment.",
   },
   {
    question: "Which problems are we helping to solve?",
    list: [
     "Agricultural inefficiencies",
     "Digital gaps in business & society",
     "Infrastructure shortfalls",
     "Unemployment",
     "Lack of affordable housing",
     "Social inequality",
    ],
   },
   {
    question:
     "What bundles of products and services are we offering to each customer?",
    list: [
     "Media & branding packages",
     "Marketplaces for buying/selling goods",
     "Engineering services",
     "IT consulting & software",
     "Farm produce & agri-tech services",
     "Real estate solutions",
     "Event management—physical, virtual & hybrid (Ntonarch Events)",
     "Waste-to-resource & recycling services (Ntonarch Waste)",
     "CSR projects & impact programs",
    ],
   },
   {
    question: "What makes our offering unique?",
    answer:
     "Cross-sector synergy, innovation, strategic leadership, an inclusive ecosystem, and a purpose-driven brand.",
   },
  ],
 },
 {
  title: "Customer Relationships",
  icon: Handshake,
  items: [
   {
    question: "What type of relationship do our customers expect?",
    answer:
     "Professional, innovative, and responsive service with ongoing support.",
   },
   {
    question: "Which ones have we established?",
    answer:
     "Project-based engagements, subscription services, B2B consulting, CSR outreach partnerships.",
   },
   {
    question: "How are they integrated with our business model?",
    answer:
     "Each relationship feeds into Ntonarch Acumen Network's integrated ecosystem, delivering value and fostering long-term engagement.",
   },
   {
    question: "How costly are they?",
    answer:
     "Cost varies by division, but is optimised via technology, partnerships, and shared resources.",
   },
  ],
 },
 {
  title: "Customer Segments",
  icon: Users,
  items: [
   {
    question: "For whom are we creating value?",
    list: [
     "Entrepreneurs and SMEs",
     "Farmers and traders",
     "Tech adopters and startups",
     "Real estate clients",
     "NGOs and donors",
     "Local communities",
     "Government institutions",
    ],
   },
   {
    question: "Who are our most important customers?",
    answer:
     "B2B clients, tech-driven enterprises, agro-sector stakeholders, property buyers, donor agencies, and media clients.",
   },
  ],
 },
 {
  title: "Key Resources",
  icon: Boxes,
  items: [
   {
    question:
     "What Key Resources do our Value Propositions require?",
    list: [
     "Skilled workforce",
     "Technology and digital platforms",
     "Farmland and agro equipment",
     "Media infrastructure",
     "Engineering tools and machines",
     "Real estate properties",
     "Funding and partnerships",
    ],
   },
   {
    question: "What are our resource distribution channels?",
    list: [
     "E-commerce platforms",
     "Digital apps",
     "B2B project proposals",
     "Social media and media channels",
     "Direct sales and field agents",
    ],
   },
   {
    question: "What assets are essential for Revenue Streams?",
    answer:
     "Digital platforms, engineering tools, farm produce, real estate units, branding IPs, and donor relationships.",
   },
  ],
 },
 {
  title: "Channels",
  icon: Megaphone,
  items: [
   {
    question:
     "Through which channels do our customers want to be reached?",
    answer:
     "Online platforms, physical branches, social media, mobile apps, and personalised service.",
   },
   {
    question: "How are we reaching them now?",
    answer:
     "Via social media, direct calls, events, eCommerce, physical offices, and email.",
   },
   {
    question: "How are our Channels integrated?",
    answer:
     "All channels reflect the unified brand identity and feed into centralised management real-time systems.",
   },
   {
    question: "Which ones work best?",
    list: [
     "Social media & website",
     "Direct sales for B2B",
     "Mobile/digital platforms for e-commerce",
     "Community engagement for the Foundation",
    ],
   },
  ],
 },
 {
  title: "Revenue Streams",
  icon: Coins,
  items: [
   {
    question: "What are our revenue streams?",
    list: [
     "Subscription services (Media & IT)",
     "Sales of farm produce",
     "Real estate leasing/sales",
     "Consulting fees (Engineering & IT)",
     "E-commerce commissions",
     "Event fees & packages (Ntonarch Events)",
     "Waste management contracts & recycled/fertilizer sales (Ntonarch Waste)",
     "Grants & donations (Foundation)",
    ],
   },
   {
    question:
     "For what value are our customers willing to pay?",
    answer:
     "Innovation, reliability, quality, affordability, and social impact.",
   },
   {
    question: "For what and how do they currently pay?",
    answer:
     "Project-based contracts, service subscriptions, retail purchases, or donations.",
   },
   {
    question: "How would they prefer to pay?",
    answer:
     "Flexible options—mobile payment, bank transfers, cash-on-delivery, online billing.",
   },
  ],
 },
 {
  title: "Cost Structure",
  icon: Calculator,
  items: [
   {
    question: "What are the major costs in our business model?",
    list: [
     "Staff & talent acquisition",
     "Equipment & infrastructure",
     "Technology & software development",
     "Marketing & branding",
     "Community development projects (outreach)",
    ],
   },
   {
    question: "Which Key Resources are most expensive?",
    answer:
     "Engineering equipment, media production tech, farmland operations, and real estate development.",
   },
   {
    question: "Which Key Activities are most expensive?",
    answer:
     "Infrastructure development, digital innovation, content production, and large-scale farming.",
   },
  ],
 },
];

const matrixRows = [
 [
  "Media",
  "Content creators, media agencies for campaigns",
  "Media distributors, PR firms for daily communications",
  "Media investors, broadcasting alliances",
  "Advocacy media, NGOs for awareness campaigns",
 ],
 [
  "E-commerce",
  "Platform developers, UX/UI designers, AI collaborators",
  "Logistics providers, payment processors",
  "VC investors, trade export partners",
  "NGOs for digital literacy, community market access",
 ],
 [
  "Engineering",
  "R&D institutions, manufacturers, OEMs",
  "Suppliers of tools/materials, technical maintenance firms",
  "Engineering societies, industry alliances",
  "NGOs for STEM education, engineering outreach",
 ],
 [
  "Real Estate",
  "Architecture firms, smart-home tech developers",
  "Property managers, facility maintenance",
  "Real estate investors, government housing boards",
  "Housing NGOs, community housing initiatives",
 ],
 [
  "Agriculture",
  "Agri-tech innovators, IoT for farming, research institutes",
  "Farm input suppliers, cold-chain logistics",
  "Export boards, agricultural cooperatives",
  "Farmer cooperatives, rural development NGOs",
 ],
 [
  "Computer (IT)",
  "Software developers, cybersecurity firms",
  "Cloud hosting providers, IT maintenance",
  "Tech investors, industry alliances",
  "NGOs for IT training, community computer labs",
 ],
 [
  "Foundation (NGO)",
  "Joint program developers, co-funding partners",
  "Outreach coordinators, volunteer managers",
  "Philanthropic foundations, CSR donors",
  "Grassroots organizations, advocacy media",
 ],
 [
  "Events",
  "Venue operators, event tech providers, streaming platforms",
  "Caterers, AV suppliers, logistics and staffing agencies",
  "Event investors, destination management companies",
  "Community event organizers, Ntonarch Foundation for outreach events",
 ],
 [
  "Waste Management",
  "Agri-tech, IoT and blockchain providers, green-tech R&D",
  "Municipalities, collection and recycling contractors",
  "Green funds, circular-economy investors, UN SDG-aligned grants",
  "Environmental NGOs, community clean-up initiatives",
 ],
];

const partnershipCategories = [
 {
  letter: "A",
  title: "Collaborative Partners",
  description: "Co-creation and innovation partnerships",
  direct: [
   "Tech companies (platform development for Ntonarch Market & Ntonarch Computers)",
   "R&D institutions (for Ntonarch Engineering & Ntonarch Farms)",
   "Media agencies (for Ntonarch Media & Foundation)",
  ],
  indirect: ["OEM manufacturers, innovation hubs, prototype labs"],
 },
 {
  letter: "B",
  title: "Operational Partners",
  description: "Daily operations and supply chain management",
  direct: [
   "Logistics & cold-chain providers (Ntonarch Market, Farms)",
   "Payment processors (Ntonarch Market, Computers)",
   "Cloud providers (Computers, Media)",
  ],
  indirect: ["Maintenance contractors, utility companies"],
 },
 {
  letter: "C",
  title: "Strategic & Investment Partners",
  description: "Growth, market reach, and capital investment",
  direct: [
   "Investors (VCs, private equity for Market, Engineering, Properties)",
   "Government boards (agriculture, trade, commerce)",
  ],
  indirect: ["Chambers of commerce, international trade bodies"],
 },
 {
  letter: "D",
  title: "Social Impact Partners",
  description: "CSR, advocacy, and community development",
  direct: [
   "NGOs in education, health (Foundation)",
   "Community cooperatives (Farms)",
  ],
  indirect: ["Philanthropic donors, advocacy media outlets"],
 },
 {
  letter: "E",
  title: "Regulatory & Compliance Partners",
  description: "Legal, certification, and regulatory compliance",
  direct: [
   "Legal firms (Properties, Market, Engineering)",
   "Certification bodies (Farms, Market)",
  ],
  indirect: ["Tax consultants, industry auditors"],
 },
 {
  letter: "F",
  title: "Technology & Data Partners",
  description: "Cybersecurity, data analytics, and cloud integration",
  direct: [
   "Cybersecurity firms (Computers, Market)",
   "Data analytics providers (Engineering, Market)",
  ],
  indirect: ["Cloud integration consultants"],
 },
 {
  letter: "G",
  title: "Marketing & Growth Partners",
  description: "Advertising, influencer networks, and brand expansion",
  direct: [
   "Advertising agencies (Media, Market)",
   "Influencer networks (Market, Foundation)",
  ],
  indirect: ["SEO agencies, affiliate marketers"],
 },
 {
  letter: "H",
  title: "Environmental & Sustainability Partners",
  description: "Waste management, renewable energy, and green initiatives",
  direct: [
   "Waste management firms (Ntonarch Waste, Engineering, Farms)",
   "Renewable energy providers (Properties, Farms)",
  ],
  indirect: ["Green tech NGOs"],
 },
 {
  letter: "I",
  title: "Financial & Insurance Partners",
  description: "Banking, insurance, and financial services",
  direct: [
   "Banks (Market, Engineering, Properties)",
   "Insurance firms (Farms, Properties)",
  ],
  indirect: ["Crowdfunding platforms (Foundation)"],
 },
 {
  letter: "J",
  title: "Crisis & Risk Management Partners",
  description: "Disaster recovery, security, and crisis management",
  direct: [
   "Disaster recovery firms (Computers, Market)",
   "Security firms (Properties, Farms)",
  ],
  indirect: ["PR crisis agencies (Media, Foundation)"],
 },
];

const networkNodes = [
 {
  name: "Collaborative Partners",
  type: "Partner",
  description:
   "Technology companies, R&D institutions, and media agencies working together on innovative projects.",
 },
 {
  name: "Operational Partners",
  type: "Partner",
  description:
   "Logistics companies, payment processors, and cloud service providers ensuring smooth operations.",
 },
 {
  name: "Strategic Partners",
  type: "Partner",
  description:
   "Venture capitalists, private equity firms, and advisory boards providing strategic guidance.",
 },
 {
  name: "Social Impact Partners",
  type: "Partner",
  description:
   "NGOs, community organisations, and educational institutions focused on positive social change.",
 },
 {
  name: "Regulatory Partners",
  type: "Partner",
  description:
   "Legal firms, certification bodies, and compliance specialists ensuring regulatory adherence.",
 },
 {
  name: "Technology Partners",
  type: "Partner",
  description:
   "Cybersecurity firms, data analytics companies, and cloud integration specialists.",
 },
 {
  name: "Financial Partners",
  type: "Partner",
  description:
   "Banks, insurance firms, and investment funds providing financial services and capital support.",
 },
 {
  name: "Marketing Partners",
  type: "Partner",
  description:
   "Advertising agencies, influencer networks, and digital marketing specialists expanding brand reach.",
 },
 {
  name: "Ntonarch Media",
  type: "Subsidiary",
  description:
   "Content creation, broadcasting, digital media production, and multimedia communications.",
 },
 {
  name: "Ntonarch Market",
  type: "Subsidiary",
  description:
   "E-commerce platform, online marketplace, and digital retail solutions.",
 },
 {
  name: "Ntonarch Engineering",
  type: "Subsidiary",
  description:
   "Technical solutions, infrastructure development, and engineering consultancy.",
 },
 {
  name: "Ntonarch Properties",
  type: "Subsidiary",
  description:
   "Real estate development, property management, and commercial investments.",
 },
 {
  name: "Ntonarch Farms",
  type: "Subsidiary",
  description:
   "Agricultural operations, sustainable farming practices, and agribusiness.",
 },
 {
  name: "Ntonarch Computers",
  type: "Subsidiary",
  description:
   "IT solutions, hardware and software services, and technology consulting.",
 },
 {
  name: "Ntonarch Foundation",
  type: "Subsidiary",
  description:
   "NGO operations, social impact programs, and community outreach initiatives.",
 },
 {
  name: "Ntonarch Events",
  type: "Subsidiary",
  description:
   "Physical, virtual, and hybrid event management, including corporate events, celebrations and brand activations.",
 },
 {
  name: "Ntonarch Waste",
  type: "Subsidiary",
  description:
   "Digital waste-to-resource platform using AI, IoT and blockchain; fertilizer, energy and recycling initiatives.",
 },
];

function SectionHeading({ eyebrow, title, description }) {
 return (
  <div className="mb-7">
   <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
    {eyebrow}
   </p>
   <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
    {title}
   </h2>
   {description && (
    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/50">
     {description}
    </p>
   )}
  </div>
 );
}

function FAQItem({ question, answer, list }) {
 const [open, setOpen] = useState(false);

 return (
  <div className="border-b border-white/[0.08] last:border-0">
   <button
    type="button"
    onClick={() => setOpen(!open)}
    aria-expanded={open}
    className="flex w-full items-center justify-between gap-5 py-5 text-left"
   >
    <span className="text-sm font-medium leading-6 text-white/90 transition hover:text-[#ff6b00]">
     {question}
    </span>
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#ff6b00]">
     {open ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
    </span>
   </button>

   {open && (
    <div className="animate-in fade-in slide-in-from-top-1 pb-5 pr-10 text-sm leading-7 text-white/55">
     {answer && <p>{answer}</p>}
     {list && (
      <ul className="mt-1 list-disc space-y-2 pl-5 marker:text-[#ff6b00]">
       {list.map((item) => (
        <li key={item}>{item}</li>
       ))}
      </ul>
     )}
    </div>
   )}
  </div>
 );
}

function FAQSection({ section, index }) {
 const Icon = section.icon;

 return (
  <section className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 sm:px-7">
   <div className="flex items-center gap-3 border-b border-white/[0.08] py-5">
    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff6b00]/10 text-[#ff6b00]">
     <Icon size={19} />
    </span>
    <div>
     <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
      Section {String(index + 1).padStart(2, "0")}
     </p>
     <h3 className="text-base font-semibold text-white">
      {section.title}
     </h3>
    </div>
   </div>

   <div>
    {section.items.map((item) => (
     <FAQItem key={item.question} {...item} />
    ))}
   </div>
  </section>
 );
}

function PartnershipMatrix() {
 return (
  <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.025]">
   <div className="border-b border-white/10 p-5">
    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#ff6b00]">
     Partnership framework
    </p>
    <h3 className="mt-2 text-lg font-semibold text-white">
     Partnership Matrix
    </h3>
    <p className="mt-1 text-sm text-white/45">
     Sector × Function
    </p>
   </div>

   <div className="overflow-x-auto">
    <table className="w-full min-w-[900px] border-collapse text-left text-xs">
     <thead>
      <tr className="bg-white/[0.05] text-white">
       <th className="sticky left-0 z-10 min-w-32 bg-[#19211d] p-4 font-semibold">
        Sector
       </th>
       <th className="min-w-48 p-4 font-semibold">
        Collaborative Partners
        <span className="mt-1 block font-normal text-white/40">
         Co-create, innovate, joint ventures
        </span>
       </th>
       <th className="min-w-48 p-4 font-semibold">
        Operational Partners
        <span className="mt-1 block font-normal text-white/40">
         Daily operations & supply chain
        </span>
       </th>
       <th className="min-w-48 p-4 font-semibold">
        Strategic / Investment
        <span className="mt-1 block font-normal text-white/40">
         Growth, market access, capital
        </span>
       </th>
       <th className="min-w-48 p-4 font-semibold">
        Social Impact Partners
        <span className="mt-1 block font-normal text-white/40">
         CSR, outreach, advocacy
        </span>
       </th>
      </tr>
     </thead>

     <tbody>
      {matrixRows.map((row) => (
       <tr
        key={row[0]}
        className="border-t border-white/[0.07] text-white/55 transition hover:bg-white/[0.025]"
       >
        <td className="sticky left-0 bg-[#151d19] p-4 font-semibold text-[#ff6b00]">
         {row[0]}
        </td>
        {row.slice(1).map((cell, index) => (
         <td key={index} className="p-4 leading-6">
          {cell}
         </td>
        ))}
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <p className="border-t border-white/[0.08] px-5 py-3 text-xs text-white/35">
    Scroll horizontally to explore all partnership functions.
   </p>
  </div>
 );
}

function PartnershipCategory({ category }) {
 const [expanded, setExpanded] = useState(false);

 return (
  <article className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-[#ff6b00]/30">
   <button
    type="button"
    onClick={() => setExpanded(!expanded)}
    className="flex w-full items-start gap-3 text-left"
    aria-expanded={expanded}
   >
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#ff6b00]/10 text-sm font-bold text-[#ff6b00]">
     {category.letter}
    </span>

    <span className="min-w-0 flex-1">
     <span className="block text-sm font-semibold text-white">
      {category.title}
     </span>
     <span className="mt-1 block text-xs leading-5 text-white/45">
      {category.description}
     </span>
    </span>

    <ChevronDown
     size={17}
     className={`mt-1 shrink-0 text-white/40 transition ${expanded ? "rotate-180" : ""
      }`}
    />
   </button>

   {expanded && (
    <div className="mt-5 space-y-4 border-t border-white/[0.08] pt-4">
     <div>
      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#ff6b00]">
       Direct partners
      </p>
      <ul className="space-y-2 text-xs leading-6 text-white/55">
       {category.direct.map((item) => (
        <li key={item} className="flex gap-2">
         <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#ff6b00]" />
         {item}
        </li>
       ))}
      </ul>
     </div>

     <div>
      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/40">
       Indirect partners
      </p>
      <ul className="space-y-2 text-xs leading-6 text-white/55">
       {category.indirect.map((item) => (
        <li key={item} className="flex gap-2">
         <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
         {item}
        </li>
       ))}
      </ul>
     </div>
    </div>
   )}
  </article>
 );
}

function PartnershipNetwork() {
 const [activeNode, setActiveNode] = useState(null);

 const partners = networkNodes.filter((node) => node.type === "Partner");
 const subsidiaries = networkNodes.filter(
  (node) => node.type === "Subsidiary"
 );

 return (
  <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#151e19]">
   <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
    <div className="flex flex-col justify-center">
     <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
      Our ecosystem
     </p>
     <h3 className="mt-3 text-2xl font-semibold text-white">
      360° Partnership Network
     </h3>
     <p className="mt-3 text-sm leading-7 text-white/50">
      Explore the network of strategic partners and subsidiary
      companies that support the Ntonarch Acumen Network.
     </p>

     {activeNode ? (
      <div className="mt-7 rounded-xl border border-[#ff6b00]/30 bg-[#ff6b00]/[0.06] p-4">
       <div className="flex items-center justify-between gap-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff6b00]">
         {activeNode.type}
        </span>
        <button
         type="button"
         onClick={() => setActiveNode(null)}
         aria-label="Close network details"
         className="text-white/40 transition hover:text-white"
        >
         <X size={16} />
        </button>
       </div>
       <h4 className="mt-2 text-sm font-semibold text-white">
        {activeNode.name}
       </h4>
       <p className="mt-2 text-xs leading-6 text-white/55">
        {activeNode.description}
       </p>
      </div>
     ) : (
      <p className="mt-7 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-xs leading-6 text-white/40">
       Select any network item to explore its role in the Ntonarch
       ecosystem.
      </p>
     )}

     <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/50">
      <span className="flex items-center gap-2">
       <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b00]" />
       Partnership categories
      </span>
      <span className="flex items-center gap-2">
       <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
       Subsidiaries
      </span>
     </div>
    </div>

    <div className="rounded-xl border border-white/[0.08] bg-[#101714] p-4 sm:p-6">
     <div className="mb-5 flex items-center justify-center">
      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-[#ff6b00] bg-[#ff6b00]/10 text-center shadow-[0_0_35px_rgba(255,107,0,0.12)]">
       <Network size={19} className="mb-1 text-[#ff6b00]" />
       <span className="text-[9px] font-bold leading-3 text-white">
        NTONARCH
        <br />
        ACUMEN
        <br />
        NETWORK
       </span>
      </div>
     </div>

     <div className="mb-5 flex items-center gap-2">
      <span className="h-px flex-1 bg-white/10" />
      <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff6b00]">
       Partnership categories
      </span>
      <span className="h-px flex-1 bg-white/10" />
     </div>

     <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {partners.map((node) => (
       <button
        key={node.name}
        type="button"
        onClick={() => setActiveNode(node)}
        className={`min-h-16 rounded-lg border px-2 py-3 text-center text-[10px] font-semibold leading-4 transition ${activeNode?.name === node.name
          ? "border-[#ff6b00] bg-[#ff6b00]/15 text-[#ff6b00]"
          : "border-[#ff6b00]/20 bg-[#ff6b00]/[0.05] text-white/75 hover:border-[#ff6b00] hover:text-white"
         }`}
       >
        {node.name}
       </button>
      ))}
     </div>

     <div className="my-5 flex items-center gap-2">
      <span className="h-px flex-1 bg-white/10" />
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
       Subsidiary companies
      </span>
      <span className="h-px flex-1 bg-white/10" />
     </div>

     <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {subsidiaries.map((node) => (
       <button
        key={node.name}
        type="button"
        onClick={() => setActiveNode(node)}
        className={`min-h-14 rounded-lg border px-2 py-3 text-center text-[10px] font-semibold leading-4 transition ${activeNode?.name === node.name
          ? "border-white bg-white/10 text-white"
          : "border-white/10 bg-white/[0.035] text-white/60 hover:border-white/40 hover:text-white"
         }`}
       >
        {node.name}
       </button>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
}

export default function FAQ() {
 return (
  <>
   <Navbar />
   <main className="min-h-screen mt-20 overflow-hidden bg-[#101714] text-white">
    {/* Hero */}
    <section className="relative border-b border-white/[0.08]">
     <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <div className="max-w-3xl">
       <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
        <span className="h-px w-8 bg-[#ff6b00]" />
        Ntonarch Acumen Network
       </p>

       <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        Frequently asked <span className="text-[#ff6b00]">questions.</span>
       </h1>

       <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
        Learn more about our business model, partnerships, operations,
        services and the ecosystem that connects our divisions.
       </p>
      </div>
     </div>

     <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#ff6b00]/[0.07] blur-[100px]" />
    </section>

    <div className="mx-auto max-w-7xl space-y-14 px-5 py-12 sm:px-8 lg:py-16">
     {/* FAQ sections */}
     <section>
      <SectionHeading
       eyebrow="Find your answers"
       title="Understanding our network"
       description="Explore the key areas of our business and how the Ntonarch Acumen Network operates."
      />

      <div className="grid gap-4 lg:grid-cols-2">
       {faqSections.map((section, index) => (
        <FAQSection
         key={section.title}
         section={section}
         index={index}
        />
       ))}
      </div>
     </section>

     {/* Partnership matrix */}
     <section>
      <SectionHeading
       eyebrow="Working together"
       title="Our partnership framework"
       description="A sector-by-sector view of the collaborative, operational, strategic and social impact relationships supporting our business units."
      />

      <PartnershipMatrix />
     </section>

     {/* Partnership ecosystem */}
     <section>
      <SectionHeading
       eyebrow="Connected opportunities"
       title="360° partnership ecosystem"
       description="Our partnership network spans multiple sectors and engagement levels, creating a connected ecosystem across our business units."
      />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
       {partnershipCategories.map((category) => (
        <PartnershipCategory
         key={category.letter}
         category={category}
        />
       ))}
      </div>

      <div className="mb-6 rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
       <h3 className="mb-4 text-sm font-semibold text-white">
        Partnership classification
       </h3>

       <div className="grid gap-4 sm:grid-cols-3">
        <div className="flex items-start gap-3">
         <span className="rounded-md bg-[#ff6b00]/15 px-2 py-1 text-[10px] font-bold text-[#ff6b00]">
          DIRECT
         </span>
         <p className="text-xs leading-6 text-white/50">
          Actively engaged partners with regular interaction and
          collaboration.
         </p>
        </div>

        <div className="flex items-start gap-3">
         <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] font-bold text-white/70">
          INDIRECT
         </span>
         <p className="text-xs leading-6 text-white/50">
          Background support partners with occasional engagement
          and consultation.
         </p>
        </div>

        <div className="flex items-start gap-3">
         <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-400">
          SUBSIDIARY
         </span>
         <p className="text-xs leading-6 text-white/50">
          Ntonarch Acumen Network business units and divisions.
         </p>
        </div>
       </div>
      </div>

      <PartnershipNetwork />
     </section>
    </div>
   </main>
  </>

 );
}