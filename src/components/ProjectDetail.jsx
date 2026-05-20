import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { projects } from "../data/projectsData";

const pageFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const paragraphs = project.longDescription
    .split("\n\n")
    .filter((p) => p.trim());

  return (
    <motion.div
      className="min-h-screen pt-28 pb-20 px-6"
      initial="hidden"
      animate="visible"
      variants={pageFade}
    >
      <article className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          to="/"
          state={{ scrollTo: "projects" }}
          className="inline-flex items-center gap-2 text-sm text-[#717277] hover:text-[#07080A] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#07080A] tracking-tight">
          {project.title}
        </h1>

        <p className="mt-3 text-lg text-[#717277] leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#F4F4F5] text-[#717277]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hero image */}
        {project.image && (
          <div className="mt-10 rounded-2xl overflow-hidden border border-[#E4E4E7]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover max-h-[420px]"
            />
          </div>
        )}

        {/* Divider */}
        <hr className="my-10 border-[#E4E4E7]" />

        {/* Long description */}
        <div className="space-y-5">
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-base text-[#717277] leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-12 pt-8 border-t border-[#E4E4E7]">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#07080A] hover:bg-[#1a1b1e] text-white text-sm font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </article>
    </motion.div>
  );
}
