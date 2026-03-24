import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Models', sub: ['3 Series', '5 Series', '7 Series', 'M Series', 'X Series', 'i Series'] },
  { label: 'Configure', sub: null },
  { label: 'Finance', sub: null },
  { label: 'Experience', sub: null },
  { label: 'About BMW', sub: null },
];

export default function Navbar({ activeSection, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bmw-black/90 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* BMW Logo */}
        <button
          onClick={() => onNavigate?.('home')}
          className="flex items-center gap-3 group"
        >
          <BMWLogo />
          <div className="hidden sm:block">
            <div className="font-display text-lg font-700 tracking-[0.2em] text-white uppercase">
              BMW
            </div>
            <div className="text-[9px] text-bmw-silver/50 tracking-[0.35em] uppercase -mt-0.5">
              Showroom
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setHovered(link.label)}
              onMouseLeave={() => setHovered(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-body font-500 text-white/70 hover:text-white transition-colors duration-200 tracking-wide">
                {link.label}
                {link.sub && (
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${hovered === link.label ? 'rotate-180' : ''}`}
                  />
                )}
              </button>

              {link.sub && hovered === link.label && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-bmw-dark/95 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden shadow-2xl animate-fade-in">
                  {link.sub.map((item) => (
                    <button
                      key={item}
                      className="w-full text-left px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-bmw-blue/20 transition-all duration-150 font-body tracking-wide"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors">
            <Search size={16} />
          </button>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors">
            <Phone size={16} />
            <span className="font-body tracking-wide">Contact</span>
          </button>
          <button className="px-5 py-2.5 bg-bmw-blue hover:bg-bmw-blue-dark text-white text-sm font-body font-500 rounded-sm tracking-wider transition-all duration-200 hover:shadow-[0_0_20px_rgba(28,105,212,0.4)] hidden md:block">
            Book Test Drive
          </button>
          <button
            className="lg:hidden p-2 text-white/70"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-bmw-dark/98 backdrop-blur-xl border-t border-white/5 animate-slide-up">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="w-full text-left px-6 py-4 text-base text-white/70 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 font-body tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <div className="p-6">
            <button className="w-full py-3 bg-bmw-blue text-white font-body font-500 tracking-wider rounded-sm">
              Book Test Drive
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function BMWLogo({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#0A0A0A" stroke="#C0C0C0" strokeWidth="3" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#C0C0C0" strokeWidth="2" />
      {/* BMW Quadrants */}
      <path d="M50 12 A38 38 0 0 1 88 50 L50 50 Z" fill="#1C69D4" />
      <path d="M50 88 A38 38 0 0 1 12 50 L50 50 Z" fill="#1C69D4" />
      <path d="M12 50 A38 38 0 0 1 50 12 L50 50 Z" fill="white" />
      <path d="M88 50 A38 38 0 0 1 50 88 L50 50 Z" fill="white" />
      {/* Inner circle */}
      <circle cx="50" cy="50" r="12" fill="#0A0A0A" />
      {/* Dividers */}
      <line x1="50" y1="12" x2="50" y2="88" stroke="#C0C0C0" strokeWidth="2" />
      <line x1="12" y1="50" x2="88" y2="50" stroke="#C0C0C0" strokeWidth="2" />
    </svg>
  );
}