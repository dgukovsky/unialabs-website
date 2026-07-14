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
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.innerHTML =
    '<span class="material-symbols-outlined text-[22px]">menu</span>';
};

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    mobileMenu.classList.toggle("hidden", isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.innerHTML = isOpen
      ? '<span class="material-symbols-outlined text-[22px]">menu</span>'
      : '<span class="material-symbols-outlined text-[22px]">close</span>';
  });

  menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
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
  const latitudeSteps = 66;
  const longitudeSteps = 108;

  for (let latitude = 1; latitude < latitudeSteps; latitude += 1) {
    const theta = (latitude / latitudeSteps) * Math.PI;

    for (let longitude = 0; longitude < longitudeSteps; longitude += 1) {
      const phi = (longitude / longitudeSteps) * Math.PI * 2;
      const ridge =
        0.22 * Math.sin(phi * 3 + theta * 1.7) +
        0.15 * Math.sin(theta * 5 - phi * 2.1) +
        0.09 * Math.cos(phi * 7 + theta * 2.4);
      const radius = 1 + ridge;
      const sinTheta = Math.sin(theta);
      let x = radius * sinTheta * Math.cos(phi);
      let y = radius * Math.cos(theta) * 0.92;
      let z = radius * sinTheta * Math.sin(phi);

      x += 0.2 * Math.sin(y * 3.3 + z * 1.4);
      y += 0.15 * Math.sin(z * 3.1 - x * 1.8);
      z += 0.13 * Math.cos(x * 3.6 + y * 1.5);

      points.push({ x, y, z, phase: theta * 2 + phi });
    }
  }

  let width = 0;
  let height = 0;
  let animationFrame = 0;
  let isDocumentVisible = !document.hidden;

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
    context.clearRect(0, 0, width, height);

    const time = prefersReducedMotion.matches ? 0 : timestamp * 0.00011;
    const rotationY = -0.34 + time;
    const rotationX = -0.12 + Math.sin(time * 0.7) * 0.025;
    const cosY = Math.cos(rotationY);
    const sinY = Math.sin(rotationY);
    const cosX = Math.cos(rotationX);
    const sinX = Math.sin(rotationX);
    const radius = Math.min(width * 0.4, height * 0.39);
    const centerX = width * 0.4;
    const centerY = height * 0.43;
    const projectedPoints = [];

    for (const point of points) {
      const breathing = 1 + Math.sin(time * 2.1 + point.phase) * 0.014;
      const baseX = point.x * breathing;
      const baseY = point.y * breathing;
      const baseZ = point.z * breathing;
      const rotatedX = baseX * cosY - baseZ * sinY;
      const rotatedZ = baseX * sinY + baseZ * cosY;
      const rotatedY = baseY * cosX - rotatedZ * sinX;
      const depth = baseY * sinX + rotatedZ * cosX;
      const perspective = 2.7 / (3.15 - depth * 0.42);

      projectedPoints.push({
        x: centerX + rotatedX * radius * perspective,
        y: centerY + rotatedY * radius * perspective,
        depth,
        perspective,
      });
    }

    projectedPoints.sort((a, b) => a.depth - b.depth);

    for (const point of projectedPoints) {
      const normalizedDepth = Math.max(0, Math.min(1, (point.depth + 1.35) / 2.7));
      const opacity = 0.48 + normalizedDepth * 0.51;
      const dotRadius = Math.max(0.72, radius * 0.0061 * point.perspective);
      const red = Math.round(82 - normalizedDepth * 48);
      const green = Math.round(177 - normalizedDepth * 65);

      context.beginPath();
      context.fillStyle = `rgba(${red}, ${green}, 255, ${opacity})`;
      context.arc(point.x, point.y, dotRadius, 0, Math.PI * 2);
      context.fill();
    }

    const beamGradient = context.createLinearGradient(0, centerY + radius * 0.72, 0, height * 0.94);
    beamGradient.addColorStop(0, "rgba(74, 164, 255, 0.2)");
    beamGradient.addColorStop(1, "rgba(74, 164, 255, 0)");
    context.fillStyle = beamGradient;
    context.beginPath();
    context.moveTo(centerX - radius * 0.04, centerY + radius * 0.7);
    context.lineTo(centerX + radius * 0.04, centerY + radius * 0.7);
    context.lineTo(centerX + radius * 0.18, height * 0.94);
    context.lineTo(centerX - radius * 0.18, height * 0.94);
    context.closePath();
    context.fill();

    if (!prefersReducedMotion.matches && isDocumentVisible) {
      animationFrame = window.requestAnimationFrame(draw);
    }
  };

  const restartAnimation = () => {
    window.cancelAnimationFrame(animationFrame);
    resizeCanvas();
    draw(performance.now());
  };

  const resizeObserver = new ResizeObserver(restartAnimation);
  resizeObserver.observe(canvas);

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
