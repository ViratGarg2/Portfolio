
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavBarProps {
  onNavClick: (section: string) => void;
  activeSection: string;
}

const NavBar: React.FC<NavBarProps> = ({ onNavClick, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to add background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300',
      isScrolled ? 'bg-portfolio-navy shadow-lg' : 'bg-transparent'
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-portfolio-blue">
          <span className="cursor-pointer" onClick={() => onNavClick('home')}>
            PORTFOLIO
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={cn(
                'nav-item',
                activeSection === item.id ? 'text-portfolio-blue' : ''
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
