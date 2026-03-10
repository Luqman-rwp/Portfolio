import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-card/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-all duration-300 group hover:shadow-lg hover:shadow-accent/20"
              >
                {/* Status Badge */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      project.status === "In Progress"
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                        : "bg-green-500/20 text-green-400 border border-green-500/50"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project Info */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.duration}
                </p>

                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Role */}
                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-accent font-semibold text-sm">
                    Role: <span className="text-foreground">{project.role}</span>
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/20 text-accent rounded-full text-xs font-medium border border-secondary/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
