const btn = document.querySelector(".btn-1");
const cut = document.querySelector(".btn");
const popup = document.querySelector(".container");

btn.addEventListener("click", () => {
    popup.classList.toggle("active");
})

cut.addEventListener("click", () => {
    popup.classList.toggle("active");
})