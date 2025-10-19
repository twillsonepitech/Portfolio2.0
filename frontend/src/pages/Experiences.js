import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      location: 'Paris, France',
      period: '2022 - Present',
      description: 'Conception et développement de plateformes sur mesure : sites vitrines, e-commerce, CRM, dashboards analytiques.',
      achievements: [
        'Led development of internal tools for Partech Partners',
        'Built complete e-commerce platform for Groupe Mobilier Solidaire',
        'Created custom configurator system for 6ixtes',
        'Developed learning management platform for Link-Up'
      ],
      technologies: ['React', 'Next.js', 'NestJS', 'PostgreSQL', 'TypeScript', 'Supabase']
    },
    {
      title: 'Full-Stack Developer - Partech Partners',
      company: 'Partech Partners',
      location: 'Paris, France',
      period: '2023 - 2024',
      description: 'Refonte d\'outils internes et intégration de systèmes de suivi de portefeuille pour le fonds d\'investissement.',
      achievements: [
        'Modernized internal infrastructure and tooling',
        'Implemented real-time portfolio tracking analytics',
        'Improved data visualization and reporting systems',
        'Reduced load times by 60% through optimization'
      ],
      technologies: ['Next.js', 'PostgreSQL', 'React', 'TailwindCSS', 'Node.js']
    },
    {
      title: 'Web Developer - Groupe Mobilier Solidaire',
      company: 'Mobilier Solidaire',
      location: 'Paris, France',
      period: '2023',
      description: 'Développement d\'un site e-commerce complet avec CRM intégré pour la vente de mobilier.',
      achievements: [
        'Built complete e-commerce platform from scratch',
        'Integrated Stripe payment processing',
        'Developed custom CRM for customer management',
        'Implemented inventory management system'
      ],
      technologies: ['React', 'NestJS', 'Stripe', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Frontend Developer - 6ixtes',
      company: '6ixtes',
      location: 'Paris, France',
      period: '2023',
      description: 'Création d\'un configurateur client et back-office multi-tables pour la personnalisation de meubles.',
      achievements: [
        'Designed and built interactive product configurator',
        'Created multi-table back-office management system',
        'Implemented real-time preview functionality',
        'Optimized performance for complex configurations'
      ],
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Vercel']
    },
    {
      title: 'Full-Stack Developer - Link-Up',
      company: 'Link-Up',
      location: 'Paris, France',
      period: '2022',
      description: 'Mise en place d\'une application de gestion d\'apprenants avec suivi de progression.',
      achievements: [
        'Built student management platform',
        'Implemented course tracking and analytics',
        'Created progress monitoring dashboard',
        'Integrated Firebase authentication'
      ],
      technologies: ['Angular', 'Firebase', 'TypeScript', 'Material UI']
    }
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Experiences
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Professional experience building web applications and tools for clients.
        </p>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className="group border-l-2 border-transparent hover:border-gray-400 dark:hover:border-gray-600 pl-4 py-2 transition-all"
          >
            <div className="mb-3">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                {exp.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">{exp.company}</span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {exp.period}
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
              {exp.description}
            </p>

            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Achievements:</h3>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                >
                  {tech}
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

export default Experiences;