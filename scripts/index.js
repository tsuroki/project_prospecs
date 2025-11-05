/* header mouseover시 color => red 변환 */
const gnbAction = document.querySelectorAll('.top #gnb li')

for(let i of gnbAction){
    console.log(i)
    i.addEventListener('mouseover', () => {
        i.children[0].style.color = "#FA0A00"
        i.children[0].style.transition = "color 0.2s"
        i.addEventListener("mouseout", () => {
            i.children[0].style.color = "#222222"
            i.children[0].style.transition = "color 0.2s"
        })
    })
}

/* clothes mouseover시 scale 변환 */
/* 변수 선언 */
const clothesAction1 = document.querySelector('.always_red_man')
console.log(clothesAction1)
const clothesAction2 = document.querySelector('.always_red_woman')
console.log(clothesAction2)

/* man */
clothesAction1.addEventListener('mouseover', () => {
    const ci = clothesAction1
    ci.style.scale = 1.15
    ci.style.transition = 'scale 0.2s'
    ci.style.transformOrigin = 'bottom center'
    ci.addEventListener('mouseout', () => {
        ci.style.scale = 1
        ci.style.transition = 'scale 0.2s'
    })
})
/* woman */
clothesAction2.addEventListener('mouseover', () => {
    const cw = clothesAction2
    cw.style.scale = 1.15
    cw.style.transition = 'scale 0.2s'
    cw.style.transformOrigin = 'bottom center'
    cw.addEventListener('mouseout', () => {
        cw.style.scale = 1
        cw.style.transition = 'scale 0.2s'
    })
})

/* swiper */

const bnrSlide = new Swiper ('#main_wrap #topbnr', {
    loop : true,
    autoplay :  {delay : 6000},
    pagination:{
        el:'.bnr-nav',
        clickable:true,
    },
    })

const bestSlide = new Swiper('.best_list', {
    slidesPerView : 3.8,
    spaceBetween : 50,
    })

const newSlide = new Swiper('.new_list', {
    slidesPerView : 3.8,
    spaceBetween : 50,
    })

const fwSlide = new Swiper('.fw_season_list ', {
    slidesPerView : 1,
    spaceBetween : 50,
    pagination:{
        el:'.fw-nav',
        clickable:true,
    },
    navigation:{
        prevEl: '.fw-btn > .fw-prev',
        nextEl: '.fw-btn > .fw-next',
    },
    })

const whatsOnSlide = new Swiper('.wo-slide', {
    loop : true,
    slidesPerView : 1,
    centeredSlides: true,
    spaceBetween:50,
    })