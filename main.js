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
