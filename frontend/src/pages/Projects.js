import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'TCPlibrary',
      description: 'Library containing functions and structures to facilitate creation of TCP client and server in C. Complete implementation of socket programming with examples and documentation.',
      tags: ['C', 'TCP/IP', 'Networking', 'Socket Programming'],
      year: '2024',
      link: 'https://github.com/twillsonepitech/TCPlibrary',
      github: 'https://github.com/twillsonepitech/TCPlibrary',
      status: 'Active',
      language: 'C'
    },
    {
      name: 'FTP Server (C)',
      description: 'FTP server implementation following the RFC959 protocol. Supports multiple clients, file transfers, directory navigation, and standard FTP commands.',
      tags: ['C', 'FTP', 'RFC959', 'Server', 'Protocol'],
      year: '2024',
      link: 'https://github.com/twillsonepitech/C-modul-FTP',
      github: 'https://github.com/twillsonepitech/C-modul-FTP',
      status: 'Complete',
      language: 'C'
    },
    {
      name: 'Get-Next-Line',
      description: 'Function that returns a read line from a file descriptor. Optimized memory management and buffer handling for efficient file reading operations.',
      tags: ['C', 'File I/O', 'Memory Management', 'Algorithm'],
      year: '2023',
      link: 'https://github.com/twillsonepitech/Get-Next-Line',
      github: 'https://github.com/twillsonepitech/Get-Next-Line',
      status: 'Complete',
      language: 'C'
    },
    {
      name: 'Biggest-Square',
      description: 'Algorithm to find the biggest square in a file map. Implements efficient matrix parsing and dynamic programming for optimal square detection.',
      tags: ['Shell', 'Algorithm', 'Problem Solving', 'Optimization'],
      year: '2023',
      link: 'https://github.com/twillsonepitech/Biggest-Square',
      github: 'https://github.com/twillsonepitech/Biggest-Square',
      status: 'Complete',
      language: 'Shell'
    },
    {
      name: 'Free-Dimension',
      description: 'Memory management library to free all types of pointer dimensions without loops or memory leaks. Recursive implementation for multi-dimensional arrays.',
      tags: ['C', 'Memory Management', 'Pointers', 'Recursion'],
      year: '2023',
      link: 'https://github.com/twillsonepitech/Free-Dimension',
      github: 'https://github.com/twillsonepitech/Free-Dimension',
      status: 'Complete',
      language: 'C'
    },
    {
      name: 'Lib-IO',
      description: 'Input/Output library containing wrappers and utility functions. Simplifies file operations, standard I/O, and error handling in C projects.',
      tags: ['C', 'Library', 'I/O Operations', 'Utilities'],
      year: '2023',
      link: 'https://github.com/twillsonepitech/Lib-IO',
      github: 'https://github.com/twillsonepitech/Lib-IO',
      status: 'Active',
      language: 'C'
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
                  <span className="font-medium">{project.language}</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
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