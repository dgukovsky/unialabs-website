const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const menuLinks = document.querySelectorAll("[data-menu-link]");
const nav = document.querySelector("[data-nav]");
const revealItems = document.querySelectorAll("[data-reveal]");
const yearNodes = document.querySelectorAll("[data-year]");
const heroTitleNode = document.querySelector("[data-hero-title]");
const heroTitleHeading = heroTitleNode?.closest(".hero-title");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const CONTACT_EMAIL_USER_CODES = [104, 101, 108, 108, 111];
const CONTACT_EMAIL_DOMAIN_CODES = [117, 110, 105, 97, 108, 97, 98, 115, 46, 99, 111, 109];
let heroTitleStarted = false;
let activeLanguage = "en";

const LANGUAGE_CONFIG = {
  en: { html: "en", locale: "en_US" },
  es: { html: "es", locale: "es_ES" },
  zh: { html: "zh-CN", locale: "zh_CN" },
  fr: { html: "fr", locale: "fr_FR" },
};

const TRANSLATION_ROWS = [
  ["Platforms", "Plataformas", "平台", "Plateformes"],
  ["AI Agents", "Agentes de IA", "AI 智能体", "Agents IA"],
  ["Automation", "Automatización", "自动化", "Automatisation"],
  ["Case Studies", "Casos de éxito", "客户案例", "Études de cas"],
  ["Contact", "Contacto", "联系我们", "Contact"],
  ["Book a call", "Agenda una llamada", "预约通话", "Réserver un appel"],
  ["Start a project", "Inicia un proyecto", "启动项目", "Démarrer un projet"],
  ["Intelligent systems. Real results.", "Sistemas inteligentes. Resultados reales.", "智能系统，真实成果。", "Systèmes intelligents. Résultats concrets."],
  ["Custom software systems", "Sistemas de software a medida", "定制软件系统", "Des systèmes logiciels sur mesure"],
  ["for operations that", "para operaciones que", "为关键业务而生", "pour des opérations qui"],
  ["cannot slow down.", "no pueden detenerse.", "持续高效运转。", "ne peuvent pas ralentir."],
  ["UNIA designs and ships production-ready platforms, AI agents, and workflow automation for companies that need cleaner execution, fewer manual bottlenecks, and infrastructure that scales with the business.", "UNIA diseña y entrega plataformas, agentes de IA y automatización listas para producción, para empresas que necesitan operaciones más eficientes, menos cuellos de botella manuales e infraestructura que escale con el negocio.", "UNIA 为企业设计并交付可投入生产的平台、AI 智能体和工作流自动化，帮助团队提升执行效率、减少人工瓶颈，并构建随业务扩展的基础设施。", "UNIA conçoit et livre des plateformes, des agents IA et des automatisations prêts pour la production, afin d'améliorer l'exécution, de réduire les tâches manuelles et de faire évoluer l'infrastructure avec l'entreprise."],
  ["Custom Platforms", "Plataformas a medida", "定制平台", "Plateformes sur mesure"],
  ["Workflow Automation", "Automatización de flujos", "工作流自动化", "Automatisation des workflows"],
  ["Enterprise-grade security. Built for scale.", "Seguridad empresarial. Diseñado para escalar.", "企业级安全，为规模化而生。", "Sécurité de niveau entreprise. Conçu pour évoluer."],
  ["AI AGENTS", "AGENTES DE IA", "AI 智能体", "AGENTS IA"],
  ["Autonomous by design", "Autónomos por diseño", "自主设计", "Autonomes par conception"],
  ["AUTOMATION", "AUTOMATIZACIÓN", "自动化", "AUTOMATISATION"],
  ["Workflows that scale", "Flujos que escalan", "可扩展工作流", "Des workflows évolutifs"],
  ["PLATFORMS", "PLATAFORMAS", "平台", "PLATEFORMES"],
  ["Built for what’s next", "Preparadas para lo que sigue", "为未来而建", "Conçues pour la suite"],
  ["Trusted by", "Elegidos por", "深受信赖", "La confiance de"],
  ["Forward-thinking teams", "Equipos con visión de futuro", "前瞻型团队", "Équipes visionnaires"],
  ["Enterprise-grade", "Nivel empresarial", "企业级", "Niveau entreprise"],
  ["Security & compliance", "Seguridad y cumplimiento", "安全与合规", "Sécurité et conformité"],
  ["Built for scale", "Diseñado para escalar", "为规模化而生", "Conçu pour évoluer"],
  ["From day one", "Desde el primer día", "从第一天开始", "Dès le premier jour"],
  ["Services", "Servicios", "服务", "Services"],
  ["Services built for", "Servicios diseñados para", "服务专为", "Des services conçus pour"],
  ["operational scale.", "escalar operaciones.", "规模化运营而打造。", "l’échelle opérationnelle."],
  ["UNIA Labs designs high-performance systems, AI infrastructure,", "UNIA Labs diseña sistemas de alto rendimiento, infraestructura de IA", "UNIA Labs 设计高性能系统、AI 基础设施", "UNIA Labs conçoit des systèmes haute performance, des infrastructures IA"],
  ["and automation for companies with demanding operations.", "y automatización para empresas con operaciones exigentes.", "以及面向高要求运营场景的自动化解决方案。", "et des automatisations pour les entreprises aux opérations exigeantes."],
  ["AI Agents & RAG", "Agentes de IA y RAG", "AI 智能体与 RAG", "Agents IA et RAG"],
  ["Cognitive architectures that act on your data in real time.", "Arquitecturas cognitivas que actúan sobre tus datos en tiempo real.", "基于实时数据行动的认知架构。", "Des architectures cognitives qui agissent sur vos données en temps réel."],
  ["Eliminating friction from complex operational pipelines.", "Eliminamos la fricción de flujos operativos complejos.", "消除复杂运营流程中的摩擦。", "Éliminer les frictions des processus opérationnels complexes."],
  ["Custom Software", "Software a medida", "定制软件", "Logiciels sur mesure"],
  ["Custom software built on a resilient and high-performance core. Proprietary engines built for speed and durability. No off-the-shelf compromises.", "Software a medida sobre una base resiliente y de alto rendimiento. Motores propios creados para velocidad y durabilidad, sin compromisos prefabricados.", "基于高性能、弹性核心打造的定制软件。自研引擎兼顾速度与耐久，不采用妥协式通用方案。", "Des logiciels sur mesure reposant sur un socle résilient et performant. Des moteurs propriétaires conçus pour la vitesse et la durabilité, sans compromis standardisé."],
  ["Product Design", "Diseño de producto", "产品设计", "Design produit"],
  ["Systems that are as functional as they are intuitive.", "Sistemas tan funcionales como intuitivos.", "兼具功能性与直观体验的系统。", "Des systèmes aussi fonctionnels qu’intuitifs."],
  ["Systems Integration", "Integración de sistemas", "系统集成", "Intégration de systèmes"],
  ["Unifying fragmented tech stacks into a single cohesive core.", "Unificamos tecnologías fragmentadas en un núcleo coherente.", "将分散的技术栈整合为统一核心。", "Unifier des stacks fragmentées en un socle cohérent."],
  ["Cloud Architecture", "Arquitectura cloud", "云架构", "Architecture cloud"],
  ["Distributed systems designed to handle global-scale demand without breaking a sweat.", "Sistemas distribuidos diseñados para responder a demanda global sin perder rendimiento.", "专为轻松应对全球规模需求而设计的分布式系统。", "Des systèmes distribués conçus pour absorber une demande mondiale sans perdre en performance."],
  ["Discuss your project", "Hablemos de tu proyecto", "讨论您的项目", "Parlons de votre projet"],
  ["Explore case studies", "Explora casos de éxito", "查看客户案例", "Découvrir nos études de cas"],
  ["OUR METHODOLOGY", "NUESTRA METODOLOGÍA", "我们的方法", "NOTRE MÉTHODE"],
  ["A process built", "Un proceso diseñado", "一个专注成果的", "Un processus conçu"],
  ["for results.", "para resultados.", "交付流程。", "pour les résultats."],
  ["We combine deep technical expertise with a structured", "Combinamos experiencia técnica profunda con un proceso", "我们将深厚的技术能力与结构化流程相结合，", "Nous associons une expertise technique approfondie à un processus structuré"],
  ["process that keeps projects aligned, efficient, and", "estructurado que mantiene los proyectos alineados, eficientes y", "确保项目方向一致、高效推进，", "qui maintient les projets alignés, efficaces et"],
  ["focused on what truly moves your business forward.", "enfocados en lo que realmente impulsa tu negocio.", "并专注于真正推动业务发展的事项。", "centrés sur ce qui fait réellement avancer votre entreprise."],
  ["Discover", "Descubrir", "探索", "Découvrir"],
  ["We dive deep into your business, workflows, and challenges to identify high-impact opportunities.", "Analizamos a fondo tu negocio, flujos y desafíos para identificar oportunidades de alto impacto.", "深入理解您的业务、流程与挑战，识别高影响力机会。", "Nous explorons votre activité, vos workflows et vos défis afin d’identifier les opportunités à fort impact."],
  ["Define", "Definir", "定义", "Définir"],
  ["We define the right solution, scope, and technical approach aligned with your goals.", "Definimos la solución, el alcance y el enfoque técnico adecuados para tus objetivos.", "围绕您的目标定义正确的解决方案、范围和技术路径。", "Nous définissons la solution, le périmètre et l’approche technique adaptés à vos objectifs."],
  ["Design & Engineer", "Diseñar y desarrollar", "设计与工程", "Concevoir et développer"],
  ["We design and build robust, scalable systems with clean architecture and best practices.", "Diseñamos y construimos sistemas robustos y escalables con arquitectura limpia y buenas prácticas.", "运用清晰架构和最佳实践，设计并构建稳健、可扩展的系统。", "Nous concevons des systèmes robustes et évolutifs avec une architecture claire et les meilleures pratiques."],
  ["Test & Validate", "Probar y validar", "测试与验证", "Tester et valider"],
  ["We test thoroughly, validate with real scenarios, and ensure performance, security, and reliability.", "Probamos a fondo, validamos con escenarios reales y garantizamos rendimiento, seguridad y fiabilidad.", "全面测试并通过真实场景验证，确保性能、安全与可靠性。", "Nous testons en profondeur, validons sur des scénarios réels et garantissons performance, sécurité et fiabilité."],
  ["Deploy", "Implementar", "部署", "Déployer"],
  ["We handle deployment, monitoring, and handoff with zero-downtime strategies built to scale.", "Gestionamos despliegue, monitoreo y entrega con estrategias sin interrupciones diseñadas para escalar.", "以零停机、可扩展的策略完成部署、监控与交接。", "Nous gérons le déploiement, le suivi et le transfert avec des stratégies sans interruption conçues pour évoluer."],
  ["We don’t just build software.", "No solo construimos software.", "我们不只开发软件。", "Nous ne créons pas seulement des logiciels."],
  ["We", "Nosotros", "我们", "Nous"],
  ["build systems that", "construimos sistemas que", "构建真正", "créons des systèmes qui"],
  ["move your business forward.", "impulsan tu negocio.", "推动业务前进的系统。", "font avancer votre entreprise."],
  ["Reliable", "Fiable", "可靠", "Fiable"],
  ["Built to last.", "Construido para durar.", "经久耐用。", "Conçu pour durer."],
  ["Scalable", "Escalable", "可扩展", "Évolutif"],
  ["Ready for what’s next.", "Listo para lo que sigue.", "为下一步做好准备。", "Prêt pour la suite."],
  ["Impactful", "Con impacto", "高影响力", "Impactant"],
  ["Focused on real outcomes.", "Enfocado en resultados reales.", "专注真实成果。", "Centré sur des résultats concrets."],
  ["Start your project", "Inicia tu proyecto", "启动您的项目", "Démarrer votre projet"],
  ["Schedule a call", "Agenda una llamada", "预约通话", "Planifier un appel"],
  ["Systems built around", "Sistemas creados para", "围绕真实业务", "Des systèmes conçus autour"],
  ["real operations.", "operaciones reales.", "构建的系统。", "des opérations réelles."],
  ["From tax automation and financial infrastructure to digital memberships", "Desde automatización fiscal e infraestructura financiera hasta membresías digitales", "从税务自动化和金融基础设施，到数字会员体系", "De l’automatisation fiscale et l’infrastructure financière aux adhésions numériques"],
  ["and algorithmic trading, we design platforms that perform in the real world.", "y trading algorítmico, diseñamos plataformas que rinden en el mundo real.", "和算法交易，我们设计经得起真实环境考验的平台。", "et au trading algorithmique, nous concevons des plateformes performantes dans le monde réel."],
  ["Tax Case Management", "Gestión de casos tributarios", "税务案件管理", "Gestion des dossiers fiscaux"],
  ["Workflow automation, RPA, and RAG-powered auditing for tax recovery operations...", "Automatización, RPA y auditoría con RAG para operaciones de recuperación tributaria...", "面向税务追偿运营的工作流自动化、RPA 与 RAG 智能审计……", "Automatisation, RPA et audit assisté par RAG pour les opérations de récupération fiscale..."],
  ["Financial Operations", "Operaciones financieras", "金融运营", "Opérations financières"],
  ["A structured platform for dematerialized credit-note workflows and liquidity tracking...", "Una plataforma estructurada para notas de crédito desmaterializadas y seguimiento de liquidez...", "用于无纸化信用票据流程与流动性追踪的结构化平台……", "Une plateforme structurée pour les workflows de notes de crédit dématérialisées et le suivi de liquidité..."],
  ["Membership Platform", "Plataforma de membresías", "会员平台", "Plateforme d’adhésion"],
  ["A digital ecosystem for olive grove memberships, tree tracking, and gifting...", "Un ecosistema digital para membresías de olivares, seguimiento de árboles y regalos...", "面向橄榄园会员、树木追踪与礼赠的数字生态系统……", "Un écosystème numérique pour les adhésions, le suivi des arbres et les cadeaux..."],
  ["Digital Commerce", "Comercio digital", "数字商务", "Commerce numérique"],
  ["A premium commerce experience for collectible interiors and curated pieces...", "Una experiencia premium para interiores de colección y piezas seleccionadas...", "面向收藏级室内精品与甄选单品的高端商务体验……", "Une expérience commerciale premium pour des pièces de collection et des sélections exclusives..."],
  ["Trading Platform", "Plataforma de trading", "交易平台", "Plateforme de trading"],
  ["A control center for automated trading, strategy testing, and performance monitoring...", "Un centro de control para trading automatizado, pruebas de estrategias y monitoreo de rendimiento...", "集自动交易、策略测试与绩效监控于一体的控制中心……", "Un centre de contrôle pour le trading automatisé, les tests de stratégies et le suivi des performances..."],
  ["View project", "Ver proyecto", "查看项目", "Voir le projet"],
  ["AI Auditing", "Auditoría con IA", "AI 审计", "Audit IA"],
  ["Case Ops", "Operación de casos", "案件运营", "Opérations de dossiers"],
  ["Finance", "Finanzas", "金融", "Finance"],
  ["Validation", "Validación", "验证", "Validation"],
  ["Liquidity", "Liquidez", "流动性", "Liquidité"],
  ["Membership", "Membresías", "会员", "Adhésion"],
  ["Mobile", "Móvil", "移动端", "Mobile"],
  ["Tree Tracking", "Seguimiento de árboles", "树木追踪", "Suivi des arbres"],
  ["Commerce", "Comercio", "商务", "Commerce"],
  ["Brand", "Marca", "品牌", "Marque"],
  ["Editorial", "Editorial", "内容编辑", "Éditorial"],
  ["Trading", "Trading", "交易", "Trading"],
  ["Backtesting", "Pruebas históricas", "回测", "Backtesting"],
  ["Analytics", "Analítica", "分析", "Analytique"],
  ["Explore a project", "Explora un proyecto", "探索项目", "Découvrir un projet"],
  ["Discuss your system", "Hablemos de tu sistema", "讨论您的系统", "Parlons de votre système"],
  ["Built for high-stakes operations.", "Diseñado para operaciones críticas.", "专为关键运营而建。", "Conçu pour les opérations critiques."],
  ["Let’s build the system", "Construyamos el sistema", "共同构建真正符合", "Construisons le système"],
  ["your business actually needs.", "que tu negocio realmente necesita.", "您业务需求的系统。", "dont votre entreprise a vraiment besoin."],
  ["Tell us what you’re building, where operations are breaking down,", "Cuéntanos qué estás construyendo, dónde fallan las operaciones", "告诉我们您正在构建什么、运营瓶颈在哪里，", "Dites-nous ce que vous construisez et où vos opérations rencontrent des difficultés,"],
  ["or where AI and automation can unlock scale. We’ll help you define", "o dónde la IA y la automatización pueden impulsar la escala. Te ayudaremos a definir", "或 AI 与自动化可以如何释放规模效应。我们将帮助您明确", "ou comment l’IA et l’automatisation peuvent libérer votre croissance. Nous vous aiderons à définir"],
  ["the right platform, workflow, and technical path forward.", "la plataforma, el flujo y el camino técnico adecuados.", "合适的平台、工作流与技术路径。", "la plateforme, le workflow et la trajectoire technique adaptés."],
  ["Name", "Nombre", "姓名", "Nom"],
  ["Your full name", "Tu nombre completo", "您的姓名", "Votre nom complet"],
  ["Email", "Correo", "邮箱", "E-mail"],
  ["Company", "Empresa", "公司", "Entreprise"],
  ["Company name", "Nombre de la empresa", "公司名称", "Nom de l’entreprise"],
  ["What do you need?", "¿Qué necesitas?", "您需要什么？", "De quoi avez-vous besoin ?"],
  ["Select an option", "Selecciona una opción", "请选择", "Sélectionnez une option"],
  ["Custom platform", "Plataforma a medida", "定制平台", "Plateforme sur mesure"],
  ["AI agents and RAG", "Agentes de IA y RAG", "AI 智能体与 RAG", "Agents IA et RAG"],
  ["Workflow automation", "Automatización de flujos", "工作流自动化", "Automatisation des workflows"],
  ["Systems integration", "Integración de sistemas", "系统集成", "Intégration de systèmes"],
  ["Cloud architecture", "Arquitectura cloud", "云架构", "Architecture cloud"],
  ["Product design", "Diseño de producto", "产品设计", "Design produit"],
  ["Project brief", "Resumen del proyecto", "项目简介", "Présentation du projet"],
  ["Tell us about your goals, challenges,\nand what success looks like.", "Cuéntanos tus objetivos, desafíos\ny cómo se ve el éxito.", "请介绍您的目标、挑战，\n以及成功的标准。", "Présentez vos objectifs, vos défis\net votre définition du succès."],
  ["Send inquiry", "Enviar consulta", "发送咨询", "Envoyer la demande"],
  ["Senior technical leadership", "Liderazgo técnico senior", "资深技术领导力", "Direction technique senior"],
  ["Deep expertise across AI, automation,", "Experiencia profunda en IA, automatización,", "深耕 AI、自动化、", "Expertise approfondie en IA, automatisation,"],
  ["cloud, and scalable systems.", "cloud y sistemas escalables.", "云与可扩展系统。", "cloud et systèmes évolutifs."],
  ["Production-ready delivery", "Entrega lista para producción", "生产级交付", "Livraison prête pour la production"],
  ["Built with engineering rigor, tested", "Construido con rigor, probado", "以严谨工程标准构建并测试，", "Conçu avec rigueur et testé"],
  ["for reliability, and designed to last.", "para ser fiable y durar.", "确保可靠且经久耐用。", "pour la fiabilité et la durabilité."],
  ["Architected to grow with your business", "Arquitectura que crece con tu negocio", "架构随您的业务共同成长", "Une architecture qui grandit avec votre entreprise"],
  ["and adapt to what’s next.", "y se adapta a lo que sigue.", "并适应未来变化。", "et s’adapte à la suite."],
  ["Available for selected projects", "Disponible para proyectos seleccionados", "承接精选项目", "Disponible pour des projets sélectionnés"],
  ["ENGINEERING FOR OPERATIONS IN MOTION", "INGENIERÍA PARA OPERACIONES EN MOVIMIENTO", "为持续运转的业务提供工程能力", "INGÉNIERIE POUR DES OPÉRATIONS EN MOUVEMENT"],
  ["Build the system", "Construye el sistema", "构建您的业务", "Construisez le système"],
  ["your business needs next.", "que tu negocio necesita ahora.", "下一步所需的系统。", "dont votre entreprise a besoin ensuite."],
  ["Production-ready software, AI agents, and automation designed for ambitious companies operating at scale.", "Software, agentes de IA y automatización listos para producción, diseñados para empresas ambiciosas que operan a escala.", "为规模化运营的进取型企业打造生产级软件、AI 智能体与自动化。", "Des logiciels, agents IA et automatisations prêts pour la production, conçus pour les entreprises ambitieuses opérant à grande échelle."],
  ["Our Methodology", "Nuestra metodología", "我们的方法", "Notre méthode"],
  ["Email us", "Escríbenos", "发送邮件", "Nous écrire"],
  ["Language", "Idioma", "语言", "Langue"],
  ["All rights reserved.", "Todos los derechos reservados.", "版权所有。", "Tous droits réservés."],
  ["UNIA Labs. All rights reserved.", "UNIA Labs. Todos los derechos reservados.", "UNIA Labs. 版权所有。", "UNIA Labs. Tous droits réservés."],
  ["Software infrastructure for operations in motion.", "Infraestructura de software para operaciones en movimiento.", "面向持续运转业务的软件基础设施。", "Infrastructure logicielle pour des opérations en mouvement."],
  ["Privacy", "Privacidad", "隐私", "Confidentialité"],
  ["Terms", "Términos", "条款", "Conditions"],
  ["Open navigation", "Abrir navegación", "打开导航", "Ouvrir la navigation"],
  ["Close navigation", "Cerrar navegación", "关闭导航", "Fermer la navigation"],
  ["Primary navigation", "Navegación principal", "主导航", "Navigation principale"],
  ["Choose language", "Elegir idioma", "选择语言", "Choisir la langue"],
  ["Footer navigation", "Navegación del pie", "页脚导航", "Navigation de pied de page"],
  ["Previous case study", "Caso anterior", "上一个案例", "Étude précédente"],
  ["Next case study", "Caso siguiente", "下一个案例", "Étude suivante"],
  ["Previous methodology page", "Página anterior de metodología", "上一页方法论", "Page précédente de la méthode"],
  ["Next methodology page", "Página siguiente de metodología", "下一页方法论", "Page suivante de la méthode"],
  ["Email UNIA Labs", "Escribir a UNIA Labs", "发送邮件给 UNIA Labs", "Écrire à UNIA Labs"],
  ["Book a call with UNIA Labs", "Agendar una llamada con UNIA Labs", "与 UNIA Labs 预约通话", "Réserver un appel avec UNIA Labs"],
];

