" use strict";
$(document).ready(() => {

    $("#apparelcarousel").show();
    $("#musiccarousel").hide();
    $("#collectiblescarousel").hide();
    $("#ticketscarousel").hide();

    // $(".added").hide();

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
    $("#closeVinyl").click((e) => {
        $("#hidePopupVinyl").toggle();
    });
    // CD
    $("body").on("click", "#CD", (e) => {
        $("#hidePopupCD").toggle();
    });
    $("#closeCD").click((e) => {
        $("#hidePopupCD").toggle();
    });
    // burgundy shirt
    $("body").on("click", "#burgundyShirt", (e) => {
        $("#hidePopupBurgundy").toggle();
    });
    $("#closeBur").click((e) => {
        $("#hidePopupBurgundy").toggle();
    });
    // black shirt
    $("body").on("click", "#blackShirt", (e) => {
        $("#hidePopupBlack").toggle();
    });
    $("#closeBlk").click((e) => {
        $("#hidePopupBlack").toggle();
    });
    // White Shirt
    $("body").on("click", "#whiteShirt", (e) => {
        $("#hidePopupWhite").toggle();
    });
    $("#closeWhite").click((e) => {
        $("#hidePopupWhite").toggle();
    });
    // Dad Hat
    $("body").on("click", "#hat", (e) => {
        $("#hidePopupHat").toggle();
    });
    $("#closeHat").click((e) => {
        $("#hidePopupHat").toggle();
    });
    // Poster #1
    $("body").on("click", "#poster1", (e) => {
        $("#hidePopupP1").toggle();
    });
    $("#closeP1").click((e) => {
        $("#hidePopupP1").toggle();
    });
    // Poster #2
    $("body").on("click", "#poster2", (e) => {
        $("#hidePopupP2").toggle();
    });
    $("#closeP2").click((e) => {
        $("#hidePopupP2").toggle();
    });
    // Poster #3
    $("body").on("click", "#poster3", (e) => {
        $("#hidePopupP3").toggle();
    });
    $("#closeP3").click((e) => {
        $("#hidePopupP3").toggle();
    });
    // Cymbal
    $("body").on("click", "#cymbal", (e) => {
        $("#hidePopupCymbal").toggle();
    });
    $("#closeCymbal").click((e) => {
        $("#hidePopupCymbal").toggle();
    });
    // Tix 1
    $("body").on("click", "#julyShow", (e) => {
        $("#hidePopupTix1").toggle();
    });
    $("#closeTix1").click((e) => {
        $("#hidePopupTix1").toggle();
    });
    // Tix 2
    $("body").on("click", "#augShow", (e) => {
        $("#hidePopupTix2").toggle();
    });
    $("#closeTix2").click((e) => {
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
        $(e.target).removeClass("carousel-inactive").addClass("carousel-active");
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
    // Add Items to Cart

    // Add Vinyl
    $("body").on("click", "#vinylRecord", (e) => {
        $(".itemContainer").append(`<section class="items">
        <section class="itemName">${$(".nameVinyl").text()}</section>
        <section class="itemQuantity">
            <button type="button">
                <i class="material-icons">remove</i>
            </button>
            <input type="text" value="${$(".vinylQty").val()}">
                <button type="button">
                    <i class="material-icons">add</i>
                </button>
</section>
            <section class="itemPrice"> @${($("#vinylPrice").text())} each</section>
            <button type="button">
                <i class="material-icons">clear</i>
            </button>
        </section>
    </section>`)
        $("#hidePopupVinyl").hide();
        $(".hideAdded").toggle();
    });
    // End Add Vinyl
    // Add CD
    $("body").on("click", "#compactDisc", (e) => {
        $(".itemContainer").append(`<section class="items">
        <section class="itemName">${$(".nameCD").text()}</section>
        <section class="itemQuantity">
            <button type="button">
                <i class="material-icons">remove</i>
            </button>
            <input type="text" value="${$(".cdQty").val()}">
                <button type="button">
                    <i class="material-icons">add</i>
                </button>
</section>
            <section class="itemPrice"> @${($("#cdPrice").text())} each</section>
            <button type="button">
                <i class="material-icons">clear</i>
            </button>
        </section>
    </section>`)
        $("#hidePopupCD").hide();
        $(".hideAdded").toggle();
    });
    // End Add CD
    // Add Burgundy Shirt
    $("body").on("click", "#burShirt", (e) => {
        $(".itemContainer").append(`<section class="items">
        <section class="itemName">${$(".nameBurShirt").text()}</section>
        <section class="itemQuantity">
            <button type="button">
                <i class="material-icons">remove</i>
            </button>
            <input type="text" value="${$(".burShirtQty").val()}">
                <button type="button">
                    <i class="material-icons">add</i>
                </button>
</section>
            <section class="itemPrice"> @${($("#burShirtPrice").text())} each</section>
            <button type="button">
                <i class="material-icons">clear</i>
            </button>
        </section>
    </section>`)
        $("#hidePopupBurgundy").hide();
        $(".hideAdded").toggle();
    });
    // End Add Burgundy Shirt
    // Add Black Shirt
    $("body").on("click", "#blkShirt", (e) => {
        $(".itemContainer").append(`<section class="items">
            <section class="itemName">${$(".nameBlkShirt").text()}</section>
            <section class="itemQuantity">
                <button type="button">
                    <i class="material-icons">remove</i>
                </button>
                <input type="text" value="${$(".blkShirtQty").val()}">
                    <button type="button">
                        <i class="material-icons">add</i>
                    </button>
    </section>
                <section class="itemPrice"> @${($("#blkShirtPrice").text())} each</section>
                <button type="button">
                    <i class="material-icons">clear</i>
                </button>
            </section>
        </section>`)
        $("#hidePopupBlack").hide();
        $(".hideAdded").toggle();
    });
    // End Add Black Shirt
    // Add White Shirt
    $("body").on("click", "#whtShirt", (e) => {
        $(".itemContainer").append(`<section class="items">
            <section class="itemName">${$(".nameWhiteShirt").text()}</section>
            <section class="itemQuantity">
                <button type="button">
                    <i class="material-icons">remove</i>
                </button>
                <input type="text" value="${$(".whiteShirtQty").val()}">
                    <button type="button">
                        <i class="material-icons">add</i>
                    </button>
    </section>
                <section class="itemPrice"> @${($("#whiteShirtPrice").text())} each</section>
                <button type="button">
                    <i class="material-icons">clear</i>
                </button>
            </section>
        </section>`)
        $("#hidePopupWhite").hide();
        $(".hideAdded").toggle();
    });
    // End Add White Shirt
    // Add Dad Hat
    $("body").on("click", "#dadHat", (e) => {
        $(".itemContainer").append(`<section class="items">
            <section class="itemName">${$(".nameHat").text()}</section>
            <section class="itemQuantity">
                <button type="button">
                    <i class="material-icons">remove</i>
                </button>
                <input type="text" value="${$(".hatQty").val()}">
                    <button type="button">
                        <i class="material-icons">add</i>
                    </button>
    </section>
                <section class="itemPrice"> @${($("#hatPrice").text())} each</section>
                <button type="button">
                    <i class="material-icons">clear</i>
                </button>
            </section>
        </section>`)
        $("#hidePopupHat").hide();
        $(".hideAdded").toggle();
    });
    // End Add Dad Hat
    // Add Cymbal
    $("body").on("click", "#usedCymbal", (e) => {
        $(".itemContainer").append(`<section class="items">
                <section class="itemName">${$(".nameCymbal").text()}</section>
                <section class="itemQuantity">
                    <button type="button">
                        <i class="material-icons">remove</i>
                    </button>
                    <input type="text" value="${$(".cymbalQty").val()}">
                        <button type="button">
                            <i class="material-icons">add</i>
                        </button>
        </section>
                    <section class="itemPrice"> @${($("#cymbalPrice").text())} each</section>
                    <button type="button">
                        <i class="material-icons">clear</i>
                    </button>
                </section>
            </section>`)
        $("#hidePopupCymbal").hide();
        $(".hideAdded").toggle();
    });
    // End Add Cymbal
    // Add Poster 1
    $("body").on("click", "#p1", (e) => {
        $(".itemContainer").append(`<section class="items">
                <section class="itemName">${$(".nameP1").text()}</section>
                <section class="itemQuantity">
                    <button type="button">
                        <i class="material-icons">remove</i>
                    </button>
                    <input type="text" value="${$(".p1Qty").val()}">
                        <button type="button">
                            <i class="material-icons">add</i>
                        </button>
        </section>
                    <section class="itemPrice"> @${($("#p1Price").text())} each</section>
                    <button type="button">
                        <i class="material-icons">clear</i>
                    </button>
                </section>
            </section>`)
        $("#hidePopupP1").hide();
        $(".hideAdded").toggle();
    });
    // End Add Poster 1
    // Add Poster 2
    $("body").on("click", "#p2", (e) => {
        $(".itemContainer").append(`<section class="items">
                <section class="itemName">${$(".nameP2").text()}</section>
                <section class="itemQuantity">
                    <button type="button">
                        <i class="material-icons">remove</i>
                    </button>
                    <input type="text" value="${$(".p2Qty").val()}">
                        <button type="button">
                            <i class="material-icons">add</i>
                        </button>
        </section>
                    <section class="itemPrice"> @${($("#p2Price").text())} each</section>
                    <button type="button">
                        <i class="material-icons">clear</i>
                    </button>
                </section>
            </section>`)
        $("#hidePopupP2").hide();
        $(".hideAdded").toggle();
    });
    // End Add Poster 2
    // Add Poster 3
    $("body").on("click", "#p3", (e) => {
        $(".itemContainer").append(`<section class="items">
                        <section class="itemName">${$(".nameP3").text()}</section>
                        <section class="itemQuantity">
                            <button type="button">
                                <i class="material-icons">remove</i>
                            </button>
                            <input type="text" value="${$(".p3Qty").val()}">
                                <button type="button">
                                    <i class="material-icons">add</i>
                                </button>
                </section>
                            <section class="itemPrice"> @${($("#p3Price").text())} each</section>
                            <button type="button">
                                <i class="material-icons">clear</i>
                            </button>
                        </section>
                    </section>`)
        $("#hidePopupP3").hide();
        $(".hideAdded").toggle();
    });
    // End Add Poster 3
    // Add Tix 1
    $("body").on("click", "#tickets1", (e) => {
        $(".itemContainer").append(`<section class="items">
                            <section class="itemName">${$(".nameTix1").text()}</section>
                            <section class="itemQuantity">
                                <button type="button">
                                    <i class="material-icons">remove</i>
                                </button>
                                <input type="text" value="${$(".tix1Qty").val()}">
                                    <button type="button">
                                        <i class="material-icons">add</i>
                                    </button>
                    </section>
                                <section class="itemPrice"> @${($("#tix1Price").text())} each</section>
                                <button type="button">
                                    <i class="material-icons">clear</i>
                                </button>
                            </section>
                        </section>`)
        $("#hidePopupTix1").hide();
        $(".hideAdded").toggle();
    });
    // End Add Tix 1
// Add Tix 2
$("body").on("click", "#tickets2", (e) => {
    $(".itemContainer").append(`<section class="items">
                        <section class="itemName">${$(".nameTix2").text()}</section>
                        <section class="itemQuantity">
                            <button type="button">
                                <i class="material-icons">remove</i>
                            </button>
                            <input type="text" value="${$(".tix2Qty").val()}">
                                <button type="button">
                                    <i class="material-icons">add</i>
                                </button>
                </section>
                            <section class="itemPrice"> @${($("#tix2Price").text())} each</section>
                            <button type="button">
                                <i class="material-icons">clear</i>
                            </button>
                        </section>
                    </section>`)
    $("#hidePopupTix2").hide();
    $(".hideAdded").toggle();
});
// End Add Tix 2

$("body").on("click", ".closeAdded", (e) => {
    $(".hideAdded").toggle();
});

// Cart Buttons
 $("body").on("click", ".clear-button", (e) => {
        $(".itemContainer").html("")
    })

    //CD QTY BTNS
    $("body").on("click", ".cdQtyAdd", (e) => {
        let qty = $(".cdQty").val();
        qty++;
        $(".cdQty").val(qty);;
    });

    $("body").on("click", ".cdQtyRemove", (e) => {
        let qty = $(".cdQty").val();
        if (qty === 1) {
            $(".cdQtyRemove").css("cursor", "not-allowed");
        }
        if (qty <= 1) {
        } else {
            qty--;
            $(".cdQty").val(qty);
        }
    });

    //VINYL QTY BTNS
    $("body").on("click", ".vinylQtyAdd", (e) => {
        let qty = $(".vinylQty").val();
        qty++;
        $(".vinylQty").val(qty);;
    });

    $("body").on("click", ".vinylQtyRemove", (e) => {
        let qty = $(".vinylQty").val();
        if (qty === 1) {
            $(".vinylQtyRemove").css("cursor", "not-allowed");
        }
        if (qty <= 1) {
        } else {
            qty--;
            $(".vinylQty").val(qty);
        }
    });

    //BLACK SHIRT QTY BTNS
    $("body").on("click", ".blkShirtQtyAdd", (e) => {
        let qty = $(".blkShirtQty").val();
        qty++;
        $(".blkShirtQty").val(qty);;
    });

    $("body").on("click", ".blkShirtQtyRemove", (e) => {
        let qty = $(".blkShirtQty").val();
        if (qty === 1) {
            $(".blkShirtQtyRemove").css("cursor", "not-allowed");
        }
        if (qty <= 1) {
        } else {
            qty--;
            $(".blkShirtQty").val(qty);
        }
    });

    //BURGUNDY SHIRT QTY BTNS
    $("body").on("click", ".burShirtQtyAdd", (e) => {
        let qty = $(".burShirtQty").val();
        qty++;
        $(".burShirtQty").val(qty);;
    });

    $("body").on("click", ".burShirtQtyRemove", (e) => {
        let qty = $(".burShirtQty").val();
        if (qty === 1) {
            $(".burShirtQtyRemove").css("cursor", "not-allowed");
        }
        if (qty <= 1) {
        } else {
            qty--;
            $(".burShirtQty").val(qty);
        }
    });

    //WHITE SHIRT QTY BTNS
    $("body").on("click", ".whiteShirtQtyAdd", (e) => {
        let qty = $(".whiteShirtQty").val();
        qty++;
        $(".whiteShirtQty").val(qty);;
    });

    $("body").on("click", ".whiteShirtQtyRemove", (e) => {
        let qty = $(".whiteShirtQty").val();
        if (qty === 1) {
            $(".whiteShirtQtyRemove").css("cursor", "not-allowed");
        }
        if (qty <= 1) {
        } else {
            qty--;
            $(".whiteShirtQty").val(qty);
        }
    });

    //HAT QTY BTNS
    $("body").on("click", ".hatQtyAdd", (e) => {
        let qty = $(".hatQty").val();
        qty++;
        $(".hatQty").val(qty);;
    });
    
    $("body").on("click", ".hatQtyRemove", (e) => {
        let qty = $(".hatQty").val();
        if (qty === 1) {
            $(".hatQtyRemove").css("cursor", "not-allowed");
        }
        if (qty <= 1) {
        } else {
            qty--;
            $(".hatQty").val(qty);
        }
    });

    //POSTER 1 QTY BTNS
    $("body").on("click", ".post1ShirtQtyAdd", (e) => {
        let qty = $(".post1Qty").val();
        qty++;
        $(".post1Qty").val(qty);;
    });
    
    $("body").on("click", ".post1QtyRemove", (e) => {
        let qty = $(".post1Qty").val();
        if (qty === 1) {
            $(".post1QtyRemove").css("cursor", "not-allowed");
        }
        if (qty <= 1) {
        } else {
            qty--;
            $(".post1Qty").val(qty);
        }
    });

    //POSTER 2 QTY BTNS
    $("body").on("click", ".post2QtyAdd", (e) => {
        let qty = $(".post2Qty").val();
        qty++;
        $(".post2Qty").val(qty);;
    });
    
    $("body").on("click", ".post2QtyRemove", (e) => {
        let qty = $(".post2Qty").val();
        if (qty === 1) {
            $(".post2QtyRemove").css("cursor", "not-allowed");
        }
        if (qty <= 1) {
        } else {
            qty--;
            $(".post2Qty").val(qty);
        }
    });

    //POSTER 3 QTY BTNS
    $("body").on("click", ".post3QtyAdd", (e) => {
        let qty = $(".post3Qty").val();
        qty++;
        $(".post3Qty").val(qty);;
    });
    
    $("body").on("click", ".post3QtyRemove", (e) => {
        let qty = $(".post3Qty").val();
        if (qty === 1) {
            $(".post3QtyRemove").css("cursor", "not-allowed");
        }
        if (qty <= 1) {
        } else {
            qty--;
            $(".post3Qty").val(qty);
        }
    });

    //CYMBAL QTY BTNS
    $("body").on("click", ".cymQtyAdd", (e) => {
        let qty = $(".cymQty").val();
        qty++;
        $(".cymQty").val(qty);;
    });
    
    $("body").on("click", ".cymQtyRemove", (e) => {
        let qty = $(".cymQty").val();
        if (qty === 1) {
            $(".cymQtyRemove").css("cursor", "not-allowed");
        }
        if (qty <= 1) {
        } else {
            qty--;
            $(".cymQty").val(qty);
        }
    });

    //TIX 1 QTY BTNS
    $("body").on("click", ".tix1QtyAdd", (e) => {
        let qty = $(".tix1Qty").val();
        qty++;
        $(".tix1Qty").val(qty);;
    });
    
    $("body").on("click", ".tix1QtyRemove", (e) => {
        let qty = $(".tix1Qty").val();
        if (qty === 1) {
            $(".tix1QtyRemove").css("cursor", "not-allowed");
        }
        if (qty <= 1) {
        } else {
            qty--;
            $(".tix1Qty").val(qty);
        }
    });

    //TIX 2 QTY BTNS
    $("body").on("click", ".tix2QtyAdd", (e) => {
        let qty = $(".tix2Qty").val();
        qty++;
        $(".tix2Qty").val(qty);;
    });
    
    $("body").on("click", ".tix2QtyRemove", (e) => {
        let qty = $(".tix2Qty").val();
        if (qty === 1) {
            $(".tix2QtyRemove").css("cursor", "not-allowed");
        }
        if (qty <= 1) {
        } else {
            qty--;
            $(".tix2Qty").val(qty);
        }
    });

});