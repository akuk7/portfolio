import React from 'react';
import { ExternalLink, Github, Star, Database, MessageCircle, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Social Media Wall using MERN",
      description: "A comprehensive social media platform built with the MERN stack, featuring real-time messaging, AI-powered chatbot integration, and modern user interface design.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Gemini API"],
      github: "#",
      demo: "#",
      featured: true,
      features: [
        "Real-time messaging with Socket.io",
        "AI chatbot via Gemini API",
        "Multi-turn contextual conversations",
        "Real-time notifications"
      ]
    },
    {
      title: "Stock Price Prediction using LSTM",
      description: "Deep learning model using LSTM neural networks to predict stock prices with high accuracy. Implemented data preprocessing and achieved impressive RMSE results.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "TensorFlow", "LSTM", "Pandas", "NumPy", "MinMaxScaler"],
      github: "#",
      demo: "#",
      featured: true,
      features: [
        "LSTM neural network architecture",
        "Data preprocessing with MinMaxScaler",
        "RMSE of 20 achieved",
        "Sequential model with dropout layers"
      ]
    },
    {
      title: "YT-Notion – YouTube Playlist Summarizer",
      description: "Automated tool that extracts YouTube video transcripts, generates AI-powered summaries, and seamlessly integrates with Notion for organized content management.",
      image: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Gemini API", "Notion API", "YouTube API", "Google Colab"],
      github: "#",
      demo: "#",
      featured: false,
      features: [
        "YouTube transcript extraction",
        "AI-powered summarization",
        "Notion integration",
        "Complete automation pipeline"
      ]
    }
  ];

  const getFeatureIcon = (feature: string) => {
    if (feature.includes('real-time') || feature.includes('Socket')) return <MessageCircle size={16} />;
    if (feature.includes('AI') || feature.includes('Gemini')) return <Star size={16} />;
    if (feature.includes('data') || feature.includes('LSTM')) return <TrendingUp size={16} />;
    if (feature.includes('database') || feature.includes('MongoDB')) return <Database size={16} />;
    return <Star size={16} />;
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development and machine learning expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 hover:border-blue-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    <Star size={14} />
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="text-blue-600">{getFeatureIcon(feature)}</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-medium"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="text-blue-600">{getFeatureIcon(feature)}</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-800 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;