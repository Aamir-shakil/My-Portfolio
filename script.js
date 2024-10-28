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