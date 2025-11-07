import React from 'react';

const ProjectBadge = ({ icon, name, url }) => {
  return (
    <a
      href={url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all border border-blue-200 dark:border-blue-800"
    >
      {icon && <span className="text-base">{icon}</span>}
      <span>{name}</span>
    </a>
  );
};

export default ProjectBadge;