import { Mail, Linkedin, ChevronDown } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useState, useEffect } from "react";

const TITLES = [
  "Full Stack Developer",
  "Requirement Engineer",
  "MERN Stack Developer",
];

function useTypewriter(texts: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[titleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % texts.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, titleIdx, texts, speed, pause]);

  return displayed;
}

function useStreamName(name: string, speed = 60) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (displayed.length >= name.length) { setDone(true); return; }
    const t = setTimeout(() => setDisplayed(name.slice(0, displayed.length + 1)), speed);
    return () => clearTimeout(t);
  }, [displayed, name, speed, done]);

  return { displayed, done };
}

export default function Hero() {
  const typewriterText = useTypewriter(TITLES);
  const { displayed: streamedName, done: nameDone } = useStreamName(portfolioData.personal.name, 70);

  const handleEmailClick = () => {
    window.location.href = `mailto:${portfolioData.personal.email}`;
  };

  const handleLinkedInClick = () => {
    window.open(portfolioData.personal.linkedin, "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="w-full max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">

          {/* Left */}
          <div className="space-y-6 py-8">
            <div className="space-y-3">
              <p className="text-accent text-sm font-medium tracking-widest uppercase">
                Hi, my name is
              </p>

              {/* Streaming name */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight min-h-[5rem] flex items-center">
                {streamedName}
                {!nameDone && (
                  <span className="inline-block w-0.5 h-12 bg-white animate-pulse ml-1 rounded-sm" />
                )}
              </h1>

              {/* Typewriter title */}
              <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 min-h-[2.5rem] flex items-center gap-1">
                {typewriterText}
                <span className="inline-block w-0.5 h-7 bg-cyan-400 animate-pulse ml-0.5 rounded-sm" />
              </h2>
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {portfolioData.personal.bio}
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-medium rounded-lg text-base"
              >
                <Mail size={18} />
                Email Me
              </button>
              <button
                onClick={handleLinkedInClick}
                className="flex items-center gap-2 px-6 py-3 bg-accent text-background hover:bg-accent/90 transition-all duration-300 font-medium rounded-lg text-base"
              >
                <Linkedin size={18} />
                LinkedIn
              </button>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="relative flex justify-center items-center py-8">
            {/* Glow blob */}
            <div className="absolute w-[360px] h-[440px] rounded-2xl bg-gradient-to-br from-cyan-400/25 to-secondary/20 blur-2xl opacity-70" />
            {/* Offset decorative border */}
            <div className="absolute w-[320px] h-[420px] rounded-2xl border border-cyan-400/25 translate-x-4 translate-y-4" />
            {/* Image card */}
            <div className="relative w-[320px] h-[420px] rounded-2xl overflow-hidden border-2 border-cyan-400/70 shadow-[0_0_30px_rgba(34,211,238,0.25)] animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 z-10" />
              <img
                src="/LuqmanJabbar.jpg"
                alt="Luqman Jabbar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}