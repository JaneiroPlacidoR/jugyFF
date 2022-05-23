$(document).ready(function () {

  
  /*hamburger animation*/
  const hambuergerMenu = document.querySelector(".hamburger");
  const btnClose = document.querySelector(".btn-close"); 
  const tosearch = document.querySelector(".tosearchbtn"); 

  
  const menuActivate = () => {
      hambuergerMenu.classList.toggle('active');
  }

  hambuergerMenu.addEventListener('click', menuActivate);
  btnClose.addEventListener('click',menuActivate);
  tosearch.addEventListener('click',menuActivate);

});