const LANGUAGE_INDEX = { en: 0, es: 1, zh: 2, fr: 3 };
const textEntries = [];
const attributeEntries = [];

const translateText = (source, language = activeLanguage) => {
  const row = TRANSLATION_ROWS.find((entry) => entry[0] === source);
  return row?.[LANGUAGE_INDEX[language]] || source;
};

const captureTranslatableContent = () => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    const source = node.nodeValue.trim();
    const parent = node.parentElement;

    if (source && parent && !parent.closest("script, style") && !parent.classList.contains("material-symbols-outlined")) {
      textEntries.push({ node, source });
    }

    node = walker.nextNode();
  }

  document.querySelectorAll("[aria-label], [placeholder], [alt], [data-email-subject], [data-email-aria]").forEach((element) => {
    ["aria-label", "placeholder", "alt", "data-email-subject", "data-email-aria"].forEach((attribute) => {
      if (element.hasAttribute(attribute)) {
        attributeEntries.push({ element, attribute, source: element.getAttribute(attribute) });
      }
    });
  });
};

const updateLanguageMetadata = (language) => {
  const metadata = {
    en: {
      title: "Custom Software, AI Agents & Automation | UNIA Labs",
      description: "UNIA Labs builds custom software, AI agents, workflow automation, and cloud architecture for ambitious teams worldwide.",
    },
    es: {
      title: "Software a medida, agentes de IA y automatización | UNIA Labs",
      description: "UNIA Labs crea software a medida, agentes de IA, automatización y arquitectura cloud para empresas ambiciosas en todo el mundo.",
    },
    zh: {
      title: "定制软件、AI 智能体与自动化 | UNIA Labs",
      description: "UNIA Labs 为全球进取型企业打造定制软件、AI 智能体、工作流自动化与云架构。",
    },
    fr: {
      title: "Logiciels sur mesure, agents IA et automatisation | UNIA Labs",
      description: "UNIA Labs conçoit des logiciels sur mesure, des agents IA, des automatisations et des architectures cloud pour des entreprises ambitieuses dans le monde entier.",
    },
  }[language];

  document.title = metadata.title;
  document.querySelector("#meta-description")?.setAttribute("content", metadata.description);
  document.querySelector("#meta-og-title")?.setAttribute("content", metadata.title);
  document.querySelector("#meta-og-description")?.setAttribute("content", metadata.description);
  document.querySelector("#meta-og-locale")?.setAttribute("content", LANGUAGE_CONFIG[language].locale);
  document.querySelector("#meta-twitter-title")?.setAttribute("content", metadata.title);
  document.querySelector("#meta-twitter-description")?.setAttribute("content", metadata.description);
};

