const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
const revealElements = document.querySelectorAll(".reveal");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnButton = menuToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnButton) {
    menu.classList.remove("active");
  }
});