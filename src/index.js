document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  const mySlider = new Splide(".splide", {
    perPage: 3,
    gap: "1rem",
    type: "loop",
    pagination: false,
    speed: 600,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    focus: "center",
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    arrows: false,
    breakpoints: {
      768: {
        perPage: 3,
        focus: "center",
      },
      480: {
        perPage: 1,
        focus: "center",
      },
    },
  }).mount();

  const tehnologyFront = new Splide(".splide", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
  });

  tehnologyFront.mount();

  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Close menu when clicking a nav item
  document.querySelectorAll(".header__nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.remove("active");
      nav.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      burger.classList.remove("active");
      nav.classList.remove("active");
    }
  });

  const triggers = document.querySelectorAll(".modal-trigger");
  const modal = document.querySelector("#quick-contact-modal");
  const closeButton = document.querySelector(".modal__close");
  const form = document.querySelector(".modal__form");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      modal.classList.add("active");
    });
  });

  closeButton.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission
    modal.classList.remove("active");
    // Add your form submission logic here (e.g., send data to server)
    form.reset(); // Reset form fields
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });
});
