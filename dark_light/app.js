const body = document.querySelector('body');

const check = document.querySelector('input');

check.addEventListener('click', () => {
    body.classList.toggle('dark');
})