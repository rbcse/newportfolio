import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">Get in Touch</h2>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 space-y-6">
          <p className="text-lg text-gray-300">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3 text-xl">
              <Mail size={24} className="text-blue-400" />
              <a href="mailto:rahuljain10159@gmail.com" className="text-gray-200 hover:text-blue-300 transition-colors duration-300">
                rahuljain10159@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-xl">
              <Phone size={24} className="text-blue-400" />
              <a href="tel:+917665718067" className="text-gray-200 hover:text-blue-300 transition-colors duration-300">
                +91-7665718067
              </a>
            </div>
            <div className="flex items-center space-x-3 text-xl">
              <MapPin size={24} className="text-blue-400" />
              <span className="text-gray-200">Ajmer, Rajasthan, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
