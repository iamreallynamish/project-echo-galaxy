
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
      return;
    }
    
    setLoaded(true);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [project, navigate]);
  
  if (!project) return null;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className={`flex items-center gap-2 text-sm mb-10 hover:text-primary transition-colors opacity-0 ${loaded ? 'animate-fade-in' : ''}`}
          >
            <ArrowLeft size={16} /> Back to Projects
          </button>
          
          {/* Project Header */}
          <div className="mb-12">
            <span className={`inline-block text-sm text-muted-foreground font-medium tracking-wider mb-3 opacity-0 ${loaded ? 'animate-slide-down' : ''}`} style={{ animationDelay: '0.1s' }}>
              {project.categories.join(' · ')}
            </span>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 opacity-0 ${loaded ? 'animate-slide-down' : ''}`} style={{ animationDelay: '0.2s' }}>
              {project.title}
            </h1>
            
            <div className={`flex items-center gap-2 text-sm text-muted-foreground opacity-0 ${loaded ? 'animate-slide-down' : ''}`} style={{ animationDelay: '0.3s' }}>
              <Calendar size={14} />
              <span>{project.date}</span>
            </div>
          </div>
          
          {/* Project Image */}
          <div className={`relative aspect-video rounded-lg overflow-hidden mb-16 opacity-0 ${loaded ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className={`absolute inset-0 bg-blue-50/30 backdrop-blur-sm ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} />
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          
          {/* Project Description */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div className="md:col-span-2">
              <h2 className={`text-2xl font-medium mb-5 opacity-0 ${loaded ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.5s' }}>
                Overview
              </h2>
              
              <div className={`prose prose-neutral max-w-none text-muted-foreground opacity-0 ${loaded ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.6s' }}>
                <p className="text-lg mb-6">{project.description}</p>
                <p>{project.details}</p>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <h3 className={`text-xl font-medium mb-5 opacity-0 ${loaded ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.7s' }}>
                Project Details
              </h3>
              
              <div className={`space-y-6 opacity-0 ${loaded ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.8s' }}>
                <div>
                  <h4 className="text-sm font-medium mb-2">Date</h4>
                  <p className="text-muted-foreground">{project.date}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category) => (
                      <span key={category} className="text-xs bg-muted py-1 px-2 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
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
