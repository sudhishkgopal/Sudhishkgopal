import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "sudhish.gk1@gmail.com",
    href: "mailto:sudhish.gk1@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "sudhishkgopal",
    href: "https://github.com/sudhishkgopal",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sudhishkgopal",
    href: "https://linkedin.com/in/sudhishk-gopal",
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionFade}
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl bg-[#07080A] text-white px-8 py-16 sm:px-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Let&apos;s Connect
            </h2>
            <p className="mt-3 text-[#AEBAC9] max-w-md mx-auto">
              Interested in data engineering, AI, or graph-based projects?
              I&apos;d love to hear from you.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-[#07080A] text-white text-sm font-medium transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
