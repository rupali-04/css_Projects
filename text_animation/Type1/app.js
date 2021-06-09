const content = document.querySelector(".text");

const text = content.textContent;
const splittext = text.split("");
content.textContent = "";
console.log(splittext)

splittext.forEach(t => {
    content.innerHTML += "<span>" + `${t}` + "</span >";
})

const elements = document.querySelectorAll("span");

elements.forEach((e, i) => {
    e.style.animation = `pop 20s infinite linear ${i / 5 + 0.5}s`
})