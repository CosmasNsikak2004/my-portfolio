'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/CosmasNsikak2004',
      hoverColor: 'hover:text-purple-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nsikakabasi-cosmas-a56134381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      hoverColor: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:cosmasnsikakabasi@gmail.com',
      hoverColor: 'hover:text-teal-400'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1E1E2E] to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#9333EA] to-[#2563EB] bg-clip-text text-transparent">
              Nsikak Cosmas
            </h3>
            <p className="text-[#E2E8F0]/70 text-sm leading-relaxed">
              Full-stack developer passionate about creating exceptional web experiences 
              with modern technologies and clean, maintainable code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[#E2E8F0]/60 ${social.hoverColor} transition-colors p-2 hover:scale-110 transform duration-200`}
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#14B8A6]">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#E2E8F0]/70 hover:text-[#14B8A6] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#14B8A6]">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-[#9333EA]/20 to-[#2563EB]/20 border border-[#14B8A6]/30 text-[#14B8A6] text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-[#E2E8F0]/60 text-sm">
              <span>© {currentYear} Nsikak Cosmas. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>and lots of coffee.</span>
            </div>
            
            <div className="text-[#E2E8F0]/60 text-sm">
              <span>Built with Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;