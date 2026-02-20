import { motion } from "framer-motion";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const contactItems = [
  {
    icon: <BiEnvelope size={28} />,
    text: "princeinioluwa04@gmail.com",
    link: "mailto:princeinioluwa04@gmail.com",
  },
  {
    icon: <BiMap size={28} />,
    text: "Lagos, Nigeria",
    link: null,
  },
  {
    icon: <FaGithub size={28} />,
    text: "GitHub",
    link: "https://github.com/thatotherguyfromclass",
  },
  {
    icon: <BiPhone size={28} />,
    text: "WhatsApp",
    link: "https://wa.me/2349154359078",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0b0f1a]">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6cf6ff]">
          Contact Me
        </h2>
        <p className="mt-4 text-[#9fb0d6]">
          Feel free to reach out via email, WhatsApp, or check out my GitHub.
        </p>
      </div>

      {/* Contact Cards */}
      <motion.div
        className="max-w-3xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {contactItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-b from-[#0f1626]/70 to-[#0f1626]/40 border border-white/5 shadow-[0_0_28px_rgba(108,246,255,0.18)] hover:shadow-[0_0_40px_rgba(108,246,255,0.25)] transition"
          >
            <div className="text-[#6cf6ff]">{item.icon}</div>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-[#e6ecff] font-semibold hover:text-[#6cf6ff] transition"
              >
                {item.text}
              </a>
            ) : (
              <span className="text-[#e6ecff] font-semibold">{item.text}</span>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
