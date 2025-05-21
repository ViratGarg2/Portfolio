
import React from 'react';
import { cn } from '@/lib/utils';
import { Home, User, Code2, FolderKanban, Mail } from 'lucide-react';

interface MobileNavProps {
  onNavClick: (section: string) => void;
  activeSection: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ onNavClick, activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'portfolio', label: 'Portfolio', icon: FolderKanban },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 md:hidden z-50">
      <div className="bg-portfolio-navy/90 backdrop-blur-md rounded-full px-2 py-2 flex items-center shadow-lg border border-gray-700/30">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className={cn(
              'mobile-nav-item',
              activeSection === item.id ? 'mobile-nav-active' : ''
            )}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
