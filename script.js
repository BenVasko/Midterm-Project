" use strict";
$(document).ready(() => {
    const hideItemPopups = () => {
        $(".product-popup").toggle();
    }

    const hideCart = () => {
        $(".slideOutCartParent").toggle();
    }

    hideItemPopups();
    hideCart();

    $("body").on("click", "a.cart", (e) => {
        $(".slideOutCartParent").slideToggle(1000);
    });
});