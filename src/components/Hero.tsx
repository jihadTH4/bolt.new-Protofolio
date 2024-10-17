import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Your Name</h1>
        <p className="text-xl md:text-2xl mb-8">Junior Frontend Developer</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 bg-white text-blue-500 rounded-full hover:bg-blue-100 transition-colors">
            <GithubIcon size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 bg-white text-blue-500 rounded-full hover:bg-blue-100 transition-colors">
            <LinkedinIcon size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="p-2 bg-white text-blue-500 rounded-full hover:bg-blue-100 transition-colors">
            <MailIcon size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;