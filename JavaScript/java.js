
 const menuItems = document.querySelectorAll('.menu a[href^="#"]');
 
 menuItems.forEach(item => {
 	item.addEventListener('click', scrollToIdOnClick)
 })

 function scrollToIdOnClick (event) {
 	event.preventDefault();
 	const to = getScrollTopByhref(event.target);
 	scrollToPosition(to * 4 / 4);  
 }

 function scrollToPosition(to) {
      window.scroll({
      top: to,
      behavior : "smooth"  
 	})
 }

  function getScrollTopByhref (element) {
   const id = element.getAttribute('href')
   return document.querySelector(id).offsetTop
}

/*ANIMAÇÃO*/

 const debounce = function (funcao, esperar, realizar) {
     let timeout;
      return function (...args) {
          const context = this;
          const later = function() {
               timeout = null;
               if (!realizar) funcao.apply (context, args);
          }
          const callNow = realizar && !timeout;
          clearTimeout(timeout)
          timeout = setTimeout(later, esperar)
          if (callNow) funcao.apply (context, args);
      }
     }
     

const target = document.querySelectorAll("[data-anime]");
const animationClass = 'animate'

function animeScroll () {
     const windowTop = window.pageYOffset + window.innerHeight ;
     target.forEach(function(element) {
          if((windowTop) > element.offsetTop) {
               element.classList.add(animationClass)
          } else {
               element.classList.remove(animationClass)
          }
     })

}

 animeScroll ()

if(target.length) {
window.addEventListener('scroll', debounce(function() {
     animeScroll();
}, 200))
}
