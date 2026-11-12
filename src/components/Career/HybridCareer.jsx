import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  GraduationCap,
  Globe2,
  Laptop,
  MapPin,
  Moon,
  Search,
  Send,
  ShieldCheck,
  Sun,
  Users,
  X,
} from "lucide-react";

import {
  ALL_COUNTRIES,
  NATIONALITIES,
  POSITIONS,
} from "../../../data";

const divisions = Object.keys(POSITIONS);

const continents = [
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Australia / Oceania",
  "Antarctica",
];

const heardOptions = [
  "Facebook",
  "X (Twitter)",
  "Instagram",
  "TikTok",
  "A Friend",
  "LinkedIn",
  "Google Search",
  "Other",
];

const inputBase =
  "w-full rounded-lg border border-[var(--border)] bg-[var(--field)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/15";

const labelBase =
  "mb-2 block text-[11px] font-bold uppercase tracking-[0.09em] text-[var(--muted)]";

const sectionTitle =
  "mb-6 flex items-center gap-3 border-b border-[var(--border)] pb-4 font-bold uppercase tracking-[0.1em] text-[var(--muted)]";

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
  options,
  rows,
  accept,
  min,
  hint,
  className = "",
  ...props
}) {
  const common = {
    id: name,
    name,
    required,
    className: `${inputBase} ${className}`,
    ...props,
  };

  return (
    <div className="min-w-0">
      <label htmlFor={name} className={labelBase}>
        {label} {required && <span className="text-[#ff6b00]">*</span>}
      </label>

      {options ? (
        <div className="relative">
          <select {...common} defaultValue="">
            <option value="" disabled>
              {placeholder || "Select an option"}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#ff6b00]"
          />
        </div>
      ) : rows ? (
        <textarea
          {...common}
          rows={rows}
          placeholder={placeholder}
          className={`${inputBase} min-h-[100px] resize-y ${className}`}
        />
      ) : (
        <input
          {...common}
          type={type}
          placeholder={placeholder}
          accept={accept}
          min={min}
        />
      )}

      {hint && (
        <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
          {hint}
        </p>
      )}
    </div>
  );
}

function FormSection({ icon: Icon, title, children }) {
  return (
    <section className="mb-10 border-b border-[var(--border)] pb-9 last:border-0">
      <h3 className={sectionTitle}>
        <Icon size={17} className="text-[#ff6b00]" />
        {title}
      </h3>
      {children}
    </section>
  );
}