const applyLanguage = (language, updateUrl = false) => {
  if (!LANGUAGE_CONFIG[language]) {
    language = "en";
  }

  activeLanguage = language;
  document.documentElement.lang = LANGUAGE_CONFIG[language].html;

  textEntries.forEach(({ node, source }) => {
    const translated = translateText(source, language);
    node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), translated);
  });

  attributeEntries.forEach(({ element, attribute, source }) => {
    element.setAttribute(attribute, translateText(source, language));
  });

  document.querySelectorAll("[data-language]").forEach((link) => {
    const isActive = link.dataset.language === language;
    link.classList.toggle("is-active", isActive);
    isActive ? link.setAttribute("aria-current", "page") : link.removeAttribute("aria-current");
  });

  updateLanguageMetadata(language);

  try {
    window.localStorage.setItem("unia-language", language);
  } catch {
    // The language still works when storage is unavailable.
  }

  if (updateUrl) {
    const url = new URL(window.location.href);
    language === "en" ? url.searchParams.delete("lang") : url.searchParams.set("lang", language);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }
};

const initLanguage = () => {
  captureTranslatableContent();

  const requestedLanguage = new URLSearchParams(window.location.search).get("lang")?.toLowerCase();
  let storedLanguage = "";

  try {
    storedLanguage = window.localStorage.getItem("unia-language") || "";
  } catch {
    storedLanguage = "";
  }

  const browserLanguage = navigator.language.toLowerCase();
  const detectedLanguage = browserLanguage.startsWith("es")
    ? "es"
    : browserLanguage.startsWith("zh")
      ? "zh"
      : browserLanguage.startsWith("fr")
        ? "fr"
        : "en";
  const initialLanguage = LANGUAGE_CONFIG[requestedLanguage]
    ? requestedLanguage
    : LANGUAGE_CONFIG[storedLanguage]
      ? storedLanguage
      : detectedLanguage;

  applyLanguage(initialLanguage);

  document.querySelectorAll("[data-language]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      applyLanguage(link.dataset.language, true);
      hydrateEmailLinks();
      closeMenu();
    });
  });
};

