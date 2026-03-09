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




const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        faqItems.forEach(i => i.classList.remove('active'));
        
        if (!isOpen) {
            item.classList.add('active');
        }
    });
});