
import { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Tag, Calendar, Info, Smartphone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [loaded, setLoaded] = useState(false);
  const project = projects.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const navigate = useNavigate();
  
  // Get more projects (excluding current one)
  const moreProjects = projects.filter(p => p.id !== id).slice(0, 3);
  
  // Create dummy refs for the Navbar component
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      setSelectedImage(project.images[0]);
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
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar homeRef={homeRef} aboutRef={aboutRef} workRef={workRef} />
      
      <main className="flex-1 pt-24 pb-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={handleBackClick} 
            className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </button>
          
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${loaded ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Left Side - Image Gallery (Larger Images) */}
            <div className="space-y-4">
              {/* Main Image (Larger) */}
              <div className="aspect-video bg-black overflow-hidden">
                <img 
                  src={selectedImage} 
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <ScrollArea className="h-24 w-full">
                <div className="flex gap-2 pb-2">
                  {project.images.map((image, index) => (
                    <div 
                      key={index}
                      onClick={() => handleImageClick(image)}
                      className={`h-20 w-32 flex-shrink-0 cursor-pointer transition-all overflow-hidden ${selectedImage === image ? 'ring-2 ring-white' : 'opacity-70 hover:opacity-100'}`}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - view ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            
            {/* Right Side - Project Details */}
            <div className="space-y-6">
              <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-mono uppercase">{project.title} #{project.id}</h1>
              </div>
              
              <div className="space-y-8">
                {/* About The Project */}
                <div className="space-y-2">
                  <h2 className="text-sm font-mono uppercase flex items-center gap-2">
                    <Info size={14} /> About The Project
                  </h2>
                  <p className="text-sm text-gray-300">{project.details}</p>
                </div>
                
                {/* Software */}
                <div className="space-y-2">
                  <h2 className="text-sm font-mono uppercase flex items-center gap-2">
                    <Smartphone size={14} /> Software
                  </h2>
                  <p className="text-sm text-gray-300">{project.software}</p>
                </div>
                
                {/* Categories */}
                <div className="space-y-2">
                  <h2 className="text-sm font-mono uppercase flex items-center gap-2">
                    <Tag size={14} /> Categories
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs bg-white/10 rounded-sm"
                      >
                        {category.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Date */}
                <div className="space-y-2">
                  <h2 className="text-sm font-mono uppercase flex items-center gap-2">
                    <Calendar size={14} /> Date
                  </h2>
                  <p className="text-sm text-gray-300">{project.date}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* More Projects Section */}
          <div className="mt-20 pt-10 border-t border-white/10">
            <h2 className="text-xl font-mono mb-8">More Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {moreProjects.map((moreProject, index) => (
                <Link 
                  to={`/project/${moreProject.id}`} 
                  key={moreProject.id} 
                  className={cn(
                    "group cursor-pointer opacity-0",
                    loaded && "animate-fade-in"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={moreProject.thumbnail} 
                      alt={moreProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-mono">{moreProject.title}</h3>
                      <span className="text-xs text-white/70">#{moreProject.id}</span>
                    </div>
                    <p className="text-xs mt-1 text-white/70">{moreProject.description}</p>
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

export default ProjectDetail;
