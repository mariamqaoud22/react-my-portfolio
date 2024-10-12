
    import  { useState, useEffect } from 'react';

    export default function Navbar() {


      const handleContactClick = () => {
        window.location.href = 'mailto:mariamqaoud22@gmail.com';
      };
    
      
        const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
return (
    <>
      <nav
        id="navbar"
        className={`navbar fixed top-0 left-0 w-full z-50 ${
          scrolled
            ? 'bg-gradient-to-b from-primary to-secondary'
            : 'bg-bg bg-opacity-90 backdrop-filter backdrop-blur-sm'
        } text-text px-8 md:px-16 lg:px-24 transition-colors duration-300`}
      >
        <div className="container py-2 flex justify-center items-center md:justify-between">
          <div className="text-2xl font-bold hidden md:inline">Mariam</div>
          <div className="space-x-6">
            <a href="#home" className="hover:text-primary"> Home</a>
            <a href="#about" className="hover:text-primary"> About Me</a>
            <a href="#services" className="hover:text-primary"> Services</a>
            <a href="#projects" className="hover:text-primary"> Projects</a>
            <a href="#contact" className="hover:text-primary"> Contact</a>
          </div>
          <button className="btn bg-gradient-to-r from-primary to-secondary text-text hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full" onClick={handleContactClick}>
            Connect With Me
          </button>
        </div>
      </nav>
    </>
  );










}
