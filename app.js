/**
 * SERV5 EXPANDED MULTI-PAGE & SCROLL-DRIVEN MOTION ENGINE
 * Features:
 * - Scroll-Reactive Fluid Background Canvas (Constellation Nebula)
 * - Scroll Velocity Tracking in HUD
 * - Live Terminal Code Stream for Enterprise Products
 * - Scroll-Triggered Staggers (IntersectionObserver)
 * - Animated Numbers Counter (CountUp)
 * - Spotlight Hover Gradients
 * - FAQ Accordion & Product Switcher
 * - Multi-lingual (Arabic / English)
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. SCROLL-REACTIVE FLUID BACKGROUND CANVAS
  // =========================================================================
  const canvas = document.getElementById('ambientScrollCanvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  let width = (canvas ? (canvas.width = window.innerWidth) : 0);
  let height = (canvas ? (canvas.height = window.innerHeight) : 0);

  let lastScrollY = window.pageYOffset;
  let scrollVelocity = 0;
  let scrollVelocityDamped = 0;
  const scrollDisplay = document.getElementById('scrollSpeedDisplay');

  window.addEventListener('resize', () => {
    if (!canvas) return;
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Track scroll speed smoothly
  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;
    scrollVelocity = Math.abs(currentScrollY - lastScrollY);
    lastScrollY = currentScrollY;
  }, { passive: true });

  // Node particle constellation class
  const nodes = [];
  const nodeCount = Math.min(width > 768 ? 55 : 25, 65);

  class SpatialNode {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.baseVx = (Math.random() - 0.5) * 0.4;
      this.baseVy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.8 + 1;
      this.alpha = Math.random() * 0.4 + 0.15;
      this.color = Math.random() > 0.4 ? '#60A5FA' : '#3B82F6';
    }
    update(scrollBoost) {
      // Speed increases with scroll velocity, then damps down
      this.x += this.baseVx * (1 + scrollBoost * 0.15);
      this.y += (this.baseVy - scrollBoost * 0.08); // Floating drift upwards on scroll

      // Screen wrap
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }
    draw() {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.fill();
    }
  }

  for (let i = 0; i < nodeCount; i++) {
    nodes.push(new SpatialNode());
  }

  // Canvas render loop
  function renderCanvas() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    // Smoothly damp scroll velocity
    scrollVelocityDamped += (scrollVelocity - scrollVelocityDamped) * 0.08;
    scrollVelocity *= 0.92; // Friction decay

    if (scrollDisplay) {
      scrollDisplay.textContent = `${Math.round(scrollVelocityDamped * 10)} px/s`;
    }

    // Update and draw nodes
    nodes.forEach(node => {
      node.update(scrollVelocityDamped);
      node.draw();
    });

    // Draw ethereal connections between nearby nodes
    ctx.lineWidth = 0.8;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          const lineAlpha = (1 - dist / 110) * 0.18;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(96, 165, 250, ${lineAlpha})`;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(renderCanvas);
  }
  renderCanvas();

  // =========================================================================
  // 2. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // =========================================================================
  // 3. LIVE NUMERICAL COUNTER (COUNT UP ON SCROLL)
  // =========================================================================
  const counters = document.querySelectorAll('.counter');
  let hasCounted = false;

  function runCounters() {
    if (hasCounted) return;
    hasCounted = true;
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target') || counter.innerText.replace(/,/g, ''));
      const isDecimal = target % 1 !== 0;
      let count = 0;
      const speed = 40;
      const inc = target / speed;

      const updateCount = () => {
        count += inc;
        if (count < target) {
          counter.innerText = isDecimal ? count.toFixed(1) : Math.ceil(count).toLocaleString();
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = isDecimal ? target.toFixed(1) : target.toLocaleString();
        }
      };
      updateCount();
    });
  }

  const authoritySection = document.querySelector('.hero-authority-strip');
  if (authoritySection && 'IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runCounters();
      }
    }, { threshold: 0.5 });
    countObserver.observe(authoritySection);
  }

  // =========================================================================
  // 4. MAGNETIC SILK CURSOR WITH LERP PHYSICS
  // =========================================================================
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  const tag = document.getElementById('cursorTag');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (dot) dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    if (ring) ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  document.querySelectorAll('[data-cursor], a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (ring) ring.classList.add('active');
      const label = el.getAttribute('data-cursor');
      if (label && tag) tag.textContent = label;
    });
    el.addEventListener('mouseleave', () => {
      if (ring) ring.classList.remove('active');
      if (tag) tag.textContent = '';
    });
  });

  // =========================================================================
  // 5. SPOTLIGHT HOVER CARDS
  // =========================================================================
  const spotlightCards = document.querySelectorAll('.spotlight-card');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // =========================================================================
  // 6. READY-MADE ENTERPRISE PRODUCTS TABS & LIVE TERMINAL STREAM
  // =========================================================================
  const prodTabBtns = document.querySelectorAll('.prod-tab-btn');
  const prodTag1 = document.getElementById('prodTag1');
  const prodTag2 = document.getElementById('prodTag2');
  const prodTitle = document.getElementById('prodTitle');
  const prodDesc = document.getElementById('prodDesc');
  const prodStatVal = document.getElementById('prodStatVal');
  const prodStatLbl = document.getElementById('prodStatLbl');
  const terminalTitle = document.getElementById('terminalTitle');
  const terminalStream = document.getElementById('terminalStream');

  const productsData = {
    legal: {
      tag1: "SAUDI ZATCA COMPLIANT",
      tag2: "75+ FIRMS IN RIYADH",
      titleEn: "Serv5 Legal Suite: Enterprise Practice ERP",
      titleAr: "منظومة سيرف فايز للمحاماة: نظام ERP المعتمد",
      descEn: "The leading automated software powering top corporate law firms across the Kingdom of Saudi Arabia. Features automated court alert dispatching, litigation case sync with Najiz, client portals, and ZATCA Phase 2 compliant tax billing.",
      descAr: "النظام البرمجي الرائد لإدارة كبرى مكاتب وشركات المحاماة في المملكة العربية السعودية. يشمل إشعارات جلسات المحاكم آلياً، الربط مع منصة ناجز، بوابات الموكلين، والفوترة الإلكترونية المعتمدة لهيئة الزكاة والضريبة.",
      statVal: "-65%",
      statLblEn: "ADMIN OVERHEAD REDUCTION",
      statLblAr: "توفير في تكاليف وأعباء الإدارة",
      terminal: "serv5-legal-erp.sh",
      logs: [
        "> SYSTEM STATUS: ONLINE",
        "> ZATCA Tax Engine: Verified 100%",
        "> Najiz Court Alert API: Connected"
      ]
    },
    whatsapp: {
      tag1: "OFFICIAL WHATSAPP BUSINESS API",
      tag2: "INSTANT SALES BOT",
      titleEn: "WhatsApp Business AI CRM & Dispatch Engine",
      titleAr: "محرك أتمتة الواتساب وبوتات المبيعات الذكية",
      descEn: "Automate your sales pipeline with zero friction. Connect verified Meta WhatsApp API with intelligent AI workflows that qualify leads, answer customer questions 24/7, and automatically book calendar consultations.",
      descAr: "أتمتة مبيعاتك وخدمة عملائك بالكامل عبر الـ API الرسمي للواتساب. بوتات ذكاء اصطناعي تفحص طلبات العملاء وترد على الاستفسارات على مدار الساعة وتحجز المواعيد تلقائياً.",
      statVal: "100%",
      statLblEn: "AUTOMATED LEAD QUALIFICATION",
      statLblAr: "تأهيل آلي وفوري للعملاء",
      terminal: "serv5-whatsapp-bot.py",
      logs: [
        "> META WHATSAPP WEBHOOK: 200 OK",
        "> Inbound Leads Processed: 1,842",
        "> Calendar Auto-Booking: Active"
      ]
    },
    food: {
      tag1: "SUB-SECOND ORDERING",
      tag2: "0% THIRD-PARTY COMMISSIONS",
      titleEn: "Food Delivery & Restaurant Enterprise Engine",
      titleAr: "منظومة طلبات وتوصيل المطاعم والأغذية",
      descEn: "A dedicated online food ordering platform for restaurant chains. Eliminate the 25% to 35% commission drain from aggregator apps (Talabat/Jahez) with seamless branch dispatching and real-time delivery GPS.",
      descAr: "منصة طلبات أونلاين مخصصة لسلاسل المطاعم تتخلص من عمولات تطبيقات التوصيل الخارجية (جاهز وطلبات)، مع نظام إدارة الفروع ومتابعة السائقين والطلبات اللحظية بالـ GPS.",
      statVal: "0%",
      statLblEn: "COMMISSION PAID TO AGGREGATORS",
      statLblAr: "صفر عمولات لتطبيقات التوصيل",
      terminal: "serv5-food-dispatch.js",
      logs: [
        "> RESTAURANT CLUSTER: 14 Branches",
        "> Checkout Speed: 0.38s",
        "> Aggregator Commission Saved: 100%"
      ]
    },
    medical: {
      tag1: "HEALTHCARE COMPLIANT",
      tag2: "250K+ PATIENTS LOGGED",
      titleEn: "Clinic & Multi-Specialty Hospital Management Hub",
      titleAr: "نظام إدارة العيادات والمراكز والمستشفيات",
      descEn: "Unified electronic health record (EHR) and clinic management system. Connecting patient histories, laboratory diagnostics, doctor schedules, automated WhatsApp appointment reminders, and electronic billing.",
      descAr: "نظام متكامل لإدارة السجلات الطبية الإلكترونية ومواعيد الأطباء ونتائج التحاليل مع إرسال تذكيرات المواعيد آلياً عبر الواتساب وتقليل نسبة التخلف عن الحضور بنسبة 80%.",
      statVal: "-80%",
      statLblEn: "NO-SHOW APPOINTMENT REDUCTION",
      statLblAr: "انخفاض في نسبة الغياب عن المواعيد",
      terminal: "serv5-ehr-network.sh",
      logs: [
        "> HOSPITAL EHR SYNC: Healthy",
        "> Lab Diagnostic Dispatch: Instant",
        "> WhatsApp Reminder Sent: 99.4%"
      ]
    }
  };

  prodTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      prodTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const prodKey = btn.getAttribute('data-prod');
      const data = productsData[prodKey];
      if (data && prodTitle) {
        prodTag1.textContent = data.tag1;
        prodTag2.textContent = data.tag2;
        prodTitle.textContent = curLang === 'ar' ? data.titleAr : data.titleEn;
        prodDesc.textContent = curLang === 'ar' ? data.descAr : data.descEn;
        prodStatVal.textContent = data.statVal;
        prodStatLbl.textContent = curLang === 'ar' ? data.statLblAr : data.statLblEn;
        if (terminalTitle) terminalTitle.textContent = data.terminal;

        if (terminalStream) {
          terminalStream.innerHTML = data.logs.map(log => `<code><span class="text-emerald">&gt;</span> ${log.replace('>', '')}</code>`).join('');
        }

        playSoftTone(600, 'sine', 0.05, 0.03);
      }
    });
  });

  // =========================================================================
  // 7. FAQ ACCORDION ENGINE
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
          playSoftTone(500, 'sine', 0.04, 0.02);
        }
      });
    }
  });

  // =========================================================================
  // 8. 3D GLASS TILT INTERACTION
  // =========================================================================
  const glassCard = document.getElementById('glassCard');
  if (glassCard && window.matchMedia('(pointer: fine)').matches) {
    glassCard.addEventListener('mousemove', (e) => {
      const rect = glassCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 12;
      const rotateY = (x / rect.width) * 12;
      glassCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    glassCard.addEventListener('mouseleave', () => {
      glassCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // Interactive Chart Bars
  const chartCols = document.querySelectorAll('.chart-col');
  chartCols.forEach(col => {
    col.addEventListener('click', () => {
      chartCols.forEach(c => c.classList.remove('active'));
      col.classList.add('active');
      playSoftTone(600, 'sine', 0.05, 0.03);
    });
  });

  // =========================================================================
  // 9. IN-HOME INTERACTIVE PROJECT & ROI ESTIMATOR
  // =========================================================================
  const archBtns = document.querySelectorAll('#simArchOptions .param-btn');
  const regionBtns = document.querySelectorAll('#simRegionOptions .param-btn');
  let curArch = 'web';
  let curRegion = 'ksa';

  const archSpecs = {
    web: {
      name: "Next.js 15 Headless Web Platform",
      stack: "Next.js 15 Edge + Cloudflare Zero Trust",
      timeline: "3 to 5 Weeks",
      speed: "100 / 100 Guaranteed",
      lift: "+220% to +350%"
    },
    ecommerce: {
      name: "Mada & GCC E-Commerce Platform",
      stack: "Headless Shopify / Mada & ZATCA Conduits",
      timeline: "5 to 7 Weeks",
      speed: "99 / 100 Sub-Second",
      lift: "+310% to +480%"
    },
    mobile: {
      name: "Flutter Mobile App (iOS & Android)",
      stack: "Flutter Dual iOS/Android + Native Rust Bridge",
      timeline: "6 to 9 Weeks",
      speed: "60 FPS Native Touch",
      lift: "+340% App Volume"
    },
    erp: {
      name: "Enterprise Practice ERP & AI Bot",
      stack: "Autonomous Practice ERP + WhatsApp AI CRM",
      timeline: "4 to 6 Weeks",
      speed: "0 Human Friction",
      lift: "+420% Efficiency"
    }
  };

  function computeSim() {
    const spec = archSpecs[curArch] || archSpecs.web;
    const resName = document.getElementById('resProjectName');
    const resStack = document.getElementById('resStack');
    const resTimeline = document.getElementById('resTimeline');
    const resSpeed = document.getElementById('resSpeed');
    const resLift = document.getElementById('resLift');

    if (resName) resName.textContent = spec.name;
    if (resStack) resStack.textContent = spec.stack;
    if (resTimeline) resTimeline.textContent = spec.timeline;
    if (resSpeed) resSpeed.textContent = spec.speed;
    if (resLift) resLift.textContent = spec.lift;

    playSoftTone(520, 'sine', 0.05, 0.02);
  }

  archBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      archBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      curArch = btn.getAttribute('data-arch');
      computeSim();
    });
  });

  regionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      regionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      curRegion = btn.getAttribute('data-region');
      computeSim();
    });
  });

  // =========================================================================
  // 10. SOFT AUDIO FEEDBACK
  // =========================================================================
  let audioCtx = null;
  let audioEnabled = true;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
  }

  function playSoftTone(freq = 520, type = 'sine', duration = 0.08, gain = 0.03) {
    if (!audioEnabled) return;
    initAudio();
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      g.gain.setValueAtTime(gain, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(g);
      g.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  const audioBtn = document.getElementById('audioToggle');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      audioEnabled = !audioEnabled;
      const icon = document.getElementById('audioIcon');
      if (icon) icon.textContent = audioEnabled ? '🔊' : '🔇';
      if (audioEnabled) playSoftTone(700, 'sine', 0.1, 0.06);
    });
  }

  // =========================================================================
  // 11. MULTI-LINGUAL ENGINE (ENGLISH / ARABIC)
  // =========================================================================
  const translations = {
    en: {
      langLabel: "العربية",
      hud: { active: "Q1/Q2 2027 ENGAGEMENTS OPEN" },
      nav: {
        sub: "DIGITAL GROWTH STUDIO",
        home: "Home",
        services: "Capabilities",
        work: "Case Studies",
        estimator: "ROI Estimator",
        about: "Agency & History",
        contact: "Offices & Contact",
        cta: "Start Project"
      },
      hero: {
        badge: "STRATEGIC DIGITAL PARTNER • RIYADH & GLOBAL",
        h1: "Good businesses deserve",
        h2: "better digital engines.",
        desc: "We merge commercial management consulting with high-velocity web engineering and precision performance marketing. Eliminating technical bloat, winning page #1 on Google, and unlocking sustainable revenue across the GCC and global markets.",
        ctaPrimary: "Calculate Project Scope",
        ctaSecondary: "Explore Proven Work",
        stat1: "Years Industry Mastery",
        stat2: "Successful Deployments",
        stat3: "SLA Adherence Rate"
      },
      cockpit: {
        speed: "GOOGLE SPEED INDEX",
        roas: "PORTFOLIO ROAS",
        growth: "ANNUAL GROWTH"
      },
      pillars: {
        pill: "01 // THE BIGGER PICTURE",
        h1: "Not a menu of services.",
        h2: "An operational point of view.",
        desc: "Most agencies operate as order-takers. Serv5 operates as a commercial partner. Every technical choice, design line, and marketing dollar is tuned directly to net profitability.",
        p1_title: "Saudi Market Entry & Compliance",
        p1_desc: "From initial legal advisory and MISA licensing to Mada payment conduits and ZATCA electronic tax invoicing. We build the complete commercial and digital conduit for Saudi Arabia and the GCC.",
        p2_title: "High-Performance Engineering",
        p2_desc: "Clean, unbloated codebases crafted with Next.js, Flutter, and native microservices. Loading under 0.5s, delivering 100/100 Core Web Vitals, and maintaining seamless 99.99% cloud uptime.",
        p3_title: "Data-Driven Growth & SEO",
        p3_desc: "Conquering high-intent search queries in Riyadh, Dubai, and international hubs. Constructing precision customer acquisition funnels that turn clicks into verified bank transactions.",
        link: "Explore Framework"
      },
      cases: {
        pill: "06 // PROVEN COMMERCIAL IMPACT",
        h1: "Selected work crafted to",
        h2: "dominate markets.",
        all: "View Full Portfolio (20K+ Projects)"
      },
      cta: {
        h1: "Ready to engineer your next leap?",
        desc: "Schedule a strategic discovery session with our Managing Directors in Riyadh, Cairo, or online.",
        btn1: "Configure Project Scope",
        btn2: "Contact Direct"
      }
    },

    ar: {
      langLabel: "English",
      hud: { active: "نستقبل مشاريع الربع الأول والثاني 2027" },
      nav: {
        sub: "استوديو النمو الرقمي والحلول المتكاملة",
        home: "الرئيسية",
        services: "قدراتنا وحلولنا",
        work: "أعمالنا وقصص النجاح",
        estimator: "حاسبة العائد ونطاق العمل",
        about: "عن سيرف فايز",
        contact: "المكاتب والتواصل",
        cta: "ابدأ مشروعك"
      },
      hero: {
        badge: "شريك الأعمال والنمو الرقمي • الرياض، الخليج، والعالم",
        h1: "المشاريع الناجحة تستحق",
        h2: "منظومة رقمية أرقى وأقوى.",
        desc: "ندمج الاستشارات الإدارية والتجارية مع الهندسة البرمجية فائقة السرعة والتسويق بالأداء. نتخلص من القوالب الثقيلة، ونسيطر على نتائج بحث جوجل، ونحقق تدفقات نقدية مستدامة لكبرى الشركات في السعودية والخليج.",
        ctaPrimary: "احسب نطاق وتكلفة مشروعك",
        ctaSecondary: "استكشف أعمالنا وقصص النجاح",
        stat1: "عاماً من الخبرة والريادة",
        stat2: "مشروع منجز بنجاح",
        stat3: "نسبة الالتزام بالـ SLA"
      },
      cockpit: {
        speed: "مؤشر سرعة جوجل",
        roas: "عائد الإنفاق الإعلاني",
        growth: "نمو الإيرادات السنوي"
      },
      pillars: {
        pill: "01 // الرؤية الشاملة",
        h1: "ليست مجرد قائمة خدمات..",
        h2: "بل رؤية استراتيجية متكاملة.",
        desc: "معظم الوكالات تنفذ الطلبات بشكل أعمى. في سيرف فايز نعمل كشريك تجاري حقيقي؛ كل سطر برمجي وحملة إعلانية موجهة مباشرة لمضاعفة الأرباح الصافية.",
        p1_title: "تأسيس الأعمال والتوسع في السوق السعودي",
        p1_desc: "من الاستشارات القانونية وتراخيص هيئة الاستثمار MISA إلى ربط بوابات مدى والفوترة الإلكترونية لهيئة الزكاة ZATCA. نبني الجسر الرقمي الكامل لتوسعك في المملكة.",
        p2_title: "هندسة برمجية للسرعة الخارقة",
        p2_desc: "بناء منصات وتطبيقات نظيفة باستخدام Next.js وفلاتر بأقل من نصف ثانية للتحميل ومؤشر سرعة جوجل 100/100 وثبات تشغيلي 99.99%.",
        p3_title: "التسويق بالأداء وتصدر نتائج جوجل",
        p3_desc: "الاستحواذ على الكلمات المفتاحية الأكثر ربحية في الرياض ودبي وعالمياً وبناء مسارات تحويل عملاء تترجم الزيارات إلى صفقات ومبيعات مؤكدة.",
        link: "اكتشف المنهجية"
      },
      cases: {
        pill: "06 // أثر حقيقي ملموس",
        h1: "أعمال صُممت لتحقق",
        h2: "صدارة مطلقة في الأسواق.",
        all: "استعرض كافة الأعمال (20,000+ مشروع)"
      },
      cta: {
        h1: "هل أنت مستعد لنقل مشروعك لمستوى آخر؟",
        desc: "احجز جلسة استشارية مع مدراء مكاتبنا في الرياض أو القاهرة الآن.",
        btn1: "احسب نطاق مشروعك",
        btn2: "تواصل معنا مباشرة"
      }
    }
  };

  let curLang = localStorage.getItem('serv5_lang') || 'en';

  function applyLanguage(lang) {
    curLang = lang;
    localStorage.setItem('serv5_lang', lang);
    const isAr = lang === 'ar';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

    const label = document.getElementById('langLabel');
    if (label) label.textContent = translations[lang].langLabel;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const path = el.getAttribute('data-i18n').split('.');
      let val = translations[lang];
      for (const k of path) {
        if (val) val = val[k];
      }
      if (val) el.textContent = val;
    });

    const activeProdBtn = document.querySelector('.prod-tab-btn.active');
    if (activeProdBtn) {
      const prodKey = activeProdBtn.getAttribute('data-prod');
      const data = productsData[prodKey];
      if (data && prodTitle) {
        prodTitle.textContent = isAr ? data.titleAr : data.titleEn;
        prodDesc.textContent = isAr ? data.descAr : data.descEn;
        prodStatLbl.textContent = isAr ? data.statLblAr : data.statLblEn;
      }
    }
  }

  const langBtn = document.getElementById('langSwitch');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLanguage(curLang === 'en' ? 'ar' : 'en');
      playSoftTone(600, 'sine', 0.06, 0.03);
    });
  }

  if (curLang === 'ar') applyLanguage('ar');

});
