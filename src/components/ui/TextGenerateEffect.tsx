import { useEffect, useState } from 'react';

interface TextGenerateEffectProps {
    words: string;
    className?: string;
}

export const TextGenerateEffect = ({ words, className = '' }: TextGenerateEffectProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < words.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + words[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 30); // Speed of text generation

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, words]);

    return (
        <span className={className}>
            {displayedText}
            {currentIndex < words.length && (
                <span className="animate-pulse">|</span>
            )}
        </span>
    );
};
