document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.getElementById("primary-nav");

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    primaryNav.classList.toggle("open", !expanded);
    primaryNav.classList.toggle("in", !expanded);
  });
}

const pricingButtons = document.querySelectorAll(".seg");

function setPricingFocus(which) {
  pricingButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.focus === which));
  });

  document.querySelectorAll(".focus-col").forEach((node) => node.classList.remove("focus-col"));
  document.querySelectorAll(".focus-head").forEach((node) => node.classList.remove("focus-head"));

  document.querySelectorAll(".head-" + which).forEach((node) => node.classList.add("focus-head"));
  document.querySelectorAll(".col-" + which).forEach((node) => node.classList.add("focus-col"));
}

pricingButtons.forEach((button) => {
  button.addEventListener("click", () => setPricingFocus(button.dataset.focus));
});

if (pricingButtons.length > 0) {
  setPricingFocus("internal");
}
