import React from 'react';
import { CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
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

  return (
    <section id="skills" className="py-20 px-6 bg-portfolio-dark-blue/50">
      <div className="container mx-auto">
        <div className="section-title"> 
          <h1>My Skills</h1>
        </div>
        
        <div className="mt-10 flex justify-center">
          <div className="portfolio-card w-full max-w-3xl">
            {/* <h3 className="text-xl font-bold text-portfolio-blue mb-6 text-center">Skills</h3> */}
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
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
