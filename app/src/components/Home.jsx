import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <p className="text-xl md:text-2xl font-light text-gray-300 animate-fade-in-up">Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-scale-in">
          RAHUL BIRAWAT
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-200 animate-fade-in-up delay-200">
          Software Developer | GenAI Enthusiast
        </p>
        <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 md:space-y-0 pt-6 animate-fade-in-up delay-400">
          <a
            href="https://www.linkedin.com/in/rahul-birawat-jain-5620ba250/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-lg md:text-xl"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rbcse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-lg md:text-xl"
          >
            GitHub
          </a>
          {/* See Resume Button */}
          <a
            href="https://drive.google.com/file/d/1NOZ6KhjXD3_sbZfwL7fhClbtDENoe6BY/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-lg md:text-xl"
          >
            See Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
