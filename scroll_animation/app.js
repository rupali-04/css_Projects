

window.addEventListener('scroll',()=>{
const text = document.querySelector(".text");

const position = text.getBoundingClientRect().top;



const screenPosition = window.innerHeight;
if(screenPosition>position){
    text.classList.add('active');
}
else{
     text.classList.remove('active');
}
})