const header = document.querySelector('header');
const bigCircle = document.querySelector('.bigCircle');
const smallCircle = document.querySelector('.smallCircle');
const p_image = document.querySelector('.pro1');
const gallery = document.querySelector('.gallery');
const g_text = document.querySelector('.g_text');

// add event

window.addEventListener("scroll",()=>{
parallex(header,window.scrollY,0.7);
parallex(bigCircle,window.scrollY,0.6);
parallex(smallCircle,window.scrollY,0.8);
const sh =window.innerHeight/1.4;
const p = window.scrollY;
console.log(p);
console.log(sh);
if(p>sh){
    p_image.style.visibility = "hidden";
    p_image.style.transition = `all 1s ease`
    p_image.style.opacity = "0";
    if(p>sh+100){
        g_text.style.visibility = "visible";
        g_text.style.opacity = "1";
        gallery.style.transform = "translate(0,0)"
        gallery.style.visibility = "visible";
        gallery.style.opacity = "1";
        g_text.style.transform = "translate(-50%,-50%)";
        gallery.style.transition = `all 2s ease`
        g_text.style.transition = `all 2s ease`
    }
}
else{
    p_image.style.visibility = "visible";
     p_image.style.transition = `all 1s ease`
    p_image.style.opacity = "1";
    
        g_text.style.visibility = "hidden";
        g_text.style.opacity = "0";
        gallery.style.transform = "translate(0%,0%)"
        gallery.style.visibility = "hidden";
        gallery.style.opacity = "0";
        g_text.style.transform = "translate(-50%,0%)";
        gallery.style.transition = `all 2s ease`
        g_text.style.transition = `all 2s ease`
    
}
})
// funtion parallex effect

function parallex(e,d,s){
    if(e=="bigCircle"){
        e.style.transform = `translateY(-${d*s}px)`
    }
    else{
        e.style.transform= `translateY(${d*s}px)`
    }
}