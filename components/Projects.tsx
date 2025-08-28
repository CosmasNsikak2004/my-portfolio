'use client';

import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce application built with Next.js, featuring user authentication, payment processing, and an admin dashboard.',
      image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/username/ecommerce-platform',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Vite', 'Node.js', 'Socket.io', 'PostgreSQL'],
      liveUrl: 'https://example-taskapp.com',
      githubUrl: 'https://github.com/username/task-management',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive charts, and severe weather alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'JavaScript', 'Chart.js', 'Weather API'],
      liveUrl: 'https://example-weather.com',
      githubUrl: 'https://github.com/username/weather-dashboard',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing multiple social media accounts with analytics, scheduling, and engagement tracking.',
      image: 'https://images.pexels.com/photos/3184324/pexels-photo-3184324.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
      liveUrl: 'https://example-social.com',
      githubUrl: 'https://github.com/username/social-dashboard',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example-portfolio.com',
      githubUrl: 'https://github.com/username/portfolio',
      featured: false
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      description: 'A comprehensive real estate platform with property listings, advanced search filters, and virtual tour integration.',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Mapbox'],
      liveUrl: 'https://example-realestate.com',
      githubUrl: 'https://github.com/username/real-estate-platform',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <div
      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-[#14B8A6]/50 transition-all duration-500 transform hover:scale-105"
      onMouseEnter={() => setActiveProject(project.id)}
      onMouseLeave={() => setActiveProject(null)}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2E] via-transparent to-transparent opacity-60" />
        
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#9333EA]/90 to-[#2563EB]/90 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
          activeProject === project.id ? 'opacity-100' : 'opacity-0'
        }`}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
          >
            <ExternalLink size={20} className="text-white" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
          >
            <Github size={20} className="text-white" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#E2E8F0] mb-3 group-hover:text-[#14B8A6] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-[#E2E8F0]/70 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gradient-to-r from-[#9333EA]/20 to-[#2563EB]/20 border border-[#14B8A6]/30 text-[#14B8A6] text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#14B8A6] hover:text-[#E2E8F0] transition-colors text-sm"
          >
            <Eye size={16} />
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#E2E8F0]/70 hover:text-[#E2E8F0] transition-colors text-sm"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2563EB]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E2E8F0] mb-6">
            Featured <span className="bg-gradient-to-r from-[#9333EA] to-[#2563EB] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-[#E2E8F0]/80 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating proficiency in full-stack development 
            and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-[#14B8A6] mb-8 text-center">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#9333EA]/10 to-[#2563EB]/10 border border-[#14B8A6]/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-semibold text-[#E2E8F0] mb-4">
              Want to See More?
            </h4>
            <p className="text-[#E2E8F0]/80 text-lg mb-6">
              These are just a few highlights from my portfolio. I have more projects 
              and contributions available on my GitHub profile.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#9333EA] to-[#2563EB] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#9333EA]/25 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;