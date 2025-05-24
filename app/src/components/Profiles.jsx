import React from 'react';
import { Linkedin, Github, Code, Dribbble } from 'lucide-react'; // Using Dribbble as a placeholder for GeeksforGeeks/LeetCode icon

const Profiles = () => {
  const profileLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rahul-birawat-jain-5620ba250/', icon: Linkedin },
    { name: 'Portfolio', url: 'https://yourportfolio.com', icon: Dribbble }, // Replace with your actual portfolio URL
    { name: 'LeetCode', url: 'https://leetcode.com/u/rahul_6677/', icon: Code }, // Replace with your actual LeetCode profile
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/u22csjmn2/', icon: Code }, // Replace with your actual GFG profile
    { name: 'Codeforces', url: 'https://codeforces.com/profile/csrahul955', icon: Code }, // Replace with your actual GFG profile
    { name: 'GitHub', url: 'https://github.com/rbcse', icon: Github }, // Assuming this is your GitHub
  ];

  return (
    <section id="profiles" className="py-20 px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">My Profiles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileLinks.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col items-center space-y-4 hover:bg-gray-700 transition-colors duration-300"
            >
              <profile.icon size={48} className="text-blue-400" />
              <span className="text-xl font-semibold text-gray-100">{profile.name}</span>
            </a>
          ))}
        </div>
        <div className="mt-10 text-gray-400 text-lg">
          <p>LeetCode: Knight, Max Rating (1853)</p>
          <p>GeeksForGeeks: Institute Rank 43</p>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
