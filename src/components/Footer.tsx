import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-2xl font-bold mb-4 hover:text-blue-400 transition-colors"
          >
            Amjad Khan UK
            <ArrowUp size={20} />
          </button>
          
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Software Developer & Mechanical Engineering Student at IIT Madras. 
            Passionate about creating innovative solutions through technology.
          </p>

          <div className="flex justify-center items-center gap-2 text-slate-400 mb-6">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} fill="currentColor" />
            <span>and lots of ☕</span>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:akukpersonal@gmail.com" 
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/amjadkhanuk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/amjadkhanuk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="pt-8 border-t border-slate-800 text-slate-500 text-sm">
            <p>&copy; 2024 Amjad Khan UK. All rights reserved.</p>
            <p className="mt-2">Currently pursuing B.Tech at IIT Madras | Open to opportunities</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;