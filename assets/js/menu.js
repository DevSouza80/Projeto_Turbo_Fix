const listMenu = document.getElementById("list-mobile");
const menuMobile = document.getElementById("menu-mobile");
const closeBtn = document.getElementById("close-btn");

listMenu.addEventListener("click", function(){
    menuMobile.classList.add("show-menu");
});

closeBtn.addEventListener("click", function(){
    menuMobile.classList.remove("show-menu");
});
