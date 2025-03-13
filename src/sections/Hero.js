const Hero = () => {
    const scrollToPortfolio = () => {
        document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <section id="home" className="hero-section relative flex-center h-screen overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-purple-600 to-pink-500 opacity-50"></div>
            {/* Hero content */}
            <div className="relative z-10 text-center space-y-6 px-4">
                <h1 className="text-7sxl md:text-8xl font-extrabold drop-shadow-lg">
                    Hi, my name is Nikko.
                </h1>
                <p className="text-xl md:text-4xl max-w-4xl mx-auto">
                    I'm a web developer passionate about crafting sleek, interactive digital experiences.
                </p>
                <button onClick={scrollToPortfolio} className="button cursor-pointer">
                    See My Work
                </button>
            </div>
        </section>
    );
};

export default Hero;
