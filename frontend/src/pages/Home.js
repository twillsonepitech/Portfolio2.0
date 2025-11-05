import React from 'react';
import TechBadge from '../components/TechBadge';
import { Github, Linkedin, Mail, Twitter, MessageCircle } from 'lucide-react';

const Home = () => {
  const technologies = [
    { 
      name: 'React', 
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      url: 'https://github.com/facebook/react'
    },
    { 
      name: 'Next.js', 
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      url: 'https://github.com/vercel/next.js'
    },
    { 
      name: 'NestJS', 
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
      url: 'https://github.com/nestjs/nest'
    },
    { 
      name: 'PostgreSQL', 
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      url: 'https://github.com/postgres/postgres'
    },
    { 
      name: 'TypeScript', 
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      url: 'https://github.com/microsoft/TypeScript'
    },
    { 
      name: 'TailwindCSS', 
      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      url: 'https://github.com/tailwindlabs/tailwindcss'
    },
  ];

  const clients = [
    { 
      name: 'Partech Partners',
      logoUrl: 'https://media.licdn.com/dms/image/v2/D4E0BAQHK3qO_SmYi_A/company-logo_200_200/company-logo_200_200/0/1719409267788/partech_logo?e=2147483647&v=beta&t=xQF3gXO-RZbN5QH8IVMFqvQoEjZOi5RrDrWa7R6h0u4',
      url: 'https://partechpartners.com'
    },
    { 
      name: 'Mobilier Solidaire',
      logoUrl: 'https://www.groupe-ms.com/wp-content/themes/groupe-ms/assets/images/logo.svg',
      url: 'https://www.groupe-ms.com'
    },
    { 
      name: '6ixtes',
      logoUrl: 'https://via.placeholder.com/32/4A90E2/FFFFFF?text=6',
      url: '#'
    },
    { 
      name: 'Link-Up',
      logoUrl: 'https://via.placeholder.com/32/E94B3C/FFFFFF?text=L',
      url: '#'
    },
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
              <TechBadge key={index} name={tech.name} logoUrl={tech.logoUrl} url={tech.url} />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-500 dark:text-gray-400">Clients include</span>
            {clients.map((client, index) => (
              <TechBadge key={index} name={client.name} logoUrl={client.logoUrl} url={client.url} />
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
          <a href="/hackathons" className="text-gray-900 dark:text-gray-100 hover:underline">
            hackathon presentations
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

        <p>
          Feel free to{' '}
          <a href="/contact" className="text-gray-900 dark:text-gray-100 hover:underline">
            get in touch
          </a>{' '}
          if you'd like to collaborate or discuss a project!
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