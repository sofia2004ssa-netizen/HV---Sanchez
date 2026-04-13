/* ═══════════════════════════════════════════════════════════════
   UI TRANSLATIONS  (static labels & short strings)
═══════════════════════════════════════════════════════════════ */
const t = {
  es: {
    'nav.about':          'Sobre mí',
    'nav.experience':     'Experiencia',
    'nav.education':      'Educación',
    'nav.skills':         'Habilidades',
    'nav.contact':        'Contacto',

    'hero.eyebrow':       'Ingeniera Química',
    'hero.bio':           'Ingeniera química bilingüe con un fuerte interés en la sostenibilidad. En búsqueda de prácticas profesionales donde pueda aplicar mis conocimientos técnicos, atención al detalle y pensamiento analítico.',
    'hero.cta_about':     'Conoce mi perfil',
    'hero.cta_contact':   'Contactar',

    'about.heading':           'Perfil Profesional',
    'about.bio':               'Ingeniera química bilingüe, con un fuerte interés en la sostenibilidad. En búsqueda de prácticas profesionales, donde pueda aplicar tanto mis conocimientos técnicos como mi atención al detalle y pensamiento analítico. Hablo inglés (C1) y alemán (B2), lista para contribuir en equipos multidisciplinarios.',
    'about.stat_semester':     'Semestre en curso',
    'about.stat_roles':        'Roles académicos',
    'about.stat_scholarships': 'Becas de excelencia',
    'about.contact_heading':   'Contacto',

    'exp.heading':        'Experiencia Relevante',
    'edu.heading':        'Formación Académica',

    'skills.heading':       'Habilidades',
    'skills.technical':     '⚗️ Técnicas',
    'skills.soft':          '🤝 Blandas',
    'skills.languages_label': '🌐 Idiomas',
    'skills.achievements':  '🏆 Logros Académicos',

    'contact.heading':    '¿Hablamos?',
    'contact.sub':        'Abierta a prácticas profesionales y oportunidades de colaboración',
    'contact.email':      'Email',
    'contact.phone':      'Teléfono',
    'contact.linkedin':   'Ver perfil →',

    'footer.rights':      'Todos los derechos reservados',
  },

  en: {
    'nav.about':          'About',
    'nav.experience':     'Experience',
    'nav.education':      'Education',
    'nav.skills':         'Skills',
    'nav.contact':        'Contact',

    'hero.eyebrow':       'Chemical Engineer',
    'hero.bio':           'Bilingual chemical engineer with a strong interest in sustainability. Seeking professional internships where I can apply technical knowledge, attention to detail, and analytical thinking.',
    'hero.cta_about':     'View my profile',
    'hero.cta_contact':   'Get in touch',

    'about.heading':           'Professional Profile',
    'about.bio':               'Bilingual chemical engineer with a strong interest in sustainability. Seeking professional internships where I can apply both my technical knowledge and my attention to detail and analytical thinking. I speak English (C1) and German (B2), ready to contribute in multidisciplinary teams.',
    'about.stat_semester':     'Semester in progress',
    'about.stat_roles':        'Academic roles',
    'about.stat_scholarships': 'Excellence scholarships',
    'about.contact_heading':   'Contact Info',

    'exp.heading':        'Relevant Experience',
    'edu.heading':        'Academic Background',

    'skills.heading':       'Skills',
    'skills.technical':     '⚗️ Technical',
    'skills.soft':          '🤝 Soft Skills',
    'skills.languages_label': '🌐 Languages',
    'skills.achievements':  '🏆 Academic Achievements',

    'contact.heading':    "Let's Talk",
    'contact.sub':        'Open to internships and collaboration opportunities',
    'contact.email':      'Email',
    'contact.phone':      'Phone',
    'contact.linkedin':   'View profile →',

    'footer.rights':      'All rights reserved',
  },

  de: {
    'nav.about':          'Über mich',
    'nav.experience':     'Erfahrung',
    'nav.education':      'Bildung',
    'nav.skills':         'Fähigkeiten',
    'nav.contact':        'Kontakt',

    'hero.eyebrow':       'Chemieingenieurin',
    'hero.bio':           'Zweisprachige Chemieingenieurin mit starkem Interesse an Nachhaltigkeit. Ich suche ein Berufspraktikum, bei dem ich technisches Wissen, Detailgenauigkeit und analytisches Denken einbringen kann.',
    'hero.cta_about':     'Mein Profil',
    'hero.cta_contact':   'Kontakt aufnehmen',

    'about.heading':           'Berufliches Profil',
    'about.bio':               'Zweisprachige Chemieingenieurin mit starkem Interesse an Nachhaltigkeit. Ich suche ein Berufspraktikum, bei dem ich sowohl mein technisches Wissen als auch meine Detailgenauigkeit und mein analytisches Denken einbringen kann. Ich spreche Englisch (C1) und Deutsch (B2) und bin bereit, in multidisziplinären Teams mitzuwirken.',
    'about.stat_semester':     'Semester im Gange',
    'about.stat_roles':        'Akademische Rollen',
    'about.stat_scholarships': 'Exzellenzstipendien',
    'about.contact_heading':   'Kontaktdaten',

    'exp.heading':        'Relevante Erfahrung',
    'edu.heading':        'Ausbildung',

    'skills.heading':       'Fähigkeiten',
    'skills.technical':     '⚗️ Technisch',
    'skills.soft':          '🤝 Soft Skills',
    'skills.languages_label': '🌐 Sprachen',
    'skills.achievements':  '🏆 Akademische Leistungen',

    'contact.heading':    'Sprechen wir!',
    'contact.sub':        'Offen für Praktika und Kooperationsmöglichkeiten',
    'contact.email':      'E-Mail',
    'contact.phone':      'Telefon',
    'contact.linkedin':   'Profil ansehen →',

    'footer.rights':      'Alle Rechte vorbehalten',
  },
};

