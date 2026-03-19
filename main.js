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
    metaTitle: "UNIA Software Factory | High-Stakes Software, AI, and Automation",
    metaDescription:
      "UNIA Software Factory designs custom platforms, AI systems, and automation for teams scaling complex operations across Chile, Ecuador, Serbia, and Europe.",
    menuOpenLabel: "Open navigation",
    brandSub: "Software Factory",
    navServices: "Capabilities",
    navSuccessCases: "Outcomes",
    navMethodology: "Execution",
    navStack: "Technologies",
    navBookCall: "Book a call",
    heroEyebrow: "Software Factory · AI Systems · Automation",
    heroTitleHtml: 'Infrastructure-grade software for <span>operators who need to move fast</span>',
    heroText:
      "UNIA designs, builds, and scales custom platforms, AI systems, and automation layers for companies handling real operational complexity.",
    heroPrimaryCta: "Book a discovery call",
    heroSecondaryCta: "Explore capabilities",
    heroStat1Value: "2-week",
    heroStat1Label: "sprint cadence",
    heroStat2Value: "Multi-region",
    heroStat2Label: "Chile, Ecuador, Serbia, Europe",
    heroStat3Value: "Applied AI",
    heroStat3Label: "agents, RAG, automations",
    heroPanelEyebrow: "Execution Layer",
    heroPanelTitle: "From business diagnosis to production systems",
    heroCard1Eyebrow: "Architecture",
    heroCard1Title: "Platforms built around real workflows",
    heroCard1Text:
      "Internal systems, client-facing products, and integrations designed around throughput, control, and scale.",
    heroCard2Eyebrow: "AI Operations",
    heroCard2Title: "Agents that assist, route, and trigger action",
    heroCard2Text:
      "AI copilots, RAG layers, and automations connected to the tools your team already depends on.",
    heroCard3Eyebrow: "Reliability",
    heroCard3Title: "Delivery discipline for serious operations",
    heroCard3Text:
      "CI/CD, observability, release control, and cloud decisions that protect uptime and execution speed.",
    heroStrip1: "Architecture-first",
    heroStrip2: "Senior execution",
    heroStrip3: "Operational scale",
    clientsEyebrow: "Selected clients",
    clientsSub:
      "Teams across finance, commerce, operations, and professional services trust UNIA to build, automate, and evolve critical software.",
    servicesEyebrow: "Capabilities",
    servicesTitleHtml: 'A software factory shaped for <span>complex operations</span>',
    servicesSub:
      "We combine product thinking, engineering, AI, and delivery governance to turn fragmented workflows into durable systems.",
    service1Eyebrow: "01 Platform engineering",
    service1Title: "Custom software that becomes operational infrastructure",
    service1Text:
      "Web apps, portals, internal systems, and APIs that centralize the parts of the business you cannot afford to run manually.",
    service2Eyebrow: "02 AI systems",
    service2Title: "Applied AI that assists teams and accelerates decisions",
    service2Text:
      "Copilots, retrieval systems, and agents that read context, surface knowledge, and trigger the next action with control.",
    service3Eyebrow: "03 Workflow automation",
    service3Title: "Automation layers that remove drag across departments",
    service3Text:
      "Connected flows for finance, support, commerce, reporting, and back-office operations without adding more coordination overhead.",
    service4Eyebrow: "04 Cloud and delivery",
    service4Title: "Release, reliability, and scale built into the stack",
    service4Text:
      "Cloud architecture, CI/CD, observability, and security practices that keep execution fast without compromising stability.",
    solutionsEyebrow: "Outcomes",
    solutionsTitleHtml: 'What UNIA builds into your <span>operating model</span>',
    solutionsSub:
      "The goal is not more code. The goal is more control, faster execution, and a software layer that compounds over time.",
    outcome1Value: "Control",
    outcome1Title: "Connected operations",
    outcome1Text:
      "One software layer across the workflows that currently live in spreadsheets, inboxes, and disconnected tools.",
    outcome2Value: "Speed",
    outcome2Title: "Faster decision cycles",
    outcome2Text:
      "Less waiting between inputs, approvals, and execution thanks to clearer systems and lower coordination cost.",
    outcome3Value: "Leverage",
    outcome3Title: "AI where it actually matters",
    outcome3Text:
      "Knowledge retrieval, task routing, and action logic embedded in real operational processes.",
    outcome4Value: "Reliability",
    outcome4Title: "Production discipline from day one",
    outcome4Text:
      "Release readiness, monitoring, and architecture decisions that support scale instead of reacting to it later.",
    spotlight1Eyebrow: "Finance operations",
    spotlight1Title: "Tax, treasury, and internal control flows",
    spotlight1Text:
      "Systems that reduce handoffs, improve traceability, and support teams working with sensitive operational logic.",
    spotlight2Eyebrow: "Commercial operations",
    spotlight2Title: "Commerce, subscriptions, and service workflows",
    spotlight2Text:
      "Experiences and automations that help revenue teams move faster without losing visibility across the funnel.",
    spotlight3Eyebrow: "Internal platforms",
    spotlight3Title: "Dashboards, APIs, and orchestration layers",
    spotlight3Text:
      "The connective tissue between product, data, and operations when the business outgrows off-the-shelf tools.",
    methodologyEyebrow: "Execution",
    methodologyTitleHtml: 'From diagnosis to <span>production</span>',
    methodologySub:
      "UNIA works with a disciplined sequence so business context, architecture, and delivery stay aligned.",
    method1Title: "Diagnose the operation",
    method1Text:
      "We map the workflow, bottlenecks, dependencies, stakeholders, and business risk before choosing the build path.",
    method2Title: "Design the system",
    method2Text:
      "Architecture, interfaces, automation logic, and delivery scope are defined around real operating constraints.",
    method3Title: "Ship in controlled increments",
    method3Text:
      "Two-week releases, visible priorities, and feedback loops keep progress tangible without losing technical rigor.",
    method4Title: "Stabilize and evolve",
    method4Text:
      "After go-live, we optimize performance, add automation, and keep the product aligned with changing operations.",
    stackEyebrow: "Technologies",
    stackTitleHtml: 'A pragmatic stack for <span>high-stakes delivery</span>',
    stackSub:
      "We choose technologies for reliability, speed, and maintainability, not for trend-chasing.",
    stack1Title: "Applications & APIs",
    stack1Text:
      "Modern web applications, internal systems, integrations, and API layers for operational throughput.",
    stack2Title: "Data, AI & Automation",
    stack2Text:
      "Retrieval systems, agents, orchestration logic, automation pipelines, and operational analytics.",
    stack3Title: "Cloud & Delivery",
    stack3Text:
      "Cloudflare, CI/CD, observability, performance controls, and security practices for production environments.",
    modelEyebrow: "Engagement models",
    modelTitleHtml: 'Work with UNIA as a <span>partner, not a vendor</span>',
    modelSub:
      "We structure delivery based on the maturity of your product, your internal team, and the pace the operation demands.",
    model1Eyebrow: "Model 01",
    model1Title: "Software Partnership",
    model1Text:
      "A dedicated senior team to design, build, and evolve the product roadmap with shared priorities and measurable delivery.",
    model2Eyebrow: "Model 02",
    model2Title: "Embedded Factory",
    model2Text:
      "Senior engineering and product capacity embedded into your operation to modernize systems, automate workflows, and sustain execution.",
    ctaEyebrow: "Start the build",
    ctaTitleHtml: 'Let’s turn operational complexity into <span>software leverage</span>',
    ctaText:
      "We can start with discovery, architecture review, automation opportunities, or a phased build roadmap.",
    contactEmailCta: "Email UNIA",
    contactLinkedinCta: "Connect on LinkedIn",
    contactWebsiteCta: "Visit unia.cl",
    footerTagline: "Software Factory for custom platforms, AI systems, and automation",
  },
  es: {
    metaTitle: "UNIA Software Factory | Software Crítico, IA y Automatización",
    metaDescription:
      "UNIA Software Factory diseña plataformas a medida, sistemas de IA y automatización para equipos que escalan operaciones complejas en Chile, Ecuador, Serbia y Europa.",
    menuOpenLabel: "Abrir navegación",
    brandSub: "Fábrica de Software",
    navServices: "Capacidades",
    navSuccessCases: "Resultados",
    navMethodology: "Ejecución",
    navStack: "Tecnologías",
    navBookCall: "Agenda una llamada",
    heroEyebrow: "Software Factory · Sistemas de IA · Automatización",
    heroTitleHtml: 'Software de nivel infraestructura para <span>operaciones que necesitan moverse rápido</span>',
    heroText:
      "UNIA diseña, construye y escala plataformas a medida, sistemas de IA y capas de automatización para empresas con complejidad operativa real.",
    heroPrimaryCta: "Agenda una llamada de discovery",
    heroSecondaryCta: "Explora capacidades",
    heroStat1Value: "2 semanas",
    heroStat1Label: "cadencia de sprint",
    heroStat2Value: "Multi-región",
    heroStat2Label: "Chile, Ecuador, Serbia, Europa",
    heroStat3Value: "IA aplicada",
    heroStat3Label: "agentes, RAG, automatizaciones",
    heroPanelEyebrow: "Capa de ejecución",
    heroPanelTitle: "Del diagnóstico del negocio a sistemas en producción",
    heroCard1Eyebrow: "Arquitectura",
    heroCard1Title: "Plataformas construidas sobre workflows reales",
    heroCard1Text:
      "Sistemas internos, productos para clientes e integraciones diseñadas alrededor de throughput, control y escalabilidad.",
    heroCard2Eyebrow: "Operación con IA",
    heroCard2Title: "Agentes que asisten, enrutan y disparan acción",
    heroCard2Text:
      "Copilotos, capas RAG y automatizaciones conectadas con las herramientas de las que ya depende tu equipo.",
    heroCard3Eyebrow: "Confiabilidad",
    heroCard3Title: "Disciplina de entrega para operaciones serias",
    heroCard3Text:
      "CI/CD, observabilidad, control de releases y decisiones cloud para proteger uptime y velocidad de ejecución.",
    heroStrip1: "Arquitectura primero",
    heroStrip2: "Ejecución senior",
    heroStrip3: "Escala operativa",
    clientsEyebrow: "Clientes seleccionados",
    clientsSub:
      "Equipos de finanzas, comercio, operaciones y servicios profesionales confían en UNIA para construir, automatizar y evolucionar software crítico.",
    servicesEyebrow: "Capacidades",
    servicesTitleHtml: 'Una software factory diseñada para <span>operaciones complejas</span>',
    servicesSub:
      "Combinamos visión de producto, ingeniería, IA y gobierno de delivery para convertir workflows fragmentados en sistemas duraderos.",
    service1Eyebrow: "01 Ingeniería de plataforma",
    service1Title: "Software a medida que se convierte en infraestructura operativa",
    service1Text:
      "Apps web, portales, sistemas internos y APIs que centralizan las partes del negocio que no puedes seguir operando manualmente.",
    service2Eyebrow: "02 Sistemas de IA",
    service2Title: "IA aplicada que asiste equipos y acelera decisiones",
    service2Text:
      "Copilotos, sistemas de recuperación y agentes que entienden contexto, entregan conocimiento y activan la siguiente acción con control.",
    service3Eyebrow: "03 Automatización de workflows",
    service3Title: "Capas de automatización que quitan fricción entre áreas",
    service3Text:
      "Flujos conectados para finanzas, soporte, comercio, reportes y back office sin sumar más sobrecarga de coordinación.",
    service4Eyebrow: "04 Cloud y delivery",
    service4Title: "Release, confiabilidad y escala integrados al stack",
    service4Text:
      "Arquitectura cloud, CI/CD, observabilidad y prácticas de seguridad para mantener velocidad de ejecución sin comprometer estabilidad.",
    solutionsEyebrow: "Resultados",
    solutionsTitleHtml: 'Lo que UNIA incorpora en tu <span>modelo operativo</span>',
    solutionsSub:
      "La meta no es escribir más código. La meta es ganar control, ejecutar más rápido y construir una capa de software que acumule valor.",
    outcome1Value: "Control",
    outcome1Title: "Operaciones conectadas",
    outcome1Text:
      "Una sola capa de software para los workflows que hoy viven en planillas, correos y herramientas desconectadas.",
    outcome2Value: "Velocidad",
    outcome2Title: "Ciclos de decisión más rápidos",
    outcome2Text:
      "Menos espera entre inputs, aprobaciones y ejecución gracias a sistemas más claros y menor costo de coordinación.",
    outcome3Value: "Leverage",
    outcome3Title: "IA donde realmente importa",
    outcome3Text:
      "Recuperación de conocimiento, enrutamiento de tareas y lógica de acción embebidas en procesos operativos reales.",
    outcome4Value: "Confiabilidad",
    outcome4Title: "Disciplina productiva desde el día uno",
    outcome4Text:
      "Preparación para release, monitoreo y decisiones de arquitectura que soportan escala en lugar de reaccionar tarde.",
    spotlight1Eyebrow: "Operaciones financieras",
    spotlight1Title: "Flujos de impuestos, tesorería y control interno",
    spotlight1Text:
      "Sistemas que reducen handoffs, mejoran trazabilidad y soportan equipos que trabajan con lógica operativa sensible.",
    spotlight2Eyebrow: "Operaciones comerciales",
    spotlight2Title: "Commerce, suscripciones y workflows de servicio",
    spotlight2Text:
      "Experiencias y automatizaciones que ayudan a los equipos de ingresos a moverse más rápido sin perder visibilidad del funnel.",
    spotlight3Eyebrow: "Plataformas internas",
    spotlight3Title: "Dashboards, APIs y capas de orquestación",
    spotlight3Text:
      "El tejido conectivo entre producto, datos y operaciones cuando el negocio supera las herramientas estándar.",
    methodologyEyebrow: "Ejecución",
    methodologyTitleHtml: 'Del diagnóstico a <span>producción</span>',
    methodologySub:
      "UNIA trabaja con una secuencia disciplinada para mantener alineados el contexto de negocio, la arquitectura y la entrega.",
    method1Title: "Diagnosticar la operación",
    method1Text:
      "Mapeamos workflow, cuellos de botella, dependencias, stakeholders y riesgo de negocio antes de definir la ruta de construcción.",
    method2Title: "Diseñar el sistema",
    method2Text:
      "Arquitectura, interfaces, lógica de automatización y alcance de delivery se definen sobre restricciones operativas reales.",
    method3Title: "Entregar en incrementos controlados",
    method3Text:
      "Releases de dos semanas, prioridades visibles y ciclos de feedback hacen tangible el progreso sin perder rigor técnico.",
    method4Title: "Estabilizar y evolucionar",
    method4Text:
      "Después del go-live optimizamos performance, agregamos automatización y mantenemos el producto alineado a la operación cambiante.",
    stackEyebrow: "Tecnologías",
    stackTitleHtml: 'Un stack pragmático para <span>delivery de alto impacto</span>',
    stackSub:
      "Elegimos tecnologías por confiabilidad, velocidad y mantenibilidad, no por tendencia.",
    stack1Title: "Aplicaciones y APIs",
    stack1Text:
      "Aplicaciones web modernas, sistemas internos, integraciones y capas API para throughput operativo.",
    stack2Title: "Datos, IA y Automatización",
    stack2Text:
      "Sistemas de recuperación, agentes, lógica de orquestación, pipelines de automatización y analítica operativa.",
    stack3Title: "Cloud y delivery",
    stack3Text:
      "Cloudflare, CI/CD, observabilidad, control de performance y prácticas de seguridad para entornos productivos.",
    modelEyebrow: "Modelos de trabajo",
    modelTitleHtml: 'Trabaja con UNIA como <span>socio, no como proveedor</span>',
    modelSub:
      "Estructuramos la entrega según la madurez del producto, el equipo interno y el ritmo que exige la operación.",
    model1Eyebrow: "Modelo 01",
    model1Title: "Software Partnership",
    model1Text:
      "Un equipo senior dedicado para diseñar, construir y evolucionar el roadmap con prioridades compartidas y entregables medibles.",
    model2Eyebrow: "Modelo 02",
    model2Title: "Embedded Factory",
    model2Text:
      "Capacidad senior de ingeniería y producto integrada a tu operación para modernizar sistemas, automatizar workflows y sostener ejecución.",
    ctaEyebrow: "Empecemos",
    ctaTitleHtml: 'Convirtamos la complejidad operativa en <span>apalancamiento de software</span>',
    ctaText:
      "Podemos comenzar con discovery, revisión de arquitectura, oportunidades de automatización o un roadmap de construcción por fases.",
    contactEmailCta: "Escríbenos",
    contactLinkedinCta: "Conecta por LinkedIn",
    contactWebsiteCta: "Visita unia.cl",
    footerTagline: "Software Factory para plataformas a medida, sistemas de IA y automatización",
  },
  sr: {
    metaTitle: "UNIA Software Factory | Softver, AI i Automatizacija za Ozbiljne Operacije",
    metaDescription:
      "UNIA Software Factory dizajnira prilagođene platforme, AI sisteme i automatizaciju za timove koji skaliraju kompleksne operacije u Cileu, Ekvadoru, Srbiji i Evropi.",
    menuOpenLabel: "Otvori navigaciju",
    brandSub: "Softverska Fabrika",
    navServices: "Mogućnosti",
    navSuccessCases: "Rezultati",
    navMethodology: "Izvršenje",
    navStack: "Tehnologije",
    navBookCall: "Zakaži poziv",
    heroEyebrow: "Softverska Fabrika · AI Sistemi · Automatizacija",
    heroTitleHtml: 'Softver infrastrukturnog nivoa za <span>operacije koje moraju da se kreću brzo</span>',
    heroText:
      "UNIA dizajnira, razvija i skalira prilagođene platforme, AI sisteme i slojeve automatizacije za kompanije sa stvarnom operativnom kompleksnošću.",
    heroPrimaryCta: "Zakaži discovery poziv",
    heroSecondaryCta: "Pogledaj mogućnosti",
    heroStat1Value: "2 nedelje",
    heroStat1Label: "ritam sprinta",
    heroStat2Value: "Više regiona",
    heroStat2Label: "Čile, Ekvador, Srbija, Evropa",
    heroStat3Value: "Primenjena AI",
    heroStat3Label: "agenti, RAG, automatizacije",
    heroPanelEyebrow: "Sloj izvršenja",
    heroPanelTitle: "Od poslovne dijagnoze do produkcionih sistema",
    heroCard1Eyebrow: "Arhitektura",
    heroCard1Title: "Platforme izgrađene oko stvarnih tokova rada",
    heroCard1Text:
      "Interni sistemi, proizvodi za klijente i integracije dizajnirani oko throughput-a, kontrole i skaliranja.",
    heroCard2Eyebrow: "AI operacije",
    heroCard2Title: "Agenti koji pomažu, usmeravaju i pokreću akciju",
    heroCard2Text:
      "AI kopiloti, RAG slojevi i automatizacije povezane sa alatima od kojih vaš tim već zavisi.",
    heroCard3Eyebrow: "Pouzdanost",
    heroCard3Title: "Disciplina isporuke za ozbiljne operacije",
    heroCard3Text:
      "CI/CD, observability, kontrola release-a i cloud odluke koje štite uptime i brzinu izvršenja.",
    heroStrip1: "Arhitektura na prvom mestu",
    heroStrip2: "Senior izvršenje",
    heroStrip3: "Operativno skaliranje",
    clientsEyebrow: "Odabrani klijenti",
    clientsSub:
      "Timovi iz finansija, komerca, operacija i profesionalnih usluga veruju UNIA timu za izradu, automatizaciju i evoluciju kritičnog softvera.",
    servicesEyebrow: "Mogućnosti",
    servicesTitleHtml: 'Softverska fabrika oblikovana za <span>kompleksne operacije</span>',
    servicesSub:
      "Spajamo product pristup, inženjering, AI i delivery upravljanje kako bismo fragmentirane tokove pretvorili u trajne sisteme.",
    service1Eyebrow: "01 Inženjering platforme",
    service1Title: "Prilagođeni softver koji postaje operativna infrastruktura",
    service1Text:
      "Web aplikacije, portali, interni sistemi i API slojevi koji centralizuju delove poslovanja koje više ne smete voditi ručno.",
    service2Eyebrow: "02 AI sistemi",
    service2Title: "Primenjena AI koja pomaže timovima i ubrzava odluke",
    service2Text:
      "Kopiloti, sistemi za pretragu znanja i agenti koji razumeju kontekst, iznose informacije i pokreću sledeću akciju uz kontrolu.",
    service3Eyebrow: "03 Automatizacija tokova rada",
    service3Title: "Slojevi automatizacije koji uklanjaju trenje između timova",
    service3Text:
      "Povezani tokovi za finansije, podršku, komercu, izveštavanje i back-office bez dodatnog troška koordinacije.",
    service4Eyebrow: "04 Cloud i delivery",
    service4Title: "Release, pouzdanost i skaliranje ugrađeni u stack",
    service4Text:
      "Cloud arhitektura, CI/CD, observability i bezbednosne prakse koje održavaju brzinu izvršenja bez žrtvovanja stabilnosti.",
    solutionsEyebrow: "Rezultati",
    solutionsTitleHtml: 'Šta UNIA ugrađuje u vaš <span>operativni model</span>',
    solutionsSub:
      "Cilj nije više koda. Cilj je više kontrole, brže izvršenje i softverski sloj koji vremenom stvara dodatnu vrednost.",
    outcome1Value: "Kontrola",
    outcome1Title: "Povezane operacije",
    outcome1Text:
      "Jedan softverski sloj preko tokova koji danas žive u tabelama, inboxima i nepovezanim alatima.",
    outcome2Value: "Brzina",
    outcome2Title: "Brži ciklusi odlučivanja",
    outcome2Text:
      "Manje čekanja između inputa, odobrenja i izvršenja zahvaljujući jasnijim sistemima i nižem trošku koordinacije.",
    outcome3Value: "Leverage",
    outcome3Title: "AI tamo gde zaista pravi razliku",
    outcome3Text:
      "Pretraga znanja, rutiranje zadataka i logika akcije ugrađeni u stvarne operativne procese.",
    outcome4Value: "Pouzdanost",
    outcome4Title: "Produktivna disciplina od prvog dana",
    outcome4Text:
      "Release spremnost, monitoring i arhitektonske odluke koje podržavaju skaliranje umesto kasnog reagovanja.",
    spotlight1Eyebrow: "Finansijske operacije",
    spotlight1Title: "Porezi, treasury i interni kontrolni tokovi",
    spotlight1Text:
      "Sistemi koji smanjuju handoff-e, poboljšavaju sledljivost i podržavaju timove koji rade sa osetljivom operativnom logikom.",
    spotlight2Eyebrow: "Komercijalne operacije",
    spotlight2Title: "Komerca, pretplate i servisni tokovi rada",
    spotlight2Text:
      "Iskustva i automatizacije koje revenue timovima pomažu da se kreću brže bez gubitka vidljivosti kroz funnel.",
    spotlight3Eyebrow: "Interne platforme",
    spotlight3Title: "Dashboard-i, API-ji i orkestracioni slojevi",
    spotlight3Text:
      "Vezivno tkivo između proizvoda, podataka i operacija kada poslovanje preraste gotove alate.",
    methodologyEyebrow: "Izvršenje",
    methodologyTitleHtml: 'Od dijagnoze do <span>produkcije</span>',
    methodologySub:
      "UNIA radi kroz disciplinovan sled kako bi poslovni kontekst, arhitektura i isporuka ostali usklađeni.",
    method1Title: "Dijagnostikovati operaciju",
    method1Text:
      "Mapiramo tok rada, uska grla, zavisnosti, stakeholder-e i poslovni rizik pre nego što odaberemo put izgradnje.",
    method2Title: "Dizajnirati sistem",
    method2Text:
      "Arhitektura, interfejsi, logika automatizacije i scope isporuke definišu se prema stvarnim operativnim ograničenjima.",
    method3Title: "Isporučivati u kontrolisanim inkrementima",
    method3Text:
      "Dvonedeljni release-i, jasni prioriteti i feedback petlje čine napredak vidljivim bez gubitka tehničke rigoroznosti.",
    method4Title: "Stabilizovati i razvijati",
    method4Text:
      "Posle go-live faze optimizujemo performanse, dodajemo automatizaciju i držimo proizvod usklađenim sa promenama u operacijama.",
    stackEyebrow: "Tehnologije",
    stackTitleHtml: 'Pragmatičan stack za <span>isporuku visokog uloga</span>',
    stackSub:
      "Tehnologije biramo zbog pouzdanosti, brzine i održavanja, a ne zbog trendova.",
    stack1Title: "Aplikacije i API-ji",
    stack1Text:
      "Moderne web aplikacije, interni sistemi, integracije i API slojevi za operativni throughput.",
    stack2Title: "Podaci, AI i automatizacija",
    stack2Text:
      "Sistemi za retrieval, agenti, orkestraciona logika, automatizacioni pipeline-i i operativna analitika.",
    stack3Title: "Cloud i delivery",
    stack3Text:
      "Cloudflare, CI/CD, observability, kontrola performansi i bezbednosne prakse za produkciona okruženja.",
    modelEyebrow: "Modeli saradnje",
    modelTitleHtml: 'Radite sa UNIA timom kao <span>partnerom, ne vendorom</span>',
    modelSub:
      "Način isporuke prilagođavamo zrelosti proizvoda, internom timu i tempu koji operacija zahteva.",
    model1Eyebrow: "Model 01",
    model1Title: "Software Partnership",
    model1Text:
      "Posvećen senior tim za dizajn, razvoj i evoluciju roadmap-a uz zajedničke prioritete i merljivu isporuku.",
    model2Eyebrow: "Model 02",
    model2Title: "Embedded Factory",
    model2Text:
      "Senior inženjerski i product kapacitet ugrađen u vašu operaciju radi modernizacije sistema, automatizacije tokova i održavanja izvršenja.",
    ctaEyebrow: "Počnimo",
    ctaTitleHtml: 'Pretvorimo operativnu kompleksnost u <span>softversku polugu</span>',
    ctaText:
      "Možemo krenuti od discovery-ja, pregleda arhitekture, AI i automatizacionih prilika ili faznog roadmap-a izgradnje.",
    contactEmailCta: "Pišite nam",
    contactLinkedinCta: "Povežite se na LinkedIn-u",
    contactWebsiteCta: "Posetite unia.cl",
    footerTagline: "Softverska fabrika za prilagođene platforme, AI sisteme i automatizaciju",
  },
};

