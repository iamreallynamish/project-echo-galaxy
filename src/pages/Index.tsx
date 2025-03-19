
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section with image on the right and text on the left */}
        <section className="flex flex-col lg:flex-row w-full min-h-screen">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 md:px-10 lg:px-16 py-32">
            <div className="max-w-xl">
              <div className={`space-y-6 ${loaded ? 'animate-slide-down' : 'opacity-0'}`}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-tighter">
                  Portfolio
                </h1>
                
                <div className="space-y-8 mt-8">
                  <div>
                    <h2 className="text-lg md:text-xl font-light">Graphic Design</h2>
                    <p className="text-sm text-gray-400 mt-1">
                      A collection of selected projects showcasing my approach to design challenges across various mediums and contexts.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-lg md:text-xl font-light">Photography</h2>
                    <p className="text-sm text-gray-400 mt-1">
                      Capturing moments and perspectives through the lens, with a focus on minimalism and emotional storytelling.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-lg md:text-xl font-light">UI/UX Design</h2>
                    <p className="text-sm text-gray-400 mt-1">
                      Creating intuitive and aesthetically pleasing digital experiences that prioritize user needs and business goals.
                    </p>
                  </div>
                </div>
                
                <div className="pt-8">
                  <a 
                    href="mailto:contact@example.com" 
                    className="inline-flex items-center text-sm text-gray-300 hover:text-white gap-2 transition-all hover:gap-3"
                  >
                    Contact <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side image */}
          <div className="w-full lg:w-1/2 h-screen relative">
            <div className={`absolute inset-0 bg-gray-900 ${loaded ? 'animate-fade-out' : ''}`}></div>
            <img
              src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2070&auto=format&fit=crop"
              alt="Portfolio hero image"
              className={`w-full h-full object-cover ${loaded ? 'animate-fade-in' : 'opacity-0'}`}
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
