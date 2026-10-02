import { useState } from 'react';
import { 
  Code2, 
  Brain, 
  Server, 
  Database, 
  Terminal, 
  Sparkles,
  CheckCircle2,
  type LucideIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories: SkillCategory[] = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Supervised/unsupervised pipelines, entity matching, and model explainability',
      skills: [
        'Supervised & Unsupervised Learning',
        'Regression & Classification',
        'Entity Resolution (Levenshtein / Jaccard)',
        'SHAP (Explainable AI)',
        'Model Evaluation & Metrics (F0.5)',
        'Natural Language Processing (NLP)',
        'Genetic Algorithms & Heuristics',
        'CP-SAT Constraint Optimization',
      ],
    },
    {
      title: 'Web & Backend Engineering',
      icon: Server,
      description: 'Scalable services, RESTful APIs, and real-time WebSocket infrastructure',
      skills: [
        'React.js',
        'Next.js',
        'Node.js',
        'FastAPI',
        'Express.js',
        'Flask',
        'RESTful APIs',
        'WebSockets (Low-Latency)',
      ],
    },
    {
      title: 'Languages & Core',
      icon: Code2,
      description: 'Primary programming languages, paradigms, and design principles',
      skills: [
        'Python',
        'JavaScript (ES6+)',
        'Object-Oriented Programming (OOP)',
        'Data Structures & Algorithms (DSA)',
        'DBMS Architecture',
        'Operating Systems Concepts',
      ],
    },
    {
      title: 'Data & Databases',
      icon: Database,
      description: 'Relational & NoSQL persistence, in-memory caches, and data pipelines',
      skills: [
        'SQL (PostgreSQL & MySQL)',
        'MongoDB',
        'Redis (Session Caching & Pub/Sub)',
        'IndexedDB (Client Offline Storage)',
        'Data Cleaning & Preprocessing',
        'Feature Extraction & Engineering',
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: Terminal,
      description: 'Version control, container orchestration, and workflow tooling',
      skills: [
        'Git & GitHub',
        'Docker',
        'Postman (API Testing)',
        'VS Code & Terminal Environments',
        'Linux / Shell Basics',
        'PWA Development',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-cyan-500" />
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-4">
            Technical <span className="text-cyan-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Practical proficiency across machine learning models, modern web frameworks, data architecture, and production tools
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-md scale-105'
                    : 'bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-neutral-800'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-cyan-500 dark:text-cyan-600' : 'text-neutral-400'} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Card Details */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 max-w-4xl mx-auto shadow-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            {(() => {
              const Icon = categories[activeTab].icon;
              return (
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Icon size={20} />
                </div>
              );
            })()}
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                {categories[activeTab].title}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {categories[activeTab].description}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-3 mt-6">
            {categories[activeTab].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="flex items-center gap-2.5 p-3.5 bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-cyan-500/50 transition-colors"
              >
                <CheckCircle2 size={16} className="text-cyan-500 shrink-0" />
                <span className="text-xs md:text-sm font-medium text-black dark:text-white">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Tech Pill Cloud */}
        <div className="mt-14 pt-10 border-t border-neutral-200 dark:border-neutral-800/80">
          <p className="text-center text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">
            Technologies Frequently Deployed
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {[
              'Python', 'FastAPI', 'React.js', 'Next.js', 'Node.js', 'Express.js',
              'Flask', 'XGBoost', 'SHAP', 'Levenshtein/Jaccard', 'CP-SAT', 'MongoDB',
              'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'WebSockets', 'Git'
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-cyan-500/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
