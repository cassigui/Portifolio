$(document).ready(function() {

     $('.nav a[href^="#"]').on('click', function(e) {
       e.preventDefault();
       var id = $(this).attr('href');
       var targetOffset = $(id).offset().top;
          
       $('html, body').animate({ 
         scrollTop: targetOffset - 100
       }, 20);
     });

     $(window).on('scroll', function() {
       var scrollPosition = $(this).scrollTop();
   
       $('.nav a').each(function() {
         var id = $(this).attr('href');
         var targetOffset = $(id).offset().top;
         var sectionHeight = $(id).outerHeight();
         
         if (scrollPosition >= targetOffset - sectionHeight / 3) {
           $('.nav a').removeClass('active');
           $(this).addClass('active');
         }
       });
     });
   });
   