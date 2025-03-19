
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          Portfolio
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "text-sm tracking-wide transition-all relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-current after:transition-all",
              isActive('/') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
            )}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={cn(
              "text-sm tracking-wide transition-all relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-current after:transition-all",
              isActive('/projects') ? 'after:w-full' : 'after:w-0 hover:after:w-full'
            )}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
