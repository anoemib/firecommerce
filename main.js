//console.log("hello world");
document.querySelector('.menu-btn').addEventListener('click', () =>{
  document.querySelector('.nav-menu').classList.toggle('show');
});


ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});


document.querySelector('.prueba1').addEventListener('click', () =>{
//console.log("prueba");//
window.scroll({
  top: 1000,
  left: 100,
  behavior: 'smooth'
});

});

function showcase2(){
  var showCase = document.getElementsByClassName("showcase")
  var showCase2 = document.getElementsByClassName("showcase2");
   var dots = document.getElementsByClassName("dot");

  showCase2[0].style.display = "flex";
  showCase[0].style.display = "none";

}


function showcase(){
  var showCase = document.getElementsByClassName("showcase")
  var showCase2 = document.getElementsByClassName("showcase2");
   var dots = document.getElementsByClassName("dot");

  showCase2[0].style.display = "none";
  showCase[0].style.display = "flex";


}
