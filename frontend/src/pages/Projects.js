import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'Partech Portfolio Tracker',
      description: 'Internal tool for Partech Partners to track investment portfolio performance with real-time analytics, reporting, and data visualization. Built to handle complex financial data with high performance requirements.',
      tags: ['Next.js', 'PostgreSQL', 'React', 'TailwindCSS', 'Charts.js'],
      year: '2024',
      link: '#',
      github: '#',
      status: 'Production',
      client: 'Partech Partners'
    },
    {
      name: 'Mobilier Solidaire E-commerce',
      description: 'Complete e-commerce platform with integrated CRM for furniture retail. Features include inventory management, order processing, customer tracking, and social impact reporting for sustainable furniture business.',
      tags: ['React', 'NestJS', 'Stripe', 'PostgreSQL', 'Docker'],
      year: '2023',
      link: '#',
      github: '#',
      status: 'Production',
      client: 'Groupe Mobilier Solidaire'
    },
    {
      name: '6ixtes Custom Configurator',
      description: 'Client-facing product configurator with real-time 3D preview and multi-table back-office system for custom furniture design. Allows customers to personalize furniture and see live previews.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Vercel', 'Three.js'],
      year: '2023',
      link: '#',
      github: '#',
      status: 'Production',
      client: '6ixtes'
    },
    {
      name: 'Link-Up Learning Platform',
      description: 'Student management application with course tracking, progress monitoring, and analytics dashboard. Features real-time updates, assignment management, and comprehensive reporting for educators.',
      tags: ['Angular', 'Firebase', 'TypeScript', 'Material UI', 'RxJS'],
      year: '2022',
      link: '#',
      github: '#',
      status: 'Production',
      client: 'Link-Up'
    },
    {
      name: 'Personal Portfolio & Blog',
      description: 'Modern portfolio website built with React and TailwindCSS. Features dark mode, smooth animations, and responsive design. Showcases projects, experiences, and technical writing.',
      tags: ['React', 'TailwindCSS', 'Vite', 'Vercel'],
      year: '2024',
      link: '#',
      github: '#',
      status: 'Active',
      client: 'Personal'
    },
    {
      name: 'API Gateway & Microservices',
      description: 'Scalable API gateway built with NestJS to handle multiple microservices. Implements authentication, rate limiting, caching, and real-time data synchronization across services.',
      tags: ['NestJS', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
      year: '2023',
      link: '#',
      github: '#',
      status: 'Active',
      client: 'Open Source'
    }
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Selection of professional projects and personal experiments I've built.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group border-l-2 border-transparent hover:border-gray-400 dark:hover:border-gray-600 pl-4 py-2 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                  {project.name}
                </h2>
                <div className="flex items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span className="font-medium">{project.client}</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                  aria-label="View project"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <footer className="pt-10 pb-6 text-center text-sm text-gray-500 dark:text-gray-500">
        <p>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-400"
          >
            CC BY-NC-SA 4.0
          </a>{' '}
          2021-PRESENT © Thomas Willson
        </p>
      </footer>
    </div>
  );
};

export default Projects;