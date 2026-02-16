(() => {
  // Avoid injecting multiple times
  if (document.getElementById('beluga-overlay-container')) return;

  const container = document.createElement('div');
  container.id = 'beluga-overlay-container';

  const whale = document.createElement('div');
  whale.id = 'beluga-overlay';
  container.appendChild(whale);
  document.documentElement.appendChild(container);

  const svgUrl = chrome.runtime.getURL('whale.svg');

  fetch(svgUrl)
    .then(r => r.text())
    .then(svgText => {
      whale.innerHTML = svgText;
      startSwim();
    })
    .catch(err => {
      console.warn('Beluga overlay failed to load whale.svg', err);
    });

  function startSwim() {
    const baseY = 8; // keep near the top (like “inside the blue bar”)
    const bobAmp = 8;
    const speed = 90; // px/sec

    let dir = 1;
    let x = -260;
    let last = performance.now();

    function frame(t) {
      const dt = (t - last) / 1000;
      last = t;

      const w = whale.getBoundingClientRect().width || 200;
      const maxX = window.innerWidth + w + 80;

      x += dir * speed * dt;
      if (x > maxX) {
        dir = -1;
      } else if (x < -w - 80) {
        dir = 1;
      }

      const bob = Math.sin(t / 900) * bobAmp;
      const flip = dir === 1 ? -1 : 1;

      whale.style.transform = `translate3d(${x}px, ${baseY + bob}px, 0) scaleX(${flip})`;

      requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }
})();
