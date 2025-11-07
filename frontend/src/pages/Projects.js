import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import Footer from '../components/Footer';

const Projects = () => {
  const projects = [
    {
      name: 'Portfolio (TypeScript)',
      description: 'Modern portfolio website built with TypeScript. Features responsive design, smooth animations, and optimized performance. Showcases professional work and technical expertise.',
      tags: ['TypeScript', 'React', 'Web Design', 'Frontend'],
      year: '2024',
      link: 'https://github.com/twillsonepitech/portfolio',
      github: 'https://github.com/twillsonepitech/portfolio',
      status: 'Active',
      language: 'TypeScript'
    },
    {
      name: 'Library Management System',
      description: 'Complete web application for library management. Handles book cataloging, user management, lending system, and search functionality with an intuitive interface.',
      tags: ['PHP', 'MySQL', 'Web App', 'CRUD'],
      year: '2024',
      link: 'https://github.com/twillsonepitech/library',
      github: 'https://github.com/twillsonepitech/library',
      status: 'Complete',
      language: 'PHP'
    },
    {
      name: 'Gomoku AI Game',
      description: 'Graphical Gomoku game with artificial intelligence. Implements minimax algorithm with alpha-beta pruning for intelligent gameplay. Built with C++ and graphical interface.',
      tags: ['C++', 'AI', 'Game Development', 'Algorithm'],
      year: '2023',
      link: 'https://github.com/twillsonepitech/Gomoku',
      github: 'https://github.com/twillsonepitech/Gomoku',
      status: 'Complete',
      language: 'C++'
    },
    {
      name: 'Antman - Huffman Compression',
      description: 'File compression and decompression tool using Huffman algorithm. Efficient lossless data compression with optimal encoding implementation.',
      tags: ['C', 'Algorithm', 'Compression', 'Data Structures'],
      year: '2022',
      link: 'https://github.com/twillsonepitech/Antman',
      github: 'https://github.com/twillsonepitech/Antman',
      status: 'Complete',
      language: 'C',
      license: 'MIT'
    },
    {
      name: 'Wedding App (Flutter)',
      description: 'Mobile application built with Flutter/Dart for wedding planning and management. Features event scheduling, guest management, and photo sharing.',
      tags: ['Dart', 'Flutter', 'Mobile', 'Cross-platform'],
      year: '2023',
      link: 'https://github.com/twillsonepitech/wedding',
      github: 'https://github.com/twillsonepitech/wedding',
      status: 'Complete',
      language: 'Dart'
    },
    {
      name: 'Matchstick Game (Rust)',
      description: 'Implementation of the Matchstick game in Rust. Features game logic, AI opponent, and command-line interface with robust error handling.',
      tags: ['Rust', 'Game Logic', 'CLI', 'Systems Programming'],
      year: '2023',
      link: 'https://github.com/twillsonepitech/Matchstick',
      github: 'https://github.com/twillsonepitech/Matchstick',
      status: 'Complete',
      language: 'Rust'
    },
    {
      name: 'FTP Server (C)',
      description: 'FTP server implementation following RFC959 protocol. Supports multiple clients, file transfers, directory navigation, and standard FTP commands.',
      tags: ['C', 'FTP', 'RFC959', 'Networking'],
      year: '2023',
      link: 'https://github.com/twillsonepitech/C-modul-FTP',
      github: 'https://github.com/twillsonepitech/C-modul-FTP',
      status: 'Complete',
      language: 'C'
    },
    {
      name: 'OOP Java Project',
      description: 'Object-oriented programming project demonstrating advanced Java concepts. Implements design patterns, inheritance, polymorphism, and best practices.',
      tags: ['Java', 'OOP', 'Design Patterns', 'Enterprise'],
      year: '2024',
      link: 'https://github.com/twillsonepitech/oop-java-project',
      github: 'https://github.com/twillsonepitech/oop-java-project',
      status: 'Complete',
      language: 'Java'
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