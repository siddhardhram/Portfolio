import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Check, MessageCircle, User, Calendar, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailjs';

const Contact = () => {
  useEffect(() => {
    emailjs.init(emailConfig.publicKey);
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
        to_name: 'Siddhardha'
      };

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
      const errText = err && (err.text || err.message)
        ? `${err.text || err.message}${err.status ? ` (status ${err.status})` : ''}`
        : 'Failed to send message. Please try again.';
      setSubmitError(errText);
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
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9346678553',
      href: 'tel:+919346678553',
      description: 'Available for calls'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Andhra Pradesh, India',
      href: '#',
      description: 'Based in India, work globally'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/siddhardhram',
      icon: Github,
      username: '@siddhardhram',
      description: 'Check out my code',
      followers: '50+ followers'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ponnamandasiddhardha',
      icon: Linkedin,
      username: 'Siddhardha Ponnamanda',
      description: 'Professional network',
      followers: '200+ connections'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/satyasiddhardha',
      icon: ExternalLink,
      username: '@satyasiddhardha',
      description: 'Coding challenges',
      followers: '100+ problems solved'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-8 tracking-tight animate-fade-in-up">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8 animate-scale-in"></div>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Let's turn ideas into reality. Whether you're looking to build something extraordinary or just want to connect over code and coffee, I'm all ears.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Enhanced Contact Information */}
          <div className="lg:col-span-1 space-y-10 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-6 flex items-center gap-3">
                <User className="text-black dark:text-white" size={24} />
                Let's Connect
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 text-lg">
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
                    className="group flex items-center p-4 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg flex items-center justify-center group-hover:border-cyan-500 transition-colors duration-300 mr-4`}>
                      <Icon className="text-black dark:text-white group-hover:text-cyan-500 transition-colors" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm">{info.label}</p>
                      <p className="text-black dark:text-white font-medium group-hover:text-cyan-500 transition-colors duration-300">{info.value}</p>
                      <p className="text-neutral-400 text-xs">{info.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-black dark:text-white mb-4 flex items-center">
                <ExternalLink className="mr-2 text-cyan-500" size={20} />
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
                      className={`group flex items-center gap-3 p-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-cyan-500/50 transition-all duration-300 hover:scale-105`}
                    >
                      <Icon size={20} className="text-black dark:text-white group-hover:text-cyan-500 transition-transform duration-300 group-hover:scale-110" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-black dark:text-white group-hover:text-cyan-500 transition-colors">{social.name}</span>
                          <span className="text-sm text-neutral-500">({social.username})</span>
                        </div>
                        <p className="text-xs text-neutral-400">{social.description} • {social.followers}</p>
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
              <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 flex items-center gap-2">
                <AlertCircle size={20} />
                {submitError}
              </div>
            )}
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-neutral-700 dark:text-neutral-300 text-sm font-medium mb-2">
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
                      className="w-full px-4 py-3 pl-12 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-black dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                      placeholder="Your full name"
                    />
                    <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${focusedField === 'name' ? 'text-cyan-500' : 'text-neutral-500'}`} size={16} />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block text-neutral-700 dark:text-neutral-300 text-sm font-medium mb-2">
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
                      className="w-full px-4 py-3 pl-12 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-black dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${focusedField === 'email' ? 'text-cyan-500' : 'text-neutral-500'}`} size={16} />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="subject" className="block text-neutral-700 dark:text-neutral-300 text-sm font-medium mb-2">
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
                    className="w-full px-4 py-3 pl-12 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="internship">Internship Opportunity</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="job">Job Opportunity</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  <Calendar className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${focusedField === 'subject' ? 'text-cyan-500' : 'text-neutral-500'}`} size={16} />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-neutral-700 dark:text-neutral-300 text-sm font-medium mb-2">
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
                    className="w-full px-4 py-3 pl-12 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-black dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                  <MessageCircle className={`absolute left-4 top-4 transition-colors duration-300 ${focusedField === 'message' ? 'text-cyan-500' : 'text-neutral-500'}`} size={16} />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2 hover:-translate-y-1 border border-neutral-800 dark:border-neutral-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
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
        <div className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 dark:text-neutral-400">
              © 2025 Siddhardha Ponnamanda. Built with React & TailwindCSS
            </p>
            <div className="flex items-center gap-4 text-neutral-500 text-sm">
              <span>Siddhardha</span>
              <span>•</span>
              <span>Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scaleX(0); }
          to { opacity: 1; transform: scaleX(1); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; opacity: 0; }
        .animate-scale-in { animation: scale-in 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </section>
  );
};

export default Contact;