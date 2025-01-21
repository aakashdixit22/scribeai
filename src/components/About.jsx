import React from "react";

const About = () => {
  return (
    <div className="bg-transparent">
      <section className="py-12 pt-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Empowering Knowledge with AI-Driven Insights
                </h2>
                <p className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
                  We believe in simplifying the way you interact with information.  
                  Using state-of-the-art AI, our platform transforms your PDFs into  
                  dynamic learning resources. Whether it’s extracting insights,  
                  generating organized notes, or answering complex questions,  
                  we make it effortless to understand and retain knowledge.  
                  Join us on this journey to redefine how you learn and work.
                </p>
              </div>
              <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
                <div className="relative rounded-lg bg-slate-900 px-4 py-2 transition-colors group-hover:bg-slate-800">
                  <span className="relative z-10 font-medium text-sm text-white">
                    Learn More
                  </span>
                </div>
              </button>
            </div>
            <img
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src="/aboutImg.png"
              alt="About Us Image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
