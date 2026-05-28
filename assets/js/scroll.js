document.addEventListener("scroll", function(){
    const header = document.querySelector(".menu-navigation");
    const hero = document.querySelector(".hero-bg");

    const metaHero = hero.offsetHeight / 2;

if(window.scrollY > metaHero) {
    header.classList.add("active");
} else {
    header.classList.remove("active");
}
});

