import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-secondary/40">
      <div className="section-container">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">
          Background
        </p>
        <h2 className="heading-display text-3xl md:text-4xl font-bold text-foreground mb-12">
          Education
        </h2>

        <div className="bg-card border border-border rounded-lg p-6 md:p-8 max-w-2xl flex gap-5 items-start">
          <div className="bg-primary/10 text-primary p-3 rounded-lg shrink-0">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              B.S. in Computer Science
            </h3>
            <p className="text-muted-foreground text-sm mb-2">
              California State University, Long Beach — December 2025
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                Relevant coursework:
              </span>{" "}
              Data Structures & Algorithms, Database Design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
