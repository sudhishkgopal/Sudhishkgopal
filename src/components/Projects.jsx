import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { projects, allCategories } from "../data/projectsData";

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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <motion.section
      id="projects"
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
            Projects
          </h2>
          <p className="mt-3 text-[#717277] max-w-md mx-auto">
            Building robust, end-to-end systems at the intersection 
            of data engineering and intelligent design—focused on 
            delivering software that solves tangible challenges.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === cat
                  ? "bg-[#07080A] text-white"
                  : "bg-[#F4F4F5] text-[#717277] hover:bg-[#E4E4E7]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3-Column Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardFade}
              className="group"
            >
              <div className="rounded-2xl border border-[#E4E4E7] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Card Image / Placeholder */}
                <div className="h-48 bg-[#F4F4F5] overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-5xl font-bold text-[#AEBAC9]/50 select-none">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="font-bold text-[#07080A] text-lg mb-2">
                    {project.title}
                  </h3>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techStack.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F4F4F5] text-[#717277]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F4F4F5] text-[#AEBAC9]">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-[#717277] leading-relaxed mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/project/${project.id}`}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#07080A] hover:bg-[#1a1b1e] text-white text-xs font-medium transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Preview
                    </Link>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#E4E4E7] hover:border-[#07080A] text-[#07080A] text-xs font-medium transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Github repo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
