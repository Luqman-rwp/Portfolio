import { portfolioData } from "@/data/portfolioData";
import { Heart, Trophy, Users } from "lucide-react";

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-20 bg-background relative">
      <div className="w-full max-w-6xl mx-auto px-8">

        {/* Section Title - Centered */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Volunteering & <span className="text-cyan-400">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto" />
        </div>

        {/* Community Service */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-7">
            <Heart size={22} className="text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Community Service</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {portfolioData.volunteering.map((vol, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/60 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <Users size={15} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                      {vol.title}
                    </h4>
                    {vol.organization && (
                      <p className="text-cyan-400 text-sm font-medium mt-0.5">{vol.organization}</p>
                    )}
                  </div>
                </div>

                <div className="text-slate-400 text-sm mb-3 space-y-0.5">
                  {vol.date && <p>{vol.date}</p>}
                  {vol.location && <p>{vol.location}</p>}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {vol.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Honors & Awards */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <Trophy size={22} className="text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Honors & Awards</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {portfolioData.achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/60 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <Trophy size={15} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    {achievement.date && (
                      <p className="text-slate-400 text-sm mt-0.5">{achievement.date}</p>
                    )}
                  </div>
                </div>

                <div className="text-slate-400 text-sm mb-3">
                  {achievement.location && <p>{achievement.location}</p>}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}