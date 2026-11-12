// Two small interactive demos, ported from the earlier build.
window.DEMOS = {
  /* TransfoRim: drag from road to rubble and the rim opens into spikes */
  morph: {
    id: 'mSvg',
    html: `<div class="k-demo"><div class="hd m"><b>Try it · drag to change the ground</b><span id="mRead">Road · spikes in</span></div>
      <svg id="mSvg" viewBox="0 0 800 340" aria-hidden="true">
        <path id="mGround" fill="none" stroke="#8A8A85" stroke-width="1.6"/>
        <g id="mWheel"><path id="mRim" fill="none" stroke="#fff" stroke-width="2"/><path id="mSpk" fill="none" stroke="var(--c)" stroke-width="2"/><circle cx="0" cy="0" r="16" fill="var(--c)"/></g>
        <path id="mDim" fill="none" stroke="var(--c)" stroke-width="1.4"/>
      </svg>
      <div class="k-ctl m"><span>Road</span><input type="range" id="mRange" min="0" max="100" value="0" aria-label="Ground, from road to rubble"><span>Rubble</span></div></div>`,
    run(reduce) {
      const $ = (id) => document.getElementById(id);
      const range = $('mRange'), rim = $('mRim'), spk = $('mSpk'), ground = $('mGround'), wheel = $('mWheel'), dim = $('mDim'), read = $('mRead');
      const R = 92, LOBES = 6, f = (n) => n.toFixed(1);
      let t = 0, target = 0, roll = 0, last = performance.now(), touched = false, vis = false;
      const gy = (x) => 280 - t * 26 * (Math.max(0, Math.sin(x / 38)) ** 2 + .5 * Math.max(0, Math.sin(x / 17 + 1)) ** 3);
      new IntersectionObserver(([e]) => { vis = e.isIntersecting; }).observe($('mSvg'));
      function draw(now) {
        const dt = Math.min(50, now - last); last = now;
        if (vis) {
          t += (target - t) * Math.min(1, dt / 160);
          if (!reduce) roll += dt * .0009 * (1 - t * .55);
          let d = '', s = '';
          for (let k = 0; k <= 180; k++) { const a = (k / 180) * Math.PI * 2, r = R * (1 - .16 * t) + t * 60 * Math.max(0, Math.cos(LOBES * a)) ** 6; d += (k ? 'L' : 'M') + f(r * Math.cos(a)) + ' ' + f(r * Math.sin(a)); }
          for (let k = 0; k < LOBES; k++) { const a = (k / LOBES) * Math.PI * 2, r = R * (1 - .16 * t) + t * 60; s += `M${f(16 * Math.cos(a))} ${f(16 * Math.sin(a))}L${f(r * Math.cos(a))} ${f(r * Math.sin(a))}`; }
          rim.setAttribute('d', d); spk.setAttribute('d', s);
          let g = ''; for (let x = 0; x <= 800; x += 8) g += (x ? 'L' : 'M') + x + ' ' + f(gy(x + roll * 200)); ground.setAttribute('d', g);
          const reach = R * (1 - .16 * t) + t * 60 * .85;
          wheel.setAttribute('transform', `translate(400 ${f(280 - reach - t * 8)}) rotate(${f(roll * 57.3)})`);
          const top = 280 - reach * 2 - t * 8; dim.setAttribute('d', `M560 280 H600 M560 ${f(top)} H600 M590 280 V${f(top)}`);
          read.textContent = `${t < .33 ? 'Road' : t < .66 ? 'Gravel' : 'Rubble'} · ${t < .05 ? 'spikes in' : 'spikes out'}`;
        }
        requestAnimationFrame(draw);
      }
      range.addEventListener('input', () => { touched = true; target = Number(range.value) / 100; });
      if (!reduce) { let dir = 1; const demo = setInterval(() => { if (touched) return clearInterval(demo); target = dir > 0 ? .85 : 0; range.value = String(target * 100); dir *= -1; }, 2600); }
      requestAnimationFrame(draw);
    },
  },

  /* NoBias in miniature: a few plain rules run in the browser. The real tool uses AI and 20 checks. */
  bias: {
    id: 'bq',
    html: `<div class="k-demo"><div class="hd m"><b>Try it · one question</b><span>5 of 20 checks · runs in your browser</span></div>
      <div class="k-bias"><div><label class="m" for="bq" style="color:#9A9A95">Your question</label>
        <textarea id="bq" rows="3" spellcheck="false">Don't you think the new app is much easier and faster to use?</textarea>
        <div class="samples"><button type="button" class="chip" data-q="Why don't you exercise more?">Try another</button><button type="button" class="chip" data-q="Can you tell me about the last time you booked a doctor's appointment?">A good one</button></div></div>
      <div class="out" aria-live="polite"><div class="score m"><span>Score</span><b id="bScore">–</b><i id="bVerdict"></i></div><ul id="bList"></ul><div class="fix m"><span>Rewrite</span><p id="bFix"></p></div></div></div></div>`,
    run() {
      const rules = [
        [/^\s*(don'?t|doesn'?t|isn'?t|aren'?t|wouldn'?t|shouldn'?t|won'?t)\s+you\b|wouldn'?t you agree|isn'?t it true|right\?\s*$/i, ['r', 'Leading: points to an answer']],
        [/\b(obviously|clearly|simply|just|much|so|really|terrible|amazing|great|awful|easier|better|worse|faster)\b/i, ['w', 'Loaded wording']],
        [/\b(and|or)\b[^?]*\?/i, ['w', 'Double-barrelled: two questions in one']],
        [/^\s*(do|does|did|is|are|was|were|would|will|can|could|have|has|should|don'?t|isn'?t)\b(?!\s+you\s+(tell|describe|walk|talk|explain))/i, ['w', 'Closed: invites yes or no']],
        [/\bwhy (don'?t|didn'?t|do|did|haven'?t)\s+you\b/i, ['r', 'Assumes a behaviour']],
      ];
      const q = document.getElementById('bq'), $ = (id) => document.getElementById(id);
      const rewrite = (s, hits) => {
        if (!hits.length) return 'Looks clear. Keep it.';
        if (/\bexercise\b/i.test(s)) return 'Walk me through a typical week. Where does movement fit, if at all?';
        let t = s.trim().replace(/^(don'?t|doesn'?t|isn'?t|aren'?t|wouldn'?t|why don'?t|why didn'?t)\s+you\s+(think\s+)?/i, '').replace(/\?$/, '').replace(/\b(much|really|so|just|simply|obviously|clearly)\s+/gi, '');
        const first = t.split(/\s+(and|or)\s+/i)[0];
        return `How would you describe ${first.replace(/^(the|a|an)\s+/i, 'the ').replace(/\s+(is|are|was)\s+.*$/i, '')}?`.replace(/\s+/g, ' ');
      };
      const run = () => {
        const s = q.value, hits = rules.filter(([re]) => re.test(s)).map(([, h]) => h);
        const score = Math.max(0, 5 - hits.reduce((a, h) => a + (h[0] === 'r' ? 1.4 : .7), 0));
        $('bScore').textContent = s.trim() ? score.toFixed(1) : '–';
        $('bVerdict').textContent = !s.trim() ? '' : score >= 4.5 ? 'Looks clear' : score >= 3 ? 'Review' : 'Needs work';
        $('bList').innerHTML = hits.length ? hits.map(([sv, n]) => `<li class="${sv}"><em>${sv === 'r' ? 'FIX REQUIRED' : 'REVIEW'}</em><span>${n}</span></li>`).join('') : '<li class="ok"><em>LOOKS CLEAR</em><span>No issues found by these checks</span></li>';
        $('bFix').textContent = s.trim() ? rewrite(s, hits) : '';
      };
      let tm = 0; q.addEventListener('input', () => { clearTimeout(tm); tm = setTimeout(run, 180); });
      document.querySelectorAll('.k-bias .chip').forEach((b) => b.addEventListener('click', () => { q.value = b.dataset.q; run(); }));
      run();
    },
  },
};