const decodeEmailPart = (codes) => String.fromCharCode(...codes);

const getContactEmail = () =>
  `${decodeEmailPart(CONTACT_EMAIL_USER_CODES)}@${decodeEmailPart(CONTACT_EMAIL_DOMAIN_CODES)}`;

const hydrateEmailLinks = () => {
  const email = getContactEmail();
  const emailLinks = document.querySelectorAll("[data-email-link]");
  const emailTextNodes = document.querySelectorAll("[data-email-text]");

  emailLinks.forEach((link) => {
    const subject = link.dataset.emailSubject?.trim();
    const emailLabel = link.dataset.emailLabel?.trim();
    const ariaLabel = link.dataset.emailAria?.trim() || "Email UNIA Labs";
    let mailto = `mailto:${email}`;

    if (subject) {
      mailto += `?subject=${encodeURIComponent(subject)}`;
    }

    link.setAttribute("href", mailto);
    link.setAttribute("aria-label", ariaLabel);

    if (emailLabel) {
      link.textContent = emailLabel;
    }
  });

  emailTextNodes.forEach((node) => {
    node.textContent = email;
  });
};

const getHeroTitleText = () => {
  if (!heroTitleNode) {
    return "";
  }

  const existingText = heroTitleNode.dataset.fullText;

  if (existingText) {
    return existingText;
  }

  const normalizedText = heroTitleNode.textContent
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");

  heroTitleNode.dataset.fullText = normalizedText;
  heroTitleHeading?.setAttribute("aria-label", normalizedText.replace(/\n/g, " "));

  return normalizedText;
};

