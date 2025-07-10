import React from 'react';
import { CheckCircle } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Skills: React.FC = () => {
  // Animation hooks
  const titleAnimation = useScrollAnimation('fade-up', { threshold: 0.1 });
  const cardAnimation = useScrollAnimation('zoom-in', { threshold: 0.1 });

  const frontendSkills = [
    {name: 'C'},
    { name: 'C++' },
    { name: 'HTML' },
    { name: 'CSS'},
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'React'},
    { name: 'Tailwind' },
    { name: 'Node.js' },
    { name: 'SQL',  },
    { name: 'REST APIs', },
    {name : 'Python'},
    {name : 'Tensorflow'},
    {name : 'Flask'},
  ];

  const backendSkills = [
    { name: 'Node.js', level: 'Experienced' },
    { name: 'Express', level: 'Experienced' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'REST APIs', level: 'Experienced' },
    { name: 'Firebase', level: 'Intermediate' },
  ];

  // Creates delays for grid items to create a wave-like animation effect
  const getAnimationDelay = (index: number) => {
    // Create a wave pattern based on position
    return (index % 2 * 100) + Math.floor(index / 2) * 150;
  };

  return (
    <section id="skills" className="py-20 px-6 bg-portfolio-dark-blue/50">
      <div className="container mx-auto">
        <div 
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`section-title ${titleAnimation.className}`}
        > 
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-center">My Skills</h1>
          <div className="w-20 h-1 bg-portfolio-blue mx-auto mt-4"></div>
        </div>
        
        <div className="mt-10 flex justify-center">
          <div 
            ref={cardAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`portfolio-card w-full max-w-3xl rounded-xl border border-portfolio-blue/30 bg-portfolio-navy/50 p-8 shadow-lg ${cardAnimation.className}`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {frontendSkills.map((skill, index) => {
                // Create a unique animation for each skill
                const skillAnimation = useScrollAnimation('fade-up', { 
                  threshold: 0.05, 
                  animationDelay: getAnimationDelay(index) 
                });
                
                return (
                  <div 
                    key={index} 
                    ref={skillAnimation.ref as React.RefObject<HTMLDivElement>}
                    className={`skill-card flex items-center space-x-2 p-3 rounded-lg bg-portfolio-navy/80 border border-portfolio-blue/20 hover:border-portfolio-blue/50 transition-all duration-300 ${skillAnimation.className}`}
                  >
                    <CheckCircle className="text-portfolio-blue w-5 h-5" />
                    <div>
                      <h4 className="font-medium">{skill.name}</h4>
                      <small className="text-gray-400">{skill.level}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
