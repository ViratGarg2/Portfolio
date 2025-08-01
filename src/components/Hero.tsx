import React from 'react';
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface HeroProps {
  onContactClick: () => void;
  onCVClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Animation hooks
  const titleAnimation = useScrollAnimation('fade-down', { threshold: 0.2 });
  const imageAnimation = useScrollAnimation('zoom-in', { threshold: 0.2, animationDelay: 300 });
  const buttonsAnimation = useScrollAnimation('fade-up', { threshold: 0.2, animationDelay: 600 });
  const socialsAnimation = useScrollAnimation('fade-up', { threshold: 0.2, animationDelay: 900 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleCVClick = () => {
    window.open("/resume.pdf", "_blank")
  }

  // Generate floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 0.3 + 0.1,
  }))

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 relative">
       <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transition: "all 0.1s ease-out",
        }}
      >
        <div
          className={`w-5 h-5 rounded-full border-2 border-portfolio-blue transition-all duration-200 ${
            isHovering ? "scale-150 bg-portfolio-blue/20" : "scale-100"
          }`}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] bg-no-repeat bg-cover opacity-5"></div>
      
      <div className="text-center z-10">
        <div ref={titleAnimation.ref as React.RefObject<HTMLDivElement>} className={titleAnimation.className}>
          <p className="text-gray-300 mb-2">Hello I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Virat</span>{" "}
            <span className="text-portfolio-blue">Garg</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-2">Enthusiast Learner</h2>
        </div>

        <div 
          ref={imageAnimation.ref as React.RefObject<HTMLDivElement>} 
          className={`flex justify-center mb-8 ${imageAnimation.className}`}
        >
          <img
            src="/image2.jpeg"
            alt="Virat Garg"
            className="w-40 h-40 rounded-full object-cover border-4 border-portfolio-blue shadow-lg"
          />
        </div>

        <div 
          ref={buttonsAnimation.ref as React.RefObject<HTMLDivElement>} 
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-10 ${buttonsAnimation.className}`}
        >
          <Button 
            variant="outline" 
            className="btn-primary"
            onClick={handleCVClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Download CV
          </Button>
          <Button 
            className="btn-secondary"
            onClick={onContactClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Let's Talk
          </Button>
        </div>
        
        <div 
          ref={socialsAnimation.ref as React.RefObject<HTMLDivElement>} 
          className={`flex justify-center space-x-6 ${socialsAnimation.className}`}
        >
          <a 
            href="https://github.com/ViratGarg2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-portfolio-blue transition-colors"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/virat-garg-554b9a26a"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
