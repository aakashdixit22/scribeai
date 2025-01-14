// import React, { useState, useEffect } from 'react';
// import { FileText, Brain, Sparkles, StickyNote, ArrowRight } from 'lucide-react';

// const Hero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-slate-900">
//       {/* Animated background gradient */}
//       <div
//         className="absolute inset-0 opacity-30"
//         style={{
//           transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
//         }}
//       >
//         <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-blue-500 blur-3xl"></div>
//         <div className="absolute right-20 top-40 h-96 w-96 rounded-full bg-purple-500 blur-3xl"></div>
//       </div>

//       {/* Main content */}
//       <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
//         <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
//           {/* Left column */}
//           <div className="flex flex-col justify-center">
//             <div className="animate-fade-in-up">
//               <div className="inline-flex items-center rounded-full bg-slate-800 px-4 py-2 text-sm text-blue-400">
//                 <Sparkles className="mr-2 h-4 w-4" />
//                 Powered by Gemini AI
//               </div>

//               <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
//                 Transform your PDFs into
//                 <span className="relative ml-2 block">
//                   <span className="relative z-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                     intelligent StickyNote
//                   </span>
//                 </span>
//               </h1>

//               <p className="mt-6 max-w-xl text-lg text-slate-300">
//                 Upload any PDF and let AI help you analyze, understand, and create smart StickyNote.
//                 Ask questions, get insights, and organize your learning across all your devices.
//               </p>

//               <div className="mt-10 flex flex-wrap gap-4">
//                 <button className="group relative overflow-hidden rounded-lg bg-blue-500 px-8 py-3 text-white transition-transform hover:scale-105">
//                   <span className="relative z-10">Try for Free</span>
//                   <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
//                 </button>

//                 <button className="group flex items-center gap-2 rounded-lg border border-slate-700 px-8 py-3 text-white transition-colors hover:border-blue-500">
//                   <span>See How it Works</span>
//                   <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//                 </button>
//               </div>

//               {/* Feature highlights */}
//               <div className="mt-12 grid grid-cols-2 gap-6">
//                 {[
//                   { icon: FileText, title: 'Any PDF', desc: 'Upload and analyze any document' },
//                   { icon: Brain, title: 'AI-Powered', desc: 'Get smart insights and summaries' },
//                   { icon: StickyNote, title: 'Rich StickyNote', desc: 'Create formatted StickyNote easily' },
//                   { icon: Sparkles, title: 'Cross-Platform', desc: 'Access from any device' }
//                 ].map((feature, i) => (
//                   <div key={i} className="rounded-lg bg-slate-800/50 p-4 backdrop-blur-sm">
//                     <feature.icon className="h-6 w-6 text-blue-400" />
//                     <div className="mt-2 font-semibold text-white">{feature.title}</div>
//                     <div className="text-sm text-slate-400">{feature.desc}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right column */}
//           <div className="relative flex items-center justify-center lg:justify-end">
//             <div className="relative w-full max-w-lg">
//               {/* Decorative elements */}
//               <div className="absolute -right-4 top-4 h-72 w-72 animate-blob rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-xl"></div>
//               <div className="animation-delay-2000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-xl"></div>

//               {/* Main visual element */}
//               <div className="relative">
//                 <div className="group relative rounded-2xl bg-slate-800/50 p-6 backdrop-blur-sm">
//                   {/* Mock PDF analysis interface */}
//                   <div className="space-y-4">
//                     <div className="flex items-center gap-4">
//                       <div className="h-12 w-12 rounded-lg bg-blue-500/20 p-3">
//                         <FileText className="h-full w-full text-blue-400" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="h-4 w-3/4 rounded bg-slate-700"></div>
//                         <div className="mt-2 h-3 w-1/2 rounded bg-slate-700"></div>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <div className="h-3 w-full rounded bg-slate-700"></div>
//                       <div className="h-3 w-5/6 rounded bg-slate-700"></div>
//                       <div className="h-3 w-4/6 rounded bg-slate-700"></div>
//                     </div>

//                     <div className="flex gap-2">
//                       <div className="h-8 w-8 rounded-lg bg-purple-500/20 p-2">
//                         <Brain className="h-full w-full text-purple-400" />
//                       </div>
//                       <div className="flex-1 space-y-2">
//                         <div className="h-3 w-5/6 rounded bg-slate-700"></div>
//                         <div className="h-3 w-3/4 rounded bg-slate-700"></div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Floating elements */}
//                   <div className="absolute -right-4 -top-4 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-3">
//                     <Sparkles className="h-6 w-6 text-white" />
//                   </div>

//                   <div className="absolute -bottom-4 -left-4 rounded-lg bg-white p-3">
//                     <StickyNote className="h-6 w-6 text-blue-500" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats bar */}
//         <div className="mt-20 grid grid-cols-2 gap-8 rounded-2xl bg-slate-800/50 p-8 backdrop-blur-sm lg:grid-cols-4">
//           {[
//             { label: 'Documents Analyzed', value: '100K+' },
//             { label: 'Active Users', value: '50K+' },
//             { label: 'StickyNote Created', value: '500K+' },
//             { label: 'Time Saved', value: '1M+ hrs' }
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

