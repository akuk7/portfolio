import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Mechanical Engineering",
      institution: "Indian Institute of Technology Madras",
      duration: "2021 - 2025 (Expected)",
      location: "Chennai, India",
      grade: "CGPA: 7.4",
      description: [
        "Pursuing B.Tech in Mechanical Engineering at one of India's premier technical institutions",
        "Active member of Saarang and Shaastra organizing committees",
        "Led multiple technical and cultural projects with teams of 10+ members",
        "Gained expertise in software development alongside core engineering subjects"
      ],
      icon: "🎓"
    },
    {
      degree: "Higher Secondary Education",
      institution: "PKMMHSS Edarikode",
      duration: "2020",
      location: "Kerala, India",
      grade: "Percentage: 100%",
      description: [
        "Achieved perfect score of 100% in Higher Secondary Education",
        "Strong foundation in Mathematics and Science subjects",
        "Developed analytical and problem-solving skills",
        "Prepared for competitive engineering entrance examinations"
      ],
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My academic journey and educational background
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{edu.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {edu.degree}
                        </h3>
                        <h4 className="text-xl font-semibold text-blue-600">
                          {edu.institution}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-slate-600 lg:text-right">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span className="font-medium">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span className="font-medium">{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="text-green-600" size={20} />
                    <span className="text-lg font-semibold text-green-600">{edu.grade}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {edu.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Coursework Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Coursework & Certificates
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Meta Front-End Developer Professional Certificate",
              "Machine Learning Specialization (Stanford University)",
              "Programming & DSA using Python",
              "Machine Learning Techniques",
              "Database Management Systems"
            ].map((course, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-blue-600" size={24} />
                  <span className="font-medium text-slate-700">{course}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;