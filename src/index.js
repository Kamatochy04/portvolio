document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const scrollDown = document.querySelector(".scroll-down");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Закрытие меню при клике на ссылку
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Анимация шапки при скролле
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.style.padding = "0.8rem 2rem";
      header.style.background = "rgba(45, 45, 45, 0.9)";
    } else {
      header.style.padding = "1.2rem 2rem";
      header.style.background = "rgba(45, 45, 45, 0.7)";
    }
  });

  // Плавная прокрутка для стрелочки
  scrollDown.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(scrollDown.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
