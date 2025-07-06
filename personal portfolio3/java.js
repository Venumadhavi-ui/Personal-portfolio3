


const menuIcon = document.querySelector(".ri-close-fill");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("open");
});


document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault(); 
  alert("Resume download coming soon!"); 
  
});


const typingText = "Frontend Developer";
let i = 0;
const h2 = document.querySelector("h2");
h2.textContent = "";

function typeWriter() {
  if (i < typingText.length) {
    h2.textContent += typingText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.addEventListener("load", typeWriter);
