import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500">Experience</h2>

        {/* Aspyr Experience */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 mb-10">
          <h3 className="text-2xl font-semibold text-gray-100 mb-2">
            Software Development Intern - Espyr (An interview conducting startup)
          </h3>
          <p className="text-lg text-gray-300 mb-1">
            August 2024 - November 2024 | Remote
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
            <li>Engineered a scalable online interview platform using React.js and Spring Boot (Java), increasing user engagement by 35%.</li>
            <li>Implemented interviewee dashboard and blog feature, enhancing user experience.</li>
            <li>Utilized React.js for the front end, Java, Spring Boot for the backend, PostgreSQL for data storage, improving data retrieval speed by 20%.</li>
            <li>Designed and implemented RESTful APIs, enabling seamless data communication and reducing load times by 25%.</li>
            <li>Collaborated with other teams to achieve project milestones, resulting in the on-time delivery of all project phases.</li>
            <li>Gained mentorship from other engineers and learned to solve bugs in a software.</li>
          </ul>
        </div>

        {/* Amazon ML Summer School */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-100 mb-2">
            Apprentice - Amazon ML Summer School
          </h3>
          <p className="text-lg text-gray-300 mb-1">
            July 2024 - August 2024 | Remote
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
            <li>Ranked in the top 0.1 percent out of 35,000 applicants nationwide.</li>
            <li>Implemented ML models (classification and regression) under mentorship from Amazon scientists.</li>
            <li>Collaborated on ML Models using Python, focusing on data preprocessing, evaluation metrics, and scalable model deployment strategies.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
