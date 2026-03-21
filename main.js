const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const menuLinks = document.querySelectorAll("[data-menu-link]");
const nav = document.querySelector("[data-nav]");
const revealItems = document.querySelectorAll("[data-reveal]");
const yearNodes = document.querySelectorAll("[data-year]");

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
}
