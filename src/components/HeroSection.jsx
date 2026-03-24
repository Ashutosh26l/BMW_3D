import { ArrowDown, Play } from 'lucide-react';

export default function HeroSection({ onExplore }) {
  const visible = true;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bmw-black">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(28,105,212,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28,105,212,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-bmw-blue/8 via-transparent to-transparent" />

      {/* Horizontal lines (speed streaks) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[15, 35, 55, 72, 85].map((top, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-bmw-blue/20 to-transparent"
            style={{
              top: `${top}%`,
              left: 0,
              right: 0,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 border border-bmw-blue/30 rounded-full text-bmw-blue-light text-xs font-body tracking-[0.3em] uppercase mb-8"
          style={{ transitionDelay: '200ms' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-bmw-blue animate-pulse" />
          BMW Showroom India — 2024
        </div>

        {/* Headline */}
        <h1
          className="font-display text-white mb-6 leading-none"
          style={{ transitionDelay: '300ms' }}
        >
          <span className="block text-[clamp(3.5rem,10vw,8rem)] font-800 tracking-[-0.02em] text-gradient">
            The Ultimate
          </span>
          <span className="block text-[clamp(3.5rem,10vw,8rem)] font-800 tracking-[-0.02em] text-gradient-blue">
            Driving Machine
          </span>
        </h1>

        {/* Sub */}
        <p
          className="text-white/40 text-lg font-body font-300 max-w-xl mx-auto leading-relaxed mb-12"
          style={{ transitionDelay: '400ms' }}
        >
          Experience every BMW model in stunning 3D. Configure your perfect drive, 
          explore specs, and begin your journey.
        </p>

        {/* CTAs */}
        <div
          className="flex items-center justify-center gap-4 flex-wrap"
          style={{ transitionDelay: '500ms' }}
        >
          <button
            onClick={onExplore}
            className="group px-8 py-4 bg-bmw-blue hover:bg-bmw-blue-dark text-white font-display font-600 text-sm tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(28,105,212,0.5)] flex items-center gap-3"
          >
            Explore Models
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-200" />
          </button>
          <button className="group px-8 py-4 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-display font-500 text-sm tracking-[0.2em] uppercase rounded-sm transition-all duration-300 flex items-center gap-3">
            <Play size={14} fill="currentColor" />
            Watch Film
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className={`absolute bottom-20 left-0 right-0 flex justify-center gap-12 sm:gap-20 transition-all duration-1000 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        {[
          { label: 'BMW Models', value: '9+' },
          { label: 'Years of Excellence', value: '107' },
          { label: 'Happy Owners', value: '500K+' },
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="font-display text-2xl font-700 text-white tracking-wide">{value}</div>
            <div className="text-[10px] text-white/30 font-body tracking-[0.25em] uppercase mt-1">{label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] text-white font-body tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </div>
  );
}
