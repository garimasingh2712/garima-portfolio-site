// The radio from the original site: NTS live, toggled from the top bar or the dial.
// Remembers whether it was playing as you move between pages.
(() => {
  const SRC = 'https://stream-relay-geo.ntslive.net/stream?client=direct';
  const audio = new Audio(); audio.preload = 'none';
  const btns = () => document.querySelectorAll('[data-radio]');
  const paint = (on) => btns().forEach((b) => { b.setAttribute('aria-pressed', String(on)); b.classList.toggle('on', on); const l = b.querySelector('.rl'); if (l) l.textContent = on ? 'Pause radio' : 'Play radio'; });
  const play = () => { if (!audio.src) audio.src = SRC; audio.play().then(() => paint(true)).catch(() => { paint(false); flag(false); }); };
  const flag = (v) => { try { localStorage.setItem('gs_radio_playing', v ? '1' : '0'); } catch (e) {} };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-radio]'); if (!b) return;
    e.preventDefault();
    if (audio.paused) { flag(true); play(); } else { audio.pause(); flag(false); paint(false); }
  });
  let want = false; try { want = localStorage.getItem('gs_radio_playing') === '1'; } catch (e) {}
  if (want) play(); else paint(false);
})();
