const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});
const moveSlideBtn=document.querySelector(".carousel-control-next");
setInterval(()=>{
  moveSlideBtn.click()  
},5000);