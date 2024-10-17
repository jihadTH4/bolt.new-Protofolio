import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Your Name</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
          <a href="#projects" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Projects</a>
          <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;