const lang = document.querySelectorAll('.block-lang')


lang.forEach(item => {
    item.addEventListener('click', event => {
        item.querySelector('.block-lang__dropdown').classList.toggle('_active')
        item.querySelector('.block-lang__icon').classList.toggle('_active')

        if (event.target.classList.contains('block-lang__item')) {
            item.querySelector('.block-lang__current').textContent = event.target.textContent
        }
    })
})


/* Swiper */
// const swiper = new Swiper('.slider-about', {
//     // Optional parameters
//     loop: true,
//     slidesPerView: 1,
//     grabCursor: true,
//     breakpoints: {

//         320: {
//             slidesPerView: 1,
//             spaceBetween: 20,

//         }
//     },

//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });
window.addEventListener("load", function () {
    const swiper = new Swiper(".slider-about", {
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-prev',
        },
        effect: 'creative',
        slidesPerView: 1,
        centerInsufficientSlides: true,
        initialSlide: 1,
        loopAdditionalSlides: 3,
        creativeEffect: {
            prev: {
                shadow: false,
                translate: [26, 50, -200],
                origin: "right center",
            },
            next: {
                translate: [13, 20, -400],
                origin: "right center",
            },
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
    });
});
/* Accordeon */
const accordeon = document.querySelectorAll('.accordeon__header')
accordeon.forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling
        let icon = el.firstElementChild
        if (content.style.maxHeight) {
            document.querySelectorAll('.accordeon__content').forEach((el) => el.style.maxHeight = null)
            document.querySelectorAll('.accordeon__icon').forEach((el) => {
                el.classList.remove('_active')
            })

        }
        else {
            document.querySelectorAll('.accordeon__content').forEach((el) => el.style.maxHeight = null)
            document.querySelectorAll('.accordeon__icon').forEach((el) => {
                el.classList.remove('_active')
            })
            content.style.maxHeight = content.scrollHeight + 'px'
            icon.classList.toggle('_active')
        };
    })
})


/* Burger */
const burger = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu');
const body = document.body;
burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
})
menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('_active');
        menu.classList.remove('_active');
        body.classList.remove('_lock');
    })
})
menu.addEventListener('click', e => {
    if (e.target.classList.contains('menu')) {
        burger.classList.remove('_active');
        menu.classList.remove('_active');
        body.classList.remove('_lock');
    }
})
/* Anchors */
const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start',
        })
    })
})