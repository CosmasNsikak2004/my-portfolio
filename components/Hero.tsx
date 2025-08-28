'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA] via-[#7C3AED] to-[#2563EB]" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            
            {/* Name and Role */}
            <div className="mt-20 space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white leading-tight">
                Nsikak Cosmas
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white/90">
                  Frontend & Fullstack Developer
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-white/60 rounded-full" />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed font-light max-w-2xl">
              Building sleek, scalable web experiences with React, Next.js, and Node.js
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#1E1E2E] font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span>View My Work</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-8">
              <span className="text-white/60 text-sm font-medium">Connect with me:</span>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/CosmasNsikak2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nsikakabasi-cosmas-a56134381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:cosmasnsikakabasi@gmail.com"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative">
              {/* Developer Illustration */}
              <div className="w-80 h-80 sm:w-96 sm:h-96 relative">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full border border-white/20" />
                
                {/* Code Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Code2 size={120} className="text-white/80" />
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#14B8A6]/20 backdrop-blur-sm rounded-lg border border-[#14B8A6]/30 flex items-center justify-center animate-pulse">
                      <span className="text-[#14B8A6] font-mono text-sm">JS</span>
                    </div>
                    
                    <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center animate-pulse delay-500">
                      <span className="text-white font-mono text-sm">⚛️</span>
                    </div>
                    
                    <div className="absolute top-4 -left-12 w-12 h-12 bg-[#14B8A6]/20 backdrop-blur-sm rounded-lg border border-[#14B8A6]/30 flex items-center justify-center animate-pulse delay-1000">
                      <span className="text-[#14B8A6] font-mono text-xs">▲</span>
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-3 h-3 bg-white/60 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-2 h-2 bg-[#14B8A6] rounded-full" />
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-2 h-2 bg-white/40 rounded-full" />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-3 h-3 bg-[#14B8A6]/80 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <button
            onClick={() => scrollToSection('skills')}
            className="group flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors"
          >
            <span className="text-sm font-medium">Explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1E1E2E] to-transparent" />
    </section>
  );
};

export default Hero;