import { projects } from "../../data/portfolio";
import SectionTitle from "../ui/SectionTitle";
import useScrollReveal from "../../hooks/useScrollReveal";

const Projects = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className="relative py-28 overflow-hidden bg-bg-alt">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#E5D3B3]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle subtitle="My Recent Work" title="Projects" align="center" />

        {/* Projects Grid — 3 Columns */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-bg-light rounded-[2rem] overflow-hidden border border-border-main hover:border-primary-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(201,169,110,0.3)]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-bg-alt border-b border-border-main">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-8">
                <h3 className="text-2xl font-bold text-text-main mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-muted text-sm leading-relaxed mb-8 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 border border-border-main rounded-lg text-[10px] font-bold tracking-widest text-primary-600 uppercase bg-bg-alt"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
