function openNav() {
    document.getElementById("sidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "20%";
    document.body.style.backgroundColor = "var(--primary-lg)";
}
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "var(--primary)";
}
// For Hightlight slideshow..>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > 3) {slideIndex = 1}    
  if (n < 1) {slideIndex = 3}
  for (i = 0; i < 3; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// for scroll view <--\\-->
window.onscroll = function() {myFunction()};
var header = document.getElementById("sm");
var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if(window.pageYOffset > document.getElementById("toppicks").offsetTop - 10){
    chgSrc("to_n");    
  }
  if(window.pageYOffset > document.getElementById("politics").offsetTop - 10){
    chgSrc("po_n");    
  }
  if(window.pageYOffset > document.getElementById("international").offsetTop -10){
    chgSrc("in_n");
  }
  if(window.pageYOffset > document.getElementById("tech").offsetTop - 10){
    chgSrc("te_n");
  }
  if(window.pageYOffset > document.getElementById("achievement").offsetTop - 10){
    chgSrc("ac_n");
  }
  if(window.pageYOffset > document.getElementById("trending").offsetTop - 10){
    chgSrc("tr_n");
}
  if(window.pageYOffset > document.getElementById("comics").offsetTop - 10){
    chgSrc("co_n");
  }
}

function chgSrc(toPos){
    document.getElementById("to_n").classList.remove("active");
    document.getElementById("po_n").classList.remove("active");
    document.getElementById("in_n").classList.remove("active");
    document.getElementById("te_n").classList.remove("active");
    document.getElementById("ac_n").classList.remove("active");
    document.getElementById("tr_n").classList.remove("active");
    document.getElementById("co_n").classList.remove("active");
    document.getElementById(toPos).classList.add("active");
}
