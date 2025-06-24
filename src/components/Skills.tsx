import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "Java", level: 80 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", level: 92 },
        { name: "Node.js", level: 88 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "PostgreSQL", level: 80 }
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 88 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 88 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 78 },
        { name: "GraphQL", level: 82 },
        { name: "Django", level: 80 }
      ]
    }
  ];

  const getColorClass = (level: number) => {
    if (level >= 90) return "from-green-500 to-emerald-500";
    if (level >= 80) return "from-blue-500 to-cyan-500";
    if (level >= 70) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Technologies and tools I use to build innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${getColorClass(skill.level)} transition-all duration-500 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional stats */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-slate-600 font-medium">Years of Coding</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-slate-600 font-medium">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-slate-600 font-medium">Technologies Mastered</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-yellow-200">
              <div className="text-3xl font-bold text-yellow-600 mb-2">15K+</div>
              <div className="text-slate-600 font-medium">Users Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;