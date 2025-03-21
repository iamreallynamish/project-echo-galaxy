
import { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Smartphone, Tag, Calendar, Info } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import { ScrollArea } from '@/components/ui/scroll-area';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [loaded, setLoaded] = useState(false);
  const project = projects.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const navigate = useNavigate();
  
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
            {/* Left Side - Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[4/3] bg-black overflow-hidden">
                <img 
                  src={selectedImage} 
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <ScrollArea className="h-20 w-full">
                <div className="flex gap-2 pb-2">
                  {project.images.map((image, index) => (
                    <div 
                      key={index}
                      onClick={() => handleImageClick(image)}
                      className={`h-16 w-24 flex-shrink-0 cursor-pointer transition-all overflow-hidden ${selectedImage === image ? 'ring-2 ring-white' : 'opacity-70 hover:opacity-100'}`}
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
                
                {/* Camera Data */}
                {project.camera && (
                  <div className="space-y-2">
                    <h2 className="text-sm font-mono uppercase flex items-center gap-2">
                      <Camera size={14} /> Camera
                    </h2>
                    <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-300">
                      {project.camera.focalLength && (
                        <>
                          <div>Focal Length</div>
                          <div>{project.camera.focalLength}</div>
                        </>
                      )}
                      {project.camera.aperture && (
                        <>
                          <div>Aperture</div>
                          <div>{project.camera.aperture}</div>
                        </>
                      )}
                      {project.camera.shutterSpeed && (
                        <>
                          <div>Shutter Speed</div>
                          <div>{project.camera.shutterSpeed}</div>
                        </>
                      )}
                      {project.camera.iso && (
                        <>
                          <div>ISO</div>
                          <div>{project.camera.iso}</div>
                        </>
                      )}
                    </div>
                  </div>
                )}
                
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
