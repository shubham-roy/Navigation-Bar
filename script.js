// Hamburger Icon 
function changeIcon(x) {
    var value = x.classList.toggle("change");
    if (value === true) {
        document.querySelector(".hamburger").style.alignSelf = "center";
        document.querySelector(".nav").style.display = "flex";
        document.querySelector(".nav").style.flexDirection = "column";
    } else {
        document.querySelector(".hamburger").style.alignSelf = "flex-start";
        document.querySelector(".nav").style.display = "none";
    }
}
// **************