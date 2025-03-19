
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search, Grid, Menu } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [view, setView] = useState('grid');

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
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-base font-mono tracking-tighter hover:opacity-80 transition-opacity"
        >
          MEDIA/
        </Link>
        
        <div className="flex items-center space-x-4">
          <ToggleGroup type="single" value={view} onValueChange={(value) => value && setView(value)}>
            <ToggleGroupItem value="grid" aria-label="Grid view" className="border-none">
              <Grid size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="list" aria-label="List view" className="border-none">
              <Menu size={16} />
            </ToggleGroupItem>
          </ToggleGroup>
          
          <button className="p-1 hover:text-gray-400 transition-colors">
            <Search size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
