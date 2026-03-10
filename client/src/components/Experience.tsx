import { portfolioData } from "@/data/portfolioData";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Title - Centered */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-700 -translate-x-1/2" />

          <div className="space-y-16">
            {portfolioData.experience.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center">
                  {/* Left side */}
                  <div className="w-1/2 pr-12">
                    {isLeft && (
                      <div className="p-6 bg-slate-800/80 rounded-xl border border-slate-700 hover:border-cyan-400/60 transition-all duration-300 group">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-3">
                          <Briefcase size={14} />
                          <span className="uppercase tracking-wide">{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={13} />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={13} />
                            {exp.location}
                          </span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-400/40 rounded-full bg-cyan-400/5"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-background z-10 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

                  {/* Right side */}
                  <div className="w-1/2 pl-12">
                    {!isLeft && (
                      <div className="p-6 bg-slate-800/80 rounded-xl border border-slate-700 hover:border-cyan-400/60 transition-all duration-300 group">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-3">
                          <Briefcase size={14} />
                          <span className="uppercase tracking-wide">{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={13} />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={13} />
                            {exp.location}
                          </span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-400/40 rounded-full bg-cyan-400/5"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}