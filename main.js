const btn =
document.querySelector(".myBtn")
const searchBox =
document.querySelector(".fullScreen")
const closeBtn = 
document.querySelector(".closeBtn")
  
  
closeBtn.addEventListener("click", ()=>{
    searchBox.style.display = "none"
})
  
btn.addEventListener('click', ()=>{
    searchBox.style.display = "block"
})

//  hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))