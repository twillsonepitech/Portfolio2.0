import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'Partech Portfolio Tracker',
      description: 'Internal tool for tracking investment portfolio performance with real-time analytics and reporting.',
      tags: ['Next.js', 'PostgreSQL', 'React', 'TailwindCSS'],
      year: '2024',
      link: '#',
      github: '#',
    },
    {
      name: 'Mobilier Solidaire E-commerce',
      description: 'Complete e-commerce platform with integrated CRM for furniture retail and social impact tracking.',
      tags: ['React', 'NestJS', 'Stripe', 'PostgreSQL'],
      year: '2023',
      link: '#',
      github: '#',
    },
    {
      name: '6ixtes Configurator',
      description: 'Client-facing product configurator with multi-table back-office system for custom furniture design.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Vercel'],
      year: '2023',
      link: '#',
      github: '#',
    },
    {
      name: 'Link-Up Learning Platform',
      description: 'Student management application with course tracking, progress monitoring, and analytics.',
      tags: ['Angular', 'Firebase', 'TypeScript', 'Material UI'],
      year: '2022',
      link: '#',
      github: '#',
    },
    {
      name: 'Personal Dashboard',
      description: 'A unified dashboard aggregating data from various APIs and services for personal productivity.',
      tags: ['React', 'Express', 'Supabase', 'Railway'],
      year: '2024',
      link: '#',
      github: '#',
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Selection of projects I've worked on, from enterprise tools to personal experiments.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group border-l-2 border-transparent hover:border-gray-400 dark:hover:border-gray-600 pl-4 py-2 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                {project.name}
              </h2>
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
              <span className="text-sm text-gray-500 dark:text-gray-500">{project.year}</span>
              <span className="text-gray-400 dark:text-gray-600">•</span>
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