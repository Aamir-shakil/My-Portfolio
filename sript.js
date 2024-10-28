/** code for showing and hiding navbar**/
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".nav-bar");
var links=document.querySelector(".nav-bar li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
});