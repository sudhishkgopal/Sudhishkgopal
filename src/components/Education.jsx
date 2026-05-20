import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";

const sectionFade = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Education() {
  return (
    <motion.section
      id="education"
      className="py-20 px-6 bg-[#FAFAFB]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionFade}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#07080A] tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-[#717277] max-w-md mx-auto">
            Academic background and certifications that solidify my technical background.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* OSU */}
          <div className="rounded-2xl border border-[#E4E4E7] bg-white p-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-[#07080A]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#07080A] text-lg">
                  The Ohio State University
                </h3>
                <p className="text-sm text-[#717277]">
                  B.S. Computer Science &amp; Mathematics &middot; Expected May 2027
                </p>
                <span className="inline-block mt-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#07080A] text-white">
                  Honors College of Engineering
                </span>
              </div>
            </div>

            <div className="mb-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#AEBAC9] mb-2">
                Specialized Focus - Data Analytics,  Networking
              </p>
              <p className="text-sm text-[#717277] leading-relaxed">
                Pursuing the intersection of large-scale data processing and network architecture. 
                My work emphasizes Graph Theory applications to visualize and optimaize network topologys,
                enhancing data flow and system performance.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#AEBAC9] mb-3">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures",
                  "Algorithms",
                  "Machine Learning",
                  "Databases",
                  "Software Engineering",
                  "Linear Algebra",
                  "Operating Systems",
                  "Calculus"
                ].map((course) => (
                  <span
                    key={course}
                    className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-[#E4E4E7] bg-[#F4F4F5] text-[#717277]"
                  >
                    <BookOpen className="w-3 h-3 text-[#AEBAC9]" />
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* AWS Certification */}
          <div className="rounded-2xl border border-[#E4E4E7] bg-white p-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-[#07080A] text-lg">
                  AWS Cloud Practitioner
                </h3>
                <p className="text-sm text-[#717277]">
                  Amazon Web Services &middot; In Progress
                </p>
              </div>
            </div>

            <p className="text-sm text-[#717277] leading-relaxed mb-5">
              Building foundational expertise in cloud infrastructure to
              complement data engineering skills — from compute and storage
              patterns to production-grade deployment.
            </p>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#AEBAC9] mb-3">
                Key Domains
              </p>
              <ul className="space-y-2.5">
                {[
                  "Cloud infrastructure: EC2, S3, Lambda, RDS",
                  "Networking, security, and IAM best practices",
                  "Cost optimization and shared responsibility model",
                  "Architecting for high availability and fault tolerance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-[#717277]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
