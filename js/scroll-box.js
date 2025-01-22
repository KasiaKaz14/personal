const prevButton = document.querySelector(".projects__prev-button");
const nextButton = document.querySelector(".projects__next-button");
const projects = document.querySelectorAll(".projects__list-element");
let currentIndex = 0;

function updateScroll() {
  const currentProject = projects[currentIndex];
  currentProject.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateScroll();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < projects.length - 1) {
    currentIndex++;
    updateScroll();
  }
});
