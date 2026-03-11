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
                <div className="w-full overflow-x-auto pb-2 flex justify-center">
                    <img
                        src="https://ghchart.rshah.org/06b6d4/siddhardhram"
                        alt="siddhardhram's Contribution Chart"
                        className="min-w-[700px] w-full max-w-[800px] h-auto dark:invert dark:hue-rotate-180 dark:brightness-90"
                    />
                </div>
            </div>
        </div>
    );
};

export default GitHubStats;
