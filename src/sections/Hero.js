const Hero = () => {
    return (
        <section className="hero-section relative flex-center h-screen overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-purple-600 to-pink-500 opacity-50"></div>
            {/* Hero content */}
            <div className="relative z-10 text-center space-y-6 px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
                    Hi, my name is Nikko.
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                    I'm a web developer passionate about crafting sleek, interactive digital experiences.
                </p>
                <a href="#portfolio" className="button inline-block mt-4">
                    See My Work
                </a>
            </div>
        </section>
    );
};

export default Hero;
