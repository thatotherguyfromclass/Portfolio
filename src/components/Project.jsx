import { motion } from "framer-motion";

// Project data
const projectsData = [
  {
    title: "Pulse – Micro CRM Web App",
    description: "Dark-themed Micro CRM web app for businesses. Track customers, manage orders, and explore analytics.",
    image: "/pulse.png",
    liveUrl: "https://pulse-crm-v2.netlify.app/",
    tech: ["React", "Firebase", "Bootstrap"]
  },
  {
    title: "CTRL – Habit Tracker App",
    description: "Flutter mobile app for tracking habits, streaks, and personal goals. Helps users build consistency and stay motivated.",
    image: "/ctrl.jpeg", 
    liveUrl: "https://github.com/thatotherguyfromclass/CTRL", 
    tech: ["Flutter", "Dart", "Firebase"]
  },
  {
    title: "Daily Pulse – News Chatbot Prototype",
    description: "Static UI and backend prototype for a news site with AI-powered chatbot. Demonstrates full-stack skills and chatbot integration.",
    image: "/daily-pulse.png", 
    liveUrl: null,
    tech: ["React", "Node.js", "Express", "OpenAI API"]
  }
];

// Single Project Card
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden shadow-[0_0_28px_rgba(108,246,255,0.18)] bg-gradient-to-b from-[#0f1626]/70 to-[#0f1626]/40 border border-white/5 hover:shadow-[0_0_40px_rgba(108,246,255,0.25)] transition-transform transform hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        {project.liveUrl && (
          <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-[#6cf6ff] text-[#041018] font-semibold hover:scale-105 transition"
            >
              View
            </a>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#e6ecff] mb-2">
          {project.title}
        </h3>
        <p className="text-[#9fb0d6] text-sm mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs bg-[#6cf6ff]/10 text-[#6cf6ff] border border-[#6cf6ff]/20 hover:scale-105 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Projects Section
const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0b0f1a]">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6cf6ff]">
          Selected Work
        </h2>
        <p className="mt-4 text-[#9fb0d6] max-w-2xl mx-auto">
          A mix of web and mobile projects demonstrating my skills in frontend development, Flutter, and modern tooling.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;