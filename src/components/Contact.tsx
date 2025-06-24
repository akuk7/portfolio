import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      value: "akukpersonal@gmail.com",
      link: "mailto:akukpersonal@gmail.com"
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Phone",
      value: "+91 9633488450",
      link: "tel:+919633488450"
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Location",
      value: "Chennai, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/amjadkhanuk",
      color: "hover:text-slate-800"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/amjadkhanuk",
      color: "hover:text-blue-600"
    },
    {
      icon: <ExternalLink size={24} />,
      name: "Portfolio",
      url: "#",
      color: "hover:text-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Let's start a conversation
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                internships, or just having a friendly chat about technology and development. 
                Currently pursuing my B.Tech at IIT Madras and actively seeking software development opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200 hover:shadow-md transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 mb-1">
                      {info.title}
                    </div>
                    <div className="text-slate-800 font-semibold group-hover:text-blue-600 transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">
                Connect with me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-100 rounded-lg text-slate-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Quick Info
              </h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div>🎓 B.Tech Mechanical Engineering, IIT Madras</div>
                <div>💼 Open to Software Development Opportunities</div>
                <div>🌍 Based in Chennai, India</div>
                <div>⚡ Specializing in Full-Stack & ML Development</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;