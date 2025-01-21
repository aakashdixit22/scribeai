import React from "react";

const About = () => {
  return (
    <div className="bg-transparent">
      <section className="py-12 pt-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-white text-5xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Unlock the Power of AI for Smarter Note-Taking
                </h2>
                <p className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
                  Welcome to ScribeAI, the ultimate platform for turning static PDFs into dynamic, interactive learning resources. 
                  Designed for students, professionals, and lifelong learners, ScribeAI combines cutting-edge AI technology with 
                  user-friendly tools to simplify how you interact with information.
                </p>
                <p className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
                  Upload your PDFs and experience a whole new way of managing content. With our advanced text editor, 
                  you can effortlessly create, format, and customize notes. From bold and italicized text to headings, code blocks, 
                  and more, our editor is tailored to suit your unique needs. What truly sets us apart is our AI-powered note creation. 
                  Ask questions related to your PDFs directly in the editor, and let our intelligent system provide precise, 
                  context-driven answers to help you grasp complex concepts with ease.
                </p>
                
              </div>
              
            </div>
            <img
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src="/aboutImg.png"
              alt="About ScribeAI"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
