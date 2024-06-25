import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', JSON.stringify(true));
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', JSON.stringify(false));
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-3 py-2 m-3 shadow-sm absolute top-0 right-0 rounded bg-white dark:bg-neutral-800 text-gray-800 dark:text-slate-100"
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
