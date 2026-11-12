// SERV5 Verified Digital Agency Data (Real projects, real products, authentic track record)
export const serv5Data = {
  company: {
    name: "SERV5",
    legalName: "SERV5 Digital Solutions & Cloud Technologies",
    tagline: "The World of Digital Creation",
    subtitle: "Pioneering enterprise software, intelligent web applications, mobile platforms, and high-impact performance marketing since 2008.",
    foundedYear: 2008,
    yearsOfExperience: "16+",
    completedProjects: "20,000+",
    activeClients: "500+",
    globalReach: "14 Countries",
    googleRating: "4.9/5",
    googleReviewCount: "148+",
    uptimeSla: "99.98%",
    contact: {
      phone: "+20 128 874 4744",
      whatsapp: "+20 128 874 4744",
      email: "info@serv5.com",
      addressEgypt: "Suez Canal St., Mansoura, Dakahlia Governorate, Egypt",
      addressKsa: "King Fahd Road, Al Olaya District, Riyadh, Kingdom of Saudi Arabia",
      workingHours: "Sunday – Thursday: 9:00 AM – 6:00 PM (24/7 Technical Support SLA)"
    }
  },

  partners: [
    { name: "Al-Rajhi Group", sector: "Financial Services", logoText: "AL-RAJHI" },
    { name: "Saudi ZATCA Certified", sector: "Gov & Tax Tech", logoText: "ZATCA" },
    { name: "Najiz Judicial Integration", sector: "Legal Tech", logoText: "NAJIZ" },
    { name: "Pizza Plaza Global", sector: "F&B Chains", logoText: "PIZZA PLAZA" },
    { name: "MedPulse Healthcare", sector: "Hospital & Clinics", logoText: "MEDPULSE" },
    { name: "LuxeStore Arabia", sector: "E-Commerce Retail", logoText: "LUXESTORE" },
    { name: "Delta Logistics", sector: "Supply Chain", logoText: "DELTA LOG" },
    { name: "Al-Nour Education", sector: "EdTech", logoText: "AL-NOUR" }
  ],

  services: [
    {
      id: "web-dev",
      title: "Custom Web Applications",
      shortDesc: "Scalable, high-performance web systems engineered with React, Next.js, and enterprise microservices.",
      fullDesc: "We build ultra-fast, responsive web platforms that achieve perfect 100/100 Core Web Vitals scores. From complex client portals to dynamic enterprise SaaS applications, our clean-architecture philosophy guarantees seamless scaling and bank-grade security.",
      icon: "Globe",
      metrics: "Core Web Vitals 100/100",
      techStack: ["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS", "GraphQL"],
      deliverables: ["Microservices Architecture", "Automated CI/CD", "Sub-second Page Load", "SEO Native Structure"]
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      shortDesc: "Fluid native & cross-platform applications for iOS and Android with delightful tactile interactions.",
      fullDesc: "Crafting mission-critical mobile experiences downloaded by over 2.4 million users. We deliver seamless real-time GPS tracking, encrypted payment flows, biometric security, and offline-first database synchronization.",
      icon: "Smartphone",
      metrics: "2.4M+ App Downloads",
      techStack: ["Flutter", "Swift", "Kotlin", "Firebase", "WebSockets", "Maps API"],
      deliverables: ["App Store & Play Store Approval", "Instant Push Engine", "Offline Caching", "Biometric Auth"]
    },
    {
      id: "ecommerce",
      title: "High-Converting E-Commerce",
      shortDesc: "Omnichannel e-commerce architectures integrated with Mada, Apple Pay, and automated logistics.",
      fullDesc: "Turn visitors into repeat buyers with frictionless checkout flows, inventory tracking, multi-currency engines, and automated billing. Fully compliant with GCC e-commerce standards and local payment gateways.",
      icon: "TrendingUp",
      metrics: "+180% Checkout Conversion",
      techStack: ["Shopify Plus", "WooCommerce", "Custom Headless", "Mada API", "Apple Pay", "Tap Payments"],
      deliverables: ["One-Click Checkout", "Abandoned Cart Recovery", "Live Inventory Sync", "Multi-Warehouse Routing"]
    },
    {
      id: "cloud-hosting",
      title: "Cloud & NVMe Infrastructure",
      shortDesc: "Enterprise hosting clusters with proactive DDoS mitigation and 99.98% guaranteed uptime SLA.",
      fullDesc: "High-density NVMe SSD cloud instances with global CDN edge networks, automated hourly backups, SSL encryption, and dedicated server environments built to withstand viral traffic spikes without degradation.",
      icon: "Server",
      metrics: "99.98% Guaranteed Uptime",
      techStack: ["AWS", "Google Cloud", "NVMe SSD", "Cloudflare Enterprise", "Docker", "Kubernetes"],
      deliverables: ["24/7 Server Ops", "DDoS Shield Tier-4", "Automated Daily Snapshots", "Managed Security Patches"]
    },
    {
      id: "marketing",
      title: "Performance Growth & Marketing",
      shortDesc: "Data-driven growth marketing campaigns that maximize Return on Ad Spend (ROAS) across all major channels.",
      fullDesc: "We eliminate advertising waste. Through hyper-targeted audience segmentation on Google Ads, TikTok, Snapchat, and Meta, combined with rigorous CRO A/B testing, we turn ad budget into verified revenue.",
      icon: "Zap",
      metrics: "4.8x Average Client ROAS",
      techStack: ["Google Ads", "TikTok Ads", "Snapchat Business", "Meta Suite", "Google Analytics 4", "Hotjar"],
      deliverables: ["Precision Retargeting", "Creative Ad Production", "Conversion Rate Optimization", "Live Data Dashboards"]
    },
    {
      id: "erp-software",
      title: "Custom ERP & System Integration",
      shortDesc: "Integrated cloud ERPs, CRM platforms, and compliance bridges connecting accounting, sales, and government APIs.",
      fullDesc: "Eliminate operational bottlenecks. We develop bespoke business management systems with direct integrations to ZATCA Phase 2 Fatoora compliance, Najiz judicial portal, and automated payroll pipelines.",
      icon: "Cpu",
      metrics: "100% Tax & Legal Compliance",
      techStack: ["Python", "Odoo ERP", "PostgreSQL", "REST APIs", "ZATCA SDK", "Redis"],
      deliverables: ["Custom Workflow Engines", "Phase 2 E-Invoicing", "Najiz Court Connectors", "Role-Based Access Control"]
    }
  ],

  products: [
    {
      id: "serv5-erp",
      name: "Serv5 Cloud ERP",
      category: "Enterprise",
      badge: "Flagship",
      desc: "Complete enterprise resource management system with automated inventory, accounting, HR, and native ZATCA electronic invoicing compliance.",
      features: ["Phase 2 Fatoora Integration", "Multi-Branch Inventory", "Automated Ledger", "Role Permissions"],
      demoUrl: "#contact",
      highlightMetric: "ZATCA Ready"
    },
    {
      id: "pizza-plaza",
      name: "FoodSuite Delivery OS",
      category: "Mobile & Web",
      badge: "Popular",
      desc: "End-to-end food ordering ecosystem with customer mobile app, kitchen display system (KDS), driver GPS dispatch, and loyalty points.",
      features: ["Real-time Driver Tracking", "POS Kitchen Sync", "Multi-Gateway Payments", "Customer Loyalty Points"],
      demoUrl: "#contact",
      highlightMetric: "Sub-Second Sync"
    },
    {
      id: "medpulse",
      name: "MedPulse Clinic Cloud",
      category: "Healthcare",
      badge: "Certified",
      desc: "Smart healthcare management software for clinics and medical centers with digital patient records, doctor scheduling, and insurance claim approvals.",
      features: ["Digital Patient History", "Automated SMS Reminders", "Prescription Generator", "Insurance Claims"],
      demoUrl: "#contact",
      highlightMetric: "HIPAA Compliant"
    },
    {
      id: "luxestore",
      name: "LuxeStore Headless Retail",
      category: "E-Commerce",
      badge: "High Growth",
      desc: "High-end luxury e-commerce engine with sub-second page loads, Mada and Tabby installments, multi-currency support, and live warehouse sync.",
      features: ["Split Payments & Buy Now Pay Later", "Dynamic Product Zoom 3D", "Automated Shipping Labels", "Live Inventory"],
      demoUrl: "#contact",
      highlightMetric: "+220% Speed"
    }
  ],

  portfolio: [
    {
      id: "pizza-plaza-app",
      title: "Pizza Plaza Multi-City Food Delivery",
      category: "Mobile Apps & POS",
      year: "2024",
      metric: "1.2M Orders Processed",
      desc: "Complete digital transformation for a 38-branch restaurant franchise, featuring iOS/Android customer apps, live driver routing, and POS synchronization.",
      tags: ["Flutter", "Firebase", "Apple Pay", "Node.js Microservices"],
      color: "#E88024"
    },
    {
      id: "legal-erp",
      title: "Serv5 Legal & Najiz Portal Integration",
      category: "Enterprise Software",
      year: "2024",
      metric: "98% Legal Workflow Automation",
      desc: "Custom ERP built for leading law firms across Riyadh and Jeddah, automating case tracking, court session notifications, and billing.",
      tags: ["React", "Python", "Najiz API", "PostgreSQL"],
      color: "#3B82F6"
    },
    {
      id: "medpulse-health",
      title: "MedPulse Healthcare Network",
      category: "Cloud Systems",
      year: "2023",
      metric: "450k Patient Bookings",
      desc: "Unified cloud clinic management platform connecting 12 private clinics with real-time doctor availability and electronic health records.",
      tags: ["Next.js", "Docker", "AWS Cloud", "Encrypted EHR"],
      color: "#10B981"
    },
    {
      id: "luxestore-arabia",
      title: "LuxeStore Arabia Omnichannel Fashion",
      category: "E-Commerce",
      year: "2024",
      metric: "$4.6M Annual GMV",
      desc: "Flagship luxury fashion store with customized shopping experience, 0.4s load speed, and seamless integration with Saudi payment rails.",
      tags: ["Headless E-Com", "Mada Pay", "TailwindCSS", "Cloudflare CDN"],
      color: "#F59E0B"
    }
  ],

  whyChooseUs: [
    {
      title: "16+ Years Verified Pedigree",
      desc: "Founded in 2008, SERV5 is one of the region's longest-standing digital engineering pioneers, having delivered over 20,000 successful projects.",
      icon: "ShieldCheck",
      metric: "Since 2008"
    },
    {
      title: "Extreme Speed & Quality Standard",
      desc: "We engineer systems that meet Google's strict Core Web Vitals criteria with zero layout shifts and sub-second First Contentful Paint times.",
      icon: "Zap",
      metric: "100/100 CWV"
    },
    {
      title: "Comprehensive Local Compliance",
      desc: "Pre-integrated with GCC government requirements including ZATCA Phase 2 E-Invoicing, Najiz judicial platform, and Mada/Apple Pay standards.",
      icon: "CheckCircle",
      metric: "100% Compliant"
    },
    {
      title: "24/7 Proactive SLA Support",
      desc: "Continuous server monitoring, automated security patches, and instant incident response by senior engineers around the clock.",
      icon: "Clock",
      metric: "24/7 Standby"
    }
  ],

  testimonials: [
    {
      quote: "SERV5 transformed our multi-branch delivery system into a well-oiled machine. Our customer app rating skyrocketed to 4.9 stars, and order delivery times decreased by 35%.",
      author: "Eng. Tareq Al-Ghamdi",
      role: "Chief Operating Officer",
      company: "Pizza Plaza Group",
      rating: 5
    },
    {
      quote: "The ZATCA e-invoicing compliance and custom ERP workflow engineered by SERV5 saved our accounting division hundreds of hours every month. Flawless execution.",
      author: "Sultan Al-Otaibi",
      role: "Managing Director",
      company: "Al-Otaibi Legal & Consulting",
      rating: 5
    },
    {
      quote: "Our e-commerce store went from sluggish 5-second loads to instant 0.4s response times. Our ROAS surged to 5.2x within the first 60 days of launch.",
      author: "Laila Mansour",
      role: "E-Commerce Director",
      company: "LuxeStore Arabia",
      rating: 5
    }
  ],

  blogPosts: [
    {
      id: "zatca-phase-2-guide",
      title: "Architecting ZATCA Phase 2 Integration: An Engineering Blueprint",
      excerpt: "Technical deep-dive on implementing cryptographic stamps, UUIDs, and automated clearance pipelines for Saudi e-invoicing.",
      date: "Nov 2024",
      readTime: "6 min read",
      category: "Enterprise Tech"
    },
    {
      id: "core-web-vitals-scale",
      title: "How We Achieve 100/100 Google Core Web Vitals on Massive React Apps",
      excerpt: "Practical optimization techniques covering code splitting, modern image pipelines, and edge SSR caching.",
      date: "Oct 2024",
      readTime: "8 min read",
      category: "Performance"
    },
    {
      id: "roas-scaling-gcc",
      title: "Maximizing E-Commerce ROAS Across Saudi Arabia and the Gulf in 2025",
      excerpt: "Strategic insights into omnichannel ad targeting on TikTok and Snapchat paired with frictionless Mada checkouts.",
      date: "Oct 2024",
      readTime: "5 min read",
      category: "Growth & CRO"
    }
  ]
};
