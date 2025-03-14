import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "skills", "contact"];
      let scrollPosition = window.scrollY + 150; // Adjust based on navbar height
      let currentSection = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (id === "contact" && window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
            currentSection = "contact";
          }

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on click (for mobile)
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-background)] shadow-md px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold cursor-pointer text-white" onClick={() => scrollToSection("home")}>
          NIKORU.DEV
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Skills", id: "skills" },
            { name: "Contact", id: "contact" },
          ].map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`text-white hover:text-[var(--color-primary)] transition-all px-3 py-1 ${activeSection === section.id ? "font-bold border-b-2 border-[var(--color-primary)]" : ""
                  }`}
              >
                {section.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-[var(--color-background)] transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-2 text-center py-4">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Skills", id: "skills" },
            { name: "Contact", id: "contact" },
          ].map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`text-white hover:text-[var(--color-primary)] transition-all px-3 py-2 block ${activeSection === section.id ? "font-bold border-b-2 border-[var(--color-primary)]" : ""
                  }`}
              >
                {section.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
