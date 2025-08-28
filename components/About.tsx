'use client';

import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'I write maintainable, scalable code following best practices and industry standards.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'I enjoy tackling complex challenges and finding elegant solutions to technical problems.'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'I collaborate effectively with designers, product managers, and fellow developers.'
    },
    {
      icon: Coffee,
      title: 'Continuous Learner',
      description: 'I stay updated with the latest technologies and continuously improve my skills.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#14B8A6]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E2E8F0] mb-6">
            About <span className="bg-gradient-to-r from-[#9333EA] to-[#2563EB] bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Personal story */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-[#14B8A6] mb-6">My Journey</h3>
              
              <div className="space-y-4 text-[#E2E8F0]/80 leading-relaxed">
                <p>
                  My journey into web development began during college when I built my first website 
                  using basic HTML and CSS. What started as a simple curiosity quickly evolved into 
                  a passionate career spanning over 5 years.
                </p>
                
                <p>
                  I specialize in creating modern, responsive web applications that provide 
                  exceptional user experiences. My approach combines clean, maintainable code 
                  with thoughtful design and performance optimization.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or mentoring aspiring developers. I believe in the power 
                  of technology to solve real-world problems and create meaningful impact.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#9333EA]/10 to-[#2563EB]/10 border border-[#14B8A6]/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-[#E2E8F0] mb-3">Quick Facts</h4>
              <ul className="space-y-2 text-[#E2E8F0]/70">
                <li>🎓 Computer Science Graduate</li>
                <li>💼 5+ Years of Professional Experience</li>
                <li>🌍 Based in Akwa Ibom, Nigeria</li>
                <li>☕ Coffee Enthusiast & Early Bird</li>
              </ul>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-[#14B8A6]/50 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-[#14B8A6] mb-4">
                    <IconComponent size={32} />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-[#E2E8F0] mb-3">
                    {highlight.title}
                  </h4>
                  
                  <p className="text-[#E2E8F0]/70 text-sm">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#E2E8F0] mb-8">
              My <span className="text-[#14B8A6]">Mission</span>
            </h3>
            <p className="text-xl text-[#E2E8F0]/80 leading-relaxed">
              To create digital experiences that are not only visually appealing and highly functional, 
              but also accessible, performant, and meaningful. I believe great software should enhance 
              people's lives while being a joy to use and maintain.
            </p>
          </div>
        </div>

        {/* Current focus */}
        <div className="mt-16 bg-gradient-to-r from-[#9333EA]/10 to-[#2563EB]/10 border border-[#14B8A6]/30 rounded-xl p-8 text-center">
          <h4 className="text-2xl font-semibold text-[#E2E8F0] mb-4">
            Currently Exploring
          </h4>
          <div className="flex flex-wrap justify-center gap-4 text-[#14B8A6]">
            <span className="px-4 py-2 bg-[#14B8A6]/20 rounded-full">TypeScript</span>
            <span className="px-4 py-2 bg-[#14B8A6]/20 rounded-full">GraphQL</span>
            <span className="px-4 py-2 bg-[#14B8A6]/20 rounded-full">Docker</span>
            <span className="px-4 py-2 bg-[#14B8A6]/20 rounded-full">AWS</span>
            <span className="px-4 py-2 bg-[#14B8A6]/20 rounded-full">Three.js</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;