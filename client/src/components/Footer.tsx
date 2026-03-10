import { Mail, Phone, Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const handleEmailClick = () => {
    window.location.href = `mailto:${portfolioData.personal.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${portfolioData.personal.phone}`;
  };

  const handleLinkedInClick = () => {
    window.open(portfolioData.personal.linkedin, "_blank");
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <button
              onClick={handleEmailClick}
              className="w-12 h-12 bg-secondary/20 hover:bg-accent hover:text-background rounded-lg flex items-center justify-center transition-all duration-300 border border-secondary/50 hover:border-accent group"
              title="Email"
            >
              <Mail size={20} className="text-accent group-hover:text-background" />
            </button>
            <button
              onClick={handlePhoneClick}
              className="w-12 h-12 bg-secondary/20 hover:bg-accent hover:text-background rounded-lg flex items-center justify-center transition-all duration-300 border border-secondary/50 hover:border-accent group"
              title="Phone"
            >
              <Phone size={20} className="text-accent group-hover:text-background" />
            </button>
            <button
              onClick={handleLinkedInClick}
              className="w-12 h-12 bg-secondary/20 hover:bg-accent hover:text-background rounded-lg flex items-center justify-center transition-all duration-300 border border-secondary/50 hover:border-accent group"
              title="LinkedIn"
            >
              <Linkedin size={20} className="text-accent group-hover:text-background" />
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Luqman Jabbar. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
