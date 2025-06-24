import React from 'react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Full-Stack Development",
      description: "Experienced in React, Node.js, Python, and modern web technologies with a focus on scalable solutions."
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Team Leadership",
      description: "Led teams of 10+ developers in major projects, managing repositories and scaling applications."
    },
    {
      icon: <Lightbulb className="text-yellow-600" size={24} />,
      title: "Machine Learning",
      description: "Skilled in TensorFlow, PyTorch, and building predictive models for real-world applications."
    },
    {
      icon: <Target className="text-purple-600" size={24} />,
      title: "Problem Solving",
      description: "Strong analytical skills with experience in optimizing systems for 15,000+ users and ₹2M+ transactions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">
              Passionate Developer & Engineering Student
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a Mechanical Engineering student at IIT Madras with a strong passion for software development. 
              Currently pursuing my B.Tech with a CGPA of 7.4, I've gained extensive experience in full-stack 
              development, machine learning, and team leadership through various internships and projects.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              My journey spans from leading development teams for major cultural and technical festivals at IIT Madras 
              to working with startups and established companies. I specialize in React, Node.js, Python, and have 
              successfully managed projects handling millions in transactions and thousands of users.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                IIT Madras Student
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
                Team Leader
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">
                Full-Stack Developer
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;