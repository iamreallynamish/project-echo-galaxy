
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import TypingAnimation from '@/components/TypingAnimation';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const SinglePageLayout = () => {
  const [loaded, setLoaded] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  // Initial projects to display (6)
  const initialProjects = projects.slice(0, 6);
  // All projects when "View More" is clicked
  const allProjects = projects;

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleViewMore = () => {
    setShowAllProjects(true);
    setViewMode('list');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar homeRef={homeRef} aboutRef={aboutRef} workRef={workRef} />
      
      {/* Home Section */}
      <section 
        ref={homeRef} 
        id="home" 
        className="flex-1 flex items-center justify-center min-h-screen pt-20"
      >
        <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col items-center justify-center text-center">
          <div className={`space-y-8 max-w-2xl ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono tracking-tight mb-8">
              <TypingAnimation text="NAMISH//:" colorChange={true} />
            </h1>
            
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              At just 16, I've worked with some of YouTube India's top creators, crafting high-impact visuals that boost engagement. From thumbnails to banners, I blend creativity with strategy to make content pop. Now freelancing, I help brands and creators level up their visuals with sleek, scroll-stopping designs.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section 
        ref={aboutRef} 
        id="about" 
        className="flex-1 flex flex-col min-h-screen pt-20"
      >
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
          <div className={`space-y-8 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-lg font-mono tracking-tight" style={{ fontSize: "18px" }}>
              ABOUT//:
            </h1>
            
            <div className="space-y-6">
              <p className="text-sm">
                I am a digital artist and designer specializing in creating minimalist visual experiences. 
                My work explores the intersection of technology, art, and design through a variety of mediums.
              </p>
              
              <p className="text-sm">
                With a background in both visual design and programming, I create projects that combine technical 
                precision with artistic vision. My approach focuses on simplicity and clarity, removing excess to 
                highlight what's essential.
              </p>
              
              <p className="text-sm">
                Each project in my portfolio represents an exploration of form, color, and composition, often 
                inspired by architectural principles and natural patterns.
              </p>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-sm font-mono mb-4">CONTACT</h2>
              <p className="text-sm">
                For collaborations or inquiries:<br />
                email@example.com
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Work Section */}
      <section 
        ref={workRef} 
        id="work" 
        className="flex-1 flex flex-col min-h-screen pt-20"
      >
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className={`space-y-8 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex justify-between items-center">
              <h1 className="font-mono tracking-tight" style={{ fontSize: "18px" }}>
                WORK//:
              </h1>
              
              {showAllProjects && (
                <Button 
                  onClick={() => setViewMode(prev => prev === 'grid' ? 'list' : 'grid')} 
                  variant="outline" 
                  className="text-white border-white hover:bg-white/10"
                >
                  {viewMode === 'grid' ? 'LIST VIEW' : 'GRID VIEW'}
                </Button>
              )}
            </div>
            
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(showAllProjects ? allProjects : initialProjects).map((project, index) => (
                  <Link 
                    to={`/project/${project.id}`} 
                    key={project.id} 
                    className={cn(
                      "group cursor-pointer hover-lift opacity-0",
                      loaded && "animate-fade-in"
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-mono">{project.title}</h3>
                        <span className="text-xs text-white/70">{project.date}</span>
                      </div>
                      <p className="text-xs mt-1 text-white/70">{project.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {allProjects.map((project, index) => (
                  <Link 
                    to={`/project/${project.id}`} 
                    key={project.id} 
                    className={cn(
                      "flex gap-4 items-center p-3 hover:bg-white/5 transition-colors rounded-md opacity-0",
                      loaded && "animate-fade-in"
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square w-16 h-16 overflow-hidden">
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-mono">{project.title}</h3>
                        <span className="text-xs text-white/70">{project.date}</span>
                      </div>
                      <p className="text-xs mt-1 text-white/70">{project.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            
            {!showAllProjects && (
              <div className="flex justify-center mt-8">
                <Button 
                  onClick={handleViewMore} 
                  className="bg-white text-black hover:bg-white/80"
                >
                  VIEW MORE
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SinglePageLayout;
