import { Mail, Linkedin, Github } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="bg-[hsl(217,19%,27%)]/50 backdrop-blur rounded-2xl p-8 border border-[hsl(215,27%,33%)]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800"
                  alt="Dileep Kumar Sasanapuri"
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div>
                <p className="text-lg text-[hsl(215,13%,65%)] mb-6">
                  I am a Computer Science undergraduate at VIT-AP University (CGPA: 9.45) with a strong foundation in full-stack web development and AI/ML. My passion lies in building impactful projects, from brain tumor detection models to learning management systems.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-[hsl(0,84%,60%)]/20 text-[hsl(0,84%,60%)] rounded-full text-sm">
                    Full Stack Developer
                  </span>
                  <span className="px-3 py-1 bg-[hsl(0,84%,60%)]/20 text-[hsl(0,84%,60%)] rounded-full text-sm">
                    AI/ML Enthusiast
                  </span>
                  <span className="px-3 py-1 bg-[hsl(0,84%,60%)]/20 text-[hsl(0,84%,60%)] rounded-full text-sm">
                    Problem Solver
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="mailto:dileepkumarsasanapuri@gmail.com"
                    className="text-[hsl(0,84%,60%)] hover:text-red-400 transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/dileep-kumar-65933825b"
                    className="text-[hsl(0,84%,60%)] hover:text-red-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/dileepkumarsasanapuri"
                    className="text-[hsl(0,84%,60%)] hover:text-red-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
