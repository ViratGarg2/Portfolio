
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Experienced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'React', level: 'Experienced' },
    { name: 'Bootstrap', level: 'Experienced' },
    { name: 'Tailwind', level: 'Intermediate' },
    { name: 'Next.js', level: 'Intermediate' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 'Experienced' },
    { name: 'Express', level: 'Experienced' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'REST APIs', level: 'Experienced' },
    { name: 'Firebase', level: 'Intermediate' },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-portfolio-dark-blue/50">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>Skills I Have</h2>
          <h1>My Skills</h1>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="portfolio-card">
            <h3 className="text-xl font-bold text-portfolio-blue mb-6 text-center">Frontend Development</h3>
            <div className="grid grid-cols-2 gap-x-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <CheckCircle className="icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-gray-400">{skill.level}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="portfolio-card">
            <h3 className="text-xl font-bold text-portfolio-blue mb-6 text-center">Backend Development</h3>
            <div className="grid grid-cols-2 gap-x-6">
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <CheckCircle className="icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-gray-400">{skill.level}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
