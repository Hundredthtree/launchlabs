import './styles.css';

const services = [
  {
    name: 'ECU & TCU Tuning',
    detail: 'Custom calibration work for sharper power delivery, drivability, transmission behavior, and platform-specific performance.',
    icon: 'gauge',
  },
  {
    name: 'In-House ECU Unlocks',
    detail: 'Same-day ECU unlock support with an average one-hour turnaround promoted across Launch Labs locations.',
    icon: 'chip',
  },
  {
    name: 'Stage 1 / 2 / 3',
    detail: 'Launch Labs custom Stage 1, Stage 2, and Stage 3 tuning paths for street-focused and build-focused cars.',
    icon: 'spark',
  },
  {
    name: 'Premium Maintenance',
    detail: 'Maintenance support built around performance cars before, during, and after calibration work.',
    icon: 'check',
  },
  {
    name: 'Performance Parts',
    detail: 'Part pairing and install planning for power, response, cooling, exhaust flow, and supporting hardware.',
    icon: 'wheel',
  },
  {
    name: 'BMW / M Platforms',
    detail: 'BMW and M-platform tuning focus, including B58 content highlighted on the Launch Labs profile.',
    icon: 'chip',
  },
  {
    name: 'AMG 43 / 53',
    detail: 'Mercedes-AMG 43 and 53 platform support for tuning and performance packages.',
    icon: 'gauge',
  },
  {
    name: 'AMG 63',
    detail: 'AMG 63 tuning and build support, including Stage 3 AMG content visible in the Launch Labs feed.',
    icon: 'spray',
  },
  {
    name: 'Diagnostics',
    detail: 'Pre-tune checks, issue isolation, scan support, and validation before the car leaves.',
    icon: 'shine',
  },
  {
    name: 'Worldwide Quality',
    detail: 'The Launch Labs profile positions the shop around unbeatable quality for performance customers worldwide.',
    icon: 'truck',
  },
];

const builds = [
  {
    title: 'In-House Unlock',
    subtitle: 'ECU unlock and full build',
    category: 'ECU',
    image: '/media/launchlabs/gallery-in-house-clean.jpg',
    href: 'https://www.instagram.com/launchlabs_/',
    copy:
      'Launch Labs post content highlights in-house ECU unlock work paired with a full build path.',
  },
  {
    title: 'Same-Day Unlock',
    subtitle: 'One-hour average turnaround',
    category: 'Unlock',
    image: '/media/launchlabs/shop-car.jpg',
    href: 'https://www.instagram.com/launchlabs_/',
    copy:
      'Public Launch Labs graphics promote same-day in-house ECU unlocks with an average one-hour turnaround.',
  },
  {
    title: 'Power Package',
    subtitle: 'More power, better deal',
    category: 'Offer',
    image: '/media/launchlabs/gallery-bmw-rear-clean.jpg',
    href: 'https://www.instagram.com/launchlabs_/',
    copy:
      'Launch Labs offer creative promotes custom Stage 1 or Stage 2 tune packages with ECU unlock savings.',
  },
  {
    title: 'Stage 3 AMGs',
    subtitle: 'Mercedes-AMG build content',
    category: 'AMG',
    image: '/media/launchlabs/gallery-stage3-amgs-clean.jpg',
    href: 'https://www.instagram.com/launchlabs_/',
    copy:
      'Launch Labs feed content includes Stage 3 AMG creative aimed at serious Mercedes performance work.',
  },
  {
    title: 'BMW / M Focus',
    subtitle: 'Tuning platform highlights',
    category: 'BMW',
    image: '/media/launchlabs/amg-wheel-sedan.jpg',
    href: 'https://www.instagram.com/launchlabs_/',
    copy:
      'The profile highlights BMW/M and B58 content as core Launch Labs tuning categories.',
  },
  {
    title: 'Performance Shop',
    subtitle: 'Houston, Villa Park, Naples, Boise',
    category: 'Shop',
    image: '/media/launchlabs/shop-car.jpg',
    href: 'https://www.instagram.com/launchlabs_/',
    copy:
      'A public Launch Labs reel lists in-house ECU unlock locations in Houston, Villa Park, Naples, and Boise.',
  },
  {
    title: 'Exotic Road Tune',
    subtitle: 'Supercar platform highlights',
    category: 'Exotics',
    image: '/media/launchlabs/gallery-mclaren-road-clean.jpg',
    href: 'https://www.instagram.com/launchlabs_/',
    copy:
      'Launch Labs public content and profile highlights position the shop around exotic performance platforms.',
  },
  {
    title: 'McLaren Road Tune',
    subtitle: 'Stage 1 supercar content',
    category: 'McLaren',
    image: '/media/launchlabs/gallery-mclaren-road-clean.jpg',
    href: 'https://www.instagram.com/launchlabs_/',
    copy:
      'Public Launch Labs road content shows Stage 1 McLaren performance work alongside the shop platform categories.',
  },
  {
    title: 'TCU Calibration',
    subtitle: 'Transmission behavior and response',
    category: 'TCU',
    image: '/media/launchlabs/gallery-in-house-clean.jpg',
    href: 'https://www.instagram.com/launchlabs_/',
    copy:
      'The Launch Labs bio explicitly positions the brand around ECU and TCU tuning.',
  },
];

