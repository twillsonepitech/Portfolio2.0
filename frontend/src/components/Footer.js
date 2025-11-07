import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-10 pb-6 text-center text-sm text-gray-500 dark:text-gray-500">
      <p className="mb-2">
        Design inspiré de{' '}
        <a
          href="https://antfu.me"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 dark:hover:text-gray-400"
        >
          antfu.me
        </a>
      </p>
      <p>
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 dark:hover:text-gray-400"
          title="Licence Creative Commons - Attribution, usage non-commercial, partage dans les mêmes conditions"
        >
          CC BY-NC-SA 4.0
        </a>{' '}
        2021-PRÉSENT © Thomas Willson
      </p>
    </footer>
  );
};

export default Footer;