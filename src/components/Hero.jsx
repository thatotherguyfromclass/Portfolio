import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 bg-[#0b0f1a]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full text-center p-10 rounded-3xl bg-gradient-to-b from-[#0f1626]/60 to-[#0f1626]/30 shadow-[0_0_28px_rgba(108,246,255,0.18)] backdrop-blur-md"
      >
        <span className="inline-flex items-center gap-2 bg-[#6cf6ff]/10 border border-[#6cf6ff]/30 text-[#6cf6ff] px-4 py-2 rounded-full text-sm font-semibold">
          ✨ Available for Frontend & Mobile roles
        </span>

        <h1 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight text-[#e6ecff]">
          Building sleek, interactive web and mobile experiences
        </h1>

        <p className="mt-6 text-[#9fb0d6] max-w-2xl mx-auto text-base md:text-lg">
          Frontend Engineer skilled in React, Flutter, and modern web technologies.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-[#6cf6ff] text-[#041018] font-semibold px-6 py-3 rounded-full shadow-[0_0_28px_rgba(108,246,255,0.18)] hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/Prince-Odunlami-CV.pdf"
            download
            className="border border-white/10 text-[#e6ecff] font-semibold px-6 py-3 rounded-full hover:border-[#6cf6ff] hover:text-[#6cf6ff] transition"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;