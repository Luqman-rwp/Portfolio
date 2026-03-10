import { Mail, Phone, Linkedin, MapPin, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = `mailto:${portfolioData.personal.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${portfolioData.personal.phone}`;
  };

  const handleLinkedInClick = () => {
    window.open(portfolioData.personal.linkedin, "_blank");
  };

  const handleDownloadCV = () => {
    // This would typically link to your CV file
    alert("CV download link would be configured here");
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              I'm currently looking for new opportunities and collaborations.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <div className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    {portfolioData.personal.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleEmailClick}
                className="w-full px-4 py-2 bg-accent/20 text-accent hover:bg-accent hover:text-background transition-all duration-300 font-medium rounded-lg border border-accent/50 hover:border-accent"
              >
                Send Email
              </button>
            </div>

            {/* Phone */}
            <div className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Phone</h3>
                  <p className="text-muted-foreground text-sm">
                    {portfolioData.personal.phone}
                  </p>
                </div>
              </div>
              <button
                onClick={handlePhoneClick}
                className="w-full px-4 py-2 bg-accent/20 text-accent hover:bg-accent hover:text-background transition-all duration-300 font-medium rounded-lg border border-accent/50 hover:border-accent"
              >
                Call Now
              </button>
            </div>

            {/* LinkedIn */}
            <div className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                  <Linkedin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">LinkedIn</h3>
                  <p className="text-muted-foreground text-sm">Connect with me</p>
                </div>
              </div>
              <button
                onClick={handleLinkedInClick}
                className="w-full px-4 py-2 bg-accent/20 text-accent hover:bg-accent hover:text-background transition-all duration-300 font-medium rounded-lg border border-accent/50 hover:border-accent"
              >
                Visit Profile
              </button>
            </div>

            {/* Location */}
            <div className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Location</h3>
                  <p className="text-muted-foreground text-sm">
                    {portfolioData.personal.location}
                  </p>
                </div>
              </div>
              <div className="w-full px-4 py-2 bg-accent/10 text-accent rounded-lg border border-accent/30 text-center font-medium">
                Based Here
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="flex justify-center">
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-secondary text-background hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 font-bold rounded-lg text-lg"
            >
              <Download size={24} />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
