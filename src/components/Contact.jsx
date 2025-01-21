import React, { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-transparent">
      <div className="py-12 lg:py-20 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-6 text-5xl tracking-tight font-bold text-center text-white">
          Contact Us
        </h2>
        <p className="mb-12 font-light text-center text-gray-400 sm:text-xl max-w-2xl mx-auto">
          Transform your PDFs with AI-powered notes and summaries. Need help
          with document analysis? Want to learn about advanced features? Have
          suggestions for improvements? Our support team is ready to assist you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-md font-medium text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 text-md rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400
                focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all duration-200 ease-in-out"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-md font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 text-md rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400
                focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all duration-200 ease-in-out"
              placeholder="name@xyz.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-md font-medium text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
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
              disabled={isLoading}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]"
            >
              <div className="relative rounded-lg bg-slate-900 px-4 py-2 transition-colors group-hover:bg-slate-800">
                <span className="relative z-10 font-medium text-sm text-white">
                  {isLoading ? "Sending..." : "Send Message"}
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
