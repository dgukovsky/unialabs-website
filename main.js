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
    navSuccessCases: "Factory model",
    navMethodology: "Process",
    navStack: "Stack",
    navBookCall: "Book a call",
    heroEyebrow: "Software Factory · AI Systems · Automation",
    heroTitleHtml: 'Software infrastructure for <span>complex operations in motion</span>',
    heroText:
      "UNIA designs and ships custom platforms, AI systems, and automation layers for teams that need better control, faster execution, and software they can actually grow on top of.",
    heroPrimaryCta: "Book a discovery call",
    heroSecondaryCta: "Explore capabilities",
    heroStat1Value: "2-week",
    heroStat1Label: "delivery cadence",
    heroStat2Value: "Multi-region",
    heroStat2Label: "Chile, Ecuador, Serbia, Europe",
    heroStat3Value: "Applied AI",
    heroStat3Label: "agents, RAG, automations",
    heroPanelEyebrow: "Factory in production",
    heroPanelTitle: "Built to centralize workflows, decisions, and delivery",
    heroCard1Eyebrow: "Platforms",
    heroCard1Value: "Custom systems",
    heroCard1Text:
      "Internal tooling, client-facing portals, APIs, and product layers shaped around real business throughput.",
    heroCard2Eyebrow: "AI systems",
    heroCard2Value: "Assist + route + act",
    heroCard2Text:
      "Retrieval, copilots, and agents embedded into operations instead of living as isolated experiments.",
    heroCard3Eyebrow: "Cloud delivery",
    heroCard3Value: "Reliable releases",
    heroCard3Text:
      "CI/CD, observability, release control, and infrastructure decisions that protect speed and stability together.",
    heroStrip1: "Architecture-first",
    heroStrip2: "Senior execution",
    heroStrip3: "Operational scale",
    clientsEyebrow: "Selected clients",
    clientsSub:
      "Teams across finance, commerce, operations, and professional services trust UNIA to build, automate, and evolve critical software.",
    servicesEyebrow: "Capabilities",
    servicesTitleHtml: 'A software factory built around <span>execution quality</span>',
    servicesSub:
      "We do not sell isolated features. We design systems that improve how the business operates, decides, and scales.",
    service1Eyebrow: "Custom platforms",
    service1Title: "Platforms and internal systems that become the operating layer",
    service1Text:
      "When spreadsheets, inboxes, and disconnected tools start slowing the business down, we replace them with software shaped around real workflows.",
    service1Point1: "Client portals and internal dashboards",
    service1Point2: "Process-specific APIs and integrations",
    service1Point3: "Products built for operational traceability",
    service1Aside:
      "Useful when the business needs one source of truth instead of more manual coordination.",
    service2Eyebrow: "AI systems",
    service2Title: "Applied AI that assists teams and activates the next step",
    service2Text:
      "We implement copilots, retrieval systems, and agents that live inside the operating flow instead of sitting outside the work.",
    service2Point1: "RAG and knowledge retrieval for internal teams",
    service2Point2: "Agents connected to tools, data, and action rules",
    service2Point3: "Decision support for repetitive high-volume tasks",
    service2Aside:
      "Useful when teams need better throughput without adding more human routing and context switching.",
    service3Eyebrow: "Automation and cloud delivery",
    service3Title: "Automation, release control, and cloud reliability in the same layer",
    service3Text:
      "We connect business logic, orchestration, CI/CD, observability, and infrastructure choices so the product can move faster without breaking trust.",
    service3Point1: "Cross-functional workflow automation",
    service3Point2: "Cloud architecture and release governance",
    service3Point3: "Monitoring and operational support after launch",
    service3Aside:
      "Useful when growth is no longer limited by ideas, but by execution friction and unstable delivery.",
    solutionsEyebrow: "Factory model",
    solutionsTitleHtml: 'Work with UNIA as a <span>build partner</span>',
    solutionsSub:
      "We adapt around your product stage, internal team, and operational urgency. The structure changes, but the standard of execution does not.",
    model1Eyebrow: "Model 01",
    model1Title: "Software Partnership",
    model1Text:
      "A dedicated senior team to design, build, and evolve core software with a shared roadmap and controlled delivery rhythm.",
    model2Eyebrow: "Model 02",
    model2Title: "Embedded Factory",
    model2Text:
      "Senior product and engineering capacity embedded into your operation to modernize systems, automate flows, and raise throughput.",
    modelNoteTitle: "The objective",
    modelNoteText:
      "Reduce coordination drag, centralize critical workflows, and leave the team with software leverage it can keep compounding.",
    methodologyEyebrow: "Process",
    methodologyTitleHtml: 'From diagnosis to <span>production discipline</span>',
    methodologySub:
      "Business context, architecture, and delivery are handled as one continuous system.",
    method1Title: "Map the operation",
    method1Text:
      "We define constraints, bottlenecks, stakeholders, and operating risk before committing to scope.",
    method2Title: "Design the system",
    method2Text:
      "Product structure, interfaces, automation logic, and architecture are aligned around the workflow.",
    method3Title: "Ship in increments",
    method3Text:
      "Two-week releases and clear priorities keep progress visible while preserving rigor.",
    method4Title: "Stabilize and evolve",
    method4Text:
      "After launch, we continue improving performance, automation depth, and operational fit.",
    stackEyebrow: "Stack",
    stackTitleHtml: 'Technologies chosen for <span>reliability and speed</span>',
    stackSub:
      "The goal is a stack that can be maintained, scaled, and evolved under real business pressure.",
    stack1Title: "Applications & APIs",
    stack1Text:
      "Modern applications, internal platforms, and API layers built around operational throughput.",
    stack2Title: "Data, AI & Automation",
    stack2Text:
      "Retrieval systems, agents, orchestration logic, automation pipelines, and operational analytics.",
    stack3Title: "Cloud & Delivery",
    stack3Text:
      "Cloudflare, CI/CD, observability, performance control, and security practices for production systems.",
    ctaEyebrow: "Start the build",
    ctaTitleHtml: 'Turn operational complexity into <span>software leverage</span>',
    ctaText:
      "We can start with discovery, architecture review, automation opportunities, or a phased execution roadmap.",
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
    navSuccessCases: "Modelo factory",
    navMethodology: "Proceso",
    navStack: "Stack",
    navBookCall: "Agenda una llamada",
    heroEyebrow: "Software Factory · Sistemas de IA · Automatización",
    heroTitleHtml: 'Infraestructura de software para <span>operaciones complejas en movimiento</span>',
    heroText:
      "UNIA diseña y entrega plataformas a medida, sistemas de IA y capas de automatización para equipos que necesitan más control, más velocidad de ejecución y software sobre el que realmente puedan crecer.",
    heroPrimaryCta: "Agenda una llamada de discovery",
    heroSecondaryCta: "Explora capacidades",
    heroStat1Value: "2 semanas",
    heroStat1Label: "cadencia de entrega",
    heroStat2Value: "Multi-región",
    heroStat2Label: "Chile, Ecuador, Serbia, Europa",
    heroStat3Value: "IA aplicada",
    heroStat3Label: "agentes, RAG, automatizaciones",
    heroPanelEyebrow: "Factory en producción",
    heroPanelTitle: "Diseñado para centralizar workflows, decisiones y delivery",
    heroCard1Eyebrow: "Plataformas",
    heroCard1Value: "Sistemas a medida",
    heroCard1Text:
      "Herramientas internas, portales para clientes, APIs y capas de producto definidas alrededor del throughput real del negocio.",
    heroCard2Eyebrow: "Sistemas de IA",
    heroCard2Value: "Asistir + enrutar + accionar",
    heroCard2Text:
      "Retrieval, copilotos y agentes embebidos en la operación en lugar de vivir como experimentos aislados.",
    heroCard3Eyebrow: "Cloud delivery",
    heroCard3Value: "Releases confiables",
    heroCard3Text:
      "CI/CD, observabilidad, control de releases y decisiones de infraestructura para proteger velocidad y estabilidad al mismo tiempo.",
    heroStrip1: "Arquitectura primero",
    heroStrip2: "Ejecución senior",
    heroStrip3: "Escala operativa",
    clientsEyebrow: "Clientes seleccionados",
    clientsSub:
      "Equipos de finanzas, comercio, operaciones y servicios profesionales confían en UNIA para construir, automatizar y evolucionar software crítico.",
    servicesEyebrow: "Capacidades",
    servicesTitleHtml: 'Una software factory construida alrededor de la <span>calidad de ejecución</span>',
    servicesSub:
      "No vendemos features aisladas. Diseñamos sistemas que mejoran cómo opera, decide y escala el negocio.",
    service1Eyebrow: "Plataformas a medida",
    service1Title: "Plataformas y sistemas internos que se convierten en la capa operativa",
    service1Text:
      "Cuando planillas, correos y herramientas desconectadas empiezan a frenar el negocio, las reemplazamos con software diseñado alrededor de workflows reales.",
    service1Point1: "Portales para clientes y dashboards internos",
    service1Point2: "APIs e integraciones específicas del proceso",
    service1Point3: "Productos construidos para trazabilidad operativa",
    service1Aside:
      "Útil cuando el negocio necesita una sola fuente de verdad en lugar de más coordinación manual.",
    service2Eyebrow: "Sistemas de IA",
    service2Title: "IA aplicada que asiste equipos y activa el siguiente paso",
    service2Text:
      "Implementamos copilotos, sistemas de retrieval y agentes que viven dentro del flujo operativo en lugar de sentarse fuera del trabajo.",
    service2Point1: "RAG y recuperación de conocimiento para equipos internos",
    service2Point2: "Agentes conectados a herramientas, datos y reglas de acción",
    service2Point3: "Soporte a decisiones para tareas repetitivas de alto volumen",
    service2Aside:
      "Útil cuando los equipos necesitan más throughput sin sumar más routing humano ni cambios de contexto.",
    service3Eyebrow: "Automatización y cloud delivery",
    service3Title: "Automatización, control de releases y confiabilidad cloud en una misma capa",
    service3Text:
      "Conectamos lógica de negocio, orquestación, CI/CD, observabilidad y decisiones de infraestructura para que el producto avance más rápido sin romper la confianza operativa.",
    service3Point1: "Automatización de workflows entre áreas",
    service3Point2: "Arquitectura cloud y gobierno de release",
    service3Point3: "Monitoreo y soporte operativo después del lanzamiento",
    service3Aside:
      "Útil cuando el crecimiento ya no está limitado por ideas, sino por fricción de ejecución y delivery inestable.",
    solutionsEyebrow: "Modelo factory",
    solutionsTitleHtml: 'Trabaja con UNIA como <span>socio de construcción</span>',
    solutionsSub:
      "Nos adaptamos al estado del producto, al equipo interno y a la urgencia operativa. La estructura cambia, el estándar de ejecución no.",
    model1Eyebrow: "Modelo 01",
    model1Title: "Software Partnership",
    model1Text:
      "Un equipo senior dedicado para diseñar, construir y evolucionar software core con roadmap compartido y ritmo de entrega controlado.",
    model2Eyebrow: "Modelo 02",
    model2Title: "Embedded Factory",
    model2Text:
      "Capacidad senior de producto e ingeniería integrada a tu operación para modernizar sistemas, automatizar flujos y elevar throughput.",
    modelNoteTitle: "El objetivo",
    modelNoteText:
      "Reducir fricción de coordinación, centralizar workflows críticos y dejar al equipo con apalancamiento de software que siga acumulando valor.",
    methodologyEyebrow: "Proceso",
    methodologyTitleHtml: 'Del diagnóstico a la <span>disciplina productiva</span>',
    methodologySub:
      "El contexto de negocio, la arquitectura y la entrega se manejan como un solo sistema continuo.",
    method1Title: "Mapear la operación",
    method1Text:
      "Definimos restricciones, cuellos de botella, stakeholders y riesgo operativo antes de cerrar alcance.",
    method2Title: "Diseñar el sistema",
    method2Text:
      "La estructura del producto, interfaces, lógica de automatización y arquitectura se alinean alrededor del workflow.",
    method3Title: "Entregar en incrementos",
    method3Text:
      "Releases quincenales y prioridades claras mantienen el progreso visible sin perder rigor.",
    method4Title: "Estabilizar y evolucionar",
    method4Text:
      "Después del lanzamiento seguimos mejorando performance, profundidad de automatización y encaje operativo.",
    stackEyebrow: "Stack",
    stackTitleHtml: 'Tecnologías elegidas por <span>confiabilidad y velocidad</span>',
    stackSub:
      "La meta es un stack que pueda mantenerse, escalar y evolucionar bajo presión real de negocio.",
    stack1Title: "Aplicaciones y APIs",
    stack1Text:
      "Aplicaciones modernas, plataformas internas y capas API construidas para throughput operativo.",
    stack2Title: "Datos, IA y Automatización",
    stack2Text:
      "Retrieval, agentes, lógica de orquestación, pipelines de automatización y analítica operativa.",
    stack3Title: "Cloud y Delivery",
    stack3Text:
      "Cloudflare, CI/CD, observabilidad, control de performance y prácticas de seguridad para sistemas productivos.",
    ctaEyebrow: "Empecemos",
    ctaTitleHtml: 'Convierte la complejidad operativa en <span>apalancamiento de software</span>',
    ctaText:
      "Podemos comenzar con discovery, revisión de arquitectura, oportunidades de automatización o un roadmap de ejecución por fases.",
    contactEmailCta: "Escríbenos",
    contactLinkedinCta: "Conecta por LinkedIn",
    contactWebsiteCta: "Visita unia.cl",
    footerTagline: "Software Factory para plataformas a medida, sistemas de IA y automatización",
  },
  sr: {
    metaTitle: "UNIA Software Factory | Softver, AI i Automatizacija za Ozbiljne Operacije",
    metaDescription:
      "UNIA Software Factory dizajnira prilagođene platforme, AI sisteme i automatizaciju za timove koji skaliraju kompleksne operacije u Čileu, Ekvadoru, Srbiji i Evropi.",
    menuOpenLabel: "Otvori navigaciju",
    brandSub: "Softverska Fabrika",
    navServices: "Mogućnosti",
    navSuccessCases: "Factory model",
    navMethodology: "Proces",
    navStack: "Stack",
    navBookCall: "Zakaži poziv",
    heroEyebrow: "Softverska Fabrika · AI Sistemi · Automatizacija",
    heroTitleHtml: 'Softverska infrastruktura za <span>kompleksne operacije u pokretu</span>',
    heroText:
      "UNIA dizajnira i isporučuje prilagođene platforme, AI sisteme i slojeve automatizacije za timove kojima je potrebno više kontrole, više brzine izvršenja i softver na kome zaista mogu da rastu.",
    heroPrimaryCta: "Zakaži discovery poziv",
    heroSecondaryCta: "Pogledaj mogućnosti",
    heroStat1Value: "2 nedelje",
    heroStat1Label: "ritam isporuke",
    heroStat2Value: "Više regiona",
    heroStat2Label: "Čile, Ekvador, Srbija, Evropa",
    heroStat3Value: "Primenjena AI",
    heroStat3Label: "agenti, RAG, automatizacije",
    heroPanelEyebrow: "Factory u produkciji",
    heroPanelTitle: "Napravljen da centralizuje tokove rada, odluke i delivery",
    heroCard1Eyebrow: "Platforme",
    heroCard1Value: "Prilagođeni sistemi",
    heroCard1Text:
      "Interni alati, portali za klijente, API-ji i produkt slojevi oblikovani oko stvarnog poslovnog throughput-a.",
    heroCard2Eyebrow: "AI sistemi",
    heroCard2Value: "Pomoć + rutiranje + akcija",
    heroCard2Text:
      "Retrieval, kopiloti i agenti ugrađeni u operacije umesto da žive kao izolovani eksperimenti.",
    heroCard3Eyebrow: "Cloud delivery",
    heroCard3Value: "Pouzdani release-i",
    heroCard3Text:
      "CI/CD, observability, kontrola release-a i infrastrukturne odluke koje zajedno štite brzinu i stabilnost.",
    heroStrip1: "Arhitektura na prvom mestu",
    heroStrip2: "Senior izvršenje",
    heroStrip3: "Operativno skaliranje",
    clientsEyebrow: "Odabrani klijenti",
    clientsSub:
      "Timovi iz finansija, komerca, operacija i profesionalnih usluga veruju UNIA timu za razvoj, automatizaciju i evoluciju kritičnog softvera.",
    servicesEyebrow: "Mogućnosti",
    servicesTitleHtml: 'Softverska fabrika izgrađena oko <span>kvaliteta izvršenja</span>',
    servicesSub:
      "Ne prodajemo izolovane feature-e. Dizajniramo sisteme koji unapređuju način na koji poslovanje funkcioniše, odlučuje i skalira.",
    service1Eyebrow: "Prilagođene platforme",
    service1Title: "Platforme i interni sistemi koji postaju operativni sloj",
    service1Text:
      "Kada tabele, inbox-i i nepovezani alati počnu da usporavaju poslovanje, zamenjujemo ih softverom oblikovanim oko stvarnih tokova rada.",
    service1Point1: "Klijentski portali i interni dashboard-i",
    service1Point2: "API-ji i integracije specifične za proces",
    service1Point3: "Proizvodi građeni za operativnu sledljivost",
    service1Aside:
      "Korisno kada poslovanju treba jedan izvor istine umesto više ručne koordinacije.",
    service2Eyebrow: "AI sistemi",
    service2Title: "Primenjena AI koja pomaže timovima i aktivira sledeći korak",
    service2Text:
      "Implementiramo kopilote, retrieval sisteme i agente koji žive unutar operativnog toka umesto da sede izvan rada.",
    service2Point1: "RAG i pretraga znanja za interne timove",
    service2Point2: "Agenti povezani sa alatima, podacima i pravilima akcije",
    service2Point3: "Podrška odlučivanju za repetitivne zadatke velikog obima",
    service2Aside:
      "Korisno kada timovima treba veći throughput bez dodatnog ljudskog rutiranja i prebacivanja konteksta.",
    service3Eyebrow: "Automatizacija i cloud delivery",
    service3Title: "Automatizacija, kontrola release-a i cloud pouzdanost u istom sloju",
    service3Text:
      "Povezujemo poslovnu logiku, orkestraciju, CI/CD, observability i infrastrukturne odluke kako bi proizvod napredovao brže bez gubitka poverenja.",
    service3Point1: "Automatizacija tokova između timova",
    service3Point2: "Cloud arhitektura i release governance",
    service3Point3: "Monitoring i operativna podrška nakon lansiranja",
    service3Aside:
      "Korisno kada rast više nije ograničen idejama, već trenjem izvršenja i nestabilnom isporukom.",
    solutionsEyebrow: "Factory model",
    solutionsTitleHtml: 'Radite sa UNIA timom kao <span>partnerom za izgradnju</span>',
    solutionsSub:
      "Prilagođavamo se fazi proizvoda, internom timu i operativnoj hitnosti. Struktura se menja, ali standard izvršenja ne.",
    model1Eyebrow: "Model 01",
    model1Title: "Software Partnership",
    model1Text:
      "Posvećen senior tim za dizajn, razvoj i evoluciju core softvera uz zajednički roadmap i kontrolisan ritam isporuke.",
    model2Eyebrow: "Model 02",
    model2Title: "Embedded Factory",
    model2Text:
      "Senior product i inženjerski kapacitet ugrađen u vašu operaciju radi modernizacije sistema, automatizacije tokova i povećanja throughput-a.",
    modelNoteTitle: "Cilj",
    modelNoteText:
      "Smanjiti koordinaciono trenje, centralizovati kritične tokove rada i ostaviti timu softversku polugu koja nastavlja da stvara vrednost.",
    methodologyEyebrow: "Proces",
    methodologyTitleHtml: 'Od dijagnoze do <span>produkcione discipline</span>',
    methodologySub:
      "Poslovni kontekst, arhitektura i isporuka tretiraju se kao jedan kontinuirani sistem.",
    method1Title: "Mapirati operaciju",
    method1Text:
      "Definišemo ograničenja, uska grla, stakeholder-e i operativni rizik pre zaključavanja scope-a.",
    method2Title: "Dizajnirati sistem",
    method2Text:
      "Struktura proizvoda, interfejsi, logika automatizacije i arhitektura usklađuju se oko workflow-a.",
    method3Title: "Isporučivati u inkrementima",
    method3Text:
      "Dvonedeljni release-i i jasni prioriteti čine napredak vidljivim uz očuvanje rigoroznosti.",
    method4Title: "Stabilizovati i razvijati",
    method4Text:
      "Posle lansiranja nastavljamo da unapređujemo performanse, dubinu automatizacije i operativni fit.",
    stackEyebrow: "Stack",
    stackTitleHtml: 'Tehnologije izabrane zbog <span>pouzdanosti i brzine</span>',
    stackSub:
      "Cilj je stack koji može da se održava, skalira i razvija pod stvarnim poslovnim pritiskom.",
    stack1Title: "Aplikacije i API-ji",
    stack1Text:
      "Moderne aplikacije, interne platforme i API slojevi izgrađeni za operativni throughput.",
    stack2Title: "Podaci, AI i Automatizacija",
    stack2Text:
      "Retrieval sistemi, agenti, orkestraciona logika, automatizacioni pipeline-i i operativna analitika.",
    stack3Title: "Cloud i Delivery",
    stack3Text:
      "Cloudflare, CI/CD, observability, kontrola performansi i bezbednosne prakse za produkcione sisteme.",
    ctaEyebrow: "Počnimo",
    ctaTitleHtml: 'Pretvorite operativnu kompleksnost u <span>softversku polugu</span>',
    ctaText:
      "Možemo početi discovery fazom, pregledom arhitekture, automatizacionim prilikama ili faznim roadmap-om izvršenja.",
    contactEmailCta: "Pišite nam",
    contactLinkedinCta: "Povežite se na LinkedIn-u",
    contactWebsiteCta: "Posetite unia.cl",
    footerTagline: "Softverska fabrika za prilagođene platforme, AI sisteme i automatizaciju",
  },
};

