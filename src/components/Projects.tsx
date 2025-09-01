import { Code, ExternalLink, Bot, Wrench } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "KEM Metal Engineering Website",
      description:
        "Professional business website for a metal fabrication company in Kenya. Features service showcases, client testimonials, and integrated quote request system with responsive design.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
      icon: Wrench,
      gradient: "from-orange-500 to-red-500",
      liveDemo: "https://kem-engineering-website.vercel.app",
      github: "#", // Replace with actual GitHub link
    },
    {
      title: "AI Campus Compass Bot",
      description:
        "Intelligent campus navigation system using facial recognition and voice interaction. Helps students and visitors navigate university campuses with personalized assistance and real-time directions.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      icon: Bot,
      gradient: "from-blue-500 to-purple-500",
      liveDemo: "https://ai-social-robot-for-university-yg4t.vercel.app",
      github: "#", // Replace with actual GitHub link
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Professional projects showcasing full-stack development and modern
            web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-teal-400/50 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Icon */}
              <div
                className={`inline-flex p-4 bg-gradient-to-r ${project.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <project.icon className="w-8 h-8 text-white" />
              </div>

              {/* Project Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600 group-hover:border-teal-400/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex space-x-3">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-400/25 transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-teal-400 hover:text-teal-400 transition-all duration-300 flex items-center justify-center"
                  title="View Code"
                >
                  <Code className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Interested in working together?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-full hover:border-teal-400 hover:bg-teal-400/10 transition-all duration-300"
          >
            Let's Collaborate
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
