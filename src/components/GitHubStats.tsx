import { ExternalLink } from 'lucide-react';

const GitHubStats = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
                {/* GitHub Stats Card */}
                <a
                    href="https://github.com/siddhardhram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 hover:border-cyan-500/50 hover:shadow-md transition-all duration-300"
                >
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="text-sm font-semibold text-black dark:text-white flex items-center gap-2">
                            GitHub Statistics
                            <ExternalLink size={14} className="text-neutral-500" />
                        </h4>
                        <img
                            src="https://avatars.githubusercontent.com/siddhardhram"
                            alt="avatar"
                            className="w-8 h-8 rounded-full ring-2 ring-cyan-500/30"
                        />
                    </div>
                    <div className="flex justify-center w-full overflow-hidden">
                        <img
                            src="https://github-readme-stats.vercel.app/api?username=siddhardhram&show_icons=true&theme=transparent&hide_border=true&title_color=06b6d4&text_color=737373&icon_color=06b6d4&bg_color=transparent&rank_icon=github"
                            alt="GitHub Stats"
                            className="w-full max-w-[400px] h-auto object-contain dark:invert"
                            style={{ filter: "brightness(0.9) contrast(1.2)" }}
                        />
                    </div>
                </a>

                {/* Top Languages Card */}
                <div className="flex-1 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 hover:border-cyan-500/50 hover:shadow-md transition-all duration-300">
                    <h4 className="text-sm font-semibold text-black dark:text-white mb-3">Top Languages</h4>
                    <div className="flex justify-center w-full overflow-hidden">
                        <img
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=siddhardhram&layout=compact&theme=transparent&hide_border=true&title_color=06b6d4&text_color=737373"
                            alt="Top Languages"
                            className="w-full max-w-[350px] h-auto object-contain dark:invert"
                            style={{ filter: "brightness(0.9) contrast(1.2)" }}
                        />
                    </div>
                </div>
            </div>

            {/* Contribution Graph */}
            <div className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 overflow-hidden">
                <h4 className="text-sm font-semibold text-black dark:text-white mb-4">Contribution Activity</h4>
                <div className="w-full overflow-x-auto pb-2 flex justify-center">
                    {/* The dark:invert class inverses the colors of the image for dark mode since the API returns a light mode image. */}
                    <img
                        src="https://ghchart.rshah.org/06b6d4/siddhardhram"
                        alt="siddhardhram's Contribution Chart"
                        className="min-w-[700px] w-full max-w-[800px] h-auto dark:invert"
                        style={{ filter: "hue-rotate(180deg) brightness(0.9)" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default GitHubStats;
