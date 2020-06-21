$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    // margin:3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag: false,
    // nav:true
  });

 });
// $(document).ready(function () {
   
  
  
  
//     $(".ulvi").waypoint(function(direction){
//         $(".ulvi").addClass("animated fadeInUp")
//     },{
//         offset:"50%"
//     })
    
    
    
//     },2000);

const NavSlider= () => {
    const icon= document.querySelector(".icon");
    const nav= document.querySelector(".nav-link");
     const navLinks=document.querySelectorAll(".nav-link li")
    
       icon.addEventListener("click", () => {
                nav.classList.toggle("nav-active");
                 navLinks.forEach((link,index)=>{
                    link.style.animation= "ulvi 0.5s ease forwards 2.5s ";
                })
                
        });
    
    }
NavSlider();
    
