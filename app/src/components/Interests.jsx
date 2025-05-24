import React from 'react';

const Interests = () => {
  const myInterests = [
    'Competitive Programming',
    'Machine Learning Research',
    'Full-stack Development',
    'Reading Tech Blogs',
    'Exploring New Technologies',
    'Problem Solving',
    'Generative AI'
  ];

  return (
    <section id="interests" className="py-20 px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-lime-500">Interests</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {myInterests.map((interest) => (
            <span
              key={interest}
              className="bg-gray-800 text-gray-200 px-5 py-2 rounded-full text-lg shadow-md border border-gray-700 hover:bg-gray-700 transition-colors duration-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