const processSteps = [
  ['01', 'Inspect', 'Check the vehicle, current mods, goals, and required unlock or maintenance path.'],
  ['02', 'Unlock', 'Handle in-house ECU unlock support when the platform requires it.'],
  ['03', 'Tune', 'Build the right ECU or TCU calibration around the car and hardware.'],
  ['04', 'Validate', 'Road test, scan, and confirm the car is ready before handoff.'],
];

const sourceNotes = [
  'Profile source: @launchlabs_ public Instagram bio lists ECU & TCU Tuning, Premium Maintenance, Performance Parts, and Unbeatable quality WORLDWIDE.',
  'Visible profile highlights include In House Unlock, Aston Martin, Lamborghini, Porsche, BMW/M, Tunes, B58, AMG 43/53, and AMG 63.',
  'Profile snapshot used during conversion: 2,012 followers and 31 following.',
  'A public Launch Labs reel says in-house ECU unlocks are available in Houston, Texas; Villa Park, Illinois; Naples, Florida; and Boise, Idaho.',
];

function icon(name) {
  const common = 'viewBox="0 0 48 48" aria-hidden="true" focusable="false"';
  const icons = {
    gauge: `<svg ${common}><path d="M8 31a16 16 0 0 1 32 0"/><path d="M24 31l8-12"/><path d="M14 31h3M31 31h3M17 19l2 2M31 21l2-2"/></svg>`,
    chip: `<svg ${common}><rect x="14" y="14" width="20" height="20" rx="2"/><path d="M19 8v6M24 8v6M29 8v6M19 34v6M24 34v6M29 34v6M8 19h6M8 24h6M8 29h6M34 19h6M34 24h6M34 29h6"/></svg>`,
    wrap: `<svg ${common}><path d="M12 30l24-14v18L12 34z"/><path d="M18 27l13-7"/></svg>`,
    spray: `<svg ${common}><path d="M15 14h16v8H15zM20 22v18h6V22"/><path d="M32 24l7 3M32 30l7 1M32 36l6-2"/></svg>`,
    wheel: `<svg ${common}><circle cx="24" cy="24" r="15"/><circle cx="24" cy="24" r="4"/><path d="M24 9v11M24 28v11M9 24h11M28 24h11M14 14l8 8M26 26l8 8M34 14l-8 8M22 26l-8 8"/></svg>`,
    spark: `<svg ${common}><path d="M24 7l3 12 12 3-12 3-3 12-3-12-12-3 12-3z"/><path d="M38 8l1 5 5 1-5 1-1 5-1-5-5-1 5-1z"/></svg>`,
    tint: `<svg ${common}><path d="M11 32l7-16h19l-7 16z"/><path d="M23 17l-6 14"/></svg>`,
    check: `<svg ${common}><rect x="13" y="9" width="22" height="30" rx="2"/><path d="M19 18h10M19 25h10M19 32h10M15 18l2 2 4-5M15 25l2 2 4-5"/></svg>`,
    shine: `<svg ${common}><path d="M24 7l3 10 10 3-10 3-3 10-3-10-10-3 10-3z"/><path d="M37 30l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/></svg>`,
    truck: `<svg ${common}><path d="M7 16h25v16H7zM32 22h6l4 5v5H32z"/><circle cx="16" cy="34" r="3"/><circle cx="36" cy="34" r="3"/></svg>`,
  };
  return `<span class="icon icon-${name}">${icons[name] || icons.spark}</span>`;
}

