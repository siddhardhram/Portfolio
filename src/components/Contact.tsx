import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Check, MessageCircle, User, Calendar, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailjs';

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(emailConfig.publicKey);
    // Quick sanity log to confirm env values are available at runtime
    // (will show in browser console; safe to remove after debugging)
    try {
      // mask public key when logging
      const maskedKey = emailConfig.publicKey ? `${String(emailConfig.publicKey).slice(0, 6)}...` : 'undefined';
      // eslint-disable-next-line no-console
      console.log('EmailJS config -> serviceId:', emailConfig.serviceId, 'templateId:', emailConfig.templateId, 'publicKey:', maskedKey);
    } catch (e) {
      // ignore logging errors
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Siddhardha' // Your name as the recipient
      };

      // Explicitly pass public key as 4th arg to ensure request is authenticated
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (err: any) {
      console.error('Email send error:', err);
      // Extract helpful info from EmailJS error object when available
      const errText = err && (err.text || err.message)
        ? `${err.text || err.message}${err.status ? ` (status ${err.status})` : ''}`
        : 'Failed to send message. Please try again.';
      setSubmitError(errText);
      // keep error visible a little longer for debugging
      setTimeout(() => setSubmitError(null), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ponnamandaram711@gmail.com',
      href: 'mailto:ponnamandaram711@gmail.com',
      color: 'from-red-500 to-pink-500',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9346678553',
      href: 'tel:+91XXXXXXXXXX',
      color: 'from-green-500 to-teal-500',
      description: 'Available for calls'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Andhra Pradesh, India',
      href: '#',
      color: 'from-blue-500 to-cyan-500',
      description: 'Based in India, work globally'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/siddhardhram',
      icon: Github,
      color: 'hover:text-gray-400',
      username: '@siddhardhram',
      description: 'Check out my code',
      followers: '50+ followers'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ponnamandasiddhardha',
      icon: Linkedin,
      color: 'hover:text-blue-400',
      username: 'Siddhardha Ponnamanda',
      description: 'Professional network',
      followers: '200+ connections'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/satyasiddhardha',
      icon: ExternalLink,
      color: 'hover:text-yellow-400',
      username: '@satyasiddhardha',
      description: 'Coding challenges',
      followers: '100+ problems solved'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-teal-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-1/3 animate-float">
          <MessageCircle className="text-purple-400/20" size={24} />
        </div>
        <div className="absolute bottom-40 left-1/3 animate-float" style={{ animationDelay: '1s' }}>
          <Mail className="text-blue-400/20" size={20} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Get In <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 animate-scale-in"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I'm always open to discussing new opportunities, interesting projects, or just connecting with fellow developers
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <User className="mr-3 text-purple-400" size={24} />
                Let's Connect
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            {/* Enhanced Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center p-4 bg-slate-800/30 border border-slate-700/30 rounded-xl hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mr-4`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">{info.value}</p>
                      <p className="text-slate-500 text-xs">{info.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <ExternalLink className="mr-2 text-blue-400" size={20} />
                Follow Me
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 p-3 bg-slate-800/20 border border-slate-700/20 rounded-lg hover:bg-slate-800/40 hover:border-slate-600/40 text-slate-400 ${social.color} transition-all duration-300 hover:scale-105`}
                    >
                      <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{social.name}</span>
                          <span className="text-sm text-slate-500">({social.username})</span>
                        </div>
                        <p className="text-xs text-slate-500">{social.description} • {social.followers}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-right">
            {submitError && (
              <div className="mb-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 flex items-center gap-2">
                <AlertCircle size={20} />
                {submitError}
              </div>
            )}
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 pl-12 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                      placeholder="Your full name"
                    />
                    <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${focusedField === 'name' ? 'text-purple-400' : 'text-slate-500'}`} size={16} />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 pl-12 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${focusedField === 'email' ? 'text-purple-400' : 'text-slate-500'}`} size={16} />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="subject" className="block text-slate-300 text-sm font-medium mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 pl-12 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="internship">Internship Opportunity</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="job">Job Opportunity</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  <Calendar className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${focusedField === 'subject' ? 'text-purple-400' : 'text-slate-500'}`} size={16} />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className="w-full px-4 py-3 pl-12 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                  <MessageCircle className={`absolute left-4 top-4 transition-colors duration-300 ${focusedField === 'message' ? 'text-purple-400' : 'text-slate-500'}`} size={16} />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-purple-600/50 disabled:to-blue-600/50 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span className="animate-pulse">Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check size={20} className="animate-bounce" />
                    <span className="animate-pulse">Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700/50 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400">
              © 2025 Siddhardha Ponnamanda. Built with React & TailwindCSS
            </p>
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <span>Siddhardha</span>
              <span>•</span>
              <span>Open to opportunities</span>
            </div>
          </div>
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
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
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;