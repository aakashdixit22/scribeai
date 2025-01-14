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
          {/* Left Column - Now with responsive centering */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="space-y-8 max-w-xl">
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

              <p className="text-lg text-slate-300">
                Transform your PDFs into interactive knowledge bases. Ask
                questions, get insights, and create smart StickyNote powered by
                cutting-edge AI technology.
              </p>

              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
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
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main interface card with fixed height */}
              <div className="h-[450px] transform rounded-2xl bg-slate-800/90 p-6 shadow-2xl backdrop-blur-sm transition-all duration-1000">
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
                    {/* ... Rest of the notes section remains the same ... */}
                    <div className="border-b border-slate-700/50 p-3">
                      <div className="text-sm font-medium text-slate-300">
                        Smart Notes
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4">
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

                {/* Floating elements */}
                <div className="absolute -right-4 -top-4 animate-pulse">
                  <div className="m-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-3">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 m-2 rounded-lg bg-white p-3">
                  <Sparkles className="h-6 w-6 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;