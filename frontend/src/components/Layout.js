import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mic, Camera, Rss, Github, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedBackground from './AnimatedBackground';

const Layout = ({ children }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Experiences', path: '/experiences' },
    { name: 'Projects', path: '/projects' },
    { name: 'Talks', path: '/talks' },
    { name: 'Sponsors', path: '/sponsors' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-gray-800 dark:text-gray-200 transition-colors duration-200">
      {/* Decorative background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-5 dark:opacity-10">
        <svg
          className="absolute top-1/4 -left-20 w-96 h-96 text-gray-400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 200 Q 100 100, 200 150 T 350 200"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="80" cy="180" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
          <path
            d="M150 100 L200 50 L250 100 L200 150 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-6">
        <nav className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-light text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            TW
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm transition-colors ${
                    isActive(link.path)
                      ? 'text-gray-900 dark:text-gray-100 font-medium'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                aria-label="Podcast"
              >
                <Mic size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                aria-label="Photos"
              >
                <Camera size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                aria-label="RSS"
              >
                <Rss size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <button
                onClick={toggleTheme}
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {children}
      </main>
    </div>
  );
};

export default Layout;