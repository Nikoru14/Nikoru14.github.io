import NavBar from './components/NavBar.js'
import FadeInSection from './components/FadeInSection.js';

import './App.css'

import Hero from './sections/Hero.js';
import AboutMe from './sections/AboutMe.js'
import Portfolio from './sections/Portfolio.js';
import SkillsSection from './sections/SkillsSection.js';
import ContactSection from './sections/ContactSection.js';
import { ToastContainer } from "react-toastify";

const App = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <>
      <NavBar />

      {/* Sections */}
      <FadeInSection id="home">
        <Hero />
      </FadeInSection>
      <FadeInSection id="about">
        <AboutMe />
      </FadeInSection>
      <FadeInSection id="portfolio">
        <Portfolio />
      </FadeInSection>
      <FadeInSection id="skills">
        <SkillsSection />
      </FadeInSection>
      <FadeInSection id="contact">
        <ToastContainer position="top-center" autoClose={5000} />
        <ContactSection />
      </FadeInSection>

      {/* Footer */}
      <footer className="footer-section py-8 bg-[var(--color-background)] text-[var(--color-text)] text-center">
        <p>
          &copy; {new Date().getFullYear()} Nikko Bongat. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
        </div>
      </footer>
    </>
  )
}

export default App
