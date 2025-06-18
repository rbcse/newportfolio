import React, { useState } from 'react';
import AIProjects from './AIProjects'; // Ensure AIProjects.jsx is in the same directory as this file

const Projects = () => {
  const [activeTab, setActiveTab] = useState('development');

  const developmentProjects = [
    {
      name: 'Trip Wise: Trip Planner',
      techStack: 'Mongo DB, Express JS, NodeJS, React JS, Tailwind CSS',
      description: [
        'Developed a full-stack trip planning platform enabling users to visualize and manage trips with dynamic maps, date-based destination sequencing, and interactive travel graphs.',
        'Implemented modular React components including AddToMap, TripGraph, and TripSequence, improving user experience and engagement through intuitive UI and real-time feedback (Toast notifications).',
        'Integrated RESTful APIs and efficient state management to support destination filtering, trip cancellation, and sequence validation within date constraints.',
      ],
      visitLink: 'https://tripwise-trip.netlify.app/',
    },
    {
      name: 'QuicLearn: An educational website',
      techStack: 'Mongo DB, Express JS, NodeJS, React JS, Razorpay Payment Gateway',
      description: [
        'Designed and built a responsive platform with cross-device compatibility using React.js and CSS.',
        'Clean UI, Implemented User Authentication by JWT Tokens, Dynamic Course Searching with filters, User friendly Quiz platform and also Notes uploading feature using Multer JS.',
        'Implemented Razorpay Payment gateway in test mode for the payments of course purchasing.',
      ],
      visitLink: 'https://quiclearneducation.netlify.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Projects & Hackathons</h2>

        <div className="flex justify-center mb-10 space-x-4">
          <button
            onClick={() => setActiveTab('development')}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300
              ${activeTab === 'development' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}
          >
            Development Projects
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300
              ${activeTab === 'ai' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}
          >
            AI Projects
          </button>
        </div>

        {activeTab === 'development' && (
          <div className="space-y-12 mb-12">
            {developmentProjects.map((project) => (
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
                {project.visitLink && (
                  <a
                    href={project.visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    Visit Project
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'ai' && (
          <AIProjects />
        )}

    
      </div>
    </section>
  );
};

export default Projects;
