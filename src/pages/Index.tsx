
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <span className={`inline-block text-sm text-muted-foreground font-medium tracking-wider mb-5 opacity-0 ${loaded ? 'animate-slide-down' : ''}`}>
              PORTFOLIO
            </span>
            
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight max-w-4xl opacity-0 ${loaded ? 'animate-slide-down' : ''}`} style={{ animationDelay: '0.1s' }}>
              Creating meaningful design for digital experiences
            </h1>
            
            <p className={`mt-6 text-lg text-muted-foreground max-w-2xl opacity-0 ${loaded ? 'animate-slide-down' : ''}`} style={{ animationDelay: '0.2s' }}>
              A curated collection of graphic design projects showcasing brand identity, editorial layout, packaging design, and digital experiences.
            </p>
            
            <div className={`mt-10 opacity-0 ${loaded ? 'animate-slide-down' : ''}`} style={{ animationDelay: '0.3s' }}>
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full transition-all hover:gap-3"
              >
                View Projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Projects */}
        <section className="py-20 px-6 md:px-10 bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
              <h2 className={`text-2xl md:text-3xl font-medium opacity-0 ${loaded ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                Featured Projects
              </h2>
              
              <Link 
                to="/projects" 
                className={`text-sm flex items-center gap-2 hover:gap-3 transition-all opacity-0 ${loaded ? 'animate-slide-up' : ''}`} 
                style={{ animationDelay: '0.5s' }}
              >
                View All Projects <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-24 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <span className="inline-block text-sm text-muted-foreground font-medium tracking-wider mb-4">
                  ABOUT
                </span>
                
                <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
                  Designer focused on creating meaningful experiences
                </h2>
                
                <Link 
                  to="/projects" 
                  className="inline-flex items-center gap-2 mt-4 text-sm hover:gap-3 transition-all relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current"
                >
                  Explore Projects <ArrowRight size={14} />
                </Link>
              </div>
              
              <div className="space-y-6 text-muted-foreground">
                <p>
                  I'm a graphic designer specializing in creating clean, functional, and visually compelling solutions for brand identity, editorial design, and digital experiences.
                </p>
                
                <p>
                  My approach combines visual aesthetics with strategic thinking to solve complex design challenges. Each project is an opportunity to create something unique that resonates with the intended audience.
                </p>
                
                <p>
                  With attention to detail and a passion for excellence, I strive to deliver work that not only looks beautiful but also achieves strategic objectives.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
