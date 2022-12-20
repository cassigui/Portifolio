
 const menuItems = document.querySelectorAll('.menu a[href^="#"]');
 
 menuItems.forEach(item => {
 	item.addEventListener('click', scrollToIdOnClick)
 })

 function scrollToIdOnClick (event) {
 	event.preventDefault();
 	const to = getScrollTopByhref(event.target) -103;
 	scrollToPosition(to) 
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