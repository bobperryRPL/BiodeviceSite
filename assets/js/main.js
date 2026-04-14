document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

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
