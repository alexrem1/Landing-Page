// popup
const popup = (e) => {
  if (
    e.target.className === "hero__cta" ||
    e.target.className === "promo__cta" ||
    e.target.className === "carousel__cta"
  ) {
    document.querySelector(".popup").classList.add("visible");
  }
};
document.addEventListener("click", popup);

const exitPopup = (e) => {
  if (e.target.className === "popup__close") {
    document.querySelector(".popup").classList.remove("visible");
  }
};
document.querySelector(".popup").addEventListener("click", exitPopup);

// accordion
const accordion = document.querySelectorAll(".accordion__single");

accordion.forEach((accord) => {
  accord.addEventListener("click", () => {
    accord.classList.toggle("open");
    accord.classList.toggle("active");
  });
});

// mobile nav
const hamburgerContainer = document.querySelector(".hamburger");
const hamburger = document.querySelectorAll(".hamburger__btn");
const menu = document.querySelector(".nav");
let showMenu = false;

hamburgerContainer.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.forEach((item) => item.classList.add("open"));
    menu.classList.add("open");
    hamburgerContainer.classList.add("open");

    showMenu = true;
  } else {
    hamburger.forEach((item) => item.classList.remove("open"));
    menu.classList.remove("open");
    hamburgerContainer.classList.remove("open");

    showMenu = false;
  }
}

//carousel
const carouselSlide = document.querySelectorAll(".carousel__product");
const carouselImages = document.querySelector(".carousel__product img");

// buttons
const prevBtn = document.querySelector(".carousel__prevBtn");
const nextBtn = document.querySelector(".carousel__nextBtn");

// counter
let counter = 0;
const size = carouselImages.clientWidth;

// button listeners
nextBtn.addEventListener("click", () => {
  if (counter >= 1) {
    nextBtn.style.visibility = "hidden";
  }
  prevBtn.style.visibility = null;
  carouselSlide.forEach((car) => {
    car.style.transition = "transform 0.4s ease-in-out";
  });
  counter++;
  carouselSlide.forEach((car) => {
    car.style.transform = "translateX(" + -size * counter + "px)";
  });
});

prevBtn.addEventListener("click", () => {
  console.log(counter);
  if (counter <= -1) {
    prevBtn.style.visibility = "hidden";
  }
  nextBtn.style.visibility = null;
  carouselSlide.forEach((car) => {
    car.style.transition = "transform 0.4s ease-in-out";
  });
  counter--;
  carouselSlide.forEach((car) => {
    car.style.transform = "translateX(" + -size * counter + "px)";
  });
});
