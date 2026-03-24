import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { BMW_MODELS } from '@/data/bmwModels';

const SERIES_TABS = ['All', '3', '5', '7', 'M', 'X', 'i'];

export default function ModelSelector({ selectedModel, onSelect }) {
  const scrollRef = useRef(null);
  const [activeSeries, setActiveSeries] = useState('All');

  const filtered = activeSeries === 'All'
    ? BMW_MODELS
    : BMW_MODELS.filter(m => m.series === activeSeries);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Series Filter Tabs */}
      <div className="flex items-center gap-1 mb-6 px-6 overflow-x-auto no-scrollbar">
        <span className="text-xs text-white/30 uppercase tracking-widest mr-3 font-body whitespace-nowrap">
          Series
        </span>
        {SERIES_TABS.map((s) => (
          <button
            key={s}
            onClick={() => setActiveSeries(s)}
            className={`px-4 py-1.5 text-xs font-display font-600 tracking-widest uppercase transition-all duration-200 rounded-sm whitespace-nowrap ${
              activeSeries === s
                ? 'bg-bmw-blue text-white shadow-[0_0_12px_rgba(28,105,212,0.4)]'
                : 'text-white/40 hover:text-white/70 border border-white/10 hover:border-white/20'
            }`}
          >
            {s === 'All' ? 'All' : `${s} Series`}
          </button>
        ))}
      </div>

      {/* Scroll Controls */}
      <button
        onClick={() => scroll(-1)}
        className="absolute left-0 top-1/2 translate-y-4 z-10 w-9 h-9 rounded-full bg-bmw-dark-2/90 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-bmw-blue/30 transition-all"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => scroll(1)}
        className="absolute right-0 top-1/2 translate-y-4 z-10 w-9 h-9 rounded-full bg-bmw-dark-2/90 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-bmw-blue/30 transition-all"
      >
        <ChevronRight size={18} />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto no-scrollbar px-6 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {filtered.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
            isSelected={selectedModel?.id === model.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

function ModelCard({ model, isSelected, onSelect }) {
  const badgeStyles = {
    blue: 'bg-bmw-blue/20 text-bmw-blue-light border border-bmw-blue/30',
    red: 'bg-red-500/20 text-red-400 border border-red-500/30',
    gold: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    green: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    silver: 'bg-white/10 text-white/60 border border-white/20',
  };

  return (
    <button
      onClick={() => onSelect(model)}
      style={{ scrollSnapAlign: 'start' }}
      className={`flex-shrink-0 w-[220px] rounded-lg border transition-all duration-300 overflow-hidden group ${
        isSelected
          ? 'bg-bmw-blue/15 border-bmw-blue/60 shadow-[0_0_20px_rgba(28,105,212,0.2)]'
          : 'bg-bmw-dark-2/60 border-white/8 hover:border-white/20 hover:bg-bmw-dark-3/80'
      }`}
    >
      {/* Car silhouette area */}
      <div className="relative h-[90px] bg-gradient-to-b from-bmw-dark-3 to-bmw-dark-2 flex items-center justify-center overflow-hidden">
        <CarSilhouette modelType={model.modelType} isSelected={isSelected} />
        {isSelected && (
          <div className="absolute inset-0 bg-bmw-blue/5" />
        )}
        {/* Badge */}
        {model.badge && (
          <div className={`absolute top-2 right-2 px-2 py-0.5 text-[9px] font-display font-600 uppercase tracking-wider rounded-sm ${badgeStyles[model.badgeColor] || badgeStyles.silver}`}>
            {model.badge === 'Electric' && <Zap size={7} className="inline mr-0.5" />}
            {model.badge}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 text-left">
        <div className="flex items-baseline justify-between mb-1">
          <span className={`font-display text-base font-700 tracking-wide uppercase ${isSelected ? 'text-white' : 'text-white/80'}`}>
            BMW {model.name}
          </span>
          <span className={`text-[10px] font-mono ml-1 ${isSelected ? 'text-bmw-blue-light' : 'text-white/30'}`}>
            {model.year}
          </span>
        </div>
        <div className="text-[11px] text-white/40 font-body mb-2 truncate">{model.category}</div>
        <div className={`text-sm font-display font-600 tracking-wide ${isSelected ? 'text-bmw-blue-light' : 'text-white/60'}`}>
          {model.priceLabel}
        </div>
        <div className="mt-2 text-[10px] text-white/30 font-body">
          {model.specs.acceleration}
        </div>
      </div>

      {/* Selected indicator */}
      {isSelected && (
        <div className="h-0.5 bg-gradient-to-r from-transparent via-bmw-blue to-transparent" />
      )}
    </button>
  );
}

// Simple SVG car silhouette for each model type
function CarSilhouette({ modelType, isSelected }) {
  const color = isSelected ? '#1C69D4' : '#444';

  const profiles = {
    sedan: 'M 15,45 L 25,30 L 55,28 L 75,32 L 85,45 L 85,52 L 15,52 Z',
    'sedan-long': 'M 10,45 L 20,29 L 55,27 L 78,31 L 88,45 L 88,52 L 10,52 Z',
    'sedan-sport': 'M 15,46 L 28,32 L 57,28 L 76,33 L 85,46 L 85,52 L 15,52 Z',
    coupe: 'M 15,46 L 30,31 L 60,27 L 78,33 L 85,46 L 85,52 L 15,52 Z',
    'coupe-sport': 'M 14,46 L 28,30 L 60,26 L 78,32 L 86,46 L 86,52 L 14,52 Z',
    'suv-compact': 'M 12,43 L 18,28 L 55,25 L 78,28 L 87,43 L 87,52 L 12,52 Z',
    suv: 'M 10,42 L 16,26 L 55,23 L 80,26 L 89,42 L 89,52 L 10,52 Z',
    'suv-large': 'M 8,41 L 14,24 L 54,21 L 82,24 L 91,41 L 91,52 L 8,52 Z',
  };

  const path = profiles[modelType] || profiles.sedan;

  return (
    <svg viewBox="0 0 100 70" className="w-full h-full px-2 py-1" fill="none">
      <path d={path} fill={color} opacity={isSelected ? 0.6 : 0.3} />
      {/* Wheels */}
      <circle cx="28" cy="52" r="6" fill={isSelected ? '#1C69D4' : '#333'} opacity={0.8} />
      <circle cx="28" cy="52" r="3.5" fill={isSelected ? '#4A8FE8' : '#555'} opacity={0.6} />
      <circle cx="72" cy="52" r="6" fill={isSelected ? '#1C69D4' : '#333'} opacity={0.8} />
      <circle cx="72" cy="52" r="3.5" fill={isSelected ? '#4A8FE8' : '#555'} opacity={0.6} />
      {/* Window */}
      <path
        d={path.replace(/M.*?L/, 'M').split('L').slice(0, 3).join('L') + ' Z'}
        fill={isSelected ? '#88aacc' : '#2a2a2a'}
        opacity={0.4}
      />
    </svg>
  );
}