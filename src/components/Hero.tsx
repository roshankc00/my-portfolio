import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          <span className="block">Hi, I'm Roshan Karki</span>
          <span className="block text-blue-400 mt-2">Backend Developer</span>
        </h1>
        <p className="mt-3 text-base sm:text-lg md:text-xl max-w-md mx-auto">
          Specializing in building robust and scalable backend solutions with modern technologies.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="rounded-md bg-blue-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-md bg-gray-700 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
