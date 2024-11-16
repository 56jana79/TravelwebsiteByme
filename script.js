var menubtn = document.getElementById("menu-btn");
var navlinks= document.getElementById("nav-links");
var menubtnicon = menubtn.querySelector('i');

menubtn.addEventListener("click", (e)=>{
    navlinks.classList.toggle("open");
    
    var isopen = navlinks.classList.contains("open")
    menubtnicon.setAttribute("class",isopen ? "ri-close-line" :"ri-menu-line" )
})

navlinks.addEventListener("click",(e)=>{
    navlinks.classList.remove("open")
    menubtnicon.setAttribute("class","ri-menu-line")
})










var scrollrevealoption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};


ScrollReveal().reveal(".header-content", {
    ...scrollrevealoption,
    origin: "bottom", 
    delay:500,
    // This overrides the initial origin
});

ScrollReveal().reveal(".showcase-image", {
    ...scrollrevealoption,
    origin: "left", 
    delay:500,
    // This overrides the initial origin
});


ScrollReveal().reveal(".showcase-content", {
    ...scrollrevealoption,
    origin: "right", 
    delay:500,
    // This overrides the initial origin
});



ScrollReveal().reveal(".header-image img", {
    ...scrollrevealoption,
    origin: "right", // This overrides the initial origin
});


ScrollReveal().reveal(".header-image img", {
    ...scrollrevealoption,
    origin: "right", // This overrides the initial origin
});

ScrollReveal().reveal(".header-image img", {
    ...scrollrevealoption,
    delay: 500, // Adding a delay
});

// Removed invalid origin values. Keeping the origin valid.
ScrollReveal().reveal(".header-image img", {
    ...scrollrevealoption,
    origin: "top", // Changing to a valid origin direction
    delay: 500,
});

ScrollReveal().reveal(".header-image img", {
    ...scrollrevealoption,
    origin: "left", // Changing to a valid origin direction
    delay: 500,
});

ScrollReveal().reveal(".destination-card", {
    ...scrollrevealoption,
    interval: 500, // Keeping this as it is.
});
ScrollReveal().reveal(".banner-card", {
    ...scrollrevealoption,
    interval: 500, // Keeping this as it is.
});
ScrollReveal().reveal(".discover-card", {
    ...scrollrevealoption,
    interval: 500, // Keeping this as it is.
});

const swiper = new Swiper('.swiper', 
    { 
        slidesPerView: 4,
         spaceBetween: 30,
          loop: true,
          
    }
);