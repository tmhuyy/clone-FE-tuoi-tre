const nav = document.querySelector('#nav-bar');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');    
  }
}

window.addEventListener('scroll', fixedNav);