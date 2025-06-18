import React from 'react';

const AIProjects = () => {
  const aiProjects = [
    {
      name: 'YThinker: YouTube Query Chatbot',
      techStack: 'LangChain, Flask, React, Tailwind, Groq LLM, Generative AI',
      description: [
        'Built a YouTube AI assistant using LangChain, FAISS, and Groq’s LLaMA-4 for transcript-based Q and A.',
        'Implemented a complete RAG pipeline with two languages support and real-time LLM translation.',
      ],
      videoLink: 'https://www.loom.com/share/48104d328888444bac94fecd88c4a938?sid=d1989dc9-28cb-483e-8391-e8b0d72a905c',
      githubLink: 'https://github.com/rbcse/YThinker',
    }
  ];

  return (
    <div className="space-y-12 mb-12">
      {aiProjects.map((project) => (
        <div key={project.name} className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-100 mb-2">{project.name}</h3>
          <p className="text-md text-gray-400 mb-4">
            <span className="font-medium text-blue-400">Tech Stack:</span> {project.techStack}
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {project.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 mt-6">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
              >
                View on GitHub
              </a>
            )}
            {project.videoLink && (
              <a
                href={project.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
              >
                Watch Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AIProjects;
