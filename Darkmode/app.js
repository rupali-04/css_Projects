const check = document.querySelector('input');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const h = document.querySelector('header');
const b = document.querySelector('.btn');

console.log(check);
check.addEventListener('click',()=>{
    body.classList.toggle('dark');
    footer.classList.toggle('dark');
    h.classList.toggle('dark');
    b.classList.toggle('dark');
})