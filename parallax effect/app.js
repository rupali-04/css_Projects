// bring the elements
const header = document.querySelector('header');
const bigCircle = document.querySelector('.bigC');
const smallCircle = document.querySelector('.smallC');
const p_image = document.querySelector('.prop1');
const gallery = document.querySelector('.gallery');
const g_text = document.querySelector('.g_text');
// create event lisnner on scroll
window.addEventListener('scroll',()=>{
parallax(header,window.scrollY,0.7);
parallax(bigCircle,window.scrollY,0.6);
parallax(smallCircle,window.scrollY,0.8);
const sh = window.innerHeight/1.4;
const p = window.scrollY;
if(p>sh){
    p_image.style.visibility = "hidden";
     p_image.style.opacity = "0";
      p_image.style.transition = `all 1s ease`;

      if(p>sh+50){
          g_text.style.visibility = "visible";
          g_text.style.opacity = "1";
          g_text.style.transition = `all 2s ease`;
          g_text.style.transform = "translate(-50%,-50%)";
          gallery.style.visibility = "visible";
          gallery.style.opacity = "1";
          gallery.style.transition = `all 2s ease`;
          gallery.style.transform = "translate(0%,0%)";
      }
}
else{
     p_image.style.visibility = "visible";
     p_image.style.opacity = "1";
      p_image.style.transition = `all 1s ease`;
      g_text.style.visibility = "hidden";
          g_text.style.opacity = "0";
          g_text.style.transition = `all 2s ease`;
          g_text.style.transform = "translate(-50%,0%)";
gallery.style.visibility = "hidden";
          gallery.style.opacity = "0";
          gallery.style.transition = `all 2s ease`;
          gallery.style.transform = "translate(0%,50px)";
        }
})
// parallax
function parallax(e,d,s){
    if(e==bigCircle){
        e.style.transform = `translateY(-${d*s}px)`
    }
    else{
        e.style.transform = `translateY(${d*s}px)`
    }
}