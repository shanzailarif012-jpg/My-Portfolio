// ==============================
// Typing Animation
// ==============================

const typingElement = document.getElementById("typing");

const words = [
  "Backend Developer",
  "AI Developer",
  "Python Programmer",
  "Problem Solver",
  "Debugging Expert"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  }

  let speed = deleting ? 50 : 100;

  if (!deleting && charIndex === currentWord.length + 1) {
    deleting = true;
    speed = 1500;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// ==============================
// Back To Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});

// ==============================
// Dark / Light Mode
// ==============================

const themeBtn = document.getElementById("themeToggle");

let dark = true;

themeBtn.addEventListener("click", () => {

  dark = !dark;

  if (dark) {

    document.body.style.background = "#0b1120";
    document.body.style.color = "#ffffff";

    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    
    document.querySelector('.btn-outline').style.color = "white"
    document.querySelector('.hero-text').style.color = "white"
    document.querySelector('#aboutme').style.color = "white"
    const headings = document.querySelectorAll('.skill-card h3')
    headings.forEach(heading => {
      heading.style.color = "white"
    });
    // document.querySelector('.project-card h3').style.color = "white"


  } else {

    document.body.style.background = "#f3f4f6";
    document.body.style.color = "#111827";

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    document.querySelector('.btn-outline').style.color = "black"
    document.querySelector('.hero-text').style.color = "black"
    document.querySelector('#aboutme').style.color = "black"
    const headings = document.querySelectorAll('.skill-card h3')
    headings.forEach(heading => {
      heading.style.color = "yellow"
    });
    // document.querySelector('.project-card h3').style.color = "yellow"
  }

});

// ==============================
// Custom Cursor
// ==============================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

// ==============================
// Scroll Reveal Animation
// ==============================

const revealItems = document.querySelectorAll(
  ".skill-card, .project-card, .timeline-item, .contact-grid div"
);

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{
threshold:0.2
}

);

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s";

observer.observe(item);

});

// ==============================
// Active Navbar Link
// ==============================

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if (scrollY >= sectionTop) {

current = section.getAttribute("id");

}

});

});

// ==============================
// Mobile Menu
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", function(){
  
    navLinks.classList.toggle("show");

    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");

});

// ==============================
// Smooth Hover Effect
// ==============================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});
// ==============================
// Welcome Message
// ==============================

window.addEventListener("load",()=>{

console.log("Welcome Muhammad Shanzail 🚀");

});