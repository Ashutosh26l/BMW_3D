import { useRef, useEffect } from 'react';

/**
 * ScrollReveal — animates children into view when they enter the viewport.
 *
 * Usage:
 *   <ScrollReveal animation="fade-up" delay={100}>
 *     <div>I appear on scroll!</div>
 *   </ScrollReveal>
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  threshold = 0.15,
  className = '',
  once = true,
  stagger = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply initial hidden state
    el.style.opacity = '0';
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`;
    applyInitialTransform(el, animation);

    // Stagger children if requested
    if (stagger > 0) {
      const kids = el.children;
      for (let i = 0; i < kids.length; i++) {
        const child = kids[i];
        child.style.opacity = '0';
        child.style.transition = `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay + i * stagger}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay + i * stagger}ms`;
        applyInitialTransform(child, animation);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate3d(0,0,0) scale(1)';
          el.style.filter = 'blur(0)';

          if (stagger > 0) {
            const kids = el.children;
            for (let i = 0; i < kids.length; i++) {
              kids[i].style.opacity = '1';
              kids[i].style.transform = 'translate3d(0,0,0) scale(1)';
              kids[i].style.filter = 'blur(0)';
            }
          }

          if (once) observer.unobserve(el);
        } else if (!once) {
          el.style.opacity = '0';
          applyInitialTransform(el, animation);
          if (stagger > 0) {
            const kids = el.children;
            for (let i = 0; i < kids.length; i++) {
              kids[i].style.opacity = '0';
              applyInitialTransform(kids[i], animation);
            }
          }
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, duration, threshold, once, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function applyInitialTransform(el, animation) {
  switch (animation) {
    case 'fade-up':
      el.style.transform = 'translate3d(0, 60px, 0)';
      break;
    case 'fade-down':
      el.style.transform = 'translate3d(0, -40px, 0)';
      break;
    case 'fade-left':
      el.style.transform = 'translate3d(80px, 0, 0)';
      break;
    case 'fade-right':
      el.style.transform = 'translate3d(-80px, 0, 0)';
      break;
    case 'scale-in':
      el.style.transform = 'scale(0.85)';
      break;
    case 'blur-in':
      el.style.transform = 'translate3d(0, 30px, 0)';
      el.style.filter = 'blur(8px)';
      break;
    default:
      el.style.transform = 'translate3d(0, 40px, 0)';
  }
}
