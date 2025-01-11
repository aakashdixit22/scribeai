// import React, { useEffect, useState } from 'react';

// const Hero = () => {
//   const [shuffle, setShuffle] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShuffle((prev) => !prev);
//     }, 3000); // Change every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="mx-auto h-full px-4 py-24 md:py-30 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
//       <div className="flex flex-col items-center justify-between lg:flex-row">
//         <div>
//           <div className="lg:max-w-xl lg:pr-5">
//             <p className="flex text-sm uppercase text-blue-600">
//               <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1z" clipRule="evenodd" />
//               </svg>
//               An agency for high growth startups
//             </p>
//             <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-blue-600 sm:text-7xl sm:leading-snug">
//               We make you look
//               <span className="my-1 inline-block border-b-8 border-blue-600 bg-orange-400 px-4 font-bold text-white">different</span>
//             </h2>
//             <p className="text-base text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque it.</p>
//           </div>
//           <div className="mt-10 flex flex-col items-center md:flex-row">
//             <a href="/" className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto">
//               Stream Now
//             </a>
//             <a href="/" className="group inline-flex items-center font-semibold text-blue-600">
//               Watch how it works
//               <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </a>
//           </div>
//         </div>
//         <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
//           <div className={`mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none transition-transform duration-1000 ${shuffle ? 'rotate-6 scale-105' : '-rotate-6 scale-95'}`}>
//             <div className="flex w-96 flex-wrap">
//               <div className="h-48 w-1/2 rounded-full rounded-br-none bg-red-400 transition-all duration-1000 ${shuffle ? 'translate-x-2 translate-y-2' : '-translate-x-2 -translate-y-2'}"></div>
//               <div className="h-48 w-1/2 rounded-[6rem] rounded-br-none rounded-tl-none bg-violet-400 transition-all duration-1000 ${shuffle ? '-translate-x-2 translate-y-2' : 'translate-x-2 -translate-y-2'}"></div>
//               <div className="h-48 w-1/2 rounded-full rounded-b-none rounded-br-none bg-yellow-400 transition-all duration-1000 ${shuffle ? 'translate-x-2 -translate-y-2' : '-translate-x-2 translate-y-2'}"></div>
//               <div className="h-48 w-1/2 rounded-full rounded-t-none rounded-br-none bg-indigo-600 transition-all duration-1000 ${shuffle ? '-translate-x-2 -translate-y-2' : 'translate-x-2 translate-y-2'}"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React, { useState, useEffect } from 'react';

