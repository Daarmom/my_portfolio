function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector("hambuger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


/* document.addEventListener("DOMContentLoaded", function() {
  const aboutMeLink = document.querySelector('a[href="#about"]');
  const aboutMeSection = document.getElementById('about');

  const contactLink = document.querySelector('a[href="#contact"]');
  const contactSection = document.getElementById('contact');

  const projectLink = document.querySelector('a[href="#work"]');
  const projectSection = document.getElementById('work');

  aboutMeLink.addEventListener('click', function(event) {
      event.preventDefault();
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
  });

  contactLink.addEventListener('click', function(event){
    event.preventDefault();
    contactSection.scrollIntoView({behavior: "smooth"});
  });

  projectLink.addEventListener('click', function(event){
    event.preventDefault();
    projectSection.scrollIntoView({behavior: "smooth"});
  });
});*/
