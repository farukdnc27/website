import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations, Language } from '../translations';
import cvTr from '../assets/OmerFarukDincoglu_CV_TR.pdf';
import cvEn from '../assets/OmerFarukDincoglu_CV_EN.pdf';

interface HomeProps {
    t: typeof translations.en;
    lang: Language;
}

export default function Home({ t, lang }: HomeProps) {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6">
                {/* Hero Content */}
                <div className="flex flex-col items-start max-w-3xl mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
                        Ömer Faruk <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Dinçoğlu</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
                        <span className="text-emerald-400 font-mono">&lt;{t.hero.role} /&gt;</span>
                        <br />
                        {t.hero.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/projects"
                            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2"
                        >
                            {t.hero.cta}
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        <div className="flex gap-2">
                            <a href="https://github.com/farukdnc27" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors border border-slate-700">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/%C3%B6mer-faruk-dincoglu/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors border border-slate-700">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:farukdincoglu27@gmail.com" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors border border-slate-700">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* About Content */}
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

                        <a
                            href={lang === 'tr' ? cvTr : cvEn}
                            download={lang === 'tr' ? 'OmerFarukDincoglu_CV_TR.pdf' : 'OmerFarukDincoglu_CV_EN.pdf'}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700 hover:border-emerald-500/50 group"
                        >
                            <Download className="w-4 h-4 text-emerald-500 group-hover:text-emerald-400" />
                            {t.about.downloadCv}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
