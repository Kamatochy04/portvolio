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
});