const detectLanguage = () => {
  const normalize = (value) => {
    if (!value || typeof value !== "string") return "";
    return value.toLowerCase().split("-")[0];
  };

  const params = new URLSearchParams(window.location.search);
  const langParam = normalize(params.get("lang"));
  if (supportedLanguages.includes(langParam)) return langParam;

  const browserLanguages = Array.isArray(navigator.languages) ? navigator.languages : [];
  const browserMatch = browserLanguages.find((value) => supportedLanguages.includes(normalize(value)));
  if (browserMatch) return normalize(browserMatch);

  const fallback = normalize(navigator.language || "");
  return supportedLanguages.includes(fallback) ? fallback : "en";
};

const activeLanguage = detectLanguage();
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
    const key = element.dataset.i18n;
    if (key && Object.prototype.hasOwnProperty.call(copy, key)) {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (key && Object.prototype.hasOwnProperty.call(copy, key)) {
      element.innerHTML = copy[key];
    }
  });

  const menuButton = document.getElementById("menuBtn");
  if (menuButton) {
    menuButton.setAttribute("aria-label", copy.menuOpenLabel);
  }

  const locale = localeByLanguage[activeLanguage] || "en-US";
  document.documentElement.style.setProperty(
    "--active-year",
    `"${new Intl.DateTimeFormat(locale, { year: "numeric" }).format(new Date())}"`
  );
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
const syncHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 10);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

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
