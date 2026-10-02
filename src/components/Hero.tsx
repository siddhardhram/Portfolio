import { useState, useEffect, useRef } from 'react';
import { Download, ExternalLink, Sparkles, Code, Zap, Trophy, Award, Target, type LucideIcon } from 'lucide-react';
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
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-medium tabular-nums">
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

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FloatingIcon: React.FC<FloatingIconProps> = ({ icon: Icon, delay, size = 20, className = "" }) => (
    <div
      className={`absolute animate-bounce ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3.5s',
        transform: `translateY(${scrollY * 0.4}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <Icon size={size} className="text-neutral-400/25 hover:text-cyan-500 transition-colors duration-300" />
    </div>
  );

  const roles = [
    { text: "AI / ML Engineer", className: "text-neutral-700 dark:text-neutral-300" },
    { text: "Agentic Systems Builder", className: "text-cyan-600 dark:text-cyan-400" },
    { text: "Full Stack Developer", className: "text-neutral-700 dark:text-neutral-300" },
    { text: "Competitive ML Practitioner", className: "text-cyan-600 dark:text-cyan-400" },
  ];

  const highlights = [
    { label: 'CGPA', value: '9.12 / 10', detail: 'SRKR Engineering College' },
    { label: 'Amazon ML Challenge', value: 'Rank #3054', detail: 'F0.5 Score: 0.9197' },
    { label: 'Hackathons', value: '4x National', detail: 'SIH 2025 Participant' },
    { label: 'Innovation Conclave', value: '1st Prize Winner', detail: 'SAMAGRA 2026' },
  ];

  return (
    <section ref={heroRef} id="hero" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-white dark:bg-black">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-neutral-200/30 dark:bg-neutral-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        <FloatingIcon icon={Code} delay={0} className="top-16 left-12" />
        <FloatingIcon icon={Zap} delay={1} className="top-28 right-24" />
        <FloatingIcon icon={Sparkles} delay={2} className="bottom-24 left-32" />
        <FloatingIcon icon={Target} delay={1.5} className="bottom-16 right-16" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Status badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for Roles & Internships
              </div>
              <Clock />
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-black dark:text-white leading-[1.1]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-neutral-700 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-400 underline decoration-cyan-500 decoration-4 underline-offset-8">Siddhardha</span>
            </h1>

            {/* Animated Roles */}
            <div className="h-10 text-xl sm:text-2xl font-semibold mb-6 flex items-center">
              <TypewriterEffect
                words={roles}
                className="inline-block"
                cursorClassName="text-cyan-500"
              />
            </div>

            {/* Resume Summary */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Computer Science & AI-ML undergraduate (CGPA 9.12/10) at SRKR Engineering College. I build comfortably across autonomous agentic systems, machine learning pipelines, and real-time backend architectures—turning rough ideas into battle-tested systems that hold up under real data and real users.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10">
              <Button
                onClick={() => scrollToSection('projects')}
                borderRadius="1.75rem"
                className="bg-black text-white dark:bg-white dark:text-black font-semibold text-xs sm:text-sm hover:scale-105 transition-transform"
                containerClassName="h-auto"
              >
                <span className="flex items-center gap-2 px-5 py-3">
                  Featured Projects
                  <ExternalLink size={15} />
                </span>
              </Button>

              <button
                onClick={() => scrollToSection('achievements')}
                className="px-5 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-black dark:text-white text-xs sm:text-sm font-semibold hover:border-cyan-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all flex items-center gap-2 hover:scale-105"
              >
                <Trophy size={16} className="text-amber-500" />
                Achievements & Hackathons
              </button>

              <a
                href="/resume.pdf"
                download="P_S_R_L_Siddhardha_Resume.pdf"
                className="px-5 py-3 rounded-full border-2 border-neutral-300 dark:border-neutral-700 text-black dark:text-white text-xs sm:text-sm font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center gap-2 hover:scale-105"
              >
                <Download size={15} />
                Resume
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-700" />
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-84 lg:h-84 rounded-full overflow-hidden border-4 border-white dark:border-neutral-900 shadow-2xl">
                <img
                  src={profileImg}
                  alt="P.S.R.L. Siddhardha"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Mini-Badge */}
              <div className="absolute -bottom-2 -left-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-3 shadow-lg flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                  <Award size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">Top Achievement</p>
                  <p className="text-xs font-bold text-black dark:text-white">Amazon ML #3054</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Stats Strip */}
        <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-50/80 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 text-center hover:border-cyan-500/40 transition-colors"
            >
              <p className="text-xl sm:text-2xl font-extrabold text-black dark:text-white mb-0.5 tracking-tight">
                {item.value}
              </p>
              <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-0.5">
                {item.label}
              </p>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;