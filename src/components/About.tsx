
import { User, Code, Settings } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Full Stack Developer</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                As a passionate full-stack developer based in Nairobi, Kenya, I specialize in creating 
                innovative digital solutions that bridge the gap between user needs and technological 
                possibilities. My journey in computer science has equipped me with both theoretical 
                knowledge and practical skills to tackle complex development challenges.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, efficient code and creating user experiences that not only 
                look beautiful but also solve real-world problems. Every project is an opportunity to 
                learn, grow, and contribute to the ever-evolving world of technology.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/30">
              <h4 className="text-xl font-semibold text-teal-400 mb-3">My Approach</h4>
              <p className="text-gray-300 leading-relaxed">
                I focus on understanding business requirements, implementing scalable solutions, 
                and delivering projects that exceed expectations. From database design to 
                user interface implementation, I ensure every aspect is crafted with precision.
              </p>
            </div>
          </div>

          {/* Right Content - Stats/Highlights */}
          <div className="space-y-6 animate-fade-in delay-300">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-teal-500/20 rounded-lg group-hover:bg-teal-500/30 transition-colors">
                    <User className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Full-Stack Expertise</h4>
                    <p className="text-gray-400">Frontend & Backend Development</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                    <Code className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Modern Technologies</h4>
                    <p className="text-gray-400">Latest frameworks & tools</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-teal-500/20 rounded-lg group-hover:bg-teal-500/30 transition-colors">
                    <Settings className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Problem Solver</h4>
                    <p className="text-gray-400">Analytical & Creative Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Highlight */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
              <h4 className="text-xl font-bold text-white mb-2">Education</h4>
              <p className="text-teal-400 font-semibold mb-1">Bachelor of Science in Computer Science - 2025 </p>
              <p className="text-gray-400">Chuka University, Kenya</p>
<p className="text-teal-400 font-semibold mb-1">Attained A KCSE Certificate - 2019</p>
              <p className="text-gray-400">Butula Boys High School</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
