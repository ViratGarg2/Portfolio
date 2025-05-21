
import React, { useState, useRef, useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import NavBar from '@/components/NavBar';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    let ref;
    switch (section) {
      case 'home':
        ref = homeRef;
        break;
      case 'about':
        ref = aboutRef;
        break;
      case 'skills':
        ref = skillsRef;
        break;
      case 'portfolio':
        ref = portfolioRef;
        break;
      case 'contact':
        ref = contactRef;
        break;
      default:
        ref = homeRef;
    }
    
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scroll to determine active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      if (homeRef.current && scrollPosition < homeRef.current.offsetTop + homeRef.current.offsetHeight) {
        setActiveSection('home');
      } else if (aboutRef.current && scrollPosition < aboutRef.current.offsetTop + aboutRef.current.offsetHeight) {
        setActiveSection('about');
      } else if (skillsRef.current && scrollPosition < skillsRef.current.offsetTop + skillsRef.current.offsetHeight) {
        setActiveSection('skills');
      } else if (portfolioRef.current && scrollPosition < portfolioRef.current.offsetTop + portfolioRef.current.offsetHeight) {
        setActiveSection('portfolio');
      } else if (contactRef.current) {
        setActiveSection('contact');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-dark-blue">
      <NavBar onNavClick={scrollToSection} activeSection={activeSection} />
      
      <div ref={homeRef}>
        <Hero 
          onContactClick={() => scrollToSection('contact')} 
          onCVClick={() => console.log('Download CV clicked')}
        />
      </div>
      
      <div ref={aboutRef}>
        <About />
      </div>
      
      <div ref={skillsRef}>
        <Skills />
      </div>
      
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      
      <div ref={contactRef}>
        <Contact />
      </div>
      
      <Footer onNavClick={scrollToSection} />
      <MobileNav onNavClick={scrollToSection} activeSection={activeSection} />
    </div>
  );
};

export default Index;
