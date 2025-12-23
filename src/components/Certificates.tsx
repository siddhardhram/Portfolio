import { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Trophy, Medal, Star, Zap } from 'lucide-react';

const Certificates = () => {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  const certificates = [
    {
      title: 'Frontend Web Development',
      issuer: 'Udemy',
      date: '2023',
      description: 'Comprehensive course covering React, JavaScript, HTML5, CSS3, and modern web development practices.',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
      verified: true,
      color: 'from-blue-500 to-cyan-500',
      icon: Award,
      level: 'Advanced',
      duration: '40 hours',
      rating: 4.8
    },
    {
      title: 'C Programming Language Certified Associate',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      description: 'Professional certification in C programming fundamentals, data structures, and algorithm implementation.',
      skills: ['C Programming', 'Data Structures', 'Algorithms', 'Memory Management'],
      verified: true,
      color: 'from-green-500 to-teal-500',
      icon: Trophy,
      level: 'Professional',
      duration: '60 hours',
      rating: 4.9
    },
    {
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      date: '2023',
      description: 'Security fundamentals, network security, cryptography, and cybersecurity best practices.',
      skills: ['Network Security', 'Cryptography', 'Risk Management', 'Threat Analysis'],
      verified: true,
      color: 'from-red-500 to-orange-500',
      icon: Medal,
      level: 'Intermediate',
      duration: '30 hours',
      rating: 4.7
    },
    {
      title: 'MySQL Database Administration',
      issuer: 'Database Certification Authority',
      date: '2023',
      description: 'Advanced MySQL database design, optimization, administration, and query performance tuning.',
      skills: ['MySQL', 'Database Design', 'Query Optimization', 'Data Modeling'],
      verified: true,
      color: 'from-purple-500 to-pink-500',
      icon: Star,
      level: 'Advanced',
      duration: '45 hours',
      rating: 4.8
    },
    {
      title: 'Google AICTE Internship Program',
      issuer: 'Google & AICTE',
      date: '2023',
      description: 'Intensive internship program focusing on AI/ML technologies, cloud computing, and industry projects.',
      skills: ['Machine Learning', 'Cloud Computing', 'Python', 'Data Analysis'],
      verified: true,
      color: 'from-yellow-500 to-orange-500',
      icon: Zap,
      level: 'Professional',
      duration: '120 hours',
      rating: 5.0
    },
    {
      title: 'Advanced React Development',
      issuer: 'Tech Institute',
      date: '2023',
      description: 'Advanced React concepts including hooks, context API, performance optimization, and testing.',
      skills: ['React Hooks', 'Context API', 'Performance Optimization', 'Testing'],
      verified: true,
      color: 'from-indigo-500 to-purple-500',
      icon: Award,
      level: 'Expert',
      duration: '35 hours',
      rating: 4.9
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Advanced': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'Professional': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Expert': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border border-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-teal-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Icons */}
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <Medal className="text-purple-400/20" size={28} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Certificates & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 animate-scale-in"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Professional certifications and continuous learning achievements that validate my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            const isHovered = hoveredCert === index;
            return (
              <div 
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCert(index)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`relative w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={24} />
                    {isHovered && (
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl animate-pulse"></div>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {cert.verified && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                        <CheckCircle className="text-emerald-400" size={14} />
                        <span className="text-emerald-300 text-xs font-medium">Verified</span>
                      </div>
                    )}
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <div className="flex items-center justify-between mb-3">
                  <p className="text-slate-400 text-sm font-medium">{cert.issuer}</p>
                  <div className="flex items-center gap-1 text-slate-400 text-sm">
                    <Calendar size={14} />
                    {cert.date}
                  </div>
                </div>

                {/* Rating and Duration */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        className={i < Math.floor(cert.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'} 
                      />
                    ))}
                    <span className="text-slate-400 text-xs ml-1">{cert.rating}</span>
                  </div>
                  <span className="text-slate-500 text-xs">{cert.duration}</span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-300">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-slate-300 text-sm font-medium mb-2">Skills Acquired:</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md hover:bg-slate-700 transition-all duration-200 hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Certificate Button */}
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 hover:from-purple-600/30 hover:to-blue-600/30 text-purple-300 hover:text-purple-200 rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 hover:-translate-y-0.5">
                  <ExternalLink size={16} />
                  View Certificate
                </button>

                {/* Animated Progress Bar */}
                <div className="mt-4 h-1 bg-slate-700/50 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${cert.color} rounded-full transition-all duration-1000 ${isHovered ? 'w-full' : 'w-0'}`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {[
            { value: '8+', label: 'Certifications', icon: Award, color: 'text-blue-400' },
            { value: '5+', label: 'Technologies', icon: Zap, color: 'text-purple-400' },
            { value: '100%', label: 'Verified', icon: CheckCircle, color: 'text-teal-400' },
            { value: '2023', label: 'Recent Year', icon: Calendar, color: 'text-emerald-400' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-slate-800/30 border border-slate-700/30 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-center mb-3">
                  <Icon className={`${stat.color} group-hover:scale-110 transition-transform duration-300`} size={24} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-slate-300 text-sm group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Certificates;