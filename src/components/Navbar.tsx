
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 transition-all duration-300',
        scrolled ? 'bg-[#FF0031]/80 backdrop-blur-md border-b border-black/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-base font-mono tracking-tighter hover:opacity-80 transition-opacity text-black"
        >
          MEDIA/ &gt; NAMISH//:
        </Link>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={cn(
                "text-sm font-mono text-black hover:opacity-80 transition-opacity",
                location.pathname === "/" && "font-bold"
              )}
            >
              HOME
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-sm font-mono text-black hover:opacity-80 transition-opacity",
                location.pathname === "/about" && "font-bold"
              )}
            >
              ABOUT
            </Link>
            <Link 
              to="/work" 
              className={cn(
                "text-sm font-mono text-black hover:opacity-80 transition-opacity",
                location.pathname === "/work" && "font-bold"
              )}
            >
              WORK
            </Link>
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
