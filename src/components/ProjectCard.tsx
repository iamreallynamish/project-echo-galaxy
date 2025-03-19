
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    
    if (image && image.complete) {
      setIsLoaded(true);
    } else if (image) {
      image.onload = () => {
        setIsLoaded(true);
      };
    }
    
    return () => {
      if (image) {
        image.onload = null;
      }
    };
  }, []);

  const animationDelay = `${index * 0.1}s`;

  return (
    <Link 
      to={`/project/${project.id}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-md opacity-0",
        isLoaded && "animate-zoom-in"
      )}
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-md aspect-[4/3]">
        <div className={cn(
          "absolute inset-0 bg-blue-50/30 backdrop-blur-sm",
          isLoaded ? "opacity-0" : "opacity-100",
          "transition-opacity duration-500"
        )} />
        
        <img
          ref={imageRef}
          src={project.thumbnail}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300",
          isHovered && "opacity-100"
        )} />
      </div>
      
      <div className="mt-4 space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-medium tracking-wide">
            {project.date}
          </span>
          <span className="text-xs py-0.5 px-2 rounded-full bg-muted">
            {project.categories[0]}
          </span>
        </div>
        
        <h3 className={cn(
          "text-base font-medium group-hover:text-primary transition-colors duration-300"
        )}>
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
