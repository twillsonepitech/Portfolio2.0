import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const Talks = () => {
  const talks = [
    {
      title: 'Building Modern Web Apps with Next.js 14',
      event: 'Paris Web Meetup',
      location: 'Paris, France',
      date: '2024-03-20',
      audience: '~120 people',
      description: 'An introduction to Next.js 14 features including Server Actions, Server Components, and the new App Router.',
      slides: '#',
      video: '#',
    },
    {
      title: 'TypeScript Advanced Patterns',
      event: 'React Paris Conference',
      location: 'Paris, France',
      date: '2023-11-15',
      audience: '~250 people',
      description: 'Deep dive into advanced TypeScript patterns and how to leverage the type system for better developer experience.',
      slides: '#',
      video: '#',
    },
    {
      title: 'Scaling NestJS Applications',
      event: 'Backend France',
      location: 'Online',
      date: '2023-09-10',
      audience: '~180 people',
      description: 'Best practices for building and scaling enterprise-grade applications with NestJS and PostgreSQL.',
      slides: '#',
      video: '#',
    },
    {
      title: 'From Figma to Production',
      event: 'Design & Dev Meetup',
      location: 'Paris, France',
      date: '2023-06-05',
      audience: '~80 people',
      description: 'My workflow for translating design mockups into production-ready React applications.',
      slides: '#',
      video: '#',
    },
    {
      title: 'Building Real-time Applications',
      event: 'JavaScript Conf Paris',
      location: 'Paris, France',
      date: '2023-04-12',
      audience: '~300 people',
      description: 'Implementing real-time features using WebSockets, Server-Sent Events, and modern approaches.',
      slides: '#',
      video: '#',
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Talks
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Public speaking engagements, workshops, and conference presentations.
        </p>
      </div>

      <div className="space-y-8">
        {talks.map((talk, index) => (
          <article
            key={index}
            className="group border-l-2 border-transparent hover:border-gray-400 dark:hover:border-gray-600 pl-4 py-2 transition-all"
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
              {talk.title}
            </h2>
            
            <div className="space-y-2 mb-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Users size={14} />
                <span className="font-medium">{talk.event}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <time>{new Date(talk.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{talk.location}</span>
                </div>
                <span>{talk.audience}</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
              {talk.description}
            </p>

            <div className="flex gap-4 text-sm">
              <a
                href={talk.slides}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                📊 Slides
              </a>
              <a
                href={talk.video}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                🎥 Video
              </a>
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

export default Talks;