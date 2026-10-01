import { useEffect, useState } from 'react';
import {
  Code2, Database, Github, Globe2, GraduationCap, Linkedin, Mail, Menu, ScanLine, X,
} from 'lucide-react';
import museumImage from './assets/museum.jpeg';
import zedImage from './assets/zed.jpeg';
import boneImage from './assets/bone.jpeg';

type Language = 'tr' | 'en';

const content = {
  tr: {
    nav: { profile: 'Profil', experience: 'Deneyim', work: 'Projeler', skills: 'Yetkinlikler' },
    availability: 'Ağustos 2026’dan beri PKF Teknoloji’de',
    eyebrow: 'Bilgisayar Mühendisi · Yazılım Geliştirici',
    heroTitle: 'Backend sistemleri, gerçek dünya problemleri.',
    heroBody: 'C# ve ASP.NET MVC ile web uygulamaları; MSSQL ile veri katmanları; ERP entegrasyonları ve görüntü işleme projeleri geliştiriyorum.',
    viewWork: 'Projeleri incele', contact: 'E-posta gönder', location: 'İstanbul / Gaziantep',
    focusLabel: 'Şu an', focusTitle: 'PKF Teknoloji’de Yazılım Geliştirici',
    focusBody: 'ERP sistem entegrasyonları, backend servisleri, MVC web modülleri ve MSSQL tabanlı veri çözümleri üzerinde çalışıyorum.',
    stats: [['6', 'Profesyonel deneyim adımı'], ['2026', 'Bilgisayar Mühendisliği mezuniyeti'], ['3', 'Odak alanı: backend, veri, görüntü']],
    profileKicker: '01 / Profil', profileTitle: 'Yazılımı, iş ihtiyacının çalışır karşılığına dönüştürüyorum.',
    profileBody: 'Çukurova Üniversitesi Bilgisayar Mühendisliği (İngilizce) mezunuyum. Farklı sektörlerde edindiğim staj deneyimlerini bugün tam zamanlı ürün geliştirme süreçlerine taşıyorum. Backend geliştirme ve veri tasarımındaki odağımı, bilgisayarlı görü ve gerçek zamanlı kamera uygulamalarından gelen problem çözme pratiğiyle birleştiriyorum.',
    principles: [
      ['01', 'Uygulanabilirlik', 'Analizden canlı ortama uzanan, gerçek ihtiyaca bağlı çözümler.'],
      ['02', 'Sistem düşüncesi', 'Servis, veri ve arayüz katmanlarını birlikte ele alan yaklaşım.'],
      ['03', 'Sürekli gelişim', 'Yeni araçları hızla öğrenip üretim pratiğine dönüştürme.'],
    ],
    experienceKicker: '02 / Deneyim', experienceTitle: 'Öğrenme sürecinden üretim sorumluluğuna.', present: 'Devam ediyor',
    experience: [
      { date: 'Ağu 2026 — Bugün', role: 'Yazılım Geliştirici', company: 'PKF Teknoloji', body: 'ERP entegrasyonları, mobil/web uygulamaları, C# backend servisleri, MVC modülleri ve MSSQL veri modelleme ile performans iyileştirmeleri.', current: true },
      { date: 'Tem 2026', role: 'Stajyer Yazılım Geliştirici', company: 'PKF Teknoloji', body: 'ERP entegrasyon modüllerinin geliştirilmesi; mevcut web uygulamalarında hata tespiti ve iyileştirme.' },
      { date: 'Nis — Haz 2026', role: 'Yarı Zamanlı Yazılım Geliştirici', company: 'PKF Teknoloji', body: 'Üniversite eğitimiyle eş zamanlı geliştirme görevleri ve canlıya alınan işlerde sorumluluk.' },
      { date: 'Tem — Ağu 2025', role: 'Görüntü İşleme Stajyeri', company: 'RockTechSoft', body: 'ZED 2i ve Intel RealSense kameralarla uygulamalar; radyoloji verilerinde model eğitimi, fine-tuning ve sonuç değerlendirme.' },
      { date: 'Ağu — Eyl 2024', role: 'Gönüllü IT Stajyeri', company: 'Meray Kuruyemiş', body: 'Canias ERP üzerinde veri, tanımlama ve raporlama; ağ mimarisinin analizi ve şemalandırılması.' },
      { date: 'Haz — Tem 2024', role: 'Gönüllü ERP Stajyeri', company: 'Sistem Yazılım', body: 'C# backend ve MVC projelerinde temel geliştirme; SQL sorguları ve veritabanı işlemleri.' },
    ],
    education: 'Çukurova Üniversitesi', degree: 'Bilgisayar Mühendisliği (İngilizce)', educationDate: '2021 — 2026',
    projectsKicker: '03 / Seçili Projeler', projectsTitle: 'Kod, donanım ve verinin kesişiminde.',
    projects: [
      { title: 'ZED Kamera ile Nesne Tespiti', label: 'Bilgisayarlı Görü', body: 'Stereo kamera verisi, derinlik haritaları ve nesne konumlandırma üzerine gerçek zamanlı görüntü işleme çalışması.', tech: ['Python', 'ZED 2i', 'Intel RealSense', 'YOLO'], image: zedImage, href: 'https://github.com/farukdnc27/zed-cam-object-deteciton-and-modelling' },
      { title: 'Kemik Kırığı Tespiti', label: 'Derin Öğrenme', body: 'Radyoloji görüntülerinde kırık bölgelerini tespit etmek için veri hazırlama, model eğitimi, fine-tuning ve sonuç değerlendirme.', tech: ['Python', 'YOLO', 'Model Training', 'Fine-tuning'], image: boneImage, href: 'https://github.com/farukdnc27/Bone-fracture-detection-with-yolo' },
      { title: 'Sanal Müze Simülasyonu', label: 'Grafik Programlama', body: 'Tamamen C++ ve OpenGL ile geliştirilen; 3B ortam, navigasyon, model gösterimi ve kullanıcı etkileşimi içeren simülasyon.', tech: ['C++', 'OpenGL', 'Blender', 'ImGui'], image: museumImage, href: 'https://github.com/farukdnc27/virtual-adana-museum-project' },
    ],
    otherWork: 'Diğer çalışmalar', otherProjects: [['React Native Mobil Uygulama', 'Çapraz platform mobil uygulama geliştirme'], ['Mikroişlemci Programlama', 'Assembly ile düşük seviye programlama ve donanım kontrolü']], projectLink: 'GitHub’da incele',
    skillsKicker: '04 / Teknik Yetkinlikler', skillsTitle: 'Ürün geliştirme döngüsünün farklı katmanlarında çalışıyorum.',
    skillGroups: [
      { title: 'Backend & Web', body: 'Servisler, MVC modülleri ve entegrasyonlar', items: ['C#', 'ASP.NET MVC', 'Backend mimarileri', 'JavaScript', 'Servis entegrasyonları'] },
      { title: 'Veri & ERP', body: 'Modelleme, sorgulama ve iş sistemleri', items: ['MSSQL', 'SQL', 'Veri modelleme', 'Performans iyileştirme', 'Canias ERP'] },
      { title: 'Görüntü & Sistem', body: 'Kamera verisi, model ve düşük seviye geliştirme', items: ['Python', 'C / C++', 'OpenGL', 'ZED 2i', 'Intel RealSense', 'Assembly'] },
    ],
    closing: 'Birlikte çalışabileceğimiz bir konu mu var?', closingBody: 'Backend, web ve bilgisayarlı görü projeleri için benimle e-posta üzerinden iletişime geçebilirsiniz.', footer: 'Tasarlayan ve geliştiren Ömer Faruk Dinçoğlu.',
  },
  en: {
    nav: { profile: 'Profile', experience: 'Experience', work: 'Work', skills: 'Skills' },
    availability: 'At PKF Technology since August 2026', eyebrow: 'Computer Engineer · Software Developer',
    heroTitle: 'Backend systems, real-world problems.', heroBody: 'I build web applications with C# and ASP.NET MVC, data layers with MSSQL, ERP integrations, and computer vision projects.',
    viewWork: 'Explore my work', contact: 'Send an email', location: 'Istanbul / Gaziantep',
    focusLabel: 'Currently', focusTitle: 'Software Developer at PKF Technology', focusBody: 'Working on ERP system integrations, backend services, MVC web modules, and MSSQL-based data solutions.',
    stats: [['6', 'Professional experience steps'], ['2026', 'Computer Engineering graduate'], ['3', 'Focus areas: backend, data, vision']],
    profileKicker: '01 / Profile', profileTitle: 'I turn software requirements into working systems.',
    profileBody: 'I graduated from the English-taught Computer Engineering program at Çukurova University. Today, I bring the experience I gained through internships in different industries into full-time product development. I combine my focus on backend development and data design with the problem-solving practice I gained from computer vision and real-time camera applications.',
    principles: [
      ['01', 'Practical delivery', 'Solutions tied to real needs, from analysis through production.'],
      ['02', 'Systems thinking', 'An approach that considers service, data, and interface layers together.'],
      ['03', 'Continuous growth', 'Learning new tools quickly and turning them into production practice.'],
    ],
    experienceKicker: '02 / Experience', experienceTitle: 'From learning the craft to owning production work.', present: 'Present',
    experience: [
      { date: 'Aug 2026 — Present', role: 'Software Developer', company: 'PKF Technology', body: 'ERP integrations, mobile/web applications, C# backend services, MVC modules, MSSQL data modelling, and performance improvements.', current: true },
      { date: 'Jul 2026', role: 'Software Development Intern', company: 'PKF Technology', body: 'Development of ERP integration modules; troubleshooting and improvement work in existing web applications.' },
      { date: 'Apr — Jun 2026', role: 'Part-time Software Developer', company: 'PKF Technology', body: 'Development responsibilities alongside university studies, including work released to production.' },
      { date: 'Jul — Aug 2025', role: 'Computer Vision Intern', company: 'RockTechSoft', body: 'Applications with ZED 2i and Intel RealSense cameras; model training, fine-tuning, and evaluation on radiology data.' },
      { date: 'Aug — Sep 2024', role: 'Volunteer IT Intern', company: 'Meray Kuruyemiş', body: 'Data, definitions, and reporting in Canias ERP; network architecture analysis and documentation.' },
      { date: 'Jun — Jul 2024', role: 'Volunteer ERP Intern', company: 'Sistem Yazılım', body: 'Foundational development in C# backend and MVC projects; SQL queries and database operations.' },
    ],
    education: 'Çukurova University', degree: 'Computer Engineering (English)', educationDate: '2021 — 2026',
    projectsKicker: '03 / Selected Work', projectsTitle: 'Where code, hardware, and data meet.',
    projects: [
      { title: 'Object Detection with ZED Camera', label: 'Computer Vision', body: 'Real-time image processing focused on stereo camera data, depth maps, and object positioning.', tech: ['Python', 'ZED 2i', 'Intel RealSense', 'YOLO'], image: zedImage, href: 'https://github.com/farukdnc27/zed-cam-object-deteciton-and-modelling' },
      { title: 'Bone Fracture Detection', label: 'Deep Learning', body: 'Dataset preparation, model training, fine-tuning, and evaluation to detect fracture regions in radiology images.', tech: ['Python', 'YOLO', 'Model Training', 'Fine-tuning'], image: boneImage, href: 'https://github.com/farukdnc27/Bone-fracture-detection-with-yolo' },
      { title: 'Virtual Museum Simulation', label: 'Graphics Programming', body: 'A simulation built entirely with C++ and OpenGL, featuring a 3D environment, navigation, model display, and interaction.', tech: ['C++', 'OpenGL', 'Blender', 'ImGui'], image: museumImage, href: 'https://github.com/farukdnc27/virtual-adana-museum-project' },
    ],
    otherWork: 'Other work', otherProjects: [['React Native Mobile App', 'Cross-platform mobile application development'], ['Microprocessor Programming', 'Low-level programming and hardware control with Assembly']], projectLink: 'View on GitHub',
    skillsKicker: '04 / Technical Skills', skillsTitle: 'I work across multiple layers of the product development cycle.',
    skillGroups: [
      { title: 'Backend & Web', body: 'Services, MVC modules, and integrations', items: ['C#', 'ASP.NET MVC', 'Backend architecture', 'JavaScript', 'Service integrations'] },
      { title: 'Data & ERP', body: 'Modelling, querying, and business systems', items: ['MSSQL', 'SQL', 'Data modelling', 'Performance improvement', 'Canias ERP'] },
      { title: 'Vision & Systems', body: 'Camera data, models, and low-level development', items: ['Python', 'C / C++', 'OpenGL', 'ZED 2i', 'Intel RealSense', 'Assembly'] },
    ],
    closing: 'Have a project we could work on together?', closingBody: 'Reach out by email for backend, web, and computer vision projects.', footer: 'Designed and built by Ömer Faruk Dinçoğlu.',
  },
} as const;

