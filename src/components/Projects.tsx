import { Button } from './ui/MovingBorderBtn';
import { Users, Zap, Brain, ExternalLink, Github } from 'lucide-react';

interface ProjectStats {
  stars: number;
  forks: number;
  views: number;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  icon: any;
  stats: ProjectStats;
  status: string;
  category: string;
}

const Projects = () => {
  // hover effect is handled by CSS group-hover now

  const projects: Project[] = [
    {
      title: 'Offline Payment App',
      description: 'A secure offline payment application enabling transactions without internet connectivity. Features include QR code-based payments, local data synchronization, and encrypted transaction storage with automatic sync when online.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'IndexedDB', 'QR Code', 'Encryption', 'PWA'],
      features: ['Offline Transactions', 'QR Payments', 'Auto Sync', 'Secure Storage'],
      github: 'https://github.com/siddhardhram/offlinepayment.git',
      demo: '#',
      icon: Users,
      stats: { stars: 28, forks: 10, views: 180 },
      status: 'Production',
      category: 'Full Stack'
    },
    {
      title: 'Timetable Generation System',
      description: 'Intelligent timetable generation system using constraint satisfaction algorithms. Automatically creates optimized schedules considering teacher availability, room allocation, and student preferences with conflict resolution.',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'Algorithm Design', 'React', 'Flask', 'PostgreSQL'],
      features: ['Auto Scheduling', 'Conflict Detection', 'Optimization', 'Export Options'],
      github: 'https://github.com/siddhardhram/timetable-server.git',
      demo: '#',
      icon: Zap,
      stats: { stars: 22, forks: 7, views: 145 },
      status: 'Live',
      category: 'AI/ML'
    },
    {
      title: 'DTC Disaster Tweet Classifier',
      description: 'Machine Learning classifier built with web scraping technology to extract and analyze disaster-related tweets from Twitter in real-time. Uses BeautifulSoup and NLP techniques for sentiment analysis and emergency detection from scraped social media data.',
      image: 'https://images.unsplash.com/photo-1534237886190-ced735ca4b73?auto=format&fit=crop&w=800&q=80',
      tech: ['Python', 'NLP', 'Web Scraping', 'Scikit-learn', 'BeautifulSoup'],
      features: ['Real-time Classification', 'Sentiment Analysis', 'Web Scraping', 'Emergency Detection'],
      github: 'https://github.com/siddhardhram/DTC-Webscraped.git',
      demo: '#',
      icon: Brain,
      stats: { stars: 35, forks: 14, views: 220 },
      status: 'Research',
      category: 'AI/ML'
    }
  ];

  return (
    <section id="projects" className="py-12 relative overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-neutral-200 dark:border-neutral-800 rounded-lg animate-spin"
          style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-cyan-500/20 rounded-lg animate-spin"
          style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Featured Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-400">A selection of my recent work and side projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-xs font-medium text-white border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-md text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-3">
                    <a href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                      <Github size={20} className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white" />
                    </a>
                    <a href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                      <ExternalLink size={20} className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white" />
                    </a>
                  </div>
                  {/* Stats are kept simple text */}
                  {/* <span className="text-xs text-neutral-500">{project.status}</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16 mb-8">
          <a href="https://github.com/siddhardhram" target="_blank" rel="noopener noreferrer">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              View All Projects
            </Button>
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }
        `}
      </style>
    </section>
  );
};

export default Projects;