import { Code, Wrench, Layers } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "HTML/CSS", "SQL", "React.js"]
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: ["VS Code", "Eclipse", "Jupyter Notebook", "PyCharm", "IntelliJ"]
    },
    {
      title: "Frameworks & Technologies",
      icon: Layers,
      skills: ["MERN Stack", "GitHub", "Spring Boot", "MongoDB", "Express.js", "Node.js"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-[hsl(217,19%,27%)]/50 backdrop-blur rounded-2xl p-6 border border-[hsl(215,27%,33%)]"
              >
                <h3 className="text-xl font-semibold text-[hsl(0,84%,60%)] mb-4 flex items-center gap-2">
                  <category.icon size={20} />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge px-3 py-1 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
