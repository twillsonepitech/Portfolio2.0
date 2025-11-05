import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      title: 'Développeur Full Stack',
      company: 'Groupe Mobilier Solidaire',
      type: 'Freelance',
      location: 'Drancy, Île-de-France',
      period: 'avril 2025 - Présent',
      duration: '8 mois',
      description: 'Groupe Mobilier Solidaire est une société qui s\'occupe de vendre du mobilier pour ses clients.',
      achievements: [
        'Site vitrine / e-commerce complet pour présenter produits, collections, catalogue et gestion des commandes',
        'CRM complet : gestion des commandes (changement de statuts), création des produits et collections',
        'Système de notifications et gestion des médias (connecté avec Cloudinary) pour chaque client',
        'Backend NestJS avec architecture robuste et performante'
      ],
      technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'TypeScript', 'Docker', 'Cloudinary', 'E-commerce', 'CRM']
    },
    {
      title: 'Développeur Full Stack',
      company: 'Link Up',
      type: 'Freelance',
      location: 'Paris, Île-de-France',
      period: 'juillet 2025 - juillet 2025',
      duration: '1 mois',
      description: 'Link-up s\'occupe de la relation entre apprenants et tuteurs pour gérer le suivi pédagogique. Travaille avec plusieurs centres de formation comme CRAF2S.',
      achievements: [
        'Développement d\'une fonctionnalité d\'évaluation individuelle des apprenants pour les coordonnateurs',
        'Implémentation côté panel administratif pour création des évaluations par les centres de formation',
        'Développement côté application client pour évaluation des apprenants avec système de questions',
        'Intégration complète entre backend et frontend pour workflow d\'évaluation'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'API REST']
    },
    {
      title: 'Développeur Front-end',
      company: '6ixtes',
      type: 'Freelance - Temps Partiel',
      location: 'Paris, Île-de-France',
      period: 'février 2025 - juillet 2025',
      duration: '6 mois',
      description: 'Refonte complète du site pour les clients et l\'équipe interne.',
      achievements: [
        'Création du configurateur permettant aux clients de composer et passer commande',
        'Accès administratif à la BDD avec plus de 10 tables, chacune avec leurs CRUDs',
        'Système de prévisualisation en temps réel des configurations',
        'Interface de création et modification avec nombreuses fonctionnalités avancées'
      ],
      technologies: ['TypeScript', 'React', 'Next.js', 'styled-components', 'zustand', 'MongoDB']
    },
    {
      title: 'Développeur Full Stack',
      company: 'Partech',
      type: 'Freelance',
      location: 'Paris, Île-de-France',
      period: 'juin 2024 - mars 2025',
      duration: '10 mois',
      description: 'Création du panel administratif pour la gestion de leur EDM et CRM complet.',
      achievements: [
        'Développement du CRM complet pour gestion de l\'EDM (juin-sept 2024)',
        'Création du panel administratif pour manipulation et création de documents (sept 2024-mars 2025)',
        'Gestion des specs internes depuis l\'interface administrative',
        'Ajout de nouvelles features sur EDM avec design Figma associé'
      ],
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Playwright', 'k6.io']
    },
    {
      title: 'Développeur Full Stack',
      company: '6ixtes',
      type: 'Freelance',
      location: 'Paris, Île-de-France',
      period: 'juin 2024 - octobre 2024',
      duration: '5 mois',
      description: 'Amélioration et maintenance du CRM et du site web.',
      achievements: [
        'Ajout de nouvelles fonctionnalités au CRM existant',
        'Développement de nouvelles features pour améliorer l\'expérience utilisateur',
        'Maintenance et optimisation du site web',
        'Correction de bugs et amélioration des performances'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Docker']
    },
    {
      title: 'Développeur Full Stack',
      company: 'Ollamy',
      type: 'Projet de groupe (8 personnes) - Epitech',
      location: 'Paris, Île-de-France',
      period: 'juillet 2023 - janvier 2025',
      duration: '1 an 7 mois',
      description: 'Projet d\'école Epitech en équipe de 8 personnes.',
      achievements: [
        'Collaboration en équipe de 8 développeurs sur projet complexe',
        'Architecture full-stack complète',
        'Gestion de projet et méthodologies agiles',
        'Développement backend et frontend'
      ],
      technologies: ['NestJS', 'React', 'PostgreSQL', 'Prisma', 'Docker', 'TypeScript']
    },
    {
      title: 'Développeur Full Stack',
      company: 'Jungle Bike',
      type: 'Freelance',
      location: 'Paris, Île-de-France',
      period: 'août 2023 - octobre 2023',
      duration: '3 mois',
      description: 'Intégration d\'APIs e-commerce multiples dans architecture WordPress.',
      achievements: [
        'Intégration API Shopify pour synchronisation catalogue produits',
        'Intégration API WooCommerce pour gestion e-commerce',
        'Intégration API PrestaShop pour multi-plateforme',
        'Système de stockage en base de données pour articles clients',
        'Ajout de Cron Jobs via WordPress pour automatisation'
      ],
      technologies: ['PHP', 'WordPress', 'Shopify API', 'WooCommerce', 'PrestaShop', 'MySQL', 'API']
    },
    {
      title: 'Développeur bas niveau',
      company: 'Innovative Findings',
      type: 'CDD',
      location: 'Paris, Île-de-France',
      period: 'juillet 2022 - juillet 2023',
      duration: '1 an 1 mois',
      description: 'Développement bas niveau et programmation système.',
      achievements: [
        'Développement en langage bas niveau',
        'Optimisation des performances système',
        'Travail sur architectures complexes',
        'Debugging et résolution de problèmes critiques'
      ],
      technologies: ['C', 'C++', 'Système', 'Linux', 'Bas niveau']
    },
    {
      title: 'Développeur Full Stack',
      company: 'Smice',
      type: 'Stage',
      location: 'Paris, Île-de-France',
      period: 'juillet 2021 - décembre 2021',
      duration: '6 mois',
      description: 'Premier stage de développement full-stack.',
      achievements: [
        'Découverte du développement web professionnel',
        'Participation au développement frontend et backend',
        'Apprentissage des bonnes pratiques de développement',
        'Collaboration en équipe sur projets réels'
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'Web Development']
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
                <span className="font-medium text-base">{exp.company}</span>
                <span>•</span>
                <span className="italic">{exp.type}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {exp.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {exp.period} ({exp.duration})
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