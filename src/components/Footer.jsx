import { Instagram, Youtube, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  'Models': ['3 Series', '5 Series', '7 Series', 'M3 / M4', 'X3 / X5 / X7', 'i4 / iX'],
  'Experience': ['Test Drive', 'BMW Events', 'BMW Museum', 'Driving Academy'],
  'Services': ['Finance & Leasing', 'Service & Parts', 'BMW ConnectedDrive', 'Roadside Assistance'],
  'Company': ['About BMW', 'Careers', 'Press', 'Sustainability'],
};

export default function Footer() {
  return (
    <footer className="bg-bmw-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <BMWLogoSmall />
              <div>
                <div className="font-display text-base font-700 tracking-[0.25em] text-white uppercase">BMW</div>
                <div className="text-[9px] text-white/30 tracking-[0.4em] uppercase">Showroom India</div>
              </div>
            </div>
            <p className="text-sm text-white/30 font-body leading-relaxed mb-6 max-w-xs">
              Experience the complete BMW lineup. Configure, explore, and find your 
              perfect driving machine.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 rounded-sm flex items-center justify-center text-white/40 hover:text-white hover:border-bmw-blue/50 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display text-xs font-700 tracking-[0.3em] uppercase text-white/40 mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white font-body transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight
                        size={10}
                        className="opacity-0 group-hover:opacity-50 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20 font-body tracking-wide">
            © 2024 BMW AG, Munich, Germany. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Settings', 'Imprint'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/20 hover:text-white/50 font-body transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function BMWLogoSmall() {
  return (
    <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="48" fill="#0A0A0A" stroke="#333" strokeWidth="3" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#444" strokeWidth="1.5" />
      <path d="M50 12 A38 38 0 0 1 88 50 L50 50 Z" fill="#1C69D4" opacity="0.8" />
      <path d="M50 88 A38 38 0 0 1 12 50 L50 50 Z" fill="#1C69D4" opacity="0.8" />
      <path d="M12 50 A38 38 0 0 1 50 12 L50 50 Z" fill="white" opacity="0.7" />
      <path d="M88 50 A38 38 0 0 1 50 88 L50 50 Z" fill="white" opacity="0.7" />
      <circle cx="50" cy="50" r="11" fill="#0A0A0A" />
      <line x1="50" y1="12" x2="50" y2="88" stroke="#444" strokeWidth="1.5" />
      <line x1="12" y1="50" x2="88" y2="50" stroke="#444" strokeWidth="1.5" />
    </svg>
  );
}