import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

export const EmailGate = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Just log the info to console (you can see it in browser console)
        console.log('Portfolio Visitor:', { name, email, time: new Date().toLocaleString() });

        // Store in localStorage so you can check later
        const visitors = JSON.parse(localStorage.getItem('portfolio_visitors') || '[]');
        visitors.push({
            name,
            email,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('portfolio_visitors', JSON.stringify(visitors));

        // Close modal and let them through
        setIsOpen(false);
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

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                        Continue to Portfolio
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
