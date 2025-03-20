
import { useState, useEffect, RefObject } from 'react';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

interface NavbarProps {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  workRef: RefObject<HTMLDivElement>;
}

const Navbar = ({ homeRef, aboutRef, workRef }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      if (workRef.current && scrollPosition >= workRef.current.offsetTop) {
        setActiveSection('work');
      } else if (aboutRef.current && scrollPosition >= aboutRef.current.offsetTop) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [aboutRef, homeRef, workRef]);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 transition-all duration-300',
        scrolled ? 'bg-[#FF0031]/80 backdrop-blur-md border-b border-black/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <button 
          onClick={() => scrollToSection(homeRef)} 
          className="text-base font-mono tracking-tighter hover:opacity-80 transition-opacity text-black"
        >
          NAMISH//:
        </button>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection(homeRef)} 
              className={cn(
                "text-sm font-mono text-black hover:opacity-80 transition-opacity",
                activeSection === "home" && "font-bold"
              )}
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection(aboutRef)} 
              className={cn(
                "text-sm font-mono text-black hover:opacity-80 transition-opacity",
                activeSection === "about" && "font-bold"
              )}
            >
              ABOUT
            </button>
            <button 
              onClick={() => scrollToSection(workRef)} 
              className={cn(
                "text-sm font-mono text-black hover:opacity-80 transition-opacity",
                activeSection === "work" && "font-bold"
              )}
            >
              WORK
            </button>
          </nav>
          
          <button className="p-1 hover:text-gray-800 transition-colors text-black">
            <Search size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
