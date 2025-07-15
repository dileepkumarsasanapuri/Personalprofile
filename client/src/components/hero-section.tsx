import { ArrowDown, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hello, I'm <span className="text-[hsl(0,84%,60%)]">Dileep Kumar</span>.
        </h1>
        <p className="text-xl md:text-2xl text-[hsl(215,13%,65%)] mb-8">
          I'm a full stack web developer & AI/ML enthusiast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-3 border-2 border-[hsl(0,84%,60%)] text-[hsl(0,84%,60%)] hover:bg-[hsl(0,84%,60%)] hover:text-white transition-colors rounded-lg"
          >
            View my work <ArrowDown className="ml-2" size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-[hsl(0,84%,60%)] text-white hover:bg-red-600 transition-colors rounded-lg"
          >
            Get in touch <Mail className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
