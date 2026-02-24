import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const VisitorCounter = () => {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const res = await fetch('https://api.counterapi.dev/v1/siddhardhram-portfolio/visits/up');
                const data = await res.json();
                setCount(data.count ?? data.value ?? null);
            } catch (e) {
                console.error('Visitor counter failed:', e);
            }
        };
        fetchCount();
    }, []);

    return (
        <div className="w-full py-3 border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-black">
            <div className="flex items-center justify-center gap-2 text-neutral-400 dark:text-neutral-600 text-xs select-none">
                <Eye size={12} />
                <span>
                    {count !== null
                        ? <>{count.toLocaleString()} <span className="opacity-70">visitors</span></>
                        : <span className="opacity-50">counting visits…</span>
                    }
                </span>
            </div>
        </div>
    );
};

export default VisitorCounter;
