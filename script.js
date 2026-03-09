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


const cards = document.querySelectorAll('.faq-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Check if the card you clicked is already open
    const isOpen = card.classList.contains('active');

    // Close ALL cards first (Professional behavior)
    cards.forEach(c => c.classList.remove('active'));

    // If it wasn't open, open it now
    if (!isOpen) {
      card.classList.add('active');
    }
  });
});