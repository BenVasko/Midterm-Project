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
        $("#hidePopupVinyl").toggle();
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
        $("#hidePopupCD").toggle();
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
        $("#hidePopupBurgundy").toggle();
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
        $("#hidePopupBlack").toggle();
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
        $("#hidePopupWhite").toggle();
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
        $("#hidePopupHat").toggle();
    });
    // End Add Dad Hat

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