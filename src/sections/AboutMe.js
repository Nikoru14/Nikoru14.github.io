import React from 'react'

const AboutMe = () => {
    return (
        <section id="about" className="about-section py-16 bg-[var(--color-background)] text-[var(--color-text)]">
            <div className="container mx-auto text-center space-y-6 px-4">
                <h2 className="text-4xl font-extrabold text-[var(--color-primary)]">About Me</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    I am a results-driven Software Developer with expertise in web development. Skilled in Python, C#, JavaScript, Git, React, HTML/CSS, Bootstrap, Tailwind CSS 4,
                    and UI/UX tools like Figma, Canva, and Photoshop. Passionate about problem-solving and collaboration, I am committed to delivering high-quality software solutions.
                </p>
                <div className="flex justify-center gap-6 mt-6">
                    <a
                        href="/cv_bongat.pdf"
                        download="ANSB_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button"
                    >
                        Download CV
                    </a>
                    <a href="#contact" className="button bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
