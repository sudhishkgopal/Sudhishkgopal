import { motion } from "framer-motion";

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <motion.section
      id="about"
      className="pt-32 pb-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionFade}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="w-72 h-80 sm:w-80 sm:h-[22rem] rounded-2xl bg-[#07080A] overflow-hidden relative">
              <img
                src="https://api.dicebear.com/9.x/initials/svg?seed=SKG&backgroundColor=07080A&textColor=fafafb&fontSize=40"
                alt="Sudhish K Gopal"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080A]/30 to-transparent" />
            </div>
          </div>

          {/* Bio */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#07080A] leading-tight">
              Hi, I&apos;m Sudhish
              <br />
              and I&apos;m an{" "}
              <span className="text-[#AEBAC9]">Innovator</span>
            </h1>

            <p className="mt-6 text-base text-[#717277] leading-relaxed max-w-md mx-auto">
              I’m a Computer Science and Engineering student at 
              The Ohio State University with a passion for building 
              efficient, impactful solutions to complex problems. 
              I enjoy exploring diverse technologies - from AI and 
              Graph Theory to Cloud and Web Development to create impactful software.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 rounded-full bg-[#07080A] hover:bg-[#1a1b1e] text-white text-sm font-medium transition-colors"
              >
                Contact me
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 rounded-full border border-[#07080A] hover:bg-[#07080A] hover:text-white text-[#07080A] text-sm font-medium transition-colors"
              >
                Check my work
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}