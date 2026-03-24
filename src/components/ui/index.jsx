// Lightweight shadcn-inspired UI components
// Replace with actual shadcn/ui when running `npx shadcn-ui@latest init`

import { forwardRef } from 'react';

// ─── BUTTON ──────────────────────────────────────────────────────────────────
export const Button = forwardRef(({ className = '', variant = 'default', size = 'default', children, ...props }, ref) => {
  const variants = {
    default: 'bg-bmw-blue hover:bg-bmw-blue-dark text-white',
    outline: 'border border-white/20 hover:border-white/40 text-white/70 hover:text-white bg-transparent',
    ghost: 'text-white/60 hover:text-white hover:bg-white/5',
    destructive: 'bg-red-600 hover:bg-red-700 text-white',
    secondary: 'bg-bmw-dark-3 hover:bg-bmw-dark-2 text-white border border-white/10',
  };
  const sizes = {
    sm: 'h-8 px-3 text-xs',
    default: 'h-10 px-5 text-sm',
    lg: 'h-12 px-8 text-base',
    icon: 'h-10 w-10',
  };

  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center gap-2 font-display font-600 tracking-wider uppercase rounded-sm transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = 'Button';

// ─── BADGE ───────────────────────────────────────────────────────────────────
export function Badge({ className = '', variant = 'default', children }) {
  const variants = {
    default: 'bg-bmw-blue/20 text-bmw-blue-light border border-bmw-blue/30',
    secondary: 'bg-white/10 text-white/60 border border-white/15',
    outline: 'border border-white/20 text-white/60',
    success: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    warning: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
    destructive: 'bg-red-500/20 text-red-400 border border-red-500/30',
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-display font-600 tracking-widest uppercase rounded-sm ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

// ─── CARD ────────────────────────────────────────────────────────────────────
export function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`rounded-lg border border-white/10 bg-bmw-dark-2/60 backdrop-blur-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = '', children }) {
  return <div className={`p-6 pb-0 ${className}`}>{children}</div>;
}

export function CardTitle({ className = '', children }) {
  return (
    <h3 className={`font-display text-xl font-700 text-white uppercase tracking-wide ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ className = '', children }) {
  return (
    <p className={`text-sm text-white/40 font-body mt-1 ${className}`}>{children}</p>
  );
}

export function CardContent({ className = '', children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ className = '', children }) {
  return (
    <div className={`p-6 pt-0 flex items-center ${className}`}>{children}</div>
  );
}

// ─── SEPARATOR ───────────────────────────────────────────────────────────────
export function Separator({ className = '', orientation = 'horizontal' }) {
  return (
    <div
      className={`bg-white/8 ${
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px'
      } ${className}`}
    />
  );
}

// ─── SKELETON ────────────────────────────────────────────────────────────────
export function Skeleton({ className = '' }) {
  return (
    <div className={`shimmer rounded-sm ${className}`} />
  );
}

// ─── DIALOG ──────────────────────────────────────────────────────────────────
export function Dialog({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg mx-4">
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ className = '', children }) {
  return (
    <div className={`bg-bmw-dark border border-white/10 rounded-lg shadow-2xl ${className}`}>
      {children}
    </div>
  );
}

// ─── TOOLTIP ─────────────────────────────────────────────────────────────────
export function Tooltip({ content, children }) {
  return (
    <div className="relative group inline-flex">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-bmw-dark-2 border border-white/10 rounded text-xs text-white/80 font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        {content}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-bmw-dark-2" />
      </div>
    </div>
  );
}

// ─── TABS ────────────────────────────────────────────────────────────────────
export function Tabs({ value, onValueChange, children, className = '' }) {
  return (
    <div className={className} data-tabs-value={value}>
      {typeof children === 'function' ? children({ value, onValueChange }) : children}
    </div>
  );
}

export function TabsList({ className = '', children }) {
  return (
    <div className={`inline-flex gap-0.5 p-1 bg-bmw-dark-3 rounded-sm border border-white/8 ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, currentValue, onValueChange, children, className = '' }) {
  const isActive = value === currentValue;
  return (
    <button
      onClick={() => onValueChange?.(value)}
      className={`px-4 py-1.5 text-xs font-display font-600 tracking-widest uppercase rounded-sm transition-all duration-200 ${
        isActive
          ? 'bg-bmw-blue text-white'
          : 'text-white/40 hover:text-white/70'
      } ${className}`}
    >
      {children}
    </button>
  );
}