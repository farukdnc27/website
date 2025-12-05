import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X, Globe } from 'lucide-react';
import { translations, Language } from './translations';
import Home from './pages/Home';
import logoImg from './assets/logo.png';

import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Future from './pages/Future';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const location = useLocation();

  const t = translations[lang];

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/skills', label: t.nav.skills },
    { path: '/projects', label: t.nav.projects },
    { path: '/future', label: t.nav.future },
  ];

  const toggleLanguage = () => {
    setLang(prev => prev === 'tr' ? 'en' : 'tr');
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 flex flex-col">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 fixed w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative bg-slate-900 rounded-full p-1">
                  <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain" />
                </div>
              </div>
              <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                Ömer Faruk
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`text-sm font-medium transition-colors hover:text-emerald-400 ${location.pathname === path ? 'text-emerald-400' : 'text-slate-400'
                    }`}
                >
                  {label}
                </Link>
              ))}

              <div className="h-6 w-px bg-slate-700 mx-4"></div>

              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 text-sm"
              >
                <Globe className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">{lang.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs"
              >
                <span className="font-bold">{lang.toUpperCase()}</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-emerald-400 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-800 bg-slate-900">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${location.pathname === path
                      ? 'text-emerald-400 bg-slate-800'
                      : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800'
                      }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home t={t} lang={lang} />} />
          <Route path="/skills" element={<Skills t={t} />} />
          <Route path="/projects" element={<Projects t={t} />} />
          <Route path="/future" element={<Future t={t} />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold text-white">Ömer Faruk</span>
              <p className="text-slate-500 mt-2">© 2024 {t.footer.rights}</p>
            </div>

            <div className="flex gap-6">
              <a href="https://github.com/farukdnc27" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/ömerfarukdincoglu" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:farukdincoglu27@gmail.com" className="text-slate-400 hover:text-red-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;