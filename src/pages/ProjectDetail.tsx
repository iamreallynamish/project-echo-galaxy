
import { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [loaded, setLoaded] = useState(false);
  const project = projects.find(p => p.id === id);
  const navigate = useNavigate();
  
  // Get more projects (excluding current one)
  const moreProjects = projects.filter(p => p.id !== id).slice(0, 3);
  
  useEffect(() => {
    if (project) {
      document.title = `${project.title} | NAMISH//`;
    }
    setLoaded(true);
    window.scrollTo(0, 0);
  }, [id, project]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
        <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
        <p className="mb-8 text-center">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="flex items-center gap-2 text-sm border border-white px-4 py-2"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <BackgroundAnimation />
      
      {/* Navigation Bar */}
      <header className="fixed w-full z-10 top-0 p-6 md:p-10 flex justify-between items-center">
        <div>
          <Link to="/" className="text-lg md:text-xl font-mono tracking-tight">
            NAMISH//
          </Link>
        </div>
        <nav className="flex gap-6 md:gap-10 items-center">
          <Link to="/" className="text-sm font-mono text-white hover:opacity-80 transition-opacity">
            Gallery
          </Link>
          <Link to="/#about" className="text-sm font-mono text-white hover:opacity-80 transition-opacity">
            About
          </Link>
          <Link to="/#contact" className="text-sm font-mono text-white hover:opacity-80 transition-opacity">
            Contact
          </Link>
        </nav>
      </header>
      
      <main className="flex-1 pt-24 pb-12 px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side - Project Information */}
          <div className="px-6 md:px-10 pt-10 flex flex-col">
            <div className={`space-y-12 max-w-xl ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
              {/* Project Title */}
              <div>
                <div className="text-lg md:text-xl font-mono tracking-tight">
                  NAMISH//
                </div>
                <h1 className="text-2xl md:text-3xl font-mono uppercase mt-1">
                  {project.title} <span className="text-white/50">#{project.id}</span>
                </h1>
              </div>
              
              {/* Project Description */}
              <p className="text-sm text-white/90">
                {project.details}
              </p>
              
              {/* Project Details Section with Icon */}
              <div className="border-t border-white/20 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                    <span className="text-xs">i</span>
                  </div>
                  <h2 className="text-sm font-mono uppercase">PROJECT DETAILS</h2>
                </div>
                
                <div className="grid grid-cols-[100px_1fr] gap-2 text-sm mb-6">
                  <span className="text-white/70">Software</span>
                  <span>{project.software}</span>
                </div>
              </div>
              
              {/* About The Project Section with Icon */}
              <div className="border-t border-white/20 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                    <span className="text-xs">i</span>
                  </div>
                  <h2 className="text-sm font-mono uppercase">ABOUT THE PROJECT</h2>
                </div>
                <p className="text-sm text-white/90">
                  {project.description}
                </p>
              </div>
              
              {/* Tags Section with Icon */}
              <div className="border-t border-white/20 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                    <span className="text-xs">#</span>
                  </div>
                  <h2 className="text-sm font-mono uppercase">TAGS</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs bg-white/10 rounded-none uppercase"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Date Section with Icon */}
              <div className="border-t border-white/20 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                    <span className="text-xs">📅</span>
                  </div>
                  <h2 className="text-sm font-mono uppercase">DATE</h2>
                </div>
                <p className="text-sm">{project.date}</p>
              </div>
              
              {/* Browse Section */}
              <div className="border-t border-white/20 pt-8">
                <h2 className="text-sm font-mono uppercase mb-4">BROWSE</h2>
                
                <div className="grid grid-cols-3 gap-3">
                  {moreProjects.map((project) => (
                    <Link 
                      to={`/project/${project.id}`} 
                      key={project.id} 
                      className="aspect-square overflow-hidden"
                    >
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Main Image */}
          <div className={`bg-white/5 flex items-center justify-center ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="w-full h-full flex items-center justify-center p-6 md:p-10">
              <img 
                src={project.images[0]} 
                alt={project.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
