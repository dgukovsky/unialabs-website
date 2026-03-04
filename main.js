const supportedLanguages = ["en", "es", "sr"];
const localeByLanguage = {
  en: "en-US",
  es: "es-ES",
  sr: "sr-RS",
};

const ogLocaleByLanguage = {
  en: "en_US",
  es: "es_ES",
  sr: "sr_RS",
};

const translations = {
  en: {
    metaTitle: "UNIA Software Factory",
    metaDescription:
      "UNIA Software Factory: software development, applied AI, and automation for high-impact operations in Chile, Ecuador, Serbia, and Europe.",
    menuOpenLabel: "Open menu",
    brandSub: "Software Factory",
    navServices: "Services",
    navSuccessCases: "Success Cases",
    navMethodology: "Methodology",
    navStack: "Stack",
    navBookCall: "Book a discovery call",
    heroEyebrow: "Development · AI · Automation",
    heroTypewriter: "Software Factory to design, automate, and scale.",
    heroText:
      "We design and build mission-critical software powered by applied AI. From discovery to production, we ship fast and focus on measurable business impact.",
    heroPrimaryCta: "Book a discovery call",
    heroSecondaryCta: "Explore success cases",
    floatingLeftTitle: "Cloud Ops",
    floatingLeftValue: "30% lower OPEX",
    floatingLeftText: "Automation powered by Celestia",
    screenTopStatus: "Live",
    kpiAutomation: "Automation",
    kpiProductivity: "Productivity",
    kpiSprint: "Sprint",
    kpiSprintValue: "2 weeks",
    roadmap1Html: "<span>Month 1</span> Discovery + Architecture",
    roadmap2Html: "<span>Month 2</span> Core product + Integrations",
    roadmap3Html: "<span>Month 3</span> QA + Deploy + Scale-up",
    floatingRightValue: "50% less manual effort",
    floatingRightText: "End-to-end tax operations",
    servicesEyebrow: "Services",
    servicesTitleHtml:
      'Transform your operation into a <span class="grad-text"><span class="spark">⚡</span>growth platform</span>',
    servicesSub:
      "We combine software, AI, and automation to remove operational friction, improve revenue performance, and scale your core workflows with control.",
    service1Title: "Custom Software Engineering",
    service1Text:
      "We design and build web platforms, internal systems, and APIs tailored to your business model and operating workflows.",
    service1Step1Title: "Product Discovery",
    service1Step1Text: "Business mapping, scope, and architecture definition",
    service1Step1Time: "Week 1",
    service1Step2Title: "Build & Integrate",
    service1Step2Text: "Frontend, backend, APIs, and mission-critical modules",
    service1Step2Time: "Weeks 2-8",
    service1Step3Title: "Release & Scale",
    service1Step3Text: "Production deployment, monitoring, and product evolution",
    service1Step3Time: "Continuous",
    service2Title: "AI, Agents, and Workflow Automation",
    service2Text:
      "We automate repetitive operations with AI copilots, RAG systems, and task agents connected to your internal tools.",
    service2Pipeline: "Automation Pipeline",
    service2Layers: "3 layers",
    service2UpsellTitle: "Deploy AI Agent",
    service2UpsellText: "Knowledge + tool integrations + action rules",
    service2Deploy: "Deploy",
    service3Title: "Cloud, DevOps, and Reliability",
    service3Text:
      "We deliver secure cloud architecture, CI/CD, observability, and performance governance for stable and scalable operations.",
    chartLabel: "Platform Reliability Snapshot",
    chartTotal: "99.95% Uptime",
    chartDelta: "SLA trend in real time",
    monthJan: "JAN",
    monthFeb: "FEB",
    monthMar: "MAR",
    monthApr: "APR",
    monthMay: "MAY",
    monthJun: "JUN",
    solutionsEyebrow: "Success Cases",
    solutionsTitleHtml:
      'Solutions designed to <span class="grad-text"><span class="spark">⚡</span>help you scale</span>',
    solutionsSub:
      "Each solution combines product thinking, architecture, and automation to solve real operational and growth bottlenecks.",
    case1Lead: "New subscriber onboarded",
    case1Title: "Build Monthly Recurring Revenue",
    case1Text:
      "Convert one-time customers into loyal subscribers with traceable onboarding and retention automations across your enterprise workflows.",
    case2Title: "Real-Time Revenue Insights",
    case2Text:
      "Track cloud performance, operating margins, and growth trends from one live dashboard powered by Celestia.",
    case3Fail1: "Payment failed · $99.9",
    case3Fail2: "Payment failed · $149.9",
    case3Band: "UNIA Pay Recovery",
    case3Ok1: "Recovered payment · $60.0",
    case3Ok2: "Recovered payment · $99.9",
    case3Title: "Fewer Failed Payments",
    case3Text:
      "Smart retries, payment logic, and proactive alerts recover revenue automatically and keep your cash flow stable.",
    case4Cart: "Your cart",
    case4Items: "2 items",
    case4Item1: "Tax advisory package",
    case4Item2: "Cloud optimization report",
    case4Upsell: "Add one more service for FREE onboarding",
    case4Title: "2X Your Average Order Value",
    case4Text:
      "Increase value per account with built-in upsells and post-purchase automation across your operational service catalog.",
    case5Title: "Less Busywork, More Growth",
    case5Text:
      "Connect all core systems in one layer and remove repetitive manual tasks so your team can focus on strategic growth.",
    case6Badge: "Recurring Revenue Engine",
    case6Title: "Skyrocket Profits With Monthly Recurring Revenue",
    case6Text:
      "Build predictable growth with retention-first workflows, recovery logic, and recurring monetization powered by your own platform.",
    case6Cta: "Request a Demo",
    methodologyEyebrow: "Methodology",
    methodologyTitle: "Disciplined engineering, fast delivery",
    method1Title: "Discovery and diagnosis",
    method1Text: "We map processes, bottlenecks, and business objectives before writing production code.",
    method2Title: "Solution design",
    method2Text: "We define architecture, workflows, and release plans with controlled technical risk.",
    method3Title: "Iterative development",
    method3Text: "Two-week sprints with incremental delivery, feedback loops, and full traceability.",
    method4Title: "QA and validation",
    method4Text:
      "Functional and technical testing in controlled environments with a clear definition of done.",
    method5Title: "Implementation",
    method5Text: "Production rollout with monitoring, release checklists, and stabilization support.",
    method6Title: "Continuous evolution",
    method6Text: "Ongoing optimization of product, AI, and processes to improve operational efficiency.",
    stackEyebrow: "Stack",
    stackTitle: "Technology built for real-world scalability",
    stack1Title: "Platform",
    stack1Text: "Web apps, APIs, cloud architecture, observability, and security.",
    stack2Title: "Data & AI",
    stack2Text: "RAG, specialized agents, process automation, and operational analytics.",
    stack3Title: "Delivery",
    stack3Text: "SCRUM, CI/CD, continuous QA, and post-release operational support.",
    model1Eyebrow: "Model 1",
    model1Title: "Software Partnership",
    model1Text:
      "We design and build digital products with a dedicated team, a prioritized roadmap, and KPI-driven deliveries.",
    model2Eyebrow: "Model 2",
    model2Title: "In Situ Factory",
    model2Text:
      "Embedded senior talent inside your operation to evolve internal systems, automate workflows, and sustain performance.",
    ctaEyebrow: "Ready to scale?",
    ctaTitle: "Turn your operations into a competitive advantage",
    ctaText: "Frictionless discovery: architecture assessment, AI opportunities, and a phased execution roadmap.",
    footerBrand: "UNIA Software Factory",
    footerTagline: "Development · AI · Automation",
    liveBarsUptimeSuffix: "Uptime",
    liveBarsPointsVsBaseline: "pts vs baseline",
    liveBarsVsBaseline: "vs baseline",
  },
  es: {
    metaTitle: "UNIA Software Factory",
    metaDescription:
      "UNIA Software Factory: desarrollo de software, IA aplicada y automatización para operaciones de alto impacto en Chile, Ecuador, Serbia y Europa.",
    menuOpenLabel: "Abrir menú",
    brandSub: "Fábrica de Software",
    navServices: "Servicios",
    navSuccessCases: "Casos de éxito",
    navMethodology: "Metodología",
    navStack: "Stack",
    navBookCall: "Agenda una llamada",
    heroEyebrow: "Desarrollo · IA · Automatización",
    heroTypewriter: "Software Factory para diseñar, automatizar y escalar.",
    heroText:
      "Diseñamos y construimos software de misión crítica potenciado por IA aplicada. Desde el discovery hasta producción, entregamos rápido y con impacto de negocio medible.",
    heroPrimaryCta: "Agenda una llamada",
    heroSecondaryCta: "Explora casos de éxito",
    floatingLeftTitle: "Cloud Ops",
    floatingLeftValue: "30% menos OPEX",
    floatingLeftText: "Automatización impulsada por Celestia",
    screenTopStatus: "En vivo",
    kpiAutomation: "Automatización",
    kpiProductivity: "Productividad",
    kpiSprint: "Sprint",
    kpiSprintValue: "2 semanas",
    roadmap1Html: "<span>Mes 1</span> Discovery + Arquitectura",
    roadmap2Html: "<span>Mes 2</span> Producto core + Integraciones",
    roadmap3Html: "<span>Mes 3</span> QA + Despliegue + Escalamiento",
    floatingRightValue: "50% menos trabajo manual",
    floatingRightText: "Operación tributaria end-to-end",
    servicesEyebrow: "Servicios",
    servicesTitleHtml:
      'Transforma tu operación en una <span class="grad-text"><span class="spark">⚡</span>plataforma de crecimiento</span>',
    servicesSub:
      "Combinamos software, IA y automatización para eliminar fricción operativa, mejorar el rendimiento de ingresos y escalar tus flujos críticos con control.",
    service1Title: "Ingeniería de Software a Medida",
    service1Text:
      "Diseñamos y construimos plataformas web, sistemas internos y APIs adaptados a tu modelo de negocio y forma de operar.",
    service1Step1Title: "Descubrimiento del producto",
    service1Step1Text: "Mapeo de negocio, alcance y definición de arquitectura",
    service1Step1Time: "Semana 1",
    service1Step2Title: "Construcción e integración",
    service1Step2Text: "Frontend, backend, APIs y módulos de misión crítica",
    service1Step2Time: "Semanas 2-8",
    service1Step3Title: "Lanzamiento y escalado",
    service1Step3Text: "Despliegue en producción, monitoreo y evolución del producto",
    service1Step3Time: "Continuo",
    service2Title: "IA, Agentes y Automatización de Flujos",
    service2Text:
      "Automatizamos tareas repetitivas con copilotos de IA, sistemas RAG y agentes conectados a tus herramientas internas.",
    service2Pipeline: "Pipeline de automatización",
    service2Layers: "3 capas",
    service2UpsellTitle: "Desplegar agente de IA",
    service2UpsellText: "Conocimiento + integraciones + reglas de acción",
    service2Deploy: "Desplegar",
    service3Title: "Cloud, DevOps y Confiabilidad",
    service3Text:
      "Entregamos arquitectura cloud segura, CI/CD, observabilidad y gobierno de performance para operaciones estables y escalables.",
    chartLabel: "Panorama de confiabilidad de plataforma",
    chartTotal: "99.95% disponibilidad",
    chartDelta: "Tendencia de SLA en tiempo real",
    monthJan: "ENE",
    monthFeb: "FEB",
    monthMar: "MAR",
    monthApr: "ABR",
    monthMay: "MAY",
    monthJun: "JUN",
    solutionsEyebrow: "Casos de éxito",
    solutionsTitleHtml:
      'Soluciones diseñadas para <span class="grad-text"><span class="spark">⚡</span>escalar contigo</span>',
    solutionsSub:
      "Cada solución combina visión de producto, arquitectura y automatización para resolver cuellos de botella operativos y de crecimiento.",
    case1Lead: "Nuevo suscriptor incorporado",
    case1Title: "Construye ingresos recurrentes mensuales",
    case1Text:
      "Convierte clientes de una sola compra en suscriptores leales con automatizaciones trazables de onboarding y retención.",
    case2Title: "Insights de ingresos en tiempo real",
    case2Text:
      "Monitorea performance cloud, márgenes operativos y tendencias de crecimiento en un dashboard en vivo impulsado por Celestia.",
    case3Fail1: "Pago fallido · $99.9",
    case3Fail2: "Pago fallido · $149.9",
    case3Band: "Recuperación UNIA Pay",
    case3Ok1: "Pago recuperado · $60.0",
    case3Ok2: "Pago recuperado · $99.9",
    case3Title: "Menos pagos fallidos",
    case3Text:
      "Reintentos inteligentes, lógica de pagos y alertas proactivas recuperan ingresos automáticamente y estabilizan tu flujo de caja.",
    case4Cart: "Tu carrito",
    case4Items: "2 ítems",
    case4Item1: "Paquete de asesoría tributaria",
    case4Item2: "Reporte de optimización cloud",
    case4Upsell: "Agrega un servicio más y obtén onboarding GRATIS",
    case4Title: "Duplica tu ticket promedio",
    case4Text:
      "Aumenta el valor por cuenta con upsells integrados y automatización post-compra en tu catálogo de servicios.",
    case5Title: "Menos tareas manuales, más crecimiento",
    case5Text:
      "Conecta tus sistemas críticos en una sola capa y elimina trabajo repetitivo para enfocar al equipo en crecimiento estratégico.",
    case6Badge: "Motor de ingresos recurrentes",
    case6Title: "Dispara las ganancias con ingresos recurrentes mensuales",
    case6Text:
      "Construye crecimiento predecible con flujos orientados a retención, lógica de recuperación y monetización recurrente.",
    case6Cta: "Solicitar demo",
    methodologyEyebrow: "Metodología",
    methodologyTitle: "Ingeniería disciplinada, entrega rápida",
    method1Title: "Discovery y diagnóstico",
    method1Text: "Mapeamos procesos, cuellos de botella y objetivos de negocio antes de escribir código productivo.",
    method2Title: "Diseño de solución",
    method2Text: "Definimos arquitectura, workflows y plan de releases con riesgo técnico controlado.",
    method3Title: "Desarrollo iterativo",
    method3Text: "Sprints de dos semanas con entrega incremental, ciclos de feedback y trazabilidad completa.",
    method4Title: "QA y validación",
    method4Text:
      "Pruebas funcionales y técnicas en entornos controlados con una definición clara de terminado.",
    method5Title: "Implementación",
    method5Text: "Salida a producción con monitoreo, checklists de release y soporte de estabilización.",
    method6Title: "Evolución continua",
    method6Text: "Optimización continua de producto, IA y procesos para mejorar la eficiencia operativa.",
    stackEyebrow: "Stack",
    stackTitle: "Tecnología construida para escalar en el mundo real",
    stack1Title: "Plataforma",
    stack1Text: "Apps web, APIs, arquitectura cloud, observabilidad y seguridad.",
    stack2Title: "Datos e IA",
    stack2Text: "RAG, agentes especializados, automatización de procesos y analítica operativa.",
    stack3Title: "Entrega",
    stack3Text: "SCRUM, CI/CD, QA continuo y soporte operativo post-lanzamiento.",
    model1Eyebrow: "Modelo 1",
    model1Title: "Software Partnership",
    model1Text:
      "Diseñamos y construimos productos digitales con un equipo dedicado, roadmap priorizado y entregas orientadas a KPIs.",
    model2Eyebrow: "Modelo 2",
    model2Title: "Factory In Situ",
    model2Text:
      "Talento senior embebido en tu operación para evolucionar sistemas internos, automatizar flujos y sostener performance.",
    ctaEyebrow: "¿Listo para escalar?",
    ctaTitle: "Convierte tus operaciones en una ventaja competitiva",
    ctaText: "Discovery sin fricción: evaluación de arquitectura, oportunidades de IA y roadmap de ejecución por fases.",
    footerBrand: "UNIA Software Factory",
    footerTagline: "Desarrollo · IA · Automatización",
    liveBarsUptimeSuffix: "disponibilidad",
    liveBarsPointsVsBaseline: "pts vs línea base",
    liveBarsVsBaseline: "vs línea base",
  },
  sr: {
    metaTitle: "UNIA Software Factory",
    metaDescription:
      "UNIA Software Factory: razvoj softvera, primenjena AI i automatizacija za operacije visokog uticaja u Cileu, Ekvadoru, Srbiji i Evropi.",
    menuOpenLabel: "Otvori meni",
    brandSub: "Softverska Fabrika",
    navServices: "Usluge",
    navSuccessCases: "Primeri uspeha",
    navMethodology: "Metodologija",
    navStack: "Stack",
    navBookCall: "Zakaži discovery poziv",
    heroEyebrow: "Razvoj · AI · Automatizacija",
    heroTypewriter: "Softverska fabrika za dizajn, automatizaciju i skaliranje.",
    heroText:
      "Dizajniramo i gradimo mission-critical softver uz primenjenu AI. Od discovery faze do produkcije, isporučujemo brzo i fokusirano na merljiv poslovni uticaj.",
    heroPrimaryCta: "Zakaži discovery poziv",
    heroSecondaryCta: "Pogledaj primere uspeha",
    floatingLeftTitle: "Cloud Ops",
    floatingLeftValue: "30% niži OPEX",
    floatingLeftText: "Automatizacija uz Celestia platformu",
    screenTopStatus: "Uživo",
    kpiAutomation: "Automatizacija",
    kpiProductivity: "Produktivnost",
    kpiSprint: "Sprint",
    kpiSprintValue: "2 nedelje",
    roadmap1Html: "<span>Mesec 1</span> Discovery + Arhitektura",
    roadmap2Html: "<span>Mesec 2</span> Core proizvod + Integracije",
    roadmap3Html: "<span>Mesec 3</span> QA + Deploy + Skaliranje",
    floatingRightValue: "50% manje ručnog rada",
    floatingRightText: "Poreske operacije od početka do kraja",
    servicesEyebrow: "Usluge",
    servicesTitleHtml:
      'Transformišite poslovanje u <span class="grad-text"><span class="spark">⚡</span>platformu za rast</span>',
    servicesSub:
      "Kombinujemo softver, AI i automatizaciju da uklonimo operativno trenje, unapredimo rezultate prihoda i skaliramo ključne tokove rada uz punu kontrolu.",
    service1Title: "Prilagođeni Softverski Inženjering",
    service1Text:
      "Dizajniramo i gradimo web platforme, interne sisteme i API-je prilagođene vašem poslovnom modelu i operativnim procesima.",
    service1Step1Title: "Product discovery",
    service1Step1Text: "Mapiranje poslovanja, opseg i definicija arhitekture",
    service1Step1Time: "Nedelja 1",
    service1Step2Title: "Izrada i integracija",
    service1Step2Text: "Frontend, backend, API-ji i mission-critical moduli",
    service1Step2Time: "Nedelje 2-8",
    service1Step3Title: "Lansiranje i skaliranje",
    service1Step3Text: "Deploy u produkciju, monitoring i evolucija proizvoda",
    service1Step3Time: "Kontinuirano",
    service2Title: "AI, Agenti i Automatizacija Tokova",
    service2Text:
      "Automatizujemo repetitivne operacije pomoću AI kopilota, RAG sistema i agenata povezanih sa vašim internim alatima.",
    service2Pipeline: "Automatizacioni pipeline",
    service2Layers: "3 sloja",
    service2UpsellTitle: "Postavi AI agenta",
    service2UpsellText: "Znanje + integracije alata + pravila akcije",
    service2Deploy: "Postavi",
    service3Title: "Cloud, DevOps i Pouzdanost",
    service3Text:
      "Isporučujemo bezbednu cloud arhitekturu, CI/CD, observability i upravljanje performansama za stabilne i skalabilne operacije.",
    chartLabel: "Pregled pouzdanosti platforme",
    chartTotal: "99.95% dostupnost",
    chartDelta: "SLA trend u realnom vremenu",
    monthJan: "JAN",
    monthFeb: "FEB",
    monthMar: "MAR",
    monthApr: "APR",
    monthMay: "MAJ",
    monthJun: "JUN",
    solutionsEyebrow: "Primeri uspeha",
    solutionsTitleHtml:
      'Rešenja dizajnirana da <span class="grad-text"><span class="spark">⚡</span>vas skaliraju</span>',
    solutionsSub:
      "Svako rešenje kombinuje product pristup, arhitekturu i automatizaciju kako bi rešilo stvarna uska grla rasta i operacija.",
    case1Lead: "Novi pretplatnik aktiviran",
    case1Title: "Izgradite mesečni recurring prihod",
    case1Text:
      "Pretvorite jednokratne kupce u lojalne pretplatnike uz praćene onboarding i retention automatizacije.",
    case2Title: "Uvid u prihode u realnom vremenu",
    case2Text:
      "Pratite cloud performanse, operativne marže i trendove rasta iz jednog live dashboard-a uz Celestia.",
    case3Fail1: "Plaćanje neuspešno · $99.9",
    case3Fail2: "Plaćanje neuspešno · $149.9",
    case3Band: "UNIA Pay Recovery",
    case3Ok1: "Plaćanje vraćeno · $60.0",
    case3Ok2: "Plaćanje vraćeno · $99.9",
    case3Title: "Manje neuspešnih plaćanja",
    case3Text:
      "Pametni retry mehanizmi, logika plaćanja i proaktivna upozorenja automatski vraćaju prihod i stabilizuju cash flow.",
    case4Cart: "Vaša korpa",
    case4Items: "2 stavke",
    case4Item1: "Paket poreskog savetovanja",
    case4Item2: "Izveštaj cloud optimizacije",
    case4Upsell: "Dodajte još jednu uslugu i dobijte BESPLATAN onboarding",
    case4Title: "2X veća prosečna vrednost porudžbine",
    case4Text:
      "Povećajte vrednost po nalogu kroz ugrađene upsell tokove i automatizaciju nakon kupovine.",
    case5Title: "Manje rutinskog rada, više rasta",
    case5Text:
      "Povežite sve ključne sisteme u jedan sloj i uklonite ponavljajuće ručne zadatke da tim radi na strateškom rastu.",
    case6Badge: "Engine za recurring prihod",
    case6Title: "Ubrzajte profit kroz mesečni recurring prihod",
    case6Text:
      "Izgradite predvidiv rast kroz retention-first tokove, recovery logiku i recurring monetizaciju na vašoj platformi.",
    case6Cta: "Zatraži demo",
    methodologyEyebrow: "Metodologija",
    methodologyTitle: "Disciplinovan inženjering, brza isporuka",
    method1Title: "Discovery i dijagnoza",
    method1Text: "Mapiramo procese, uska grla i poslovne ciljeve pre pisanja produkcionog koda.",
    method2Title: "Dizajn rešenja",
    method2Text: "Definišemo arhitekturu, tokove rada i release plan sa kontrolisanim tehničkim rizikom.",
    method3Title: "Iterativni razvoj",
    method3Text: "Sprintovi od dve nedelje, inkrementalna isporuka, feedback petlje i puna sledljivost.",
    method4Title: "QA i validacija",
    method4Text: "Funkcionalno i tehničko testiranje u kontrolisanim okruženjima uz jasan kriterijum završetka.",
    method5Title: "Implementacija",
    method5Text: "Puštanje u produkciju uz monitoring, release checkliste i podršku stabilizaciji.",
    method6Title: "Kontinuirana evolucija",
    method6Text: "Kontinuirana optimizacija proizvoda, AI i procesa radi bolje operativne efikasnosti.",
    stackEyebrow: "Stack",
    stackTitle: "Tehnologija napravljena za skaliranje u realnim uslovima",
    stack1Title: "Platforma",
    stack1Text: "Web aplikacije, API-ji, cloud arhitektura, observability i bezbednost.",
    stack2Title: "Podaci i AI",
    stack2Text: "RAG, specijalizovani agenti, automatizacija procesa i operativna analitika.",
    stack3Title: "Isporuka",
    stack3Text: "SCRUM, CI/CD, kontinuirani QA i operativna podrška nakon lansiranja.",
    model1Eyebrow: "Model 1",
    model1Title: "Software Partnership",
    model1Text:
      "Dizajniramo i gradimo digitalne proizvode sa posvećenim timom, prioritetnim roadmap-om i KPI vođenim isporukama.",
    model2Eyebrow: "Model 2",
    model2Title: "In Situ Factory",
    model2Text:
      "Senior stručnjaci u vašoj operaciji koji unapređuju interne sisteme, automatizuju tokove i održavaju performanse.",
    ctaEyebrow: "Spremni za skaliranje?",
    ctaTitle: "Pretvorite operacije u konkurentsku prednost",
    ctaText: "Frictionless discovery: procena arhitekture, AI prilike i fazni plan izvršenja.",
    footerBrand: "UNIA Software Factory",
    footerTagline: "Razvoj · AI · Automatizacija",
    liveBarsUptimeSuffix: "dostupnost",
    liveBarsPointsVsBaseline: "pts u odnosu na osnovu",
    liveBarsVsBaseline: "u odnosu na osnovu",
  },
};

