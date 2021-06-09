const emojis = document.querySelectorAll("#social .Vector")

emojis.forEach((e, i) => {
    e.style.animation = `pop 2s infinite linear ${i / 4 + 0.5}s`
})