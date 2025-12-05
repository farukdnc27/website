import { translations } from '../translations';

interface AboutProps {
    t: typeof translations.en;
}

export default function About({ t }: AboutProps) {
    return (
        <section className="py-20 min-h-screen flex items-center">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-20 transform rotate-3"></div>
                            <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <code className="text-sm font-mono text-slate-300">
                                    <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}
                                    <br />
                                    &nbsp;&nbsp;name: <span className="text-green-400">'Ömer Faruk'</span>,
                                    <br />
                                    &nbsp;&nbsp;role: <span className="text-green-400">'Computer Engineering Student'</span>,
                                    <br />
                                    &nbsp;&nbsp;university: <span className="text-green-400">'Çukurova University'</span>,
                                    <br />
                                    &nbsp;&nbsp;passion: <span className="text-green-400">'Software Development'</span>
                                    <br />
                                    {'}'};
                                </code>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <span className="text-emerald-500"></span> {t.about.title}
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            {t.about.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
