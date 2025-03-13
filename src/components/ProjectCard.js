const ProjectCard = ({ title, description, techStack, image, liveDemo, repo }) => {
    return (
        <div className="card flex flex-col items-center text-center p-6 space-y-4 w-full max-w-[350px] min-h-[450px] shadow-lg rounded-lg bg-[var(--color-card)]">
            {/* Project Image */}
            <img src={image} alt={title} className="w-full h-[200px] object-cover rounded-lg" />

            {/* Project Title */}
            <h3 className="text-2xl font-semibold text-[var(--color-primary)]">{title}</h3>

            {/* Project Description */}
            <p className="text-[var(--color-text)] px-4">{description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2">
                {techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-sm bg-[var(--color-card-light)] text-white rounded-md border border-[var(--color-border)]">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-auto">
                {liveDemo && (
                    <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="button">
                        Live Demo
                    </a>
                )}
                {repo && (
                    <a href={repo} target="_blank" rel="noopener noreferrer" className="button bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white">
                        GitHub Repo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;