const renderHeroTitleImmediately = () => {
  if (!heroTitleNode) {
    return;
  }

  heroTitleNode.textContent = getHeroTitleText();
  heroTitleHeading?.classList.add("is-complete");
};

const getTypingDelay = (currentCharacter, nextCharacter) => {
  if (currentCharacter === "\n") {
    return 42 + Math.floor(Math.random() * 22);
  }

  if (/[.,:;]/.test(currentCharacter)) {
    return 210 + Math.floor(Math.random() * 120);
  }

  if (/\s/.test(currentCharacter)) {
    return 36 + Math.floor(Math.random() * 34);
  }

  let delay = 54 + Math.floor(Math.random() * 42);

  if (nextCharacter && /[A-Z]/.test(nextCharacter)) {
    delay += 26;
  }

  return delay;
};

const startHeroTitleTyping = () => {
  if (!heroTitleNode || heroTitleStarted) {
    return;
  }

  if (prefersReducedMotion.matches) {
    renderHeroTitleImmediately();
    heroTitleStarted = true;
    return;
  }

  heroTitleStarted = true;

  const fullText = getHeroTitleText();
  let currentIndex = 0;

  heroTitleNode.textContent = "";

  const typeNextCharacter = () => {
    currentIndex += 1;
    heroTitleNode.textContent = fullText.slice(0, currentIndex);

    if (currentIndex >= fullText.length) {
      heroTitleHeading?.classList.add("is-complete");
      return;
    }

    const currentCharacter = fullText[currentIndex - 1];
    const nextCharacter = fullText[currentIndex];
    const delay = getTypingDelay(currentCharacter, nextCharacter);

    window.setTimeout(typeNextCharacter, delay);
  };

  window.setTimeout(typeNextCharacter, 320);
};

const closeMenu = () => {
  if (!menuToggle || !mobileMenu) {
    return;
  }

  mobileMenu.classList.add("hidden");
  document.body.classList.remove("pp-menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", translateText("Open navigation"));
  menuToggle.innerHTML =
    '<span class="material-symbols-outlined text-[22px]">menu</span>';
};

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    mobileMenu.classList.toggle("hidden", isOpen);
    document.body.classList.toggle("pp-menu-open", !isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute(
      "aria-label",
      translateText(isOpen ? "Open navigation" : "Close navigation"),
    );
    menuToggle.innerHTML = isOpen
      ? '<span class="material-symbols-outlined text-[22px]">menu</span>'
      : '<span class="material-symbols-outlined text-[22px]">close</span>';
  });

  menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
      closeMenu();
    }
  }, { passive: true });
}

const handleNavState = () => {
  if (!nav) {
    return;
  }

  nav.classList.toggle("is-compact", window.scrollY > 18);
};

handleNavState();
window.addEventListener("scroll", handleNavState, { passive: true });

yearNodes.forEach((node) => {
  node.textContent = new Date().getFullYear();
});

initLanguage();
hydrateEmailLinks();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");

        if (heroTitleNode && entry.target.contains(heroTitleNode)) {
          startHeroTitleTyping();
        }

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
  startHeroTitleTyping();
}

if (heroTitleNode && prefersReducedMotion.matches) {
  renderHeroTitleImmediately();
  heroTitleStarted = true;
}

