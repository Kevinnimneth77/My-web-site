import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
  },
  {
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["TypeScript", "Express", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather forecasting application with location-based services and interactive maps.",
    technologies: ["React", "OpenWeather API", "Leaflet"],
    github: "https://github.com",
    live: "https://example.com",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-700/50 transition-all">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-sm bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}