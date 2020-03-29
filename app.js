 const burger = document.querySelector('.hamburger');
 const nav = document.querySelector('.nav-links');
 const navLink = document.querySelector('.nav-links li')

 //toggle nav
 burger.addEventListener('click', () => {
     nav.classList.toggle('nav-active');
     burger.classList.toggle('is-active');
 });
 navLink.forEach((link, index) => {
     nav.classList.toggle('nav-active');
     navLink.forEach((link, index) => {
         if (link.style.animation) {
             link.style.animation = '';
         } else {
             link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2}s'
         }
     });
 });

