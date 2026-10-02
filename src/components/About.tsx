import { User, Code2, Sparkles, MapPin, GraduationCap, CheckCircle } from 'lucide-react';
import GitHubStats from './GitHubStats';
import { BackgroundBeams } from './ui/BackgroundBeams';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white dark:bg-black">
      {/* Background Beams */}
      <BackgroundBeams />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User size={14} className="text-cyan-500" />
            Background Profile
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            About <span className="text-cyan-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Computer Science & AI-ML engineer passionate about engineering intelligent systems, autonomous agents, and production architectures
          </p>
        </div>

        <div className="space-y-8">
          {/* Main Bio Card */}
          <div className="bg-neutral-50 dark:bg-neutral-900/60 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 sm:p-10 shadow-sm hover:border-cyan-500/40 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">P.S.R.L. Siddhardha</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 mt-0.5">
                    <MapPin size={12} className="text-cyan-500" /> Bhimavaram, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <GraduationCap size={14} />
                <span>B.Tech AI & ML (CGPA 9.12/10)</span>
              </div>
            </div>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
              <p>
                I'm a Computer Science & Artificial Intelligence / Machine Learning undergraduate at <strong>SRKR Engineering College</strong> with an academic record of <strong>CGPA 9.12/10</strong>. I work comfortably across machine learning pipelines, autonomous agent architectures, and real-time backend services.
              </p>
              <p>
                My passion lies in taking ambitious, rough ideas and transforming them into battle-tested systems that hold up under real data and real users. I have proven this across global competitive challenges like the <strong>Amazon ML Challenge</strong> (ranking #3054 globally with an F0.5 score of 0.9197) and national hackathons like <strong>Smart India Hackathon (SIH 2025)</strong> and <strong>SAMAGRA 2026</strong> (1st Prize Winner).
              </p>
              <p>
                Recently, I built <strong>Agentix</strong>, an autonomous agentic issue resolution platform orchestrating multi-agent ticket triage and patch workflows, and previously interned at <strong>Infosys Limited (Infosys Springboard)</strong> developing <strong>AgriYield Predictor</strong> with SHAP explainability.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-cyan-500 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-black dark:text-white">Precision & Rigor</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Benchmarked on precision metrics and rigorous testing</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-cyan-500 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-black dark:text-white">Autonomous Agents</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Agentic systems, vector retrieval & LLM tooling</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-cyan-500 mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-black dark:text-white">Full-Stack Velocity</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">FastAPI, React, WebSockets, Redis & cloud deployment</p>
                </div>
              </div>
            </div>

            {/* GitHub Stats Integration */}
            <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-cyan-500" size={22} />
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">GitHub Activity & Contributions</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Continuous open-source commits and code shipping</p>
                </div>
              </div>
              <GitHubStats />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;