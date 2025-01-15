// import React from 'react';
// import { Github, Linkedin, Code } from 'lucide-react';


// const DeveloperCard = ({ name, designation, image, githubLink, linkedinLink }) => {
//   return (
//     <div className="relative group">
//       <div className="absolute -inset-0.5  rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-md"></div>
//       <div className="relative bg-zinc-600 rounded-2xl p-6  space-y-6 transform transition-all duration-300 hover:-translate-y-2">
//         <div className="flex flex-col items-center">
//           <div className="relative mb-6">
//             <img 
//               src={image} 
//               alt={name} 
//               className="w-60 h-60 object-cover rounded-3xl shadow-2xl hover:scale-110 transition duration-300"
//             />
//             <div className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 transform translate-x-2 translate-y-2">
//               <Code size={20} />
//             </div>
//           </div>
          
//           <div className="text-center">
//             <h2 className="text-2xl font-bold text-white mb-2  transition duration-300">{name}</h2>
//             <p className="text-gray-300 mb-4 text-sm uppercase tracking-wide">{designation}</p>
//           </div>
          
//           <div className="flex space-x-6 mt-4">
//             <a 
//               href={githubLink} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-125"
//             >
//               <Github size={28} />
//             </a>
//             <a 
//               href={linkedinLink} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-blue-400 hover:text-blue-600 transition-colors duration-300 transform hover:scale-125"
//             >
//               <Linkedin size={28} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DeveloperSection = () => {
//   const developers = [
//     {
//       name: "Aakash Dixit",
//       designation: "Full Stack Web Developer",
//       image: "./aakash.jpg",
//       githubLink: "https://github.com/aakashdixit22",
//       linkedinLink: "https://www.linkedin.com/in/aakash-dixit-72a276258"
//     },
//     {
//       name: "Abhay Dixit",
//       designation: "Full Stack Web Developer",
//       image: "./abhay.jpg",
//       githubLink: "https://github.com/abhaydixit07",
//       linkedinLink: "https://www.linkedin.com/in/abhay-dixit-546b85254"
//     }
//   ];

//   return (
//     <section className="bg-transparent py-20">
//       <div className="container mx-auto px-20">
//         <div className="text-center mb-12">
//         <h2 className="lg:text-5xl text-4xl md:text-5xl font-semibold text-gray-100 mb-6">Developers</h2>
          
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center max-w-5xl mx-auto">
//           {developers.map((dev, index) => (
//             <DeveloperCard key={index} {...dev} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DeveloperSection;

import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const DeveloperCard = ({ name, designation, image, githubLink, linkedinLink }) => {
  return (
    <div className="group">
      {/* Organic shape background */}
      <div className="relative">
        {/* Main content container with flowing shape */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Image with organic shape clip */}
          <div className="relative mb-6">
            <div className="w-56 h-56 overflow-hidden rounded-full  p-1">
              <div className="relative w-full h-full overflow-hidden rounded-full">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
            
            {/* Floating code icon */}
            <div className="absolute -bottom-2 bg-slate-800/90 rounded-full right-4 transform  transition-all duration-500 group-hover:rotate-0 group-hover:scale-110">
              <div className="bg-slate-800/90 p-3 rounded-full shadow-lg">
                <Code size={20} className="text-white" />
              </div>
            </div>
          </div>

          {/* Text content with flowing animation */}
          <div className="text-center relative z-10 transform transition-all duration-500 group-hover:translate-y-2">
            <h2 className="text-2xl font-bold bg-white bg-clip-text text-transparent mb-2">
              {name}
            </h2>
            <p className="text-gray-400 text-md font-medium tracking-wide">
              {designation}
            </p>
          </div>

          {/* Floating social links */}
          <div className="mt-6 flex items-center space-x-8">
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-all duration-500 hover:scale-125 hover:-translate-y-1 hover:rotate-6"
            >
              <Github className="w-6 h-6 text-gray-400 hover:text-white" />
            </a>
            <a 
              href={linkedinLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-all duration-500 hover:scale-125 hover:-translate-y-1 hover:-rotate-6"
            >
              <Linkedin className="w-6 h-6 text-blue-400 hover:text-blue-300" />
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
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-white bg-clip-text text-transparent pb-4">
            Developers
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {developers.map((dev, index) => (
            <DeveloperCard key={index} {...dev} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;