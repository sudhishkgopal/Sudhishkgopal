import { motion } from "framer-motion";
import { Trophy, Users, Calendar, ExternalLink } from "lucide-react";

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

const awards = [
  {
    title: "Dean's List × 4",
    event: "The Ohio State University",
    org: "College of Engineering",
    date: "2023 – Present",
    description:
      "Recognized on the Dean's List four times for maintaining academic excellence at OSU.",
  },
  {
    title: "1st Place — Best Use of External Data",
    event: "ASA DataFest 2026",
    org: "American Statistical Association · The Ohio State University",
    date: "April 2026",
    description:
      "Built CareLine, a geospatial transit accessibility dashboard analyzing 10M+ rows of hospital encounter records alongside public bus schedules, Census TIGER shapefiles, and OpenStreetMap routing data. Designed a custom Public Transit Score and proposed targeted shuttle zones to reduce missed appointments in underserved communities across Topeka, KS.",
    link: "https://github.com/sudhishkgopal/CareLine",
  },
];

const leadership = [
  {
    title: "Executive Board Member",
    org: "Science Olympiad at The Ohio State University",
    date: "Present",
    description:
      "Serving on the executive board of OSU's competitive Science Olympiad organization, supporting event coordination, member development, and preparation for invitational and collegiate tournaments across Engineering, Math, and Science divisions.",
  },
];

export default function AwardsLeadership() {
  return (
    <motion.section
      id="awards"
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
            Awards &amp; Leadership
          </h2>
          <p className="mt-3 text-[#717277] max-w-md mx-auto">
            Competitions won and organizations led outside the classroom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Awards */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#AEBAC9] mb-4">
              Honors &amp; Awards
            </p>
            <div className="space-y-4">
              {awards.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={cardFade}
                  className="rounded-2xl border border-amber-200 bg-amber-50 p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-amber-200 flex items-center justify-center shrink-0">
                      <Trophy className="w-5 h-5 text-amber-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#07080A] text-base leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-amber-700 font-medium mt-0.5">
                        {item.event}
                      </p>
                      <p className="text-xs text-[#717277] mt-0.5">{item.org}</p>
                    </div>
                  </div>

                  <p className="text-sm text-[#717277] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-[#717277]">
                      <Calendar className="w-3.5 h-3.5 text-[#AEBAC9]" />
                      {item.date}
                    </span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-amber-600 hover:text-amber-800 font-medium transition-colors"
                      >
                        View project
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#AEBAC9] mb-4">
              Leadership
            </p>
            <div className="space-y-4">
              {leadership.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={cardFade}
                  className="rounded-2xl border border-[#E4E4E7] bg-white p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-[#07080A]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#07080A] text-base leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#717277] font-medium mt-0.5">
                        {item.org}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#717277] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <span className="flex items-center gap-1.5 text-xs text-[#717277]">
                    <Calendar className="w-3.5 h-3.5 text-[#AEBAC9]" />
                    {item.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
