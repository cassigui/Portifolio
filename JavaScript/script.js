const scrollDark = `
.scroll::-webkit-scrollbar {
  width: 4px;
  background:rgb(33, 37, 41);
}

.scroll::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 4px;
  transition: background-color 2s ease;
}
`
const scrollBlack = `
.scroll::-webkit-scrollbar {
  width: 4px;
  background:black;
  transition: background-color 2s ease;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 4px;
  transition: background-color 2s ease;
}
`

function modificarScrollbar(estilo) {
  const scrollbarStyle = document.getElementById('scrollbar-style')
  scrollbarStyle.innerHTML = estilo
}

document.addEventListener("DOMContentLoaded", function () {
  const url = window.location.hash
   console.log(url)
  const id = url.substring(1)
   

  if (id == "habilidades") {
    modificarScrollbar(scrollDark)
  } else {
    modificarScrollbar(scrollBlack)
  }

});


$(document).ready(function () {
  var currentSection = null

  function setActiveNav() {
    var scrollPosition = $(window).scrollTop()

    $('section').each(function () {
      var sectionTop = $(this).offset().top - 400
      var sectionBottom = sectionTop + $(this).outerHeight()
      var id = $(this).attr('id'); document.addEventListener("DOMContentLoaded", function () {
      })

      var navLink = $('.navbar-nav').find('a[href="#' + id + '"]')

      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        if (!navLink.hasClass('active')) {
          navLink.addClass('active')
          if (currentSection !== id) {
            currentSection = id
            updateURLWithSectionId(id)
          }
        }
      } else {
        navLink.removeClass('active')
      }
    });
  }

  function updateURLWithSectionId(sectionId) {
    var currentURL = window.location.href
    var newURL = currentURL.split('#')[0] + '#' + sectionId

    if (sectionId == "habilidades") {
      modificarScrollbar(scrollDark)
    } else {
      modificarScrollbar(scrollBlack)
    }
    history.pushState({}, document.title, newURL)
  }

  $(window).on('scroll', function () {
    setActiveNav()
  })

  var scrollPosition = $(window).scrollTop()

  $('section').each(function () {
    var sectionTop = $(this).offset().top
    var sectionBottom = sectionTop + $(this).outerHeight()

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      currentSection = $(this).attr('id')
      var currentNavLink = $('.navbar-nav').find('a[href="#' + currentSection + '"]')
      currentNavLink.addClass('active')
    }
  });
});
