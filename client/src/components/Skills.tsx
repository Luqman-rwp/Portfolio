import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-card/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {portfolioData.skills.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.skills.categories.map((category, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-accent mb-4 group-hover:text-white transition-colors duration-300">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-secondary/20 text-accent rounded-full text-sm font-medium border border-secondary/50 hover:bg-accent hover:text-background hover:border-accent transition-all duration-300 cursor-default"
                    >
                      {skill}
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
