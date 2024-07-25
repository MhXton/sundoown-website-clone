document.addEventListener("DOMContentLoaded", function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
});



// var a = document.querySelector("#box-effect-1");
// var image = a.getAttribute("data-image");
// console.log(image);


var hoverContainer = document.querySelector("#hover-container");
var fixed = document.querySelector("#fixed-image");

hoverContainer.addEventListener("mouseenter", function() {
    fixed.style.display = "block";
});

hoverContainer.addEventListener("mouseleave", function() {
    fixed.style.display = "none";
});

var effects = document.querySelectorAll(".box-effect"); // Select all elements with the class 'box-effect'
effects.forEach(function(hover) {
    hover.addEventListener("mouseenter", function() {
        var image = hover.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`; // Corrected 'backgroundImage'
    });
});
// var effect = document.querySelector("#box-effect-1"); // Added dot for class selector
// effect.addEventListener("mouseenter", function() {
//     var image = effect.getAttribute("data-image");
//     fixed.style.backgroundImage = `url(${image})`; // Corrected to use backticks for template literals
// });
