'use client';

import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const frontendSkills = [
    {
      name: 'HTML5',
      icon: '🏗️',
      description: 'Semantic markup and modern HTML features',
      proficiency: 95
    },
    {
      name: 'CSS3',
      icon: '🎨',
      description: 'Advanced styling, animations, and responsive design',
      proficiency: 90
    },
    {
      name: 'JavaScript',
      icon: '⚡',
      description: 'ES6+, DOM manipulation, and modern JS patterns',
      proficiency: 92
    },
    {
      name: 'React',
      icon: '⚛️',
      description: 'Hooks, Context API, and component architecture',
      proficiency: 88
    },
    {
      name: 'Next.js',
      icon: '▲',
      description: 'SSR, SSG, and full-stack React framework',
      proficiency: 85
    },
    {
      name: 'Vite',
      icon: '⚡',
      description: 'Fast build tool and development server',
      proficiency: 82
    }
  ];

  const backendSkills = [
    {
      name: 'Node.js',
      icon: '🟢',
      description: 'Server-side JavaScript runtime and APIs',
      proficiency: 85
    },
    {
      name: 'Express.js',
      icon: '🚀',
      description: 'Web application framework for Node.js',
      proficiency: 80
    },
    {
      name: 'MongoDB',
      icon: '🍃',
      description: 'NoSQL database and data modeling',
      proficiency: 75
    },
    {
      name: 'PostgreSQL',
      icon: '🐘',
      description: 'Relational database and SQL queries',
      proficiency: 70
    }
  ];

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
    <div
      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-[#14B8A6]/50 transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>
      
      <h3 className="text-xl font-semibold text-[#E2E8F0] mb-2">
        {skill.name}
      </h3>
      
      <p className="text-[#E2E8F0]/70 text-sm mb-4 min-h-[40px]">
        {skill.description}
      </p>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-[#E2E8F0]/60">Proficiency</span>
          <span className="text-[#14B8A6]">{skill.proficiency}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-[#9333EA] to-[#2563EB] h-2 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: hoveredSkill === skill.name ? `${skill.proficiency}%` : '0%'
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9333EA]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E2E8F0] mb-6">
            Technical <span className="bg-gradient-to-r from-[#9333EA] to-[#2563EB] bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-[#E2E8F0]/80 max-w-3xl mx-auto">
            My expertise spans across modern frontend and backend technologies, 
            enabling me to build complete web applications from concept to deployment.
          </p>
        </div>

        <div className="space-y-16">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-[#14B8A6] mb-8 text-center">
              Frontend Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frontendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-[#14B8A6] mb-8 text-center">
              Backend Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {backendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#9333EA]/10 to-[#2563EB]/10 border border-[#14B8A6]/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-semibold text-[#E2E8F0] mb-4">
              Always Learning
            </h4>
            <p className="text-[#E2E8F0]/80 text-lg">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              Currently exploring TypeScript, GraphQL, and cloud technologies to stay at the forefront of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;