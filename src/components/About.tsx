import React from 'react';
import { Award, FolderKanban } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="section-title">
          <h2 className="text-portfolio-blue text-lg font-semibold uppercase tracking-widest mb-2">About Me</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">Get To Know Me!</h1>
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
                <p className="text-gray-400">2+ Years Experience</p>
              </div>
            </div>
            <div className="portfolio-card flex items-center">
              <div className="mr-6">
                <FolderKanban className="w-12 h-12 text-portfolio-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Projects</h3>
                <p className="text-gray-400">10+ Completed Projects</p>
              </div>
            </div>
          </div>
          {/* About text */}
          <div className="text-gray-300 bg-portfolio-navy/60 rounded-2xl p-8 border-l-4 border-portfolio-blue shadow-lg flex flex-col gap-4 justify-center">
            <p className="mb-1 text-md">
              Hi! I'm <span className="text-portfolio-blue font-semibold">Virat Garg</span>, currently pursuing <span className="font-semibold">B.Tech in Computer Science & Engineering</span>.
            </p>
            <p className="mb-1">
              I'm passionate about building interactive, user-friendly applications and love optimizing code for performance.
            </p>
            <p className="mb-1">
              As an undergraduate researcher in <span className="text-portfolio-blue font-semibold">Information Retrieval</span>, I explore new techniques to make search and retrieval systems smarter and more efficient.
            </p>
            <p className="mb-1">
              Outside of tech, I love to travel and discover new places and cultures—it's a big source of inspiration for me.
            </p>
            <p className="mt-2 italic text-portfolio-light-blue">
              "Exploring new places and ideas, both in code and in the world, inspires my creativity."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
