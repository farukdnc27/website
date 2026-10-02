import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Code2, Database, FastForward, Github, Globe2, GraduationCap, Linkedin, Mail, Menu, RotateCcw, ScanLine, X,
} from 'lucide-react';
import museumImage from './assets/museum.jpeg';
import zedImage from './assets/zed.jpeg';
import boneImage from './assets/bone.jpeg';
import santiyemImage from './assets/santiyem-hero.png';
import airbnbDashboardImage from './assets/airbnb-dashboard.png';
import bulkUnlikeImage from './assets/bulk-unlike-icon.png';
import uclSquadImage from './assets/ucl-squad.png';

type Language = 'tr' | 'en';

const content = {
  tr: {
    nav: { home: 'Ana Sayfa', profile: 'Hakkımda', experience: 'Deneyim', work: 'Projeler', cv: 'CV' },
    availability: 'Ağustos 2026’dan beri PKF Teknoloji’de',
    eyebrow: 'Bilgisayar Mühendisi · Yazılım Geliştirici',
    heroTitle: 'Kurumsal iş süreçleri için backend ve web uygulamaları geliştiriyorum.',
    heroBody: 'C# ve ASP.NET MVC ile web uygulamaları; MSSQL ile veri katmanları; ERP entegrasyonları ve görüntü işleme projeleri geliştiriyorum.',
    viewWork: 'Projeleri incele', watchCv: 'CV’yi çalıştır', contact: 'E-posta gönder', location: 'İstanbul / Gaziantep',
    focusLabel: 'Şu an', focusTitle: 'PKF Teknoloji’de Yazılım Geliştirici',
    focusBody: 'ERP sistem entegrasyonları, backend servisleri, MVC web modülleri ve MSSQL tabanlı veri çözümleri üzerinde çalışıyorum.',
    stats: [['6', 'Profesyonel deneyim adımı'], ['2026', 'Bilgisayar Mühendisliği mezuniyeti'], ['3', 'Odak alanı: backend, veri, görüntü']],
    homeIndexKicker: 'Portföy Dizini',
    homeIndexTitle: 'Deneyimim, projelerim ve teknik bilgilerim.',
    homeIndexIntro: 'Kariyerim, üretimde çalışan kurumsal sistemler, kişisel projelerim ve interaktif CV ayrı sayfalarda düzenlendi.',
    homeIndexItems: [
      ['01', 'Hakkımda', 'Yaklaşımım, eğitimim ve teknik yetkinliklerim.'],
      ['02', 'Deneyim', 'Kariyer geçmişim ve üretimde çalışan kurumsal sistemler.'],
      ['03', 'Projeler', 'Bilgisayarlı görüden web ve veri uygulamalarına seçili çalışmalar.'],
      ['04', 'İnteraktif CV', 'Kariyerimi terminalde satır satır görüntüleyin.'],
    ],
    profileKicker: '01 / Hakkımda', profileTitle: 'Backend, ERP entegrasyonları ve kurumsal web uygulamaları geliştiriyorum.',
    profileBody: 'Çukurova Üniversitesi Bilgisayar Mühendisliği (İngilizce) mezunuyum. Farklı sektörlerde edindiğim staj deneyimlerini bugün tam zamanlı ürün geliştirme süreçlerine taşıyorum. Backend geliştirme ve veri tasarımındaki odağımı, bilgisayarlı görü ve gerçek zamanlı kamera uygulamalarından gelen problem çözme pratiğiyle birleştiriyorum.',
    principles: [
      ['01', 'Uygulanabilirlik', 'Analizden canlı ortama uzanan, gerçek ihtiyaca bağlı çözümler.'],
      ['02', 'Sistem düşüncesi', 'Servis, veri ve arayüz katmanlarını birlikte ele alan yaklaşım.'],
      ['03', 'Sürekli gelişim', 'Yeni araçları hızla öğrenip üretim pratiğine dönüştürme.'],
    ],
    cvKicker: '02 / İnteraktif CV', cvTitle: 'Deneyim ve projelerim, terminal formatında.',
    cvIntro: 'Bölüme geldiğinizde CV otomatik olarak yazılmaya başlar.', cvReplay: 'Baştan oynat', cvShowAll: 'Tümünü göster',
    cvFile: 'omer-faruk-dincoglu.cv', cvRunning: 'CV oluşturuluyor', cvReady: 'CV hazır',
    cvLines: [
      { kind: 'command', text: '$ ./omer-faruk-dincoglu --resume' },
      { kind: 'blank', text: '' },
      { kind: 'heading', text: 'ÖMER FARUK DİNÇOĞLU' },
      { kind: 'accent', text: 'Bilgisayar Mühendisi · Backend & Yazılım Geliştirme' },
      { kind: 'text', text: 'farukdincoglu27@gmail.com · github.com/farukdnc27 · İstanbul / Gaziantep' },
      { kind: 'blank', text: '' },
      { kind: 'section', text: '[ HAKKIMDA ]' },
      { kind: 'text', text: 'C#, ASP.NET MVC, MSSQL ve ERP entegrasyonları üzerine çalışan Bilgisayar Mühendisi.' },
      { kind: 'text', text: 'Backend odağımı bilgisayarlı görü ve gerçek zamanlı kamera deneyimiyle birleştiriyorum.' },
      { kind: 'blank', text: '' },
      { kind: 'section', text: '[ DENEYİM ]' },
      { kind: 'accent', text: 'Ağu 2026 — Bugün  |  Yazılım Geliştirici · PKF Teknoloji' },
      { kind: 'text', text: 'ERP entegrasyonları, C# backend servisleri, MVC modülleri ve MSSQL veri çözümleri.' },
      { kind: 'text', text: 'Tem 2026  |  Stajyer Yazılım Geliştirici · PKF Teknoloji' },
      { kind: 'text', text: 'Nis — Haz 2026  |  Yarı Zamanlı Yazılım Geliştirici · PKF Teknoloji' },
      { kind: 'text', text: 'Tem — Ağu 2025  |  Görüntü İşleme Stajyeri · RockTechSoft' },
      { kind: 'text', text: '2024  |  IT ve ERP Stajları · Meray Kuruyemiş / Sistem Yazılım' },
      { kind: 'blank', text: '' },
      { kind: 'section', text: '[ CANLIYA ALINAN SİSTEMLER ]' },
      { kind: 'accent', text: 'Masraf Yönetim Platformu · Tek başına uçtan uca geliştirme · 100+ canlı kullanıcı' },
      { kind: 'text', text: 'Çoklu limit yapısı ve kademeli onay akışlarıyla PKF bünyesinde aktif kullanım.' },
      { kind: 'text', text: 'Hukuk & Dava Yönetim Sistemi · Çekirdek sistemin uçtan uca geliştirilmesi' },
      { kind: 'text', text: 'UYAP entegrasyonu ile PM, teklif ve sözleşme sihirbazları · Ekip çalışması' },
      { kind: 'blank', text: '' },
      { kind: 'section', text: '[ EĞİTİM ]' },
      { kind: 'accent', text: '2021 — 2026  |  Çukurova Üniversitesi · Bilgisayar Mühendisliği (İngilizce)' },
      { kind: 'blank', text: '' },
      { kind: 'section', text: '[ SEÇİLİ PROJELER ]' },
      { kind: 'text', text: '01  ZED Kamera ile Nesne Tespiti · Python / YOLO / Derinlik Kameraları' },
      { kind: 'text', text: '02  Kemik Kırığı Tespiti · Model Eğitimi / Fine-tuning' },
      { kind: 'text', text: '03  Sanal Müze Simülasyonu · C++ / OpenGL' },
      { kind: 'text', text: '04  Santiyem · React / Express / PostgreSQL / React Native' },
      { kind: 'text', text: '05  NYC Airbnb Veri Paneli · Python / Streamlit / Plotly' },
      { kind: 'blank', text: '' },
      { kind: 'section', text: '[ TEKNİK YETKİNLİKLER ]' },
      { kind: 'text', text: 'C# · ASP.NET MVC · MSSQL · SQL · JavaScript · Python · C/C++' },
      { kind: 'text', text: 'Canias ERP · React Native · OpenGL · ZED 2i · Intel RealSense · Git' },
      { kind: 'success', text: '✓ CV başarıyla oluşturuldu.' },
    ],
    experienceKicker: '03 / Deneyim', experienceTitle: 'Yazılım geliştirme deneyimim', present: 'Devam ediyor',
    experiencePageBody: '2024’te ERP ve IT stajlarıyla başladım. Bugün PKF Teknoloji’de C# backend servisleri, MVC modülleri, MSSQL veri çözümleri ve ERP entegrasyonları geliştiriyorum.',
    experience: [
      { date: 'Ağu 2026 — Bugün', role: 'Yazılım Geliştirici', company: 'PKF Teknoloji', body: 'ERP entegrasyonları, mobil/web uygulamaları, C# backend servisleri, MVC modülleri ve MSSQL veri modelleme ile performans iyileştirmeleri.', current: true },
      { date: 'Tem 2026', role: 'Stajyer Yazılım Geliştirici', company: 'PKF Teknoloji', body: 'ERP entegrasyon modüllerinin geliştirilmesi; mevcut web uygulamalarında hata tespiti ve iyileştirme.' },
      { date: 'Nis — Haz 2026', role: 'Yarı Zamanlı Yazılım Geliştirici', company: 'PKF Teknoloji', body: 'Üniversite eğitimiyle eş zamanlı geliştirme görevleri ve canlıya alınan işlerde sorumluluk.' },
      { date: 'Tem — Ağu 2025', role: 'Görüntü İşleme Stajyeri', company: 'RockTechSoft', body: 'ZED 2i ve Intel RealSense kameralarla uygulamalar; radyoloji verilerinde model eğitimi, fine-tuning ve sonuç değerlendirme.' },
      { date: 'Ağu — Eyl 2024', role: 'Gönüllü IT Stajyeri', company: 'Meray Kuruyemiş', body: 'Canias ERP üzerinde veri, tanımlama ve raporlama; ağ mimarisinin analizi ve şemalandırılması.' },
      { date: 'Haz — Tem 2024', role: 'Gönüllü ERP Stajyeri', company: 'Sistem Yazılım', body: 'C# backend ve MVC projelerinde temel geliştirme; SQL sorguları ve veritabanı işlemleri.' },
    ],
    professionalWorkLabel: 'Canlıya Alınan Sistemler',
    professionalWorkTitle: 'Üretimde çalışan kurumsal ürünler.',
    professionalWorkIntro: 'Analizden canlı kullanıma kadar sorumluluk aldığım, gerçek iş süreçlerini yöneten seçili sistemler.',
    professionalProjects: [
      { ownership: 'Tek başına · Uçtan uca', impact: '100+ canlı kullanıcı', title: 'Masraf Yönetim Platformu', body: 'PKF bünyesinde aktif kullanılan; çoklu limit yapısı, kademeli onay akışları ve masraf süreçlerini tek merkezde yöneten sistem. Analiz, mimari, geliştirme ve devreye alma süreçlerini tek başıma yürüttüm.', tags: ['Çoklu limit', 'Onay akışları', 'Canlı sistem'] },
      { ownership: 'Çekirdek sistem · Uçtan uca', impact: 'UYAP ve sihirbazlar · Ekip', title: 'Hukuk & Dava Yönetim Sistemi', body: 'Bir hukuk bürosunun dava ve dosya süreçlerini tek merkezden yöneten çekirdek sistemi uçtan uca geliştirdim. UYAP entegrasyonu ile PM kapsamındaki izin ve benzeri süreçler, teklif ve sözleşme sihirbazlarını ekip içinde geliştirdik.', tags: ['Dava yönetimi', 'UYAP', 'PM', 'Teklif', 'Sözleşme'] },
    ],
    professionalConfidentiality: 'Kurumsal çalışmalar · Kaynak kodu ve müşteri detayları gizlidir.',
    education: 'Çukurova Üniversitesi', degree: 'Bilgisayar Mühendisliği (İngilizce)', educationDate: '2021 — 2026',
    projectsKicker: '04 / Projeler', projectsTitle: 'Geliştirdiğim projeler',
    projectsPageBody: 'Bilgisayarlı görü, grafik programlama, veri görselleştirme ve web geliştirme alanlarındaki kişisel ve açık kaynak projelerim.',
    projects: [
      { title: 'ZED Kamera ile Nesne Tespiti', label: 'Bilgisayarlı Görü', body: 'Stereo kamera verisi, derinlik haritaları ve nesne konumlandırma üzerine gerçek zamanlı görüntü işleme çalışması.', tech: ['Python', 'ZED 2i', 'Intel RealSense', 'YOLO'], image: zedImage, href: 'https://github.com/farukdnc27/zed-cam-object-deteciton-and-modelling' },
      { title: 'Kemik Kırığı Tespiti', label: 'Derin Öğrenme', body: 'Radyoloji görüntülerinde kırık bölgelerini tespit etmek için veri hazırlama, model eğitimi, fine-tuning ve sonuç değerlendirme.', tech: ['Python', 'YOLO', 'Model Training', 'Fine-tuning'], image: boneImage, href: 'https://github.com/farukdnc27/Bone-fracture-detection-with-yolo' },
      { title: 'Sanal Müze Simülasyonu', label: 'Grafik Programlama', body: 'Tamamen C++ ve OpenGL ile geliştirilen; 3B ortam, navigasyon, model gösterimi ve kullanıcı etkileşimi içeren simülasyon.', tech: ['C++', 'OpenGL', 'Blender', 'ImGui'], image: museumImage, href: 'https://github.com/farukdnc27/virtual-adana-museum-project' },
    ],
    githubProfileLink: 'Tüm depoları gör',
    githubProjects: [
      { title: 'Santiyem', type: 'Uçtan Uca Ürün', body: 'Şantiye, ekip, görev, günlük rapor ve saha fotoğrafı yönetimini; web paneli, mobil uygulama ve backend API’de birleştiren platform.', tech: ['React', 'Express', 'PostgreSQL', 'React Native'], image: santiyemImage, imageAlt: 'Santiyem projesinin özgün uygulama görseli', href: 'https://github.com/farukdnc27/Santiyem' },
      { title: 'NYC Airbnb Veri Paneli', type: 'Ekip Projesi', body: 'Yaklaşık 48 bin Airbnb kaydını interaktif grafiklerle inceleyen Streamlit paneli. Ana sayfa, stil altyapısı, histogram, treemap ve heatmap katkıları.', tech: ['Python', 'Streamlit', 'Plotly', 'Pandas'], image: airbnbDashboardImage, imageAlt: 'NYC Airbnb Analytics panelinin canlı ekran görüntüsü', href: 'https://github.com/farukdnc27/CEN445-DataViz-Project' },
      { title: 'Bulk Unlike Utility', type: 'Tarayıcı Eklentisi', body: 'Sosyal medya beğenilerini kullanıcı cihazında yerel olarak yönetmeye yardımcı olan açık kaynaklı, eğitim amaçlı Chromium eklentisi.', tech: ['JavaScript', 'Chrome Extension', 'Local-first'], image: bulkUnlikeImage, imageAlt: 'Bulk Unlike Utility projesinin özgün ikonu', href: 'https://github.com/farukdnc27/scoial-media-unliker' },
      { title: 'Galatasaray UCL Squad', type: 'Frontend Deneyimi', body: 'Kadro verilerini saha dizilişi ve liste görünümünde sunan; JSON veri yapısı ve SVG saha grafikleri kullanan responsive taraftar projesi.', tech: ['React', 'TypeScript', 'Vite', 'SVG'], image: uclSquadImage, imageAlt: 'Galatasaray UCL Squad canlı proje ekranı', href: 'https://github.com/farukdnc27/ucl2' },
    ],
    projectLink: 'GitHub’da incele',
    skillsKicker: '05 / Teknik Yetkinlikler', skillsTitle: 'Kullandığım teknolojiler ve yetkinlikler',
    skillGroups: [
      { title: 'Backend & Web', body: 'Servisler, MVC modülleri ve entegrasyonlar', items: ['C#', 'ASP.NET MVC', 'Backend mimarileri', 'JavaScript', 'Servis entegrasyonları'] },
      { title: 'Veri & ERP', body: 'Modelleme, sorgulama ve iş sistemleri', items: ['MSSQL', 'SQL', 'Veri modelleme', 'Performans iyileştirme', 'Canias ERP'] },
      { title: 'Görüntü & Sistem', body: 'Kamera verisi, model ve düşük seviye geliştirme', items: ['Python', 'C / C++', 'OpenGL', 'ZED 2i', 'Intel RealSense', 'Assembly'] },
    ],
    closing: 'Birlikte çalışabileceğimiz bir konu mu var?', closingBody: 'Backend, web ve bilgisayarlı görü projeleri için benimle e-posta üzerinden iletişime geçebilirsiniz.', footer: 'Tasarlayan ve geliştiren Ömer Faruk Dinçoğlu.',
  },
  en: {
    nav: { home: 'Home', profile: 'About', experience: 'Experience', work: 'Projects', cv: 'CV' },
    availability: 'At PKF Technology since August 2026', eyebrow: 'Computer Engineer · Software Developer',
    heroTitle: 'I build backend and web applications for enterprise workflows.', heroBody: 'I build web applications with C# and ASP.NET MVC, data layers with MSSQL, ERP integrations, and computer vision projects.',
    viewWork: 'Explore my work', watchCv: 'Run my CV', contact: 'Send an email', location: 'Istanbul / Gaziantep',
    focusLabel: 'Currently', focusTitle: 'Software Developer at PKF Technology', focusBody: 'Working on ERP system integrations, backend services, MVC web modules, and MSSQL-based data solutions.',
    stats: [['6', 'Professional experience steps'], ['2026', 'Computer Engineering graduate'], ['3', 'Focus areas: backend, data, vision']],
    homeIndexKicker: 'Portfolio Index',
    homeIndexTitle: 'My experience, projects, and technical background.',
    homeIndexIntro: 'My career, production enterprise systems, personal projects, and interactive CV now live on dedicated pages.',
    homeIndexItems: [
      ['01', 'About', 'My approach, education, and technical capabilities.'],
      ['02', 'Experience', 'Career history and enterprise systems running in production.'],
      ['03', 'Projects', 'Selected work across computer vision, web, and data.'],
      ['04', 'Interactive CV', 'Watch my career render line by line in the terminal.'],
    ],
    profileKicker: '01 / About', profileTitle: 'I build backend systems, ERP integrations, and enterprise web applications.',
    profileBody: 'I graduated from the English-taught Computer Engineering program at Çukurova University. Today, I bring the experience I gained through internships in different industries into full-time product development. I combine my focus on backend development and data design with the problem-solving practice I gained from computer vision and real-time camera applications.',
    principles: [
      ['01', 'Practical delivery', 'Solutions tied to real needs, from analysis through production.'],
      ['02', 'Systems thinking', 'An approach that considers service, data, and interface layers together.'],
      ['03', 'Continuous growth', 'Learning new tools quickly and turning them into production practice.'],
    ],
    cvKicker: '02 / Interactive CV', cvTitle: 'My experience and projects in terminal format.',
    cvIntro: 'The CV starts typing automatically when it enters the screen.', cvReplay: 'Replay', cvShowAll: 'Show all',
    cvFile: 'omer-faruk-dincoglu.cv', cvRunning: 'Rendering CV', cvReady: 'CV ready',
    cvLines: [
      { kind: 'command', text: '$ ./omer-faruk-dincoglu --resume' },
      { kind: 'blank', text: '' },
      { kind: 'heading', text: 'ÖMER FARUK DİNÇOĞLU' },
      { kind: 'accent', text: 'Computer Engineer · Backend & Software Development' },
      { kind: 'text', text: 'farukdincoglu27@gmail.com · github.com/farukdnc27 · Istanbul / Gaziantep' },
      { kind: 'blank', text: '' },
      { kind: 'section', text: '[ PROFILE ]' },
      { kind: 'text', text: 'Computer Engineer working across C#, ASP.NET MVC, MSSQL, and ERP integrations.' },
      { kind: 'text', text: 'I combine a backend focus with computer vision and real-time camera experience.' },
      { kind: 'blank', text: '' },
      { kind: 'section', text: '[ EXPERIENCE ]' },
      { kind: 'accent', text: 'Aug 2026 — Present  |  Software Developer · PKF Technology' },
      { kind: 'text', text: 'ERP integrations, C# backend services, MVC modules, and MSSQL data solutions.' },
      { kind: 'text', text: 'Jul 2026  |  Software Development Intern · PKF Technology' },
      { kind: 'text', text: 'Apr — Jun 2026  |  Part-time Software Developer · PKF Technology' },
      { kind: 'text', text: 'Jul — Aug 2025  |  Computer Vision Intern · RockTechSoft' },
      { kind: 'text', text: '2024  |  IT and ERP Internships · Meray Kuruyemiş / Sistem Yazılım' },
      { kind: 'blank', text: '' },
      { kind: 'section', text: '[ PRODUCTION SYSTEMS ]' },
      { kind: 'accent', text: 'Expense Management Platform · Solo end-to-end delivery · 100+ live users' },
      { kind: 'text', text: 'Active at PKF with multiple limit structures and multi-step approval workflows.' },
      { kind: 'text', text: 'Legal Case Management System · End-to-end delivery of the core system' },
      { kind: 'text', text: 'UYAP integration and PM, proposal, and contract wizards · Team delivery' },
      { kind: 'blank', text: '' },
      { kind: 'section', text: '[ EDUCATION ]' },
      { kind: 'accent', text: '2021 — 2026  |  Çukurova University · Computer Engineering (English)' },
      { kind: 'blank', text: '' },
      { kind: 'section', text: '[ SELECTED PROJECTS ]' },
      { kind: 'text', text: '01  Object Detection with ZED Camera · Python / YOLO / Depth Cameras' },
      { kind: 'text', text: '02  Bone Fracture Detection · Model Training / Fine-tuning' },
      { kind: 'text', text: '03  Virtual Museum Simulation · C++ / OpenGL' },
      { kind: 'text', text: '04  Santiyem · React / Express / PostgreSQL / React Native' },
      { kind: 'text', text: '05  NYC Airbnb Data Dashboard · Python / Streamlit / Plotly' },
      { kind: 'blank', text: '' },
      { kind: 'section', text: '[ TECHNICAL SKILLS ]' },
      { kind: 'text', text: 'C# · ASP.NET MVC · MSSQL · SQL · JavaScript · Python · C/C++' },
      { kind: 'text', text: 'Canias ERP · React Native · OpenGL · ZED 2i · Intel RealSense · Git' },
      { kind: 'success', text: '✓ CV rendered successfully.' },
    ],
    experienceKicker: '03 / Experience', experienceTitle: 'Software development experience', present: 'Present',
    experiencePageBody: 'I started with ERP and IT internships in 2024. Today at PKF Technology, I develop C# backend services, MVC modules, MSSQL data solutions, and ERP integrations.',
    experience: [
      { date: 'Aug 2026 — Present', role: 'Software Developer', company: 'PKF Technology', body: 'ERP integrations, mobile/web applications, C# backend services, MVC modules, MSSQL data modelling, and performance improvements.', current: true },
      { date: 'Jul 2026', role: 'Software Development Intern', company: 'PKF Technology', body: 'Development of ERP integration modules; troubleshooting and improvement work in existing web applications.' },
      { date: 'Apr — Jun 2026', role: 'Part-time Software Developer', company: 'PKF Technology', body: 'Development responsibilities alongside university studies, including work released to production.' },
      { date: 'Jul — Aug 2025', role: 'Computer Vision Intern', company: 'RockTechSoft', body: 'Applications with ZED 2i and Intel RealSense cameras; model training, fine-tuning, and evaluation on radiology data.' },
      { date: 'Aug — Sep 2024', role: 'Volunteer IT Intern', company: 'Meray Kuruyemiş', body: 'Data, definitions, and reporting in Canias ERP; network architecture analysis and documentation.' },
      { date: 'Jun — Jul 2024', role: 'Volunteer ERP Intern', company: 'Sistem Yazılım', body: 'Foundational development in C# backend and MVC projects; SQL queries and database operations.' },
    ],
    professionalWorkLabel: 'Production Systems',
    professionalWorkTitle: 'Enterprise products running in production.',
    professionalWorkIntro: 'Selected systems where I took responsibility from analysis through production use and delivered solutions for real business workflows.',
    professionalProjects: [
      { ownership: 'Solo · End-to-end', impact: '100+ live users', title: 'Expense Management Platform', body: 'An active PKF platform that centralizes expense processes with multiple limit structures and multi-step approval workflows. I independently handled analysis, architecture, development, and production rollout.', tags: ['Multiple limits', 'Approval flows', 'Production system'] },
      { ownership: 'Core system · End-to-end', impact: 'UYAP & wizards · Team', title: 'Legal Case Management System', body: 'I developed the core system for managing a law office’s case and file workflows end to end. The UYAP integration and guided workflows for PM, leave, proposals, and contracts were delivered collaboratively with the team.', tags: ['Case management', 'UYAP', 'PM', 'Proposals', 'Contracts'] },
    ],
    professionalConfidentiality: 'Enterprise work · Source code and client details are confidential.',
    education: 'Çukurova University', degree: 'Computer Engineering (English)', educationDate: '2021 — 2026',
    projectsKicker: '04 / Projects', projectsTitle: 'Projects I have built',
    projectsPageBody: 'Personal and open-source projects across computer vision, graphics programming, data visualization, and web development.',
    projects: [
      { title: 'Object Detection with ZED Camera', label: 'Computer Vision', body: 'Real-time image processing focused on stereo camera data, depth maps, and object positioning.', tech: ['Python', 'ZED 2i', 'Intel RealSense', 'YOLO'], image: zedImage, href: 'https://github.com/farukdnc27/zed-cam-object-deteciton-and-modelling' },
      { title: 'Bone Fracture Detection', label: 'Deep Learning', body: 'Dataset preparation, model training, fine-tuning, and evaluation to detect fracture regions in radiology images.', tech: ['Python', 'YOLO', 'Model Training', 'Fine-tuning'], image: boneImage, href: 'https://github.com/farukdnc27/Bone-fracture-detection-with-yolo' },
      { title: 'Virtual Museum Simulation', label: 'Graphics Programming', body: 'A simulation built entirely with C++ and OpenGL, featuring a 3D environment, navigation, model display, and interaction.', tech: ['C++', 'OpenGL', 'Blender', 'ImGui'], image: museumImage, href: 'https://github.com/farukdnc27/virtual-adana-museum-project' },
    ],
    githubProfileLink: 'View all repositories',
    githubProjects: [
      { title: 'Santiyem', type: 'End-to-end Product', body: 'A construction-site platform that brings teams, tasks, daily reports, and field media together across a web dashboard, mobile app, and backend API.', tech: ['React', 'Express', 'PostgreSQL', 'React Native'], image: santiyemImage, imageAlt: 'Original application visual from the Santiyem repository', href: 'https://github.com/farukdnc27/Santiyem' },
      { title: 'NYC Airbnb Data Dashboard', type: 'Team Project', body: 'A Streamlit dashboard exploring nearly 48K Airbnb listings. Contributions include the home page, styling, histogram, treemap, and heatmap.', tech: ['Python', 'Streamlit', 'Plotly', 'Pandas'], image: airbnbDashboardImage, imageAlt: 'Live screenshot of the NYC Airbnb Analytics dashboard', href: 'https://github.com/farukdnc27/CEN445-DataViz-Project' },
      { title: 'Bulk Unlike Utility', type: 'Browser Extension', body: 'An open-source educational Chromium extension that helps users manage social-media likes while processing data locally on the device.', tech: ['JavaScript', 'Chrome Extension', 'Local-first'], image: bulkUnlikeImage, imageAlt: 'Original Bulk Unlike Utility project icon', href: 'https://github.com/farukdnc27/scoial-media-unliker' },
      { title: 'Galatasaray UCL Squad', type: 'Frontend Experience', body: 'A responsive fan project presenting squad data in formation and list views with a JSON data model and SVG pitch graphics.', tech: ['React', 'TypeScript', 'Vite', 'SVG'], image: uclSquadImage, imageAlt: 'Live Galatasaray UCL Squad project screen', href: 'https://github.com/farukdnc27/ucl2' },
    ],
    projectLink: 'View on GitHub',
    skillsKicker: '05 / Technical Skills', skillsTitle: 'Technologies I use',
    skillGroups: [
      { title: 'Backend & Web', body: 'Services, MVC modules, and integrations', items: ['C#', 'ASP.NET MVC', 'Backend architecture', 'JavaScript', 'Service integrations'] },
      { title: 'Data & ERP', body: 'Modelling, querying, and business systems', items: ['MSSQL', 'SQL', 'Data modelling', 'Performance improvement', 'Canias ERP'] },
      { title: 'Vision & Systems', body: 'Camera data, models, and low-level development', items: ['Python', 'C / C++', 'OpenGL', 'ZED 2i', 'Intel RealSense', 'Assembly'] },
    ],
    closing: 'Have a project we could work on together?', closingBody: 'Reach out by email for backend, web, and computer vision projects.', footer: 'Designed and built by Ömer Faruk Dinçoğlu.',
  },
} as const;

