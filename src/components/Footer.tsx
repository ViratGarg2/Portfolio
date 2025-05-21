
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavClick: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-portfolio-navy bg-opacity-80 backdrop-blur-sm py-12 px-6 text-white border-t border-gray-700/30">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">YOUR NAME</h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className="hover:text-portfolio-blue transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-blue transition-transform hover:scale-110 duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-blue transition-transform hover:scale-110 duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
