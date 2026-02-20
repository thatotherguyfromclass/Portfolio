import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="fixed top-0 w-full bg-[#0f1626]/70 border-b border-white/5 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 md:py-6">

                {/* Logo */}
                <a href="#hero" className="text-[#6cf6ff] font-extrabold tracking-wider text-lg">PRINCE.</a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-md">
                    <a href="#about" className="text-[#e6ecff] font-semibold hover:text-[#6cf6ff] transition">About</a>
                    <a href="#skills" className="text-[#e6ecff] font-semibold hover:text-[#6cf6ff] transition">Skills</a>
                    <a href="#projects" className="text-[#e6ecff] font-semibold hover:text-[#6cf6ff] transition">Projects</a>
                    <a href="#contact" className="text-[#e6ecff] font-semibold hover:text-[#6cf6ff] transition">Contact</a>
                </div>

                {/* Hamburger */}
                <button className="md:hidden flex flex-col gap-1" onClick={() => setIsOpen(!isOpen)}>
                    <span className="w-6 h-1 bg-[#6cf6ff] rounded"></span>
                    <span className="w-6 h-1 bg-[#6cf6ff] rounded"></span>
                    <span className="w-6 h-1 bg-[#6cf6ff] rounded"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity:0, y: -10 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{ duration:0.3 }}
                    className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-[#0f1626]/95"
                >
                    <a href="#about" onClick={() => setIsOpen(false)} className="text-[#e6ecff] font-semibold hover:text-[#6cf6ff] transition pt-2">About</a>
                    <a href="#skills" onClick={() => setIsOpen(false)} className="text-[#e6ecff] font-semibold hover:text-[#6cf6ff] transition">Skills</a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="text-[#e6ecff] font-semibold hover:text-[#6cf6ff] transition">Projects</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="text-[#e6ecff] font-semibold hover:text-[#6cf6ff] transition">Contact</a>
                </motion.div>
            )}
        </nav>
    );
}

export default Navbar;