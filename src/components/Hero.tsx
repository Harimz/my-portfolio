import { Github, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-20 hidden lg:block" />

      <div className="section-container relative z-10 py-20">
        <div className="max-w-2xl">
          <p
            className="text-sm font-medium text-primary tracking-widest uppercase mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Full-Stack Software Engineer
          </p>
          <h1
            className="heading-display text-5xl md:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Harim
            <br />
            Zermeno
          </h1>
          <p
            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            I build production-style web apps with React/Next.js + Spring
            Boot/Node and PostgreSQL, focusing on clean architecture, type-safe
            APIs, auth, payments, and scalable UX patterns.
          </p>

          <div
            className="flex flex-wrap gap-3 mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-border text-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-secondary transition-colors"
            >
              Contact
            </a>
          </div>

          <div
            className="flex items-center gap-5 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://github.com/harimz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:harimzermeno@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <span className="text-sm text-muted-foreground">
              Burbank / Los Angeles, CA
            </span>
          </div>
        </div>
      </div>

      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
