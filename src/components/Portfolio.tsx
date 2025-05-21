
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent, 
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Store',
      description: 'A frontend website where you can add or remove products from the cart. Using React & Redux Toolkit.',
      image: '/placeholder.svg',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 2,
      title: 'Book Store API',
      description: 'An API for a Book store built with Node.js, Express, MongoDB, bcrypt & JWT.',
      image: '/placeholder.svg',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 3,
      title: 'Authentication System',
      description: 'This is an authentication system built with Node.js, Express, MongoDB, passport.js & bcrypt.',
      image: '/placeholder.svg',
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>My Recent Work</h2>
          <h1>Portfolio</h1>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="portfolio-card group overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-portfolio-blue/30"
            >
              <div className="mb-4 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <p className="text-gray-400">{project.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="btn-primary w-full">Github</Button>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button className="btn-secondary w-full">Live Demo</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
