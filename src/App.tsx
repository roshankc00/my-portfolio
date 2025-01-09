import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import AOS from "aos";
import "aos/dist/aos.css";
import Blogs from "./components/Blogs";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Significantly reduced for faster animations
      once: true,
      easing: "ease-out", // Changed to simple ease-out for snappier feel
      delay: 0, // Removed delay completely
      offset: 50, // Reduced offset further for earlier trigger
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
