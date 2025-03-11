const search = document.querySelector(".search-img");
const searchText = document.querySelector(".search-text");
const login = document.querySelector(".header_right-autorize");
const burger = document.querySelector(".burger-menu")
const burgeropen = document.querySelector(".burger-menu_open")
const burgerclose = document.querySelector(".burger-menu_close")


function Search(){
    search.style.display = "none";
    searchText.style.display = "block";
    login.style.opacity = "0";
    login.style.display = "none"
}

function SearchOFF(){
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") { 
            location.reload()
        }
    })};
function BurgerClose(){
    burger.style.display = "none";
    burgeropen.style.display = "block"
    burgerclose.style.display = "none"

}
function BurgerOpen(){
    burger.style.display = "flex"
    burgerclose.style.display = "block"
    burgeropen.style.display = "none"
}

function changeLanguage(select) {
    const lang = select.value;
    const urls = {
        "RU": "index.html",
        "EN": "index_en.html",
        "KZ": "index_kz.html"
    };

    if (urls[lang]) {
        window.location.href = urls[lang];
    }
}