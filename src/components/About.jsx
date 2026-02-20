import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="flex justify-center px-6 py-24 bg-[#0b0f1a]">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="max-w-4xl w-full text-center p-10 rounded-2xl bg-gradient-to-b from-[#0f1626]/70 to-[#0f1626]/40 shadow-[0_0_28px_rgba(108,246,255,0.18)] backdrop-blur-md"
            >
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#6cf6ff]">About Me</h2>

                {/* Subtitle */}
                <p className="mt-4 text-[#9fb0d6] text-lg">
                    Frontend Engineer focused on building high-quality web and mobile experiences.
                </p>

                {/* Main Paragraph */}
                <p className="mt-6 text-[#e6ecff] leading-relaxed max-w-2xl mx-auto">
                    I’m Prince, a developer passionate about clean, performant, and interactive interfaces.
                    <br /><br />
                    I specialize in <strong>React and Flutter</strong>, leveraging <strong>TypeScript</strong> and modern tooling to create scalable, maintainable applications. I love crafting smooth micro-interactions, responsive designs, and component architectures that grow with your project.
                    <br /><br />
                    My mission is to turn complex ideas into intuitive, delightful experiences for both web and mobile users.
                </p>
            </motion.div>
        </section>
    );
}

export default About;