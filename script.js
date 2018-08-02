" use strict";
$(document).ready(() => {
    const hideItemPopups = () => {
        $(".product-popup").toggle();
    }

    const hideCart = () => {
        $(".slideOutCartParent").toggle();
    }



    hideCart();


// hideItemPopups();

// Vinyl
$("To be Determined").click((e) => {
    $("#hidePopupVinyl").toggle();
});
$(".product-popup-vinyl").click((e) => {
    $("#hidePopupVinyl").toggle();
});
// CD
$("To be Determined").click((e) => {
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
$(".product-popup-black").click((e) => {
    $("#hidePopupBlack").toggle();
});
// White Shirt
$("To be Determined").click((e) => {
    $("#hidePopupWhite").toggle();
});
$(".product-popup-white").click((e) => {
    $("#hidePopupWhite").toggle();
});
// Dad Hat
$("To be Determined").click((e) => {
    $("#hidePopupHat").toggle();
});
$(".product-popup-hat").click((e) => {
    $("#hidePopupHat").toggle();
});
// Poster #1
$("To be Determined").click((e) => {
    $("#hidePopupP1").toggle();
});
$(".product-popup-p1").click((e) => {
    $("#hidePopupP1").toggle();
});
// Poster #2
$("To be Determined").click((e) => {
    $("#hidePopupP2").toggle();
});
$(".product-popup-p1").click((e) => {
    $("#hidePopupP2").toggle();
});


    $("body").on("click", "a.cart", (e) => {
        $(".slideOutCartParent").slideToggle(1000);
    });
});