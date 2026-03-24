import { useState } from 'react';
import {
  Palette, Gauge, Zap, Star, ChevronRight, ChevronDown,
  RotateCw, Pause, Play, Info
} from 'lucide-react';
import { BMW_COLORS } from '@/data/bmwModels';

export default function ConfigPanel({ model, selectedColor, onColorChange, isRotating, onRotateToggle }) {
  const [expandedSection, setExpandedSection] = useState('colors');
  const [selectedVariant, setSelectedVariant] = useState(0);

  if (!model) return null;

  const toggle = (section) =>
    setExpandedSection(expandedSection === section ? null : section);

  return (
    <div className="flex flex-col h-full overflow-y-auto no-scrollbar">
      {/* Model Header */}
      <div className="p-6 border-b border-white/8">
        <div className="flex items-start justify-between mb-1">
          <div>
            <div className="text-[10px] text-bmw-blue-light font-body tracking-[0.3em] uppercase mb-1">
              BMW {model.year}
            </div>
            <h2 className="font-display text-3xl font-800 text-white uppercase tracking-wide leading-none">
              {model.name}
            </h2>
            <p className="text-sm text-white/40 font-body mt-1.5 italic">{model.tagline}</p>
          </div>
          <button
            onClick={onRotateToggle}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
              isRotating
                ? 'bg-bmw-blue/20 border-bmw-blue text-bmw-blue-light'
                : 'border-white/15 text-white/40 hover:border-white/30'
            }`}
            title={isRotating ? 'Pause rotation' : 'Start rotation'}
          >
            {isRotating ? <Pause size={14} /> : <Play size={14} />}
          </button>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-2xl font-700 text-white tracking-wide">
            {model.priceLabel}
          </span>
          <span className="text-xs text-white/30 font-body">ex-showroom</span>
        </div>

        {/* Variant selector */}
        {model.variants && (
          <div className="mt-4 flex gap-2 flex-wrap">
            {model.variants.map((v, i) => (
              <button
                key={i}
                onClick={() => setSelectedVariant(i)}
                className={`px-3 py-1.5 text-xs font-body rounded-sm border transition-all duration-200 ${
                  selectedVariant === i
                    ? 'bg-bmw-blue/20 border-bmw-blue/60 text-bmw-blue-light'
                    : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
                }`}
              >
                {v.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-px bg-white/5 border-b border-white/8">
        {[
          { label: 'Power', value: model.specs.power, icon: Zap },
          { label: '0–100', value: model.specs.acceleration.split(' ')[0], icon: Gauge },
          { label: 'Top Speed', value: model.specs.topSpeed, icon: Star },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="bg-bmw-dark/80 p-4 text-center">
            <Icon size={14} className="text-bmw-blue-light mx-auto mb-1.5 opacity-70" />
            <div className="font-display text-sm font-700 text-white">{value}</div>
            <div className="text-[10px] text-white/30 font-body mt-0.5 uppercase tracking-wider">{label}</div>
          </div>
        ))}
      </div>

      {/* Accordion Sections */}
      <div className="flex-1">
        {/* Colors */}
        <AccordionSection
          id="colors"
          icon={<Palette size={15} />}
          label="Exterior Colour"
          value={selectedColor}
          expanded={expandedSection === 'colors'}
          onToggle={() => toggle('colors')}
        >
          <div className="grid grid-cols-2 gap-2">
            {model.colors.map((colorName) => {
              const hex = BMW_COLORS[colorName] || '#888888';
              const isSelected = selectedColor === colorName;
              return (
                <button
                  key={colorName}
                  onClick={() => onColorChange(colorName)}
                  className={`flex items-center gap-2.5 p-2 rounded-sm border transition-all duration-200 ${
                    isSelected
                      ? 'bg-white/8 border-bmw-blue/60'
                      : 'border-transparent hover:border-white/10 hover:bg-white/4'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex-shrink-0 border-2 transition-all duration-200 ${
                      isSelected ? 'border-bmw-blue shadow-[0_0_8px_rgba(28,105,212,0.5)]' : 'border-white/10'
                    }`}
                    style={{ backgroundColor: hex }}
                  />
                  <span className={`text-xs font-body leading-tight text-left ${isSelected ? 'text-white' : 'text-white/50'}`}>
                    {colorName}
                  </span>
                </button>
              );
            })}
          </div>
        </AccordionSection>

        {/* Specs */}
        <AccordionSection
          id="specs"
          icon={<Gauge size={15} />}
          label="Specifications"
          value={model.specs.engine}
          expanded={expandedSection === 'specs'}
          onToggle={() => toggle('specs')}
        >
          <div className="space-y-2">
            {Object.entries(model.specs).map(([key, val]) => (
              <div key={key} className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-xs text-white/40 font-body capitalize tracking-wide">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <span className="text-xs font-body text-white/80 text-right ml-4 max-w-[55%]">{val}</span>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* Features */}
        <AccordionSection
          id="features"
          icon={<Star size={15} />}
          label="Key Features"
          value={`${model.features.length} features`}
          expanded={expandedSection === 'features'}
          onToggle={() => toggle('features')}
        >
          <div className="space-y-2">
            {model.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-1 h-1 rounded-full bg-bmw-blue mt-1.5 flex-shrink-0" />
                <span className="text-xs text-white/60 font-body leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </AccordionSection>
      </div>

      {/* CTA Buttons */}
      <div className="p-6 border-t border-white/8 space-y-3">
        <button className="w-full py-3.5 bg-bmw-blue hover:bg-bmw-blue-dark text-white font-display font-600 text-sm tracking-[0.15em] uppercase rounded-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(28,105,212,0.4)]">
          Configure Your BMW
        </button>
        <div className="grid grid-cols-2 gap-2">
          <button className="py-2.5 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-body text-xs tracking-wide rounded-sm transition-all duration-200">
            Book Test Drive
          </button>
          <button className="py-2.5 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-body text-xs tracking-wide rounded-sm transition-all duration-200">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}

function AccordionSection({ id, icon, label, value, expanded, onToggle, children }) {
  return (
    <div className="border-b border-white/8">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-white/3 transition-colors duration-200"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-bmw-blue-light opacity-70">{icon}</span>
          <span className="text-sm font-body font-500 text-white/80 tracking-wide">{label}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/30 font-body truncate max-w-[100px]">{value}</span>
          <ChevronDown
            size={14}
            className={`text-white/30 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      {expanded && (
        <div className="px-6 pb-5 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}