import { useRef, useState, useEffect } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import { cn } from "../../utils/cn";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon: JSX.Element;
    }[];
    className?: string;
}) => {
    let mouseX = useMotionValue(Infinity);
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
        }
        return 'dark';
    });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Show navbar when scrolled down more than 100px
            setIsVisible(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Initialize theme effect
    useState(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{
                y: isVisible ? 0 : 100,
                opacity: isVisible ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "mx-auto flex h-16 gap-4 items-end rounded-2xl bg-white dark:bg-black px-4 pb-3 z-[9999] fixed bottom-8 inset-x-0 w-fit border border-neutral-200 dark:border-white/[0.2]",
                className
            )}
        >
            {navItems.map((navItem, idx) => (
                <IconContainer
                    mouseX={mouseX}
                    key={idx}
                    {...navItem}
                />
            ))}

            {/* Theme Toggle as a Dock Item */}
            <IconContainer
                mouseX={mouseX}
                key="theme-toggle"
                name="Toggle Theme"
                icon={theme === 'dark' ? <Sun className="h-full w-full text-neutral-500 dark:text-neutral-300" /> : <Moon className="h-full w-full text-neutral-500 dark:text-neutral-300" />}
                link="#"
                onClick={toggleTheme}
            />
        </motion.div>
    );
};

function IconContainer({
    mouseX,
    name,
    icon,
    link,
    onClick,
}: {
    mouseX: any;
    name?: string;
    icon: any;
    link: string;
    onClick?: () => void;
}) {
    let ref = useRef<HTMLDivElement>(null);

    let distance = useTransform(mouseX, (val: number) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const isInternal = link.startsWith("#") || !link.startsWith("http");

    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.preventDefault();
            onClick();
            return;
        }

        // Handle home link - scroll to top
        if (link === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (isInternal && link.startsWith('#')) {
            e.preventDefault();
            const element = document.getElementById(link.substring(1)); // Remove #
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const content = (
        <motion.div
            ref={ref}
            style={{ width, height }}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative group" // Added group for tooltip
            title={name}
        >
            <AnimatePresence>
                <div className="flex items-center justify-center w-full h-full p-2"> {/* Added padding to prevent icon touching edges */}
                    {icon}
                </div>
            </AnimatePresence>
        </motion.div>
    );

    if (onClick) {
        return (
            <button onClick={handleClick} className="focus:outline-none" aria-label={name}>
                {content}
            </button>
        );
    }

    // Use Link for internal routes (starting with /)
    if (isInternal && link.startsWith('/')) {
        return (
            <Link to={link} onClick={handleClick} aria-label={name}>
                {content}
            </Link>
        );
    }

    // Use anchor for hash links and external links
    return (
        <a
            href={link}
            target={!isInternal ? "_blank" : undefined}
            rel={!isInternal ? "noopener noreferrer" : undefined}
            onClick={handleClick}
            aria-label={name}
        >
            {content}
        </a>
    );
}
