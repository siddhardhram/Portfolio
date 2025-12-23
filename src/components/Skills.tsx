const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Python', icon: '🐍' },
  { name: 'C++', icon: '💻' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Machine Learning', icon: '🤖' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TailwindCSS', icon: '🎨' }
];

const Skills = () => (
  <section id="skills" className="py-20 bg-slate-900/40">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills & Technologies</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Technologies I work with and love to explore
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            className="group px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-300 text-base font-medium hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-105"
          >
            <span className="text-xl group-hover:animate-bounce">{tech.icon}</span>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
