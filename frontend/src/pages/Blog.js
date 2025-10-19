import React from 'react';
import { Calendar } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable Web Applications with Next.js',
      date: '2024-03-15',
      description: 'A deep dive into building performant and scalable applications using Next.js 14 and React Server Components.',
      tags: ['Next.js', 'React', 'Performance'],
    },
    {
      title: 'TypeScript Best Practices for Backend Development',
      date: '2024-02-20',
      description: 'Essential patterns and practices for writing maintainable TypeScript code in NestJS applications.',
      tags: ['TypeScript', 'NestJS', 'Backend'],
    },
    {
      title: 'Modern State Management in React',
      date: '2024-01-10',
      description: 'Comparing different state management solutions and when to use each one.',
      tags: ['React', 'State Management', 'Frontend'],
    },
    {
      title: 'PostgreSQL Performance Optimization',
      date: '2023-12-05',
      description: 'Tips and tricks for optimizing PostgreSQL queries and database performance.',
      tags: ['PostgreSQL', 'Database', 'Performance'],
    },
    {
      title: 'From Design to Production: My Workflow',
      date: '2023-11-18',
      description: 'How I take projects from Figma designs to production-ready applications.',
      tags: ['Workflow', 'Design', 'Development'],
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Thoughts on web development, modern JavaScript, and building things.
        </p>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="group cursor-pointer border-l-2 border-transparent hover:border-gray-400 dark:hover:border-gray-600 pl-4 py-2 transition-all"
          >
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
              <Calendar size={14} />
              <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
              {post.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, tagIndex) => (
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

export default Blog;