function buildCard(build, index) {
  return `
    <article class="build-card" data-build-index="${index}">
      <img src="${build.image}" alt="${build.title} - ${build.subtitle}" loading="${index < 3 ? 'eager' : 'lazy'}" />
      <div class="build-shade"></div>
      <div class="build-meta"><span aria-hidden="true">///</span> ${build.category}</div>
      <div class="build-copy">
        <h3>${build.title}</h3>
        <p>${build.subtitle}</p>
        <button class="text-link build-detail" type="button" data-build-index="${index}">See build details</button>
      </div>
    </article>
  `;
}

function render() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <header class="site-header" data-header>
      <a class="brand" href="#top" aria-label="Launch Labs home">
        <span class="brand-main">Launch</span>
        <span class="brand-sub">Labs</span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle>
        <span></span><span></span>
      </button>
      <nav class="nav" data-nav>
        <a href="#services">Services</a>
        <a href="#builds">Builds</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="header-social" href="https://www.instagram.com/launchlabs_/" target="_blank" rel="noreferrer">@launchlabs_</a>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-media">
          <video
            id="hero-video"
            aria-label="Launch Labs performance tuning hero video"
            src="/media/launchlabs/hero-unlock.mp4"
            poster="/media/launchlabs/gallery-in-house-clean.jpg"
            autoplay
            muted
            loop
            playsinline
          ></video>
          <div class="video-scrim"></div>
        </div>
        <div class="hero-content">
          <div class="hero-text">
            <h1 id="hero-title">Launch Labs</h1>
            <p>ECU and TCU tuning, same-day unlocks, premium maintenance, performance parts, and platform-focused calibration.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#contact">Book a tune</a>
              <a class="button button-secondary" href="#builds">View performance work</a>
            </div>
          </div>
          <div class="hero-panel" aria-label="Instagram profile snapshot">
            <img src="/media/launchlabs/profile.jpg" alt="Launch Labs Instagram profile image" />
            <div>
              <strong>ECU & TCU tuning</strong>
              <span>2,012 followers from @launchlabs_</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section intro-band" aria-label="Profile details">
        <div class="intro-line">
          <span>ECU & TCU Tuning</span>
          <span>2,012 followers</span>
          <span>31 following</span>
          <span>4 unlock locations</span>
        </div>
      </section>

      <section class="section services-section" id="services" aria-labelledby="services-title">
        <div class="section-head split">
          <div>
            <p class="section-pretitle">What We Do</p>
            <h2 id="services-title">Calibration, unlocks, and performance support.</h2>
          </div>
          <p>
            Launch Labs is positioned around ECU and TCU tuning, premium maintenance, performance parts,
            same-day unlocks, and platform-specific performance work.
          </p>
        </div>
        <div class="service-rail">
          ${services
            .map(
              (service) => `
                <article class="service-item">
                  ${icon(service.icon)}
                  <div>
                    <h3>${service.name}</h3>
                    <p>${service.detail}</p>
                  </div>
                </article>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="section process-section" id="process" aria-labelledby="process-title">
        <div class="section-head split">
          <h2 id="process-title">From unlock to validated tune.</h2>
          <p>Clear intake, platform-aware tuning, maintenance checks, and final validation before handoff.</p>
        </div>
        <div class="process-grid">
          ${processSteps
            .map(
              ([number, title, copy]) => `
                <article class="process-step">
                  <span>${number}</span>
                  <h3>${title}</h3>
                  <p>${copy}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="section builds-section" id="builds" aria-labelledby="builds-title">
        <div class="section-head builds-head">
          <div>
            <p class="section-pretitle">Launch Labs</p>
            <h2 id="builds-title">Recent builds</h2>
            <p>Real tuning, unlock, and performance content pulled from public @launchlabs_ posts and profile details.</p>
          </div>
          <div class="build-actions">
            <a class="button button-primary compact" href="https://www.instagram.com/launchlabs_/" target="_blank" rel="noreferrer">Open Instagram</a>
            <button class="button button-secondary compact" type="button" data-first-build>See build details</button>
          </div>
        </div>
        <div class="build-grid">
          ${builds.map(buildCard).join('')}
        </div>
      </section>

      <section class="section source-section" aria-labelledby="source-title">
        <div>
          <p class="section-pretitle">Source-backed content</p>
          <h2 id="source-title">Built from the Launch Labs feed.</h2>
        </div>
        <ul>
          ${sourceNotes.map((note) => `<li>${note}</li>`).join('')}
        </ul>
      </section>

      <section class="section contact-section" id="contact" aria-labelledby="contact-title">
        <div class="contact-hero">
          <div>
            <p class="section-pretitle">Launch Labs</p>
            <h2 id="contact-title">Ready for the next tune?</h2>
            <p>
              Send the vehicle, current mods, service need, and timeline. Launch Labs points customers
              to DM for tuning, unlock, maintenance, and performance appointments.
            </p>
          </div>
          <div class="contact-service-list" aria-label="Services offered">
            ${services.map((service) => `<span>${service.name}</span>`).join('')}
          </div>
        </div>

        <form class="quote-form" data-quote-form>
          <div class="form-title">
            <h3>Let us build the request.</h3>
            <p>This form prepares a tune brief for Launch Labs. Public reel copy lists unlock locations in Houston, Villa Park, Naples, and Boise.</p>
          </div>
          <label>
            <span>Service needed</span>
            <select name="service" required>
              <option value="">Select a service</option>
              ${services.map((service) => `<option>${service.name}</option>`).join('')}
            </select>
          </label>
          <label>
            <span>Vehicle</span>
            <input name="vehicle" type="text" placeholder="Year / Make / Model" required />
          </label>
          <label>
            <span>Timeline</span>
            <input name="timeline" type="text" placeholder="ASAP / flexible / date" required />
          </label>
          <label>
            <span>Contact info</span>
            <input name="contact" type="text" placeholder="Name and email or Instagram" required />
          </label>
          <label class="wide-field">
            <span>Build notes</span>
            <textarea name="notes" rows="4" placeholder="Current mods, goals, symptoms, transport needs, or quote details"></textarea>
          </label>
          <div class="form-actions">
            <button class="button button-primary" type="submit">Request a quote</button>
            <a class="button button-secondary" href="https://www.instagram.com/launchlabs_/" target="_blank" rel="noreferrer">DM @launchlabs_</a>
          </div>
          <p class="form-status" data-form-status aria-live="polite"></p>
        </form>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-brand">
        <span class="brand-main">Launch</span>
        <span class="brand-sub">Labs</span>
        <p>ECU and TCU tuning. Performance driven.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="#services">Services</a>
        <a href="#builds">Builds</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="https://www.instagram.com/launchlabs_/" target="_blank" rel="noreferrer">@launchlabs_</a>
    </footer>

    <dialog class="build-dialog" data-build-dialog>
      <button class="dialog-close" type="button" aria-label="Close build details" data-dialog-close>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
      <div class="dialog-media"><img data-dialog-image alt="" /></div>
      <div class="dialog-body">
        <p class="section-pretitle" data-dialog-category></p>
        <h2 data-dialog-title></h2>
        <p data-dialog-subtitle></p>
        <p data-dialog-copy></p>
        <a class="button button-primary compact" data-dialog-link target="_blank" rel="noreferrer">Open post</a>
      </div>
    </dialog>
  `;
}

function setupInteractions() {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const dialog = document.querySelector('[data-build-dialog]');
  const form = document.querySelector('[data-quote-form]');

  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  });

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const openBuild = (index) => {
    const build = builds[index];
    if (!build) return;
    dialog.querySelector('[data-dialog-image]').src = build.image;
    dialog.querySelector('[data-dialog-image]').alt = `${build.title} ${build.subtitle}`;
    dialog.querySelector('[data-dialog-category]').textContent = build.category;
    dialog.querySelector('[data-dialog-title]').textContent = build.title;
    dialog.querySelector('[data-dialog-subtitle]').textContent = build.subtitle;
    dialog.querySelector('[data-dialog-copy]').textContent = build.copy;
    dialog.querySelector('[data-dialog-link]').href = build.href;
    dialog.showModal();
  };

  document.querySelectorAll('[data-build-index]').forEach((item) => {
    item.addEventListener('click', (event) => {
      const button = event.target.closest('.build-detail');
      if (button || event.currentTarget.classList.contains('build-card')) {
        openBuild(Number(event.currentTarget.dataset.buildIndex));
      }
    });
  });

  document.querySelector('[data-first-build]').addEventListener('click', () => openBuild(0));
  document.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const status = document.querySelector('[data-form-status]');
    status.textContent = `Tune brief ready: ${data.service} for ${data.vehicle}. Send it to @launchlabs_ with your timeline: ${data.timeline}.`;
    form.classList.add('is-complete');
  });

}

render();
setupInteractions();
