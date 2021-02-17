const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-list')
const navLis = document.querySelectorAll('.nav-list li')

burger.addEventListener('click', () => {
    burger.classList.toggle('cross')
    navLinks.classList.toggle('nav-active')
    navLis.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .3}s`
        }
    })
})
    
const showBorders = () => {
    let x = document.querySelectorAll('*');
    x.forEach(element => {
        element.classList.toggle('shown-borders')
    })
};
