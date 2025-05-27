import React from 'react';

const Skills = () => {
  const skills = {
    'Coding Languages': {
      items: ['Python', 'C++', 'JavaScript'],
      bgColorClass: 'bg-blue-200 hover:bg-blue-100' // Light blue
    },
    'Backend': {
      items: ['Node.js', 'Express.js', 'Spring Boot'],
      bgColorClass: 'bg-indigo-200 hover:bg-indigo-100' // Light indigo
    },
    'Frontend': {
      items: ['React', 'TailwindCSS', 'HTML', 'CSS', 'Bootstrap'],
      bgColorClass: 'bg-green-200 hover:bg-green-100' // Light green
    },
    'Clouds & Databases': {
      items: ['Postgres SQL', 'MongoDB'],
      bgColorClass: 'bg-purple-200 hover:bg-purple-100' // Light purple
    },
    'Core Subjects': {
      items: ['OOPS', 'DBMS', 'OS'],
      bgColorClass: 'bg-red-200 hover:bg-red-100' // Light red
    },
    'Methodologies': {
      items: ['Agile', 'Scrum'],
      bgColorClass: 'bg-yellow-200 hover:bg-yellow-100' // Light yellow
    },
    'Developer Tools': {
      items: ['Postman', 'VS Code', 'GitHub'],
      bgColorClass: 'bg-teal-200 hover:bg-teal-100' // Light teal
    },
    'Soft Skills': {
      items: ['Team Work', 'Fluent in English'],
      bgColorClass: 'bg-orange-200 hover:bg-orange-100' // Light orange
    },
  };

  return (
    <section id="skills" className="py-20 px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, data]) => (
            <div key={category} className={`${data.bgColorClass} p-6 rounded-lg shadow-lg border border-gray-300 transition-colors duration-300`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-400 pb-2">{category}</h3>
              <ul className="list-none space-y-2">
                {data.items.map((item) => (
                  <li key={item} className="text-lg text-gray-700 flex items-center">
                    <span className="text-gray-900 mr-2">&bull;</span> {item}
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
