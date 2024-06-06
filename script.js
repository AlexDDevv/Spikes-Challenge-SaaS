const navBar = document.querySelector("header");
const heroText = document.querySelector(".hero-text");
const heroImg = document.querySelector(".hero-img");
const brands = document.querySelectorAll(".brand");
const features = document.querySelector(".features");
const cards = document.querySelectorAll(".card");

const onPageLoad = () => {
  document.body.scrollTo(0, 0);
  navBar.classList.add("nav-appear");
  heroText.classList.add("hero-appear");
  heroImg.classList.add("hero-appear");
};

const handleScroll = () => {
  const { scrollTop, clientHeight } = document.documentElement;
  const threshold = clientHeight * 0.8;

  brands.forEach((brand, index) => {
    brand.style.transitionDelay = `${(index + 1) * 0.1}s`;
    const topElementToTopViewPort = brand.getBoundingClientRect().top;
    const isVisible =
      scrollTop > scrollTop + topElementToTopViewPort - threshold;
    if (isVisible) {
      brand.classList.add("brand-scroll");
    }
  });

  const topElementToTopViewPort = features.getBoundingClientRect().top;
  const isVisible = scrollTop > scrollTop + topElementToTopViewPort - threshold;
  if (isVisible) {
    features.classList.add("features-scroll");
  }

  cards.forEach((card) => {
    const topElementToTopViewPort = card.getBoundingClientRect().top;
    const isVisible =
      scrollTop > scrollTop + topElementToTopViewPort - threshold;
    if (isVisible) {
      card.classList.add("card-slide");
    }
  });
};

document.addEventListener("DOMContentLoaded", onPageLoad);
window.addEventListener("scroll", handleScroll);
