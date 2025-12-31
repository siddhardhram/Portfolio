import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Download, ExternalLink, Sparkles, Code, Zap, type LucideIcon } from 'lucide-react';
// Note: assuming the path is correct as per previous context
import profileImg from '../assests/profile.jpg';
import { Button } from './ui/MovingBorderBtn';
import { TypewriterEffect } from './ui/TypewriterEffect';

interface FloatingIconProps {
  icon: LucideIcon;
  delay: number;
  size?: number;
  className?: string;
}

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-sm font-medium tabular-nums">
      <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    </div>
  );
};

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        animationDuration: '3s',
        transform: `translateY(${scrollY * 0.5}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <Icon size={size} className="text-neutral-400/30 hover:text-neutral-600 transition-colors duration-300" />
    </div>
  );

  const roles = [
    { text: "Front-End Developer", className: "text-neutral-600 dark:text-neutral-400" },
    { text: "AI/ML Enthusiast", className: "text-neutral-600 dark:text-neutral-400" },
    { text: "Full Stack Developer", className: "text-neutral-600 dark:text-neutral-400" },
  ];

  return (
    <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        {/* Removed colored blobs for strict B/W aesthetic, or kept them extremely subtle if needed. 
            User said "black and white only good css". Removing colored blobs. */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-neutral-200/20 dark:bg-neutral-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neutral-200/20 dark:bg-neutral-800/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}></div>

        <FloatingIcon icon={Code} delay={0} className="top-20 left-20" />
        <FloatingIcon icon={Zap} delay={1} className="top-32 right-32" />
        <FloatingIcon icon={Sparkles} delay={2} className="bottom-40 left-40" />
        <FloatingIcon icon={Code} delay={1.5} className="bottom-20 right-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">

            <div className="flex flex-col items-center lg:items-start mb-6 gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for work
              </div>
              <Clock />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white leading-tight">
              Hi, I'm <span className="underline decoration-neutral-400 decoration-4 underline-offset-4">Siddhardha</span>
            </h1>

            <div className="text-2xl md:text-3xl mb-8 font-medium h-12">
              <TypewriterEffect
                words={roles}
                className="inline-block"
                cursorClassName="text-cyan-500"
              />
            </div>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              B.Tech AI/ML student passionate about building innovative solutions at the intersection of
              artificial intelligence and full-stack development.
            </p>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                onClick={scrollToProjects}
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-neutral-800"
                containerClassName="h-auto"
              >
                <span className="flex items-center gap-2 px-6 py-3 text-sm font-medium">
                  View Projects
                  <ExternalLink size={16} />
                </span>
              </Button>

              <a href="/resume.pdf" download className="group px-6 py-3 border-2 border-neutral-300 dark:border-neutral-700 text-black dark:text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white flex items-center hover:scale-105">
                <Download size={16} className="mr-2" />
                Resume
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
              {/* Enlarged Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-black shadow-2xl">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-neutral-400" />
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