import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";

function App() {

  return (
    <>
      <Navbar />
      <div className="pt-4 md:pt-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
