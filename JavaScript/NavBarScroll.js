
window.addEventListener("scroll", () => {
  let header = document.querySelector("#header")
  let startSection = document.querySelector("#inicio").offsetTop

  header.classList.toggle('scrolling', window.scrollY > startSection + 600)
})

