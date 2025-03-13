import { motion } from "framer-motion";

const Hero = () => {
    const scrollToPortfolio = () => {
        document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="hero-section relative flex items-center justify-center h-screen overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-purple-600 to-pink-500 animate-gradient blur-[120px] opacity-40"></div>

            {/* Hero Content */}
            <div className="relative z-10 text-center space-y-6 px-4">
                {/* Name with Cool Effect */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-7xl md:text-8xl font-extrabold drop-shadow-lg text-white"
                >
                    Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-400">Nikko</span>.
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xl md:text-4xl max-w-4xl mx-auto text-white"
                >
                    I build sleek websites.
                </motion.p>

                {/* Call-to-Action Button */}
                <motion.button
                    onClick={scrollToPortfolio}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="px-6 py-3 text-lg font-semibold text-white bg-background rounded-lg shadow-lg hover:bg-primary cursor-pointer transition-all"
                >
                    See My Work
                </motion.button>

            </div>
        </section>
    );
};

export default Hero;