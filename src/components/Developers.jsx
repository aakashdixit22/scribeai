import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';


const DeveloperCard = ({ name, designation, image, githubLink, linkedinLink }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5  rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-md"></div>
      <div className="relative bg-zinc-600 rounded-2xl p-6  space-y-6 transform transition-all duration-300 hover:-translate-y-2">
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <img 
              src={image} 
              alt={name} 
              className="w-60 h-60 object-cover rounded-3xl shadow-2xl hover:scale-110 transition duration-300"
            />
            <div className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 transform translate-x-2 translate-y-2">
              <Code size={20} />
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2  transition duration-300">{name}</h2>
            <p className="text-gray-300 mb-4 text-sm uppercase tracking-wide">{designation}</p>
          </div>
          
          <div className="flex space-x-6 mt-4">
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-125"
            >
              <Github size={28} />
            </a>
            <a 
              href={linkedinLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-125"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const DeveloperSection = () => {
  const developers = [
    {
      name: "Aakash Dixit",
      designation: "Full Stack Web Developer",
      image: "./aakash.jpg",
      githubLink: "https://github.com/aakashdixit22",
      linkedinLink: "https://www.linkedin.com/in/aakash-dixit-72a276258"
    },
    {
      name: "Abhay Dixit",
      designation: "Full Stack Web Developer",
      image: "./abhay.jpg",
      githubLink: "https://github.com/abhaydixit07",
      linkedinLink: "https://www.linkedin.com/in/abhay-dixit-546b85254"
    }
  ];

  return (
    <section className="bg-transparent py-20">
      <div className="container mx-auto px-20">
        <div className="text-center mb-12">
        <h2 className="lg:text-5xl text-4xl md:text-5xl font-semibold text-gray-100 mb-6">Developers</h2>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center max-w-5xl mx-auto">
          {developers.map((dev, index) => (
            <DeveloperCard key={index} {...dev} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;