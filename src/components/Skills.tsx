import { Code2, Database, Terminal, Cpu, Palette, Server, FileCode, Send, Sparkles } from 'lucide-react';

const techStackIcons = [
  { name: 'React', icon: <Code2 className="text-[#61DAFB]" />, color: "border-[#61DAFB]/30 hover:border-[#61DAFB]" },
  { name: 'JavaScript', icon: <FileCode className="text-[#F7DF1E]" />, color: "border-[#F7DF1E]/30 hover:border-[#F7DF1E]" },
  { name: 'Python', icon: <Terminal className="text-[#3776AB]" />, color: "border-[#3776AB]/30 hover:border-[#3776AB]" },
  { name: 'Postman', icon: <Send className="text-[#FF6C37]" />, color: "border-[#FF6C37]/30 hover:border-[#FF6C37]" },
  { name: 'MongoDB', icon: <Database className="text-[#47A248]" />, color: "border-[#47A248]/30 hover:border-[#47A248]" },
  { name: 'MySQL', icon: <Database className="text-[#4479A1]" />, color: "border-[#4479A1]/30 hover:border-[#4479A1]" },
  { name: 'Machine Learning', icon: <Cpu className="text-[#FF6F00]" />, color: "border-[#FF6F00]/30 hover:border-[#FF6F00]" },
  { name: 'Node.js', icon: <Server className="text-[#339933]" />, color: "border-[#339933]/30 hover:border-[#339933]" },
  { name: 'TailwindCSS', icon: <Palette className="text-[#06B6D4]" />, color: "border-[#06B6D4]/30 hover:border-[#06B6D4]" }
];

const Skills = () => (
  <section id="skills" className="py-20 bg-white dark:bg-black relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles size={14} className="text-cyan-500" />
          Technical Stack
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-4">
          Skills & <span className="text-cyan-500">Technologies</span>
        </h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-xl mx-auto">
          Technologies I work with and love to explore
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {techStackIcons.map((tech) => (
          <span
            key={tech.name}
            className={`group px-6 py-3.5 bg-neutral-50 dark:bg-neutral-900/80 border ${tech.color} rounded-full text-black dark:text-white text-sm sm:text-base font-medium transition-all duration-300 flex items-center gap-3 hover:scale-105 hover:shadow-lg shadow-sm`}
          >
            <span className="text-xl transition-transform duration-300 group-hover:scale-110 flex items-center">
              {tech.icon}
            </span>
            <span>{tech.name}</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
