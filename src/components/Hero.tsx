import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6"
    >
      <div className="max-w-6xl mx-auto text-center px-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
          <span className="block">Hi, I'm Roshan Karki</span>
          <span className="block text-blue-400 mt-3">Full Stack Engineer</span>
        </h1>
        <p className="mx-auto max-w-4xl text-lg sm:text-xl md:text-2xl leading-relaxed tracking-wide">
          I’m Roshan Karki, a full-stack developer with over 2 years of diverse
          experience working across the UK, Germany, and Nepal. I have a strong
          foundation in building scalable and user-friendly web applications,
          rapidly adapting to new technologies and project requirements.
          <br />
          <br />
          Throughout my career, I have successfully contributed to international
          projects, collaborating with cross-functional teams to deliver robust
          solutions. I am passionate about writing clean, maintainable code and
          continuously improving both my technical and teamwork skills to create
          impactful digital products.
        </p>
        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <a
            href="#projects"
            className="rounded-md bg-blue-500 px-10 py-4 text-lg font-semibold text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-md bg-gray-700 px-10 py-4 text-lg font-semibold text-white shadow-md hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
