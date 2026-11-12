// Drawn diagrams for the project pages. Each returns an inline SVG.
// Ink lines for structure, the project colour (class c) for the thing that matters.
// Lines with class "draw" draw themselves in when the spread scrolls into view.
(() => {
  const f = (n) => Math.round(n * 10) / 10;
  const S = (w, h, body, label) => `<svg class="dg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${body}</svg>`;
  const L = (d, c = '') => `<path class="l ${c}" d="${d}"${c.includes('draw') ? ' pathLength="1"' : ''}/>`;
  const T = (x, y, t, c = '', a = 'start') => `<text class="t ${c}" x="${x}" y="${y}" text-anchor="${a}">${t}</text>`;
  const H = (x, y, t, c = '', a = 'start') => `<text class="h ${c}" x="${x}" y="${y}" text-anchor="${a}">${t}</text>`;
  const B = (x, y, t, c = '', a = 'start') => `<text class="b ${c}" x="${x}" y="${y}" text-anchor="${a}">${t}</text>`;
  const C = (cx, cy, r, c = 'l') => `<circle class="${c}" cx="${f(cx)}" cy="${f(cy)}" r="${r}"/>`;
  const R = (x, y, w, h, rx = 0, c = 'l') => `<rect class="${c}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}"/>`;
  // arrow from (x1,y1) to (x2,y2) with an open head
  const A = (x1, y1, x2, y2, c = 'c') => {
    const a = Math.atan2(y2 - y1, x2 - x1), k = 9;
    return L(`M${x1} ${y1} L${x2} ${y2}`, c) + L(`M${f(x2 - k * Math.cos(a - .45))} ${f(y2 - k * Math.sin(a - .45))} L${x2} ${y2} L${f(x2 - k * Math.cos(a + .45))} ${f(y2 - k * Math.sin(a + .45))}`, c);
  };
  // dimension line with end ticks
  const DIM = (x1, y1, x2, y2) => {
    const a = Math.atan2(y2 - y1, x2 - x1) + Math.PI / 2, k = 6, dx = f(k * Math.cos(a)), dy = f(k * Math.sin(a));
    return L(`M${x1} ${y1} L${x2} ${y2} M${x1 - dx} ${y1 - dy} L${x1 + dx} ${y1 + dy} M${x2 - dx} ${y2 - dy} L${x2 + dx} ${y2 + dy}`, 'c th');
  };
  const box = (x, y, t, c = '', w) => { w = w || t.length * 7.6 + 28; return R(x, y, w, 40, 8, c === 'c' ? 'f c' : 'l') + B(x + w / 2, y + 25, t, c === 'c' ? 'w' : '', 'middle'); };

  window.DIAGRAMS = {
    /* Nexorade: plan of a reciprocal frame, and the joint where two members meet */
    nexus() {
      // pinwheel: member i runs along one edge of a small central polygon and out past it.
      // Its inner end rests on member i-1, which passes through the same corner.
      const n = 5, cx = 215, cy = 235, r = 50, ext = 135;
      const V = [...Array(n)].map((_, i) => { const a = -Math.PI / 2 + (i / n) * Math.PI * 2; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
      let plan = C(cx, cy, 24, 'l g ds');
      V.forEach((v, i) => {
        const w = V[(i + 1) % n], dx = w[0] - v[0], dy = w[1] - v[1], len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len;
        const a = [v[0] - ux * 14, v[1] - uy * 14], b = [w[0] + ux * ext, w[1] + uy * ext];
        plan += L(`M${f(a[0])} ${f(a[1])} L${f(b[0])} ${f(b[1])}`, i === 0 ? 'c bd draw' : 'bd draw');
      });
      V.forEach((v) => { plan += C(v[0], v[1], 5, 'f c'); });
      plan += T(cx, cy + 4, 'NO HUB', 'k', 'middle').replace('class="t k"', 'class="t k" style="font-size:10px"') + T(20, 26, 'PLAN · FIVE MEMBERS', 'k');
      // the joint, in elevation
      const x0 = 500, y = 290;
      let j = T(x0, 26, 'ELEVATION · WHERE TWO MEMBERS MEET', 'k');
      j += R(x0, y - 20, 300, 40, 20, 'l bd') + C(720, y - 40, 20, 'f s') + C(720, y - 40, 20, 'l c bd');
      j += L(`M${x0 + 10} ${y} H${x0 + 290}`, 'g ds th') + L(`M690 ${y - 40} H880`, 'g ds th');
      j += DIM(860, y - 40, 860, y) + T(872, y - 14, 'e', 'c');
      j += DIM(700, y - 80, 740, y - 80) + T(720, y - 90, 'd', 'c', 'middle');
      j += DIM(720, y + 44, 800, y + 44) + T(760, y + 66, 'L', 'c', 'middle');
      j += T(x0, 130, 'MEMBER B RESTS ON MEMBER A', 'k') + L(`M${x0 + 160} 138 L700 ${y - 54}`, 'th');
      j += T(x0, 400, 'e  eccentricity: offset between the two axes', '') + T(x0, 420, 'd  member diameter      L  engagement length', '');
      return S(900, 440, plan + j, 'A reciprocal frame of five members, each resting on the next with no central hub, and the joint where two members meet');
    },

    /* Sound Objects: the horn makes a beam; the Olive is a Helmholtz resonator */
    sound() {
      let s = T(20, 24, 'THE MEGAPHONE', 'k');
      // bare speaker
      s += R(60, 70, 90, 46, 6, 'l') + C(105, 93, 14, 'l th');
      for (let k = 1; k <= 4; k++) s += L(`M${105 - 40 * k} ${120 + 22 * k} Q105 ${150 + 34 * k} ${105 + 40 * k} ${120 + 22 * k}`, 'g');
      s += T(105, 330, 'BARE SPEAKER', '', 'middle') + T(105, 348, 'SOUND SPREADS', '', 'middle');
      // with horn
      s += R(255, 70, 90, 46, 6, 'l') + C(300, 93, 14, 'l th');
      s += L('M275 116 L232 250 M325 116 L368 250 M288 116 L270 250 M312 116 L330 250', 'draw') + L('M232 250 H368', 'th');
      for (let k = 1; k <= 3; k++) s += L(`M${262 - 4 * k} ${262 + 20 * k} Q300 ${276 + 24 * k} ${338 + 4 * k} ${262 + 20 * k}`, 'c bd');
      s += T(300, 348, 'WITH THE MEGAPHONE', 'c', 'middle') + T(300, 366, 'A BEAM, NOT A CLOUD', 'c', 'middle');
      s += L('M370 180 L392 180', 'th') + T(398, 176, '8 PLANES', 'k') + T(398, 192, '135° APART', 'k');
      // olive
      const ox = 620, oy = 240;
      s += T(480, 24, 'THE OLIVE · HELMHOLTZ RESONATOR', 'k');
      s += `<path class="f s" d="M${ox - 20} ${oy - 108} A110 110 0 1 0 ${ox + 20} ${oy - 108} Z"/>`;
      s += L(`M${ox - 20} ${oy - 108} A110 110 0 1 0 ${ox + 20} ${oy - 108}`, 'bd') + L(`M${ox - 20} ${oy - 108} V${oy - 150} M${ox + 20} ${oy - 108} V${oy - 150}`, 'bd');
      s += R(ox - 16, oy - 146, 32, 30, 3, 'f c');
      // the spring
      let z = `M${ox} ${oy - 100}`; for (let k = 0; k < 8; k++) z += ` L${ox + (k % 2 ? -18 : 18)} ${oy - 88 + k * 20}`; z += ` L${ox} ${oy + 76}`;
      s += L(z, 'c');
      s += A(ox, oy - 184, ox, oy - 158) + L(`M${ox - 30} ${oy - 192} q10 -10 20 0 t20 0 t20 0`, 'c');
      s += L(`M${ox + 22} ${oy - 132} L${ox + 70} ${oy - 132}`, 'th') + T(ox + 76, oy - 136, 'NECK', 'k') + T(ox + 76, oy - 120, 'AIR MOVES AS A MASS');
      s += L(`M${ox + 20} ${oy + 10} L${ox + 120} ${oy + 10}`, 'th') + T(ox + 126, oy + 6, 'CAVITY', 'k') + T(ox + 126, oy + 22, 'AIR SPRINGS BACK');
      s += T(480, 390, 'TUNED TO A LOW NOTE: IT HOLDS IT AND SMOOTHS IT', 'c');
      return S(900, 400, s, 'Left: a bare speaker spreads sound while the Megaphone focuses it into a beam. Right: the Olive, a vessel with a neck where air moves like a mass on a spring');
    },

    /* Clima: what you read first */
    glance() {
      const px = 330, py = 10, w = 240, h = 400;
      let s = R(px, py, w, h, 34, 'f') + R(px + 6, py + 6, w - 12, h - 12, 28, 'f c');
      s += `<text class="big" x="${px + w / 2}" y="${py + 170}" text-anchor="middle" style="fill:#fff;font-size:76px">14°</text>`;
      s += T(px + w / 2, py + 82, 'LONDON · SUNNY', '', 'middle').replace('class="t ', 'style="fill:rgba(255,255,255,.85)" class="t ');
      s += R(px + 18, py + 250, w - 36, 136, 16, 'f w');
      for (let k = 0; k < 3; k++) s += R(px + 34, py + 274 + k * 36, 80 + k * 30, 10, 5, 'f g') + R(px + w - 74, py + 274 + k * 36, 40, 10, 5, 'f g');
      const call = (n, x1, y1, x2, side, b, t) => {
        const tx = side === 'l' ? x2 - 14 : x2 + 14, a = side === 'l' ? 'end' : 'start';
        return L(`M${x1} ${y1} L${x2} ${y1}`, 'th') + C(x1, y1, 4, 'f') + C(x2, y1, 13, 'f c') + `<text class="t" x="${x2}" y="${y1 + 4}" text-anchor="middle" style="fill:#fff">${n}</text>` + H(tx, y1 - 2, b, '', a) + T(tx, y1 + 18, t, '', a);
      };
      s += call(1, px + 30, 60, 270, 'l', 'Colour', 'THE MOOD, READ FIRST');
      s += call(2, px + 180, 140, 630, 'r', 'Number', 'THE TEMPERATURE');
      s += call(3, px + 40, 320, 270, 'l', 'Detail', 'ONLY IF YOU WANT IT');
      return S(900, 420, s, 'A Clima screen: colour is read first, then the temperature, then the detail below');
    },

    /* Material Alternatives: two recipes as proportions */
    recipes() {
      const rows = [
        ['Concrete and brick substitute', 'DRY SOMEWHERE WARM · NO KILN', [['Water', 25, 'ml', 'g'], ['Alginate', 5, 'g', 'c'], ['Used coffee grinds', 15, 'g', 's']]],
        ['Leather substitute', 'HEAT, NEVER BOIL · NO CHROMIUM', [['Water', 120, 'ml', 'g'], ['Pork gelatine', 24, 'g', 'c'], ['Glycerine', 6, 'g', 's']]],
      ];
      let s = '';
      rows.forEach(([h, note, parts], i) => {
        const y = 30 + i * 160, tot = parts.reduce((a, p) => a + p[1], 0), W = 860; let x = 20;
        s += H(20, y, h) + T(880, y, note, 'c', 'end');
        const raw = parts.map((p) => Math.max(110, (p[1] / tot) * W)), sc = W / raw.reduce((a, b) => a + b, 0);
        parts.forEach(([name, q, u, c], k) => {
          const w = raw[k] * sc;
          s += R(x, y + 18, w - 4, 54, 6, 'f ' + c) + T(x + 10, y + 50, `${q} ${u}`, c === 'c' ? '' : 'k').replace(c === 'c' ? 'class="t ' : '_', 'style="fill:#fff" class="t ') + T(x, y + 92, name.toUpperCase(), 'k');
          x += w;
        });
      });
      return S(900, 330, s, 'Two recipes shown as proportions of their ingredients');
    },

    /* Rotating Farm: a fixed bed shades its own crops; a turning planter does not */
    rotate() {
      const sun = (x, y) => C(x, y, 22, 'f c') + [0, 1, 2, 3, 4, 5, 6, 7].map((k) => { const a = k * Math.PI / 4; return L(`M${f(x + 30 * Math.cos(a))} ${f(y + 30 * Math.sin(a))} L${f(x + 40 * Math.cos(a))} ${f(y + 40 * Math.sin(a))}`, 'c'); }).join('');
      const plant = (x, base, hgt, ang = 0) => {
        const r = (ang * Math.PI) / 180, tx = x + hgt * Math.sin(r), ty = base - hgt * Math.cos(r);
        return L(`M${x} ${base} L${f(tx)} ${f(ty)}`, 'bd') + C(tx, ty, 9, 'f s') + C(tx, ty, 9, 'l th');
      };
      let s = T(20, 24, 'FIXED BED', 'k') + sun(80, 80);
      s += `<path class="f g" d="M180 310 L360 310 L180 150 Z" opacity=".7"/>`;
      s += L('M20 310 H400', '') + plant(180, 310, 160) + plant(270, 310, 90) + plant(340, 310, 50);
      s += L('M110 100 L175 150 M120 120 L262 222', 'c th ds');
      s += T(20, 350, 'ONE ANGLE FOR EVERY CROP.') + T(20, 368, 'THE TALL ONE SHADES THE REST.');
      s += T(480, 24, 'ROTATING PLANTER', 'k') + sun(540, 80);
      const cx = 700, cy = 220, r = 100;
      s += C(cx, cy, r, 'l bd') + C(cx, cy, 6, 'f');
      [-150, -120, -90, -60, -30].forEach((d) => { const a = (d * Math.PI) / 180, x = cx + r * Math.cos(a), y = cy + r * Math.sin(a); s += plant(f(x), f(y), 34, d + 90); });
      s += L(`M${cx + 120} ${cy + 40} A128 128 0 0 1 ${cx + 40} ${cy + 120}`, 'c bd') + A(cx + 56, cy + 115, cx + 40, cy + 120, 'c bd');
      s += L('M570 100 L640 140', 'c th ds');
      s += T(480, 350, 'THE PLANTER TURNS, SO EACH CROP', 'c') + T(480, 368, 'MEETS ITS OWN LIGHT. NO SENSORS.', 'c');
      return S(900, 380, s, 'Left: a fixed bed where tall plants shade short ones. Right: a turning planter that brings each crop to its light');
    },

    /* Biomimicry Helmet: where the force goes */
    impact() {
      let s = T(20, 24, 'TYPICAL HELMET', 'k');
      s += `<path class="f g" d="M60 280 C60 110 330 90 360 240 L350 280 Z"/>` + L('M60 280 C60 110 330 90 360 240 L350 280 Z', 'bd');
      s += A(200, 40, 200, 112, 'c bd');
      [-60, -30, 0, 30, 60].forEach((d) => { const a = ((d + 90) * Math.PI) / 180; s += L(`M${f(200 + 10 * Math.cos(a))} ${f(132 + 10 * Math.sin(a))} L${f(200 + 26 * Math.cos(a))} ${f(132 + 26 * Math.sin(a))}`, 'c'); });
      s += T(20, 320, 'TALL DOME. THE FORCE') + T(20, 338, 'LANDS ON ONE POINT.');
      s += T(470, 24, 'FROG-INSPIRED', 'k');
      s += `<path class="f s" d="M480 280 C480 200 600 150 740 158 C830 164 880 220 880 280 Z"/>` + L('M480 280 C480 200 600 150 740 158 C830 164 880 220 880 280 Z', 'bd');
      for (let k = 0; k < 5; k++) s += L(`M${560 + k * 60} ${f(196 - k * 6 + (k > 2 ? (k - 2) * 12 : 0))} q24 -8 48 0`, 'th');
      s += A(700, 60, 700, 140, 'c bd');
      s += L('M690 150 C640 150 580 172 530 214', 'c bd') + A(548, 200, 530, 214, 'c bd');
      s += L('M712 150 C770 150 820 176 850 214', 'c bd') + A(836, 198, 850, 214, 'c bd');
      s += T(470, 320, 'LOW AND WIDE. THE FORCE SPREADS', 'c') + T(470, 338, 'SIDEWAYS ALONG A RIDGED SHELL.', 'c');
      return S(900, 350, s, 'A tall helmet takes impact at one point; the low, wide frog-inspired shell spreads it sideways');
    },

    /* Future Kettle: one cup in a wide kettle vs a narrow one */
    onecup() {
      let s = T(20, 24, 'A TYPICAL KETTLE', 'k');
      s += `<path class="f s" d="M74 300 H346 V316 H74 Z"/>` + L('M60 120 H360 L350 320 H70 Z', 'bd') + L('M360 160 Q420 170 400 260 L352 280', '') + L('M60 140 L20 110', 'bd');
      s += L('M70 270 H130', 'ds') + T(140, 274, 'MIN LINE', '');
      s += T(20, 356, 'ONE CUP IS A THIN LAYER,') + T(20, 374, 'BELOW THE LINE YOU CAN SEE.');
      s += T(520, 24, 'FUTURE KETTLE', 'k');
      const x = 600, w = 110, top = 60, bot = 320;
      s += `<path class="f s" d="M${x + 6} ${bot - 46} H${x + w - 6} V${bot - 4} H${x + 6} Z"/>` + L(`M${x} ${top} H${x + w} V${bot} H${x} Z`, 'bd');
      s += R(x + w - 26, top + 20, 14, bot - top - 40, 7, 'l c');
      ['1 CUP', '2', '3', '4'].forEach((t, k) => { const y = bot - 46 - k * 46; s += L(`M${x + w} ${y} h14`, 'c') + T(x + w + 20, y + 4, t, 'c'); });
      s += L(`M${x + w + 70} 140 Q${x + w + 120} 160 ${x + w + 110} 240 L${x + w + 4} 250`, '') + L(`M${x} ${top + 10} L${x - 40} ${top - 20}`, 'bd');
      s += T(520, 356, 'NARROW, GRADUATED, SEE-THROUGH:', 'c') + T(520, 374, 'YOU BOIL WHAT YOU NEED.', 'c');
      return S(900, 390, s, 'The same cup of water: a thin, hidden layer in a wide kettle, and a clear, measurable column in the narrow Future Kettle');
    },

    /* Ergonomic Easel: open, folded, rolling */
    fold() {
      let s = T(20, 24, '01 · OPEN', 'k');
      s += L('M60 200 L280 200', 'bd') + L('M90 200 L66 300 M250 200 L274 300', 'bd') + L('M84 200 L130 52', 'c bd') + C(258, 214, 9, 'l');
      s += T(20, 340, 'SIT, BOARD AT ONE OF FIVE ANGLES');
      [52, 64, 76, 88].forEach((d) => { const a = (d * Math.PI) / 180; s += L(`M84 200 L${f(84 + 120 * Math.cos(Math.PI - a) * -1)} ${f(200 - 120 * Math.sin(a))}`, 'c th ds'); });
      s += T(330, 24, '02 · FOLDED', 'k');
      s += L('M340 196 L560 196', 'c bd') + L('M340 206 L560 206', 'bd') + L('M346 216 L554 216', 'bd') + C(548, 230, 9, 'l') + L('M336 196 v20 M564 196 v20', 'th');
      s += T(330, 340, 'FLAPS FOLD FLAT, TRAY INSIDE');
      s += T(620, 24, '03 · ROLLING', 'k');
      s += L('M650 120 L840 260', 'c bd') + L('M644 130 L834 270', 'bd') + L('M638 140 L826 280', 'bd') + C(836, 288, 12, 'l bd') + L('M640 108 q-14 -20 4 -30 q18 -6 20 14', 'bd');
      s += A(760, 312, 860, 312, 'c bd') + L('M700 300 H880', 'g');
      s += T(620, 340, 'TIP IT ONTO ITS WHEELS AND ROLL');
      return S(900, 350, s, 'The easel open with five board angles, folded flat, and tipped onto its wheels to roll');
    },

    /* FinderSeeker: in range, buzz; out of range, map */
    range() {
      const cx = 260, cy = 190;
      let s = C(cx, cy, 150, 'f s') + C(cx, cy, 150, 'l c ds') + R(cx - 20, cy - 36, 40, 72, 8, 'f') + R(cx - 14, cy - 28, 28, 52, 3, 'f w');
      s += T(cx, cy + 62, 'YOUR PHONE', 'k', 'middle') + T(cx, 30, 'BLUETOOTH RANGE', 'c', 'middle');
      // glasses
      const gx = 330, gy = 110; s += C(gx - 16, gy, 12, 'l bd') + C(gx + 16, gy, 12, 'l bd') + L(`M${gx - 4} ${gy} h8`, 'bd');
      for (let k = 1; k <= 3; k++) s += L(`M${gx + 30 + k * 7} ${gy - 8 - k * 3} q${6 + k * 2} ${8 + k * 3} 0 ${16 + k * 6}`, 'c');
      s += H(cx, 372, 'In range', '', 'middle') + T(cx, 392, 'GLASSES · BUZZ IT, FOLLOW THE SOUND', '', 'middle');
      // purse
      const px = 690, py = 190; s += R(px - 30, py - 16, 60, 44, 6, 'l bd') + L(`M${px - 16} ${py - 16} q16 -30 32 0`, 'bd');
      s += L(`M${cx + 24} ${cy} C 470 ${cy - 80}, 560 ${cy + 60}, ${px - 40} ${py}`, 'c ds') + A(px - 52, py - 2, px - 40, py, 'c');
      s += L('M520 168 c0 -14 -22 -14 -22 0 c0 10 11 22 11 22 c0 0 11 -12 11 -22 Z', 'c') + C(509, 168, 3, 'f c');
      s += H(600, 262, 'Out of range') + T(600, 282, 'PURSE · LAST SEEN ON THE MAP') + T(600, 300, 'GO THERE, THEN BUZZ');
      return S(900, 404, s, 'Inside Bluetooth range you buzz the tag; outside it you see where it was last seen on the map, go there, then buzz');
    },

    /* Galaxy Buds: why curve continuity matters on a glossy part */
    continuity() {
      const panel = (x, d, j, name, note, c) => L(d, c) + C(j[0], j[1], 6, 'f c') + H(x, 230, name) + T(x, 250, note);
      let s = '';
      s += panel(30, 'M30 190 L150 90 L270 190', [150, 90], 'Touching', 'A CREASE. LIGHT BREAKS.', 'bd');
      s += panel(330, 'M330 190 L430 106 C460 82 520 84 570 190', [430, 106], 'Tangent', 'SMOOTH, BUT THE HIGHLIGHT KINKS', 'bd');
      s += panel(630, 'M630 190 C660 120 700 90 750 90 C800 90 840 120 870 190', [750, 90], 'Curvature', 'ONE UNBROKEN HIGHLIGHT', 'c bd');
      s += T(30, 30, 'THREE WAYS TWO SURFACES CAN MEET', 'k');
      return S(900, 262, s, 'Three ways two surfaces can meet: touching, tangent, and curvature-continuous, which gives one unbroken highlight');
    },

    /* MindGym: version one vs version two of onboarding */
    flows() {
      let s = T(20, 26, 'VERSION 1 · FEATURE-LED', 'k');
      let x = 20; ['Feature tour', 'Sign up', 'Full dashboard'].forEach((t, i) => { const w = t.length * 7.6 + 28; s += box(x, 44, t, '', w); x += w; if (i < 2) { s += A(x + 6, 64, x + 40, 64, 'g'); x += 46; } });
      s += A(x + 6, 64, x + 40, 64, 'g') + T(x + 50, 60, 'TOO MUCH AT ONCE.', 'k') + T(x + 50, 76, 'PEOPLE DROPPED OFF.');
      s += T(20, 156, 'VERSION 2 · GOAL-LED', 'c');
      x = 20; ['What are you preparing for?', 'Six small questions', 'Mood check-in', 'First session'].forEach((t, i) => { const w = t.length * 7.6 + 28; s += box(x, 174, t, 'c', w); x += w; if (i < 3) { s += A(x + 6, 194, x + 30, 194, 'c'); x += 36; } });
      s += T(20, 250, 'ONE QUESTION AT A TIME. FEWER DROP-OFFS.', 'c');
      return S(900, 262, s, 'Version one led with features and overwhelmed people; version two asks one goal question, then six small ones, then a first session');
    },

    /* NoBias: the four steps and the three verdicts */
    pipeline() {
      const st = ['Pick a field', 'Describe participants', 'Paste the script', 'Accept the fixes'];
      let s = L('M60 70 H780', 'g bd');
      st.forEach((t, i) => { const x = 60 + i * 240; s += C(x, 70, 26, i === 3 ? 'f c' : 'f w') + C(x, 70, 26, 'l c bd') + `<text class="b" x="${x}" y="76" text-anchor="middle" style="${i === 3 ? 'fill:#fff' : 'fill:var(--c)'}">${i + 1}</text>` + B(x, 128, t, '', 'middle'); });
      const sev = [['#E5484D', 'FIX REQUIRED'], ['#E5A100', 'REVIEW'], ['#2E9E5B', 'LOOKS CLEAR']];
      s += T(60, 186, 'EVERY QUESTION GETS ONE OF THREE VERDICTS, AND A REWRITE', 'k');
      sev.forEach(([c, t], i) => { s += `<rect x="${60 + i * 200}" y="202" width="180" height="34" rx="17" style="fill:${c}"/>` + `<text class="t" x="${150 + i * 200}" y="223" text-anchor="middle" style="fill:#fff">${t}</text>`; });
      return S(840, 250, s, 'Four steps: pick a field, describe participants, paste the script, accept the fixes. Each question gets a verdict and a rewrite');
    },

    /* Phenomena: where my work sat across the studio's projects */
    matrix() {
      const cols = ['Research', 'Concept', 'Design', 'Make', 'Deliver'];
      const rows = [['Simulands website', [0, 1, 1, 0, 1]], ['PCR London booths', [0, 1, 1, 1, 1]], ['Coffee table', [0, 1, 1, 1, 0]], ['Market research', [1, 0, 0, 0, 1]]];
      let s = '';
      cols.forEach((c, i) => { s += T(330 + i * 128, 30, c.toUpperCase(), 'k', 'middle'); });
      rows.forEach(([r, v], j) => {
        const y = 80 + j * 62; s += L(`M20 ${y + 31} H880`, 'g th') + B(20, y + 6, r);
        v.forEach((on, i) => { s += on ? C(330 + i * 128, y, 13, 'f c') : C(330 + i * 128, y, 13, 'l g'); });
        let a = -1, b = -1; v.forEach((on, i) => { if (on) { if (a < 0) a = i; b = i; } });
      });
      return S(900, 330, s, 'A grid of four studio projects against five stages, showing which stages I worked on');
    },
  };
})();
