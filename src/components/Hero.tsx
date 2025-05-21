
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onCVClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick, onCVClick }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] bg-no-repeat bg-cover opacity-5"></div>
      <div className="text-center z-10 animate-fade-up">
        <p className="text-gray-300 mb-2">Hello I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-white">Your</span>{" "}
          <span className="text-portfolio-blue">Name</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8">Fullstack Developer</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button 
            variant="outline" 
            className="btn-primary"
            onClick={onCVClick}
          >
            Download CV
          </Button>
          <Button 
            className="btn-secondary"
            onClick={onContactClick}
          >
            Let's Talk
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-blue transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-blue transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
