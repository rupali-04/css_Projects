const letter = document.querySelectorAll("#image path");

letter.forEach((l, i) => {

    l.style.strokeDasharray = `${l.getTotalLength()}`;
    l.style.strokeDashoffset = `${l.getTotalLength()}`;

    l.style.animation = `path 2s ease forwards ${i / 4 + 0.5}s`
})