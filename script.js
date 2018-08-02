" use strict";

const hideItemPopups = () => {
    $(".product-popup").toggle();
}

hideItemPopups();

const blackShirt = () => {
    $("body").on("click", "#blackShirt", hideItemPopups())
}
