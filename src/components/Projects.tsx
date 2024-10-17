import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Frontend Mentor Project 1",
    description: "A responsive landing page built with HTML and CSS.",
    image: "https://source.unsplash.com/random/800x600?website",
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "Frontend Mentor Project 2",
    description: "An interactive pricing component using JavaScript.",
    image: "https://source.unsplash.com/random/800x600?coding",
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "Personal Project",
    description: "A weather app built with React and a weather API.",
    image: "https://source.unsplash.com/random/800x600?weather",
    liveLink: "#",
    codeLink: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 flex items-center">
                    Live Demo <ExternalLink size={16} className="ml-1" />
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 flex items-center">
                    View Code <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;