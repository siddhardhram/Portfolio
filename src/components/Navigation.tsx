import { Home, Mail, Github, Linkedin } from 'lucide-react';
import { FloatingNav } from './ui/FloatingNavbar';

const Navigation = () => {
  const navItems = [
    { name: 'Home', link: '#hero', icon: <Home size={15} className="text-neutral-500 dark:text-neutral-300" /> },
    { name: 'GitHub', link: 'https://github.com/siddhardhram', icon: <Github size={15} className="text-neutral-500 dark:text-neutral-300" /> },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/ponnamandasiddhardha', icon: <Linkedin size={15} className="text-neutral-500 dark:text-neutral-300" /> },
    { name: 'Contact', link: '/contact', icon: <Mail size={15} className="text-neutral-500 dark:text-neutral-300" /> },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navigation;
