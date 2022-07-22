import {checkFlexGap} from "./safari.js";

const header = document.querySelector('header')
const btnMenu = document.querySelector('.btn-menu')
const btnClose = document.querySelector('.btn-close')

checkFlexGap();

const toggleNav = () => header.classList.toggle('nav-open');

btnMenu.addEventListener('click', toggleNav)
btnClose.addEventListener('click', toggleNav)


// Display current year
const year = document.querySelector('.year')
const currentYear = new Date().getFullYear();
year.innerHTML = currentYear;

////////////////////////////////////
// Smooth scrolling
/////////////////////////////////////

const links = document.querySelectorAll('a:link')
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        const href = link.getAttribute('href')
        // go back to the top of page
        if (href === '#') window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

        if (href.startsWith('#')) {
            const sectionEl = document.querySelector(href)
            if (link.classList.contains('main-nav-item-link')) {
                toggleNav()
            }
            sectionEl.scrollIntoView({
                behavior: 'smooth',
            })
        }
    })
})

///////////////////////////////////
// Sticky menu

const hero = document.querySelector('.section-hero')
const obv = new IntersectionObserver((entries) => {
    const ent = entries[0]
    console.log(ent)

    if (!ent.isIntersecting) {
        document.body.classList.add('sticky')
    }

    if(ent.isIntersecting){
        document.body.classList.remove('sticky')
    }
}, {
    // in viewport
    root: null,
    threshold: 0,
    rootMargin:'-96px',
})
obv.observe(hero)