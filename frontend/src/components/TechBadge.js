import React from 'react';

const TechBadge = ({ name, logoUrl, url }) => {
  return (
    <a
      href={url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-105 hover:shadow-md"
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