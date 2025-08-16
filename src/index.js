document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

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
    form.reset(); // Reset form fields
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });

  const updateParallax = (className) => {
    const elements = document.querySelectorAll(`.${className}`);

    // Инициализация текущих позиций для сглаживания
    const currentPositions = new Map();
    elements.forEach((element) => {
      currentPositions.set(element, 0);
    });

    const update = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;
        const elementCenter = elementTop + rect.height / 2;
        const scrollProgress =
          (scrollPosition + windowHeight / 2 - elementCenter) / windowHeight;

        const amplitude = parseFloat(
          element.getAttribute("data-amplitude") || "250"
        );
        const rotation = parseFloat(
          element.getAttribute("data-rotation") || "23"
        );

        const targetTranslateY = scrollProgress * amplitude;

        const currentTranslateY = currentPositions.get(element) || 0;
        const smoothedTranslateY =
          currentTranslateY + (targetTranslateY - currentTranslateY) * 0.1;

        currentPositions.set(element, smoothedTranslateY);

        element.style.transition = "transform 0.1s ease-out"; // Плавный переход
        element.style.transform = `translateY(${smoothedTranslateY}px) rotate(${rotation}deg)`;
      });

      requestAnimationFrame(update);
    };

    update();
  };

  updateParallax("js-bg");
  updateParallax("ts-bg");
  updateParallax("node-bg");
  updateParallax("react-bg");
  updateParallax("tg-bg");
});