/* ═══════════════════════════════════════════════════════════════
   CV DATA  (fully trilingual)
═══════════════════════════════════════════════════════════════ */
const cv = {

  /* ── EXPERIENCE ─────────────────────────────────────────── */
  experience: [
    {
      role:   { es: 'Monitora de Operaciones de Transferencia de Calor I', en: 'Heat Transfer Operations Monitor I', de: 'Tutorin für Wärmeübertragungsoperationen I' },
      org:    'Universidad Jorge Tadeo Lozano',
      period: { es: 'Julio 2025 – Noviembre 2025', en: 'July 2025 – November 2025', de: 'Juli 2025 – November 2025' },
      bullets: {
        es: ['Asistencia personalizada a estudiantes con dudas sobre los temas de la asignatura, obteniendo generalmente una retroalimentación positiva.'],
        en: ['Personalized assistance to students with subject-related questions, generally receiving positive feedback.'],
        de: ['Persönliche Betreuung von Studierenden bei fachbezogenen Fragen, mit überwiegend positivem Feedback.'],
      },
    },
    {
      role:   { es: 'Representante Estudiantil', en: 'Student Representative', de: 'Studentenvertreterin' },
      org:    'Universidad Jorge Tadeo Lozano',
      period: { es: '2024 – 2025', en: '2024 – 2025', de: '2024 – 2025' },
      bullets: {
        es: [
          'Impulsó el Centro de Estudios de Ingenierías de Procesos (CEIP) de la universidad.',
          'Conformación de comités de organización entre estudiantes y directivas universitarias.',
        ],
        en: [
          'Promoted the Process Engineering Studies Center (CEIP) at the university.',
          'Formed organizational committees between students and university administration.',
        ],
        de: [
          'Förderung des Zentrums für Prozessingenieurwesen (CEIP) der Universität.',
          'Aufbau von Organisationsausschüssen zwischen Studierenden und Universitätsleitung.',
        ],
      },
    },
    {
      role:   { es: 'Monitora de Centro de Excelencia I', en: 'Excellence Center Monitor I', de: 'Tutorin des Exzellenzzentrums I' },
      org:    'Universidad Jorge Tadeo Lozano',
      period: { es: 'Julio 2024 – Mayo 2025', en: 'July 2024 – May 2025', de: 'Juli 2024 – Mai 2025' },
      bullets: {
        es: [
          'Asistencia personalizada a estudiantes con bajo rendimiento académico.',
          'Diseño de vías de apoyo académico para estudiantes con dificultades.',
          'Recepción positiva por parte de la mayoría de los estudiantes.',
        ],
        en: [
          'Personalized assistance to underperforming students.',
          'Designed academic support pathways for struggling students.',
          'Positive reception from the majority of students.',
        ],
        de: [
          'Individuelle Betreuung leistungsschwacher Studierender.',
          'Entwicklung akademischer Unterstützungswege für schwächere Studierende.',
          'Überwiegend positive Resonanz der Studierenden.',
        ],
      },
    },
    {
      role:   { es: 'Participante de Semillero de Investigación', en: 'Research Seedbed Participant', de: 'Teilnehmerin am Forschungsseminar' },
      org:    'Universidad Jorge Tadeo Lozano',
      period: { es: '2023 – Presente', en: '2023 – Present', de: '2023 – Heute' },
      bullets: {
        es: [
          'Desarrollo de un material innovador a partir de residuos vegetales.',
          'Investigación centrada en la valorización de biomasa residual para soluciones sostenibles.',
        ],
        en: [
          'Development of an innovative material from plant residues.',
          'Research focused on residual biomass valorization for sustainable solutions.',
        ],
        de: [
          'Entwicklung eines innovativen Werkstoffs aus pflanzlichen Reststoffen.',
          'Forschung zur Verwertung von Restbiomasse für nachhaltige Lösungen.',
        ],
      },
    },
    {
      role:   { es: 'Monitora Académica I', en: 'Academic Monitor I', de: 'Akademische Tutorin I' },
      org:    'Universidad Jorge Tadeo Lozano',
      period: { es: 'Julio 2023 – Mayo 2024', en: 'July 2023 – May 2024', de: 'Juli 2023 – Mai 2024' },
      bullets: {
        es: [
          'Tutorías a estudiantes en la asignatura de Física I con retroalimentación generalmente positiva.',
          'Diseño de un curso virtual de matemáticas básicas como recurso de nivelación académica.',
        ],
        en: [
          'Tutoring students in Physics I, generally receiving positive feedback.',
          'Designed a virtual basic mathematics course as an academic leveling resource.',
        ],
        de: [
          'Nachhilfe für Studierende in Physik I mit überwiegend positivem Feedback.',
          'Entwicklung eines virtuellen Grundmathematikkurses zur akademischen Nivellierung.',
        ],
      },
    },
  ],

  /* ── EDUCATION ──────────────────────────────────────────── */
  education: [
    {
      type:        { es: 'Educación Superior', en: 'Higher Education', de: 'Hochschulbildung' },
      degree:      { es: 'Ingeniería Química', en: 'Chemical Engineering', de: 'Chemieingenieurwesen' },
      institution: 'Universidad Jorge Tadeo Lozano',
      period:      { es: '2022 – Presente · 8° semestre', en: '2022 – Present · 8th semester', de: '2022 – Heute · 8. Semester' },
      desc:        { es: 'Bogotá D.C., Colombia.', en: 'Bogotá D.C., Colombia.', de: 'Bogotá D.C., Kolumbien.' },
    },
    {
      type:        { es: 'Certificación de Idiomas', en: 'Language Certification', de: 'Sprachzertifizierung' },
      degree:      { es: 'Inglés C1', en: 'English C1', de: 'Englisch C1' },
      institution: 'Centro Colombo Americano',
      period:      { es: 'Certificado C1', en: 'C1 Certificate', de: 'C1-Zertifikat' },
      desc:        { es: 'Curso intensivo de inglés.', en: 'Intensive English course.', de: 'Intensiver Englischkurs.' },
    },
    {
      type:        { es: 'Certificación de Idiomas', en: 'Language Certification', de: 'Sprachzertifizierung' },
      degree:      { es: 'Alemán B2', en: 'German B2', de: 'Deutsch B2' },
      institution: 'Sprach Institut',
      period:      { es: 'Certificado B2', en: 'B2 Certificate', de: 'B2-Zertifikat' },
      desc:        { es: 'Curso intensivo de alemán.', en: 'Intensive German course.', de: 'Intensiver Deutschkurs.' },
    },
    {
      type:        { es: 'Formación Complementaria', en: 'Additional Training', de: 'Weiterbildung' },
      degree:      { es: 'Aspen Plus I', en: 'Aspen Plus I', de: 'Aspen Plus I' },
      institution: 'Universidad Jorge Tadeo Lozano',
      period:      { es: 'Certificado', en: 'Certificate', de: 'Zertifikat' },
      desc:        {
        es: 'Diseño y simulación de procesos. Propiedades termodinámicas y diseño de equipos individuales.',
        en: 'Process design and simulation. Thermodynamic properties and individual equipment design.',
        de: 'Prozessdesign und -simulation. Thermodynamische Eigenschaften und Auslegung von Einzelanlagen.',
      },
    },
  ],

  /* ── SKILLS ─────────────────────────────────────────────── */
  skills: {
    technical: ['Python', 'Aspen Plus', 'Microsoft Excel', 'Microsoft Word'],
    soft: {
      es: ['Atención al detalle', 'Trabajo en equipo', 'Comunicación asertiva', 'Proactividad investigativa', 'Pensamiento analítico', 'Orientación a resultados'],
      en: ['Attention to detail', 'Teamwork', 'Assertive communication', 'Research proactivity', 'Analytical thinking', 'Results orientation'],
      de: ['Detailgenauigkeit', 'Teamarbeit', 'Assertive Kommunikation', 'Forschungsproaktivität', 'Analytisches Denken', 'Ergebnisorientierung'],
    },
    languages: [
      { name: { es: 'Español', en: 'Spanish', de: 'Spanisch' }, badge: 'Nativo / Native',    pct: 100 },
      { name: { es: 'Inglés',  en: 'English', de: 'Englisch' }, badge: 'C1',                 pct: 83  },
      { name: { es: 'Alemán',  en: 'German',  de: 'Deutsch'  }, badge: 'B2',                 pct: 66  },
    ],
  },

  /* ── ACHIEVEMENTS ───────────────────────────────────────── */
  achievements: [
    {
      title: { es: 'Beca de Excelencia Académica', en: 'Academic Excellence Scholarship', de: 'Stipendium für akademische Exzellenz' },
      org:   'Universidad Jorge Tadeo Lozano',
      date:  { es: 'Noviembre 2024', en: 'November 2024', de: 'November 2024' },
    },
    {
      title: { es: 'Beca de Excelencia Académica', en: 'Academic Excellence Scholarship', de: 'Stipendium für akademische Exzellenz' },
      org:   'Universidad Jorge Tadeo Lozano',
      date:  { es: 'Noviembre 2025', en: 'November 2025', de: 'November 2025' },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════════ */
let currentLang = 'es';

/* ═══════════════════════════════════════════════════════════════
   RENDER — TIMELINE
═══════════════════════════════════════════════════════════════ */
function renderTimeline(lang) {
  const el = document.getElementById('timeline');
  el.innerHTML = cv.experience.map((item, i) => `
    <div class="timeline-item" data-index="${i}" role="listitem">
      <span class="tl-period">${item.period[lang]}</span>
      <h3 class="tl-role">${item.role[lang]}</h3>
      <p  class="tl-org">${item.org}</p>
      <ul class="tl-bullets">
        ${item.bullets[lang].map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  observeReveal('.timeline-item');
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — EDUCATION
═══════════════════════════════════════════════════════════════ */
function renderEducation(lang) {
  const el = document.getElementById('eduGrid');
  el.innerHTML = cv.education.map((item, i) => `
    <div class="edu-card" data-index="${i}">
      <p class="edu-type">${item.type[lang]}</p>
      <h3 class="edu-degree">${item.degree[lang]}</h3>
      <p class="edu-institution">${item.institution}</p>
      <p class="edu-period">${item.period[lang]}</p>
      <p class="edu-desc">${item.desc[lang]}</p>
    </div>
  `).join('');
  observeReveal('.edu-card');
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — SKILLS
═══════════════════════════════════════════════════════════════ */
function renderSkills(lang) {
  // Technical tags
  document.getElementById('tagTech').innerHTML =
    cv.skills.technical.map(s => `<span class="skill-tag tech" role="listitem">${s}</span>`).join('');

  // Soft skill tags
  document.getElementById('tagSoft').innerHTML =
    cv.skills.soft[lang].map(s => `<span class="skill-tag" role="listitem">${s}</span>`).join('');

  // Language bars (reset width first, then animate on next frame)
  document.getElementById('langBars').innerHTML =
    cv.skills.languages.map(l => `
      <div class="lang-bar-item">
        <div class="lang-bar-header">
          <span class="lang-bar-name">${l.name[lang]}</span>
          <span class="lang-bar-level">${l.badge}</span>
        </div>
        <div class="lang-bar-track">
          <div class="lang-bar-fill" data-pct="${l.pct}" style="width:0"></div>
        </div>
      </div>
    `).join('');

  // Trigger bar animation after a brief delay so CSS transition fires
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll('.lang-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — ACHIEVEMENTS
═══════════════════════════════════════════════════════════════ */
function renderAchievements(lang) {
  document.getElementById('achievementList').innerHTML =
    cv.achievements.map(a => `
      <div class="achievement-item" role="listitem">
        <span class="ach-icon" aria-hidden="true">🏅</span>
        <div>
          <div class="ach-title">${a.title[lang]}</div>
          <div class="ach-date">${a.org} · ${a.date[lang]}</div>
        </div>
      </div>
    `).join('');
}

/* ═══════════════════════════════════════════════════════════════
   APPLY STATIC TRANSLATIONS
═══════════════════════════════════════════════════════════════ */
function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t[lang][el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });
  document.documentElement.lang = lang;
}

/* ═══════════════════════════════════════════════════════════════
   SET LANGUAGE  (master switch)
═══════════════════════════════════════════════════════════════ */
function setLanguage(lang) {
  if (!t[lang]) return;
  currentLang = lang;

  applyTranslations(lang);
  renderTimeline(lang);
  renderEducation(lang);
  renderSkills(lang);
  renderAchievements(lang);

  // Update lang button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

/* ═══════════════════════════════════════════════════════════════
   INTERSECTION OBSERVER — scroll-reveal animations
═══════════════════════════════════════════════════════════════ */
function observeReveal(selector) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const delay = parseInt(entry.target.dataset.index || 0) * 90;
      entry.target.style.transitionDelay = `${delay}ms`;
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.10 });

  document.querySelectorAll(selector).forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   ACTIVE NAV LINK  (highlight on scroll)
═══════════════════════════════════════════════════════════════ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || 68)}px 0px -60% 0px` });

  sections.forEach(s => io.observe(s));
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('navMenu');

  // Scroll shadow
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile hamburger toggle
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu on link click
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile menu on outside click
  document.addEventListener('click', e => {
    if (navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Detect browser language, fall back to Spanish
  const browserLang = (navigator.language || 'es').slice(0, 2).toLowerCase();
  const startLang   = ['es', 'en', 'de'].includes(browserLang) ? browserLang : 'es';

  setLanguage(startLang);
  initNavbar();
  initActiveNav();

  // Lang switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});
