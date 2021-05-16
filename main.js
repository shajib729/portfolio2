// swiper slide add 

var swiper = new Swiper('#projects .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});



//   testimonial swiper

var swiper = new Swiper('.test.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 60,
    stretch: 1,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  },
  loop:true,
  pagination: {
    el: '.swiper-pagination',
  },
});


//   testimonial-logo swiper

var swiper = new Swiper('.test2.swiper-container', {
slidesPerView: 'auto',
spaceBetween: 10,
slidesPerGroup: 1,
loop: true,
loopFillGroupWithBlank: true,
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
});



window.addEventListener("scroll", () => {
document.querySelector("nav").classList.toggle("sticky", window.scrollY > 0);


let sections = document.querySelectorAll("section");
let lis = document.querySelectorAll("nav li a");
let currentId = "";

sections.forEach(section => {

sectionTop = section.offsetTop;
sectionHeight = section.clientHeight;

if (pageYOffset >= (sectionTop - sectionHeight/2)) {
  currentId = section.getAttribute("id")
}

})

lis.forEach(li => {
  li.classList.remove("active")
  if (li.classList.contains(currentId)) {
    li.classList.add('active');
  }
})
})



// toggle 

        let ul = document.querySelector("nav ul");
        let toggle=document.querySelector('label');
        
        toggle.addEventListener('click',function(){
            
          document.querySelector('label').classList.toggle("active");
          document.querySelector('nav ul').classList.toggle("active");
                
        });


        
        function myFunction(){
          document.querySelector(".preloader").style.display="none";
        }