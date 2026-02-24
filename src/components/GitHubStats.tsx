import { useState, useEffect } from 'react';
import { GitBranch, Star, GitFork, Users, BookOpen, Eye } from 'lucide-react';

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

interface GitHubProfile {
    followers: number;
    following: number;
    public_repos: number;
    name: string;
    avatar_url: string;
}

const GitHubStats = () => {
    const [contributions, setContributions] = useState<number[]>([]);
    const [totalContributions, setTotalContributions] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState<GitHubProfile | null>(null);
    const [visitorCount, setVisitorCount] = useState<number | null>(null);
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState<number>(currentYear);

    // Fetch GitHub profile
    useEffect(() => {
        const fetchGitHubProfile = async () => {
            try {
                const res = await fetch('https://api.github.com/users/siddhardhram');
                const data = await res.json();
                setProfile({
                    followers: data.followers,
                    following: data.following,
                    public_repos: data.public_repos,
                    name: data.name,
                    avatar_url: data.avatar_url,
                });
            } catch (e) {
                console.error('Failed to fetch GitHub profile:', e);
            }
        };
        fetchGitHubProfile();
    }, []);

    // Visitor Counter via countapi.xyz
    useEffect(() => {
        const incrementVisitor = async () => {
            try {
                const res = await fetch('https://api.countapi.xyz/hit/siddhardhram-portfolio/visits');
                const data = await res.json();
                setVisitorCount(data.value);
            } catch (e) {
                console.error('Failed to fetch visitor count:', e);
            }
        };
        incrementVisitor();
    }, []);

    // Fetch contributions
    useEffect(() => {
        const fetchGitHubData = async () => {
            setIsLoading(true);
            try {
                const username = 'siddhardhram';
                const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${selectedYear}`);
                const data = await response.json();

                if (data && data.contributions) {
                    const contributionArray: number[] = [];
                    let total = 0;

                    data.contributions.forEach((day: ContributionDay) => {
                        contributionArray.push(day.count);
                        total += day.count;
                    });

                    setContributions(contributionArray);
                    setTotalContributions(total);
                } else {
                    setContributions(generateFallbackContributions());
                }
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                setContributions(generateFallbackContributions());
            } finally {
                setIsLoading(false);
            }
        };

        fetchGitHubData();
    }, [selectedYear]);

    const generateFallbackContributions = () => {
        const contributions: number[] = [];
        for (let i = 0; i < 365; i++) contributions.push(0);
        return contributions;
    };

    const getContributionColor = (count: number) => {
        if (count === 0) return 'bg-neutral-100 dark:bg-neutral-900';
        if (count === 1) return 'bg-cyan-200 dark:bg-cyan-900/40';
        if (count === 2) return 'bg-cyan-400 dark:bg-cyan-700/60';
        if (count >= 3) return 'bg-cyan-600 dark:bg-cyan-500';
        return 'bg-neutral-100 dark:bg-neutral-900';
    };

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

    const { maxStreak } = calculateStreak();

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

            {/* Profile Stats from GitHub API */}
            {profile && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Public Repos */}
                    <div className="bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-950/20 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Public Repos</p>
                                <p className="text-3xl font-bold text-black dark:text-white">{profile.public_repos}</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">repositories</p>
                            </div>
                            <div className="bg-cyan-500/10 p-3 rounded-full">
                                <BookOpen className="text-cyan-500" size={24} />
                            </div>
                        </div>
                    </div>

                    {/* Followers */}
                    <div className="bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Followers</p>
                                <p className="text-3xl font-bold text-black dark:text-white">{profile.followers}</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">on GitHub</p>
                            </div>
                            <div className="bg-orange-500/10 p-3 rounded-full">
                                <Users className="text-orange-500" size={24} />
                            </div>
                        </div>
                    </div>

                    {/* Following */}
                    <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Following</p>
                                <p className="text-3xl font-bold text-black dark:text-white">{profile.following}</p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">developers</p>
                            </div>
                            <div className="bg-purple-500/10 p-3 rounded-full">
                                <GitFork className="text-purple-500" size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Contribution Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Contributions</p>
                            <p className="text-3xl font-bold text-black dark:text-white">{totalContributions}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">in {selectedYear}</p>
                        </div>
                        <div className="bg-green-500/10 p-3 rounded-full">
                            <GitBranch className="text-green-500" size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-950/20 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Longest Streak</p>
                            <p className="text-3xl font-bold text-black dark:text-white">{maxStreak}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">days</p>
                        </div>
                        <div className="bg-yellow-500/10 p-3 rounded-full">
                            <Star className="text-yellow-500" size={24} />
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
                                {week.map((count, dayIndex) => (
                                    <div
                                        key={dayIndex}
                                        className={`w-3 h-3 rounded-sm ${getContributionColor(count)} border border-neutral-200 dark:border-neutral-800 transition-all duration-200 hover:scale-125 hover:border-cyan-500 cursor-pointer`}
                                        title={`${count} contribution${count !== 1 ? 's' : ''}`}
                                    />
                                ))}
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

            {/* Visitor Counter */}
            <div className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-center gap-4">
                    <div className="bg-cyan-500/10 p-3 rounded-full">
                        <Eye className="text-cyan-500" size={22} />
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Portfolio Visitors</p>
                        <p className="text-3xl font-bold text-black dark:text-white">
                            {visitorCount !== null ? visitorCount.toLocaleString() : '—'}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">total visits since launch</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GitHubStats;
