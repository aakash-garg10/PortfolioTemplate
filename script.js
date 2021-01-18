let scrollupbtn = document.querySelector('.scroll-up-btn')
// scroll navbar
window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar')
    navbar.classList.toggle('sticky', window.scrollY > 20)
    scrollupbtn.classList.toggle('show', window.scrollY > 400)
})

// scrollupbtn script
scrollupbtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
})

//  typing animation using typed.js from cdnjs.com
// we neeed a separate class for each element to animate
var typed = new Typed(".typing", {
    strings: ["Developer", "Student", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

var typed = new Typed(".typing-2", {
    strings: ["Student", "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

// toggle btn navbar script
// adding same event listener to multiple elements using foreach
let toggleBtn = document.querySelectorAll(".menu-btn");
let xBtn = document.querySelector(".menu-btn i");
let menu = document.querySelector(".menu");
toggleBtn.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.toggle('active')
        xBtn.classList.toggle('active')
    })
})