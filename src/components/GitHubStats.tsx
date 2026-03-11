import { useState, useEffect } from 'react';
import { GitBranch, Star, GitFork, Users, BookOpen, ExternalLink } from 'lucide-react';

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
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState<number | string>('last');

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

    useEffect(() => {
        const fetchGitHubData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://github-contributions-api.jogruber.de/v4/siddhardhram?y=${selectedYear}`);
                const data = await response.json();
                if (data && data.contributions) {
                    const arr: number[] = [];
                    let total = 0;
                    data.contributions.forEach((day: ContributionDay) => {
                        arr.push(day.count);
                        total += day.count;
                    });
                    setContributions(arr);
                    setTotalContributions(total);
                } else {
                    setContributions(Array(365).fill(0));
                }
            } catch {
                setContributions(Array(365).fill(0));
            } finally {
                setIsLoading(false);
            }
        };
        fetchGitHubData();
    }, [selectedYear]);

    const getContributionColor = (count: number) => {
        if (count === 0) return 'bg-neutral-200 dark:bg-neutral-800';
        if (count <= 2) return 'bg-cyan-300 dark:bg-cyan-800';
        if (count <= 5) return 'bg-cyan-500 dark:bg-cyan-600';
        return 'bg-cyan-600 dark:bg-cyan-400';
    };

    const calculateStreak = () => {
        let maxStreak = 0;
        let tempStreak = 0;
        for (let i = 0; i < contributions.length; i++) {
            if (contributions[i] > 0) {
                tempStreak++;
                maxStreak = Math.max(maxStreak, tempStreak);
            } else {
                tempStreak = 0;
            }
        }
        return maxStreak;
    };

    const maxStreak = calculateStreak();

    const weeks: number[][] = [];
    for (let i = 0; i < contributions.length; i += 7) {
        weeks.push(contributions.slice(i, i + 7));
    }

    return (
        <div className="space-y-5">

            {/* GitHub Profile Header */}
            {profile && (
                <a
                    href="https://github.com/siddhardhram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-cyan-500/50 hover:shadow-md transition-all duration-300 group"
                >
                    <img
                        src={profile.avatar_url}
                        alt="GitHub avatar"
                        className="w-14 h-14 rounded-full ring-2 ring-cyan-500/30 group-hover:ring-cyan-500 transition-all duration-300"
                    />
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <p className="text-base font-bold text-black dark:text-white">{profile.name ?? 'Siddhu'}</p>
                            <span className="text-xs text-neutral-500 dark:text-neutral-500">@siddhardhram</span>
                        </div>
                        <p className="text-xs text-cyan-600 dark:text-cyan-400 mt-0.5 flex items-center gap-1">
                            View GitHub Profile <ExternalLink size={10} />
                        </p>
                    </div>
                    {/* GitHub mini-logo */}
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-neutral-400 dark:fill-neutral-600 group-hover:fill-neutral-700 dark:group-hover:fill-neutral-300 transition-colors" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>
            )}

            {/* Profile Stats */}
            {profile && (
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { label: 'Repos', value: profile.public_repos, icon: BookOpen, color: 'cyan' },
                        { label: 'Followers', value: profile.followers, icon: Users, color: 'orange' },
                        { label: 'Following', value: profile.following, icon: GitFork, color: 'purple' },
                    ].map(({ label, value, icon: Icon, color }) => (
                        <div
                            key={label}
                            className={`bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 text-center hover:shadow-md hover:border-${color}-500/40 transition-all duration-300`}
                        >
                            <div className={`flex justify-center mb-2`}>
                                <div className={`p-2 rounded-lg bg-${color}-500/10`}>
                                    <Icon size={16} className={`text-${color}-500`} />
                                </div>
                            </div>
                            <p className="text-2xl font-bold text-black dark:text-white">{value}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">{label}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Contribution Stats Row */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-all duration-300">
                    <div className="p-2 rounded-lg bg-green-500/10">
                        <GitBranch size={18} className="text-green-500" />
                    </div>
                    <div>
                        <p className="text-xl font-bold text-black dark:text-white">{totalContributions}</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-500">contributions in {selectedYear === 'last' ? 'Last Year' : selectedYear}</p>
                    </div>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-all duration-300">
                    <div className="p-2 rounded-lg bg-yellow-500/10">
                        <Star size={18} className="text-yellow-500" />
                    </div>
                    <div>
                        <p className="text-xl font-bold text-black dark:text-white">{maxStreak}</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-500">longest streak (days)</p>
                    </div>
                </div>
            </div>

            {/* Contribution Graph */}
            <div className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <div>
                        <h4 className="text-sm font-semibold text-black dark:text-white">Contribution Activity</h4>
                        {!isLoading && (
                            <p className="text-xs text-neutral-500 mt-0.5">{totalContributions} contributions in {selectedYear === 'last' ? 'Last Year' : selectedYear}</p>
                        )}
                    </div>
                    <select
                        id="year-select"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value === 'last' ? 'last' : parseInt(e.target.value))}
                        className="px-2 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-xs text-black dark:text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 cursor-pointer"
                    >
                        <option value="last">Last Year</option>
                        <option value={currentYear}>{currentYear}</option>
                        <option value={currentYear - 1}>{currentYear - 1}</option>
                    </select>
                </div>

                {isLoading ? (
                    <div className="flex items-center justify-center h-20">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-500" />
                    </div>
                ) : (
                    <>
                        <div className="overflow-x-auto pb-1">
                            <div className="inline-flex gap-[3px] min-w-full">
                                {weeks.map((week, wi) => (
                                    <div key={wi} className="flex flex-col gap-[3px]">
                                        {week.map((count, di) => (
                                            <div
                                                key={di}
                                                className={`w-[11px] h-[11px] rounded-sm ${getContributionColor(count)} transition-all duration-150 hover:scale-125 hover:ring-1 hover:ring-cyan-400 cursor-default`}
                                                title={`${count} contribution${count !== 1 ? 's' : ''}`}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5 mt-3 text-xs text-neutral-500">
                            <span>Less</span>
                            <div className="flex gap-1">
                                {['bg-neutral-200 dark:bg-neutral-800', 'bg-cyan-300 dark:bg-cyan-800', 'bg-cyan-500 dark:bg-cyan-600', 'bg-cyan-600 dark:bg-cyan-400'].map((cls, i) => (
                                    <div key={i} className={`w-[11px] h-[11px] rounded-sm ${cls}`} />
                                ))}
                            </div>
                            <span>More</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default GitHubStats;
