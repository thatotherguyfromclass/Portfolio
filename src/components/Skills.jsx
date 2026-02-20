import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Frameworks",
    skills: ["React", "Flutter"],
  },
  {
    category: "Core Web & Styling",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SASS/SCSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "UI, Motion & UX",
    skills: ["Framer Motion", "Responsive Design", "Micro-interactions", "Accessibility (a11y)", "Performance Optimization"],
  },
  {
    category: "Tooling & Workflow",
    skills: ["Git & GitHub", "Vite", "NPM/Yarn", "Firebase", "REST & GraphQL APIs", "Testing: Jest & React Testing Library"],
  }
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24 bg-[#0b0f1a]">
      {/* Title */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6cf6ff]">
          Frontend Engineering Skills
        </h2>
        <p className="mt-4 text-[#9fb0d6] max-w-2xl mx-auto">
          Tools, frameworks, and technologies I use to build fast, interactive, and scalable web and mobile applications.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
            className="p-6 md:p-8 rounded-2xl bg-[#0f1626]/70 border border-white/5 hover:border-[#6cf6ff]/40 transition backdrop-blur-md shadow-[0_0_28px_rgba(108,246,255,0.18)] hover:shadow-[0_0_40px_rgba(108,246,255,0.25)]"
          >
            <h3 className="text-xl font-semibold text-[#e6ecff] mb-6">{group.category}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm bg-[#6cf6ff]/10 text-[#6cf6ff] border border-[#6cf6ff]/20 hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;