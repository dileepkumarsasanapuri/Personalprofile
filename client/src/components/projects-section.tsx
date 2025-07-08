import { Brain, Shield, GraduationCap, Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Brain Tumor Classification & Detection",
      description: "Built a brain tumor detection system achieving 86.42% classification accuracy with VGG16 and 95.9% detection mAP@0.5 with YOLOv8.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      technologies: ["VGG16", "YOLOv8", "Python"],
      icon: Brain,
      github: "https://github.com/dileepkumarsasanapuri/BrainTumor_Classification_Detection_VGG16_Yolo",
      demo: "https://github.com/dileepkumarsasanapuri/Yolo_model"
    },
    {
      title: "Face Detection Using ML",
      description: "Developed a real-time face recognition system with webcam integration, enabling live video streaming and face addition capabilities.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      technologies: ["OpenCV", "Flask", "Python"],
      icon: Shield,
      github: "https://github.com/dileepkumarsasanapuri/facedetection"
    },
    {
      title: "Learning Management System",
      description: "Implemented secure user authentication with OTP and email verification, featuring course browsing, enrollment, and management capabilities.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      icon: GraduationCap,
      github: "https://github.com/dileepkumarsasanapuri/eduvibe_frontend",
      backend: "https://github.com/dileepkumarsasanapuri/eduvibe_server"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[hsl(217,19%,27%)]/20">
      <div className="container mx-auto max-w-6xl">
        <div className="fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card rounded-2xl p-6 hover-scale">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <div className="flex items-center gap-2 mb-2">
                  <project.icon className="text-[hsl(0,84%,60%)]" size={20} />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-[hsl(215,13%,65%)] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[hsl(0,84%,60%)]/20 text-[hsl(0,84%,60%)] rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(0,84%,60%)] hover:text-red-400 transition-colors flex items-center gap-1"
                  >
                    <Github size={16} />
                    {project.backend ? "Frontend" : "Repository"}
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[hsl(0,84%,60%)] hover:text-red-400 transition-colors flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[hsl(0,84%,60%)] hover:text-red-400 transition-colors flex items-center gap-1"
                    >
                      <Github size={16} />
                      Backend
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
