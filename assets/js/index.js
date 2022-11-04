const menuHeader = document.querySelector("button.header__menu");
const sideBar = document.querySelector("nav.side-bar"); 

menuHeader.addEventListener('click',(event) =>{
    event.preventDefault(); 
    sideBar.classList.toggle('side-bar--active');
});