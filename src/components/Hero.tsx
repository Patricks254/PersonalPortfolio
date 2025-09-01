import { useState } from "react";
import {
  Upload,
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Code,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Patrick_Mugeni_CV.pdf"; // CV FOLDER
    link.download = "Patrick_Mugeni_CV.pdf";
    link.click();
  };

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "1+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const technologies = [
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Next.js",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-10 right-10 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-teal-300 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Profile Photo - Larger and more prominent */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 p-1.5 animate-scale-in shadow-2xl shadow-teal-500/20">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img
                      src="/profileImage.jpeg"
                      alt="Patrick Mugeni"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="absolute inset-0 rounded-full bg-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-white" />
                </div>

                {/* Status indicator */}
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-gray-800 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Name and Title with enhanced typography */}
            <div className="space-y-4 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Patrick
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Mugeni
                  </span>
                </h1>

                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Code className="w-6 h-6 text-teal-400" />
                  <span className="text-xl md:text-2xl text-gray-300 font-light">
                    Full-Stack Developer
                  </span>
                  <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                </div>
              </div>

              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                Turning ideas into innovative digital solutions with modern
                technologies and creative problem-solving approaches.
              </p>

              <div className="flex items-center justify-center lg:justify-start space-x-2 text-teal-400 font-medium">
                <MapPin className="w-4 h-4" />
                <span>
                  Nairobi, Kenya • Available for Remote, Hybrid and Onsite jobs
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in delay-300">
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-teal-400/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <Sparkles className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadCV}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-teal-400 text-teal-400 font-semibold rounded-full hover:bg-teal-400/10 hover:shadow-lg hover:shadow-teal-400/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in delay-500">
              <a
                href="mailto:mugenipatrick.1@gmail.com"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-teal-400 hover:bg-teal-400/10 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
              </a>
              <a
                href="https://github.com/Patricks254"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-teal-400 hover:bg-teal-400/10 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/patrick-mugeni-5b90a6328/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-teal-400 hover:bg-teal-400/10 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column - Compact Info */}
          <div className="space-y-6 animate-fade-in delay-700">
            {/* Compact Tech Stack */}
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700/30 p-6">
              <h3 className="text-lg font-medium text-gray-300 mb-4 text-center">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-teal-500/10 border border-teal-500/20 rounded-lg text-sm text-teal-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Status Badge */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">
                  Available for projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
