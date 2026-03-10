import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-accent">Luqman</span>
          <span className="text-foreground">.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium text-sm"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <button
          onClick={() => handleNavClick("#contact")}
          className="hidden md:flex items-center px-6 py-2 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-medium rounded-full"
        >
          Get In Touch
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="w-full px-6 py-2 border-2 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-medium rounded-full"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
