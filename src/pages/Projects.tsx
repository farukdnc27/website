import { Github } from 'lucide-react';
import { translations } from '../translations';
import virtualAdanaImg from '../assets/museum.jpeg';
import zedProjectImg from '../assets/zed.jpeg';
import boneImg from '../assets/bone.jpeg';

interface ProjectsProps {
    t: typeof translations.en;
}

export default function Projects({ t }: ProjectsProps) {
    return (
        <section className="py-20 min-h-screen">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-emerald-500"></span> {t.projects.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Project 1: Virtual Adana Museum */}
                    <div className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-10"></div>
                        <div className="h-48 bg-slate-800 relative overflow-hidden">
                            {/* Abstract background for project */}
                            <img
                                src={virtualAdanaImg}
                                alt="Virtual Adana Museum"
                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        <div className="relative z-20 p-6 -mt-12">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                    {t.projects.virtualAdana.title}
                                </h3>
                                <a
                                    href="https://github.com/farukdnc27/virtual-adana-museum-project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-slate-800 rounded-full hover:bg-emerald-500 hover:text-white transition-colors border border-slate-700"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>

                            <p className="text-slate-400 mb-6">
                                {t.projects.virtualAdana.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full">C++</span>
                                <span className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full">OpenGL</span>
                                <span className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full">Blender</span>
                                <span className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full">ImGui</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2: Zed */}
                    <div className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-10"></div>
                        <div className="h-48 bg-slate-800 relative overflow-hidden">
                            <img
                                src={zedProjectImg}
                                alt="ZED Camera Project"
                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        <div className="relative z-20 p-6 -mt-12">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {t.projects.zed.title}
                                </h3>
                                <a
                                    href="https://github.com/farukdnc27/zed-cam-object-deteciton-and-modelling"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-slate-800 rounded-full hover:bg-blue-500 hover:text-white transition-colors border border-slate-700"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>

                            <p className="text-slate-400 mb-6">
                                {t.projects.zed.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full">Python</span>
                                <span className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full">C++</span>
                                <span className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full">YOLOv8</span>
                                <span className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full">ZED SDK</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 3: Bone Fracture Detection */}
                    <div className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-red-500/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-10"></div>
                        <div className="h-48 bg-slate-800 relative overflow-hidden">
                            <img
                                src={boneImg}
                                alt="Bone Fracture Detection"
                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        <div className="relative z-20 p-6 -mt-12">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                                    {t.projects.boneFracture.title}
                                </h3>
                                <a
                                    href="https://github.com/farukdnc27/Bone-fracture-detection-with-yolo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-slate-800 rounded-full hover:bg-red-500 hover:text-white transition-colors border border-slate-700"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>

                            <p className="text-slate-400 mb-6">
                                {t.projects.boneFracture.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-xs font-medium text-red-400 bg-red-400/10 rounded-full">Python</span>
                                <span className="px-3 py-1 text-xs font-medium text-red-400 bg-red-400/10 rounded-full">YOLOv8</span>
                                <span className="px-3 py-1 text-xs font-medium text-red-400 bg-red-400/10 rounded-full">OpenCV</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
