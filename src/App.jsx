import { useState, useRef, useCallback, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CarViewer3D from '@/components/CarViewer3D';
import ModelSelector from '@/components/ModelSelector';
import ConfigPanel from '@/components/ConfigPanel';
import Footer from '@/components/Footer';
import { BMW_MODELS } from '@/data/bmwModels';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

const DEFAULT_MODEL = BMW_MODELS[0]; // 3 Series

export default function App() {
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL);
  const [selectedColor, setSelectedColor] = useState(DEFAULT_MODEL.colors[0]);
  const [isRotating, setIsRotating] = useState(true);
  const [showroomVisible, setShowroomVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const showroomRef = useRef(null);

  const handleModelSelect = useCallback((model) => {
    setSelectedModel(model);
    setSelectedColor(model.colors[0]);
  }, []);

  const handleExplore = () => {
    if (!showroomVisible) {
      setShowroomVisible(true);
    }
    setTimeout(() => {
      showroomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    if (!showroomRef.current || showroomVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowroomVisible(true);
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(showroomRef.current);
    return () => observer.disconnect();
  }, [showroomVisible]);

  const cycleModel = (dir) => {
    const idx = BMW_MODELS.findIndex(m => m.id === selectedModel.id);
    const next = (idx + dir + BMW_MODELS.length) % BMW_MODELS.length;
    handleModelSelect(BMW_MODELS[next]);
  };

  return (
    <div className="min-h-screen bg-bmw-black text-white">
      <Navbar onNavigate={() => {}} />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <HeroSection onExplore={handleExplore} />

      {/* ─── SHOWROOM SECTION ─────────────────────────────────── */}
      <section
        ref={showroomRef}
        id="showroom"
        className="relative min-h-screen bg-bmw-dark"
      >
        {/* Section header */}
        <div className="px-6 pt-16 pb-6 max-w-[1400px] mx-auto">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[10px] text-bmw-blue-light font-body tracking-[0.4em] uppercase mb-2">
                Virtual Showroom
              </div>
              <h2 className="font-display text-4xl font-800 text-white uppercase tracking-wide">
                Explore the Lineup
              </h2>
              <p className="text-white/30 font-body text-sm mt-2">
                {BMW_MODELS.length} models available · Click any model to view in 3D · Drag to rotate
              </p>
            </div>
            {/* Model cycle on mobile */}
            <div className="flex gap-2 lg:hidden">
              <button
                onClick={() => cycleModel(-1)}
                className="w-9 h-9 border border-white/15 rounded-sm flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => cycleModel(1)}
                className="w-9 h-9 border border-white/15 rounded-sm flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Model Selector */}
        <div className="mb-4 max-w-[1400px] mx-auto">
          <ModelSelector
            selectedModel={selectedModel}
            onSelect={handleModelSelect}
          />
        </div>

        {/* Main viewer layout */}
        <div className="max-w-[1400px] mx-auto px-4 pb-12">
          <div className="flex gap-4 h-[600px] lg:h-[680px]">
            {/* 3D Viewer */}
            <div className="flex-1 relative rounded-xl overflow-hidden border border-white/8 bg-gradient-to-b from-bmw-dark-3 to-bmw-black">
              {/* Viewer overlay controls */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <div className="glass px-3 py-1.5 rounded-full flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-bmw-blue animate-pulse" />
                  <span className="text-[10px] text-white/60 font-body tracking-widest uppercase">
                    BMW {selectedModel.name} · {selectedColor}
                  </span>
                </div>
              </div>
              {showroomVisible && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="lg:hidden glass w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors"
                    title="Toggle config panel"
                  >
                    <ChevronRight size={14} className={`transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <button
                    onClick={() => setIsRotating(!isRotating)}
                    className={`glass w-8 h-8 rounded-full flex items-center justify-center transition-all ${isRotating ? 'text-bmw-blue-light' : 'text-white/40'}`}
                    title="Toggle auto-rotation"
                  >
                    <RotateCw size={13} className={isRotating ? 'animate-spin-slow' : ''} />
                  </button>
                </div>
              )}

              {/* Previous / Next model arrows */}
              {showroomVisible && (
                <>
                  <button
                    onClick={() => cycleModel(-1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all duration-200 hover:bg-bmw-blue/20"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => cycleModel(1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all duration-200 hover:bg-bmw-blue/20"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              {/* 3D Canvas */}
              {showroomVisible ? (
                <CarViewer3D
                  key={selectedModel.id}
                  model={selectedModel}
                  selectedColor={selectedColor}
                  isRotating={isRotating}
                />
              ) : (
                <button
                  onClick={handleExplore}
                  className="w-full h-full flex flex-col items-center justify-center gap-4 text-white/70 hover:text-white transition-colors bg-gradient-to-b from-bmw-dark-3 to-bmw-black"
                >
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center">
                    <RotateCw size={18} />
                  </div>
                  <span className="font-display text-sm tracking-[0.2em] uppercase">
                    Load 3D Showroom
                  </span>
                  <span className="text-xs font-body text-white/40">
                    Optimised for smoother first load
                  </span>
                </button>
              )}
            </div>

            {/* Config sidebar */}
            <div
              className={`transition-all duration-300 overflow-hidden rounded-xl border border-white/8 bg-bmw-dark ${
                sidebarOpen ? 'w-[340px] opacity-100' : 'w-0 opacity-0'
              } hidden lg:block`}
            >
              <ConfigPanel
                model={selectedModel}
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
                isRotating={isRotating}
                onRotateToggle={() => setIsRotating(!isRotating)}
              />
            </div>
          </div>

          {/* Mobile config panel (below viewer) */}
          <div className="lg:hidden mt-4 rounded-xl border border-white/8 bg-bmw-dark overflow-hidden max-h-[500px]">
            <ConfigPanel
              model={selectedModel}
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
              isRotating={isRotating}
              onRotateToggle={() => setIsRotating(!isRotating)}
            />
          </div>
        </div>
      </section>

      {/* ─── ALL MODELS GRID ──────────────────────────────────── */}
      <section id="all-models" className="bg-bmw-black py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12">
            <div className="text-[10px] text-bmw-blue-light font-body tracking-[0.4em] uppercase mb-3">
              Complete Range
            </div>
            <h2 className="font-display text-4xl font-800 text-white uppercase tracking-wide">
              All BMW Models
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BMW_MODELS.map((model) => (
              <AllModelCard
                key={model.id}
                model={model}
                isSelected={selectedModel.id === model.id}
                onSelect={() => {
                  handleModelSelect(model);
                  setShowroomVisible(true);
                  showroomRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES SECTION ─────────────────────────────────── */}
      <WhyBMWSection />

      {/* ─── CTA SECTION ──────────────────────────────────────── */}
      <CTASection />

      <Footer />
    </div>
  );
}

// ─── ALL MODELS CARD ──────────────────────────────────────────────────────────
function AllModelCard({ model, isSelected, onSelect }) {
  const badgeColors = {
    blue: 'bg-bmw-blue/20 text-bmw-blue-light border-bmw-blue/30',
    red: 'bg-red-500/20 text-red-400 border-red-500/30',
    gold: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    green: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    silver: 'bg-white/10 text-white/50 border-white/20',
  };

  return (
    <div
      className={`group relative rounded-lg border overflow-hidden transition-all duration-300 cursor-pointer ${
        isSelected
          ? 'border-bmw-blue/60 bg-bmw-blue/8 shadow-[0_0_24px_rgba(28,105,212,0.15)]'
          : 'border-white/8 bg-bmw-dark-2/50 hover:border-white/20 hover:bg-bmw-dark-2'
      }`}
      onClick={onSelect}
    >
      {/* Top stripe */}
      <div className={`h-0.5 w-full transition-all duration-300 ${isSelected ? 'bg-bmw-blue' : 'bg-transparent group-hover:bg-white/10'}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            {model.badge && (
              <div className={`inline-flex px-2 py-0.5 text-[9px] font-display font-600 uppercase tracking-widest rounded-sm border mb-2 ${badgeColors[model.badgeColor] || badgeColors.silver}`}>
                {model.badge}
              </div>
            )}
            <h3 className="font-display text-xl font-700 text-white uppercase tracking-wide">
              BMW {model.name}
            </h3>
            <p className="text-xs text-white/30 font-body mt-0.5">{model.category}</p>
          </div>
          <div className="text-right">
            <div className="font-display text-lg font-600 text-white">{model.priceLabel}</div>
            <div className="text-[10px] text-white/25 font-body">onwards</div>
          </div>
        </div>

        {/* Specs row */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { label: 'Power', val: model.specs.power },
            { label: '0–100', val: model.specs.acceleration.split(' ')[0] },
            { label: 'Drive', val: model.specs.driveType },
          ].map(({ label, val }) => (
            <div key={label} className="text-center p-2 bg-white/3 rounded-sm border border-white/5">
              <div className="text-xs font-display font-600 text-white/80">{val}</div>
              <div className="text-[9px] text-white/30 font-body mt-0.5 uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-xs text-white/30 font-body italic mb-4">{model.tagline}</p>

        {/* CTA */}
        <button
          className={`w-full py-2.5 text-xs font-display font-600 tracking-[0.15em] uppercase rounded-sm transition-all duration-200 ${
            isSelected
              ? 'bg-bmw-blue text-white'
              : 'border border-white/15 text-white/50 hover:border-bmw-blue/50 hover:text-bmw-blue-light hover:bg-bmw-blue/8'
          }`}
        >
          {isSelected ? 'Currently Viewing ✓' : 'View in 3D'}
        </button>
      </div>
    </div>
  );
}

// ─── WHY BMW SECTION ──────────────────────────────────────────────────────────
function WhyBMWSection() {
  const features = [
    {
      number: '01',
      title: 'M TwinPower Turbo',
      desc: 'Advanced engine technology delivering extraordinary performance with remarkable efficiency.',
    },
    {
      number: '02',
      title: 'xDrive AWD',
      desc: 'Intelligent all-wheel drive that distributes power perfectly for maximum traction in any condition.',
    },
    {
      number: '03',
      title: 'BMW Curved Display',
      desc: 'Two seamlessly integrated screens creating an immersive digital cockpit experience.',
    },
    {
      number: '04',
      title: 'Driving Modes',
      desc: 'COMFORT, SPORT, SPORT+ and ECO PRO modes that transform the character of your BMW.',
    },
    {
      number: '05',
      title: 'Adaptive Suspension',
      desc: 'Electronically controlled dampers that read the road and adapt in milliseconds.',
    },
    {
      number: '06',
      title: 'ConnectedDrive',
      desc: 'Intelligent connectivity keeping you informed, entertained, and secure at all times.',
    },
  ];

  return (
    <section className="py-24 bg-bmw-dark border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="text-[10px] text-bmw-blue-light font-body tracking-[0.4em] uppercase mb-3">
              Engineering Excellence
            </div>
            <h2 className="font-display text-5xl font-800 text-white uppercase tracking-wide leading-tight">
              Built to <br />
              <span className="text-gradient-blue">Perfection</span>
            </h2>
          </div>
          <p className="text-white/40 font-body text-base leading-relaxed">
            Every BMW is engineered with an uncompromising commitment to performance, 
            precision, and innovation. From the iconic kidney grille to the latest 
            electric powertrains, BMW continues to define what driving pleasure means.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.number}
              className="group p-6 border border-white/8 rounded-lg hover:border-bmw-blue/30 hover:bg-bmw-blue/5 transition-all duration-300"
            >
              <div className="font-mono text-xs text-bmw-blue/40 mb-3 tracking-widest">{f.number}</div>
              <h3 className="font-display text-lg font-700 text-white uppercase tracking-wide mb-2 group-hover:text-bmw-blue-light transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-white/40 font-body leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA SECTION ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-24 bg-bmw-black relative overflow-hidden">
      {/* BG effect */}
      <div className="absolute inset-0 bg-gradient-radial from-bmw-blue/8 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bmw-blue/40 to-transparent" />

      <div className="max-w-2xl mx-auto text-center px-6 relative z-10">
        <div className="text-[10px] text-bmw-blue-light font-body tracking-[0.4em] uppercase mb-4">
          Begin Your Journey
        </div>
        <h2 className="font-display text-5xl font-800 text-white uppercase tracking-wide leading-tight mb-6">
          Ready to Drive?
        </h2>
        <p className="text-white/40 font-body text-base leading-relaxed mb-10">
          Book a personalised test drive experience at your nearest BMW dealership. 
          Feel the ultimate driving machine for yourself.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="px-8 py-4 bg-bmw-blue hover:bg-bmw-blue-dark text-white font-display font-600 text-sm tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(28,105,212,0.5)]">
            Book Test Drive
          </button>
          <button className="px-8 py-4 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-display font-500 text-sm tracking-[0.2em] uppercase rounded-sm transition-all duration-300">
            Find Dealer
          </button>
        </div>
      </div>
    </section>
  );
}
