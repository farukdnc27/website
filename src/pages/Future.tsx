import { Cpu } from 'lucide-react';
import { translations } from '../translations';

interface FutureProps {
    t: typeof translations.en;
}

export default function Future({ t }: FutureProps) {
    return (
        <section className="py-20 min-h-screen flex items-center">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-emerald-500"></span> {t.future.title}
                </h2>

                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <Cpu className="w-64 h-64" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">{t.future.comingSoon}</h3>
                            <p className="text-slate-400 text-lg max-w-xl">
                                {t.future.desc}
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-75"></div>
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-150"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