const languageFromBrowser = () => {
  const normalize = (value) => {
    if (!value || typeof value !== "string") return "";
    return value.toLowerCase().split("-")[0];
  };

  const urlParams = new URLSearchParams(window.location.search);
  const langParam = normalize(urlParams.get("lang"));
  if (supportedLanguages.includes(langParam)) return langParam;

  const userLanguages = Array.isArray(navigator.languages) ? navigator.languages : [];
  const primary = userLanguages.find((candidate) => supportedLanguages.includes(normalize(candidate)));
  if (primary) return normalize(primary);

  const fallback = normalize(navigator.language || "");
  return supportedLanguages.includes(fallback) ? fallback : "en";
};

const activeLanguage = languageFromBrowser();
const activeLocale = localeByLanguage[activeLanguage] || "en-US";
const copy = translations[activeLanguage] || translations.en;

const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (el && typeof value === "string") el.textContent = value;
};

const setHtml = (selector, value) => {
  const el = document.querySelector(selector);
  if (el && typeof value === "string") el.innerHTML = value;
};

const setMeta = (selector, value) => {
  const el = document.querySelector(selector);
  if (el && typeof value === "string") el.setAttribute("content", value);
};

const applyLanguage = () => {
  document.documentElement.setAttribute("lang", activeLanguage);
  document.title = copy.metaTitle;

  setMeta('meta[name="description"]', copy.metaDescription);
  setMeta('meta[property="og:title"]', copy.metaTitle);
  setMeta('meta[property="og:description"]', copy.metaDescription);
  setMeta('meta[property="og:locale"]', ogLocaleByLanguage[activeLanguage] || "en_US");
  setMeta('meta[name="twitter:title"]', copy.metaTitle);
  setMeta('meta[name="twitter:description"]', copy.metaDescription);

  setText(".brand-sub", copy.brandSub);
  setText('#siteNav a[href="#services"]', copy.navServices);
  setText('#siteNav a[href="#solutions"]', copy.navSuccessCases);
  setText('#siteNav a[href="#methodology"]', copy.navMethodology);
  setText('#siteNav a[href="#stack"]', copy.navStack);
  setText('#siteNav a[href="#contact"]', copy.navBookCall);

  const menuBtn = document.getElementById("menuBtn");
  if (menuBtn) menuBtn.setAttribute("aria-label", copy.menuOpenLabel);

  setText(".hero .eyebrow", copy.heroEyebrow);
  setText(".hero .hero-text", copy.heroText);
  setText(".hero .hero-actions .btn-primary", copy.heroPrimaryCta);
  setText(".hero .hero-actions .btn-ghost", copy.heroSecondaryCta);
  setText(".floating-left .floating-title", copy.floatingLeftTitle);
  setText(".floating-left strong", copy.floatingLeftValue);
  setText(".floating-left span", copy.floatingLeftText);
  setText(".screen-top span", copy.screenTopStatus);
  setText(".screen-grid .kpi:nth-child(1) p", copy.kpiAutomation);
  setText(".screen-grid .kpi:nth-child(2) p", copy.kpiProductivity);
  setText(".screen-grid .kpi:nth-child(3) p", copy.kpiSprint);
  setText(".screen-grid .kpi:nth-child(3) strong", copy.kpiSprintValue);
  setHtml(".screen-roadmap div:nth-child(1)", copy.roadmap1Html);
  setHtml(".screen-roadmap div:nth-child(2)", copy.roadmap2Html);
  setHtml(".screen-roadmap div:nth-child(3)", copy.roadmap3Html);
  setText(".floating-right strong", copy.floatingRightValue);
  setText(".floating-right span", copy.floatingRightText);

  setText("#services .section-head .eyebrow", copy.servicesEyebrow);
  setHtml("#services .section-head h2", copy.servicesTitleHtml);
  setText("#services .section-sub", copy.servicesSub);
  setText(".showcase-row .showcase-card:nth-child(1) h3", copy.service1Title);
  setText(".showcase-row .showcase-card:nth-child(1) > p", copy.service1Text);
  setText(".showcase-row .showcase-card:nth-child(1) .log-item:nth-child(1) strong", copy.service1Step1Title);
  setText(".showcase-row .showcase-card:nth-child(1) .log-item:nth-child(1) .log-copy p", copy.service1Step1Text);
  setText(".showcase-row .showcase-card:nth-child(1) .log-item:nth-child(1) time", copy.service1Step1Time);
  setText(".showcase-row .showcase-card:nth-child(1) .log-item:nth-child(2) strong", copy.service1Step2Title);
  setText(".showcase-row .showcase-card:nth-child(1) .log-item:nth-child(2) .log-copy p", copy.service1Step2Text);
  setText(".showcase-row .showcase-card:nth-child(1) .log-item:nth-child(2) time", copy.service1Step2Time);
  setText(".showcase-row .showcase-card:nth-child(1) .log-item:nth-child(3) strong", copy.service1Step3Title);
  setText(".showcase-row .showcase-card:nth-child(1) .log-item:nth-child(3) .log-copy p", copy.service1Step3Text);
  setText(".showcase-row .showcase-card:nth-child(1) .log-item:nth-child(3) time", copy.service1Step3Time);
  setText(".showcase-row .showcase-card:nth-child(2) h3", copy.service2Title);
  setText(".showcase-row .showcase-card:nth-child(2) > p", copy.service2Text);
  setText(".showcase-row .showcase-card:nth-child(2) .cart-line span", copy.service2Pipeline);
  setText(".showcase-row .showcase-card:nth-child(2) .cart-line b", copy.service2Layers);
  setText(".showcase-row .showcase-card:nth-child(2) .upsell-copy strong", copy.service2UpsellTitle);
  setText(".showcase-row .showcase-card:nth-child(2) .upsell-copy p", copy.service2UpsellText);
  setText(".showcase-row .showcase-card:nth-child(2) .upsell-box button", copy.service2Deploy);
  setText(".showcase-row .showcase-card:nth-child(3) h3", copy.service3Title);
  setText(".showcase-row .showcase-card:nth-child(3) > p", copy.service3Text);
  setText(".chart-label", copy.chartLabel);
  setText(".chart-total", copy.chartTotal);
  setText(".chart-delta", copy.chartDelta);
  setText(".bars .bar:nth-child(1) em", copy.monthJan);
  setText(".bars .bar:nth-child(2) em", copy.monthFeb);
  setText(".bars .bar:nth-child(3) em", copy.monthMar);
  setText(".bars .bar:nth-child(4) em", copy.monthApr);
  setText(".bars .bar:nth-child(5) em", copy.monthMay);
  setText(".bars .bar:nth-child(6) em", copy.monthJun);

  setText("#solutions .section-head .eyebrow", copy.solutionsEyebrow);
  setHtml("#solutions .section-head h2", copy.solutionsTitleHtml);
  setText("#solutions .section-sub", copy.solutionsSub);
  setText(".case-mosaic .mosaic-card:nth-child(1) .lead-pill", copy.case1Lead);
  setText(".case-mosaic .mosaic-card:nth-child(1) h3", copy.case1Title);
  setText(".case-mosaic .mosaic-card:nth-child(1) p", copy.case1Text);
  setText(".case-mosaic .mosaic-card:nth-child(2) h3", copy.case2Title);
  setText(".case-mosaic .mosaic-card:nth-child(2) p", copy.case2Text);
  setText(".case-mosaic .mosaic-card:nth-child(3) .viz-recovery > .status-item.fail:nth-child(1)", copy.case3Fail1);
  setText(".case-mosaic .mosaic-card:nth-child(3) .viz-recovery > .status-item.fail:nth-child(2)", copy.case3Fail2);
  setText(".case-mosaic .mosaic-card:nth-child(3) .viz-recovery > .recovery-band:nth-child(3)", copy.case3Band);
  setText(".case-mosaic .mosaic-card:nth-child(3) .viz-recovery > .status-item.ok:nth-child(4)", copy.case3Ok1);
  setText(".case-mosaic .mosaic-card:nth-child(3) .viz-recovery > .status-item.ok:nth-child(5)", copy.case3Ok2);
  setText(".case-mosaic .mosaic-card:nth-child(3) h3", copy.case3Title);
  setText(".case-mosaic .mosaic-card:nth-child(3) p", copy.case3Text);
  setText(".case-mosaic .mosaic-card:nth-child(4) .checkout-head span", copy.case4Cart);
  setText(".case-mosaic .mosaic-card:nth-child(4) .checkout-head b", copy.case4Items);
  setText(".case-mosaic .mosaic-card:nth-child(4) .checkout-row:nth-child(2) p", copy.case4Item1);
  setText(".case-mosaic .mosaic-card:nth-child(4) .checkout-row:nth-child(3) p", copy.case4Item2);
  setText(".case-mosaic .mosaic-card:nth-child(4) .checkout-upsell", copy.case4Upsell);
  setText(".case-mosaic .mosaic-card:nth-child(4) h3", copy.case4Title);
  setText(".case-mosaic .mosaic-card:nth-child(4) > p", copy.case4Text);
  setText(".case-mosaic .mosaic-card:nth-child(5) h3", copy.case5Title);
  setText(".case-mosaic .mosaic-card:nth-child(5) > p", copy.case5Text);
  setText(".case-mosaic .mosaic-card:nth-child(6) .viz-gradient span", copy.case6Badge);
  setText(".case-mosaic .mosaic-card:nth-child(6) h3", copy.case6Title);
  setText(".case-mosaic .mosaic-card:nth-child(6) > p", copy.case6Text);
  setText(".case-mosaic .mosaic-card:nth-child(6) .mini-cta", copy.case6Cta);

  setText("#methodology .section-head .eyebrow", copy.methodologyEyebrow);
  setText("#methodology .section-head h2", copy.methodologyTitle);
  setText("#methodology .flow-step:nth-child(1) h3", copy.method1Title);
  setText("#methodology .flow-step:nth-child(1) p", copy.method1Text);
  setText("#methodology .flow-step:nth-child(2) h3", copy.method2Title);
  setText("#methodology .flow-step:nth-child(2) p", copy.method2Text);
  setText("#methodology .flow-step:nth-child(3) h3", copy.method3Title);
  setText("#methodology .flow-step:nth-child(3) p", copy.method3Text);
  setText("#methodology .flow-step:nth-child(4) h3", copy.method4Title);
  setText("#methodology .flow-step:nth-child(4) p", copy.method4Text);
  setText("#methodology .flow-step:nth-child(5) h3", copy.method5Title);
  setText("#methodology .flow-step:nth-child(5) p", copy.method5Text);
  setText("#methodology .flow-step:nth-child(6) h3", copy.method6Title);
  setText("#methodology .flow-step:nth-child(6) p", copy.method6Text);

  setText("#stack .section-head .eyebrow", copy.stackEyebrow);
  setText("#stack .section-head h2", copy.stackTitle);
  setText("#stack .stack-col:nth-child(1) h3", copy.stack1Title);
  setText("#stack .stack-col:nth-child(1) p", copy.stack1Text);
  setText("#stack .stack-col:nth-child(2) h3", copy.stack2Title);
  setText("#stack .stack-col:nth-child(2) p", copy.stack2Text);
  setText("#stack .stack-col:nth-child(3) h3", copy.stack3Title);
  setText("#stack .stack-col:nth-child(3) p", copy.stack3Text);

  setText(".model .model-card:nth-child(1) .eyebrow", copy.model1Eyebrow);
  setText(".model .model-card:nth-child(1) h3", copy.model1Title);
  setText(".model .model-card:nth-child(1) p:last-child", copy.model1Text);
  setText(".model .model-card:nth-child(2) .eyebrow", copy.model2Eyebrow);
  setText(".model .model-card:nth-child(2) h3", copy.model2Title);
  setText(".model .model-card:nth-child(2) p:last-child", copy.model2Text);

  setText("#contact .cta-box .eyebrow", copy.ctaEyebrow);
  setText("#contact .cta-box h2", copy.ctaTitle);
  setText("#contact .cta-box > p", copy.ctaText);
  setText(".site-footer .footer-wrap p:nth-child(1)", copy.footerBrand);
  setText(".site-footer .footer-wrap p:nth-child(2)", copy.footerTagline);

  const typewriterEl = document.querySelector(".hero-type");
  if (typewriterEl) {
    typewriterEl.setAttribute("data-typewriter", copy.heroTypewriter);
    typewriterEl.textContent = copy.heroTypewriter;
  }
};

