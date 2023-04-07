gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


feedBackCards = gsap.utils.toArray('.userFeedbackCard')
feedBackCards.forEach((elem)=>{
    gsap.from(elem, {
        scrollTrigger:{
            trigger: elem,
            scrub: true,
            start: '20% 100%',
            end:'bottom center',
        },
        opacity: 0,
        duration: 3,
    })
})

gsap.to('.invite',{
    scrollTrigger:{
        trigger: '.invite',
        start: '0% 80%',
        end:'+=250px',
        scrub: 3,
    },
    x: 0,
    opacity: 1,
    
});

gsap.to('.catalog', {
    scrollTrigger:{
        trigger: '.catalog',
        start: '0% 80%',
        end: 'bottom 30%',
        toggleClass: {targets: ".catalog", className: "active"},
        toggleActions: 'restart none none reverse',
    },
    x: 0,
    duration: 1,  
})

gsap.from('.mainImage', {
    opacity: 0,
    duration: 1,
    translateX: '100px'
})

gsap.from('.buttons',{
    opacity: 0,
    translateY: 200,
    duration: 1,
})

elems = gsap.utils.toArray('.itemsOfmenu')

for (i = 0; i < elems.length; i++){
    gsap.from(elems[i], {
        translateY: '-50px',
        delay: i/10,
        opacity: 0,
        duration: 1
    })
}

gsap.from('.caption', {
    translateX: '-100px',
    duration: 1,
    opacity: 0,
})


xmenuBlock = document.querySelector('.x-menu');
xmenu = document.querySelector('.menuLine');
menubar = document.querySelector('.menu')


xmenuBlock.addEventListener('click', ()=>{
    xmenu.classList.toggle('active')
    menubar.classList.toggle('active')
})