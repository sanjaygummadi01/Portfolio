import { useState, useEffect } from 'react';
import useActiveSection from '@/hooks/useActiveSection.js';

const PhoneIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'UI/UX', href: '#uiux', id: 'uiux' },
  { label: 'React Dev', href: '#react-dev', id: 'react-dev' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const sectionIds = navItems.map((item) => item.id);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="font-heading text-xl font-bold tracking-wider text-primary neon-text">SANJAY</a>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}>
              {item.label}
            </a>
          ))}
          <a href="tel:7815895795" className="ml-2 p-2 rounded-full text-primary hover:bg-primary/10 transition-colors duration-200" aria-label="Call Sanjay" title="Call: 7815895795">
            <PhoneIcon size={18} />
          </a>
        </div>

        <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      <div className={`lg:hidden absolute top-full left-0 right-0 glass-card transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`nav-link block py-2 ${activeSection === item.id ? 'nav-link-active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="tel:7815895795" className="nav-link flex items-center gap-2 py-2" onClick={() => setIsMobileMenuOpen(false)}>
            <PhoneIcon size={16} /> Call Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
