import { portfolioData } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education & Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary rounded-full" />
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-accent mb-6">Education</h3>
            {portfolioData.education.map((edu, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <p className="text-accent font-semibold">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground text-sm">{edu.duration}</p>
                    <p className="text-muted-foreground text-sm">{edu.location}</p>
                  </div>
                </div>

                <p className="text-accent font-semibold mb-3">
                  CGPA: <span className="text-foreground">{edu.cgpa}</span>
                </p>

                <div>
                  <p className="text-muted-foreground font-semibold mb-2">
                    Key Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1 bg-secondary/20 text-accent rounded-full text-xs font-medium border border-secondary/50"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {cert.name}
                    </h4>
                    <span className="text-muted-foreground text-xs">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-accent font-semibold text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
