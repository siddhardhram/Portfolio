import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, X } from 'lucide-react';

export const EmailGate = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Check if user has already submitted email
        const hasSubmitted = localStorage.getItem('portfolio_email_submitted');
        if (!hasSubmitted) {
            // Show modal after 1 second
            setTimeout(() => setIsOpen(true), 1000);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            // Send email notification to you via EmailJS
            await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                {
                    visitor_name: name || 'Anonymous',
                    visitor_email: email,
                    visit_date: new Date().toLocaleString(),
                },
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
            );

            // Store in localStorage to prevent re-prompting
            localStorage.setItem('portfolio_email_submitted', 'true');
            localStorage.setItem('visitor_email', email);

            setIsOpen(false);
        } catch (err) {
            setError('Something went wrong. Please try again.');
            console.error('EmailJS error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSkip = () => {
        // Allow skip but mark as submitted to not show again
        localStorage.setItem('portfolio_email_submitted', 'true');
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 border border-neutral-200 dark:border-neutral-800 animate-scale-in">
                {/* Close button */}
                <button
                    onClick={handleSkip}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                    aria-label="Skip"
                >
                    <X size={20} />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-cyan-500/10 p-4 rounded-full">
                        <Mail className="text-cyan-500" size={32} />
                    </div>
                </div>

                {/* Content */}
                <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-2">
                    Welcome! 👋
                </h2>
                <p className="text-center text-neutral-600 dark:text-neutral-400 mb-6">
                    I'd love to know who's checking out my portfolio. Drop your email to stay connected!
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                            Name (Optional)
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : 'Continue to Portfolio'}
                    </button>

                    <button
                        type="button"
                        onClick={handleSkip}
                        className="w-full text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 text-sm transition-colors"
                    >
                        Skip for now
                    </button>
                </form>
            </div>

            <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-in { animation: scale-in 0.3s ease-out; }
      `}</style>
        </div>
    );
};
