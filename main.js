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