const hasKey = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

const detectLanguage = () => {
  const normalize = (value) => {
    if (!value || typeof value !== "string") return "";
    return value.toLowerCase().split("-")[0];
  };

  const params = new URLSearchParams(window.location.search);
  const langParam = normalize(params.get("lang"));
  if (supportedLanguages.includes(langParam)) return langParam;

  const browserLanguages = Array.isArray(navigator.languages) ? navigator.languages : [];
  const matchingLanguage = browserLanguages.find((candidate) =>
    supportedLanguages.includes(normalize(candidate))
  );
  if (matchingLanguage) return normalize(matchingLanguage);

  const fallback = normalize(navigator.language || "");
  return supportedLanguages.includes(fallback) ? fallback : "en";
};

const activeLanguage = detectLanguage();
const activeLocale = localeByLanguage[activeLanguage] || "en-US";
const copy = translations[activeLanguage] || translations.en;

const setMeta = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && typeof value === "string") {
    element.setAttribute("content", value);
  }
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

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const { i18n } = element.dataset;
    if (i18n && hasKey(copy, i18n)) {
      element.textContent = copy[i18n];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const { i18nHtml } = element.dataset;
    if (i18nHtml && hasKey(copy, i18nHtml)) {
      element.innerHTML = copy[i18nHtml];
    }
  });

  const menuButton = document.getElementById("menuBtn");
  if (menuButton) {
    menuButton.setAttribute("aria-label", copy.menuOpenLabel);
  }

  const dateFormatter = new Intl.DateTimeFormat(activeLocale, {
    year: "numeric",
  });
  document.documentElement.style.setProperty("--active-year", `"${dateFormatter.format(new Date())}"`);
};

applyLanguage();

document.querySelectorAll("[data-email-user][data-email-domain]").forEach((link) => {
  const user = link.getAttribute("data-email-user");
  const domain = link.getAttribute("data-email-domain");
  if (user && domain) {
    link.setAttribute("href", `mailto:${user}@${domain}`);
  }
});

const menuButton = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });
}

const header = document.querySelector(".site-header");
const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("in-view"));
}
