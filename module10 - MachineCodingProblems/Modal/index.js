const modalButton = document.querySelector(".button");
const closeButton = document.querySelector(".close");
const container = document.querySelector(".container");

modalButton.addEventListener("click", () => {
    container.classList.remove("hide");
});

closeButton.addEventListener("click", () => {
    container.classList.add("hide");
});