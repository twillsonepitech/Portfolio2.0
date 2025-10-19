import React from 'react';

const ProjectBadge = ({ icon, name, url }) => {
  return (
    <a
      href={url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      {icon && <span className="text-base">{icon}</span>}
      <span>{name}</span>
    </a>
  );
};

export default ProjectBadge;