applyLanguage();

const menuBtn = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");
const navLinks = siteNav ? siteNav.querySelectorAll("a") : [];

if (menuBtn && siteNav) {
  menuBtn.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
  });
});

const staggerGroups = [
  ".hero-shell.reveal",
  ".showcase-row .reveal",
  ".case-mosaic .reveal",
  ".flow .reveal",
  ".stack-wrap.reveal",
  ".model .reveal",
  ".cta-box.reveal",
];

staggerGroups.forEach((selector) => {
  document.querySelectorAll(selector).forEach((el, index) => {
    el.style.setProperty("--reveal-delay", `${index * 70}ms`);
  });
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll("[data-typewriter]").forEach((el, index) => {
  const fullText = el.getAttribute("data-typewriter");
  if (!fullText) return;

  if (prefersReducedMotion) {
    el.textContent = fullText;
    return;
  }

  el.textContent = "";
  el.classList.add("is-typing");

  let i = 0;
  const startDelay = 420 + index * 180;

  const typeNext = () => {
    i += 1;
    el.textContent = fullText.slice(0, i);

    if (i < fullText.length) {
      const speed = 58 + Math.random() * 36;
      setTimeout(typeNext, speed);
    } else {
      el.classList.remove("is-typing");
      el.classList.add("is-typed");
    }
  };

  setTimeout(typeNext, startDelay);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

if (!prefersReducedMotion) {
  document.querySelectorAll("[data-live-bars]").forEach((group) => {
    const bars = Array.from(group.querySelectorAll(".bar"));
    if (bars.length < 2) return;
    const mode = group.getAttribute("data-live-mode") || "currency-k";

    const baseHeights = bars.map((bar) => {
      const raw = bar.style.getPropertyValue("--h").trim();
      const parsed = Number.parseFloat(raw);
      return Number.isFinite(parsed) ? parsed : 50;
    });
    const heights = [...baseHeights];

    const parseLabelNumber = (text) => {
      const normalized = text.replace(",", ".");
      const match = normalized.match(/[\d.]+/);
      if (!match) return 100;
      return Number.parseFloat(match[0]);
    };

    const barValues = bars.map((bar, index) => {
      const label = bar.querySelector("span");
      const initialK = label ? parseLabelNumber(label.textContent) : baseHeights[index] * 3;
      return {
        label,
        baseK: initialK,
        currentK: initialK,
      };
    });

    const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
    const compactCurrency = new Intl.NumberFormat(activeLocale, {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1,
    });
    const usdCurrency = new Intl.NumberFormat(activeLocale, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
    const oneDecimal = new Intl.NumberFormat(activeLocale, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
    const twoDecimals = new Intl.NumberFormat(activeLocale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const chartSurface = group.closest(".chart-surface");
    const totalEl = chartSurface ? chartSurface.querySelector(".chart-total") : null;
    const deltaEl = chartSurface ? chartSurface.querySelector(".chart-delta") : null;
    const baseTotalK = barValues.reduce((acc, item) => acc + item.baseK, 0);
    const baseAvg = baseTotalK / barValues.length;

    const apply = () => {
      bars.forEach((bar, index) => {
        bar.style.setProperty("--h", `${heights[index].toFixed(1)}%`);

        const proportionalK = (barValues[index].baseK * heights[index]) / baseHeights[index];
        const maxCap = mode === "percent" ? 100 : barValues[index].baseK * 2;
        barValues[index].currentK = clamp(proportionalK, barValues[index].baseK * 0.4, maxCap);
        if (barValues[index].label) {
          barValues[index].label.textContent =
            mode === "percent"
              ? `${oneDecimal.format(barValues[index].currentK)}%`
              : compactCurrency.format(barValues[index].currentK * 1000);
        }
      });

      if (totalEl) {
        const currentTotalK = barValues.reduce((acc, item) => acc + item.currentK, 0);
        if (mode === "percent") {
          const currentAvg = currentTotalK / barValues.length;
          totalEl.textContent = `${twoDecimals.format(currentAvg)}% ${copy.liveBarsUptimeSuffix}`;
          if (deltaEl) {
            const deltaPts = currentAvg - baseAvg;
            const sign = deltaPts >= 0 ? "+" : "-";
            deltaEl.textContent = `${sign}${twoDecimals.format(Math.abs(deltaPts))} ${copy.liveBarsPointsVsBaseline}`;
          }
        } else {
          totalEl.textContent = usdCurrency.format(currentTotalK * 1000);
          if (deltaEl) {
            const delta = ((currentTotalK - baseTotalK) / baseTotalK) * 100;
            const sign = delta >= 0 ? "+" : "-";
            deltaEl.textContent = `${sign}${oneDecimal.format(Math.abs(delta))}% ${copy.liveBarsVsBaseline}`;
          }
        }
      }
    };

    const tick = () => {
      const up = Math.floor(Math.random() * bars.length);
      let down = Math.floor(Math.random() * bars.length);
      while (down === up) down = Math.floor(Math.random() * bars.length);

      const swing = 4 + Math.random() * 8;
      heights[up] = clamp(heights[up] + swing, 24, 90);
      heights[down] = clamp(heights[down] - swing, 24, 90);

      if (Math.random() > 0.45) {
        const driftIndex = Math.floor(Math.random() * bars.length);
        const drift = (Math.random() - 0.5) * 6;
        heights[driftIndex] = clamp(heights[driftIndex] + drift, 24, 90);
      }

      apply();
    };

    apply();
    const intervalMs = 1100 + Math.random() * 700;
    setInterval(tick, intervalMs);
  });
}
