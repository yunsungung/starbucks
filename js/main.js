
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 800){
      //  badgeEl.style.display = 'none';
      // gsap.to(요소 , 지속시간 , 옵션)
      gsap.to(badgeEl , .6, {
        opacity : 0,
        display : 'none'
      });
      gsap.to('#to-top', .2 , {
        x: 0
      }) ; 
    }else{
      //  badgeEl.style.display = 'block';
      gsap.to(badgeEl , .6, {
        opacity : 1,
        display : 'block'
      });  
      gsap.to('#to-top', .2 , {
        x: 100
      }) ; 
    }
} , 300));





const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click' , function(){
    gsap.to(window , .7 , {
        scrollTo : 0
    })
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){    
    gsap.to(fadeEl, 1, {
        opacity : 1,
        delay : (index + 1) * .7
    });
});

new Swiper('.notice-line .swiper-container' , {
    direction : 'vertical',
    autoplay : true,
    loop : true,
});

new Swiper('.bread-menu .swiper-container' , {
	autoplay : {
		delay : 2500
	},
    loop : true,
});



new Swiper('.visuals .swiper-container' , {
	slidesPerView: 1, /* Set me! */  
	loop : true,
	autoplay : {
		delay : 4500
	},
    pagination : {
        el : '.visuals .swiper-pagination',
        clickable : true,
    },
});



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector , delay , size){
    gsap.to(
        selector, 
        random(1.5 , 2.5), 
        {
            y: size,
            repeat : -1,
            yoyo : true,
            ease: Power1.easeInOut,
            delay : random(0, delay),
        }
    );
}

floatingObject('.floating1' , 1 , 15);
floatingObject('.floating2' , .5 , 15);
floatingObject('.floating3' , 1.5 , 20);
floatingObject('.title__first' , .5 , 20);
floatingObject('.title__last' , 1 , 30);
floatingObject('.arrowDown' , 1 , 30);


const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
});



var btnMenu = document.querySelector(".btnMenu");
var btnClose = document.querySelector(".btnClose");
var menu = document.querySelector(".viewMenu");

btnMenu.addEventListener("click", function (e) {
  e = e || window.event;
  e.preventDefault();
  btnMenu.style.animation = "openMenu .7s";
  setTimeout(() => {
	menu.style.display = "flex";
	setTimeout(() => {
	  btnMenu.style.animation = "";
	}, 300);
  }, 400);
});

btnClose.addEventListener("click", function (e) {
  e = e || window.event;
  e.preventDefault();
  menu.style.display = "none";
  btnMenu.style.animation = "openMenu .7s reverse";
  setTimeout(() => {
	btnMenu.style.animation = "";
  }, 700);
});