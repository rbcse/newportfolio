import React from 'react';

const Skills = () => {
  const skills = {
    'Coding Languages': ['Python', 'C++', 'JavaScript'],
    'Backend': ['Node.js', 'Express.js', 'Spring Boot'],
    'Frontend': ['React', 'TailwindCSS', 'HTML', 'CSS', 'Bootstrap'],
    'Clouds & Databases': ['Postgres SQL', 'MongoDB'],
    'Core Subjects': ['OOPS', 'DBMS', 'OS'],
    'Methodologies': ['Agile', 'Scrum'],
    'Developer Tools': ['Postman', 'VS Code', 'GitHub'],
    'Soft Skills': ['Team Work', 'Fluent in English'],
  };

  return (
    <section id="skills" className="py-20 px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-gray-100 mb-4 border-b border-gray-600 pb-2">{category}</h3>
              <ul className="list-none space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-lg text-gray-300 flex items-center">
                    <span className="text-blue-400 mr-2">&bull;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
