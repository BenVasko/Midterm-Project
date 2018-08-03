" use strict";
$(document).ready(() => {

    $("#apparelcarousel").show();
        $("#musiccarousel").hide();
        $("#collectiblescarousel").hide();
        $("#ticketscarousel").hide();

//     const hideItemPopups = () => {
//         $(".product-popup").toggle();
//     }

//     const hideCart = () => {
//         $(".slideOutCartParent").toggle();
//     }
//     hideCart();




// Toggle Popups
// Vinyl
$("body").on("click", "#vinyl", (e) => {
    $("#hidePopupVinyl").toggle();
});
$(".product-popup-vinyl").click((e) => {
    $("#hidePopupVinyl").toggle();
});
// CD
$("body").on("click", "#CD", (e) => {
    $("#hidePopupCD").toggle();
});
$(".product-popup-cd").click((e) => {
    $("#hidePopupCD").toggle();
});
// burgundy shirt
$("body").on("click", "#burgundyShirt", (e) => {
    $("#hidePopupBurgundy").toggle();
});
$(".product-popup-burgundy").click((e) => {
    $("#hidePopupBurgundy").toggle();
});
// black shirt
$("body").on("click", "#blackShirt", (e) => {
    $("#hidePopupBlack").toggle();
});
$("#close").click((e) => {
    $("#hidePopupBlack").toggle();
});
// White Shirt
$("body").on("click", "#whiteShirt", (e) => {
    $("#hidePopupWhite").toggle();
});
$(".product-popup-white").click((e) => {
    $("#hidePopupWhite").toggle();
});
// Dad Hat
$("body").on("click", "#hat", (e) => {
    $("#hidePopupHat").toggle();
});
$(".product-popup-hat").click((e) => {
    $("#hidePopupHat").toggle();
});
// Poster #1
$("body").on("click", "#poster1", (e) => {
    $("#hidePopupP1").toggle();
});
$(".product-popup-p1").click((e) => {
    $("#hidePopupP1").toggle();
});
// Poster #2
$("body").on("click", "#poster2", (e) => {
    $("#hidePopupP2").toggle();
});
$(".product-popup-p2").click((e) => {
    $("#hidePopupP2").toggle();
});
// Poster #3
$("body").on("click", "#poster3", (e) => {
    $("#hidePopupP3").toggle();
});
$(".product-popup-p3").click((e) => {
    $("#hidePopupP3").toggle();
});
// Cymbal
$("body").on("click", "#cymbal", (e) => {
    $("#hidePopupCymbal").toggle();
});
$(".product-popup-cymbal").click((e) => {
    $("#hidePopupCymbal").toggle();
});
// Tix 1
$("body").on("click", "#tix1", (e) => {
    $("#hidePopupTix1").toggle();
});
$(".product-popup-tix1").click((e) => {
    $("#hidePopupTix1").toggle();
});
// Tix 2
$("body").on("click", "#tix2", (e) => {
    $("#hidePopupTix2").toggle();
});
$(".product-popup-tix2").click((e) => {
    $("#hidePopupTix2").toggle();
});
// End Toggle Popups
// Make Cart Popout
$("body").on("click", ".cart", (e) => {
    $("#hideCart").toggle();
});
$(".close").click((e) => {
    $("#hideCart").toggle();
});
// End Cart Popout

// Adrean: toggle button class and make carousel items match button

$(".button").click((e) => {
    $(".button").removeClass("carousel-active");
    $(".button").addClass("carousel-inactive");
    $( e.target ).removeClass("carousel-inactive").addClass("carousel-active");
    switch (e.target.id) {
        case "button-music":
        $("#apparelcarousel").hide();
        $("#musiccarousel").show();
        $("#collectiblescarousel").hide();
        $("#ticketscarousel").hide();
            break;
        case "button-apparel":
        $("#apparelcarousel").show();
        $("#musiccarousel").hide();
        $("#collectiblescarousel").hide();
        $("#ticketscarousel").hide();
            break;
        case "button-tickets":
        $("#apparelcarousel").hide();
        $("#musiccarousel").hide();
        $("#collectiblescarousel").hide();
        $("#ticketscarousel").show();
            break;
        case "button-collectibles":
        $("#apparelcarousel").hide();
        $("#musiccarousel").hide();
        $("#collectiblescarousel").show();
        $("#ticketscarousel").hide();
            break;
    }
  });

  

  
// John: add items to cart when clicked, item count over cart
$("body").on("click", ".popup-addToCart", (e) => {
    console.log($(".popup-price").text())
    console.log("hi")
});
});