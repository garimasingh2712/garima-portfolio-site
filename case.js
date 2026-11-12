// Builds a project page from window.CASES[slug] (cases.js) and the project list in data.js.
// Every page is the same run of spreads: cover, at a glance, then the project's own chapters,
// outcome and the next project. Each spread gets a chapter label, a page number and a chip in the strip.
(() => {
  const slug = document.body.dataset.s;
  const i = P.findIndex((p) => p.s === slug), p = P[i], k = CASES[slug];
  const nxt = P[(i + 1) % P.length], prv = P[(i - 1 + P.length) % P.length];
  document.documentElement.style.setProperty('--c', p.c);
  document.title = `${p.t} · Garima Singh`;
  const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const em = (s = '') => esc(s).replace(/\*(.+?)\*/g, '<em>$1</em>');
  const img = (src, alt = '', lazy = true) => `<img src="${src}" alt="${esc(alt)}"${lazy ? ' loading="lazy"' : ''}>`;
  const ratio = (r) => r ? `--r:${r};` : '';

  /* parts: the pieces a spread can be made of */
  const part = {
    call: (x) => `<div class="k-call ${x.flip ? 'flip' : ''}">
        <div class="k-pins">${img(x.img, x.alt)}${x.pins.map((q, n) => `<button class="k-pin" type="button" style="left:${q[0]}%;top:${q[1]}%" data-n="${n}" aria-label="${n + 1}: ${esc(q[2])}">${n + 1}</button>`).join('')}</div>
        <ol class="k-legend">${x.pins.map((q, n) => `<li data-n="${n}"><span class="n">${n + 1}</span><div><b>${esc(q[2])}</b><span>${esc(q[3] || '')}</span></div></li>`).join('')}</ol>
      </div>`,
    fig: (x) => `<figure class="k-fig">${DIAGRAMS[x.svg]()}${x.cap ? `<figcaption class="m">${esc(x.cap)}</figcaption>` : ''}</figure>`,
    notes: (x) => `<div class="k-notes" style="--n:${x.items.length}">${x.items.map(([b, s]) => `<div><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div>`,
    steps: (x) => `<div class="k-steps ${x.keep2 ? 'keep2' : ''}" style="--n:${x.n || x.items.length};${ratio(x.r)}">${x.items.map((s, n) => `<figure>
        <div class="ph ${x.contain || s.contain ? 'contain' : ''}">${s.img ? img(s.img, s.alt || s.b) : DIAGRAMS[s.svg]()}<span class="no m">${String(n + 1).padStart(2, '0')}</span></div>
        <figcaption><b>${esc(s.b)}</b>${esc(s.s || '')}</figcaption></figure>`).join('')}</div>`,
    cards: (x) => `<div class="k-cards ${x.items.length === 5 ? 'n5' : ''}" style="--n:${x.n || x.items.length};${ratio(x.r)}">${x.items.map((c) => `<article class="k-card">
        ${c.img ? `<div class="ph ${x.contain ? 'contain' : ''}"${c.pos ? ` style="--pos:${c.pos}"` : ''}>${img(c.img, c.alt || c.b)}</div>` : c.av ? `<span class="av">${esc(c.av)}</span>` : ''}
        <div class="tx">${c.tag ? `<span class="tag m">${esc(c.tag)}</span>` : ''}<b>${esc(c.b)}</b>${c.p ? `<p>${esc(c.p)}</p>` : ''}</div></article>`).join('')}</div>`,
    gal: (x) => `<div class="k-gal ${x.keep2 ? 'keep2' : ''}" style="--n:${x.n || x.items.length};${ratio(x.r)}">${x.items.map((g) => `<figure class="${g.wide ? 'wide' : ''}">
        <div class="ph ${x.contain ? 'contain' : ''}"${g.pos ? ` style="--pos:${g.pos}"` : ''}>${img(g.img, g.alt || g.cap)}</div>${g.cap ? `<figcaption class="m">${esc(g.cap)}</figcaption>` : ''}</figure>`).join('')}</div>`,
    sheet: (x) => `<div class="k-sheet m"><div class="views" style="--n:${x.views.length};${ratio(x.r)}">${x.views.map((v) => `<figure>${img(v.img, v.b)}<figcaption>${esc(v.cap || '')}<b>${esc(v.b)}</b></figcaption></figure>`).join('')}</div>
        <div class="k-tblock" style="--tn:${x.tb.length - 1}">${x.tb.map(([a, b]) => `<div>${esc(a)}<b>${esc(b)}</b></div>`).join('')}</div></div>`,
    cmp: (x) => `<div class="k-cmp">${x.head ? `<div class="r hd m"><span>${esc(x.head[0])}</span><span></span><span>${esc(x.head[1])}</span></div>` : ''}${x.rows.map(([a, b, t]) => `<div class="r"><span class="a">${esc(a)}</span><span class="ar">→</span><span class="b">${t ? `<i>${esc(t)}</i>` : ''}${esc(b)}</span></div>`).join('')}</div>`,
    tl: (x) => `<div class="k-tl" style="--n:${x.items.length}">${x.items.map(([a, b]) => `<div><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join('')}</div>`,
    sw: (x) => `<div class="k-sw" style="--n:${x.items.length}">${x.items.map(([n, c, lt]) => `<div class="${lt ? 'lt' : ''}" style="background:${c}"><b>${esc(n)}</b><span class="m">${c}</span></div>`).join('')}</div>`,
    list: (x) => `<ul class="k-list">${x.items.map(([a, b], n) => `<li><span class="m mute">${String.fromCharCode(65 + n)}</span><span>${a ? `<b>${esc(a)}.</b> ` : ''}${esc(b)}</span></li>`).join('')}</ul>`,
    demo: (x) => DEMOS[x.which].html,
    cols: (x) => `<div class="k-notes k-cols" style="--n:${x.items.length}">${x.items.map(([h, li]) => `<div><b>${esc(h)}</b><ul>${li.map((l) => `<li>${esc(l)}</li>`).join('')}</ul></div>`).join('')}</div>`,
    gap: () => '<div style="height:clamp(22px,3vw,40px)"></div>',
  };
  const parts = (arr = []) => arr.map((x) => part[x.t](x)).join('');

  /* spreads */
  let pg = 1; const chaps = [];
  const frame = (cls, lab, inner, extra = '') => {
    pg += 1; const id = `ch${pg}`; chaps.push([id, lab]);
    return `<section class="k-sp k-rv ${cls}" id="${id}"${extra}><div class="k-lab m"><span>${String(pg).padStart(2, '0')}.</span><span>${esc(lab)}</span></div><span class="k-pg m">P. ${String(pg).padStart(2, '0')}</span>${inner}</section>`;
  };
  const head = (x) => `${x.h ? `<h2>${em(x.h)}</h2>` : ''}${x.sub ? `<p class="k-sub">${esc(x.sub)}</p>` : '<div style="height:18px"></div>'}`;

  const spread = {
    state: (x) => frame('', x.lab, `<div class="k-in"><div class="k-state"><p class="k-big">${em(x.h)}</p>${part.list({ items: x.items })}${x.fig ? `<div class="k-fig-wrap" style="grid-column:1/-1">${parts(x.fig)}</div>` : ''}</div></div>`),
    sp: (x) => frame(x.dark ? 'k-dark' : x.tint ? 'k-tint' : '', x.lab, `<div class="k-in">${head(x)}${parts(x.parts)}</div>`),
    vid: (x) => frame('k-dark', x.lab, `<div class="k-in">${head(x)}<div class="k-vid ${x.portrait ? 'portrait' : ''}">
        <video src="${x.src}" poster="${x.poster}" controls muted playsinline preload="none" loop></video>
        <div>${(x.p || []).map((t) => `<p>${esc(t)}</p>`).join('')}${x.list ? part.list({ items: x.list }) : ''}${x.cap ? `<p class="m" style="color:#8A8A85">${esc(x.cap)}</p>` : ''}</div></div>
        ${x.imgs ? `<div class="k-row3">${x.imgs.map(([s, a]) => img(s, a)).join('')}</div>` : ''}</div>`),
    quote: (x) => frame('k-quote', x.lab || 'In one line', `<q>${esc(x.q)}</q>`),
  };

  const cover = () => `<section class="k-sp k-cover" id="ch1">
      <div class="k-lab m"><span>01.</span><span>${esc(k.ctx)}</span><span>· Project ${pad(i + 1)} of ${pad(P.length)}</span></div>
      <div class="txt"><h1 class="${p.t.length > 13 ? 'long' : ''}">${esc(p.t)}</h1><p class="one">${esc(k.one)}</p>
        <dl class="m">${k.facts.map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl></div>
      <div class="pic ${k.coverContain ? 'contain' : ''}" style="${k.coverBg ? `background:${k.coverBg};` : ''}${k.coverPos ? `--pos:${k.coverPos};` : ''}">${img(k.cover, k.coverAlt, false)}</div>
    </section>
    <section class="k-sp k-glance k-rv" id="glance">
      <div class="k-lab m"><span>At a glance</span></div>
      <div class="k-stats">${k.stats.map(([a, b]) => `<div><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join('')}</div>
      <ul class="k-tldr">${['Problem', 'Idea', 'Result'].map((t, n) => `<li><span class="m">${t}</span><span>${esc(k.tldr[n])}</span></li>`).join('')}</ul>
    </section>`;

  const outcome = () => {
    const o = k.out; pg += 1; chaps.push([`ch${pg}`, 'Outcome']);
    return `<section class="k-sp k-out k-rv" id="ch${pg}">
      <div class="txt"><div class="k-lab m" style="position:static;margin-bottom:24px"><span>${String(pg).padStart(2, '0')}.</span><span>Outcome</span></div>
        <p class="k-big">${em(o.h)}</p>
        ${o.chips ? `<div class="k-chips">${o.chips.map((c) => `<span>${esc(c)}</span>`).join('')}</div>` : ''}
        ${o.reflect ? `<div class="k-next-time"><span class="m mute">Next time</span><ul>${o.reflect.map((r) => `<li>${esc(r)}</li>`).join('')}</ul></div>` : ''}
        ${o.live ? `<a class="k-live" href="${o.live[0]}" target="_blank" rel="noopener">${esc(o.live[1])} ↗</a>` : ''}
        ${o.note ? `<p class="k-note m">${esc(o.note)}</p>` : ''}
        <p class="k-kit m">${esc(o.kit)}</p></div>
      <div class="pic ${o.contain ? 'contain' : ''}" style="${o.bg ? `background:${o.bg};` : ''}${o.pos ? `--pos:${o.pos};` : ''}">${img(o.img, o.alt)}</div>
    </section>`;
  };

  const body = k.blocks.map((x) => spread[x.t](x)).join('');
  const pn = (q, n, dir) => `<a class="k-pn-${dir}" href="${href(q)}" style="--nc:${q.c}" rel="${dir}"><span class="m mute">${dir === 'prev' ? '← Previous' : 'Next →'} · ${pad(n + 1)}</span><b>${esc(q.t)}</b></a>`;
  const html = cover() + body + outcome() + `<nav class="k-next" aria-label="More projects">${pn(prv, (i - 1 + P.length) % P.length, 'prev')}<a class="k-all m" href="work.html">All work</a>${pn(nxt, (i + 1) % P.length, 'next')}</nav>`;
  chaps.unshift(['ch1', 'Cover']);
  document.getElementById('case').innerHTML = `<div class="k-chap m"><a class="k-back" href="work.html" aria-label="Back to all work">← <span>All work</span></a><div class="k-toc" role="navigation" aria-label="Chapters">${chaps.map(([id, l]) => `<a href="#${id}">${esc(l)}</a>`).join('')}</div><span class="k-step"><a href="${href(prv)}" aria-label="Previous project: ${esc(prv.t)}" title="${esc(prv.t)}">‹</a><span>${pad(i + 1)}/${pad(P.length)}</span><a href="${href(nxt)}" aria-label="Next project: ${esc(nxt.t)}" title="${esc(nxt.t)}">›</a></span><i class="k-prog"></i></div>` + html;

  /* behaviour: reveal, chapter highlight, progress, pins, demos */
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('k-seen'); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll('.k-rv').forEach((el) => io.observe(el));
  const links = [...document.querySelectorAll('.k-toc a')], prog = document.querySelector('.k-prog');
  const secs = links.map((a) => document.querySelector(a.getAttribute('href')));
  const onScroll = () => {
    const y = scrollY + 140; let cur = 0; secs.forEach((s, n) => { if (s && s.offsetTop <= y) cur = n; });
    links.forEach((a, n) => a.classList.toggle('on', n === cur));
    prog.style.width = `${Math.min(100, (scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100)}%`;
  };
  let lastCur = -1;
  addEventListener('scroll', () => { onScroll(); const on = links.findIndex((a) => a.classList.contains('on')); if (on !== lastCur) { lastCur = on; links[on].scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' }); } }, { passive: true });
  onScroll();
  document.querySelectorAll('.k-call').forEach((c) => {
    const pins = [...c.querySelectorAll('.k-pin')], lis = [...c.querySelectorAll('.k-legend li')], leg = c.querySelector('.k-legend');
    const on = (n) => { leg.classList.toggle('dim', n >= 0); pins.forEach((x, j) => x.classList.toggle('on', j === n)); lis.forEach((x, j) => x.classList.toggle('on', j === n)); };
    [...pins, ...lis].forEach((x) => { const n = +x.dataset.n; x.addEventListener('mouseenter', () => on(n)); x.addEventListener('mouseleave', () => on(-1)); x.addEventListener('focus', () => on(n)); x.addEventListener('blur', () => on(-1)); x.addEventListener('click', () => on(n)); });
  });
  // left and right arrow keys move between projects, unless you're typing or using a slider
  addEventListener('keydown', (e) => {
    if (e.target.closest('input, textarea, select, [contenteditable], [role="slider"]') || e.altKey || e.metaKey || e.ctrlKey) return;
    if (e.key === 'ArrowLeft') location.href = href(prv); if (e.key === 'ArrowRight') location.href = href(nxt);
  });
  Object.values(DEMOS).forEach((d) => { if (document.getElementById(d.id)) d.run(reduce); });
})();
