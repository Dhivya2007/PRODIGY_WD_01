window.addEventListener("scroll", function () {

    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.backgroundColor = "black";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";

    } 
    else {

        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";

    }

});