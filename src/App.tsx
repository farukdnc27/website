import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Code2, Database, Laptop, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { href: 'about', label: 'About' },
    { href: 'skills', label: 'Skills' },
    { href: 'projects', label: 'Projects' },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Laptop className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">Ömer Faruk</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollToSection(href)}
                  className={`text-gray-700 hover:text-blue-600 transition-colors py-2 relative ${
                    activeSection === href ? 'text-blue-600' : ''
                  }`}
                >
                  {label}
                  {activeSection === href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map(({ href, label }) => (
                  <button
                    key={href}
                    onClick={() => scrollToSection(href)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 ${
                      activeSection === href ? 'text-blue-600 bg-gray-50' : ''
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-600 to-blue-700 text-white pt-16">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <Laptop className="w-16 h-16 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Ömer Faruk Dinçoğlu</h1>
            <p className="text-xl md:text-2xl text-blue-100">Computer Engineering Student</p>
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/farukdnc27" className="p-2 hover:text-blue-200 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/%C3%B6mer-faruk-dincoglu/" className="p-2 hover:text-blue-200 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:farukdincoglu27@gmail.com" className="p-2 hover:text-blue-200 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            <p>
              Third year Computer Engineering student at Çukurova University with a passion for software development. Experienced in full-stack development, hardware programming,
              and system architecture design.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Terminal className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Programming</h3>
              <p className="text-gray-600">C, C#, Assembly</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Code2 className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">MVC,.net,React</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <Database className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Databases</h3>
              <p className="text-gray-600">MSSQL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Smart Home System</h3>
                <p className="text-gray-600 mb-4">
                  IoT-based home automation system using Arduino and React
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=3540&auto=format&fit=crop"
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Construction Site Control Application </h3>
                <p className="text-gray-600 mb-4">
                  Instant monitoring of workers on the construction site and the status of the site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
   

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Ömer Faruk Dinçoğlu</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/farukdnc27" className="hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/%C3%B6mer-faruk-dincoglu/" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:farukdincoglu27@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;