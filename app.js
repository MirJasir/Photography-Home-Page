// TYPING EFFECT

var typeData = new Typed(".role", {
  strings: ["Story Teller.", "Photographer."],
  loop: true,
  typeSpeed: 110,
  backSpeed: 110,
  backDelay: 1000,
});

// SLIDER

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// MINI SLIDER

const btns2 = document.querySelectorAll(".nav-btn-2");
const slides2 = document.querySelectorAll(".img-slide-2");

var sliderNav2 = function (manual) {
  btns2.forEach((btn2) => {
    btn2.classList.remove("active-2");
  });

  slides2.forEach((slide2) => {
    slide2.classList.remove("active-2");
  });

  btns2[manual].classList.add("active-2");
  slides2[manual].classList.add("active-2");
};

btns2.forEach((btns, i) => {
  btns.addEventListener("click", () => {
    sliderNav2(i);
  });
});
