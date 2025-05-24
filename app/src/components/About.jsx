import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">About Me</h2>
        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            I am a passionate and results-driven Software Development Intern with a strong background in building scalable online platforms and implementing robust backend solutions. My experience spans across full-stack development, machine learning, and competitive programming.
          </p>
          <p>
            Ranked among the top 0.1% in the Amazon ML Summer School, I have a keen interest in leveraging technology to solve real-world problems and enhance user experiences. I thrive in collaborative environments and am committed to continuous learning and improvement.
          </p>
          <p>
            My technical expertise includes Python, C++, JavaScript, React.js, Spring Boot, Node.js, and various database technologies like PostgreSQL and MongoDB. I am proficient in Agile methodologies and developer tools like Postman, VS Code, and GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