const initParticleHero = () => {
  const canvas = document.querySelector("[data-hero-particles]");

  if (!(canvas instanceof HTMLCanvasElement)) {
    return;
  }

  const context = canvas.getContext("2d", { alpha: true });

  if (!context) {
    return;
  }

  const points = [];
  const longitudeSteps = 148;
  const sectionSteps = 148;

  for (let longitude = 0; longitude < longitudeSteps; longitude += 1) {
    const longitudeAngle = (longitude / longitudeSteps) * Math.PI * 2;

    for (let section = 0; section < sectionSteps; section += 1) {
      const sectionAngle = (section / sectionSteps) * Math.PI * 2;
      const majorRadius =
        0.22 +
        0.065 * Math.sin(longitudeAngle * 3 + sectionAngle * 0.8) +
        0.035 * Math.cos(longitudeAngle * 5 - sectionAngle * 1.7);
      const minorRadius =
        0.79 +
        0.09 * Math.sin(sectionAngle * 2.7 - longitudeAngle * 2.15) +
        0.05 * Math.cos(longitudeAngle * 4.2 + sectionAngle * 1.4);
      const ringRadius = majorRadius + minorRadius * Math.cos(sectionAngle);
      let x = ringRadius * Math.cos(longitudeAngle);
      let y = minorRadius * Math.sin(sectionAngle) * 1.17;
      let z = ringRadius * Math.sin(longitudeAngle);

      // The spindle surface folds over itself; this warp keeps each lobe asymmetric.
      x += 0.055 * Math.sin(sectionAngle * 3 + longitudeAngle * 1.7);
      y += 0.05 * Math.sin(longitudeAngle * 3.2 - sectionAngle * 1.25);
      z += 0.055 * Math.cos(sectionAngle * 2.4 + longitudeAngle * 2.2);

      points.push({
        x: x / 1.08,
        y: y / 1.08,
        z: z / 1.08,
        longitudeAngle,
        sectionAngle,
      });
    }
  }

  let width = 0;
  let height = 0;
  let animationFrame = 0;
  let lastDrawTime = 0;
  let isDocumentVisible = !document.hidden;
  let isCanvasVisible = true;
  const pointerInteraction = {
    x: 0.5,
    y: 0.5,
    targetX: 0.5,
    targetY: 0.5,
    strength: 0,
    targetStrength: 0,
    pulse: 0,
  };

  const resizeCanvas = () => {
    const bounds = canvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  };

  const draw = (timestamp = 0) => {
    const frameInterval = width < 640 ? 48 : 32;

    if (!prefersReducedMotion.matches && timestamp - lastDrawTime < frameInterval) {
      animationFrame = window.requestAnimationFrame(draw);
      return;
    }

    lastDrawTime = timestamp;
    context.clearRect(0, 0, width, height);

    pointerInteraction.x += (pointerInteraction.targetX - pointerInteraction.x) * 0.1;
    pointerInteraction.y += (pointerInteraction.targetY - pointerInteraction.y) * 0.1;
    pointerInteraction.strength +=
      (pointerInteraction.targetStrength - pointerInteraction.strength) * 0.09;
    pointerInteraction.pulse *= 0.92;

    const time = prefersReducedMotion.matches ? 0 : timestamp * 0.00032;
    const pointerYaw = (pointerInteraction.x - 0.5) * 0.62 * pointerInteraction.strength;
    const pointerPitch = (pointerInteraction.y - 0.5) * 0.38 * pointerInteraction.strength;
    const rotationY = -0.46 + time * 0.34 + pointerYaw;
    const rotationX = -0.1 + Math.sin(time * 0.72) * 0.035 + pointerPitch;
    const cosY = Math.cos(rotationY);
    const sinY = Math.sin(rotationY);
    const cosX = Math.cos(rotationX);
    const sinX = Math.sin(rotationX);
    const radius = Math.min(width * 0.395, height * 0.42);
    const centerX =
      width * 0.4 +
      Math.sin(time * 0.58) * width * 0.004 +
      (pointerInteraction.x - 0.5) * width * 0.018 * pointerInteraction.strength;
    const centerY =
      height * 0.425 +
      Math.sin(time * 0.82) * height * 0.008 +
      (pointerInteraction.y - 0.5) * height * 0.014 * pointerInteraction.strength;
    const projectedPoints = [];
    const breath = 1 + Math.sin(time * 1.08) * 0.024 + Math.sin(time * 2.16) * 0.006;
    const heartbeat = 1 + Math.pow(Math.max(0, Math.sin(time * 2.35)), 10) * 0.018;
    const pointerX = pointerInteraction.x * width;
    const pointerY = pointerInteraction.y * height;
    const interactionRadius = radius * 0.72;

    for (let pointIndex = 0; pointIndex < points.length; pointIndex += 1) {
      const point = points[pointIndex];
      const surfaceMotion =
        1 +
        Math.sin(
          point.longitudeAngle * 2.8 + point.sectionAngle * 1.9 + time * 2.7,
        ) *
          0.027 +
        Math.cos(
          point.longitudeAngle * 1.7 - point.sectionAngle * 2.6 - time * 1.65,
        ) *
          0.014;
      const travelingPulse =
        Math.sin(point.longitudeAngle * 4.2 - point.sectionAngle * 1.3 - time * 3.4) * 0.012;
      const morph = breath * heartbeat * (surfaceMotion + travelingPulse);
      const axisFlow = Math.sin(point.sectionAngle * 2.2 + time * 1.9) * 0.013;
      const baseX = point.x * morph * (1 + axisFlow);
      const baseY = point.y * morph * (1 - axisFlow * 0.7);
      const baseZ = point.z * morph * (1 + axisFlow * 0.45);
      const rotatedX = baseX * cosY - baseZ * sinY;
      const rotatedZ = baseX * sinY + baseZ * cosY;
      const rotatedY = baseY * cosX - rotatedZ * sinX;
      const depth = baseY * sinX + rotatedZ * cosX;
      const perspective = 2.95 / (3.4 - depth * 0.34);
      let projectedX = centerX + rotatedX * radius * perspective;
      let projectedY = centerY + rotatedY * radius * perspective;
      const pointerDeltaX = projectedX - pointerX;
      const pointerDeltaY = projectedY - pointerY;
      const pointerDistance = Math.hypot(pointerDeltaX, pointerDeltaY);
      const proximity =
        pointerInteraction.strength * Math.max(0, 1 - pointerDistance / interactionRadius);

      if (proximity > 0) {
        const directionX = pointerDistance > 0.1 ? pointerDeltaX / pointerDistance : rotatedX;
        const directionY = pointerDistance > 0.1 ? pointerDeltaY / pointerDistance : rotatedY;
        const displacement =
          proximity * proximity * radius * (0.045 + pointerInteraction.pulse * 0.055);

        projectedX += directionX * displacement;
        projectedY += directionY * displacement;
      }

      projectedPoints.push({
        x: projectedX,
        y: projectedY,
        depth,
        perspective,
        energy:
          0.5 +
          Math.sin(point.longitudeAngle * 2.6 + point.sectionAngle * 1.7 - time * 2.9) * 0.5,
      });
    }

    projectedPoints.sort((a, b) => a.depth - b.depth);

    for (const point of projectedPoints) {
      const normalizedDepth = Math.max(0, Math.min(1, (point.depth + 1.28) / 2.56));
      const opacity = Math.min(1, 0.26 + normalizedDepth * 0.62 + point.energy * 0.16);
      const dotRadius = Math.max(
        0.48,
        radius * 0.00455 * point.perspective * (0.94 + point.energy * 0.16),
      );
      const red = Math.round(96 - normalizedDepth * 54 + point.energy * 8);
      const green = Math.round(184 - normalizedDepth * 64 + point.energy * 15);

      context.beginPath();
      context.fillStyle = `rgba(${red}, ${green}, 255, ${opacity})`;
      context.arc(point.x, point.y, dotRadius, 0, Math.PI * 2);
      context.fill();
    }

    const beamGradient = context.createLinearGradient(0, centerY + radius * 0.72, 0, height * 0.94);
    beamGradient.addColorStop(0, "rgba(74, 164, 255, 0.13)");
    beamGradient.addColorStop(1, "rgba(74, 164, 255, 0)");
    context.fillStyle = beamGradient;
    context.beginPath();
    context.moveTo(centerX - radius * 0.025, centerY + radius * 0.7);
    context.lineTo(centerX + radius * 0.025, centerY + radius * 0.7);
    context.lineTo(centerX + radius * 0.1, height * 0.94);
    context.lineTo(centerX - radius * 0.1, height * 0.94);
    context.closePath();
    context.fill();

    if (!prefersReducedMotion.matches && isDocumentVisible && isCanvasVisible) {
      animationFrame = window.requestAnimationFrame(draw);
    }
  };

  const restartAnimation = () => {
    window.cancelAnimationFrame(animationFrame);
    lastDrawTime = 0;
    resizeCanvas();
    draw(performance.now());
  };

  const resizeObserver = new ResizeObserver(restartAnimation);
  resizeObserver.observe(canvas);

  const updatePointerInteraction = (event) => {
    if (prefersReducedMotion.matches || event.pointerType === "touch") {
      return;
    }

    const bounds = canvas.getBoundingClientRect();
    pointerInteraction.targetX = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    pointerInteraction.targetY = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    pointerInteraction.targetStrength = 1;
  };

  canvas.addEventListener("pointerenter", updatePointerInteraction);
  canvas.addEventListener("pointermove", updatePointerInteraction);
  canvas.addEventListener("pointerleave", () => {
    pointerInteraction.targetX = 0.5;
    pointerInteraction.targetY = 0.5;
    pointerInteraction.targetStrength = 0;
    canvas.classList.remove("is-interacting");
  });
  canvas.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch" || prefersReducedMotion.matches) {
      return;
    }

    updatePointerInteraction(event);
    pointerInteraction.pulse = 1;
    canvas.classList.add("is-interacting");
  });
  window.addEventListener("pointerup", () => canvas.classList.remove("is-interacting"));

  if ("IntersectionObserver" in window) {
    const canvasObserver = new IntersectionObserver(
      ([entry]) => {
        isCanvasVisible = entry.isIntersecting;

        if (isCanvasVisible && isDocumentVisible) {
          restartAnimation();
        } else {
          window.cancelAnimationFrame(animationFrame);
        }
      },
      { rootMargin: "180px 0px", threshold: 0 },
    );

    canvasObserver.observe(canvas);
  }

  document.addEventListener("visibilitychange", () => {
    isDocumentVisible = !document.hidden;

    if (isDocumentVisible) {
      restartAnimation();
    } else {
      window.cancelAnimationFrame(animationFrame);
    }
  });

  prefersReducedMotion.addEventListener("change", restartAnimation);
  restartAnimation();
};

