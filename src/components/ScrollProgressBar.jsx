/**
 * ScrollProgressBar — a thin glowing BMW-blue bar on the right edge
 * that tracks progress through the 3D reveal section.
 */
export default function ScrollProgressBar({ progress = 0, visible = true }) {
  if (!visible) return null;

  const height = `${(progress * 100).toFixed(1)}%`;
  const opacity = progress > 0.98 ? Math.max(0, 1 - (progress - 0.98) * 50) : 1;

  return (
    <div
      className="fixed top-0 right-0 w-[3px] h-full z-50 pointer-events-none"
      style={{ opacity }}
    >
      {/* Track */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Fill */}
      <div
        className="absolute top-0 left-0 w-full transition-none"
        style={{
          height,
          background: 'linear-gradient(180deg, #4A8FE8 0%, #1C69D4 60%, #0047CC 100%)',
          boxShadow: '0 0 12px rgba(28,105,212,0.6), 0 0 4px rgba(28,105,212,0.9)',
          borderRadius: '0 0 2px 2px',
        }}
      />

      {/* Glow dot at bottom of fill */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
        style={{
          top: height,
          background: '#4A8FE8',
          boxShadow: '0 0 10px rgba(74,143,232,0.8)',
          transform: 'translate(-50%, -50%)',
          opacity: progress > 0.01 && progress < 0.98 ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      />
    </div>
  );
}
