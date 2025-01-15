import React from 'react';

const Contact = () => {
  return (
    <section className="bg-transparent">
      <div className="py-12 lg:py-20 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-6 text-4xl md:text-5xl tracking-tight font-extrabold text-center text-white">
          Contact Us
        </h2>
        <p className="mb-12 font-light text-center text-gray-400 sm:text-xl max-w-2xl mx-auto">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
        </p>
        
        <form action="#" className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 text-md rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400
                focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all duration-200 ease-in-out"
              placeholder="name@company.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block mb-2 text-md font-medium text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 text-md rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400
                focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all duration-200 ease-in-out"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-300">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full p-3 text-md rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400
                focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none
                transition-all duration-200 ease-in-out"
              placeholder="Leave a comment..."
              required
            />
          </div>
          
          <div className="flex justify-center mt-8">
          <button className=" group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
                  <div className="relative rounded-lg bg-slate-900 px-4 py-2 transition-colors group-hover:bg-slate-800">
                    <span className="relative z-10 font-medium text-sm text-white">
                      Send Message
                    </span>
                  </div>
                </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;