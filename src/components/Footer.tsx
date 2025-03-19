
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-6 md:px-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-gray-500">
          © {currentYear} Portfolio
        </div>
        
        <div className="flex items-center space-x-6">
          <a 
            href="mailto:contact@example.com" 
            className="text-xs text-gray-500 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
