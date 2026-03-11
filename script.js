const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links li");

window.addEventListener("scroll", () => {

  if(window.scrollY > 80){
    navbar.classList.add("scrolled");
  } else{
    navbar.classList.remove("scrolled");
  }

  let current = "";

  sections.forEach(section=>{
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if(scrollY >= sectionTop){
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(li=>{
    li.classList.remove("active");

    if(li.querySelector("a").getAttribute("href") === "#" + current){
      li.classList.add("active");
    }
  });

});

const triggers = document.querySelectorAll('.faq-trigger');

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const parent = trigger.parentElement;
    const isActive = parent.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    if (!isActive) {
      parent.classList.add('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {

const burger = document.querySelector(".burger");
const closeBtn = document.querySelector(".close");
const nav = document.querySelector(".nav-container");

if (burger && closeBtn && nav) {

burger.addEventListener("click", () => {
  nav.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("open");
});

}

});