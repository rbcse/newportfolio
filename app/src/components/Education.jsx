import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Education</h2>
        
        {/* B.Tech Education */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 mb-10">
          <h3 className="text-2xl font-semibold text-gray-100 mb-2">
            Sardar Vallabhai National Institute of Technology, Surat
          </h3>
          <p className="text-lg text-gray-300 mb-1">
            B.Tech in Computer Science & Engineering
          </p>
          <p className="text-md text-gray-400 mb-4">
            2022 - 2026
          </p>
          <p className="text-xl font-bold text-blue-400">
            CGPA: 9.32/10
          </p>
        </div>

        {/* JEE Scores */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 mb-10">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">Competitive Exams</h3>
          <div className="space-y-4">
            <div>
              <p className="text-lg text-gray-300 font-medium">JEE ADVANCED - 2022</p>
              <p className="text-md text-gray-400">AIR - 10804</p>
            </div>
            <div>
              <p className="text-lg text-gray-300 font-medium">JEE MAINS - 2022</p>
              <p className="text-md text-gray-400">AIR - 6677, Percentile - 99.273</p>
            </div>
          </div>
        </div>

        {/* 12th Grade Education */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 mb-10">
          <h3 className="text-2xl font-semibold text-gray-100 mb-2">
            12th Grade
          </h3>
          <p className="text-lg text-gray-300 mb-1">
            Science Maths
          </p>
          <p className="text-md text-gray-400 mb-1">
            Shri Pragya Public School, Bijainagar
          </p>
          <p className="text-md text-gray-400 mb-4">
            2021 - 2022
          </p>
          <p className="text-xl font-bold text-blue-400">
            Percentage: 95%
          </p>
        </div>

        {/* 10th Grade Education */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-100 mb-2">
            10th Grade
          </h3>
          <p className="text-md text-gray-400 mb-1">
            Shri Pragya Public School, Bijainagar
          </p>
          <p className="text-md text-gray-400 mb-4">
            2019 - 2020
          </p>
          <p className="text-xl font-bold text-blue-400">
            Percentage: 94%
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;
