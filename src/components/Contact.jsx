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
            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium text-white bg-slate-800 rounded-lg
                hover:bg-slate-500 focus:ring-4 focus:ring-blue-500/50 focus:outline-none
                transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;