const mobile_nav_btn=document.querySelector(".mobile-navbar-button");
const nav_header=document.querySelector(".header");
mobile_nav_btn.addEventListener("click",()=>{
   nav_header.classList.toggle("active")
})