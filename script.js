// code for showing and hiding navbar
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".nav-bar");
var links=document.querySelector(".nav-bar li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// code implementing typing text effect
var typed=new Typed(".input",{
    strings:["Software Devloper", "Manchester Metropolitan Student", "Retail Associate"],
    typeSpeed:70,
    backSpeed:55,
    loop:true
})

// Intersection Observer to animate elements when they scroll into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); // Optional: Remove to re-trigger animation
        }
    });
}, { threshold: 0.1 }); // Adjust threshold as needed

// Select all elements with the 'hidden' class and observe them
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
