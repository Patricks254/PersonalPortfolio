import { Code, Settings, User } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        {
          name: "HTML5",
          description: "Semantic markup and modern web standards",
        },
        {
          name: "CSS",
          description: "Responsive design and advanced styling",
        },
        {
          name: "JavaScript (ES6+)",
          description: "Modern JavaScript and DOM manipulation",
        },
        { name: "React", description: "Component-based UI development" },
        { name: "TypeScript", description: "Type-safe JavaScript development" },
      ],
    },
    {
      title: "Backend Development",
      icon: Settings,
      skills: [
        { name: "Node.js", description: "Server-side JavaScript runtime" },
        {
          name: "Python",
          description: "Backend development and data processing",
        },
        {
          name: "MongoDB",
          description: "NoSQL database design and management",
        },
        {
          name: "SQL",
          description: "Relational database design and optimization",
        },
        { name: "RESTful APIs", description: "API design and integration" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: User,
      skills: [
        {
          name: "Git/GitHub",
          description: "Version control and collaboration",
        },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        {
          name: "SPSS",
          description: "Statistical analysis and data visualization",
        },
        {
          name: "Responsive Design",
          description: "Mobile-first development approach",
        },
        {
          name: "Agile Methodologies",
          description: "Project management and team collaboration",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Comprehensive technical skills across the full development stack,
            with expertise in modern frameworks and industry best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-teal-500/20 rounded-lg">
                  <category.icon className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="border-b border-gray-700 pb-4 last:border-b-0"
                  >
                    <h4 className="text-gray-200 font-semibold mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Full-Stack Development",
                desc: "End-to-end web application development",
              },
              {
                title: "Database Design",
                desc: "Scalable data architecture and optimization",
              },
              {
                title: "API Development",
                desc: "RESTful services and third-party integrations",
              },
              {
                title: "Problem Solving",
                desc: "Analytical thinking and creative solutions",
              },
            ].map((competency, index) => (
              <div
                key={competency.title}
                className="text-center p-6 bg-gray-50 rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  {competency.title}
                </h4>
                <p className="text-gray-600 text-sm">{competency.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
