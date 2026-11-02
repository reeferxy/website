(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!window.gsap || reducedMotion.matches) return;
  const atmosphere = gsap.timeline({ repeat: -1, yoyo: true });
  atmosphere.to('.atmosphere-violet', { opacity: .5, duration: 14, ease: 'sine.inOut' }, 0)
    .to('.atmosphere-blue', { opacity: .25, duration: 14, ease: 'sine.inOut' }, 0);
  reducedMotion.addEventListener('change', event => { if (event.matches) atmosphere.pause(); else atmosphere.play(); });
})();