// const Hero = () => {
//   const [colors, setColors] = useState([
//     'bg-red-400',
//     'bg-violet-400',
//     'bg-yellow-400',
//     'bg-indigo-600'
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setColors(prevColors => {
//         const newColors = [...prevColors];
//         // Shuffle the colors array
//         for (let i = newColors.length - 1; i > 0; i--) {
//           const j = Math.floor(Math.random() * (i + 1));
//           [newColors[i], newColors[j]] = [newColors[j], newColors[i]];
//         }
//         return newColors;
//       });
//     }, 3000); // Shuffle every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="mx-auto h-full px-4 py-24 md:py-30 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
//       <div className="flex flex-col items-center justify-between lg:flex-row">
//         <div className="mb-10 lg:mb-0 lg:max-w-lg">
//           <div className="lg:max-w-xl lg:pr-5">
//             <p className="flex text-sm uppercase text-blue-600">
//               <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 inline h-5 w-5 animate-spin-slow" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
//               </svg>
//               An agency for high growth startups
//             </p>
//             <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-blue-600 sm:text-7xl sm:leading-snug">
//               We make you look
//               <span className="my-1 inline-block border-b-8 border-blue-600 bg-gradient-to-r from-orange-400 to-pink-500 px-4 font-bold text-white transition-all duration-300 hover:from-pink-500 hover:to-orange-400">
//                 different
//               </span>
//             </h2>
//             <p className="text-base text-gray-700">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque it.
//             </p>
//           </div>
//           <div className="mt-10 flex flex-col items-center md:flex-row">
//             <a href="/" className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-gradient-to-r from-blue-600 to-blue-800 px-6 font-medium tracking-wide text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none md:mr-4 md:mb-0 md:w-auto">
//               Stream Now
//             </a>
//             <a href="/" aria-label="" className="group inline-flex items-center font-semibold text-blue-600">
//               Watch how it works
//               <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </a>
//           </div>
//         </div>
//         <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
//           <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
//             <div className="flex w-96 flex-wrap">
//               {colors.map((color, index) => (
//                 <div
//                   key={index}
//                   className={`h-48 w-1/2 transition-all duration-700 ${color} ${
//                     index === 0 ? 'rounded-full rounded-br-none' :
//                     index === 1 ? 'rounded-[6rem] rounded-br-none rounded-tl-none' :
//                     index === 2 ? 'rounded-full rounded-b-none rounded-br-none' :
//                     'rounded-full rounded-t-none rounded-br-none'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="absolute -left-10 -top-20 animate-bounce">
//             <div className="h-28 w-28 rounded-xl bg-white p-4 shadow-lg">
//               <svg className="h-full w-full text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
// import React, { useEffect, useState } from 'react';

// const Hero = () => {
//   const [shuffle, setShuffle] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShuffle((prev) => !prev);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen w-full bg-gradient-to-br from-blue-600 via-purple-500 to-indigo-700 overflow-hidden">
//       <div className="container mx-auto flex h-full flex-col items-center justify-center px-6 md:flex-row md:justify-between">
//         <div className="text-center md:text-left">
//           <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-lg">
//             <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
//             </svg>
//             Elevate Your Startup
//           </p>
//           <h1 className="mb-6 text-6xl font-extrabold leading-tight tracking-tight text-white sm:text-7xl">
//             Bold <span className="text-yellow-300">Innovations</span>
//           </h1>
//           <p className="mb-8 text-lg text-white/90">
//             Transform your ideas into reality with our cutting-edge solutions for startups.
//           </p>
//           <div className="flex flex-col items-center gap-4 sm:flex-row">
//             <a href="/" className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black shadow-lg transition-transform hover:scale-105">
//               Get Started
//             </a>
//             <a href="/" className="group inline-flex items-center text-white">
//               <span className="underline">Learn More</span>
//               <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </a>
//           </div>
//         </div>
//         <div className={`relative mt-10 hidden md:block transform transition-transform duration-1000 ${shuffle ? 'rotate-3 scale-105' : '-rotate-3 scale-95'}`}>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="h-40 w-40 rounded-2xl bg-red-400 shadow-lg transition-all duration-1000 ${shuffle ? 'translate-y-2' : '-translate-y-2'}"></div>
//             <div className="h-40 w-40 rounded-2xl bg-blue-400 shadow-lg transition-all duration-1000 ${shuffle ? '-translate-y-2' : 'translate-y-2'}"></div>
//             <div className="h-40 w-40 rounded-2xl bg-yellow-400 shadow-lg transition-all duration-1000 ${shuffle ? 'translate-x-2' : '-translate-x-2'}"></div>
//             <div className="h-40 w-40 rounded-2xl bg-green-400 shadow-lg transition-all duration-1000 ${shuffle ? '-translate-x-2' : 'translate-x-2'}"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React, { useState, useEffect } from 'react';

// const Hero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrolled, setScrolled] = useState(0);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.pageYOffset;
//       setScrolled(position);
//     };

//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-slate-900">
//       {/* Animated background elements */}
//       <div 
//         className="absolute inset-0 opacity-20"
//         style={{
//           transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
//         }}
//       >
//         <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-500 blur-3xl"></div>
//         <div className="absolute right-20 top-40 h-72 w-72 rounded-full bg-purple-500 blur-3xl"></div>
//         <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-pink-500 blur-3xl"></div>
//       </div>

//       {/* Main content */}
//       <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
//         <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
//           {/* Left column */}
//           <div className="flex flex-col justify-center">
//             <div className="animate-fade-in-up">
//               <div className="inline-flex items-center rounded-full bg-slate-800 px-4 py-2 text-sm text-blue-400">
//                 <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-blue-400"></span>
//                 Next Generation Agency
//               </div>
              
//               <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
//                 We craft
//                 <span className="relative ml-4 inline-block">
//                   <span className="relative z-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                     digital
//                   </span>
//                   <svg className="absolute -bottom-2 left-0 h-3 w-full text-blue-400/20" viewBox="0 0 100 10" preserveAspectRatio="none">
//                     <path d="M0 5 Q 25 0, 50 5 Q 75 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none"/>
//                   </svg>
//                 </span>
//                 <br />
//                 experiences
//               </h1>
              
//               <p className="mt-6 max-w-xl text-lg text-slate-300">
//                 Transform your digital presence with our cutting-edge solutions. 
//                 We blend creativity with technology to deliver exceptional results.
//               </p>

//               <div className="mt-10 flex flex-wrap gap-4">
//                 <button className="group relative overflow-hidden rounded-lg bg-blue-500 px-6 py-3 text-white transition-transform hover:scale-105">
//                   <span className="relative z-10">Start Project</span>
//                   <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
//                 </button>
                
//                 <button className="group flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-white transition-colors hover:border-blue-500">
//                   <span>Watch Demo</span>
//                   <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
//                   </svg>
//                 </button>
//               </div>

//               <div className="mt-10 flex items-center gap-8">
//                 <div className="flex -space-x-2">
//                   {[1, 2, 3, 4].map((i) => (
//                     <div key={i} className={`h-10 w-10 rounded-full border-2 border-slate-900 bg-gradient-to-br from-slate-${i*100} to-slate-${i*100+100}`}></div>
//                   ))}
//                 </div>
//                 <div className="text-sm text-slate-400">
//                   <span className="font-bold text-white">300+</span> Projects Delivered
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right column */}
//           <div className="relative flex items-center justify-center lg:justify-end">
//             <div className="relative w-full max-w-lg">
//               {/* Abstract shapes */}
//               <div className="absolute -right-4 top-4 h-72 w-72 animate-blob rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
//               <div className="animation-delay-2000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
//               <div className="animation-delay-4000 absolute -left-4 top-20 h-72 w-72 animate-blob rounded-full bg-pink-500 opacity-20 mix-blend-multiply blur-xl filter"></div>

//               {/* Main visual element */}
//               <div className="relative">
//                 <div className="group relative rounded-2xl bg-slate-800/50 p-8 backdrop-blur-sm">
//                   <div className="grid grid-cols-2 gap-4">
//                     {[1, 2, 3, 4].map((i) => (
//                       <div
//                         key={i}
//                         className="aspect-square rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 p-4 transition-transform hover:scale-105"
//                       >
//                         <div className="h-full w-full rounded-md bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm"></div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   {/* Floating elements */}
//                   <div className="absolute -right-4 -top-4 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-4 shadow-lg">
//                     <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
//                     </svg>
//                   </div>
                  
//                   <div className="absolute -bottom-4 -left-4 rounded-lg bg-white p-4 shadow-lg">
//                     <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"/>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats bar */}
//         <div className="mt-20 grid grid-cols-2 gap-8 rounded-2xl bg-slate-800/50 p-8 backdrop-blur-sm lg:grid-cols-4">
//           {[
//             { label: 'Active Users', value: '20K+' },
//             { label: 'Global Clients', value: '100+' },
//             { label: 'Team Members', value: '50+' },
//             { label: 'Awards Won', value: '25+' }
//           ].map((stat, i) => (
//             <div key={i} className="text-center">
//               <div className="text-2xl font-bold text-white">{stat.value}</div>
//               <div className="text-sm text-slate-400">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from 'react';

const AnimatedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left column */}
          <div className="flex flex-col justify-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center rounded-full bg-slate-800/50 px-4 py-2 text-sm text-blue-400 backdrop-blur-sm">
                <span className="mr-2 inline-block h-2 w-2 animate-ping rounded-full bg-blue-400"></span>
                Next Generation Agency
              </div>
              
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                We craft
                <span className="relative ml-4 inline-block">
                  <span className="animate-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent bg-300">
                    digital
                  </span>
                </span>
                <br />
                experiences
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Transform your digital presence with our cutting-edge solutions. 
                We blend creativity with technology to deliver exceptional results.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="group relative overflow-hidden rounded-lg bg-blue-500 px-6 py-3 text-white transition-all hover:scale-105">
                  <span className="relative z-10">Start Project</span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </button>
                
                <button className="group flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-white transition-all hover:border-blue-500">
                  <span>Watch Demo</span>
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right column - Modern Animated Graphic */}
          <div className="relative flex items-center justify-center lg:justify-end perspective-1000">
            <div 
              className="relative w-full max-w-lg transition-transform duration-300"
              style={{
                transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`
              }}
            >
              {/* Main circular element */}
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border-2 border-blue-500/30">
                <div className="absolute h-4 w-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
              </div>

              {/* Orbiting elements */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-purple-500/20"
                  style={{
                    animationDuration: `${20 + i * 5}s`,
                    transform: `rotate(${120 * i}deg)`
                  }}
                >
                  <div 
                    className="absolute h-6 w-6 -translate-y-1/2 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/50"
                    style={{
                      left: `${50 + Math.sin(i * Math.PI / 3) * 40}%`
                    }}
                  ></div>
                </div>
              ))}

              {/* Floating geometric shapes */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                >
                  <div className={`h-8 w-8 rotate-45 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm
                    ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg'}`}></div>
                </div>
              ))}

              {/* Central floating sphere */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-sm"></div>
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-80 shadow-lg shadow-blue-500/50"></div>
              </div>

              {/* Pulsing rings */}
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping-slow"
                  style={{
                    animationDelay: `${i * 1}s`
                  }}
                >
                  <div 
                    className="h-48 w-48 rounded-full border border-blue-500/20"
                    style={{
                      transform: `scale(${0.5 + i * 0.2})`
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero;