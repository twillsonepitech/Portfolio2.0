import React from 'react';
import ProjectBadge from '../components/ProjectBadge';
import { Github, Linkedin, Mail, Twitter, MessageCircle } from 'lucide-react';

const Home = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', url: '#' },
    { name: 'Next.js', icon: '▲', url: '#' },
    { name: 'NestJS', icon: '🐈', url: '#' },
    { name: 'PostgreSQL', icon: '🐘', url: '#' },
    { name: 'TypeScript', icon: '💙', url: '#' },
    { name: 'TailwindCSS', icon: '🎨', url: '#' },
  ];

  const clients = [
    { name: 'Partech Partners', icon: '💼' },
    { name: 'Mobilier Solidaire', icon: '🪑' },
    { name: '6ixtes', icon: '⚙️' },
    { name: 'Link-Up', icon: '🎓' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Discord', icon: MessageCircle, url: '#' },
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section>
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Thomas Willson
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          Hey! I'm Thomas Willson, a freelance full-stack developer and design engineer.
        </p>

        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <p>
            <span className="text-gray-500 dark:text-gray-400">Freelance at</span>{' '}
            <span className="font-medium">Paris, France</span>
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-500 dark:text-gray-400">Working with</span>
            {technologies.map((tech, index) => (
              <ProjectBadge key={index} icon={tech.icon} name={tech.name} url={tech.url} />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-500 dark:text-gray-400">Clients include</span>
            {clients.map((client, index) => (
              <ProjectBadge key={index} icon={client.icon} name={client.name} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          Développeur full-stack freelance basé à Paris, j'interviens sur des projets web complets — du design d'interface à l'architecture backend. Mon approche est centrée sur la qualité du code, la scalabilité et la livraison rapide de produits concrets.
        </p>

        <p>
          J'ai travaillé avec des startups, PME et fonds d'investissement comme{' '}
          <a href="#" className="text-gray-900 dark:text-gray-100 hover:underline">
            Partech Partners
          </a>
          , où j'ai contribué à des outils internes et à la modernisation de leur infrastructure web.
        </p>

        <p>
          I give{' '}
          <a href="/talks" className="text-gray-900 dark:text-gray-100 hover:underline">
            talks
          </a>{' '}
          and share{' '}
          <a href="/experiences" className="text-gray-900 dark:text-gray-100 hover:underline">
            professional experiences
          </a>{' '}
          about web development, modern JavaScript, and building scalable applications. You can find my{' '}
          <a href="/projects" className="text-gray-900 dark:text-gray-100 hover:underline">
            full projects list here
          </a>
          .
        </p>

        <p>
          Je conçois des produits web complets, performants et maintenables. Mon approche : du code clair, des outils modernes, et une forte autonomie dans la livraison — que ce soit pour un MVP ou un produit déjà en production.
        </p>
      </section>

      <div className="border-t border-gray-200 dark:border-gray-800 my-10"></div>

      {/* Social Links */}
      <section>
        <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-4">Find me on</h3>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <Icon size={16} />
                <span className="text-sm">{social.name}</span>
              </a>
            );
          })}
        </div>

        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
          Or mail me at{' '}
          <a href="mailto:hi@thomaswillson.dev" className="text-gray-900 dark:text-gray-100 hover:underline">
            hi@thomaswillson.dev
          </a>
        </p>
      </section>

      <div className="border-t border-gray-200 dark:border-gray-800 my-10"></div>

      {/* Sponsorship Section */}
      <section className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          If you enjoy my work and find them useful, consider sponsoring me to help keep my open source projects sustainable. Thank you!
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
          >
            <span>💝</span>
            <span>Sponsor me on GitHub</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
          >
            <span>☕</span>
            <span>Buy me a coffee</span>
          </a>
        </div>
      </section>

      {/* Footer */}
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

export default Home;