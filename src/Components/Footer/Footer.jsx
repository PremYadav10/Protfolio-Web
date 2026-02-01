import React, { useEffect,useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
     const [isOpen,setIsOpen] = useState("");
     const [activeSection,setActiveSection] = useState("");
     const [isScrolled,setIsScrolled] = useState(false);
 
     // Detect scroll and change navbar background
     useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
 
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   // Smooth scroll function
   const handleFooterScroll = (sectionId) => {
     setActiveSection(sectionId);
     setIsOpen(false);
     const section = document.getElementById(sectionId);
     if (section) {
       section.scrollIntoView({ behavior: "smooth" });
     }
   };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">

        {/* Name / Logo */}

        <h2 className="text-xl font-semibold text-purple-500">Prem Kumar Yadav</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Experience", id: "experience" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleFooterScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/prem-kumar-yadav-011a76268" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/premyadav_10/#" },
            { icon : <FaGithub/>,link: "https://github.com/PremYadav10"}

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
