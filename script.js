const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');

if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

//REMOVE MENU 
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//GALLERY SWIPER
const gallerySwiper = new Swiper(".gallery-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

//FAQS 
const faqs = document.querySelectorAll('.faq');

faqs.forEach( faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

//Add blur to header
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader);

//SCROLL REVEAL
const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
    reset: true,
})

sr.reveal(`.home-desc`);
sr.reveal(`.about-desc, .services-desc, .footer-desc`, {origin:'bottom'});
sr.reveal(`.about-data`, {origin: 'left', duration: 1200,rotate: { x: 0, y: 80, z: 0 },opacity: 0});
sr.reveal(`.projects-data, .services-data, .success-data, .contact-data`, {interval : 300});
sr.reveal(`.clients-img, .contact-form_div`, {origin:'left'});
sr.reveal(`.contact-img`, {origin:'right'});

