import { Trophy, Award, Target, CheckCircle2, ExternalLink, Sparkles, ShieldCheck, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  organization: string;
  badge: string;
  badgeColor: string;
  metric?: string;
  description: string;
  highlights: string[];
  link?: string;
  linkText?: string;
  icon: LucideIcon;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  topics: string[];
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: 'Amazon ML Challenge — Business Entity Resolution',
      organization: 'Amazon ML Challenge',
      badge: 'Global ML Hackathon',
      badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400',
      metric: 'Global Rank #3054 | F0.5 Score: 0.9197',
      description:
        'Competed in the prestigious Amazon ML Challenge, engineering an end-to-end entity resolution pipeline to match noisy multi-national enterprise records across US, India, and an unseen France test split.',
      highlights: [
        'Optimized specifically for the precision-heavy F0.5 evaluation metric',
        'Implemented fuzzy string blocking (Levenshtein & Jaccard distance) and rule-based scoring',
        'Handled real-world text abbreviations, phonetic transliterations, and noisy incomplete records',
      ],
      link: 'https://github.com/siddhardhram/amazon-ml-entity-resolver.git',
      linkText: 'View Repository',
      icon: Target,
    },
    {
      title: 'Winner — Innovation Conclave, SAMAGRA 2026',
      organization: 'SRKR Engineering College',
      badge: '1st Place Winner',
      badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      metric: 'Cash Prize: ₹2,000 | 90% Conflict Reduction',
      description:
        'Recognized for developing the AI-Based Timetable Generation Server, replacing tedious manual scheduling with an automated CP-SAT constraint optimization engine.',
      highlights: [
        'Designed a hybrid solver blending constraint satisfaction (CP-SAT) and genetic algorithms',
        'Demonstrated a 90% measurable improvement in scheduling efficiency and resource utilization',
        'Built production-ready role-based web dashboards with React and Node.js REST APIs',
      ],
      link: 'https://github.com/siddhardhram/timetable-server',
      linkText: 'View Project',
      icon: Trophy,
    },
    {
      title: '4x National-Level Hackathon Participant',
      organization: 'Smart India Hackathon (SIH 2025) & National Stages',
      badge: 'Competitive Hackathons',
      badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
      metric: '4 National Hackathons',
      description:
        'Consistently proved end-to-end development capabilities under intense pressure, shipping robust software architectures, AI pipelines, and responsive client apps in 24–48 hour sprints.',
      highlights: [
        'Architected AI-driven scheduling for Smart India Hackathon (SIH 2025)',
        'Built full-stack prototypes turning abstract problem statements into scalable code',
        'Demonstrated rapid prototyping, collaborative teamwork, and live judging demonstrations',
      ],
      link: 'https://github.com/siddhardhram',
      linkText: 'View GitHub Activity',
      icon: Award,
    },
  ];

  const certifications: Certification[] = [
    {
      title: 'AWS Academy Graduate — Machine Learning Foundations',
      issuer: 'Amazon Web Services (AWS)',
      date: 'March 2025',
      topics: ['ML Pipelines', 'Model Training', 'Cloud Inference', 'Feature Engineering'],
    },
    {
      title: 'Mastering MySQL: Database Creation & Management, SQL Queries',
      issuer: 'Udemy',
      date: 'October 2024',
      topics: ['Relational Schema Design', 'Complex Joins', 'Indexing', 'Query Optimization'],
    },
    {
      title: 'Git and GitHub Developer Workshop',
      issuer: 'Google Developer Groups (GDG)',
      date: 'October 2024',
      topics: ['Version Control', 'Branching Strategies', 'CI/CD Basics', 'Open Source Workflows'],
    },
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-white dark:bg-black">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-amber-500" />
            Competitive Honors & Hackathons
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-4">
            Achievements & <span className="text-cyan-500">Hackathons</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Proven under competitive benchmarks, global challenges, and high-pressure hackathon sprints
          </p>
        </div>

        {/* Featured Achievements Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-cyan-500/60 dark:hover:border-cyan-500/60 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mb-3">
                    {item.organization}
                  </p>

                  {item.metric && (
                    <div className="inline-block px-3 py-1.5 rounded-lg bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 text-xs font-bold text-black dark:text-white mb-4 shadow-sm">
                      {item.metric}
                    </div>
                  )}

                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-5 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                        <CheckCircle2 size={14} className="text-cyan-500 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white dark:bg-black hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 hover:border-cyan-500 rounded-xl text-xs font-semibold text-black dark:text-white transition-all duration-300"
                  >
                    <span>{item.linkText || 'Learn More'}</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Subsection */}
        <div className="mt-12 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">Professional Certifications</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs">Accredited technical credentials</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
              >
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
                <h4 className="text-sm font-bold text-black dark:text-white mb-3 leading-snug">
                  {cert.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cert.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-[11px] font-medium text-neutral-600 dark:text-neutral-400 rounded-md"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
