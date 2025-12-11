/* header mouseover시 color => red 변환 */
/* header > gnb > lnb > li mouseover시 list 출력*/
const gnbAction = document.querySelectorAll('.top #gnb > li')
const lnbVisible = document.querySelectorAll('.gnb-list .lnb-list')

for(let i of gnbAction){
    console.log(i)
    i.addEventListener('mouseover', () => {
        i.children[0].style.color = "#FA0A00"
        i.children[0].style.transition = "color 0.2s"
        lnbVisible[0].style.display = "visible"
        i.addEventListener("mouseout", () => {
            i.children[0].style.color = "#222222"
            i.children[0].style.transition = "color 0.2s"
            lnbVisible[0].style.display = "none"
        })
    })
}

/* BEST 카테고리 클릭 시, SWIPER 전환 */

const bestCate = document.querySelectorAll('.best_contents > .category');
const bestCateItem = document.querySelectorAll(".best_contents > .category > a "); // 모든 카테고리 li 요소
const bestSwiperList = document.querySelectorAll('.best_product > .best_contents > .swiper'); // 모든 Swiper 그룹 div 요소

const bestCateArray = Array.from(bestCateItem);
const bestSwiperArray = Array.from(bestSwiperList);

console.log(bestCateArray)
console.log(bestSwiperArray)

bestSwiperList.forEach(swiper => {
    swiper.style.display = "none";
});

// 첫 번째 카테고리(인덱스 0) 활성화 및 해당 스와이퍼 보이기
if (bestCateItem.length > 0) {
    bestCateItem[0].children[0].classList.add('active'); // 탭 활성화 스타일 적용
}
if (bestSwiperList.length > 0) {
    bestSwiperList[0].style.display = "flex"; // 첫 번째 콘텐츠 보이기
}

// ----------------------------------------------------
// 3. 모든 카테고리 아이템에 이벤트 리스너 추가
// ----------------------------------------------------

// NodeList인 bestCateItem에 forEach를 사용합니다.
bestCateItem.forEach((clickedElement, clickedIndex) => {
    
    // clickedElement: 현재 순회 중인 <a> 요소 (각 카테고리 버튼)
    // clickedIndex: 현재 순회 중인 <a> 요소의 인덱스 (0, 1, 2, ...)

    clickedElement.addEventListener('click', (event) => {
        event.preventDefault();

        // 🎯 1. 조기 종료 (이미 활성화된 탭을 다시 클릭하면 아무것도 안 함)
        if (clickedElement.children[0].classList.contains('active')) {
            return; 
        }

        // ------------------------------------------------
        // 🎯 2. 인덱스 기반 스타일 리셋 및 적용
        // ------------------------------------------------

        // A. 모든 카테고리 버튼의 'active' 클래스 제거 (스타일 리셋)
        bestCateItem.forEach(item => {
            item.children[0].classList.remove('active');
        });
        
        // B. 클릭된 카테고리 버튼에 'active' 클래스 추가
        clickedElement.children[0]. classList.add('active');

        // ------------------------------------------------
        // 🎯 3. 인덱스 기반 콘텐츠 토글 (핵심 로직)
        // ------------------------------------------------

        // A. 모든 스와이퍼 리스트 숨기기
        bestSwiperList.forEach(swiper => {
            swiper.style.display = "none";
        });
        
        // B. 클릭된 인덱스에 **정확히 매칭되는** 스와이퍼 리스트만 보이기
        // bestSwiperList[clickedIndex]를 사용하여 인덱스 매칭
        if (bestSwiperList[clickedIndex]) {
            bestSwiperList[clickedIndex].style.display = "flex";
        }
    });
});

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