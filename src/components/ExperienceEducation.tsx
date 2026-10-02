import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ExperienceEducation = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase size={14} className="text-cyan-500" />
            Background & Credentials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-4">
            Experience & <span className="text-cyan-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Practical industry internship experience backed by rigorous academic foundations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Experience</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Industry internships and applied roles</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7 relative hover:border-cyan-500/50 transition-all hover:shadow-lg"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                  Internship
                </span>
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                  <Calendar size={13} />
                  <span>2025</span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-black dark:text-white mb-1">
                Infosys Springboard Intern
              </h4>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                Infosys Limited
              </p>

              <div className="bg-white dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 mb-4">
                <h5 className="text-sm font-bold text-black dark:text-white mb-1">
                  AgriYield Predictor: AI-Powered Crop Yield Forecasting System
                </h5>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Built and benchmarked multiple ML models (Random Forest, XGBoost, Linear Regression), serving the top-performing model via a production Flask backend, and integrated SHAP (SHapley Additive exPlanations) for clear, human-interpretable feature importance.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                  <CheckCircle size={14} className="text-cyan-500 mt-0.5 shrink-0" />
                  <span>Engineered complete data preprocessing, imputation, and cross-validation pipelines.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                  <CheckCircle size={14} className="text-cyan-500 mt-0.5 shrink-0" />
                  <span>Deployed a lightweight REST API for interactive predictions in real-time.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                  <CheckCircle size={14} className="text-cyan-500 mt-0.5 shrink-0" />
                  <span>Visualized feature impacts to translate complex ML outputs into plain-language agriculture insights.</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Education</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Academic journey and performance</p>
              </div>
            </div>

            {/* College */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7 relative hover:border-cyan-500/50 transition-all hover:shadow-lg"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  CGPA: 9.12 / 10.00
                </span>
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                  <Calendar size={13} />
                  <span>2023 – 2027</span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-black dark:text-white mb-1">
                SRKR Engineering College
              </h4>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-1.5">
                <MapPin size={13} /> Bhimavaram, Andhra Pradesh
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 font-medium mb-3">
                B.Tech in Artificial Intelligence & Machine Learning
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Specialized in deep machine learning, algorithms, optimization, autonomous systems, data structures, and enterprise backend engineering.
              </p>
            </motion.div>

            {/* Intermediate */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7 relative hover:border-cyan-500/50 transition-all hover:shadow-lg"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                  Percentage: 97.6%
                </span>
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                  <Calendar size={13} />
                  <span>2021 – 2023</span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-black dark:text-white mb-1">
                Aditya Junior College
              </h4>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-1.5">
                <MapPin size={13} /> Palakollu, Andhra Pradesh
              </p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 font-medium mb-3">
                Senior Secondary (Intermediate) — MPC
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Strong focus on Mathematics, Physics, and analytical problem-solving with top-tier academic rank.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
