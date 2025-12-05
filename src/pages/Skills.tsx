import { Terminal, Code2, Database } from 'lucide-react';
import { translations } from '../translations';

interface SkillsProps {
    t: typeof translations.en;
}

export default function Skills({ t }: SkillsProps) {
    return (
        <section className="py-20 min-h-screen flex items-center">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-emerald-500"></span> {t.skills.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-colors group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/10 transition-colors">
                            <Terminal className="w-6 h-6 text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">{t.skills.programming}</h3>
                        <div className="flex flex-wrap gap-2">
                            {['C', 'C#', 'Assembly', 'Python', 'TypeScript'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/10 transition-colors">
                            <Code2 className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">{t.skills.web}</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Vite', 'Tailwind', 'MVC', '.NET'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors group">
                        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/10 transition-colors">
                            <Database className="w-6 h-6 text-purple-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">{t.skills.db}</h3>
                        <div className="flex flex-wrap gap-2">
                            {['MSSQL', 'PostgreSQL', 'MongoDB'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
