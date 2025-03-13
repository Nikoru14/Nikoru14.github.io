import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "../components/ProjectCard";

const Portfolio = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const projects = [
        {
            title: "ARBOREATRIX",
            description: "A pioneering GIS project in collaboration with LSPU-Siniloan Campus, integrating QR technology to map indigenous fruit and forest trees. Each tree is tagged with a unique QR code, providing instant access to species details, status, and conservation insights. This initiative promotes awareness and community engagement in preserving our natural heritage.",
            techStack: ["React", "Supabase", "Mapbox"],
            image: "/arboreatrix.png",
            liveDemo: "https://arboreatrix.com",
            repo: "https://github.com/Nikoru14",
        },
        {
            title: "Task Manager",
            description: "A simple task management app with user authentication.",
            techStack: ["React", "Firebase", "Tailwind CSS"],
            image: "/task-manager.jpg",
            liveDemo: "https://your-taskmanager.com",
            repo: "https://github.com/yourusername/task-manager",
        },
        {
            title: "Task Manager",
            description: "A simple task management app with user authentication.",
            techStack: ["React", "Firebase", "Tailwind CSS"],
            image: "/task-manager.jpg",
            liveDemo: "https://your-taskmanager.com",
            repo: "https://github.com/yourusername/task-manager",
        },
        {
            title: "Task Manager",
            description: "A simple task management app with user authentication.",
            techStack: ["React", "Firebase", "Tailwind CSS"],
            image: "/task-manager.jpg",
            liveDemo: "https://your-taskmanager.com",
            repo: "https://github.com/yourusername/task-manager",
        },

        {
            title: "Portfolio Website",
            description: "A modern portfolio built with React and Tailwind CSS.",
            techStack: ["React", "Tailwind CSS", "Vite"],
            image: "/portfolio.jpg",
            liveDemo: "https://your-portfolio.com",
            repo: "https://github.com/yourusername/portfolio",
        },

    ];

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
            swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
            swiperRef.current.swiper.navigation.init();
            swiperRef.current.swiper.navigation.update();
        }
    }, []);

    return (
        <section id="portfolio" className="py-16 relative">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-[var(--color-primary)] mb-8">My Projects</h2>

                <div className="relative">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true, el: ".custom-pagination" }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                        }}
                        className="w-full max-w-6xl mx-auto" // Make swiper wider
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <ProjectCard {...project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button
                        ref={prevRef}
                        className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-[var(--color-primary)] text-white p-3 rounded-full shadow-lg hover:bg-[var(--color-bg)] transition-all z-10 cursor-pointer"
                    >
                        ❮
                    </button>
                    <button
                        ref={nextRef}
                        className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-[var(--color-primary)] text-white p-3 rounded-full shadow-lg hover:bg-[var(--color-bg)] transition-all z-10 cursor-pointer"
                    >
                        ❯
                    </button>
                    <div className="custom-pagination flex justify-center mt-6"></div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
