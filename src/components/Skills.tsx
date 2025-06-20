
import { Code, Settings, User } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "SCSS", level: 90 },
        { name: "JavaScript", level: 88 },
      ]
    },
    {
      title: "Backend & Data",
      icon: Settings,
      skills: [
        { name: "Python", level: 85 },
        { name: "SQL", level: 82 },
        { name: "SPSS", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks, with a focus on creating 
            scalable and efficient solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-teal-500/20 rounded-lg group-hover:bg-teal-500/30 transition-colors">
                  <category.icon className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-teal-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'MongoDB', 'Git', 
              'TypeScript', 'Tailwind CSS'
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-gray-300 hover:border-teal-400/50 hover:text-teal-400 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