const skillIcons = [Code2, Database, ScanLine];

type PageIntroProps = {
  kicker: string;
  title: string;
  body: string;
};

function PageIntro({ kicker, title, body }: PageIntroProps) {
  const sectionNumber = kicker.split('/')[0].trim();

  return (
    <section className="page-hero">
      <div className="page-hero__grid" aria-hidden="true" />
      <p className="section-kicker">{kicker}</p>
      <div className="page-hero__copy">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <div className="page-hero__visual" aria-hidden="true">
        <span>{sectionNumber}</span>
        <i />
      </div>
    </section>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cvStarted, setCvStarted] = useState(false);
  const [completedCvLines, setCompletedCvLines] = useState(0);
  const [activeCvText, setActiveCvText] = useState('');
  const cvSectionRef = useRef<HTMLElement>(null);
  const cvOutputRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const t = content[language];
  const cleanPath = location.pathname.replace(/\/+$/, '') || '/';
  const page = ({
    '/': 'home',
    '/about': 'about',
    '/experience': 'experience',
    '/projects': 'projects',
    '/cv': 'cv',
  } as const)[cleanPath as '/' | '/about' | '/experience' | '/projects' | '/cv'] ?? 'home';
  const allProjects = [
    ...t.projects.map((project) => ({ ...project, category: project.label, imageAlt: project.title })),
    ...t.githubProjects.map((project) => ({ ...project, category: project.type })),
  ];

  useEffect(() => {
    document.documentElement.lang = language;
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [language]);

  useEffect(() => {
    const legacyRoutes: Record<string, string> = {
      '#profile': '/about',
      '#skills': '/about',
      '#experience': '/experience',
      '#work': '/projects',
      '#cv': '/cv',
    };
    const target = legacyRoutes[location.hash];
    if (location.pathname === '/' && target) navigate(target, { replace: true });
  }, [location.hash, location.pathname, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const seo = language === 'tr' ? {
      home: {
        title: 'Ömer Faruk Dinçoğlu | Yazılım Geliştirici',
        description: 'Ömer Faruk Dinçoğlu; C#, ASP.NET MVC, MSSQL, ERP entegrasyonları ve bilgisayarlı görü alanlarında çalışan Bilgisayar Mühendisi ve Yazılım Geliştirici.',
      },
      about: {
        title: 'Hakkımda | Ömer Faruk Dinçoğlu',
        description: 'Ömer Faruk Dinçoğlu’nun eğitimi, backend geliştirme yaklaşımı ve C#, ASP.NET MVC, MSSQL, ERP ve bilgisayarlı görü yetkinlikleri.',
      },
      experience: {
        title: 'Yazılım Geliştirme Deneyimi | Ömer Faruk Dinçoğlu',
        description: 'Ömer Faruk Dinçoğlu’nun PKF Teknoloji, RockTechSoft, Meray Kuruyemiş ve Sistem Yazılım deneyimleri ile üretimde çalışan sistemleri.',
      },
      projects: {
        title: 'Yazılım Projeleri | Ömer Faruk Dinçoğlu',
        description: 'Ömer Faruk Dinçoğlu’nun bilgisayarlı görü, C++, OpenGL, React, Python, Streamlit ve web geliştirme projeleri.',
      },
      cv: {
        title: 'İnteraktif CV | Ömer Faruk Dinçoğlu',
        description: 'Ömer Faruk Dinçoğlu’nun eğitim, deneyim, üretim sistemleri, projeler ve teknik yetkinliklerini içeren interaktif CV’si.',
      },
    } : {
      home: {
        title: 'Ömer Faruk Dinçoğlu | Software Developer',
        description: 'Ömer Faruk Dinçoğlu is a Computer Engineer and Software Developer building C#, ASP.NET MVC, MSSQL, ERP integration, and computer vision projects.',
      },
      about: {
        title: 'About | Ömer Faruk Dinçoğlu',
        description: 'Learn about Ömer Faruk Dinçoğlu’s Computer Engineering education, backend development approach, and technical skills across C#, MSSQL, ERP, and computer vision.',
      },
      experience: {
        title: 'Software Development Experience | Ömer Faruk Dinçoğlu',
        description: 'Explore Ömer Faruk Dinçoğlu’s software development experience at PKF Teknoloji, RockTechSoft, Meray Kuruyemiş, and Sistem Yazılım.',
      },
      projects: {
        title: 'Software Projects | Ömer Faruk Dinçoğlu',
        description: 'Selected software projects by Ömer Faruk Dinçoğlu across computer vision, C++, OpenGL, React, Python, Streamlit, and web development.',
      },
      cv: {
        title: 'Interactive CV | Ömer Faruk Dinçoğlu',
        description: 'Interactive CV for Ömer Faruk Dinçoğlu covering education, software experience, production systems, projects, and technical skills.',
      },
    };
    const pagePath = { home: '/', about: '/about', experience: '/experience', projects: '/projects', cv: '/cv' }[page];
    const canonicalUrl = `https://farukdincoglu.dev${pagePath}`;
    const metadata = seo[page];

    document.title = metadata.title;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')?.setAttribute('content', language === 'tr' ? 'tr_TR' : 'en_US');
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
  }, [language, page]);

  useEffect(() => {
    const section = cvSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCvStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });

    observer.observe(section);
    return () => observer.disconnect();
  }, [page]);

  useEffect(() => {
    setCompletedCvLines(0);
    setActiveCvText('');
  }, [language]);

  useEffect(() => {
    if (!cvStarted || completedCvLines >= t.cvLines.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCompletedCvLines(t.cvLines.length);
      setActiveCvText('');
      return;
    }

    const target = t.cvLines[completedCvLines].text;
    const lineComplete = activeCvText.length >= target.length;
    const timer = window.setTimeout(() => {
      if (lineComplete) {
        setCompletedCvLines((count) => count + 1);
        setActiveCvText('');
      } else {
        setActiveCvText(target.slice(0, activeCvText.length + 1));
      }
    }, lineComplete ? (target ? 85 : 35) : 12);

    return () => window.clearTimeout(timer);
  }, [activeCvText, completedCvLines, cvStarted, t.cvLines]);

  useEffect(() => {
    const output = cvOutputRef.current;
    if (output) output.scrollTop = output.scrollHeight;
  }, [activeCvText, completedCvLines]);

  const replayCv = () => {
    setCompletedCvLines(0);
    setActiveCvText('');
    setCvStarted(true);
  };

  const showFullCv = () => {
    setCompletedCvLines(t.cvLines.length);
    setActiveCvText('');
    setCvStarted(true);
  };

  const navItems = [
    ['/', t.nav.home],
    ['/about', t.nav.profile],
    ['/experience', t.nav.experience],
    ['/projects', t.nav.work],
    ['/cv', t.nav.cv],
  ] as const;
  const homeRoutes = ['/about', '/experience', '/projects', '/cv'] as const;
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`topbar ${scrolled || page !== 'home' ? 'topbar--scrolled' : ''}`}>
        <Link className="monogram" to="/" onClick={closeMenu} aria-label="Ömer Faruk Dinçoğlu"><span>ÖF</span><span className="monogram__dot" /></Link>
        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([to, label], index) => <NavLink to={to} end={to === '/'} onClick={closeMenu} key={to} className={({ isActive }) => isActive ? 'active' : ''}><span>0{index + 1}</span>{label}</NavLink>)}
        </nav>
        <div className="topbar__actions">
          <button className="language-toggle" onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')} aria-label={language === 'tr' ? 'Switch to English' : 'Türkçeye geç'}><Globe2 size={16} />{language === 'tr' ? 'EN' : 'TR'}</button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top" className={page === 'home' ? '' : 'page-main'}>
        {page === 'home' && <>
          <section className="hero" aria-labelledby="hero-title">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__copy reveal">
            <div className="availability"><span />{t.availability}</div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 id="hero-title">{t.heroTitle}</h1>
            <p className="hero__body">{t.heroBody}</p>
            <div className="hero__actions"><Link className="button button--primary" to="/cv">{t.watchCv}</Link><Link className="button button--ghost" to="/projects">{t.viewWork}</Link></div>
            <div className="social-row"><span>{t.location}</span><a href="https://github.com/farukdnc27" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="https://www.linkedin.com/in/%C3%B6merfarukdincoglu" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></div>
          </div>
          <aside className="hero__panel reveal reveal--delay" aria-label={t.focusTitle}>
            <div className="hero__panel-code" aria-hidden="true">BE<br />/01</div>
            <div className="hero__panel-content"><p>{t.focusLabel}</p><h2>{t.focusTitle}</h2><span>{t.focusBody}</span></div>
          </aside>
          <div className="stats-row">{t.stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
          </section>
          <section className="section home-index">
            <div className="home-index__heading">
              <p className="section-kicker">{t.homeIndexKicker}</p>
              <div><h2>{t.homeIndexTitle}</h2><p>{t.homeIndexIntro}</p></div>
            </div>
            <div className="home-index__grid">
              {t.homeIndexItems.map(([number, title, body], index) => (
                <Link className="home-index__card" to={homeRoutes[index]} key={number}>
                  <span>{number}</span><h3>{title}</h3><p>{body}</p><strong aria-hidden="true">↗</strong>
                </Link>
              ))}
            </div>
          </section>
        </>}

        {page === 'about' && <>
          <PageIntro kicker={t.profileKicker} title={t.profileTitle} body={t.profileBody} />
          <section className="section profile-section profile-section--page">
            <div className="principles principles--page">{t.principles.map(([number, title, body]) => <article className="principle" key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
          </section>
          <section className="section skills-section">
            <div className="section-heading"><p className="section-kicker">{t.skillsKicker}</p><h2>{t.skillsTitle}</h2></div>
            <div className="skills-grid">{t.skillGroups.map((group, index) => { const Icon = skillIcons[index]; return <article className="skill-card" key={group.title}><div className="skill-card__icon"><Icon /></div><p>0{index + 1}</p><h3>{group.title}</h3><span>{group.body}</span><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>; })}</div>
          </section>
        </>}

        {page === 'cv' && <>
          <PageIntro kicker={t.cvKicker} title={t.cvTitle} body={t.cvIntro} />
          <section className="section cv-section cv-section--page" ref={cvSectionRef}>
          <div className="cv-console">
            <div className="cv-console__bar">
              <div className="cv-console__window-controls" aria-hidden="true"><span /><span /><span /></div>
              <span className="cv-console__filename">{t.cvFile}</span>
              <div className="cv-console__actions">
                <button onClick={replayCv} type="button"><RotateCcw size={15} />{t.cvReplay}</button>
                <button onClick={showFullCv} type="button"><FastForward size={15} />{t.cvShowAll}</button>
              </div>
            </div>

            <div className="cv-console__progress" aria-hidden="true">
              <span style={{ width: `${(completedCvLines / t.cvLines.length) * 100}%` }} />
            </div>

            <div className="cv-console__output" ref={cvOutputRef} aria-label={t.cvTitle}>
              {t.cvLines.slice(0, completedCvLines).map((line, index) => (
                <div className={`cv-line cv-line--${line.kind}`} key={`${language}-${index}`}>
                  <span className="cv-line__number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="cv-line__text">{line.text || ' '}</span>
                </div>
              ))}
              {completedCvLines < t.cvLines.length && (
                <div className={`cv-line cv-line--${t.cvLines[completedCvLines].kind} cv-line--active`}>
                  <span className="cv-line__number">{String(completedCvLines + 1).padStart(2, '0')}</span>
                  <span className="cv-line__text">{activeCvText}<span className="terminal-caret" aria-hidden="true" /></span>
                </div>
              )}
            </div>

            <div className="cv-console__status">
              <span className={completedCvLines === t.cvLines.length ? 'is-ready' : ''} />
              {completedCvLines === t.cvLines.length ? t.cvReady : t.cvRunning}
              <strong>{completedCvLines}/{t.cvLines.length}</strong>
            </div>
          </div>
          </section>
        </>}

        {page === 'experience' && <>
          <PageIntro kicker={t.experienceKicker} title={t.experienceTitle} body={t.experiencePageBody} />
          <section className="section section--ink experience-page">
          <div className="timeline">{t.experience.map((item) => <article className={`timeline-item ${'current' in item && item.current ? 'timeline-item--current' : ''}`} key={`${item.company}-${item.date}`}><time>{item.date}</time><div className="timeline-marker" aria-hidden="true" /><div><div className="timeline-title"><h3>{item.role}</h3><span>{item.company}</span>{'current' in item && item.current && <em>{t.present}</em>}</div><p>{item.body}</p></div></article>)}</div>
          <div className="education-card"><GraduationCap aria-hidden="true" /><div><span>{t.education}</span><strong>{t.degree}</strong></div><time>{t.educationDate}</time></div>
          <div className="professional-work">
            <div className="professional-work__heading"><p>{t.professionalWorkLabel}</p><h3>{t.professionalWorkTitle}</h3><span>{t.professionalWorkIntro}</span></div>
            <div className="professional-grid">
              {t.professionalProjects.map((project, index) => (
                <article className="professional-card" key={project.title}>
                  <div className="professional-card__top"><span>0{index + 1}</span><em>{project.ownership}</em></div>
                  <strong>{project.impact}</strong>
                  <h4>{project.title}</h4>
                  <p>{project.body}</p>
                  <div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
            <p className="professional-work__note">{t.professionalConfidentiality}</p>
          </div>
          </section>
        </>}

        {page === 'projects' && <>
          <PageIntro kicker={t.projectsKicker} title={t.projectsTitle} body={t.projectsPageBody} />
          <section className="section projects-section projects-section--page">
          <div className="portfolio-grid">
            {allProjects.map((project, index) => (
              <article className="portfolio-card" key={project.title}>
                <a className={`portfolio-card__image portfolio-card__image--${index + 1}`} href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} · ${t.projectLink}`}>
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  <span>{project.category}</span>
                </a>
                <div className="portfolio-card__content">
                  <div className="portfolio-card__meta"><span>{String(index + 1).padStart(2, '0')}</span><Github aria-hidden="true" /></div>
                  <h3>{project.title}</h3>
                  <p>{project.body}</p>
                  <div className="portfolio-card__tags">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                  <a href={project.href} target="_blank" rel="noreferrer"><Github size={16} />{t.projectLink}</a>
                </div>
              </article>
            ))}
          </div>
          <div className="projects-footer"><span>github.com/farukdnc27</span><a href="https://github.com/farukdnc27?tab=repositories" target="_blank" rel="noreferrer"><Github size={17} />{t.githubProfileLink}</a></div>
          </section>
        </>}

        <section className="contact-section"><div><p>{t.eyebrow}</p><h2>{t.closing}</h2><span>{t.closingBody}</span></div><a className="button button--light" href="mailto:farukdincoglu27@gmail.com"><Mail size={18} />farukdincoglu27@gmail.com</a></section>
      </main>

      <footer><div className="footer-brand"><span>ÖF</span><strong>Ömer Faruk Dinçoğlu</strong></div><p>© 2026 · {t.footer}</p><div><a href="https://github.com/farukdnc27" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/%C3%B6merfarukdincoglu" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="mailto:farukdincoglu27@gmail.com" aria-label="Email"><Mail /></a></div></footer>
    </div>
  );
}

export default App;
