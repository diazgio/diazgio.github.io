import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="scrollbar-thin">
      <Navbar />
      <Home />
      <About />
      <Timeline />
      <Skills />
      <Work />
      <Testimonials />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-text-secondary border-t border-white/10">
        <p className="text-sm">
          © {new Date().getFullYear()} Giordano Díaz. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-text-secondary/60">
          Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;
