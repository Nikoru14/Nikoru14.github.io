import { useState, useEffect } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "skills", "contact"];
      let currentSection = "";

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-[var(--color-background)] shadow">
      <div className="flex-shrink-0">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => scrollToSection("home")}>
          NIKORU.DEV
        </h1>
      </div>
      <ul className="flex space-x-4">
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
              className={`text-[var(--color-primary)] hover:text-gray-800 transition-all ${activeSection === section.id ? "font-bold border-b-2 border-[var(--color-primary)]" : ""
                }`}
            >
              {section.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
