window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const carousel = document.querySelector("[data-carousel]");

  const li1 = document.querySelectorAll("#li1");
  const li2 = document.querySelectorAll("#li2");
  li1.forEach((li1) => {
    if (window.pageYOffset > 0) {
      header.classList.add("scroll");
      carousel.classList.add("scroll");
      if (window.pageYOffset > 99) {
        li1.classList.remove("active");
      }
    } else {
      header.classList.remove("scroll");
      carousel.classList.remove("scroll");
      li1.classList.add("active");
    }
  });

  li2.forEach((li2) => {
    if (window.pageYOffset > 0) {
      header.classList.add("scroll");
      carousel.classList.add("scroll");
      if (window.pageYOffset > 99) {
        li2.classList.add("active");
      }
    } else {
      header.classList.remove("scroll");
      carousel.classList.remove("scroll");
      li2.classList.remove("active");
    }
  });
});

function scrollToModes() {
  const element = document.getElementById("modes");
  element.scrollIntoView();
}

function scrollToHome() {
  window.scrollTo(0, 0);
}
