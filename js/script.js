const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand')
}))

spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'rubberBand')
}))


const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const javascriptBar = document.querySelector('.bar-javascript')
const pythonBar = document.querySelector('.bar-python')

var t1 = new TimelineLite()
t1.fromTo(htmlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
.fromTo(cssBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
.fromTo(javascriptBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
.fromTo(pythonBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)

// const showRequiredCategory = event => {
//     const getId = event.getId
//     const links = document.querySelector('.work-category button')
//     for(i=0; i<links.clientHeight; i++) {
//         if(links[i].hasAttribute('class')) {
//             links[i].classList.remove('active')
//         }
//     }
//     event.classList.add('active')
//     const getCategory = document.querySelector(`.category-${getId}`)
//     const categories = document.querySelectorAll('div[class ^= "category-"]')
//     for(i=0; i<categories.clientHeight; i++) {
//         if(categories[i].hasAttribute('class')) {
//             categories[i].classList.remove('showCategory')
//             categories[i].classList.add('hideCategory')

// }