
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-6 md:px-10 border-t border-border/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © {currentYear} Portfolio. All rights reserved.
        </div>
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <a 
            href="mailto:contact@example.com" 
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
