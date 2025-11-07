import Footer from '../components/Footer';
import React from 'react';
import { Trophy, Calendar, MapPin, Award } from 'lucide-react';

const Hackathons = () => {
  const hackathons = [
    {
      name: 'Starton Hackathon #1',
      company: 'Starton',
      date: '2024',
      location: 'Paris, France',
      description: 'Blockchain and Web3 development hackathon focused on building decentralized applications using Starton\'s infrastructure.',
      achievement: 'Built innovative blockchain solution',
      technologies: ['Blockchain', 'Web3', 'Smart Contracts', 'React'],
      award: null
    },
    {
      name: 'Starton Hackathon #2',
      company: 'Starton',
      date: '2024',
      location: 'Paris, France',
      description: 'Advanced Web3 hackathon exploring NFT integration, DeFi protocols, and decentralized storage solutions.',
      achievement: 'Developed NFT marketplace prototype',
      technologies: ['NFT', 'DeFi', 'IPFS', 'Solidity'],
      award: null
    },
    {
      name: 'Bouygues Telecom Innovation Challenge',
      company: 'Bouygues Telecom',
      date: '2023',
      location: 'Paris, France',
      description: 'Telecommunications innovation hackathon focused on 5G technology, IoT solutions, and network optimization.',
      achievement: 'Created IoT network solution',
      technologies: ['5G', 'IoT', 'Network', 'Python'],
      award: null
    },
    {
      name: 'Crédit Agricole FinTech Hackathon',
      company: 'Crédit Agricole',
      date: '2023',
      location: 'Paris, France',
      description: 'Financial technology hackathon centered on digital banking, payment solutions, and financial data analysis.',
      achievement: 'Developed banking analytics dashboard',
      technologies: ['FinTech', 'APIs', 'Data Analytics', 'TypeScript'],
      award: null
    }
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Hackathons
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Innovation challenges and hackathon participations with leading companies.
        </p>
      </div>

      <div className="space-y-8">
        {hackathons.map((hackathon, index) => (
          <article
            key={index}
            className="group border-l-2 border-transparent hover:border-gray-400 dark:hover:border-gray-600 pl-4 py-2 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors flex items-center gap-2">
                  <Trophy size={24} className="text-yellow-500" />
                  {hackathon.name}
                </h2>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium text-lg">{hackathon.company}</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {hackathon.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {hackathon.location}
                  </span>
                </div>
              </div>
              {hackathon.award && (
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
                  <Award size={16} />
                  <span className="text-sm font-medium">{hackathon.award}</span>
                </div>
              )}
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
              {hackathon.description}
            </p>

            <div className="mb-3">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">✨ Achievement:</span> {hackathon.achievement}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {hackathon.technologies.map((tech, techIndex) => (
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

export default Hackathons;