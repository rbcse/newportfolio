import React from 'react';

const Skills = () => {
  const skills = {
    'Coding Languages': {
      items: ['Python', 'C++', 'JavaScript'],
      bgColorClass: 'bg-blue-800 hover:bg-blue-700'
    },
    'Backend': {
      items: ['Node.js', 'Express.js', 'Spring Boot'],
      bgColorClass: 'bg-indigo-800 hover:bg-indigo-700'
    },
    'Frontend': {
      items: ['React', 'TailwindCSS', 'HTML', 'CSS', 'Bootstrap'],
      bgColorClass: 'bg-green-800 hover:bg-green-700'
    },
    'Clouds & Databases': {
      items: ['Postgres SQL', 'MongoDB'],
      bgColorClass: 'bg-purple-800 hover:bg-purple-700'
    },
    'Core Subjects': {
      items: ['OOPS', 'DBMS', 'OS'],
      bgColorClass: 'bg-red-800 hover:bg-red-700'
    },
    'Methodologies': {
      items: ['Agile', 'Scrum'],
      bgColorClass: 'bg-yellow-800 hover:bg-yellow-700'
    },
    'Developer Tools': {
      items: ['Postman', 'VS Code', 'GitHub'],
      bgColorClass: 'bg-teal-800 hover:bg-teal-700'
    },
    'Soft Skills': {
      items: ['Team Work', 'Fluent in English'],
      bgColorClass: 'bg-orange-800 hover:bg-orange-700'
    },
  };

  return (
    <section id="skills" className="py-20 px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, data]) => (
            <div key={category} className={`${data.bgColorClass} p-6 rounded-lg shadow-lg border border-gray-700 transition-colors duration-300`}>
              <h3 className="text-xl font-semibold text-gray-100 mb-4 border-b border-gray-600 pb-2">{category}</h3>
              <ul className="list-none space-y-2">
                {data.items.map((item) => (
                  <li key={item} className="text-lg text-gray-200 flex items-center">
                    <span className="text-white mr-2">&bull;</span> {item}
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
