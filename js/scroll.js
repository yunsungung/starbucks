const headerEl = document.querySelector("header");
const itemEls = headerEl.querySelectorAll(".item__name");
const subitemEls = headerEl.querySelectorAll(".sub-menu ul.menu li");

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 10){
        console.log("aa")
        headerEl.style.backgroundColor = "#f7f7f7";

        itemEls.forEach(function(itemEl){
            itemEl.style.color = "#333333";     
        })
        subitemEls.forEach(function(subEl,i){
            console.log(subEl.childNodes[i]);
            subEl.firstElementChild.style.color = "#333333";    
            subEl.classList.add("line"); 
        })
    }else{
        headerEl.style.backgroundColor = "transparent";

        itemEls.forEach(function(itemEl){
            itemEl.style.color = "#ffffff";     
        })
        subitemEls.forEach(function(subEl ,i){
            subEl.firstElementChild.style.color = "#ffffff";     
            subEl.classList.remove("line"); 
        })
    }
} , 300));