initParticleHero();

const initCaseStudiesCarousel = () => {
  const viewport = document.querySelector("[data-case-viewport]");
  const track = document.querySelector("[data-case-track]");
  const previousButton = document.querySelector("[data-case-prev]");
  const nextButton = document.querySelector("[data-case-next]");
  const currentNode = document.querySelector("[data-case-current]");
  const totalNode = document.querySelector("[data-case-total]");

  if (!viewport || !track || !previousButton || !nextButton) {
    return;
  }

  const cards = Array.from(track.children);
  let currentIndex = 0;
  let pointerStart = null;

  if (!cards.length) {
    return;
  }

  viewport.setAttribute("tabindex", "0");
  viewport.setAttribute("aria-label", "Case studies carousel");
  totalNode && (totalNode.textContent = String(cards.length));

  const updateCarousel = () => {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const trackStyles = window.getComputedStyle(track);
    const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap) || 0;
    const offset = currentIndex * (cardWidth + gap);

    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === cards.length - 1;
    currentNode && (currentNode.textContent = String(currentIndex + 1));
  };

  const goToCase = (index) => {
    currentIndex = Math.max(0, Math.min(cards.length - 1, index));
    updateCarousel();
  };

  previousButton.addEventListener("click", () => goToCase(currentIndex - 1));
  nextButton.addEventListener("click", () => goToCase(currentIndex + 1));

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToCase(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToCase(currentIndex + 1);
    }
  });

  viewport.addEventListener("pointerdown", (event) => {
    pointerStart = event.clientX;
  });

  viewport.addEventListener("pointerup", (event) => {
    if (pointerStart === null) {
      return;
    }

    const distance = event.clientX - pointerStart;
    pointerStart = null;

    if (Math.abs(distance) < 42) {
      return;
    }

    goToCase(currentIndex + (distance < 0 ? 1 : -1));
  });

  viewport.addEventListener("pointercancel", () => {
    pointerStart = null;
  });

  window.addEventListener("resize", updateCarousel, { passive: true });
  updateCarousel();
};

initCaseStudiesCarousel();