function FormRow({ children, columns = 2 }) {
  return (
    <div
      className={`grid grid-cols-1 gap-5 ${
        columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      {children}
    </div>
  );
}

function PositionCard({ division, job, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#9b59b6]/60 hover:shadow-xl"
    >
      <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#9b59b6] transition-all duration-300 group-hover:w-full" />

      <span className="mb-3 w-fit rounded bg-[#9b59b6]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#b77bd0]">
        {division.replace("NTONARCH ", "")}
      </span>

      <h3 className="mb-2 font-bold text-[var(--text)]">
        {job.title}
      </h3>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {job.desc}
      </p>

      <div className="space-y-2 text-xs text-[var(--muted)]">
        <div className="flex items-center gap-2">
          <BriefcaseBusiness size={14} className="text-[#9b59b6]" />
          {job.exp}
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap size={14} className="text-[#9b59b6]" />
          {job.edu}
        </div>
        <div className="flex items-center gap-2">
          <Laptop size={14} className="text-[#9b59b6]" />
          Hybrid
        </div>
      </div>

      {job.quals?.length > 0 && (
        <div className="mt-5 border-t border-[var(--border)] pt-4">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">
            Key Requirements
          </p>
          <ul className="space-y-2">
            {job.quals.map((qualification) => (
              <li
                key={qualification}
                className="flex items-start gap-2 text-xs leading-relaxed text-[var(--muted)]"
              >
                <span className="mt-1 text-[#9b59b6]">•</span>
                {qualification}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-5 flex items-center gap-2 border-t border-[var(--border)] pt-4 text-xs font-semibold text-[#b77bd0] transition group-hover:text-[#ff6b00]">
        Click to apply <ArrowRight size={14} />
      </div>
    </button>
  );
}

export default function HybridCareers({ onSubmit }) {
  const [theme, setTheme] = useState("dark");
  const [search, setSearch] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [heard, setHeard] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const formRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("ntonarch-theme") || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("ntonarch-theme", theme);
  }, [theme]);

  const filteredPositions = useMemo(() => {
    return Object.entries(POSITIONS).flatMap(([division, jobs]) =>
      jobs
        .filter((job) => {
          const matchesSearch = job.title
            .toLowerCase()
            .includes(search.toLowerCase().trim());

          const matchesDivision =
            !divisionFilter || division === divisionFilter;

          return matchesSearch && matchesDivision;
        })
        .map((job) => ({ division, job })),
    );
  }, [search, divisionFilter]);

  const availablePositions = selectedDivision
    ? POSITIONS[selectedDivision] || []
    : [];

  const selectPosition = (division, title) => {
    setSelectedDivision(division);
    setSelectedPosition(title);
    setFeedback(null);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
    setSelectedPosition("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback(null);

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const idDocument = formData.get("idDoc");

    if (!idDocument || !idDocument.size) {
      setFeedback({
        type: "error",
        message: "Please upload your government-issued ID.",
      });
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
    ];

    if (!allowedTypes.includes(idDocument.type)) {
      setFeedback({
        type: "error",
        message: "Your ID must be a PDF, JPG, JPEG, or PNG file.",
      });
      return;
    }

    if (idDocument.size > 5 * 1024 * 1024) {
      setFeedback({
        type: "error",
        message: "Your ID document must not exceed 5MB.",
      });
      return;
    }

    if (!heard) {
      setFeedback({
        type: "error",
        message: "Please select how you heard about us.",
      });
      document
        .getElementById("heard-section")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const consentFields = ["chkBg", "chkData", "chkAcc"];
    const missingConsent = consentFields.some(
      (field) => !formData.get(field),
    );

    if (missingConsent) {
      setFeedback({
        type: "error",
        message: "Please accept all three consent statements.",
      });
      return;
    }

    formData.set("heard", heard);

    setSubmitting(true);

    try {
      if (typeof onSubmit !== "function") {
        setFeedback({
          type: "info",
          message:
            "Your application is validated, but no submission service is connected yet.",
        });
        return;
      }

      await onSubmit(formData);

      setFeedback({
        type: "success",
        message: "Your application has been submitted successfully.",
      });

      form.reset();
      setSelectedDivision("");
      setSelectedPosition("");
      setHeard("");
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error?.message ||
          "Something went wrong while submitting your application. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const field = (props) => <Field {...props} />;

  return (
    <main
      data-theme={theme}
      className="min-h-screen bg-[var(--page)] text-[var(--text)] transition-colors duration-300"
      style={{
        "--page": theme === "dark" ? "#0e0e10" : "#f5f5f7",
        "--surface": theme === "dark" ? "#161618" : "#ffffff",
        "--field": theme === "dark" ? "#1c1c20" : "#f0f0f2",
        "--border": theme === "dark" ? "#2a2a2e" : "#dde0e6",
        "--text": theme === "dark" ? "#e8e8ec" : "#111114",
        "--muted": theme === "dark" ? "#888890" : "#666672",
      }}
    >
      {/* Theme control */}
      <div className="mx-auto flex max-w-[1300px] justify-end px-5 pt-5 sm:px-10">
        <button
          type="button"
          onClick={() =>
            setTheme((current) =>
              current === "dark" ? "light" : "dark",
            )
          }
          aria-label="Toggle theme"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition hover:border-[#ff6b00] hover:text-[#ff6b00]"
        >
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-16 text-center sm:px-10 sm:pb-20 sm:pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[350px] max-w-4xl rounded-full bg-[#9b59b6]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#9b59b6]/30 bg-[#9b59b6]/10 px-4 py-2 text-xs font-semibold text-[#b77bd0]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#9b59b6]" />
            Now Hiring — Hybrid Positions
          </span>

          <h1 className="font-[Syne,sans-serif] text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Best of both <span className="text-[#9b59b6]">worlds.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[var(--muted)] sm:text-base">
            NTONARCH Hybrid roles combine the flexibility of remote
            work with meaningful in-person collaboration — across all
            9 divisions worldwide.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {[
              { icon: Laptop, label: "Hybrid flexibility" },
              { icon: Users, label: "In-person + remote" },
              { icon: Globe2, label: "Global team" },
              { icon: BriefcaseBusiness, label: "9 divisions" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs text-[var(--muted)]"
              >
                <Icon size={14} className="text-[#9b59b6]" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="mx-auto max-w-[1300px] px-5 py-14 sm:px-10 sm:py-20">
        <div className="mb-8">
          <h2 className="font-[Syne,sans-serif] text-2xl font-bold tracking-tight sm:text-3xl">
            Open Hybrid Positions
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Browse all roles. Click any card to auto-fill your
            application below.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by job title..."
              className={`${inputBase} pl-11`}
            />
          </div>

          <div className="relative sm:w-[260px]">
            <select
              value={divisionFilter}
              onChange={(event) => setDivisionFilter(event.target.value)}
              className={`${inputBase} appearance-none pr-10`}
            >
              <option value="">All Divisions</option>
              {divisions.map((division) => (
                <option key={division} value={division}>
                  {division}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#ff6b00]"
            />
          </div>
        </div>

        <p className="mb-4 text-xs text-[var(--muted)]">
          Showing {filteredPositions.length} position
          {filteredPositions.length === 1 ? "" : "s"}
        </p>

        {filteredPositions.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredPositions.map(({ division, job }) => (
              <PositionCard
                key={`${division}-${job.title}`}
                division={division}
                job={job}
                onClick={() => selectPosition(division, job.title)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-20 text-center">
            <Search
              size={35}
              className="mx-auto mb-4 text-[var(--muted)] opacity-40"
            />
            <h3 className="font-semibold">No positions found</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Try another job title or select a different division.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setDivisionFilter("");
              }}
              className="mt-5 text-sm font-semibold text-[#ff6b00] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Application Form */}
      <section
        ref={formRef}
        id="applySection"
        className="mx-auto max-w-[970px] scroll-mt-8 px-5 pb-16 sm:px-10 sm:pb-20"
      >
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#512a60] to-[#6c3483] px-6 py-10 sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="relative">
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70">
                <FileText size={15} />
                Careers Application
              </span>
              <h2 className="font-[Syne,sans-serif] text-2xl font-bold text-white sm:text-3xl">
                Apply for Hybrid Position
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Fill in all required fields. We'll be in touch within
                5 business days.
              </p>
            </div>
          </div>

          {selectedPosition && (
            <div className="flex items-start gap-3 border-b border-[#9b59b6]/20 bg-[#9b59b6]/10 px-6 py-4 sm:px-10">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-[#b77bd0]"
              />
              <div className="min-w-0 text-sm">
                <span className="text-[var(--muted)]">
                  Applying for:
                </span>
                <strong className="ml-1 text-[#b77bd0]">
                  {selectedPosition} — {selectedDivision}
                </strong>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedPosition("");
                  setSelectedDivision("");
                }}
                className="ml-auto shrink-0 text-[var(--muted)] hover:text-[#ff6b00]"
                aria-label="Clear selected position"
              >
                <X size={17} />
              </button>
            </div>
          )}

          <form
            id="appForm"
            onSubmit={handleSubmit}
            className="p-5 sm:p-10"
          >
            {/* 1. Personal Information */}
            <FormSection icon={Users} title="Personal Information">
              <FormRow>
                {field({
                  label: "First Name",
                  name: "firstName",
                  required: true,
                })}
                {field({
                  label: "Last Name",
                  name: "lastName",
                  required: true,
                })}
              </FormRow>

              <div className="mt-5">
                <FormRow columns={3}>
                  {field({
                    label: "Date of Birth",
                    name: "dob",
                    type: "date",
                    required: true,
                  })}
                  {field({
                    label: "Gender",
                    name: "gender",
                    required: true,
                    options: ["Male", "Female"],
                  })}
                  {field({
                    label: "Nationality",
                    name: "nationality",
                    required: true,
                    options: [...NATIONALITIES].sort(),
                  })}
                </FormRow>
              </div>

              <div className="mt-5">
                <FormRow>
                  {field({
                    label: "Continent",
                    name: "continent",
                    required: true,
                    options: continents,
                  })}
                  {field({
                    label: "Country of Residence",
                    name: "country",
                    required: true,
                    options: ALL_COUNTRIES,
                  })}
                </FormRow>
              </div>

              <div className="mt-5">
                {field({
                  label: "State / Region",
                  name: "stateRegion",
                  required: true,
                })}
              </div>

              <div className="mt-5">
                {field({
                  label: "Physical Address",
                  name: "address",
                  required: true,
                  rows: 3,
                })}
              </div>
            </FormSection>

            {/* 2. Contact Information */}
            <FormSection icon={Globe2} title="Contact Information">
              <FormRow>
                {field({
                  label: "Email Address",
                  name: "email",
                  type: "email",
                  required: true,
                })}
                {field({
                  label: "Phone (with country code)",
                  name: "phone",
                  type: "tel",
                  required: true,
                  placeholder: "+234...",
                })}
              </FormRow>

              <div className="mt-5">
                <FormRow>
                  {field({
                    label: "LinkedIn URL",
                    name: "linkedin",
                    type: "url",
                    placeholder: "https://linkedin.com/in/...",
                  })}
                  {field({
                    label: "Facebook URL",
                    name: "facebook",
                    type: "url",
                    placeholder: "https://facebook.com/...",
                  })}
                </FormRow>
              </div>

              <div className="mt-5">
                <FormRow>
                  {field({
                    label: "X (Twitter) Handle",
                    name: "twitter",
                    placeholder: "@username",
                  })}
                  {field({
                    label: "GitHub URL",
                    name: "github",
                    type: "url",
                    placeholder: "https://github.com/...",
                  })}
                </FormRow>
              </div>

              <div className="mt-5">
                {field({
                  label: "Portfolio / Website URL",
                  name: "portfolio",
                  type: "url",
                  placeholder: "https://...",
                })}
              </div>
            </FormSection>

            {/* 3. Next of Kin */}
            <FormSection icon={Users} title="Next of Kin Details">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {field({
                  label: "Full Name",
                  name: "kinName",
                  required: true,
                })}
                {field({
                  label: "Relationship",
                  name: "kinRel",
                  required: true,
                  options: [
                    "Parent",
                    "Sibling",
                    "Spouse / Partner",
                    "Child",
                    "Friend",
                    "Other",
                  ],
                })}
                {field({
                  label: "Phone Number",
                  name: "kinPhone",
                  type: "tel",
                  required: true,
                })}
                {field({
                  label: "Email Address",
                  name: "kinEmail",
                  type: "email",
                })}
              </div>

              <div className="mt-5">
                {field({
                  label: "Address",
                  name: "kinAddress",
                  required: true,
                  rows: 3,
                })}
              </div>
            </FormSection>

            {/* 4. Position Details */}
            <FormSection icon={BriefcaseBusiness} title="Position Details">
              <FormRow>
                <Field
                  label="Division"
                  name="formDivision"
                  required
                  options={divisions}
                  value={selectedDivision}
                  onChange={handleDivisionChange}
                  placeholder="Select a division"
                />

                <Field
                  label="Position Applied For"
                  name="formPosition"
                  required
                  options={availablePositions.map((job) => job.title)}
                  value={selectedPosition}
                  onChange={(event) =>
                    setSelectedPosition(event.target.value)
                  }
                  disabled={!selectedDivision}
                  placeholder={
                    selectedDivision
                      ? "Select a position"
                      : "Select a division first"
                  }
                />
              </FormRow>

              <div className="mt-5">
                <FormRow>
                  {field({
                    label: "When Can You Start?",
                    name: "avail",
                    required: true,
                    options: [
                      "Immediately",
                      "Within 2 weeks",
                      "Within 1 month",
                      "Within 2 months",
                      "Other (specify in cover letter)",
                    ],
                  })}
                  {field({
                    label: "Employment Type",
                    name: "empType",
                    required: true,
                    options: [
                      "Full-Time",
                      "Part-Time",
                      "Contract",
                      "Internship",
                    ],
                  })}
                </FormRow>
              </div>

              <div className="mt-5">
                {field({
                  label: "Preferred On-Site Days Per Week",
                  name: "hybridDays",
                  required: true,
                  options: [
                    "1 day per week",
                    "2 days per week",
                    "3 days per week",
                    "4 days per week",
                    "Flexible — as required",
                  ],
                })}
              </div>
            </FormSection>

            {/* 5. Professional Background */}
            <FormSection
              icon={GraduationCap}
              title="Professional Background"
            >
              <FormRow>
                {field({
                  label: "Highest Education Level",
                  name: "education",
                  required: true,
                  options: [
                    "Secondary / High School",
                    "Diploma / HND / OND",
                    "Technical / Vocational Certification",
                    "Associate Degree",
                    "Bachelor's Degree",
                    "Postgraduate Diploma",
                    "Master's Degree",
                    "PhD / Doctorate",
                    "Professional Licence / Certification",
                  ],
                })}
                {field({
                  label: "Years of Experience",
                  name: "experience",
                  required: true,
                  options: [
                    "0–1 years (Entry Level)",
                    "1–3 years",
                    "3–5 years",
                    "5–8 years",
                    "8–12 years",
                    "12+ years (Senior)",
                  ],
                })}
              </FormRow>

              <div className="mt-5">
                <FormRow>
                  {field({
                    label: "Field of Study",
                    name: "fieldStudy",
                    required: true,
                  })}
                  {field({
                    label: "Institution / University",
                    name: "institution",
                    required: true,
                  })}
                </FormRow>
              </div>

              <div className="mt-5">
                {field({
                  label: "Key Skills & Competencies",
                  name: "skills",
                  required: true,
                  rows: 4,
                  placeholder:
                    "List your relevant skills and competencies...",
                })}
              </div>

              <div className="mt-5">
                {field({
                  label: "Summary of Previous Experience",
                  name: "prevExp",
                  required: true,
                  rows: 4,
                  placeholder:
                    "Describe your previous roles and relevant experience...",
                })}
              </div>

              <div className="mt-5">
                <FormRow>
                  {field({
                    label: "Certifications / Awards",
                    name: "certifications",
                    rows: 3,
                  })}
                  {field({
                    label: "Languages Spoken",
                    name: "languages",
                    rows: 3,
                  })}
                </FormRow>
              </div>
            </FormSection>

            {/* 6. Hybrid Work Setup */}
            <FormSection icon={Laptop} title="Hybrid Work Setup">
              <FormRow>
                {field({
                  label: "Internet Speed (Mbps) for Remote Days",
                  name: "internet",
                  type: "number",
                  required: true,
                  min: 5,
                  placeholder: "e.g. 50",
                })}
                {field({
                  label: "Dedicated Home Workspace?",
                  name: "workspace",
                  required: true,
                  options: [
                    "Yes, I have a dedicated workspace",
                    "No, but I can arrange one",
                  ],
                })}
              </FormRow>

              <div className="mt-5">
                {field({
                  label: "Equipment Available for Remote Work",
                  name: "equipment",
                  required: true,
                  rows: 3,
                  placeholder:
                    "e.g. Laptop, external monitor, webcam, headset...",
                })}
              </div>

              <div className="mt-5">
                {field({
                  label: "City / Location for On-Site Days",
                  name: "onsiteCity",
                  required: true,
                  placeholder: "City, Country",
                })}
              </div>
            </FormSection>

            {/* 7. Documents */}
            <FormSection icon={FileText} title="Required Documents">
              {field({
                label: "Government-Issued ID",
                name: "idDoc",
                type: "file",
                required: true,
                accept: ".pdf,.jpg,.jpeg,.png",
                hint:
                  "Accepted formats: PDF, JPG, JPEG, PNG. Maximum file size: 5MB.",
              })}

              <div className="mt-5">
                {field({
                  label: "CV / Resumé Link",
                  name: "cvLink",
                  type: "url",
                  placeholder: "https://...",
                  hint:
                    "Optional. You may provide a link to your CV or résumé.",
                })}
              </div>
            </FormSection>

            {/* 8. Additional Information */}
            <FormSection
              icon={FileText}
              title="Additional Information"
            >
              {field({
                label: "Why Do You Want to Join NTONARCH?",
                name: "motivation",
                required: true,
                rows: 4,
                placeholder:
                  "Tell us why you would like to join our team...",
              })}

              <div className="mt-5">
                {field({
                  label: "Additional Comments",
                  name: "comments",
                  rows: 3,
                })}
              </div>

              <div id="heard-section" className="mt-7">
                <label className={labelBase}>
                  How Did You Hear About Us?{" "}
                  <span className="text-[#ff6b00]">*</span>
                </label>

                <div className="flex flex-wrap gap-2">
                  {heardOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setHeard(option)}
                      className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                        heard === option
                          ? "border-[#ff6b00] bg-[#ff6b00]/10 text-[#ff6b00]"
                          : "border-[var(--border)] bg-[var(--field)] text-[var(--muted)] hover:border-[#ff6b00] hover:text-[#ff6b00]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <input
                  type="hidden"
                  name="heard"
                  value={heard}
                  required
                />
              </div>
            </FormSection>

            {/* 9. Consent */}
            <FormSection icon={ShieldCheck} title="Declaration & Consent">
              <div className="space-y-5">
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[var(--muted)]">
                  <input
                    type="checkbox"
                    name="chkBg"
                    value="yes"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#ff6b00]"
                  />
                  <span>
                    I authorise NTONARCH to conduct background checks
                    and verify the information provided in this
                    application.
                  </span>
                </label>

                <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[var(--muted)]">
                  <input
                    type="checkbox"
                    name="chkData"
                    value="yes"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#ff6b00]"
                  />
                  <span>
                    I consent to the processing of my personal data
                    in accordance with GDPR and applicable data
                    protection laws.
                  </span>
                </label>

                <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[var(--muted)]">
                  <input
                    type="checkbox"
                    name="chkAcc"
                    value="yes"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#ff6b00]"
                  />
                  <span>
                    I confirm that all information provided in this
                    application is accurate and complete to the best
                    of my knowledge.
                  </span>
                </label>
              </div>
            </FormSection>

            {/* Feedback */}
            {feedback && (
              <div
                role="status"
                className={`mb-6 flex items-start gap-3 rounded-lg border p-4 text-sm ${
                  feedback.type === "success"
                    ? "border-green-500/30 bg-green-500/10 text-green-600"
                    : feedback.type === "error"
                      ? "border-red-500/30 bg-red-500/10 text-red-500"
                      : "border-[#ff6b00]/30 bg-[#ff6b00]/10 text-[#ff6b00]"
                }`}
              >
                {feedback.type === "success" ? (
                  <CheckCircle2 size={18} className="shrink-0" />
                ) : (
                  <ShieldCheck size={18} className="shrink-0" />
                )}
                <span>{feedback.message}</span>
              </div>
            )}

            <button
              id="submitBtn"
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#512a60] to-[#6c3483] px-6 py-4 font-[Syne,sans-serif] text-sm font-bold tracking-wide text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#9b59b6]/20 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={17} />
                  Submit Application
                </>
              )}
            </button>

            <p className="mt-4 text-center text-xs leading-relaxed text-[var(--muted)]">
              By submitting this application, you confirm that the
              information provided is accurate and that you agree to
              the declarations above.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}