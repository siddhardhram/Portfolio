import { Home, FolderGit2, Trophy, Briefcase, Code, Mail, Github, Linkedin } from 'lucide-react';
import { FloatingNav } from './ui/FloatingNavbar';

const Navigation = () => {
  const navItems = [
    { name: 'Home', link: '/', icon: <Home size={16} className="text-neutral-600 dark:text-neutral-300" /> },
    { name: 'Projects', link: '#projects', icon: <FolderGit2 size={16} className="text-neutral-600 dark:text-neutral-300" /> },
    { name: 'Achievements & Hackathons', link: '#achievements', icon: <Trophy size={16} className="text-neutral-600 dark:text-neutral-300" /> },
    { name: 'Experience', link: '#experience', icon: <Briefcase size={16} className="text-neutral-600 dark:text-neutral-300" /> },
    { name: 'Skills', link: '#skills', icon: <Code size={16} className="text-neutral-600 dark:text-neutral-300" /> },
    { name: 'GitHub', link: 'https://github.com/siddhardhram', icon: <Github size={16} className="text-neutral-600 dark:text-neutral-300" /> },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/ponnamandasiddhardha', icon: <Linkedin size={16} className="text-neutral-600 dark:text-neutral-300" /> },
    { name: 'Contact', link: '/contact', icon: <Mail size={16} className="text-neutral-600 dark:text-neutral-300" /> },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navigation;
