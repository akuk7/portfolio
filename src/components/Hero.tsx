import React from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fadeInUp">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl font-bold text-slate-800">
                AK
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Amjad Khan UK
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Software Developer & Mechanical Engineering Student at IIT Madras
          </p>
          
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            Passionate about Full-Stack Development, Machine Learning, and building scalable solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="mailto:akukpersonal@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </a>
            <button className="inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">
              <Download className="mr-2" size={20} />
              Download Resume
            </button>
          </div>

          <div className="flex justify-center gap-6 mb-16">
            <a 
              href="https://linkedin.com/in/amjadkhanuk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/amjadkhanuk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-200 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;