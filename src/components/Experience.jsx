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
    role: "Backend Development Intern",
    company: "A Better Way, Inc",
    location: "Tampa, FL",
    duration: "December 2025 – Present",
    bullets: [
      "Engineered a high-performance Single Page Application (SPA) with React, Vite, and React Router, abstracting the service layer to decouple UI components and prepare for a Python/Flask backend.",
      "Architected a real-time administrative dashboard powered by Firebase Firestore, securing sensitive polling data using strict NoSQL database rules and Role-Based Access Control (RBAC).",
      "Developed a client-side data serialization engine using JavaScript and SheetJS, enabling administrators to dynamically filter live NoSQL datasets and export them into zero-dependency CSV and XLSX reports.",
      "Spearheaded functional testing and weekly codebase audits for the production web platform, proactively diagnosing usability bottlenecks and optimizing overall system stability."
    ],
    tags: ["JavaScript", "React", "Firebase", "Vite", "NoSQL", "SheetJS", "Git"],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "Olentangy Berlin High School",
    location: "Delaware, OH",
    duration: "Jan 2024 – May 2024",
    bullets: [
      "Developed graph-based algorithms to model and analyze large-scale network datasets.",
      "Implemented and benchmarked ML models for classification tasks on structured data.",
      "Co-authored research findings presented at a departmental symposium.",
    ],
    tags: ["Java"],
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
