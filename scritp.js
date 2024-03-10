let height = window.innerHeight;

let button = document.querySelector("button");
window.addEventListener("scroll", () => {
  let positionNow = window.pageYOffset;
  if (positionNow > height + 128) {
    button.style.visibility = "visible";
  } else {
    button.style.visibility = "hidden";
  }
});

const backToTop = () => {
  window.scrollTo({
    top: height,
    behavior: "smooth",
  });
};
