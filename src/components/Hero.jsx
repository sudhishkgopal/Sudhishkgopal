import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

const WORDS = ["Innovator", "Developer", "Builder", "Engineer", "Creator"];
const getArticle = (word) => (/^[aeiou]/i.test(word) ? "an" : "a");

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const [displayArticle, setDisplayArticle] = useState(getArticle(WORDS[0]));
  const currentArticleRef = useRef(getArticle(WORDS[0]));
  const lineControls = useAnimation();

  // Fires when the gooey morph begins, before the new word is visible.
  // Nudges the "and I'm {article}" line left or right to anticipate the
  // article change, then swaps the article text at the peak of the nudge.
  const handleMorphStart = useCallback((nextWord) => {
    const nextArticle = getArticle(nextWord);
    if (nextArticle === currentArticleRef.current) return;

    // "an"→"a" is shorter so nudge left; "a"→"an" is longer so nudge right
    const dir = nextArticle === "a" ? -1 : 1;
    currentArticleRef.current = nextArticle;

    // Keyframe: 0 → peak (35%) → back to 0 (100%), total matches morphTime
    lineControls.start({
      x: [0, dir * 12, 0],
      transition: { duration: 1, times: [0, 0.35, 1], ease: "easeInOut" },
    });

    // Swap article text at the peak so it lands while the line is mid-shift
    setTimeout(() => setDisplayArticle(nextArticle), 350);
  }, [lineControls]);

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
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080A]/30 to-transparent" />
            </div>
          </div>

          {/* Bio */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#07080A] leading-tight">
              Hi, I&apos;m Sudhish
              <br />
              {/* This span is what shifts — everything except the gooey word */}
              <motion.span
                className="inline-block"
                animate={lineControls}
              >
                and I&apos;m{" "}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={displayArticle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {displayArticle}
                  </motion.span>
                </AnimatePresence>
              </motion.span>{" "}
              <GooeyText
                texts={WORDS}
                morphTime={1}
                cooldownTime={2}
                className="text-[#AEBAC9]"
                textClassName="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#AEBAC9]"
                onMorphStart={handleMorphStart}
              />
            </h1>

            <p className="mt-6 text-base text-[#717277] leading-relaxed max-w-md mx-auto">
              I&apos;m a Software Developer Intern at Pyramid CDC and an
              Honors Computer Science &amp; Mathematics student at The Ohio
              State University with a passion for building efficient,
              impactful solutions to complex problems. I enjoy exploring
              diverse technologies — from AI and Graph Theory to Cloud
              and Web Development.
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
