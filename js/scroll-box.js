const prevButton = document.querySelector(".projects__prev-button");
const nextButton = document.querySelector(".projects__next-button");
const project = document.querySelector(".projects__list");

prevButton.addEventListener("click", () => {
  project.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

nextButton.addEventListener("click", () => {
  project.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});
