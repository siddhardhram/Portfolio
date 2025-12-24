import { useState, useEffect } from 'react';
import { GitBranch, Star, GitFork } from 'lucide-react';

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

const GitHubStats = () => {
    const [contributions, setContributions] = useState<number[]>([]);
    const [totalContributions, setTotalContributions] = useState(38);
    const [isLoading, setIsLoading] = useState(true);
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState<number>(currentYear);

    useEffect(() => {
        // Fetch real GitHub contribution data
        const fetchGitHubData = async () => {
            setIsLoading(true);
            try {
                const username = 'siddhardhram'; // Your GitHub username

                // Using GitHub's contribution graph via github-contributions-api
                const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${selectedYear}`);
                const data = await response.json();

                if (data && data.contributions) {
                    const contributionArray: number[] = [];
                    let total = 0;

                    // Process the contributions
                    data.contributions.forEach((day: ContributionDay) => {
                        contributionArray.push(day.count);
                        total += day.count;
                    });

                    setContributions(contributionArray);
                    setTotalContributions(total);
                } else {
                    // Fallback to default data if API fails
                    setContributions(generateFallbackContributions());
                }
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                // Use fallback data
                setContributions(generateFallbackContributions());
            } finally {
                setIsLoading(false);
            }
        };

        fetchGitHubData();
    }, [selectedYear]);

    // Fallback contribution data (38 contributions spread across the year)
    const generateFallbackContributions = () => {
        const contributions: number[] = [];
        const totalDays = 365;
        const totalContribs = 38;

        // Initialize all days with 0
        for (let i = 0; i < totalDays; i++) {
            contributions.push(0);
        }

        // Distribute 38 contributions across the year
        let remaining = totalContribs;
        while (remaining > 0) {
            const randomDay = Math.floor(Math.random() * totalDays);
            const randomAmount = Math.min(Math.floor(Math.random() * 4) + 1, remaining);
            contributions[randomDay] += randomAmount;
            remaining -= randomAmount;
        }

        return contributions;
    };

    const getContributionColor = (count: number) => {
        if (count === 0) return 'bg-neutral-100 dark:bg-neutral-900';
        if (count === 1) return 'bg-cyan-200 dark:bg-cyan-900/40';
        if (count === 2) return 'bg-cyan-400 dark:bg-cyan-700/60';
        if (count >= 3) return 'bg-cyan-600 dark:bg-cyan-500';
        return 'bg-neutral-100 dark:bg-neutral-900';
    };

    // Calculate streak
    const calculateStreak = () => {
        let currentStreak = 0;
        let maxStreak = 0;
        let tempStreak = 0;

        for (let i = contributions.length - 1; i >= 0; i--) {
            if (contributions[i] > 0) {
                tempStreak++;
                if (i === contributions.length - 1 || currentStreak === 0) {
                    currentStreak = tempStreak;
                }
            } else {
                maxStreak = Math.max(maxStreak, tempStreak);
                tempStreak = 0;
            }
        }
        maxStreak = Math.max(maxStreak, tempStreak);

        return { currentStreak, maxStreak };
    };

    const { currentStreak, maxStreak } = calculateStreak();

    // Group contributions by week
    const weeks: number[][] = [];
    for (let i = 0; i < contributions.length; i += 7) {
        weeks.push(contributions.slice(i, i + 7));
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Total Contributions */}
                <div className="bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-950/20 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Total Contributions</p>
                            <p className="text-3xl font-bold text-black dark:text-white">{totalContributions}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">in {selectedYear}</p>
                        </div>
                        <div className="bg-cyan-500/10 p-3 rounded-full">
                            <GitBranch className="text-cyan-500" size={24} />
                        </div>
                    </div>
                </div>

                {/* Current Streak */}
                <div className="bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Current Streak</p>
                            <p className="text-3xl font-bold text-black dark:text-white">{currentStreak}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">days</p>
                        </div>
                        <div className="bg-orange-500/10 p-3 rounded-full">
                            <Star className="text-orange-500" size={24} />
                        </div>
                    </div>
                </div>

                {/* Longest Streak */}
                <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Longest Streak</p>
                            <p className="text-3xl font-bold text-black dark:text-white">{maxStreak}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">days</p>
                        </div>
                        <div className="bg-purple-500/10 p-3 rounded-full">
                            <GitFork className="text-purple-500" size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Contribution Graph */}
            <div className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h4 className="text-lg font-semibold text-black dark:text-white mb-1">Contribution Graph</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">{totalContributions} contributions in {selectedYear}</p>
                    </div>

                    {/* Year Selector */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="year-select" className="text-sm text-neutral-600 dark:text-neutral-400">Year:</label>
                        <select
                            id="year-select"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                            className="px-3 py-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
                        >
                            <option value={currentYear}>{currentYear} (Current)</option>
                            <option value={currentYear - 1}>{currentYear - 1}</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <div className="inline-flex gap-1 min-w-full">
                        {weeks.map((week, weekIndex) => (
                            <div key={weekIndex} className="flex flex-col gap-1">
                                {week.map((count, dayIndex) => {
                                    return (
                                        <div
                                            key={dayIndex}
                                            className={`w-3 h-3 rounded-sm ${getContributionColor(count)} border border-neutral-200 dark:border-neutral-800 transition-all duration-200 hover:scale-125 hover:border-cyan-500 cursor-pointer`}
                                            title={`${count} contribution${count !== 1 ? 's' : ''}`}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-2 mt-4 text-xs text-neutral-600 dark:text-neutral-400">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-sm bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"></div>
                        <div className="w-3 h-3 rounded-sm bg-cyan-200 dark:bg-cyan-900/40 border border-neutral-200 dark:border-neutral-800"></div>
                        <div className="w-3 h-3 rounded-sm bg-cyan-400 dark:bg-cyan-700/60 border border-neutral-200 dark:border-neutral-800"></div>
                        <div className="w-3 h-3 rounded-sm bg-cyan-600 dark:bg-cyan-500 border border-neutral-200 dark:border-neutral-800"></div>
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
    );
};

export default GitHubStats;
