import { User, Code2 } from 'lucide-react';
import GitHubStats from './GitHubStats';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const About = () => {
  return (
    <section id="about" className="py-12 relative overflow-hidden bg-white dark:bg-black">
      {/* Background Beams */}
      <BackgroundBeams />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 animate-fade-in-up">
            About <span className="text-cyan-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8 animate-scale-in"></div>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <TextGenerateEffect words="Passionate about the intersection of AI and software development" />
          </p>
        </div>

        <div className="space-y-6 animate-fade-in-up">
          <div className="bg-neutral-50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-cyan-500" size={24} />
              <h3 className="text-2xl font-bold text-black dark:text-white">Who I Am</h3>
            </div>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
              <p>
                <TextGenerateEffect words="Hey! I'm Siddhardha, an undergraduate AI/ML student and a fullstack developer who loves turning ideas into reality." />
              </p>
              <p>
                <TextGenerateEffect words="I primarily work with React, Node.js, Python, and Tailwind. I have experience with SQL and ML models, but I'm flexible and quick to adapt to other technologies." />
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-cyan-500" size={24} />
                <h3 className="text-2xl font-bold text-black dark:text-white">Hire Me</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                <TextGenerateEffect words="I'm currently available for internships and freelance work—ready to jump in and bring my skills to your team." />
              </p>

              <div className="mt-8">
                <GitHubStats />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scaleX(0); }
          to { opacity: 1; transform: scaleX(1); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-scale-in { animation: scale-in 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </section>
  );
};

export default About;