import React, { useState, useEffect } from "react";
import {
  FileText,
  Brain,
  Sparkles,
  StickyNote,
  ArrowRight,
  MessageSquare,
  Check,
  Loading,
  ChevronDown,
  PenLine,
} from "lucide-react";

// Custom floating animation component
const FloatingElement = ({ children, delay = 0, className = "" }) => {
  return (
    <div
      className={`animate-floating ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
      if (currentStep === 1) {
        setTimeout(() => setShowResponse(true), 500);
      } else {
        setShowResponse(false);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [currentStep]);

  return (
    <div className="relative min-h-screen bg-transparent">
      
      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="absolute left-1/2 top-8 -translate-x-1/2 transform">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-slate-300">Powered by Gemini AI</span>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold tracking-tight text-white lg:text-7xl">
                Smart PDF
                <span className="relative mt-2 block">
                  <span className="relative inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Analysis with AI
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 h-3 w-full text-blue-400/20"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 25 0, 50 5 Q 75 10, 100 5"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              <p className="max-w-xl text-lg text-slate-300">
                Transform your PDFs into interactive knowledge bases. Ask
                questions, get insights, and create smart StickyNote powered by
                cutting-edge AI technology.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]">
                  <div className="relative rounded-lg bg-slate-900 px-6 py-3 transition-colors group-hover:bg-slate-800">
                    <span className="relative z-10 font-medium text-white">
                      Start Analyzing
                    </span>
                  </div>
                </button>

                <button className="group flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-white transition-all hover:border-blue-400">
                  <span>Watch Demo</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main interface card with fixed height */}
              <div className="h-[450px] transform rounded-2xl bg-slate-800/90 p-6 shadow-2xl backdrop-blur-sm transition-all duration-1000">
                {/* Note-taking interface */}
                <div className="flex h-full flex-col">
                  {/* Document header */}
                  <div className="mb-4 flex items-center justify-between rounded-lg bg-slate-900/50 p-3">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-400" />
                      <span className="font-medium text-slate-200">
                        research-paper.pdf
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">12 pages</span>
                      <div className="h-4 w-px bg-slate-700"></div>
                      <StickyNote className="h-4 w-4 text-slate-400" />
                    </div>
                  </div>

                  {/* Split view */}
                  <div className="grid flex-1 grid-cols-2 gap-4 overflow-hidden rounded-lg bg-slate-900/30">
                    {/* PDF preview side */}

                    {/* Notes & AI assistance side */}
                    <div className="flex flex-col">
                      <div className="border-b border-slate-700/50 p-3">
                        <div className="text-sm font-medium text-slate-300">
                          Smart Notes
                        </div>
                      </div>

                      <div className="flex-1 overflow-y-auto p-4">
                        {/* Notes section */}
                        {currentStep === 0 && (
                          <div className="animate-fadeIn space-y-4">
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                              <PenLine className="h-4 w-4" />
                              <span>Taking notes...</span>
                            </div>
                            <div className="space-y-2">
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className="rounded-lg bg-slate-800/50 p-3"
                                >
                                  <div className="h-3 w-[90%] rounded bg-slate-700"></div>
                                  <div className="mt-2 h-3 w-[75%] rounded bg-slate-700"></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* AI Q&A section */}
                        {currentStep === 1 && (
                          <div className="animate-fadeIn space-y-4">
                            <div className="flex justify-end">
                              <div className="max-w-[90%] rounded-lg rounded-tr-sm bg-blue-500/20 p-3">
                                <p className="text-sm text-slate-200">
                                  What are the key findings?
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Brain className="mt-1 h-4 w-4 text-purple-400" />
                              <div className="rounded-lg rounded-tl-sm bg-slate-800 p-3">
                                <p className="text-sm text-slate-300">
                                  According to the paper, the main findings
                                  indicate...
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Summary section */}
                        {currentStep === 2 && (
                          <div className="animate-fadeIn rounded-lg bg-slate-800/50 p-4">
                            <div className="mb-3 flex items-center gap-2">
                              <Sparkles className="h-4 w-4 text-blue-400" />
                              <span className="text-sm font-medium text-slate-200">
                                AI Summary
                              </span>
                            </div>
                            <div className="space-y-2">
                              {[...Array(4)].map((_, i) => (
                                <div
                                  key={i}
                                  className="h-3 w-full rounded bg-slate-700/50"
                                ></div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col border-r border-slate-700/50">
                      <div className="border-b border-slate-700/50 p-3">
                        <div className="text-sm font-medium text-slate-300">
                          Document Preview
                        </div>
                      </div>
                      <div className="flex-1 space-y-3 p-4">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="space-y-2">
                            <div className="h-3 w-full rounded bg-slate-700/50"></div>
                            <div className="h-3 w-[85%] rounded bg-slate-700/50"></div>
                            <div className="h-3 w-[90%] rounded bg-slate-700/50"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -right-4 -top-4 animate-pulse">
                  <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-3 m-2">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-lg bg-white p-3 m-2">
                  <Sparkles className="h-6 w-6 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700/50 p-8 lg:grid-cols-4">
            {[
              { value: '1M+', label: 'Documents Analyzed' },
              { value: '100K+', label: 'Active Users' },
              { value: '5M+', label: 'Questions Answered' },
              { value: '99.9%', label: 'Accuracy Rate' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;

// Add these styles to your globals.css or tailwind.config.js
