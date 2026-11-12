
import { useMemo, useState } from "react";
import {
  Search,
  BriefcaseBusiness,
  GraduationCap,
  Laptop,
  Globe2,
  Clock3,
  Users,
  Layers3,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Send,
  UserRound,
  Mail,
  Heart,
  IdCard,
  Info,
  FileText,
  MapPin,
  AlertCircle,
} from "lucide-react";

/* =========================================================
   JOB POSITIONS
========================================================= */

const POSITIONS = {
  "NTONARCH MEDIA": [
    {
      title: "Content Writer / Blogger",
      exp: "1–3 yrs",
      edu: "Bachelor's",
      desc: "Create compelling written content, articles and blog posts that grow our digital presence and engage global audiences.",
      quals: ["Strong command of English (or other languages)", "SEO writing fundamentals", "Portfolio of published work", "Familiarity with CMS platforms (WordPress, Ghost)", "Ability to meet deadlines consistently"],
    },
    {
      title: "Content Creator / Copywriter",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Craft persuasive marketing copy, brand stories, and multi-platform content that converts readers into customers.",
      quals: ["Proven copywriting portfolio", "Understanding of brand voice and tone", "Ability to write across multiple formats", "Knowledge of digital marketing funnels", "Experience with A/B copy testing"],
    },
    {
      title: "Editor",
      exp: "3–5 yrs",
      edu: "Bachelor's / Master's",
      desc: "Review, edit and refine all written content to maintain NTONARCH's editorial standards and brand consistency.",
      quals: ["Professional editorial experience", "Exceptional grammar and style command", "Experience managing content pipelines", "Familiarity with AP/Chicago style guides", "Ability to coach junior writers"],
    },
    {
      title: "Proofreader",
      exp: "1–3 yrs",
      edu: "Bachelor's",
      desc: "Perform final quality checks on all content ensuring zero errors before publication across all our platforms.",
      quals: ["Meticulous attention to detail", "Strong grasp of grammar rules", "Experience with style sheets", "Fast turnaround without compromising quality", "Familiarity with proofreading marks"],
    },
    {
      title: "SEO Specialist",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Drive organic traffic through strategic keyword research, on-page optimisation, and data-driven content planning.",
      quals: ["Google Analytics & Search Console proficiency", "Keyword research and competitive analysis", "Technical SEO knowledge", "Experience with Ahrefs / SEMrush / Moz", "Link building strategy experience"],
    },
    {
      title: "Graphic Designer",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Design eye-catching visuals, brand assets, and marketing materials that represent NTONARCH across all channels.",
      quals: ["Proficiency in Adobe Creative Suite / Figma", "Strong portfolio of brand design work", "Understanding of colour theory and typography", "Experience designing for social and digital", "Ability to deliver multiple formats"],
    },
    {
      title: "Video Editor",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Edit and produce high-quality video content for social media, marketing campaigns, and corporate communications.",
      quals: ["Premiere Pro / DaVinci Resolve proficiency", "Motion graphics experience (After Effects a plus)", "Strong narrative editing instincts", "Colour grading skills", "Fast turnaround on short-form content"],
    },
    {
      title: "Social Media Manager",
      exp: "3–5 yrs",
      edu: "Bachelor's",
      desc: "Manage and grow NTONARCH's social media presence, build community, and drive engagement across all platforms.",
      quals: ["Proven social media growth track record", "Experience with paid social advertising", "Content calendar management", "Analytics and reporting proficiency", "Crisis communication awareness"],
    },
    {
      title: "Digital Marketing Manager",
      exp: "4–6 yrs",
      edu: "Bachelor's",
      desc: "Lead multi-channel digital marketing strategy including SEO, paid media, email, and social campaigns.",
      quals: ["Full-funnel marketing expertise", "Google Ads & Meta Ads certification preferred", "Budget management experience", "Team leadership capability", "Strong analytics and ROI focus"],
    },
    {
      title: "Email Marketing Specialist",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Design, build and optimise email campaigns that nurture leads and retain customers across the NTONARCH ecosystem.",
      quals: ["Mailchimp / Klaviyo / HubSpot proficiency", "HTML email coding skills", "A/B testing and segmentation experience", "Understanding of deliverability best practices", "Copywriting ability"],
    },
    {
      title: "Affiliate Marketing Manager",
      exp: "3–5 yrs",
      edu: "Bachelor's",
      desc: "Develop and manage affiliate partnerships to grow NTONARCH's reach and revenue through performance-based marketing.",
      quals: ["Experience managing affiliate networks", "Contract negotiation skills", "Understanding of tracking and attribution", "Strong relationship management", "Data-driven reporting"],
    },
  ],

  "NTONARCH MARKET": [
    {
      title: "Frontend Developer",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Build beautiful, performant user interfaces for NTONARCH's marketplace platform used by thousands of customers.",
      quals: ["React / Vue / Angular expertise", "CSS / Tailwind proficiency", "Responsive design best practices", "REST API integration experience", "Git version control"],
    },
    {
      title: "Backend Developer",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Develop robust server-side architecture, APIs, and database systems that power the NTONARCH marketplace.",
      quals: ["Node.js / Python / Java / PHP proficiency", "REST & GraphQL API design", "Database design (PostgreSQL / MongoDB)", "Authentication and security best practices", "Cloud deployment experience"],
    },
    {
      title: "Full-Stack Developer",
      exp: "3–5 yrs",
      edu: "Bachelor's",
      desc: "Own end-to-end feature development across the full technology stack for our growing e-commerce platform.",
      quals: ["Frontend + backend proficiency", "Strong system design fundamentals", "Experience with microservices", "CI/CD pipeline knowledge", "Agile / Scrum experience"],
    },
    {
      title: "UI/UX Designer",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Create intuitive, delightful user experiences through research, wireframing, prototyping and final design.",
      quals: ["Figma / Sketch / Adobe XD proficiency", "User research and usability testing", "Design system creation and maintenance", "Interaction design principles", "Collaboration with engineering teams"],
    },
    {
      title: "Data Analyst",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Transform marketplace data into actionable insights that guide product, marketing, and business decisions.",
      quals: ["SQL proficiency", "Python or R for data analysis", "Tableau / Power BI / Looker experience", "Statistical analysis knowledge", "Clear data storytelling and visualisation"],
    },
    {
      title: "Financial Analyst",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Analyse financial performance, model forecasts, and provide strategic financial guidance to the marketplace division.",
      quals: ["Financial modelling in Excel / Google Sheets", "Understanding of P&L and balance sheets", "Budgeting and forecasting experience", "Knowledge of e-commerce financial KPIs", "Clear financial reporting skills"],
    },
  ],

  "NTONARCH COMPUTERS": [
    {
      title: "Software Engineer",
      exp: "3–5 yrs",
      edu: "Bachelor's / Master's",
      desc: "Design and build scalable software systems, contribute to architecture decisions, and mentor junior engineers.",
      quals: ["Proficiency in 2+ programming languages", "Strong algorithms and data structures knowledge", "System design and architecture experience", "Code review and technical mentorship", "Experience with cloud platforms (AWS/GCP/Azure)"],
    },
    {
      title: "Cloud Engineer",
      exp: "3–5 yrs",
      edu: "Bachelor's",
      desc: "Design, deploy, and maintain cloud infrastructure ensuring scalability, reliability, and cost efficiency.",
      quals: ["AWS / GCP / Azure certification preferred", "Infrastructure-as-Code (Terraform / Pulumi)", "Kubernetes and container orchestration", "Cloud cost optimisation", "Security and compliance in cloud environments"],
    },
    {
      title: "DevOps Engineer",
      exp: "3–5 yrs",
      edu: "Bachelor's",
      desc: "Build and maintain CI/CD pipelines, automate infrastructure, and bridge development and operations teams.",
      quals: ["CI/CD tools (Jenkins, GitHub Actions, CircleCI)", "Docker and Kubernetes", "Scripting (Bash, Python)", "Monitoring and observability tools", "Site reliability engineering principles"],
    },
    {
      title: "Data Scientist",
      exp: "3–5 yrs",
      edu: "Master's",
      desc: "Build machine learning models and data pipelines that power intelligent features across NTONARCH's products.",
      quals: ["Python (Pandas, NumPy, scikit-learn)", "Machine learning and deep learning frameworks", "Statistical modelling expertise", "MLOps and model deployment", "Strong data engineering foundation"],
    },
    {
      title: "Mobile App Developer",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Develop high-quality iOS and Android applications that deliver seamless experiences for NTONARCH's mobile users.",
      quals: ["React Native or Flutter proficiency", "Native iOS (Swift) or Android (Kotlin) experience", "Mobile UX best practices", "App Store / Play Store deployment", "Performance optimisation for mobile"],
    },
    {
      title: "UI/UX Designer",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Lead the design of NTONARCH's software products from wireframe to polished interface, ensuring usability at scale.",
      quals: ["Figma mastery", "End-to-end product design experience", "Accessibility (WCAG) knowledge", "Usability testing experience", "Design handoff and developer collaboration"],
    },
  ],

  "NTONARCH ENGINEERING": [
    {
      title: "Structural Engineer",
      exp: "3–5 yrs",
      edu: "Bachelor's",
      desc: "Provide remote structural engineering analysis, design reviews, and technical documentation for NTONARCH projects.",
      quals: ["Relevant engineering degree and licensure", "Structural analysis software proficiency", "Project documentation and reporting", "Knowledge of international building codes", "Remote collaboration tools"],
    },
    {
      title: "Mechanical Engineer",
      exp: "3–5 yrs",
      edu: "Bachelor's",
      desc: "Support mechanical systems design, technical review, and engineering documentation across NTONARCH's projects.",
      quals: ["CAD software proficiency (AutoCAD / SolidWorks)", "Mechanical systems design experience", "Technical report writing", "Knowledge of engineering standards", "Ability to work across time zones"],
    },
    {
      title: "Electrical Engineer",
      exp: "3–5 yrs",
      edu: "Bachelor's",
      desc: "Design and review electrical systems, power solutions, and technical specifications for NTONARCH engineering projects.",
      quals: ["Electrical design software proficiency", "Power systems knowledge", "Standards compliance (IEC / NEMA)", "Technical documentation skills", "Remote project coordination"],
    },
    {
      title: "Project Manager",
      exp: "4–6 yrs",
      edu: "Bachelor's / Master's",
      desc: "Oversee engineering project timelines, resources, and deliverables ensuring quality outcomes across NTONARCH's portfolio.",
      quals: ["PMP or PRINCE2 certification preferred", "Agile / waterfall project management", "Risk management experience", "Stakeholder communication skills", "Proficiency in Jira, Asana or similar tools"],
    },
  ],

  "NTONARCH EVENTS": [
    {
      title: "Event Strategist",
      exp: "4–6 yrs",
      edu: "Bachelor's",
      desc: "Plan, strategise, and deliver innovative virtual and hybrid event experiences that elevate the NTONARCH brand.",
      quals: ["Virtual event platform experience", "Budget and vendor management", "Creative concept development", "Strong project management skills", "Sponsorship and partnership experience"],
    },
    {
      title: "3D Virtual Environment Designer",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Build immersive 3D virtual spaces for NTONARCH's cutting-edge hybrid event experiences.",
      quals: ["Blender / Cinema 4D / Unreal Engine proficiency", "3D environment modelling and lighting", "VR/AR integration knowledge", "Real-time rendering experience", "Collaboration with event and tech teams"],
    },
    {
      title: "VR / AR Developer",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Develop virtual and augmented reality experiences that transform how attendees engage with NTONARCH events.",
      quals: ["Unity or Unreal Engine development", "VR/AR SDK experience (Oculus, ARKit, ARCore)", "3D spatial interaction design", "Performance optimisation for XR", "Cross-platform deployment"],
    },
    {
      title: "AI Integration Specialist",
      exp: "3–5 yrs",
      edu: "Bachelor's / Master's",
      desc: "Integrate AI-powered tools and automation into NTONARCH's event tech stack to enhance personalisation and engagement.",
      quals: ["LLM / AI API integration experience", "Python or JavaScript for AI workflows", "Chatbot and recommendation systems", "Data pipeline design", "Understanding of AI ethics and data privacy"],
    },
    {
      title: "Social Media Manager",
      exp: "3–5 yrs",
      edu: "Bachelor's",
      desc: "Drive awareness and engagement for NTONARCH events across social platforms before, during and after each event.",
      quals: ["Live event social media experience", "Short-form video content creation", "Community management", "Paid social advertising", "Real-time content publishing skills"],
    },
    {
      title: "Video Editor",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Edit event highlights, promotional videos, and recap reels that capture the energy of NTONARCH events.",
      quals: ["Premiere Pro / DaVinci Resolve proficiency", "Event video storytelling experience", "Fast turnaround ability", "Motion graphics (After Effects)", "Colour grading and audio mixing"],
    },
  ],

  "NTONARCH PROPERTIES": [
    {
      title: "3D Visualisation Specialist",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Create stunning photorealistic 3D renders and virtual tours of properties to enhance listings and client presentations.",
      quals: ["3ds Max / Blender / Lumion proficiency", "Photorealistic rendering techniques", "Interior and exterior visualisation", "VR walkthrough experience a plus", "Strong eye for architectural detail"],
    },
    {
      title: "Digital Marketing Specialist",
      exp: "4–6 yrs",
      edu: "Bachelor's",
      desc: "Drive property enquiries and brand growth through targeted digital campaigns across paid and organic channels.",
      quals: ["Real estate digital marketing experience", "Google Ads and Meta Ads expertise", "Property listing platform knowledge", "Strong analytics and reporting", "Email marketing campaigns"],
    },
    {
      title: "Content Creator",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Produce engaging property content including listings, blog articles, social posts, and video walkthroughs.",
      quals: ["Real estate content writing experience", "Photography / videography skills a plus", "Strong written communication", "Social media content creation", "Understanding of property markets"],
    },
    {
      title: "Financial Analyst",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Analyse property investment opportunities, model returns, and provide data-driven financial guidance for NTONARCH Properties.",
      quals: ["Real estate financial modelling", "ROI and cap rate analysis", "Excel / Google Sheets proficiency", "Property market research skills", "Clear and concise financial reporting"],
    },
  ],

  "NTONARCH WASTE": [
    {
      title: "Full-Stack Developer",
      exp: "3–5 yrs",
      edu: "Bachelor's",
      desc: "Build the digital platform that powers NTONARCH's smart waste management solutions and analytics dashboard.",
      quals: ["React + Node.js or equivalent", "IoT data integration experience a plus", "Geospatial data handling", "API design and integration", "Agile development experience"],
    },
    {
      title: "AI / Machine Learning Engineer",
      exp: "3–5 yrs",
      edu: "Bachelor's",
      desc: "Develop predictive models and AI solutions that optimise waste collection routes, demand forecasting, and sustainability reporting.",
      quals: ["Machine learning model development", "Python (scikit-learn, TensorFlow, PyTorch)", "Spatial data and route optimisation", "MLOps and model monitoring", "Experience with environmental datasets"],
    },
    {
      title: "Blockchain Developer",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Build blockchain-based traceability and reward systems that incentivise sustainable waste management behaviour.",
      quals: ["Solidity / Rust smart contract development", "Ethereum or Solana ecosystem experience", "DeFi and token economics understanding", "Web3.js / ethers.js proficiency", "Security auditing awareness"],
    },
    {
      title: "GIS Specialist",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Leverage geospatial data and mapping technologies to improve waste collection planning and environmental impact tracking.",
      quals: ["ArcGIS / QGIS proficiency", "Spatial data analysis", "GPS and field data integration", "Map visualisation and reporting", "Understanding of environmental regulations"],
    },
    {
      title: "Data Scientist",
      exp: "3–5 yrs",
      edu: "Bachelor's / Master's",
      desc: "Turn waste management data into insights that drive operational efficiency and environmental impact measurement.",
      quals: ["Environmental data analysis experience", "Python or R proficiency", "Data visualisation (Matplotlib, Plotly)", "Statistical modelling", "Report writing for non-technical stakeholders"],
    },
    {
      title: "Digital Marketing Specialist",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Promote NTONARCH Waste's sustainability mission and services to governments, businesses, and communities.",
      quals: ["B2B and B2G marketing experience", "Environmental / sustainability sector knowledge a plus", "Content marketing and SEO", "Social media management", "Proposal and pitch deck creation"],
    },
  ],

  "NTONARCH FARMS": [
    {
      title: "Agricultural Data Analyst",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Analyse farm performance data, yield forecasts, and supply chain metrics to optimise NTONARCH's international farm operations.",
      quals: ["Agriculture or data science background", "Data analysis tools proficiency", "Understanding of crop cycles and farm economics", "Data visualisation skills", "Remote sensing / satellite data a plus"],
    },
    {
      title: "Supply Chain Coordinator",
      exp: "3–5 yrs",
      edu: "Bachelor's",
      desc: "Coordinate international agricultural supply chains ensuring timely delivery, compliance, and cost efficiency.",
      quals: ["International trade and logistics knowledge", "ERP / supply chain software proficiency", "Vendor relationship management", "Export/import documentation knowledge", "Strong communication across time zones"],
    },
    {
      title: "Digital Marketing Specialist",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Promote NTONARCH Farms' produce and story to international B2B buyers and conscious consumers.",
      quals: ["Agribusiness or food sector marketing a plus", "Content creation for agricultural products", "Export market knowledge", "Google and Meta Ads experience", "Email and social campaigns"],
    },
  ],

  "NTONARCH FOUNDATION": [
    {
      title: "Program Director",
      exp: "5–8 yrs",
      edu: "Master's",
      desc: "Lead the strategic planning, implementation, and evaluation of NTONARCH Foundation's social impact programmes.",
      quals: ["Senior NGO / foundation leadership experience", "Grant management and reporting", "M&E (monitoring and evaluation) expertise", "Stakeholder and government relations", "Budget management at programme scale"],
    },
    {
      title: "Finance Manager",
      exp: "4–6 yrs",
      edu: "Bachelor's",
      desc: "Manage financial operations, donor reporting, and budgeting for the NTONARCH Foundation's social impact work.",
      quals: ["NGO accounting standards (GAAP / IFRS)", "Grant financial reporting experience", "QuickBooks / Sage / Xero proficiency", "Donor compliance knowledge", "Transparent and accurate financial reporting"],
    },
    {
      title: "Grants & Fundraising Officer",
      exp: "3–5 yrs",
      edu: "Bachelor's",
      desc: "Identify funding opportunities, write compelling grant proposals, and manage donor relationships to sustain our mission.",
      quals: ["Grant writing portfolio / track record", "Donor prospecting and research", "Relationship management with foundations", "Understanding of global development sector", "Excellent written communication"],
    },
    {
      title: "Communications Manager",
      exp: "4–6 yrs",
      edu: "Bachelor's",
      desc: "Manage the Foundation's public communications, media relations, and storytelling to amplify our social impact.",
      quals: ["PR and media relations experience", "Impact storytelling and report writing", "Social media management", "Press release and editorial writing", "Photography / multimedia content skills a plus"],
    },
    {
      title: "Content Creator",
      exp: "2–4 yrs",
      edu: "Bachelor's",
      desc: "Create powerful stories, social content, and impact reports that communicate the Foundation's work to the world.",
      quals: ["Social impact or NGO content creation", "Video storytelling skills", "Strong written narrative ability", "Knowledge of development themes", "Multi-platform content adaptability"],
    },
  ],
};

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
  "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus",
  "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
  "Canada", "Central African Republic", "Chad", "Chile", "China",
  "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (DRC)",
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
  "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
  "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
  "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
  "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
  "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
  "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
  "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
  "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
  "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
  "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
  "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
  "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino",
  "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
  "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa", "South Korea",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden",
  "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
  "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
  "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
  "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe",
];

const NATIONALITIES = [
  "Afghan", "Albanian", "Algerian", "American", "Argentine", "Australian",
  "Austrian", "Bangladeshi", "Belgian", "Brazilian", "British",
  "Cameroonian", "Canadian", "Chinese", "Egyptian", "French", "German",
  "Ghanaian", "Indian", "Indonesian", "Irish", "Italian", "Japanese",
  "Kenyan", "Malaysian", "Mexican", "Nigerian", "Pakistani", "Philippine",
  "Russian", "Saudi", "South African", "Spanish", "Turkish", "Ukrainian",
  "Ugandan", "Zimbabwean",
];

const DIVISIONS = Object.keys(POSITIONS);

const HEARD_OPTIONS = [
  "Facebook", "X (Twitter)", "Instagram", "TikTok",
  "A Friend", "LinkedIn", "Google Search", "Other",
];

const initialForm = {
  firstName: "",
  lastName: "",
  dob: "",
  gender: "",
  nationality: "",
  continent: "",
  country: "",
  stateRegion: "",
  address: "",
  email: "",
  phone: "",
  linkedin: "",
  facebook: "",
  twitter: "",
  github: "",
  portfolio: "",
  kinName: "",
  kinRel: "",
  kinPhone: "",
  kinEmail: "",
  kinAddress: "",
  division: "",
  position: "",
  avail: "",
  empType: "",
  education: "",
  experience: "",
  fieldStudy: "",
  institution: "",
  skills: "",
  prevExp: "",
  languages: "",
  certs: "",
  cvLink: "",
  motivation: "",
  comments: "",
  heard: "",
  chkBg: false,
  chkData: false,
  chkAcc: false,
};

const requiredFields = [
  "firstName", "lastName", "dob", "gender", "nationality",
  "continent", "country", "stateRegion", "address", "email",
  "phone", "kinName", "kinRel", "kinPhone", "kinAddress",
  "division", "position", "avail", "empType", "education",
  "experience", "fieldStudy", "institution", "skills",
  "prevExp", "motivation", "heard",
];

/* =========================================================
   REUSABLE FORM COMPONENTS
========================================================= */

function Field({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  type = "text",
  placeholder = "",
  options,
  rows = 3,
  accept,
  onFileChange,
  hint,
}) {
  const base =
    "w-full rounded-xl border bg-[#151b18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/10";

  return (
    <div className="min-w-0">
      <label className="mb-2 block text-sm font-medium text-white/80">
        {label}
        {required && <span className="ml-1 text-[#ff6b00]">*</span>}
      </label>

      {hint && (
        <p className="mb-2 text-xs leading-relaxed text-white/40">{hint}</p>
      )}

      {options ? (
        <select
          name={name}
          value={value || ""}
          onChange={onChange}
          className={`${base} appearance-none ${
            error ? "border-red-500" : "border-white/10"
          }`}
        >
          <option value="">Select...</option>
          {options.map((option) => (
            <option key={option} value={option} className="bg-[#151b18]">
              {option}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          value={value || ""}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          className={`${base} resize-y ${
            error ? "border-red-500" : "border-white/10"
          }`}
        />
      ) : type === "file" ? (
        <input
          type="file"
          name={name}
          accept={accept}
          onChange={onFileChange}
          className={`${base} file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-[#ff6b00] file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white ${
            error ? "border-red-500" : "border-white/10"
          }`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          className={`${base} ${
            error ? "border-red-500" : "border-white/10"
          }`}
        />
      )}

      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
          <AlertCircle size={13} />
          {error}
        </p>
      )}
    </div>
  );
}

function FormSection({ icon: Icon, title, children }) {
  return (
    <section className="border-b border-white/[0.07] py-7 last:border-0">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff6b00]/10 text-[#ff6b00]">
          <Icon size={17} />
        </div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      {children}
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function RemoteCareers({ onSubmit }) {
  const [search, setSearch] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("");
  const [expandedJob, setExpandedJob] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [idDocument, setIdDocument] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const allJobs = useMemo(
    () =>
      Object.entries(POSITIONS).flatMap(([division, jobs]) =>
        jobs.map((job) => ({ ...job, division }))
      ),
    []
  );

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return allJobs.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.desc.toLowerCase().includes(query);

      const matchesDivision =
        !divisionFilter || job.division === divisionFilter;

      return matchesSearch && matchesDivision;
    });
  }, [allJobs, search, divisionFilter]);

  const divisionJobs = form.division ? POSITIONS[form.division] || [] : [];

  const updateField = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "division" ? { position: "" } : {}),
    }));

    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const choosePosition = (job) => {
    setSelectedPosition(job);
    setExpandedJob(job.title);
    setForm((current) => ({
      ...current,
      division: job.division,
      position: job.title,
    }));

    setErrors((current) => ({
      ...current,
      division: "",
      position: "",
    }));

    setTimeout(() => {
      document.getElementById("applySection")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleDocument = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      setIdDocument(null);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
    ];

    if (!allowedTypes.includes(file.type)) {
      setErrors((current) => ({
        ...current,
        idDocument: "Please upload a PDF, JPG or PNG file.",
      }));
      e.target.value = "";
      setIdDocument(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors((current) => ({
        ...current,
        idDocument: "File size must not exceed 5MB.",
      }));
      e.target.value = "";
      setIdDocument(null);
      return;
    }

    setIdDocument(file);
    setErrors((current) => ({ ...current, idDocument: "" }));
  };

  const validateForm = () => {
    const nextErrors = {};

    requiredFields.forEach((field) => {
      if (!String(form[field] || "").trim()) {
        nextErrors[field] = "This field is required.";
      }
    });

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (form.kinEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.kinEmail)) {
      nextErrors.kinEmail = "Please enter a valid email address.";
    }

    if (!idDocument) {
      nextErrors.idDocument = "A government-issued ID is required.";
    }

    if (!form.chkBg) {
      nextErrors.chkBg = "Please confirm this consent.";
    }

    if (!form.chkData) {
      nextErrors.chkData = "Please confirm this consent.";
    }

    if (!form.chkAcc) {
      nextErrors.chkAcc = "Please confirm this declaration.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      const firstError = document.querySelector("[data-error='true']");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("");

    if (!validateForm()) return;

    if (typeof onSubmit !== "function") {
      setSubmitMessage(
        "Your information is valid. Application submission is not connected yet. Please connect your application API before accepting applications."
      );
      return;
    }

    try {
      setSubmitting(true);

      await onSubmit({
        ...form,
        governmentId: idDocument,
      });

      setSubmitMessage(
        "Your application has been submitted successfully. Thank you for your interest in NTONARCH."
      );

      setForm(initialForm);
      setIdDocument(null);
      setSelectedPosition(null);
      setErrors({});

      const fileInput = document.querySelector('input[name="idDocument"]');
      if (fileInput) fileInput.value = "";
    } catch (error) {
      setSubmitMessage(
        error?.message || "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputProps = (name) => ({
    name,
    value: form[name],
    onChange: updateField,
    error: errors[name],
    required: requiredFields.includes(name),
  });

  return (
    <main className="min-h-screen mt-20 bg-[#101714] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -right-40 -top-48 -z-10 h-[500px] w-[500px] rounded-full bg-[#ff6b00]/10 blur-[120px]" />
        <div className="absolute -bottom-48 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-[#ff6b00]/[0.06] blur-[110px]" />

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 lg:pb-20 lg:pt-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff6b00]/30 bg-[#ff6b00]/10 px-4 py-2 text-xs font-semibold tracking-wide text-[#ff9a54]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff6b00]" />
              NOW HIRING — REMOTE WORLDWIDE
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Work <span className="text-[#ff6b00]">anywhere.</span>
              <br />
              Build everything.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              Join the NTONARCH global team across 9 divisions. Enjoy location
              flexibility, flexible hours, and the opportunity to contribute
              to meaningful work across industries.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Globe2, label: "Work from anywhere" },
                { icon: Clock3, label: "Flexible hours" },
                { icon: Users, label: "Global team" },
                { icon: Layers3, label: "9 divisions" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs text-white/65"
                >
                  <Icon size={15} className="text-[#ff6b00]" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-7">
            <div>
              <p className="text-2xl font-bold text-white">9</p>
              <p className="mt-1 text-xs text-white/40">Business divisions</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {allJobs.length}
              </p>
              <p className="mt-1 text-xs text-white/40">Open role listings</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Global</p>
              <p className="mt-1 text-xs text-white/40">Remote opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONS */}
      <section id="positions" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
              Explore opportunities
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Open Remote Positions
            </h2>
            <p className="mt-2 text-sm text-white/45">
              Explore available roles across our business divisions.
            </p>
          </div>

          <p className="text-sm text-white/45">
            <span className="font-semibold text-white">{filteredJobs.length}</span>{" "}
            positions found
          </p>
        </div>

        {/* FILTERS */}
        <div className="mb-7 grid gap-3 sm:grid-cols-[1fr_260px]">
          <div className="relative">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by job title or keyword..."
              className="w-full rounded-xl border border-white/10 bg-[#151b18] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#ff6b00]"
            />
          </div>

          <div className="relative">
            <select
              value={divisionFilter}
              onChange={(e) => setDivisionFilter(e.target.value)}
              className="w-full appearance-none rounded-xl border border-white/10 bg-[#151b18] px-4 py-3.5 pr-10 text-sm text-white outline-none focus:border-[#ff6b00]"
            >
              <option value="">All Divisions</option>
              {DIVISIONS.map((division) => (
                <option key={division} value={division}>
                  {division}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
            />
          </div>
        </div>

        {/* JOB LIST */}
        {filteredJobs.length ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJob === job.title + job.division;

              return (
                <article
                  key={`${job.division}-${job.title}`}
                  className={`flex flex-col rounded-2xl border bg-[#151b18] p-5 transition duration-200 ${
                    isExpanded
                      ? "border-[#ff6b00]/50"
                      : "border-white/[0.08] hover:border-white/20"
                  }`}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="rounded-md bg-[#ff6b00]/10 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#ff9a54]">
                      {job.division.replace("NTONARCH ", "")}
                    </span>

                    <span className="flex items-center gap-1.5 text-[11px] text-white/40">
                      <Laptop size={13} />
                      Remote
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {job.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-6 text-white/45">
                    {job.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/[0.07] pt-4 text-xs text-white/45">
                    <span className="flex items-center gap-1.5">
                      <BriefcaseBusiness size={13} className="text-[#ff6b00]" />
                      {job.exp}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <GraduationCap size={14} className="text-[#ff6b00]" />
                      {job.edu}
                    </span>
                  </div>

                  {isExpanded && (
                    <div className="mt-5 rounded-xl bg-[#101714] p-4">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/75">
                        Key Requirements
                      </p>
                      <ul className="space-y-2">
                        {job.quals.map((qualification) => (
                          <li
                            key={qualification}
                            className="flex gap-2 text-xs leading-5 text-white/50"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-[#ff6b00]"
                            />
                            {qualification}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-5 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedJob(isExpanded ? null : job.title + job.division)
                      }
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-3 text-xs font-semibold text-white/65 transition hover:border-white/25 hover:text-white"
                    >
                      {isExpanded ? "Hide details" : "View requirements"}
                      {isExpanded ? (
                        <ChevronUp size={14} />
                      ) : (
                        <ChevronDown size={14} />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => choosePosition(job)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#ff6b00] px-3 py-3 text-xs font-bold text-white transition hover:bg-[#e85f00]"
                    >
                      Apply now
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 py-16 text-center">
            <Search size={26} className="mx-auto text-white/25" />
            <h3 className="mt-4 font-semibold text-white">
              No positions found
            </h3>
            <p className="mt-2 text-sm text-white/40">
              Try another job title or select a different division.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setDivisionFilter("");
              }}
              className="mt-5 text-sm font-semibold text-[#ff8b3d] hover:text-[#ff6b00]"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* APPLICATION FORM */}
      <section
        id="applySection"
        className="scroll-mt-8 border-t border-white/[0.06] bg-[#0c120f] px-5 py-16 sm:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff6b00]">
              Take the next step
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Apply for a Remote Position
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">
              Complete the application form below. Ensure that your information
              is accurate and that your supporting document is ready.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#151b18]">
            <div className="border-b border-white/[0.07] px-5 py-6 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6b00]/10 text-[#ff6b00]">
                  <BriefcaseBusiness size={19} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Candidate Application
                  </h3>
                  <p className="mt-1 text-xs text-white/40">
                    Fields marked with * are required.
                  </p>
                </div>
              </div>

              {selectedPosition && (
                <div className="mt-5 flex flex-col justify-between gap-3 rounded-xl border border-[#ff6b00]/20 bg-[#ff6b00]/[0.07] p-4 sm:flex-row sm:items-center">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#ff6b00]"
                    />
                    <div>
                      <p className="text-xs text-white/45">
                        Selected position
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {selectedPosition.title}
                      </p>
                      <p className="mt-1 text-xs text-white/45">
                        {selectedPosition.division}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPosition(null);
                      setForm((current) => ({
                        ...current,
                        division: "",
                        position: "",
                      }));
                    }}
                    className="text-left text-xs font-semibold text-[#ff9a54] hover:text-[#ff6b00]"
                  >
                    Change position
                  </button>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} noValidate className="px-5 sm:px-8">
              {/* PERSONAL INFORMATION */}
              <FormSection icon={UserRound} title="Personal Information">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="First Name" placeholder="e.g. John" {...inputProps("firstName")} />
                  <Field label="Last Name" placeholder="e.g. Adeyemi" {...inputProps("lastName")} />
                  <Field label="Date of Birth" type="date" {...inputProps("dob")} />
                  <Field label="Gender" options={["Male", "Female"]} {...inputProps("gender")} />
                  <Field label="Nationality" options={NATIONALITIES} {...inputProps("nationality")} />
                  <Field
                    label="Continent Applying From"
                    options={["Africa", "Asia", "Europe", "North America", "South America", "Australia / Oceania", "Antarctica"]}
                    {...inputProps("continent")}
                  />
                  <Field label="Country of Residence" options={COUNTRIES} {...inputProps("country")} />
                  <Field label="State / Region" placeholder="e.g. Lagos, Nairobi County, Texas..." {...inputProps("stateRegion")} />
                  <div className="sm:col-span-2">
                    <Field
                      label="Physical Address"
                      type="textarea"
                      rows={2}
                      placeholder="Street, City, Postal Code"
                      {...inputProps("address")}
                    />
                  </div>
                </div>
              </FormSection>

              {/* CONTACT INFORMATION */}
              <FormSection icon={Mail} title="Contact Information">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email Address" type="email" placeholder="you@email.com" {...inputProps("email")} />
                  <Field label="Phone (with country code)" type="tel" placeholder="+234 800 000 0000" {...inputProps("phone")} />
                  <Field label="LinkedIn Profile" type="url" placeholder="https://linkedin.com/in/..." {...inputProps("linkedin")} />
                  <Field label="Facebook Profile" type="url" placeholder="https://facebook.com/..." {...inputProps("facebook")} />
                  <Field label="X (Twitter) Handle" placeholder="@yourhandle" {...inputProps("twitter")} />
                  <Field label="GitHub Profile" type="url" placeholder="https://github.com/..." {...inputProps("github")} />
                  <div className="sm:col-span-2">
                    <Field label="Other Portfolio / Website" type="url" placeholder="https://..." {...inputProps("portfolio")} />
                  </div>
                </div>
              </FormSection>

              {/* NEXT OF KIN */}
              <FormSection icon={Heart} title="Next of Kin Details">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" placeholder="e.g. Jane Adeyemi" {...inputProps("kinName")} />
                  <Field label="Relationship" options={["Parent", "Sibling", "Spouse / Partner", "Child", "Friend", "Other"]} {...inputProps("kinRel")} />
                  <Field label="Phone Number" type="tel" placeholder="+234 800 000 0000" {...inputProps("kinPhone")} />
                  <Field label="Email Address" type="email" placeholder="kin@email.com" {...inputProps("kinEmail")} />
                  <div className="sm:col-span-2">
                    <Field label="Address" type="textarea" rows={2} placeholder="Next of kin's address" {...inputProps("kinAddress")} />
                  </div>
                </div>
              </FormSection>

              {/* POSITION DETAILS */}
              <FormSection icon={BriefcaseBusiness} title="Position Details">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Division"
                    options={DIVISIONS}
                    {...inputProps("division")}
                  />
                  <Field
                    label="Position Applied For"
                    options={divisionJobs.map((job) => job.title)}
                    placeholder="Select a division first..."
                    {...inputProps("position")}
                  />
                  <Field
                    label="When can you start?"
                    options={["Immediately", "Within 2 weeks", "Within 1 month", "Within 2 months", "Other (specify in cover letter)"]}
                    {...inputProps("avail")}
                  />
                  <Field
                    label="Employment Type Preference"
                    options={["Full-Time", "Part-Time", "Contract", "Internship"]}
                    {...inputProps("empType")}
                  />
                </div>
              </FormSection>

              {/* PROFESSIONAL BACKGROUND */}
              <FormSection icon={GraduationCap} title="Professional Background">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Highest Education Level"
                    options={["Secondary / High School", "Diploma / HND", "Associate Degree", "Bachelor's Degree", "Postgraduate Diploma", "Master's Degree", "PhD / Doctorate", "Professional Certification"]}
                    {...inputProps("education")}
                  />
                  <Field
                    label="Years of Experience"
                    options={["0–1 years (Entry Level)", "1–3 years", "3–5 years", "5–8 years", "8–12 years", "12+ years (Senior)"]}
                    {...inputProps("experience")}
                  />
                  <Field label="Field of Study" placeholder="e.g. Computer Science, Marketing..." {...inputProps("fieldStudy")} />
                  <Field label="Institution / University" placeholder="e.g. University of Lagos" {...inputProps("institution")} />
                  <div className="sm:col-span-2">
                    <Field
                      label="Key Skills & Competencies"
                      type="textarea"
                      rows={3}
                      placeholder="List your top skills, tools, frameworks, languages..."
                      {...inputProps("skills")}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Field
                      label="Summary of Previous Experience"
                      type="textarea"
                      rows={4}
                      placeholder="Briefly describe your last 1–2 roles and key responsibilities..."
                      {...inputProps("prevExp")}
                    />
                  </div>
                  <Field label="Languages Spoken" placeholder="e.g. English (Fluent), French (Intermediate)" {...inputProps("languages")} />
                  <Field label="Certifications / Awards" placeholder="e.g. Google Analytics, PMP, AWS..." {...inputProps("certs")} />
                </div>
              </FormSection>

              {/* REQUIRED DOCUMENTS */}
              <FormSection icon={IdCard} title="Required Documents">
                <div className="grid gap-5">
                  <Field
                    label="Government-Issued ID"
                    name="idDocument"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onFileChange={handleDocument}
                    error={errors.idDocument}
                    required
                    hint="PDF or image, maximum 5MB. Accepted documents include National ID, Passport or Driver's Licence."
                  />
                  {idDocument && (
                    <div className="flex items-center gap-3 rounded-lg bg-white/[0.04] p-3">
                      <FileText size={18} className="text-[#ff6b00]" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-medium text-white">
                          {idDocument.name}
                        </p>
                        <p className="mt-1 text-[11px] text-white/40">
                          {(idDocument.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setIdDocument(null);
                          const fileInput = document.querySelector('input[name="idDocument"]');
                          if (fileInput) fileInput.value = "";
                        }}
                        className="text-xs text-red-400 hover:text-red-300"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                  <Field
                    label="CV / Resumé"
                    type="textarea"
                    rows={2}
                    placeholder="Paste a link to your CV, Google Drive, or Dropbox... OR we will use your LinkedIn profile."
                    {...inputProps("cvLink")}
                  />
                </div>
              </FormSection>

              {/* ADDITIONAL INFORMATION */}
              <FormSection icon={Info} title="Additional Information">
                <div className="grid gap-5">
                  <Field
                    label="Why do you want to join NTONARCH?"
                    type="textarea"
                    rows={4}
                    placeholder="Tell us what draws you to this role and NTONARCH..."
                    {...inputProps("motivation")}
                  />
                  <Field
                    label="Any additional comments or information?"
                    type="textarea"
                    rows={3}
                    placeholder="Anything else you'd like us to know..."
                    {...inputProps("comments")}
                  />

                  <div>
                    <label className="mb-3 block text-sm font-medium text-white/80">
                      How did you hear about us?
                      <span className="ml-1 text-[#ff6b00]">*</span>
                    </label>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {HEARD_OPTIONS.map((option) => (
                        <label
                          key={option}
                          className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-3 text-xs transition ${
                            form.heard === option
                              ? "border-[#ff6b00]/50 bg-[#ff6b00]/10 text-[#ff9a54]"
                              : "border-white/10 bg-[#101714] text-white/55 hover:border-white/25"
                          }`}
                        >
                          <input
                            type="radio"
                            name="heard"
                            value={option}
                            checked={form.heard === option}
                            onChange={updateField}
                            className="accent-[#ff6b00]"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                    {errors.heard && (
                      <p className="mt-2 text-xs text-red-400">{errors.heard}</p>
                    )}
                  </div>
                </div>
              </FormSection>

              {/* CONSENT */}
              <FormSection icon={CheckCircle2} title="Declaration & Consent">
                <div className="space-y-4">
                  {[
                    {
                      name: "chkBg",
                      text: "I authorise NTONARCH to conduct background checks as part of the hiring process.",
                    },
                    {
                      name: "chkData",
                      text: "I consent to the processing of my personal data in accordance with GDPR and applicable data protection laws.",
                    },
                    {
                      name: "chkAcc",
                      text: "I confirm that all information provided in this application is accurate and complete.",
                    },
                  ].map((item) => (
                    <div key={item.name}>
                      <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-white/60">
                        <input
                          type="checkbox"
                          name={item.name}
                          checked={form[item.name]}
                          onChange={updateField}
                          className="mt-1 h-4 w-4 shrink-0 accent-[#ff6b00]"
                        />
                        {item.text}
                      </label>
                      {errors[item.name] && (
                        <p className="ml-7 mt-1 text-xs text-red-400">
                          {errors[item.name]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </FormSection>

              {/* SUBMIT */}
              <div className="pb-8 pt-2">
                {submitMessage && (
                  <div className="mb-5 flex items-start gap-3 rounded-xl border border-[#ff6b00]/20 bg-[#ff6b00]/[0.07] p-4 text-sm leading-6 text-white/75">
                    <Info size={18} className="mt-0.5 shrink-0 text-[#ff8b3d]" />
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#ff6b00] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#e85f00] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[220px]"
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Application
                    </>
                  )}
                </button>

                <p className="mt-4 text-xs leading-5 text-white/35">
                  Please review your information before submitting. Our
                  recruitment team will review eligible applications and
                  contact shortlisted candidates.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
