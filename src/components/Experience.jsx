import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardFade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const experiences = [
  {
    role: "Software Engineer Cohort",
    company: "Snorkel AI",
    location: "Redwood City, California (Remote)",
    duration: "May 2026 – Present",
    bullets: [
      "Selected 1 of 30 contributors for Snorkel AI cohort, placing in the top percentile out of 200+ candidates evaluated on code quality, bug identification, and communication clarity.",
    ],
    tags: ["Python", "Machine Learning", "Flask", "AI", "React", "Vite"],
  },
  {
    role: "Software Developer Intern",
    company: "Pyramid CDC",
    location: "Columbus, Ohio",
    duration: "May 2026 – Present",
    bullets: [
      "Architected a role-protected web dashboard for the Control-R IT Resource Center with separate admin and student interfaces, enforcing access-controlled views and interactive features for 50+ SMARTNet participants.",
      "Building an AI-powered application that tracks student progress throughout SMARTNet Summer Camp, automatically generating performance-based assessments and personalized academic reports delivered directly to parents."
    ],
    tags: ["JavaScript", "React", "Vite"],
  },
  {
    role: "Back End Developer Intern",
    company: "A Better Way, Inc",
    location: "Largo, Florida (Remote)",
    duration: "December 2025 – May 2026",
    bullets: [
      "Shipped a role-protected admin dashboard on a React/Vite SPA for a Pinellas County civic voter survey platform, enabling staff to manage and monitor a 22 question survey across the full respondent base.",
      "Built a client-side CSV/XLSX export integrating Firebase cloud services via REST, enabling stakeholders to self-serve live datasets and reducing reporting time by 40%.",
      "Collaborated in an agile workflow through functional QA and code reviews, cutting merge conflicts 33% via standardized CI/CD pipelines, branch protection, and pull request processes.",
    ],
    tags: ["JavaScript", "React", "Firebase", "Vite", "NoSQL", "SheetJS", "Git", "Agile Workflow"],
  },
  {
    role: "Teaching Assistant",
    company: "Olentangy Berlin High School",
    location: "Delaware, Ohio",
    duration: "Jan 2024 – May 2024",
    bullets: [
      "Achieved 90%+ pass rate on AP Computer Science exam by designing and delivering Java modules for 50+ students.",
      "Accelerated student mastery of coding concepts, providing mentoring in object-oriented programming and programming fundamentals.",
    ],
    tags: ["Java", "Mentoring"],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionFade}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#07080A] tracking-tight">
            Experience
          </h2>
          <p className="mt-3 text-[#717277] max-w-md mx-auto">
            Hands-on roles where I've shipped real software and grown as an engineer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[#E4E4E7] hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardFade}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-10 h-10 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center hidden sm:flex">
                  <Briefcase className="w-4 h-4 text-[#07080A]" />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-[#E4E4E7] bg-white p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-[#07080A] text-lg leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-[#717277] text-sm font-medium mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className="flex items-center gap-1.5 text-xs text-[#717277]">
                        <Calendar className="w-3.5 h-3.5 text-[#AEBAC9]" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#717277]">
                        <MapPin className="w-3.5 h-3.5 text-[#AEBAC9]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#AEBAC9] shrink-0" />
                        <span className="text-sm text-[#717277] leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F4F4F5] text-[#717277]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
