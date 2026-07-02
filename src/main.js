import './styles.css';

const services = [
  {
    name: 'Performance Tuning',
    detail: 'Stage 1, Stage 2, Stage 3, flex fuel, flame features, drivability, and custom calibration work.',
    icon: 'gauge',
  },
  {
    name: 'ECU Unlocks',
    detail: 'Same-day in-house ECU unlock support promoted through Launch Labs appointments.',
    icon: 'chip',
  },
  {
    name: 'Wraps',
    detail: 'Color changes, exterior styling, and full appearance transformations.',
    icon: 'wrap',
  },
  {
    name: 'Powder Coating',
    detail: 'Wheel and component finishing with a cleaner, more durable look.',
    icon: 'spray',
  },
  {
    name: 'Wheels & Tires',
    detail: 'Wheel repair, fitment, tire setups, lowering springs, and alignment support.',
    icon: 'wheel',
  },
  {
    name: 'Starlight Headliners',
    detail: 'Interior atmosphere upgrades for custom luxury builds.',
    icon: 'spark',
  },
  {
    name: 'Tints',
    detail: 'Privacy, heat rejection, and clean exterior finishing.',
    icon: 'tint',
  },
  {
    name: 'Inspections',
    detail: 'Diagnostics, leak repair, maintenance checks, and road-ready validation.',
    icon: 'check',
  },
  {
    name: 'Detailing',
    detail: 'Interior and exterior details, paint correction, and final delivery prep.',
    icon: 'shine',
  },
  {
    name: 'Enclosed Transport',
    detail: 'Local and nationwide transport for high-value vehicles.',
    icon: 'truck',
  },
];

const builds = [
  {
    title: 'McLaren 720S',
    subtitle: 'Stage 2 tuning package',
    category: 'Tuning',
    image: '/media/build-mclaren-720s.jpg',
    href: 'https://www.instagram.com/p/DQu2K4JD0H4/',
    copy:
      'Stage 2 tuning with optimized engine performance, sharper throttle response, and a calibrated flame feature.',
  },
  {
    title: 'Corvette Z06',
    subtitle: 'F1 exhaust installation',
    category: 'Exhaust',
    image: '/media/hero-z06-f1-exhaust.jpg',
    href: 'https://www.instagram.com/reel/DaQ6FcGBFRb/',
    copy:
      'Full F1 exhaust system installation built for an aggressive wide-open-throttle tone and refined normal driving.',
  },
  {
    title: 'Same-Day BMW',
    subtitle: 'ECU unlocks',
    category: 'ECU',
    image: '/media/build-ecu-unlock.jpg',
    href: 'https://www.instagram.com/reel/DaTQOioOeWu/',
    copy:
      'In-house ECU unlocks promoted with an average one-hour turnaround through Launch Labs appointments.',
  },
  {
    title: 'Mercedes C63 / CLS63',
    subtitle: 'Stage 3 builds',
    category: 'Build',
    image: '/media/build-stage3-mercedes.jpg',
    href: 'https://www.instagram.com/reel/DaLgtvxOl5O/',
    copy:
      'C63 S AMG and CLS63 S AMG builds with upgraded turbochargers, built engine work, built transmission, and ethanol sensor support.',
  },
  {
    title: 'Dravit Grey G82 M4',
    subtitle: 'Carbon and exhaust transformation',
    category: 'Build',
    image: '/media/build-bmw-m4.jpg',
    href: 'https://www.instagram.com/reel/DZxb3YguZXm/',
    copy:
      'Carbon fiber overhaul, midpipe, downpipes, and custom tuning for a sharper G82 M4 presence.',
  },
  {
    title: 'Porsche 718',
    subtitle: 'Exhaust, diffuser, and detail',
    category: 'Exhaust',
    image: '/media/build-porsche-718.jpg',
    href: 'https://www.instagram.com/p/DKx7XRlAOJ7/',
    copy:
      'Custom exhaust and diffuser work finished with a complimentary interior and exterior detail.',
  },
  {
    title: 'Huracan',
    subtitle: 'Enclosed transport',
    category: 'Transport',
    image: '/media/build-huracan-transport.jpg',
    href: 'https://www.instagram.com/p/DOl5SGrkc6K/',
    copy:
      'Enclosed trailer transport offered for local and nationwide vehicle moves.',
  },
  {
    title: 'G8X Duo',
    subtitle: 'Exterior and performance work',
    category: 'Appearance',
    image: '/media/build-g8x-duo.jpg',
    href: 'https://www.instagram.com/p/DZGJumZAc-S/',
    copy:
      'Performance and appearance upgrades with carbon fiber, lowering springs, and handling-focused setup work.',
  },
  {
    title: 'AMG E63 S',
    subtitle: 'Leak repair and Stage 2',
    category: 'Diagnostics',
    image: '/media/build-e63-stage2.jpg',
    href: 'https://www.instagram.com/p/DXuZ3ynESrG/',
    copy:
      'Coolant leak diagnosis and repair paired with Stage 2 tuning and upgraded performance parts.',
  },
];

