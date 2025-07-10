
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
    <footer className="bg-portfolio-blue py-12 px-6 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Virat Garg</h2>
          <div className="flex justify-center space-x-8 mb-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className="hover:text-portfolio-dark-blue transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/ViratGarg2" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-dark-blue transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/virat-garg-554b9a26a" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-dark-blue transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-sm">
            © {new Date().getFullYear()} Virat Garg. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
