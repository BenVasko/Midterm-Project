" use strict";

const hideItemPopups = () => {
    $(".product-popup").toggle();
}

// hideItemPopups();

$(".item-2").click((e) => {
    $("#hidePopup").toggle();
    console.log("hi");
});
$(".product-popup").click((e) => {
    $("#hidePopup").toggle();
    console.log("hi");
});
