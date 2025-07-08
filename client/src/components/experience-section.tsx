import { CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="bg-[hsl(217,19%,27%)]/50 backdrop-blur rounded-2xl p-8 border border-[hsl(215,27%,33%)]">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-[hsl(0,84%,60%)]">
                  Web Development Intern
                </h3>
                <p className="text-xl text-[hsl(215,13%,65%)]">CodSoft Virtual Internship</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-lg font-semibold text-[hsl(0,84%,60%)]">Jan 2024 – Feb 2024</p>
                <p className="text-[hsl(215,13%,65%)]">Andhra Pradesh</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[hsl(0,84%,60%)] mt-1 flex-shrink-0" size={20} />
                <p className="text-[hsl(215,13%,65%)]">
                  Developed a responsive landing page, calculator application, and personal portfolio using HTML, CSS, and JavaScript.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[hsl(0,84%,60%)] mt-1 flex-shrink-0" size={20} />
                <p className="text-[hsl(215,13%,65%)]">
                  Enhanced practical skills in front-end development and web design through hands-on project implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
