import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Briefcase, Code2, Award } from "lucide-react";

const statIcons = [GraduationCap, Briefcase, Code2, Award];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="w-full max-w-6xl mx-auto px-8">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto" />
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left - Text */}
          <div className="space-y-8">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              {portfolioData.about.description}
            </p>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5">Quick Facts:</h3>
              <ul className="space-y-4">
                {portfolioData.about.quickFacts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1 text-base shrink-0">▸</span>
                    <span className="text-slate-300 text-base md:text-lg leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Stats 2x2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {portfolioData.stats.map((stat, index) => {
              const Icon = statIcons[index % statIcons.length];
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-8 bg-slate-800/60 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <Icon size={26} className="text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm font-medium tracking-wide uppercase">
                    {stat.label}
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