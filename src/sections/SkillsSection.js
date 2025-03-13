import { FaCode, FaCogs, FaDatabase, FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiGit, SiTailwindcss, SiFirebase, SiSupabase, SiTensorflow, SiAdobeillustrator, SiFigma, SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";
import { motion } from "framer-motion";

const techs = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-400" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-600" /> },
    { name: "Premiere Pro", icon: <SiAdobepremierepro className="text-violet-600" /> },
];
const skills = [
    {
        title: "Frontend Development",
        description: "Building beautiful and responsive web applications using modern frameworks.",
        icon: <FaCode className="text-4xl text-blue-400" />
    },
    {
        title: "Backend Development",
        description: "Creating APIs and server-side logic with Node.js, Python, and databases.",
        icon: <FaDatabase className="text-4xl text-green-500" />
    },
    {
        title: "Version Control",
        description: "Managing code efficiently with Git and GitHub for smooth collaboration.",
        icon: <SiGit className="text-4xl text-red-500" />
    },
    {
        title: "UI/UX Design",
        description: "Crafting user-friendly and visually appealing designs using Figma and Photoshop.",
        icon: <SiFigma className="text-4xl text-pink-500" />
    },
    {
        title: "Machine Learning",
        description: "Developing AI models and data-driven solutions with TensorFlow and Python.",
        icon: <SiTensorflow className="text-4xl text-orange-500" />
    },
    {
        title: "Automation & DevOps",
        description: "Automating processes and deploying applications efficiently.",
        icon: <FaCogs className="text-4xl text-yellow-400" />
    }
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-16 bg-[var(--color-background)] text-[var(--color-text)]">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-[var(--color-primary)] mb-8">My Skills</h2>

                {/* Tech Icons Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-center">
                    {techs.map((tech, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2, rotate: 5, textShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
                            whileTap={{ scale: 0.9 }}
                            className="flex flex-col items-center space-y-2 cursor-pointer transition-all"
                        >
                            <div className="text-5xl hover-glow transition-all duration-300">{tech.icon}</div>
                            <p className="text-lg font-semibold">{tech.name}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Skills Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            viewport={{ amount: 0.2 }}
                            className="card p-6 text-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-card)] 
                       border border-[var(--color-border)] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex justify-center mb-4">{skill.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                            <p className="text-gray-300">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SkillsSection;
