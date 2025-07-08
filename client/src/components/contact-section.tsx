import { Mail, Phone, Linkedin, Github, Award, Download } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-[hsl(217,19%,27%)]/20">
      <div className="container mx-auto max-w-4xl">
        <div className="fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="bg-[hsl(217,19%,27%)]/50 backdrop-blur rounded-2xl p-8 border border-[hsl(215,27%,33%)] text-center">
            <p className="text-xl text-[hsl(215,13%,65%)] mb-8">
              "I believe in building practical solutions backed by strong technical knowledge. Let's connect and create something impactful together."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href="mailto:dileepkumarsasanapuri@gmail.com"
                className="flex items-center gap-3 text-[hsl(0,84%,60%)] hover:text-red-400 transition-colors"
              >
                <Mail size={20} />
                <span>dileepkumarsasanapuri@gmail.com</span>
              </a>
              <a
                href="tel:+917601063139"
                className="flex items-center gap-3 text-[hsl(0,84%,60%)] hover:text-red-400 transition-colors"
              >
                <Phone size={20} />
                <span>+91 7601063139</span>
              </a>
            </div>
            
            <div className="flex gap-6 justify-center mb-8">
              <a
                href="https://linkedin.com/in/dileep-kumar-65933825b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(0,84%,60%)] hover:text-red-400 transition-colors text-2xl"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/dileepkumarsasanapuri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(0,84%,60%)] hover:text-red-400 transition-colors text-2xl"
              >
                <Github />
              </a>
              <a
                href="https://credly.com/users/dileepkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(0,84%,60%)] hover:text-red-400 transition-colors text-2xl"
              >
                <Award />
              </a>
            </div>
            
            <div className="pt-6 border-t border-[hsl(215,27%,33%)]">
              <a
                href="/resume.pdf"
                download="Dileep_Kumar_Sasanapuri_Resume.pdf"
                className="inline-flex items-center px-8 py-3 bg-[hsl(0,84%,60%)] text-white hover:bg-red-600 transition-colors rounded-lg"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
