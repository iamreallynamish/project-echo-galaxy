
import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [loaded, setLoaded] = useState(false);
  const project = projects.find(p => p.id === id);
  
  // Create dummy refs for the Navbar component
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
        <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
        <p className="mb-8 text-center">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="flex items-center gap-2 text-sm border border-white px-4 py-2"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar homeRef={homeRef} aboutRef={aboutRef} workRef={workRef} />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Project Header */}
        <div className="relative w-full h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          
          <div className="absolute left-0 top-0 w-full h-full z-20 flex flex-col justify-end p-6 md:p-10">
            <div className="max-w-7xl mx-auto w-full">
              <div className={`opacity-0 ${loaded ? 'animate-slide-up' : ''}`}>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.categories.map((category, index) => (
                    <span 
                      key={index}
                      className="text-xs uppercase tracking-wider py-1 px-2 border border-white/30 backdrop-blur-sm text-white/80"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold mb-2">
                  {project.title.toUpperCase()} #{project.id}
                </h1>
                
                <p className="text-lg md:text-xl mb-6 md:mb-10 max-w-3xl text-gray-300">
                  {project.description}
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 text-sm">
                  <div>
                    <span className="block text-gray-400 mb-1">Date</span>
                    <span>{project.date}</span>
                  </div>
                  
                  <div>
                    <span className="block text-gray-400 mb-1">Project ID</span>
                    <span>#{project.id}</span>
                  </div>
                  
                  <div>
                    <span className="block text-gray-400 mb-1">Category</span>
                    <span>{project.categories[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-20">
          <div className={`opacity-0 ${loaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl">{project.details}</p>
              
              <div className="my-20 h-[1px] w-full bg-gray-800" />
              
              <div className="mt-12">
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all"
                >
                  <ArrowLeft size={16} /> Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