const initMethodologyCarousel = () => {
  const viewport = document.querySelector("[data-method-viewport]");
  const track = document.querySelector("[data-method-track]");
  const previousButton = document.querySelector("[data-method-prev]");
  const nextButton = document.querySelector("[data-method-next]");
  const currentNode = document.querySelector("[data-method-current]");
  const totalNode = document.querySelector("[data-method-total]");
  const progressNode = document.querySelector("[data-method-progress]");

  if (!viewport || !track || !previousButton || !nextButton) {
    return;
  }

  const cards = Array.from(track.children);
  let currentPage = 0;
  let pointerStart = null;
  let pageCount = 2;

  if (!cards.length) {
    return;
  }

  viewport.setAttribute("tabindex", "0");
  viewport.setAttribute("aria-label", "Methodology steps carousel");

  const updateCarousel = () => {
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    const cardWidth = cards[0].getBoundingClientRect().width;
    const trackStyles = window.getComputedStyle(track);
    const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap) || 0;
    const trackWidth = cards.length * cardWidth + (cards.length - 1) * gap;
    const maxOffset = Math.max(0, trackWidth - viewport.getBoundingClientRect().width);

    pageCount = isMobile ? cards.length : 2;
    currentPage = Math.min(currentPage, pageCount - 1);

    const offset = isMobile
      ? Math.min(maxOffset, currentPage * (cardWidth + gap))
      : currentPage === 0
        ? 0
        : maxOffset;

    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    previousButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === pageCount - 1;
    currentNode && (currentNode.textContent = String(currentPage + 1));
    totalNode && (totalNode.textContent = String(pageCount));

    if (progressNode) {
      progressNode.style.width = `${100 / pageCount}%`;
      progressNode.style.transform = `translateX(${currentPage * 100}%)`;
    }
  };

  const goToPage = (page) => {
    currentPage = Math.max(0, Math.min(pageCount - 1, page));
    updateCarousel();
  };

  previousButton.addEventListener("click", () => goToPage(currentPage - 1));
  nextButton.addEventListener("click", () => goToPage(currentPage + 1));

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPage(currentPage - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToPage(currentPage + 1);
    }
  });

  viewport.addEventListener("pointerdown", (event) => {
    pointerStart = event.clientX;
  });

  viewport.addEventListener("pointerup", (event) => {
    if (pointerStart === null) {
      return;
    }

    const distance = event.clientX - pointerStart;
    pointerStart = null;

    if (Math.abs(distance) >= 42) {
      goToPage(currentPage + (distance < 0 ? 1 : -1));
    }
  });

  viewport.addEventListener("pointercancel", () => {
    pointerStart = null;
  });

  window.addEventListener("resize", updateCarousel, { passive: true });
  updateCarousel();
};

initMethodologyCarousel();

const initPremiumMotion = () => {
  const progressBar = document.querySelector("[data-scroll-progress] span");
  const motionItems = Array.from(
    document.querySelectorAll(
      ".pp-service-card, .pp-case-card, .pp-method-card, .pp-contact-form, .pp-contact-assurance",
    ),
  );
  const tiltItems = Array.from(
    document.querySelectorAll(".pp-service-card, .pp-case-card, .pp-method-card"),
  );
  const staggerGroups = Array.from(
    document.querySelectorAll(
      ".pp-services-header, .pp-method-header, .pp-cases-header, .pp-contact-copy",
    ),
  );
  const darkSections = Array.from(document.querySelectorAll(".pp-services, .pp-cases"));
  const magneticButtons = Array.from(document.querySelectorAll(".pp-button"));
  const finePointer = window.matchMedia("(pointer: fine)");

  motionItems.forEach((item, index) => {
    item.classList.add("motion-reveal");
    item.style.setProperty("--motion-delay", `${(index % 6) * 65}ms`);
  });

  tiltItems.forEach((item) => item.classList.add("motion-tilt"));
  staggerGroups.forEach((group) => group.classList.add("motion-stagger"));

  if (prefersReducedMotion.matches) {
    motionItems.forEach((item) => item.classList.add("is-motion-visible"));
    return;
  }

  if ("IntersectionObserver" in window) {
    const motionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const item = entry.target;
          const delay = Number.parseInt(item.style.getPropertyValue("--motion-delay"), 10) || 0;

          item.classList.add("is-motion-visible");
          window.setTimeout(() => item.style.setProperty("--motion-delay", "0ms"), delay + 1050);
          motionObserver.unobserve(item);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    motionItems.forEach((item) => motionObserver.observe(item));
  } else {
    motionItems.forEach((item) => item.classList.add("is-motion-visible"));
  }

  if (finePointer.matches) {
    tiltItems.forEach((item) => {
      let tiltFrame = 0;

      item.addEventListener("pointermove", (event) => {
        window.cancelAnimationFrame(tiltFrame);
        tiltFrame = window.requestAnimationFrame(() => {
          const bounds = item.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width;
          const y = (event.clientY - bounds.top) / bounds.height;
          const tiltX = (0.5 - y) * 5.5;
          const tiltY = (x - 0.5) * 6.5;

          item.classList.add("is-tilting");
          item.style.setProperty("--tilt-x", `${tiltX}deg`);
          item.style.setProperty("--tilt-y", `${tiltY}deg`);
          item.style.transform = `perspective(1100px) translate3d(0, -0.35rem, 0) rotateX(${tiltX.toFixed(3)}deg) rotateY(${tiltY.toFixed(3)}deg) scale(1)`;
        });
      });

      item.addEventListener("pointerleave", () => {
        window.cancelAnimationFrame(tiltFrame);
        item.classList.remove("is-tilting");
        item.style.setProperty("--tilt-x", "0deg");
        item.style.setProperty("--tilt-y", "0deg");
        item.style.removeProperty("transform");
      });
    });

    magneticButtons.forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const bounds = button.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.08;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.1;

        button.style.setProperty("--magnetic-x", `${x.toFixed(2)}px`);
        button.style.setProperty("--magnetic-y", `${y.toFixed(2)}px`);
      });

      button.addEventListener("pointerleave", () => {
        button.style.setProperty("--magnetic-x", "0px");
        button.style.setProperty("--magnetic-y", "0px");
      });
    });
  }

  let scrollFrame = 0;

  const updateScrollMotion = () => {
    scrollFrame = 0;
    const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollRange > 0 ? window.scrollY / scrollRange : 0;

    progressBar?.style.setProperty("--page-progress", String(scrollProgress));

    darkSections.forEach((section) => {
      const bounds = section.getBoundingClientRect();
      const sectionCenter = bounds.top + bounds.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const normalized = Math.max(-1, Math.min(1, (viewportCenter - sectionCenter) / window.innerHeight));

      section.style.setProperty("--ambient-shift", `${normalized * 30}px`);
    });
  };

  const requestScrollMotion = () => {
    if (!scrollFrame) {
      scrollFrame = window.requestAnimationFrame(updateScrollMotion);
    }
  };

  window.addEventListener("scroll", requestScrollMotion, { passive: true });
  window.addEventListener("resize", requestScrollMotion, { passive: true });
  updateScrollMotion();
};

initPremiumMotion();

const initContactForm = () => {
  const form = document.querySelector("[data-contact-form]");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const need = String(formData.get("need") || "").trim();
    const brief = String(formData.get("brief") || "").trim();
    const subject = `Project inquiry: ${need} - ${company}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Need: ${need}`,
      "",
      "Project brief:",
      brief,
    ].join("\n");

    window.location.href = `mailto:${getContactEmail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
};

initContactForm();
