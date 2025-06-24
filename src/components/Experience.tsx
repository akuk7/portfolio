import React from 'react';
import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Saarang - Annual Cultural Fest of IITM",
      position: "Core Team Member",
      duration: "April 2024 – March 2025",
      location: "Chennai, India",
      type: "Leadership Role",
      description: [
        "Led a team of 10 developers to build, maintain, and scale the Saarang Sangam websites",
        "Managed repositories, PostgreSQL databases, and integrated Razorpay for seamless payments on AWS EC2 with Nginx",
        "Optimized sales portal to support 15,000+ users and ₹2 million in payments, improving reliability and user experience",
        "Coordinated with multiple teams to ensure smooth technical operations during the festival"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS EC2", "Nginx", "Razorpay"],
      achievements: ["15,000+ Users", "₹2M+ Payments", "Team of 10"]
    },
    {
      company: "Fifth Generation Technologies",
      position: "Software Intern",
      duration: "May 2024 – July 2024",
      location: "Chennai, India",
      type: "Internship",
      description: [
        "Developed and implemented version update processes for the BorgConnect project",
        "Wrote Python scripts for API calls, zip extraction, and shell script execution on the Django backend",
        "Worked on the Ionic Angular frontend to implement version update features",
        "Ensured seamless integration between frontend updates and backend processes"
      ],
      technologies: ["Python", "Django", "Ionic", "Angular", "API Integration"],
      achievements: ["Full-Stack Development", "Version Control System"]
    },
    {
      company: "ElectraWheeler",
      position: "Frontend Developer",
      duration: "Dec 2023 – Jan 2024",
      location: "Chennai, India",
      type: "Internship",
      description: [
        "Collaborated with a 10-person team to develop web pages using React.js",
        "Integrated React frontend with a Java backend using Swagger API",
        "Implemented responsive design principles for optimal user experience",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["React.js", "Java", "Swagger API", "JavaScript"],
      achievements: ["Team Collaboration", "API Integration"]
    },
    {
      company: "Shaastra - Annual Technical Fest of IITM",
      position: "Senior Developer",
      duration: "April 2023 – March 2024",
      location: "Chennai, India",
      type: "Leadership Role",
      description: [
        "Led a team of 6 junior developers in full-stack development projects",
        "Oversaw frontend/backend development with React and Apollo GraphQL using TypeGraphQL and TypeORM",
        "Managed deployments on Digital Ocean and integrated Razorpay payment gateway",
        "Mentored junior developers and established coding standards for the team"
      ],
      technologies: ["React", "Apollo GraphQL", "TypeGraphQL", "TypeORM", "Digital Ocean", "Razorpay"],
      achievements: ["Team Leadership", "GraphQL Implementation", "Payment Integration"]
    },
    {
      company: "Tensors - Students NGO in IITM",
      position: "Senior Executive",
      duration: "April 2023 – March 2024",
      location: "Chennai, India",
      type: "Volunteer Role",
      description: [
        "Created a portal for the Tensors Olympiad for school students (Grades 6–12)",
        "Integrated an exam aggregator to manage exam workflows and enhance user experience",
        "Developed features for student registration, exam management, and result processing",
        "Collaborated with educational stakeholders to improve the platform"
      ],
      technologies: ["Web Development", "Database Management", "User Experience Design"],
      achievements: ["Educational Platform", "Student Impact", "Workflow Optimization"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leadership Role':
        return 'bg-purple-100 text-purple-800';
      case 'Internship':
        return 'bg-blue-100 text-blue-800';
      case 'Volunteer Role':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My professional journey and the impact I've made across different organizations
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-200"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {exp.position}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                      <TrendingUp className="text-green-600" size={16} />
                      <span className="text-green-700 font-medium text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;