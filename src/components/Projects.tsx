import { useState } from 'react';
import { ExternalLink, Github, Bot, Target, Calendar, Sparkles, Layers, Cpu, Globe, ArrowUpRight, Check, type LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'AI & Agentic Systems' | 'Machine Learning & Data' | 'Full Stack & Web';
  status: string;
  statusColor: string;
  featured?: boolean;
  bulletPoints: string[];
  tech: string[];
  github: string;
  demo?: string;
  icon: LucideIcon;
  gradient: string;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const projects: Project[] = [
    {
      id: 'agentix',
      title: 'Agentix — Autonomous Agentic Issue Resolution Platform',
      tagline: 'Autonomous AI agents triaging, patching, and testing software tickets',
      description:
        'An end-to-end autonomous agent platform designed to triage, investigate, patch, test, and audit software tickets and operational issues with human-in-the-loop governance.',
      category: 'AI & Agentic Systems',
      status: 'Active / Flagship',
      statusColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
      featured: true,
      bulletPoints: [
        'Multi-agent workflow routing tickets by severity (P0-P3) and issue classification',
        'Vector similarity search to detect and merge duplicate issues across historic repositories',
        'Autonomous code investigation, sandbox patch generation, automated test execution, and institutional audit memory',
      ],
      tech: ['FastAPI', 'Python', 'React', 'Multi-Agent', 'Vector Search', 'Git Sandbox'],
      github: 'https://github.com/siddhardhram/Agentix.git',
      icon: Bot,
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    },
    {
      id: 'amazon-ml',
      title: 'Amazon ML Challenge — Business Entity Resolution',
      tagline: 'Global ML Challenge: Ranking #3054 with F0.5 score of 0.9197',
      description:
        'Built an end-to-end entity resolution pipeline matching noisy business records across three data sources (US/India train splits, unseen France test split) optimized for the precision-heavy F0.5 metric.',
      category: 'Machine Learning & Data',
      status: 'Global Rank #3054',
      statusColor: 'border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400',
      featured: true,
      bulletPoints: [
        'Engineered fuzzy string matching (Levenshtein & Jaccard) for blocking and multi-rule scoring for final matches',
        'Handled real-world enterprise noise (name/address abbreviations, transliterations, missing fields)',
        'Achieved an exceptional F0.5 score of 0.9197, ranking 3054 globally among thousands of teams',
      ],
      tech: ['Python', 'Fuzzy String Matching', 'Levenshtein', 'Jaccard', 'Rule-Based Scoring'],
      github: 'https://github.com/siddhardhram/amazon-ml-entity-resolver.git',
      icon: Target,
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    },
    {
      id: 'timetable-system',
      title: 'AI-Based Timetable Generation System (SIH 2025)',
      tagline: 'Winner SAMAGRA 2026: Hybrid CP-SAT constraint optimization engine',
      description:
        'Designed a hybrid optimization engine (constraint solving + genetic algorithms) that cut real institutional scheduling conflicts by 90%, replacing a tedious manual scheduling process.',
      category: 'AI & Agentic Systems',
      status: 'Winner SAMAGRA 2026',
      statusColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      featured: true,
      bulletPoints: [
        'Formulated complex academic constraints using Google OR-Tools CP-SAT and heuristic genetic algorithms',
        'Built three role-based React.js dashboards on a shared component library, backed by a Node.js REST API layer',
        'Won 1st prize & ₹2,000 cash award at Innovation Conclave, SAMAGRA 2026',
      ],
      tech: ['Python', 'CP-SAT', 'Genetic Algorithms', 'React.js', 'Node.js', 'MongoDB', 'REST APIs'],
      github: 'https://github.com/siddhardhram/timetable-server',
      icon: Calendar,
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    },
    {
      id: 'nebula-sketch',
      title: 'Nebula Sketch — Real-Time Collaborative Drawing App',
      tagline: 'Multiplayer collaborative canvas with sub-100ms sync & Redis sessions',
      description:
        'Live multiplayer drawing app with WebSocket updates under 100ms, using a server-authoritative model with incremental state sync to keep every client consistent.',
      category: 'Full Stack & Web',
      status: 'Production',
      statusColor: 'border-purple-500/40 bg-purple-500/10 text-purple-600 dark:text-purple-400',
      bulletPoints: [
        'Architected server-authoritative conflict resolution keeping concurrent canvas strokes synchronized',
        'Leveraged Redis-managed sessions for low-latency client caching and state persistence',
        'Containerized with Docker for rapid local and production deployment',
      ],
      tech: ['Next.js', 'Node.js', 'Express.js', 'WebSockets', 'Redis', 'Docker'],
      github: 'https://github.com/siddhardhram',
      icon: Layers,
      gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    },
    {
      id: 'agriyield-predictor',
      title: 'AgriYield Predictor: AI Crop Yield Forecasting',
      tagline: 'Infosys Springboard ML project with SHAP explainable AI in plain language',
      description:
        'Built and compared multiple ML models (Random Forest, XGBoost, Linear Regression), serving the top performer through a live Flask application, and used SHAP to explain predictions.',
      category: 'Machine Learning & Data',
      status: 'Infosys 2025',
      statusColor: 'border-blue-500/40 bg-blue-500/10 text-blue-600 dark:text-blue-400',
      bulletPoints: [
        'Benchmarked ensemble and regression models for agricultural yield forecasting',
        'Integrated SHAP (SHapley Additive exPlanations) to demystify black-box predictions',
        'Deployed lightweight REST API with interactive frontend inputs',
      ],
      tech: ['Python', 'XGBoost', 'Random Forest', 'Flask', 'SHAP', 'Scikit-learn'],
      github: 'https://github.com/siddhardhram',
      icon: Cpu,
      gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    },
    {
      id: 'offline-payment',
      title: 'Offline Payment App',
      tagline: 'Zero-connectivity secure transactions with QR sync & IndexedDB encryption',
      description:
        'A secure offline payment PWA enabling transactions without internet connectivity. Features QR code-based payments, local encrypted storage, and automatic server synchronization upon reconnection.',
      category: 'Full Stack & Web',
      status: 'PWA Web App',
      statusColor: 'border-neutral-500/40 bg-neutral-500/10 text-neutral-600 dark:text-neutral-400',
      bulletPoints: [
        'Client-side encrypted transaction records stored using IndexedDB',
        'Dynamic QR generation and optical scanner validation for handshake',
        'Automatic reconciliation and state sync when network becomes available',
      ],
      tech: ['React', 'IndexedDB', 'QR Code', 'Encryption', 'PWA'],
      github: 'https://github.com/siddhardhram/offlinepayment',
      icon: Globe,
      gradient: 'from-neutral-500/20 via-neutral-400/10 to-transparent',
    },
  ];

  const categories = ['All', 'AI & Agentic Systems', 'Machine Learning & Data', 'Full Stack & Web'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-white dark:bg-black">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-cyan-500" />
            Featured Work & Deployments
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-4">
            Engineering <span className="text-cyan-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Autonomous agentic workflows, competitive ML pipelines, optimization engines, and full-stack systems
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-cyan-500/60 dark:hover:border-cyan-500/60 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
                >
                  {/* Subtle Card Ambient Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-40 pointer-events-none`} />

                  <div className="relative z-10">
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform shadow-sm">
                        <Icon size={24} />
                      </div>
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${project.statusColor}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-3">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Bullet Points from Resume */}
                    <div className="space-y-2 mb-5">
                      {project.bulletPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                          <Check size={13} className="text-cyan-500 mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-white dark:bg-black/70 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-[11px] font-medium rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Links */}
                  <div className="relative z-10 pt-4 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-white dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-800 text-black dark:text-white border border-neutral-200 dark:border-neutral-800 rounded-xl text-xs font-semibold transition-all duration-200 group/btn"
                    >
                      <Github size={15} />
                      <span>Code Repository</span>
                      <ArrowUpRight size={13} className="text-neutral-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl text-xs font-semibold transition-colors"
                      >
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All on GitHub */}
        <div className="flex justify-center mt-14">
          <a
            href="https://github.com/siddhardhram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-neutral-900 hover:bg-black text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black font-semibold text-sm rounded-full transition-all duration-300 hover:scale-105 shadow-md"
          >
            <Github size={18} />
            <span>Explore All Repositories on GitHub</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;