const processSteps = [
  ['01', 'Diagnose', 'Inspect, scan, and road test to define the right plan.'],
  ['02', 'Build', 'Install the right parts with clean, documented workmanship.'],
  ['03', 'Test', 'Tune, verify, and validate the result before handoff.'],
  ['04', 'Deliver', 'Walk through the finished work and get the car road-ready.'],
];

const sourceNotes = [
  'Profile source: @lmkgarage public Instagram bio lists wraps, powder coating, wheels, tires, starlight headliners, tints, tuning, performance, inspections, detailing, and more.',
  'Recent post source: Z06 F1 exhaust, same-day ECU unlocks, McLaren 720S Stage 2 tuning, Mercedes Stage 3 builds, G82 M4 transformation, Porsche 718 exhaust and diffuser, Huracan enclosed transport.',
  'Profile snapshot used during build: 1,663 followers, 20 following, 149 posts.',
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
      <a class="brand" href="#top" aria-label="LMK Garage home">
        <span class="brand-main">LMK</span>
        <span class="brand-sub">Garage</span>
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
      <a class="header-social" href="https://www.instagram.com/lmkgarage/" target="_blank" rel="noreferrer">@lmkgarage</a>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-media">
          <video
            id="hero-video"
            aria-label="Corvette Z06 F1 exhaust hero video"
            src="/media/hero-z06-f1-exhaust.mp4"
            poster="/media/hero-z06-f1-exhaust.jpg"
            autoplay
            muted
            loop
            playsinline
          ></video>
          <div class="video-scrim"></div>
        </div>
        <div class="hero-content">
          <div class="hero-text">
            <h1 id="hero-title">Lmk Garage</h1>
            <p>Performance tuning, wraps, wheels, tires, detailing, inspections, starlight headliners, and custom builds.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#contact">Book a build</a>
              <a class="button button-secondary" href="#builds">View recent work</a>
            </div>
          </div>
          <div class="hero-panel" aria-label="Instagram profile snapshot">
            <img src="/media/lmk-profile.jpg" alt="LMK Garage Instagram profile image" />
            <div>
              <strong>Full auto shop</strong>
              <span>149 posts from @lmkgarage</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section intro-band" aria-label="Profile details">
        <div class="intro-line">
          <span>Automotive Repair Shop</span>
          <span>1,663 followers</span>
          <span>20 following</span>
          <span>@launchlabs_ appointments</span>
        </div>
      </section>

      <section class="section services-section" id="services" aria-labelledby="services-title">
        <div class="section-head split">
          <div>
            <p class="section-pretitle">What We Do</p>
            <h2 id="services-title">Precision work across the whole car.</h2>
          </div>
          <p>
            LMK Garage presents itself as a full auto shop: tuning and performance, appearance upgrades,
            wheel and tire work, inspections, detailing, and enclosed transport.
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
          <h2 id="process-title">From quote to road-ready.</h2>
          <p>Clear intake, focused workmanship, final testing, and delivery with the build goals documented.</p>
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
            <p class="section-pretitle">LMK Garage</p>
            <h2 id="builds-title">Recent builds</h2>
            <p>Real project content pulled from public @lmkgarage posts and captions.</p>
          </div>
          <div class="build-actions">
            <a class="button button-primary compact" href="https://www.instagram.com/lmkgarage/" target="_blank" rel="noreferrer">Open Instagram</a>
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
          <h2 id="source-title">Built from their Instagram feed.</h2>
        </div>
        <ul>
          ${sourceNotes.map((note) => `<li>${note}</li>`).join('')}
        </ul>
      </section>

      <section class="section contact-section" id="contact" aria-labelledby="contact-title">
        <div class="contact-hero">
          <div>
            <p class="section-pretitle">LMK Garage</p>
            <h2 id="contact-title">Ready for the next build?</h2>
            <p>
              Send the vehicle, service need, and timeline. Their captions repeatedly direct customers
              to DM for quotes and Launch Labs appointments.
            </p>
          </div>
          <div class="contact-service-list" aria-label="Services offered">
            ${services.map((service) => `<span>${service.name}</span>`).join('')}
          </div>
        </div>

        <form class="quote-form" data-quote-form>
          <div class="form-title">
            <h3>Let us build the request.</h3>
            <p>No phone number or address was present in the accessible Instagram source, so this form prepares the brief and points to Instagram DM.</p>
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
            <a class="button button-secondary" href="https://www.instagram.com/lmkgarage/" target="_blank" rel="noreferrer">DM @lmkgarage</a>
          </div>
          <p class="form-status" data-form-status aria-live="polite"></p>
        </form>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-brand">
        <span class="brand-main">LMK</span>
        <span class="brand-sub">Garage</span>
        <p>Full auto shop. Performance driven.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="#services">Services</a>
        <a href="#builds">Builds</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="https://www.instagram.com/lmkgarage/" target="_blank" rel="noreferrer">@lmkgarage</a>
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
    status.textContent = `Quote brief ready: ${data.service} for ${data.vehicle}. Send it to @lmkgarage with your timeline: ${data.timeline}.`;
    form.classList.add('is-complete');
  });

}

render();
setupInteractions();
