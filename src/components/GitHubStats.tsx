import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

const GitHubStats = () => {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState<number | string>('last');

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
                {/* GitHub Stats Card */}
                <a
                    href="https://github.com/siddhardhram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 hover:border-cyan-500/50 hover:shadow-md transition-all duration-300 relative flex items-center justify-center"
                >
                    <ExternalLink size={14} className="text-neutral-400 absolute top-4 right-4" />
                    <div className="flex justify-center w-full overflow-hidden">
                        <img
                            src="https://github-readme-stats.vercel.app/api?username=siddhardhram&show_icons=true&theme=transparent&hide_border=true&title_color=06b6d4&text_color=737373&icon_color=06b6d4&bg_color=transparent&rank_icon=github&hide_title=true"
                            alt="GitHub Stats"
                            className="w-full max-w-[400px] h-auto object-contain dark:invert dark:brightness-90 dark:contrast-125"
                        />
                    </div>
                </a>

                {/* Top Languages Card */}
                <div className="flex-1 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 hover:border-cyan-500/50 hover:shadow-md transition-all duration-300 flex items-center justify-center">
                    <div className="flex justify-center w-full overflow-hidden">
                        <img
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=siddhardhram&layout=compact&theme=transparent&hide_border=true&title_color=06b6d4&text_color=737373&hide_title=true"
                            alt="Top Languages"
                            className="w-full max-w-[350px] h-auto object-contain dark:invert dark:brightness-90 dark:contrast-125"
                        />
                    </div>
                </div>
            </div>

            {/* Contribution Graph */}
            <div className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 overflow-hidden">
                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                    <h4 className="text-sm font-semibold text-black dark:text-white">Contribution Activity</h4>
                    <select
                        id="year-select"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value === 'last' ? 'last' : parseInt(e.target.value))}
                        className="px-3 py-1.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer shadow-sm transition-all"
                    >
                        <option value="last">Last Year</option>
                        <option value={currentYear}>{currentYear}</option>
                        <option value={currentYear - 1}>{currentYear - 1}</option>
                        <option value={currentYear - 2}>{currentYear - 2}</option>
                    </select>
                </div>

                <div className="w-full overflow-x-auto pb-2 flex justify-center text-sm">
                    <div className="min-w-[700px] text-black dark:text-white">
                        <GitHubCalendar
                            username="siddhardhram"
                            year={selectedYear === 'last' ? 'last' : selectedYear as number}
                            colorScheme="light"
                            theme={{
                                light: ['#e5e5e5', '#a5f3fc', '#22d3ee', '#0891b2', '#083344'],
                                dark: ['#262626', '#164e63', '#0891b2', '#22d3ee', '#67e8f9'],
                            }}
                            className="dark:hidden"
                        />
                        <GitHubCalendar
                            username="siddhardhram"
                            year={selectedYear === 'last' ? 'last' : selectedYear as number}
                            colorScheme="dark"
                            theme={{
                                light: ['#e5e5e5', '#a5f3fc', '#22d3ee', '#0891b2', '#083344'],
                                dark: ['#262626', '#164e63', '#0891b2', '#22d3ee', '#67e8f9'],
                            }}
                            className="hidden dark:block"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitHubStats;
