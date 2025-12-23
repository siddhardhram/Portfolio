import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface NavItem {
  name: string;
  id: string;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  }, []);

  const navItems: NavItem[] = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Contact', id: 'contact' },
  ];

  const SocialLinks = ({ isMobile = false }) => (
    <div className={`flex items-center ${isMobile ? 'space-x-6' : 'space-x-4'}`}>
      <a 
        href="https://github.com/siddhardhram" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-slate-400 hover:text-white transition-colors duration-200"
        aria-label="GitHub Profile"
      >
        <Github size={isMobile ? 18 : 20} />
      </a>
      <a 
        href="https://linkedin.com/in/ponnamandasiddhardha" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-white transition-colors duration-200"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={isMobile ? 18 : 20} />
      </a>
      <a 
        href="mailto:ponnamandaram711@gmail.com"
        className="text-slate-400 hover:text-white transition-colors duration-200"
        aria-label="Email Contact"
      >
        <Mail size={isMobile ? 18 : 20} />
      </a>
    </div>
  );

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
            <div className="ml-8">
              <SocialLinks isMobile={false} />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center justify-center pt-4 pb-2 border-t border-slate-700">
                <div className="ml-4">
                  <SocialLinks isMobile={true} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;