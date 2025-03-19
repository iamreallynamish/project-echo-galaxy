
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-4 px-4 md:px-6 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="text-xs text-gray-500 font-mono">
          © {currentYear} MEDIA
        </div>
        
        <div className="flex items-center space-x-4">
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
