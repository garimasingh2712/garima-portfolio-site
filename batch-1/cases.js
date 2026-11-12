// Project pages, one entry per project. Title, colour and year come from data.js.
// Keep every line short: pictures, callouts and drawings carry the story.
// Block types: state (big problem sentence), sp (a spread built from parts), vid (dark video spread), quote.
// Part types: call (photo with numbered pins), fig (drawn diagram), notes, steps, cards, gal, sheet, cmp, tl, sw, list, cols, demo.
const W = (s, f) => `work/${s}/${f}.webp`;

window.CASES = {
  /* ───────── TransfoRim ───────── */
  transforim: {
    ctx: 'Graduate project', one: 'A wheel that changes shape as the ground changes.',
    facts: [['Role', 'Solo: research, design, making'], ['Time', '9 months'], ['Context', 'Goldsmiths, BA Design'], ['Year', '2025']],
    cover: W('transforim', 'hero'), coverAlt: 'TransfoRim close up: black arms, blue joints and a wooden spike',
    stats: [['9', 'months, from first sketch to exhibition'], ['2', 'mechanisms combined in one wheel'], ['12', 'pairs of hinged arms']],
    tldr: ['Every wheel suits one kind of ground, and none adapt mid-journey.', 'Combine two shape-changing mechanisms so the rim opens into spikes on rough ground.', 'A working, motor-driven prototype, exhibited at the graduate show.'],
    blocks: [
      { t: 'state', lab: 'The problem', h: 'The wheel has barely changed. Each one suits a narrow range of ground, and *nothing adapts mid-journey.*', items: [['One wheel, one ground', 'Every wheel is tuned to a narrow range of terrain.'], ['Costly to cover', 'A wheel for every surface adds up fast.'], ['Mixed ground is everywhere', 'Wheelchairs, rovers and vehicles all meet it.']] },
      { t: 'sp', lab: 'The idea', h: 'Smooth on the road, *spikes out* on rubble', sub: 'The rim stays round on even ground and opens into spikes as the ground gets rough. Drag the slider.', parts: [{ t: 'demo', which: 'morph' }] },
      { t: 'sp', lab: 'Anatomy', h: 'What each part does', sub: 'The finished prototype, open. Point at a number.', parts: [{ t: 'call', img: W('transforim', 'm5'), alt: 'TransfoRim fully open, seen from above', pins: [
        [49, 24, 'Wooden spike', 'Pushes out to grip rocky ground, then folds back in.'],
        [77, 52, 'Printed carbon-fibre joint', 'One of 12 hinged pairs. Strong, light and quick to reprint.'],
        [40, 68, 'Laser-cut arm, bent at 105°', 'The angle that lets the ring open and close evenly.'],
        [14, 52, 'Outer arc', 'Part of the second mechanism. Gives a smooth ride on even ground.'],
        [64, 57, 'Bearing', 'Lets the two mechanisms turn against each other.'],
      ] }] },
      { t: 'sp', lab: 'Mechanism', h: 'Two mechanisms, *two histories*', sub: 'One from a children’s toy, one from an 1868 bank lock.', parts: [{ t: 'sheet', r: '570 / 396', views: [
        { img: W('transforim', 's1'), cap: 'Mechanism 1 · from a Hoberman sphere', b: 'Grip and protection' },
        { img: W('transforim', 's2'), cap: 'Mechanism 2 · from a bank lock, 1868', b: 'Smooth motion' },
      ], tb: [['Title', 'TransfoRim mechanism'], ['Scale', '1:5'], ['Material', 'CF · MDF'], ['Pairs', '12'], ['Sheet', '04']] }] },
      { t: 'sp', lab: 'Process', h: 'Nine months on one table', parts: [{ t: 'steps', keep2: true, items: [
        { img: W('transforim', 'process-1'), b: 'Research wall', s: 'Toys, locks and mechanisms that change shape.' },
        { img: W('transforim', 'process-2'), b: 'Card and MDF', s: 'Testing arm lengths and hinge angles.' },
        { img: W('transforim', 'process-3'), b: 'Printed joints', s: 'Bearings and carbon-fibre joints.' },
        { img: W('transforim', 'process-4'), b: 'Rings', s: 'Putting the two mechanisms together.' },
      ] }] },
      { t: 'vid', lab: 'Build and test', h: 'Moving', src: 'work/transforim/demo.mp4', poster: 'work/transforim/demo-poster.jpg', p: ['Driven by a stepper motor, a Pololu Tic controller and an Arduino.'], cap: 'Recorded at the graduate show', imgs: [[W('transforim', 'm3'), 'Hinged arms and wooden spike'], [W('transforim', 'm4'), 'Bearing and joint'], [W('transforim', 'structure-5'), 'The arcs of mechanism 2']] },
    ],
    out: { h: 'A working prototype in wood, carbon fibre, 3D print and metal, *exhibited at the graduate show.*', chips: ['Wheelchairs', 'Planetary rovers', 'Exploration vehicles'], kit: 'Rhino · Illustrator · Arduino · Laser cutter · 3D printer · Wood and metal shop', img: W('transforim', 'structure-1'), alt: 'Testing TransfoRim at the exhibition' },
  },

  /* ───────── Phenomena ───────── */
  phenomena: {
    ctx: 'Studio role', one: 'Ten months at a London design studio: a med-tech website, expo booths, a coffee table and market research.',
    facts: [['Role', 'Junior Product Designer'], ['Time', '10 months'], ['Studio', 'Phenomena Creative Advisory'], ['Year', '2025–26']],
    cover: W('phenomena', 'booth-4'), coverAlt: 'Simulands booth at PCR London 2025',
    stats: [['3+', 'client projects running at once'], ['2', 'booths built for PCR London 2025'], ['4', 'disciplines: web, exhibition, product, research']],
    tldr: ['Start-up clients needed websites, expo stands and products, often all at once.', 'Work across the studio’s whole process, from research to the build.', 'A live med-tech website, two conference booths and a table ready for manufacture.'],
    blocks: [
      { t: 'sp', lab: 'My role', h: 'One role, *four disciplines*', sub: 'Which stages I worked on, project by project. I reported to the Creative Director.', parts: [{ t: 'fig', svg: 'matrix' }] },
      { t: 'sp', lab: 'Simulands website', h: 'A shop for *heart-surgery simulation*', sub: 'Product pages, cart and checkout for a clinical audience. Clinical, but not cold.', parts: [{ t: 'cards', n: 2, r: '16 / 10', items: [
        { img: W('phenomena', 'digital-1'), tag: 'The shop', b: 'Product pages to checkout', p: 'Live at simulands.com.' },
        { img: W('phenomena', 'digital-2'), tag: 'Disposables', b: 'Catalogue for valves and parts', p: 'Built to scan fast: part, size, price.' },
      ] }] },
      { t: 'sp', lab: 'Booths', h: 'Two stands at *PCR London 2025*', sub: 'Simulands and Venus, from concept to build, at a major med-tech conference.', parts: [{ t: 'call', img: W('phenomena', 'booth-1'), alt: 'Simulands stand: clear models on a white counter, blue backdrop', pins: [
        [40, 62, 'The product, at eye level', 'Clear heart models on the counter, so visitors see inside.'],
        [30, 22, 'Backdrop', 'Large graphics that read from across the hall.'],
        [50, 76, 'Demo counter', 'Built for live demonstrations on the stand.'],
      ] }, { t: 'gap' }, { t: 'gal', n: 4, r: '3 / 2', keep2: true, items: [
        { img: W('phenomena', 'booth-2'), cap: 'Live demo' }, { img: W('phenomena', 'booth-3'), cap: 'Setting up' }, { img: W('phenomena', 'booth-5'), cap: 'The Venus side' }, { img: W('phenomena', 'booth-6'), cap: 'Opening day' },
      ] }] },
      { t: 'sp', lab: 'Coffee table', h: 'From brief to *manufacture drawings*', sub: 'Fluted glass and solid green glass meeting in one curve, on three round legs.', parts: [{ t: 'gal', n: 3, r: '960 / 622', contain: true, items: [
        { img: W('phenomena', 'nm-table-1'), cap: 'Three-quarter view' }, { img: W('phenomena', 'nm-table-2'), cap: 'The top: two glasses, one line' }, { img: W('phenomena', 'nm-table-3'), cap: 'Low angle: the legs' },
      ] }, { t: 'gap' }, { t: 'sheet', r: '2400 / 1988', views: [{ img: W('phenomena', 'nm-table-drawing'), cap: 'Drawing 01-01 · for the maker', b: 'Elevations, plan and isometric' }], tb: [['Title', 'Coffee table'], ['Diameter', '800 mm'], ['Height', '350 mm'], ['Top', '40 mm'], ['Legs', 'Ø 120 mm']] }] },
      { t: 'sp', lab: 'Research', tint: true, h: 'Research that turned into *costed decisions*', parts: [{ t: 'notes', items: [['Markets', 'Research across client sectors to steer product direction.'], ['Makers', 'Manufacturer research, so concepts came with real costs.'], ['People', 'Calls and meetings with vendors and clients.']] }] },
    ],
    out: { h: 'The Simulands website is live and *both booths were built* for PCR London 2025.', live: ['https://simulands.com', 'simulands.com'], note: 'Most client screens are under NDA. The live site shows the direction.', kit: 'Figma · Rhino · KeyShot · Illustrator · Photoshop · Physical prototyping', img: W('phenomena', 'booth-6'), alt: 'The booth on opening day' },
  },

  /* ───────── MindGym ───────── */
  mindgym: {
    ctx: 'PM Accelerator', one: 'An AI mental-performance coach for jobseekers.',
    facts: [['Role', 'AI UI/UX Designer'], ['Time', '10 weeks'], ['Team', '13 people'], ['Year', '2026']],
    cover: W('mindgym', 'cover'), coverAlt: 'MindGym screens on green: onboarding, the daily dashboard and a live session',
    stats: [['50+', 'user interviews'], ['7', 'onboarding steps, which I led'], ['23', 'high-fidelity screens shipped']],
    tldr: ['Job searches stall on confidence and habits, not on skill.', 'A coach that gets people ready before they act: short sessions, mood check-ins, visible progress.', '23 screens shipped end to end by a team of 13 in ten weeks.'],
    blocks: [
      { t: 'state', lab: 'The insight', h: 'Over 50 interviews said the same thing: *job searches stall on confidence, not skill.*', items: [['Behaviour', 'People knew what to do. They didn’t do it.'], ['So the brief changed', 'Help people feel ready before they act.'], ['Small, often', 'Short sessions beat long courses.']] },
      { t: 'sp', lab: 'Research', h: 'What we found, *as presented*', parts: [{ t: 'gal', n: 2, r: '16 / 10', contain: true, items: [{ img: W('mindgym', 'slide1') }, { img: W('mindgym', 'slide2') }] }] },
      { t: 'sp', lab: 'Who it’s for', h: 'Three people, *three different needs*', parts: [{ t: 'cards', items: [
        { av: 'SR', tag: '34 · Career changer', b: 'Sofia Reyes', p: 'Marketing to UX research. Needs reassurance and reframing.' },
        { av: 'JO', tag: '23 · Graduate', b: 'James Okafor', p: 'First search. Needs a tracker, streaks, a bit of game.' },
        { av: 'PL', tag: '29 · Laid off', b: 'Priya Lau', p: 'Designer. Needs small commitments and grounding.' },
      ] }] },
      { t: 'sp', lab: 'Onboarding', h: 'Version one *overwhelmed people*. Version two asks one question.', parts: [{ t: 'fig', svg: 'flows' }, { t: 'gap' }, { t: 'gal', n: 4, r: '1440 / 1024', keep2: true, items: [{ img: W('mindgym', 'onboarding1') }, { img: W('mindgym', 'onboarding2') }, { img: W('mindgym', 'onboarding3') }, { img: W('mindgym', 'onboarding4') }] }] },
      { t: 'sp', lab: 'Decisions', h: 'Four decisions that *shaped the product*', parts: [{ t: 'steps', r: '1440 / 1024', contain: true, keep2: true, items: [
        { img: W('mindgym', 'session2'), b: 'Goal first', s: 'It opens with “What are you preparing for?”' },
        { img: W('mindgym', 'session5'), b: 'Six small questions', s: 'Not one long form. Fewer drop-offs.' },
        { img: W('mindgym', 'progress2'), b: 'Conclusions, not charts', s: '“Morning sessions lift more.”' },
        { img: W('mindgym', 'figma2'), b: 'Colour with a job', s: 'Teal: next. Amber: urgent. Green: progress.' },
      ] }] },
      { t: 'sp', lab: 'The product', dark: true, h: 'Session, summary, coach, progress', parts: [{ t: 'gal', n: 2, r: '1440 / 1024', items: [
        { img: W('mindgym', 'session7'), cap: 'Live session' }, { img: W('mindgym', 'session9'), cap: 'Session summary' }, { img: W('mindgym', 'coach1'), cap: 'AI coach' }, { img: W('mindgym', 'progress1'), cap: 'Progress' },
      ] }] },
      { t: 'sp', lab: 'My part', h: 'What I led, *what I helped with*', parts: [{ t: 'cols', items: [
        ['I led', ['Onboarding, all 7 steps', 'Mood check-ins, before and after', 'Blocker selector', 'Component library, 16 button states', 'Research synthesis and colour tokens']],
        ['I contributed to', ['Session player progress', 'Landing page hero and copy', 'Design reviews with stakeholders', 'PRD review and feasibility', 'Developer handoff and QA']],
      ] }, { t: 'gap' }, { t: 'tl', items: [['Wk 1–2', 'Discovery and research'], ['Wk 3–4', 'PRD and architecture'], ['Wk 5–7', 'Design and iteration'], ['Wk 8–10', 'Build and launch']] }] },
    ],
    out: { h: '23 high-fidelity screens across onboarding, dashboard, sessions, resources and landing page. *Shipped end to end.*', reflect: ['Test earlier, with rough sketches.', 'Go mobile-first: the critical moments happen on a phone.', 'Agree success metrics at the start.'], kit: 'Figma · Figma AI · Miro · FigJam · Illustrator · Photoshop', img: W('mindgym', 'dashboard'), alt: 'MindGym dashboard', contain: true },
  },

  /* ───────── NoBias ───────── */
  nobias: {
    ctx: 'Self-initiated', one: 'An AI tool that checks interview scripts for bias before you run them.',
    facts: [['Role', 'Concept, design, build'], ['Type', 'Live web tool'], ['Works with', 'Gemini, Claude, GPT-4o'], ['Year', '2026']],
    cover: W('nobias', 'home'), coverAlt: 'NoBias landing page: Your questions shape the answers', coverContain: true, coverBg: '#fff',
    stats: [['20', 'kinds of bias checked'], ['3', 'verdicts, each with a rewrite'], ['0', 'accounts needed']],
    tldr: ['How a question is worded shapes the answer, and biased scripts reach participants unchecked.', 'Paste a script; every question comes back with a verdict and a rewrite.', 'A free, live tool. Your API key never leaves your browser.'],
    blocks: [
      { t: 'state', lab: 'The problem', h: 'Ask “Don’t you think it’s easier?” and you’ve *already written the answer.*', items: [['Leading', 'The question points to the answer.'], ['Loaded', 'One word tilts it.'], ['Unchecked', 'Scripts reach participants without review.']] },
      { t: 'sp', lab: 'Try it', h: 'Check one question', sub: 'A cut-down version with 5 of the 20 checks. Edit the question and watch it change.', parts: [{ t: 'demo', which: 'bias' }] },
      { t: 'sp', lab: 'How it works', h: 'Four steps, *one verdict per question*', parts: [{ t: 'fig', svg: 'pipeline' }, { t: 'notes', items: [['Field', 'Medical, legal and mental-health research get the strictest review.'], ['Participants', 'Who they are and how sensitive the topic is.'], ['Script', 'Any format. Each question read alone and in order.']] }] },
      { t: 'sp', lab: 'What it checks', h: '20 checks in *three groups*', parts: [{ t: 'cards', items: [
        { tag: 'The question', b: 'Wording', p: 'Leading, loaded, double-barrelled, assumption-laden, yes-priming.' },
        { tag: 'The researcher', b: 'Framing', p: 'Confirmation framing, social-desirability pressure, cultural blind spots.' },
        { tag: 'The script', b: 'Shape', p: 'Missing warm-up, question order, no opt-out cues, narrow scope.' },
      ] }] },
      { t: 'sp', lab: 'Decisions', tint: true, h: 'Built for *researchers in a hurry*', parts: [{ t: 'notes', items: [['Fix, don’t just flag', 'A warning without a rewrite only adds work.'], ['Your key stays with you', 'Bring your own API key. It lives in your browser only.'], ['Free, no account', 'Checking a script shouldn’t need a login.']] }] },
    ],
    out: { h: 'Live and free. Grounded in research methods literature, *from Rosenthal & Rosnow to Portigal.*', live: ['https://nobias2.vercel.app', 'Try NoBias'], kit: 'Figma · Gemini · Claude · GPT-4o · Vercel', img: W('nobias', 'home'), alt: 'NoBias landing page', contain: true },
  },

  /* ───────── Nexorade ───────── */
  nexorade: {
    ctx: 'Internship · Loop.pH', one: 'A self-supporting timber structure, scaled up for an architectural piece.',
    facts: [['Role', 'Product Design Intern'], ['With', 'Mathias Gmachl, Loop.pH'], ['Site', 'Bermondsey, London'], ['Year', '2025']],
    coverPos: '30% 50%', cover: W('nexorade', 'cover'), coverAlt: 'In a VR headset inside the 1:1 model, beside the site plan',
    stats: [['1:1', 'scale, walked through in VR'], ['0', 'central nodes holding it up'], ['3', 'variables decide if it stands']],
    tldr: ['A nexorade stands with no central node. How far can the idea scale?', 'Model it parametrically, then stand inside it at full size in mixed reality.', 'A 1:1 mixed-reality prototype and proposals for open calls and grants.'],
    blocks: [
      { t: 'sp', lab: 'How it stands', h: 'Every member *rests on the next*', sub: 'A closed loop of members holds itself up. Change one measurement and the loop may not close.', parts: [{ t: 'fig', svg: 'nexus' }, { t: 'notes', items: [['Eccentricity (e)', 'The offset between members decides whether the loop closes.'], ['Engagement length (L)', 'How far members overlap changes how load travels.'], ['Diameter (d)', 'Thicker members shift the whole geometry.']] }] },
      { t: 'vid', lab: 'In VR', portrait: true, h: 'Standing inside it', src: 'work/nexorade/vr.mp4', poster: 'work/nexorade/vr-poster.jpg', p: ['Fologram streams the Grasshopper model into a headset at 1:1.'], list: [['Height', 'checked standing inside'], ['Density', 'how open it feels'], ['Clearance and entry', 'resolved inside the model']] },
      { t: 'sp', lab: 'Process', h: 'Model, *walk*, propose', parts: [{ t: 'notes', items: [['1 · Parametric model', 'Rhino and Grasshopper, driven by count, length, engagement and rotation. Any change re-runs.'], ['2 · Mixed reality', 'Walk it at 1:1 and edit the definition from inside.'], ['3 · Proposals', 'Geometry, site and visuals packaged for open calls and grants.']] }] },
      { t: 'sp', lab: 'The site', h: 'Bermondsey: *industry, fabric, public space*', parts: [{ t: 'gal', r: '4 / 3', items: [{ img: W('nexorade', 'site-3'), cap: 'West Yard plan' }, { img: W('nexorade', 'site-2'), cap: 'Leather, Hide and Wool Exchange' }, { img: W('nexorade', 'site-4'), cap: 'Courage Brewery, Horselydown' }] }] },
      { t: 'quote', lab: 'A link', q: 'Its joints work like TransfoRim’s: members held by each other, not fixed to a hub.' },
    ],
    out: { h: 'A 1:1 mixed-reality prototype, and proposals *submitted to open calls and grant programmes.*', kit: 'Rhino · Grasshopper · Fologram · VR headset · InDesign · Illustrator · Physical models', img: W('nexorade', 'thumb'), alt: 'Walking the 1:1 model in a headset' },
  },

  /* ───────── Sound Objects ───────── */
  'sound-objects': {
    ctx: 'Wellcome Collection · live brief', one: 'Two objects that direct, amplify and smooth sound, without electricity.',
    facts: [['Role', 'Team lead, team of four'], ['Client', 'Wellcome Collection'], ['Materials', 'Softwood, clay'], ['Year', '2023']],
    coverPos: '40% 50%', cover: W('sound-objects', 'megaphone-3'), coverAlt: 'The Megaphone: an eight-sided softwood horn with a black interior',
    stats: [['0', 'wires or power'], ['135°', 'between each plane of the horn'], ['2,000', 'years of acoustic know-how']],
    tldr: ['A temporary exhibition needed clear sound that was easy to move, accessible and interactive.', 'Shape sound with geometry and material instead of electricity, borrowing from history.', 'A horn that makes sound directional, and a clay resonator that smooths low notes.'],
    blocks: [
      { t: 'sp', lab: 'Looking back', h: 'The best answer was *2,000 years old*', sub: 'Most sound fixes add electricity. History had already solved it with shape.', parts: [{ t: 'tl', items: [['c. 27 BC', 'Vitruvius describes clay vessels in Greek theatre walls that smooth voice and music.'], ['Estonia', 'Wooden forest megaphones carry voices with geometry alone.'], ['2023', 'We bring both ideas into an exhibition, with no power at all.']] }] },
      { t: 'sp', lab: 'How they work', h: 'A beam and *a spring of air*', parts: [{ t: 'fig', svg: 'sound' }] },
      { t: 'sp', lab: 'The Megaphone', h: 'The Megaphone', sub: 'Hangs under a ceiling speaker. Held the other way, it focuses listening.', parts: [{ t: 'call', img: W('sound-objects', 'megaphone-1'), alt: 'The Megaphone from the side', pins: [
        [22, 68, 'Eight planes, 135° apart', 'The octagon narrows sound into a beam.'],
        [60, 62, 'Softwood', 'Light enough to hang from a ceiling or beam.'],
        [86, 76, 'Steel bracket', 'Mounts it under an existing speaker.'],
      ] }] },
      { t: 'sp', lab: 'The Olive', h: 'The Olive', sub: 'A clay Helmholtz resonator, for a wall or on its own stand.', parts: [{ t: 'call', flip: true, img: W('sound-objects', 'olive-4'), alt: 'The Olive, a clay vessel on a wire stand', pins: [
        [71, 44, 'Opening', 'The neck. Its size sets the note it responds to.'],
        [45, 38, 'Hollow clay body', 'The air inside springs back and holds low sound.'],
        [42, 74, 'Wire stand', 'Freestanding, or the vessel mounts on a wall.'],
      ] }, { t: 'gap' }, { t: 'gal', r: '3 / 4', items: [{ img: W('sound-objects', 'megaphone-2'), cap: 'Bracket and mount' }, { img: W('sound-objects', 'olive-1'), cap: 'The Olive, front' }, { img: W('sound-objects', 'olive-5'), cap: 'The Olive, side' }] }] },
    ],
    out: { h: 'The Megaphone made sound clearly directional and speech easier to follow at a distance. *The Olive’s effect was subtler,* but audible with low sources.', chips: ['Access', 'Sound', 'Sustainability'], kit: 'Softwood · Clay · Historical research · Workshop · Sound testing · Publication design', img: W('sound-objects', 'hero'), alt: 'The booklet: Access, Sound & Sustainability' },
  },

  /* ───────── Clima ───────── */
  clima: {
    ctx: 'PM Accelerator', one: 'A weather app built around how people need weather: by place, by condition, by mood.',
    facts: [['Role', 'UI/UX Designer'], ['Platform', 'iOS'], ['Screens', '20+'], ['Year', '2026']],
    cover: W('clima', 'hero'), coverAlt: 'Six Clima screens, one colour per weather condition', coverContain: true, coverBg: '#EFE8DD',
    stats: [['6', 'condition palettes'], ['20+', 'screens'], ['2', 'kinds of user']],
    tldr: ['Every weather app has the same data, and most show all of it at once.', 'Lead with colour so you know the mood before you read a number.', 'Six condition palettes, a multi-city system and a clickable prototype.'],
    blocks: [
      { t: 'sp', lab: 'Read in a glance', h: 'You know the mood *before you read a number*', parts: [{ t: 'fig', svg: 'glance' }] },
      { t: 'sp', lab: 'Colour as language', h: 'Six conditions, *six colours*', parts: [{ t: 'sw', items: [['Sunny', '#EACE8A', 1], ['Windy', '#E76F51'], ['Thunder', '#5A7985'], ['Snowy', '#48595F'], ['Cloudy', '#264653'], ['Rainy', '#2A9D8F']] }, { t: 'gap' },
        { t: 'gal', n: 6, r: '393 / 1099', keep2: true, items: ['sunny', 'windy', 'thunder', 'snow', 'cloudy', 'rain'].map((c) => ({ img: W('clima', `c-${c}`), alt: `Clima, ${c}` })) }] },
      { t: 'sp', lab: 'Two users', h: 'Compare cities fast, or *see the trend*', parts: [{ t: 'cards', n: 2, items: [
        { tag: 'Primary · frequent traveller', b: 'Compare cities fast', p: 'Every saved place, now and the week ahead, side by side.' },
        { tag: 'Secondary · long-term planner', b: 'See the trend', p: 'Farmers, event planners, outdoor people. Patterns on a second tab.' },
      ] }] },
      { t: 'sp', lab: 'Key screens', h: 'Five screens', parts: [{ t: 'cards', contain: true, r: '393 / 852', items: [
        { img: W('clima', 'c-home'), tag: '01', b: 'Now', p: 'The colour says it first.' },
        { img: W('clima', 'c-7days'), tag: '02', b: 'Seven days', p: 'Glance, then tap.' },
        { img: W('clima', 'c-multicity'), tag: '03', b: 'Places', p: 'Every saved city at once.' },
        { img: W('clima', 'c-warning'), tag: '04', b: 'Warnings', p: 'Hard to miss, still calm.' },
        { img: W('clima', 'c-prefs'), tag: '05', b: 'Settings', p: 'Clean and done.' },
      ] }] },
      { t: 'vid', lab: 'Prototype', h: 'Clicking through', src: 'work/clima/proto.mp4', poster: 'work/clima/proto-poster.jpg', p: ['Recorded from the Figma prototype.'] },
    ],
    out: { h: 'Six condition colour states, reusable components, a multi-location system and *a full clickable prototype.*', kit: 'Figma · iOS 15 UI Kit · Illustrator · Miro', img: W('clima', 'c-loading'), alt: 'Clima loading screen', contain: true, bg: '#EFE8DD' },
  },

  /* ───────── Material Alternatives ───────── */
  'material-alternatives': {
    ctx: 'Goldsmiths', one: 'Remaking the world’s most damaging materials from ingredients that don’t cost the planet.',
    facts: [['Role', 'Solo researcher and maker'], ['Specimens', '30+'], ['Context', 'Goldsmiths, BA Design'], ['Year', '2023']],
    cover: W('material-alternatives', 'samples'), coverAlt: 'Numbered boards, discs and coloured bioplastic sheets laid out on a white table',
    stats: [['30+', 'specimens made'], ['4', 'materials remade'], ['8%', 'of global CO₂ comes from concrete']],
    tldr: ['Concrete, brick, leather and plastic do huge damage. Are they really irreplaceable?', 'Remake each one from natural, low-impact ingredients, and record every recipe and failure.', '30+ specimens, a recipe booklet and a material wall.'],
    blocks: [
      { t: 'sp', lab: 'The swaps', h: 'Four materials, *remade*', parts: [{ t: 'cmp', head: ['Material', 'Remade with'], rows: [
        ['Concrete', 'Alginate, natural aggregates and waste binders.', 'No heat'],
        ['Brick', 'Alginate, wood shavings and used coffee grinds.', 'No kiln'],
        ['Leather', 'Pork gelatine and glycerine.', 'No chromium'],
        ['Plastic and panels', 'Alginate, natural pigments and organic waste.', 'Compostable'],
      ] }] },
      { t: 'sp', lab: 'Recipes', h: 'Two recipes, *by proportion*', parts: [{ t: 'fig', svg: 'recipes' }, { t: 'gap' }, { t: 'gal', n: 2, r: '1 / 1', items: [{ img: W('material-alternatives', 'coffee-discs'), cap: 'Alginate and coffee, drying' }, { img: W('material-alternatives', 'gelatine-sheet'), cap: 'Gelatine and glycerine, poured flat' }] }] },
      { t: 'sp', lab: 'Making', h: 'A kitchen, *not a lab*', sub: 'Mixed by hand, a teaspoon at a time. Every batch labelled.', parts: [{ t: 'steps', r: '1 / 1', keep2: true, items: [
        { img: W('material-alternatives', 'shavings'), b: 'Wood shavings', s: 'Waste from the workshop, ready to bind.' },
        { img: W('material-alternatives', 'peel-mix'), b: 'Peel and binder', s: 'Measured by the teaspoon.' },
        { img: W('material-alternatives', 'tray-23'), b: 'Batch 23', s: 'Three variations, side by side.' },
        { img: W('material-alternatives', 'flowers'), b: 'Flowers and grass', s: 'Pressed into the surface.' },
      ] }] },
      { t: 'sp', lab: 'Samples', h: 'Boards, discs and *sheets*', sub: 'The finished samples, numbered by recipe.', parts: [{ t: 'call', img: W('material-alternatives', 'boards'), alt: 'Close-up of numbered boards, discs and coloured bioplastic sheets', pins: [
        [24, 64, 'Boards', 'Shavings and binder, pressed flat. The number is the recipe.'],
        [10, 47, '24 + coffee', 'The same recipe with used coffee grinds added.'],
        [75, 30, 'Bioplastic sheets', 'Coloured with natural pigments.'],
        [52, 83, 'Discs', 'Smaller tests of the same mixes.'],
      ] }, { t: 'gap' }, { t: 'gal', n: 2, r: '3 / 4', keep2: true, items: [{ img: W('material-alternatives', 'long-table'), cap: 'Every batch, laid out to dry' }, { img: W('material-alternatives', 'fibre-window'), cap: 'A fibre sheet against the light' }] }] },
      { t: 'quote', lab: 'What I learned', q: 'Every batch was a little different. That variability is data.' },
    ],
    out: { h: 'Not a finished product. *Proof that the chemistry works,* in a university kitchen, with basic ingredients.', chips: ['Recipe booklet', 'Material wall'], kit: 'Alginate · Pork gelatine · Glycerine · Coffee grinds · Wood shavings · Natural pigments', img: W('material-alternatives', 'table-band'), alt: 'From above: every batch on one long table' },
  },

  /* ───────── Rotating Farm ───────── */
  'rotating-farm': {
    ctx: 'Speculative design', one: 'Three rotating terrariums that give each crop the light it needs.',
    facts: [['Role', 'Solo designer and researcher'], ['Scale', '1:20 models'], ['Context', 'Goldsmiths, BA Design'], ['Year', '2022']],
    cover: W('rotating-farm', 'pyramid-2'), coverAlt: 'The Pyramid terrarium: three layers of moss in a clear pyramid',
    stats: [['3', 'working scale models'], ['0', 'sensors or electronics'], ['1', 'fold-out manual per crop']],
    tldr: ['Every crop needs its own light, but allotment beds hold plants in one fixed place.', 'Planters that turn or tilt so each crop meets its own light, using mechanics alone.', 'Three working models and a fold-out manual for each crop.'],
    blocks: [
      { t: 'sp', lab: 'The idea', h: 'Move the planter, *not the sun*', parts: [{ t: 'fig', svg: 'rotate' }] },
      { t: 'sp', lab: 'Three models', h: 'Three ways to turn', parts: [{ t: 'cards', items: [
        { img: W('rotating-farm', 'pyramid-1'), tag: 'Babylon', b: 'The Pyramid', p: 'Three layers rotate on one axle. Different angles at once.' },
        { img: W('rotating-farm', 'hero'), tag: 'Globe', b: 'The Globe', p: 'Tilts to match each crop. The simplest to use.' },
        { img: W('rotating-farm', 'popsicle-1'), tag: 'Popsicle', b: 'The Plant Popsicle', p: 'A hydroponic vertical farm in drawers. The most compact.' },
      ] }] },
      { t: 'sp', lab: 'The Globe', h: 'The Globe, *up close*', parts: [{ t: 'call', img: W('rotating-farm', 'globe-2'), alt: 'The Globe model', pins: [
        [34, 7, 'Arc rail', 'The globe tilts along it, toward the light.'],
        [52, 22, 'Open lattice', 'Light reaches the crop from every side.'],
        [60, 30, 'The crop', 'Moss stands in for the planting.'],
        [22, 82, 'Fixed base', 'No motors. You turn it by hand.'],
      ] }] },
      { t: 'sp', lab: 'Drawings', h: 'Technical drawings', parts: [{ t: 'sheet', r: '1.42 / 1', views: [
        { img: W('rotating-farm', 'drawing-1'), cap: 'Sheet 1', b: 'The Pyramid' }, { img: W('rotating-farm', 'drawing-2'), cap: 'Sheet 2', b: 'The Globe' }, { img: W('rotating-farm', 'drawing-3'), cap: 'Sheet 3', b: 'Plant Popsicle' },
      ], tb: [['Title', 'Rotating Farm'], ['Scale', '1:20'], ['Models', '3'], ['Year', '2022']] }] },
      { t: 'sp', lab: 'Manual', h: 'One fold-out *per crop*', parts: [{ t: 'gal', n: 2, r: '1.4 / 1', contain: true, items: [{ img: W('rotating-farm', 'manual1') }, { img: W('rotating-farm', 'manual2') }] }] },
    ],
    out: { h: 'All three worked as models. *Light can be solved mechanically,* with no sensors or automation.', reflect: ['Test at allotment scale, with real crops, over a growing season.'], kit: 'Hand sketching · Physical modelling · Technical drawing', img: W('rotating-farm', 'popsicle-2'), alt: 'The Plant Popsicle model' },
  },

  /* ───────── Biomimicry Helmet ───────── */
  'biomimicry-helmet': {
    ctx: 'Goldsmiths', one: 'A cycling helmet redesigned by studying the frog.',
    facts: [['Role', 'Solo designer and researcher'], ['Method', 'Biomimicry'], ['Context', 'Goldsmiths, BA Design'], ['Year', '2022']],
    cover: W('biomimicry-helmet', 'hero'), coverAlt: 'Concept render: a low, wide, dark green helmet beside a frog',
    stats: [['3', 'principles taken from the frog'], ['3', 'key design decisions'], ['0', 'vent holes cut in the shell']],
    tldr: ['Protect a fragile head from high-speed impact while staying light, cool and comfortable.', 'Study the frog: its skull spreads impact, its eyes see wide, its skin moves air.', 'A lower, wider, ridged helmet with a wider view.'],
    blocks: [
      { t: 'sp', lab: 'The reference', h: 'Why a frog?', sub: 'It has been solving impact, vision and airflow for millions of years.', parts: [{ t: 'gal', r: '4 / 3', items: [{ img: W('biomimicry-helmet', 'frog'), cap: 'The frog' }, { img: W('biomimicry-helmet', 'inspo-1'), cap: 'Skull and eyes' }, { img: W('biomimicry-helmet', 'inspo-3'), cap: 'Skin texture' }] }] },
      { t: 'sp', lab: 'Frog to helmet', h: 'Three principles, *three decisions*', parts: [{ t: 'cmp', head: ['In the frog', 'In the helmet'], rows: [
        ['A lattice skull', 'A low, wide shell that spreads impact sideways.', 'Safety'],
        ['High, wide eyes', 'A visor that curves out at the temples.', 'Vision'],
        ['Textured skin', 'Front-to-back ridges that move air.', 'Cooling'],
      ] }] },
      { t: 'sp', lab: 'Where the force goes', h: 'Spread the hit, *don’t take it on one point*', parts: [{ t: 'fig', svg: 'impact' }] },
      { t: 'sp', lab: 'Sketches', h: 'Working it out on paper', parts: [{ t: 'steps', n: 3, r: '1 / 1', contain: true, items: [
        { img: W('biomimicry-helmet', 'sketch-2'), b: 'Low, wide profile', s: 'Closer to the head, lower centre of gravity.' },
        { img: W('biomimicry-helmet', 'sketch-3'), b: 'Wider visor', s: 'Side-on awareness in traffic.' },
        { img: W('biomimicry-helmet', 'sketch-1'), b: 'Ridged shell', s: 'Air moves without cutting holes.' },
      ] }] },
      { t: 'sp', lab: 'The concept', h: 'The concept', parts: [{ t: 'call', img: W('biomimicry-helmet', 'hero'), alt: 'Helmet concept render beside a frog', pins: [
        [14, 76, 'The reference', 'Skull, eyes and skin, studied first.'],
        [58, 48, 'Ridged shell', 'Channels run front to back for airflow.'],
        [82, 62, 'Low and wide', 'Sits close to the head and spreads the force.'],
      ] }] },
      { t: 'quote', lab: 'The rule', q: 'Every decision had to be justified by a structural principle, not by habit or taste.' },
    ],
    out: { h: 'A concept that looks different *because it works differently:* lower, wider, ridged, with a wider view.', kit: 'Biomimicry · Anatomical study · Sketching · Form exploration · 3D render', img: W('biomimicry-helmet', 'inspo-2'), alt: 'Frog reference' },
  },

  /* ───────── Future Kettle ───────── */
  'future-kettle': {
    ctx: 'Goldsmiths', one: 'A kettle designed from scratch, after 5,000 years of kettle history.',
    facts: [['Role', 'Solo designer and researcher'], ['Tools', 'Rhino, Blender'], ['Context', 'Goldsmiths, BA Design'], ['Year', '2023']],
    cover: W('future-kettle', 'hero'), coverAlt: 'Final render: two glossy black asymmetric kettles',
    stats: [['5,000', 'years of history studied'], ['4', 'eras compared'], ['3', 'drivers solved together']],
    tldr: ['The kettle has barely changed in 50 years, and it boils more water than we need.', 'Go back 5,000 years to tell what’s essential from what’s habit, then design forward.', 'A narrow, see-through kettle that nudges you towards one-cup boils.'],
    blocks: [
      { t: 'sp', lab: 'History', h: '5,000 years, *four eras*', parts: [{ t: 'tl', items: [['Ancient', 'Clay pots over fire. Contain and heat.'], ['Japan', 'Cast-iron tetsubin. The spout arrives with tea.'], ['1922', 'The heating element moves inside.'], ['Now', 'Boils too much. Barely changed in 50 years.']] }, { t: 'gap' }, { t: 'gal', n: 2, r: '2.6 / 1', contain: true, items: [{ img: W('future-kettle', 'history1'), cap: 'Historical kettles' }, { img: W('future-kettle', 'history2'), cap: 'Modern kettles' }] }] },
      { t: 'sp', lab: 'The waste', h: 'You can’t measure *what you can’t see*', parts: [{ t: 'fig', svg: 'onecup' }] },
      { t: 'sp', lab: 'Three drivers', h: 'Form, sustainability, *need*', parts: [{ t: 'cards', items: [
        { img: W('future-kettle', 'sketch1'), tag: 'Form', b: 'Sketched openly', p: 'Not forced to look like a kettle.' },
        { img: W('future-kettle', 'sketch2'), tag: 'Sustainability', b: 'Narrow and graduated', p: 'A fill line for one-cup boils.' },
        { img: W('future-kettle', 'spectrum2'), tag: 'Need', b: 'Show the water', p: 'Most kettles hide it.' },
      ] }] },
      { t: 'sp', lab: 'The design', h: 'The final kettle', parts: [{ t: 'call', img: W('future-kettle', 'hero'), alt: 'Final render of the kettle', pins: [
        [22, 55, 'Narrow and tall', 'Less surface to heat, same capacity, smaller footprint.'],
        [90, 48, 'Handle set away from the body', 'Less heat at the grip. The curve follows four fingers.'],
      ] }] },
      { t: 'quote', lab: 'The insight', q: 'Knowing how much water you’re boiling changes how much you fill it.' },
    ],
    out: { h: 'Sketches and a final 3D render. *One clear panel answers all three drivers at once.*', kit: 'Hand sketching · Rhino · Blender', img: W('future-kettle', 'hero'), alt: 'The kettle from the side', pos: '88% 50%' },
  },

  /* ───────── Ergonomic Easel ───────── */
  'ergonomic-easel': {
    ctx: 'Goldsmiths', one: 'A foldable, light sitting easel with storage, for students who move.',
    facts: [['Role', 'Solo designer and researcher'], ['Material', 'Pine'], ['Context', 'Goldsmiths, BA Design'], ['Year', '2022']],
    cover: W('ergonomic-easel', 'final2'), coverAlt: 'Render of the pine sitting easel', coverContain: true, coverBg: '#fff',
    stats: [['4', 'problems, four answers'], ['5', 'board angles'], ['3', 'folding flaps']],
    tldr: ['Students carry easels between studios, but standard ones are heavy, bulky and have no storage.', 'Design from the side of the person carrying it: fold it, roll it, store tools in it.', 'A light pine easel that folds flat, rolls and holds your tools.'],
    blocks: [
      { t: 'sp', lab: 'Starting points', h: 'A heavy easel, *and a skateboard*', parts: [{ t: 'gal', n: 2, r: '4 / 3', contain: true, keep2: true, items: [{ img: W('ergonomic-easel', 'existing'), cap: 'The standard sitting easel' }, { img: W('ergonomic-easel', 'skateboard'), cap: 'Reference: wheels that roll anywhere' }] }] },
      { t: 'sp', lab: 'Four answers', h: 'Four problems, *four answers*', parts: [{ t: 'cmp', head: ['Problem', 'Answer'], rows: [
        ['Portability', 'Folds flat, with a handle and wheels.', 'Roll it'],
        ['Ergonomics', 'Adjustable legs, board tilts to five angles.', 'Fit it'],
        ['Storage', 'A built-in tray for tools.', 'Store it'],
        ['Look and feel', 'Light pine: warm and honest.', 'Like it'],
      ] }] },
      { t: 'sp', lab: 'How it moves', h: 'Open, fold, *roll*', parts: [{ t: 'fig', svg: 'fold' }] },
      { t: 'sp', lab: 'The design', h: 'Every part has a job', parts: [{ t: 'call', img: W('ergonomic-easel', 'final2'), alt: 'Pine sitting easel with handle, wheels and storage', pins: [
        [33, 13, 'Handle', 'Carry it like a bag.'],
        [38, 34, 'Tilting board', 'Five angles for sitting and drawing.'],
        [40, 47, 'Storage tray', 'Pencils, brushes, rubber.'],
        [75, 58, 'Wheels', 'Tip it over and roll it.'],
      ] }] },
      { t: 'sp', lab: 'Drawings', h: 'Sketches to final drawings', parts: [{ t: 'gal', r: '1.42 / 1', contain: true, items: [{ img: W('ergonomic-easel', 'sketch-1') }, { img: W('ergonomic-easel', 'sketch-2') }, { img: W('ergonomic-easel', 'sketch-3') }] }, { t: 'gap' }, { t: 'sheet', r: '1.5 / 1', views: [
        { img: W('ergonomic-easel', 'final1'), cap: 'Orthographic', b: 'Flaps, stopper, handle' }, { img: W('ergonomic-easel', 'final3'), cap: 'Folded', b: 'Hinge and storage' },
      ], tb: [['Title', 'Ergonomic Easel'], ['Material', 'Pine'], ['Angles', '5'], ['Flaps', '3']] }] },
    ],
    out: { h: 'A design that answers *all four problems.*', reflect: ['Build the folding mechanism physically before finalising. A model shows friction and hinge placement faster than paper.'], kit: 'Hand sketching · Workshop · 3D render', img: W('ergonomic-easel', 'hero2'), alt: 'Easel sketch', contain: true, bg: '#fff' },
  },

  /* ───────── FinderSeeker ───────── */
  finderseeker: {
    ctx: 'Self-initiated', one: 'An item tracker: clip a tag to your keys, find them from one screen.',
    facts: [['Role', 'UI/UX Designer'], ['Platform', 'iOS'], ['Screens', '30+'], ['Year', '2025']],
    cover: W('finderseeker', 'hero'), coverAlt: 'Five FinderSeeker screens: splash, my keys, buzz, map, new tag', coverContain: true, coverBg: '#EFE8DD',
    stats: [['30+', 'screens'], ['3', 'end-to-end scenarios'], ['1', 'screen to find anything']],
    tldr: ['People lose time every day retracing their steps for keys, wallets and glasses.', 'Clip on a tag; buzz it when it’s near, map it when it’s far.', '30+ screens and a prototype covering sign-up, adding a tag and finding things.'],
    blocks: [
      { t: 'sp', lab: 'Two ways to find', h: 'Near: *buzz it*. Far: *map it.*', parts: [{ t: 'fig', svg: 'range' }] },
      { t: 'sp', lab: 'Key screens', h: 'Five screens', parts: [{ t: 'cards', contain: true, r: '1 / 2', items: [
        { img: W('finderseeker', 'splash'), tag: '01', b: 'Splash', p: 'A bear with a magnifying glass: friendly, not surveillance.' },
        { img: W('finderseeker', 'mykeys'), tag: '02', b: 'My keys', p: 'Every tag and its status in two seconds.' },
        { img: W('finderseeker', 'buzz'), tag: '03', b: 'Buzz', p: 'Rings pulse with the sound.' },
        { img: W('finderseeker', 'map'), tag: '04', b: 'Location', p: 'Last seen, and when.' },
        { img: W('finderseeker', 'newkey'), tag: '05', b: 'New tag', p: 'Name it, pick an icon.' },
      ] }] },
      { t: 'sp', lab: 'Scenarios', tint: true, h: 'Three journeys, *end to end*', parts: [{ t: 'notes', items: [['Register', 'Splash, sign-up, email check, first empty home. Fewest steps to first use.'], ['Add a tag', 'New phone, three tags, add Glasses as the fourth.'], ['Find it', 'Glasses in range: buzz. Purse out of range: map, go, buzz.']] }] },
      { t: 'vid', lab: 'Prototype', h: 'All three, clicked through', src: 'work/finderseeker/proto.mp4', poster: 'work/finderseeker/proto-poster.jpg', p: ['Registration, adding a tag, and finding things in and out of range.'] },
    ],
    out: { h: '30+ screens and a prototype that covers *every way you’d lose something.*', reflect: ['Redesign the map in the app’s warm palette, so out of range doesn’t feel like a hand-off to Google Maps.'], kit: 'Figma · iOS 16 UI Kit · Illustrator', img: W('finderseeker', 'home'), alt: 'FinderSeeker home screen', contain: true, bg: '#EFE8DD' },
  },

  /* ───────── Galaxy Buds ───────── */
  'galaxy-earbuds': {
    ctx: 'Self-initiated study', one: 'Modelling and rendering a real product until it matches the photographs.',
    facts: [['Role', 'Modelling and rendering'], ['Tools', 'Rhino, KeyShot'], ['Reference', 'Photos only'], ['Year', '2025']],
    cover: W('galaxy-earbuds', 'render'), coverAlt: 'KeyShot render of two black earbuds on a terracotta background',
    stats: [['0', 'drawings: photos only'], ['2', 'plastics under one light'], ['2', 'renders, front and back']],
    tldr: ['Can a model made only from photos match the real product?', 'Model in Rhino, light in KeyShot, and judge every surface against the photos.', 'Two photo-quality renders, compared side by side with the real thing.'],
    blocks: [
      { t: 'sp', lab: 'Before the model', h: 'Where each surface *starts and stops*', parts: [{ t: 'gal', n: 1, r: '1.36 / 1', contain: true, items: [{ img: W('galaxy-earbuds', 'sketch'), cap: 'Form and proportion study' }] }] },
      { t: 'sp', lab: 'Why surfaces matter', h: 'On gloss, *every seam shows*', sub: 'The hard part: keeping curves continuous so the highlight never breaks.', parts: [{ t: 'fig', svg: 'continuity' }] },
      { t: 'sp', lab: 'The render', h: 'What it took', parts: [{ t: 'call', img: W('galaxy-earbuds', 'render'), alt: 'Two earbuds rendered', pins: [
        [44, 26, 'Ear tip', 'A soft, matte surface against the gloss.'],
        [68, 30, 'Gloss shell', 'Highlight held, never blown out.'],
        [57, 48, 'Grille', 'Small details, true to the photos.'],
      ] }, { t: 'gap' }, { t: 'gal', n: 2, r: '754 / 514', keep2: true, items: [{ img: W('galaxy-earbuds', 'front'), cap: 'Front' }, { img: W('galaxy-earbuds', 'back'), cap: 'Back' }] }] },
    ],
    out: { h: 'Rendered in KeyShot and *compared side by side* with the photographs.', chips: ['Surface modelling', 'Curve continuity', 'Materials', 'Studio lighting'], kit: 'Rhino · KeyShot', img: W('galaxy-earbuds', 'front'), alt: 'Front render' },
  },
};
