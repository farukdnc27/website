export type Language = 'tr' | 'en';

export const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            future: 'Future',
            contact: 'Contact'
        },
        hero: {
            role: 'Software Developer',
            description: 'Building immersive digital experiences and robust systems.',
            cta: 'View Projects'
        },
        about: {
            title: 'About Me',
            description: 'I am a 4th-year Computer Engineering student. I have developed mobile and graphics applications using C++, C#, JavaScript, React, and OpenGL. I have worked on object detection with YOLO. I am a developer who is prone to teamwork, learns quickly, and is open to working in different software fields.',
            downloadCv: 'Download CV'
        },
        skills: {
            title: 'Technical Arsenal',
            programming: 'Programming',
            web: 'Web Development',
            db: 'Databases'
        },
        projects: {
            title: 'Featured Projects',
            viewCode: 'View Code',
            virtualAdana: {
                title: 'Virtual Adana Museum Project',
                desc: 'A 3D virtual museum simulation built with C++ and OpenGL. Users control a robot to explore artifacts with advanced lighting and cluster optimization.'
            },
            zed: {
                title: 'ZED Camera Object Detection',
                desc: 'Advanced computer vision project using ZED 2i. Features real-time object detection with YOLOv8, 3D modeling, and industrial stone measurement modules.'
            },
            boneFracture: {
                title: 'Bone Fracture Detection with YOLO',
                desc: 'A medical imaging project using YOLO for detecting bone fractures. It utilizes advanced object detection techniques to assist in medical diagnosis.'
            }
        },
        future: {
            title: 'Future Projects',
            desc: 'Exciting new ideas are brewing. Stay tuned for what\'s next.',
            comingSoon: 'Coming Soon'
        },
        footer: {
            rights: 'All rights reserved.'
        }
    },
    tr: {
        nav: {
            home: 'Ana Sayfa',
            about: 'Hakkımda',
            skills: 'Yetenekler',
            projects: 'Projeler',
            future: 'Gelecek',
            contact: 'İletişim'
        },
        hero: {
            role: 'Yazılım Geliştirici',
            description: 'Sürükleyici dijital deneyimler ve sağlam sistemler inşa ediyorum.',
            cta: 'Projeleri Gör'
        },
        about: {
            title: 'Hakkımda',
            description: 'Bilgisayar Mühendisliği 4.sınıf öğrencisiyim. C++, C#, JavaScript, React ve OpenGL kullanarak mobil ve grafik uygulamaları geliştirdim. YOLO ile nesne tespiti üzerine çalıştım. Takım çalışmasına yatkın, hızlı öğrenen ve farklı yazılım alanlarında çalışmaya açık bir geliştiriciyim.',
            downloadCv: 'CV İndir'
        },
        skills: {
            title: 'Teknik Yetenekler',
            programming: 'Programlama',
            web: 'Web Geliştirme',
            db: 'Veritabanları'
        },
        projects: {
            title: 'Öne Çıkan Projeler',
            viewCode: 'Kodu İncele',
            virtualAdana: {
                title: 'Sanal Adana Müzesi Projesi',
                desc: 'C++ ve OpenGL ile geliştirilen 3D sanal müze simülasyonu. Gelişmiş aydınlatma ve optimizasyon ile robotik bir keşif deneyimi sunar.'
            },
            zed: {
                title: 'ZED Kamera Nesne Tespiti',
                desc: 'ZED 2i kullanan kapsamlı bilgisayarlı görü projesi. YOLOv8 ile gerçek zamanlı tespit, 3D modelleme ve endüstriyel taş ölçümü modülleri içerir.'
            },
            boneFracture: {
                title: 'YOLO ile Kemik Kırığı Tespiti',
                desc: 'Kemik kırıklarını tespit etmek için YOLO kullanan tıbbi görüntüleme projesi. Tıbbi teşhise yardımcı olmak için gelişmiş nesne tespiti tekniklerini kullanır.'
            }
        },
        future: {
            title: 'Gelecek Projeler',
            desc: 'Heyecan verici yeni fikirler yolda. Takipte kalın.',
            comingSoon: 'Çok Yakında'
        },
        footer: {
            rights: 'Tüm hakları saklıdır.'
        }
    }
};
