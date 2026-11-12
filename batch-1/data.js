window.P = [
    { s: 'transforim', k: ['physical'], t: 'TransfoRim', w: 'Shape-shifting wheel for mixed terrain', c: '#2A46D3', img: 'img/transforim-hero.webp', y: '2025', cat: 'uni', role: 'Solo: research, design, making', sel: 1 },
    { s: 'phenomena', k: ['physical','digital'], t: 'Phenomena', w: 'Simulands website and booths, furniture, research', c: '#5B3DF5', img: 'img/phenomena-booth-1.webp', y: '2025–26', cat: 'work', role: 'Junior Product Designer', sel: 1 },
    { s: 'mindgym', k: ['digital'], t: 'MindGym', w: 'AI mental-performance coach for jobseekers', c: '#1F6B52', img: 'img/mindgym-cover.webp', y: '2026', cat: 'work', role: 'AI UI/UX Designer', sel: 1 },
    { s: 'nobias', k: ['digital'], t: 'NoBias', w: 'AI tool that checks interview scripts for bias', c: '#E2412B', img: 'img/nobias-home.webp', pos: '0% 30%', y: '2026', cat: 'personal', role: 'Concept, design, build', sel: 1 },
    { s: 'nexorade', k: ['physical'], t: 'Nexorade', w: 'Self-supporting timber structure at architectural scale', c: '#3D8A3F', img: 'img/nexorade-cover.webp', y: '2025', cat: 'work', role: 'Product Design Intern', sel: 1 },
    { s: 'sound-objects', k: ['physical'], t: 'Sound Objects', w: 'Shaping sound without electricity, for Wellcome Collection', c: '#C9773A', img: 'img/sound-objects-megaphone-3.webp', y: '2023', cat: 'work', role: 'Team lead, team of four', sel: 1 },
    { s: 'clima', k: ['digital'], t: 'Clima', w: 'Weather app organised by place, condition and mood', c: '#D9A21F', img: 'img/clima-thumb.webp', y: '2026', cat: 'work', role: 'UI/UX Designer', sel: 1 },
    { s: 'material-alternatives', t: 'Material Alternatives', w: 'Low-impact substitutes for concrete, brick, leather and plastic', c: '#8A6A3B', img: 'work/material-alternatives/table-overhead.webp', y: '2023', cat: 'uni' },
    { s: 'rotating-farm', t: 'Rotating Farm', w: 'Speculative terrariums that turn each crop to its light', c: '#4C8C2B', img: 'img/rotating-farm-hero.webp', y: '2022', cat: 'uni' },
    { s: 'biomimicry-helmet', t: 'Biomimicry Helmet', w: 'Cycling helmet redesigned by studying the frog', c: '#55602F', img: 'img/biomimicry-helmet-hero.webp', y: '2022', cat: 'uni' },
    { s: 'future-kettle', t: 'Future Kettle', w: 'A kettle redesigned from 5,000 years of kettle history', c: '#3B3B3B', img: 'img/future-kettle-hero.webp', y: '2023', cat: 'uni' },
    { s: 'ergonomic-easel', t: 'Ergonomic Easel', w: 'Foldable sitting easel with storage, for art students', c: '#B5813F', img: 'img/ergonomic-easel-final2.webp', y: '2022', cat: 'uni' },
    { s: 'finderseeker', t: 'FinderSeeker', w: 'Key-finder app with a clip-on tag', c: '#C98A2E', img: 'img/finderseeker-thumb.webp', y: '2025', cat: 'personal' },
    { s: 'galaxy-earbuds', t: 'Galaxy Buds CAD Study', w: 'Modelling and rendering a real product to photo quality', c: '#B0654A', img: 'img/galaxy-earbuds-render.webp', y: '2025', cat: 'personal' },
  ];
window.href = (p) => `${p.s}.html`;
window.pad = (n) => String(n).padStart(2, '0');
window.CATS = [['work', 'Work experience'], ['uni', 'University'], ['personal', 'Personal']];

// Each fun fact has its own permanent folder colour, separate from the project colours.
window.FOLDER_COLOURS = ['#8E2B2B', '#4B5D2A', '#1F4E79', '#C2452D', '#6E3D96', '#2F6F6A', '#A3650F'];
window.HOBBIES = [
  ['Murder mysteries', 'I’ll have the culprit worked out by chapter three, usually correctly.'],
  ['Survival plans for extreme situations', 'I have a plan for most disasters. No one asked, I made one anyway.'],
  ['Geopolitics debates', 'Give me twenty minutes and any headline and I’ll have an opinion on it.'],
  ['Board games (fiercely competitive)', 'Friends and family game night is not casual. I am playing to win.'],
  ['YouTube rabbit holes', 'What did people do before fire, before boredom had a cure? I go looking for the answer at 1am.'],
  ['Unprompted documentaries', 'Whatever’s on, I’ll watch it end to end and then explain it to you unprompted.'],
  ['Ranking chip shop fries', 'Ongoing, unofficial, taken far more seriously than it should be.'],
];
