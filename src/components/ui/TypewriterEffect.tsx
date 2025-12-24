import { useEffect, useState } from "react";

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex].text;
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setCurrentText(word.substring(0, currentText.length + 1));
                    if (currentText === word) {
                        setTimeout(() => setIsDeleting(true), 1500);
                    }
                } else {
                    setCurrentText(word.substring(0, currentText.length - 1));
                    if (currentText === "") {
                        setIsDeleting(false);
                        setCurrentWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <div className={className}>
            <span className={words[currentWordIndex].className}>
                {currentText}
            </span>
            <span className={cursorClassName || "animate-pulse"}>|</span>
        </div>
    );
};
