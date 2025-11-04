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
    })

const whatsOnSlide = new Swiper('.wo-slide', {
    loop : true,
    slidesPerView : 1,
    centeredSlides: true,
    spaceBetween:50,
    })