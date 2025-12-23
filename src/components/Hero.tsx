import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Download, Mail, ExternalLink, Sparkles, Code, Zap } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
// Note: the project folder is named `assests` (typo) so import from that path
import profileImg from '../assests/profile.jpg';

interface FloatingIconProps {
  icon: LucideIcon;
  delay: number;
  size?: number;
  className?: string;
}

const Hero = () => {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const texts = ['AI/ML Student', 'Full Stack Developer', 'Tech Explorer', 'Problem Solver', 'Innovation Seeker'];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = texts[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentFullText.length) {
        setCurrentText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentIndex, texts]);

  const scrollToProjects = (): void => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FloatingIcon: React.FC<FloatingIconProps> = ({ icon: Icon, delay, size = 20, className = "" }) => (
    <div 
      className={`absolute animate-bounce ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      <Icon size={size} className="text-purple-400/30 hover:text-purple-400/60 transition-colors duration-300" />
    </div>
  );

  // Profile image upload state and ref (persist preview to localStorage)
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileSrc, setProfileSrc] = useState<string | null>(() => {
    try {
      return localStorage.getItem('profileSrc');
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (profileSrc) localStorage.setItem('profileSrc', profileSrc);
      else localStorage.removeItem('profileSrc');
    } catch {
      // ignore localStorage errors (e.g., private mode)
    }
  }, [profileSrc]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '0.5s' }}></div>
        
        <FloatingIcon icon={Code} delay={0} className="top-20 left-20" />
        <FloatingIcon icon={Zap} delay={1} className="top-32 right-32" />
        <FloatingIcon icon={Sparkles} delay={2} className="bottom-40 left-40" />
        <FloatingIcon icon={Code} delay={1.5} className="bottom-20 right-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8">
              
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-white mb-2">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Siddhardha
              </span>
            </h1>

            <div className="text-2xl md:text-3xl text-slate-300 mb-8 h-12 flex items-center justify-center lg:justify-start">
              <span className="mr-2">I'm a</span>
              <span className="text-purple-400 font-semibold min-w-[250px] text-left">
                {currentText}
                <span className="animate-pulse text-blue-400">|</span>
              </span>
            </div>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12">
              B.Tech AI/ML student passionate about building innovative solutions at the intersection of 
              artificial intelligence and full-stack development.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-8">
              <button 
                onClick={scrollToProjects}
                className="group px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 flex items-center"
              >
                View Projects
                <ExternalLink size={16} className="ml-1.5" />
              </button>
              <a href="/resume.pdf" download className="group px-4 py-2 border border-slate-600 text-slate-300 text-sm font-medium rounded-lg transition-all duration-300 flex items-center">
                <Download size={16} className="mr-1.5" />
                Download Resume
              </a>
              <a 
                href="mailto:ponnamandaram711@gmail.com"
                className="group px-4 py-2 text-slate-300 text-sm font-medium transition-colors duration-300 flex items-center"
              >
                <Mail size={16} className="mr-1.5" />
                Contact Me
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-700/50"
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                  const file = e.dataTransfer.files[0];
                  const reader = new FileReader();
                  reader.onload = () => setProfileSrc(String(reader.result));
                  reader.readAsDataURL(file);
                }
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files && e.target.files[0];
                  if (f) {
                    const reader = new FileReader();
                    reader.onload = () => setProfileSrc(String(reader.result));
                    reader.readAsDataURL(f);
                  }
                }}
              />

              {/* displaySrc shows uploaded preview if available, otherwise the bundled profile image */}
              {(() => {
                const displaySrc = profileSrc || profileImg;
                return (
                  <>
                    <img src={displaySrc} alt="Profile" className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-3 py-2 bg-slate-800/60 text-sm rounded-md text-slate-200 hover:bg-slate-700/70"
                      >
                      
                      </button>
                      {profileSrc && (
                        <button
                          type="button"
                          onClick={() => setProfileSrc(null)}
                          className="px-3 py-2 bg-red-600/60 text-sm rounded-md text-white hover:bg-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-slate-400 text-sm">Scroll to explore</span>
            <ChevronDown size={24} className="text-slate-400" />
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes gradient-x {
            0%, 100% {
              background-size: 200% 200%;
              background-position: left center;
            }
            50% {
              background-size: 200% 200%;
              background-position: right center;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;