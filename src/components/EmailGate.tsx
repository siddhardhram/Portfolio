import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail } from 'lucide-react';
import { emailConfig } from '../config/emailjs';

export const EmailGate = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Initialize EmailJS with the same config as Contact form
        emailjs.init(emailConfig.publicKey);
        setIsOpen(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            // Use exact same EmailJS setup as Contact form
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: 'New Portfolio Visitor',
                message: `New visitor to your portfolio!\n\nName: ${name}\nEmail: ${email}\nVisit Time: ${new Date().toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    dateStyle: 'full',
                    timeStyle: 'short'
                })}`,
                to_name: 'Siddhardha'
            };

            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                templateParams,
                emailConfig.publicKey
            );

            setIsOpen(false);
        } catch (err: any) {
            console.error('Email error:', err);
            const errText = err && (err.text || err.message)
                ? `${err.text || err.message}${err.status ? ` (status ${err.status})` : ''}`
                : 'Failed to submit. Please try again.';
            setError(errText);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg">
            <div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 border border-neutral-200 dark:border-neutral-800 animate-scale-in">

                <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 p-4 rounded-full shadow-lg">
                        <Mail className="text-white" size={32} />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-2">
                    Welcome to My Portfolio! 👋
                </h2>
                <p className="text-center text-neutral-600 dark:text-neutral-400 mb-6">
                    Please share your details to continue
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                            Your Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                            Your Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        />
                    </div>

                    {error && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                            <p className="text-red-600 dark:text-red-400 text-sm text-center">{error}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Submitting...
                            </span>
                        ) : (
                            'Continue to Portfolio'
                        )}
                    </button>
                </form>

                <p className="text-xs text-center text-neutral-400 mt-4">
                    🔒 Your information is safe and secure
                </p>
            </div>

            <style>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in { animation: scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
      `}</style>
        </div>
    );
};