const skillIcons = [Code2, Database, ScanLine];

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [language]);

  const navItems = [['profile', t.nav.profile], ['experience', t.nav.experience], ['work', t.nav.work], ['skills', t.nav.skills]];
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`}>
        <a className="monogram" href="#top" onClick={closeMenu} aria-label="Ömer Faruk Dinçoğlu"><span>ÖF</span><span className="monogram__dot" /></a>
        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([id, label], index) => <a href={`#${id}`} onClick={closeMenu} key={id}><span>0{index + 1}</span>{label}</a>)}
        </nav>
        <div className="topbar__actions">
          <button className="language-toggle" onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')} aria-label={language === 'tr' ? 'Switch to English' : 'Türkçeye geç'}><Globe2 size={16} />{language === 'tr' ? 'EN' : 'TR'}</button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__copy reveal">
            <div className="availability"><span />{t.availability}</div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 id="hero-title">{t.heroTitle}</h1>
            <p className="hero__body">{t.heroBody}</p>
            <div className="hero__actions"><a className="button button--primary" href="#work">{t.viewWork}</a><a className="button button--ghost" href="mailto:farukdincoglu27@gmail.com"><Mail size={18} />{t.contact}</a></div>
            <div className="social-row"><span>{t.location}</span><a href="https://github.com/farukdnc27" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="https://www.linkedin.com/in/%C3%B6merfarukdincoglu" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></div>
          </div>
          <aside className="hero__panel reveal reveal--delay" aria-label={t.focusTitle}>
            <div className="hero__panel-code" aria-hidden="true">BE<br />/01</div>
            <div className="hero__panel-content"><p>{t.focusLabel}</p><h2>{t.focusTitle}</h2><span>{t.focusBody}</span></div>
          </aside>
          <div className="stats-row">{t.stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        </section>

        <section className="section profile-section" id="profile">
          <div className="section-heading"><p className="section-kicker">{t.profileKicker}</p><h2>{t.profileTitle}</h2></div>
          <div className="profile-layout"><p className="profile-intro">{t.profileBody}</p><div className="principles">{t.principles.map(([number, title, body]) => <article className="principle" key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div>
        </section>

        <section className="section section--ink" id="experience">
          <div className="section-heading section-heading--light"><p className="section-kicker">{t.experienceKicker}</p><h2>{t.experienceTitle}</h2></div>
          <div className="timeline">{t.experience.map((item) => <article className={`timeline-item ${'current' in item && item.current ? 'timeline-item--current' : ''}`} key={`${item.company}-${item.date}`}><time>{item.date}</time><div className="timeline-marker" aria-hidden="true" /><div><div className="timeline-title"><h3>{item.role}</h3><span>{item.company}</span>{'current' in item && item.current && <em>{t.present}</em>}</div><p>{item.body}</p></div></article>)}</div>
          <div className="education-card"><GraduationCap aria-hidden="true" /><div><span>{t.education}</span><strong>{t.degree}</strong></div><time>{t.educationDate}</time></div>
        </section>

        <section className="section projects-section" id="work">
          <div className="section-heading"><p className="section-kicker">{t.projectsKicker}</p><h2>{t.projectsTitle}</h2></div>
          <div className="projects-grid">{t.projects.map((project, index) => <article className={`project-card project-card--${index + 1}`} key={project.title}><div className="project-card__image"><img src={project.image} alt="" /><span>{project.label}</span></div><div className="project-card__content"><p>0{index + 1}</p><h3>{project.title}</h3><span className="project-card__body">{project.body}</span><div className="tags">{project.tech.map((item) => <span key={item}>{item}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer"><Github size={17} />{t.projectLink}</a></div></article>)}</div>
          <div className="other-work"><h3>{t.otherWork}</h3><div>{t.otherProjects.map(([title, body], index) => <article key={title}><span>0{index + 4}</span><h4>{title}</h4><p>{body}</p></article>)}</div></div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading"><p className="section-kicker">{t.skillsKicker}</p><h2>{t.skillsTitle}</h2></div>
          <div className="skills-grid">{t.skillGroups.map((group, index) => { const Icon = skillIcons[index]; return <article className="skill-card" key={group.title}><div className="skill-card__icon"><Icon /></div><p>0{index + 1}</p><h3>{group.title}</h3><span>{group.body}</span><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>; })}</div>
        </section>

        <section className="contact-section"><div><p>{t.eyebrow}</p><h2>{t.closing}</h2><span>{t.closingBody}</span></div><a className="button button--light" href="mailto:farukdincoglu27@gmail.com"><Mail size={18} />farukdincoglu27@gmail.com</a></section>
      </main>

      <footer><div className="footer-brand"><span>ÖF</span><strong>Ömer Faruk Dinçoğlu</strong></div><p>© 2026 · {t.footer}</p><div><a href="https://github.com/farukdnc27" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/%C3%B6merfarukdincoglu" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="mailto:farukdincoglu27@gmail.com" aria-label="Email"><Mail /></a></div></footer>
    </div>
  );
}

export default App;
