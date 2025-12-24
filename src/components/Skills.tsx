import { Code2, Database, Terminal, Cpu, Palette, Server, FileCode } from 'lucide-react';

const techStackIcons = [
  { name: 'React', icon: <Code2 className="text-[#61DAFB]" />, color: "border-[#61DAFB]/20 hover:border-[#61DAFB]" },
  { name: 'JavaScript', icon: <FileCode className="text-[#F7DF1E]" />, color: "border-[#F7DF1E]/20 hover:border-[#F7DF1E]" },
  { name: 'Python', icon: <Terminal className="text-[#3776AB]" />, color: "border-[#3776AB]/20 hover:border-[#3776AB]" },
  { name: 'C++', icon: <Cpu className="text-[#00599C]" />, color: "border-[#00599C]/20 hover:border-[#00599C]" },
  { name: 'MySQL', icon: <Database className="text-[#4479A1]" />, color: "border-[#4479A1]/20 hover:border-[#4479A1]" },
  { name: 'Machine Learning', icon: <Cpu className="text-[#FF6F00]" />, color: "border-[#FF6F00]/20 hover:border-[#FF6F00]" },
  { name: 'Node.js', icon: <Server className="text-[#339933]" />, color: "border-[#339933]/20 hover:border-[#339933]" },
  { name: 'TailwindCSS', icon: <Palette className="text-[#06B6D4]" />, color: "border-[#06B6D4]/20 hover:border-[#06B6D4]" }
];

const Skills = () => (
  <section id="skills" className="py-12 bg-white dark:bg-black">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
          Skills & <span className="text-cyan-500">Technologies</span>
        </h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-xl mx-auto">
          Technologies I work with and love to explore
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {techStackIcons.map((tech) => (
          <span
            key={tech.name}
            className={`group px-5 py-3 bg-neutral-50 dark:bg-neutral-900 border ${tech.color} rounded-full text-black dark:text-white text-sm font-medium transition-all duration-300 flex items-center gap-3 hover:scale-105 hover:shadow-lg`}
          >
            <span className="text-lg transition-transform duration-300 group-hover:scale-110">{tech.icon}</span>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  </section >
);

export default Skills;
