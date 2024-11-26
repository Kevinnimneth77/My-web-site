import React from 'react';

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-center gap-6">
        {['about', 'skills', 'projects', 'education', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="text-gray-300 hover:text-blue-400 capitalize transition-colors text-sm md:text-base"
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  );
}