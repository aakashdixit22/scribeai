import React from 'react';
import Image from "next/image";

const Footer = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const footerLinks = [
    {href: '#hero', label: 'Home', id: 'hero'},
    { href: '#about', label: 'About', id: 'about' },
    { href: '#features', label: 'Features', id: 'features' },
    { href: '#developers', label: 'Developers', id: 'developers' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <div className='bg-transparent'>
      <footer className="pb-4 md:pb-8 lg:pb-10">
        <div className="mx-auto max-w-screen-xl text-center">
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex justify-center items-center text-2xl font-semibold text-white"
          >
                        
            
            
            
            <Image
              src="/logo.png"
              alt="AI PDF Notes Logo"
              width={48}
              height={48}
              className="mr-2"
              priority
            />
            ScribeAI
          </a>
          
          <ul className="flex flex-wrap justify-center items-center m-6 text-white">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="mr-4  md:mr-6 transition-colors duration-200 hover:text-slate-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="text-sm sm:text-center text-gray-400">
            © {new Date().getFullYear()} <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="hover:underline">ScribeAI</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;