const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const menuLinks = document.querySelectorAll("[data-menu-link]");
const nav = document.querySelector("[data-nav]");
const revealItems = document.querySelectorAll("[data-reveal]");
const yearNodes = document.querySelectorAll("[data-year]");
const heroTitleNode = document.querySelector("[data-hero-title]");
const heroTitleHeading = heroTitleNode?.closest(".hero-title");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let heroTitleStarted = false;

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
    let delay = 28;

    if (currentCharacter === "\n") {
      delay = 230;
    } else if (/[.,]/.test(currentCharacter)) {
      delay = 110;
    } else if (/\s/.test(currentCharacter)) {
      delay = 18;
    }

    window.setTimeout(typeNextCharacter, delay);
  };

  window.setTimeout(typeNextCharacter, 220);
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
