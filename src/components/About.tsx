
import React from 'react';
import { Award, FolderKanban } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>Get To Know</h2>
          <h1>About Me</h1>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* About cards */}
          <div className="flex flex-col space-y-6">
            <div className="portfolio-card flex items-center">
              <div className="mr-6">
                <Award className="w-12 h-12 text-portfolio-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Experience</h3>
                <p className="text-gray-400">X+ Years Experience</p>
              </div>
            </div>
            
            <div className="portfolio-card flex items-center">
              <div className="mr-6">
                <FolderKanban className="w-12 h-12 text-portfolio-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Projects</h3>
                <p className="text-gray-400">X+ Completed Projects</p>
              </div>
            </div>
          </div>
          
          {/* About text */}
          <div className="text-gray-300">
            <p className="mb-4">
              Full Stack Developer passionate about developing and optimizing interactive, user-friendly 
              applications. Full understanding of entire web development process (design, development, deployment).
            </p>
            <p className="mb-4">
              Continuously looking for discovering, evaluating, and learning many techniques that help me improve
              the performance and quality of code that make web applications faster.
            </p>
            <p>
              [Add more about your background, education, or any other relevant professional information here]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
