
import { Code, Projector, Settings } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
      technologies: ["React", "Node.js", "MongoDB"],
      icon: Settings,
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      title: "Responsive Portfolio",
      description: "Modern, responsive portfolio website showcasing clean design principles and smooth animations. Optimized for all devices and screen sizes.",
      technologies: ["HTML5", "SCSS", "JavaScript", "Responsive Design"],
      icon: Code,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analytics using SPSS integration. Features real-time data processing and comprehensive reporting.",
      technologies: ["Python"],
      icon: Projector,
      gradient: "from-teal-500 to-green-500"
    }
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
            A showcase of my recent work, demonstrating expertise in full-stack development 
            and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-teal-400/50 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Icon */}
              <div className={`inline-flex p-4 bg-gradient-to-r ${project.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
              <div className="flex space-x-4">
                <button className="flex-1 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-400/25 transition-all duration-300">
                  View Project
                </button>
                <button className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-teal-400 hover:text-teal-400 transition-all duration-300">
                  <Code className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-full hover:border-teal-400 hover:bg-teal-400/10 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
