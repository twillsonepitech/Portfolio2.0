import React from 'react';

const TechBadge = ({ name, logoUrl, url }) => {
  return (
    <a
      href={url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all hover:scale-105 border border-blue-200 dark:border-blue-800"
    >
      {logoUrl && (
        <img 
          src={logoUrl} 
          alt={name} 
          className="w-4 h-4 object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      )}
      <span className="text-sm font-medium">{name}</span>
    </a>
  );
};

export default TechBadge;