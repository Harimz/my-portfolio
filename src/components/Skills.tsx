const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "Java", "Python", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js (App Router)", "Tailwind CSS", "Shadcn/ui", "TanStack Query"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Node.js", "tRPC", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Stripe", "JUnit"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/40">
      <div className="section-container">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">
          What I Work With
        </p>
        <h2 className="heading-display text-3xl md:text-4xl font-bold text-foreground mb-12">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-background text-foreground text-sm px-3 py-1.5 rounded-md border border-border font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
