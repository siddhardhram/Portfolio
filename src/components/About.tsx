import React, { useState } from 'react';
import { GraduationCap, Award, Target, Heart, TrendingUp, Users, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence & Machine Learning',
      institution: 'SRKR Engineering College',
      period: '2022 - Present',
      status: 'Pursuing',
      icon: GraduationCap,
      color: 'from-purple-500 to-blue-500',
      description: 'Specializing in AI/ML algorithms, deep learning, and data science with hands-on projects.',
      achievements: ['Dean\'s List', 'AI Research Project', 'Hackathon Winner']
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Aditya Junior College',
      period: '2021 - 2023',
      status: '9.6%',
      icon: Award,
      color: 'from-blue-500 to-teal-500',
      description: 'Mathematics, Physics, Chemistry with exceptional performance in analytical subjects.',
      achievements: ['Top 1% in State', 'Mathematics Olympiad', 'Science Fair Winner']
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Sujatha High School',
      period: '2008 - 2021',
      status: '100%',
      icon: Target,
      color: 'from-teal-500 to-emerald-500',
      description: 'Perfect score achievement with strong foundation in core subjects.',
      achievements: ['Perfect Score', 'School Topper', 'Academic Excellence Award']
    }
  ];

  const interests = [
    { icon: Lightbulb, title: 'Innovation', description: 'Creating solutions that matter' },
    { icon: Users, title: 'Collaboration', description: 'Building with amazing teams' },
    { icon: Coffee, title: 'Learning', description: 'Always exploring new tech' },
    { icon: TrendingUp, title: 'Growth', description: 'Continuous improvement mindset' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-purple-500 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-500 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-teal-500 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 animate-scale-in"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Passionate about the intersection of AI and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Description */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white animate-pulse" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">My Journey</h3>
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p className="hover:text-slate-200 transition-colors duration-300">
                  I'm a passionate B.Tech student specializing in Artificial Intelligence and Machine Learning, 
                  with a deep fascination for how technology can solve real-world problems. My journey in tech 
                  began with curiosity about how things work behind the scenes.
                </p>
                <p className="hover:text-slate-200 transition-colors duration-300">
                  From building my first "Hello World" program to developing full-stack applications and training 
                  machine learning models, I've embraced every challenge as an opportunity to grow. I believe in 
                  the power of continuous learning and staying updated with emerging technologies.
                </p>
                <p className="hover:text-slate-200 transition-colors duration-300">
                  When I'm not coding, you'll find me exploring new frameworks, participating in hackathons, 
                  or contributing to open-source projects. I'm always excited to collaborate on innovative 
                  projects that make a positive impact.
                </p>
              </div>
            </div>

            {/* Interests Grid */}
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <div 
                    key={index}
                    className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 text-center hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={20} />
                    </div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-purple-300 transition-colors duration-300">{interest.title}</h4>
                    <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">{interest.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 text-center hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-slate-300 text-sm">Projects Completed</div>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 text-center hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">8+</div>
                <div className="text-slate-300 text-sm">Certifications</div>
              </div>
            </div>
          </div>

          {/* Enhanced Education Timeline */}
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center lg:text-left flex items-center">
              <GraduationCap className="mr-3 text-purple-400" size={28} />
              Education Timeline
            </h3>
            {education.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredCard === index;
              return (
                <div 
                  key={index}
                  className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative`}>
                      <Icon className="text-white" size={24} />
                      {isHovered && (
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl animate-pulse"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {item.degree}
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                          item.status === 'Pursuing' 
                            ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 group-hover:bg-yellow-500/30' 
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 group-hover:bg-emerald-500/30'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-slate-400 mb-1 group-hover:text-slate-300 transition-colors duration-300">{item.institution}</p>
                      <p className="text-slate-500 text-sm mb-3 group-hover:text-slate-400 transition-colors duration-300">{item.period}</p>
                      
                      {/* Description */}
                      <p className="text-slate-400 text-sm mb-3 group-hover:text-slate-300 transition-colors duration-300">
                        {item.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md hover:bg-slate-700 transition-all duration-200 hover:scale-105"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${item.color} rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    

      <style >{`
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
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default About;