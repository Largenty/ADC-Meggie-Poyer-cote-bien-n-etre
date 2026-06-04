/** Scroll-reveal action: adds .reveal + is-in when element enters viewport */
export function reveal(node, delay = 0) {
  node.classList.add('reveal');
  if (delay) node.setAttribute('data-delay', String(delay));

  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { node.classList.add('is-in'); return; }

  let active = true;

  function check() {
    if (!active) return;
    const r = node.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
      node.classList.add('is-in');
      cleanup();
    }
  }

  function cleanup() {
    active = false;
    io.unobserve(node);
    window.removeEventListener('scroll', check);
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { node.classList.add('is-in'); cleanup(); } });
  }, { threshold: 0.1 });

  io.observe(node);
  window.addEventListener('scroll', check, { passive: true });
  setTimeout(check, 80);

  return { destroy: cleanup };
}

/** Parallax action: translates element on scroll */
export function parallax(node, factor = 0.18) {
  if (typeof window === 'undefined') return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.2) {
          node.style.transform = `translate3d(0,${y * factor}px,0) scale(1.04)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  return { destroy() { window.removeEventListener('scroll', onScroll); } };
}
