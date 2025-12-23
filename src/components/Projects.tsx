import { useState } from 'react';
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
  icon: any; // Ideally should be more specific
  color: string;
  stats: ProjectStats;
  status: string;
  category: string;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'Job Portal Platform',
      description: 'A comprehensive job portal built with React and Supabase featuring real-time job listings, advanced search filters, user authentication with Clerk, and responsive design. Includes employer dashboard and applicant tracking.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Supabase', 'Clerk Auth', 'TailwindCSS', 'JavaScript'],
      features: ['Real-time Updates', 'Advanced Filtering', 'User Authentication', 'Responsive Design'],
      github: 'https://github.com/siddhardhram',
      demo: '#',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      stats: { stars: 24, forks: 8, views: 156 },
      status: 'Production',
      category: 'Full Stack'
    },
    {
      title: 'Weather Application',
      description: 'Dynamic weather application using OpenWeather API with beautiful UI animations, location-based forecasting, and detailed weather metrics. Features include 7-day forecasts and weather alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'OpenWeather API', 'JavaScript', 'CSS3', 'Vercel'],
      features: ['Live Weather Data', 'Location Detection', '7-Day Forecast', 'Weather Alerts'],
      github: 'https://github.com/siddhardhram',
      demo: 'https://vercel.com',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      stats: { stars: 18, forks: 5, views: 89 },
      status: 'Live',
      category: 'Frontend'
    },
    {
      title: 'Energy Theft Detection System',
      description: 'Machine Learning model for detecting energy theft using anomaly detection algorithms. Trained on consumption patterns with Python, scikit-learn, and pandas for accurate prediction and analysis.',
      image: 'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      features: ['Anomaly Detection', 'Pattern Recognition', 'Data Visualization', 'Model Training'],
      github: 'https://github.com/siddhardhram',
      demo: '#',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      stats: { stars: 32, forks: 12, views: 203 },
      status: 'Research',
      category: 'AI/ML'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-purple-500/20 rounded-lg animate-spin" 
             style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-blue-500/20 rounded-lg animate-spin" 
             style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-teal-500/20 rounded-lg animate-spin" 
             style={{ animationDuration: '12s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400">A selection of my recent work and side projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl overflow-hidden transition-all duration-500 ${
                hoveredProject === index ? 'scale-[1.02] shadow-2xl shadow-purple-500/10' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-slate-900/60 backdrop-blur-sm rounded-md text-xs font-medium text-slate-300">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-700/30 rounded-md text-xs font-medium text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-3">
                    <a href={project.github} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="p-2 hover:bg-slate-700/30 rounded-lg transition-colors">
                      <Github size={20} className="text-slate-400 hover:text-white" />
                    </a>
                    <a href={project.demo} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="p-2 hover:bg-slate-700/30 rounded-lg transition-colors">
                      <ExternalLink size={20} className="text-slate-400 hover:text-white" />
                    </a>
                  </div>
                  <span className="text-xs text-slate-500">{project.status}</span>
                </div>
              </div>

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex flex-col items-center gap-4">
            <a 
              href="https://github.com/siddhardhram"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-slate-800/50"
            >
              <Github size={20} />
              View All Projects on GitHub
              <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <p className="text-slate-500 text-sm">
              Explore 15+ more projects including mobile apps, APIs, and research work
            </p>
          </div>
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