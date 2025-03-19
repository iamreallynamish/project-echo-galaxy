
import { Linkedin, Instagram, Twitter, Link2, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-4 px-4 md:px-6 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="text-xs text-gray-500 font-mono">
          © {currentYear} MEDIA
        </div>
        
        <div className="flex items-center space-x-6">
          <a 
            href="https://linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={16} />
          </a>
          <a 
            href="https://behance.net" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Behance"
          >
            <ExternalLink size={16} />
          </a>
          <a 
            href="https://linktr.ee" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Linktree"
          >
            <Link2 size={16} />
          </a>
        </div>
        
        <div className="flex items-center space-x-4 md:hidden">
          <a 
            href="#" 
            className="text-xs text-gray-500 hover:text-white transition-colors font-mono"
          >
            ABOUT
          </a>
          <a 
            href="#" 
            className="text-xs text-gray-500 hover:text-white transition-colors font-mono"
          >
            CONTACT
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
