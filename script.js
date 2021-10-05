const navUl = document.querySelector(".navbar-section");
const navLinks = document.querySelector(".navbar-section").getElementsByTagName("a");  //list of all anchor elements in the nav bar section
const hamburger = document.getElementById('hamburger-menu');
const closeBtn = document.getElementById('close-btn');

const show = () => {
  navUl.classList.add('show'); 
}

const close = () => {
  navUl.classList.remove('show');
}

//loops through the navLinks list and checks if any of the links are clicked and if so, closes the nav bar section
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', close);  
}


hamburger.addEventListener('click', show);
closeBtn.addEventListener('click', close);