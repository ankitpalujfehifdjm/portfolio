const typing = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Tech Enthusiast",
    "UI Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
        
        if (charIndex > currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();/* ==========================
   SCROLL ANIMATION
========================== */

const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach(el => el.classList.add("hidden"));

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(el=>observer.observe(el));

/* ==========================
   SCROLL TO TOP
========================== */

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){
        scrollBtn.style.display="block";
    }else{
        scrollBtn.style.display="none";
    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});/* ==========================
   THEME TOGGLE
========================== */

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.textContent="☀️";
    }else{
        themeBtn.textContent="🌙";
    }

});/* ==========================
   MOBILE MENU
========================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});/* ==========================
   SKILL BAR ANIMATION
========================== */

const bars = document.querySelectorAll(".fill");

const barObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

        }

    });

});

bars.forEach(bar=>barObserver.observe(bar));/* ==========================
   CONTACT FORM
========================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});