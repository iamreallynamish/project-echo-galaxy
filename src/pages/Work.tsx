
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { mediaItems } from '@/data/MediaData';

const Work = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#FF0031] text-black font-mono">
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className={`space-y-8 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-lg md:text-xl font-mono tracking-tight mb-8">
              WORK
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaItems.map((item) => (
                <Link 
                  to={`/project/${item.id}`} 
                  key={item.id} 
                  className="group cursor-pointer hover-lift"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-sm font-mono">{item.title}</h3>
                    <p className="text-xs mt-1 text-black/70">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Work;
