" use strict";
$(document).ready(() => {
    let cdTotal = null;
    let vinylTotal = null;
    let burShirtTotal = null;
    let blkShirtTotal = null;
    let whiteShirtTotal = null;
    let post1Total = null;
    let post2Total = null;
    let post3Total = null;
    let cymTotal = null;
    let hatTotal = null;
    let tix1Total = null;
    let tix2Total = null;
    let taxVar = null;

    let total = () => {
        $(".total").text(null);
        $(".total").append(`$${cdTotal + vinylTotal + burShirtTotal + blkShirtTotal + whiteShirtTotal + post1Total + post2Total + post3Total + cymTotal + hatTotal + tix1Total + tix2Total}`)
        $(".subtotal").text(null);
        let subtotalVar = cdTotal + vinylTotal + burShirtTotal + blkShirtTotal + whiteShirtTotal + post1Total + post2Total + post3Total + cymTotal + hatTotal + tix1Total + tix2Total
        $(".subtotal").append(`$${subtotalVar.toFixed(2)}`)
        $(".tax").text(null);
        let taxVar = cdTotal * .06 + vinylTotal * .06 + blkShirtTotal * .06 + burShirtTotal * .06 + whiteShirtTotal * .06 + post1Total * .06 + post2Total * .06 + post3Total * .06 + cymTotal * .06 + hatTotal * .06 + tix1Total * .06 + tix2Total * .06
        $(".tax").append(`$${taxVar.toFixed(2)}`);
        $(".taxTotal").text(null);
        let taxTotalVar = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $(".taxTotal").append(`$${taxTotalVar.toFixed(2)}`);
        $(".receiptSubtotal").text(null);
        $(".receiptSubtotal").append(`Subtotal: $${subtotalVar.toFixed(2)}`)
        $(".receiptTax").text(null);
        $(".receiptTax").append(`Sales Tax (6%): $${taxVar.toFixed(2)}`);
        $(".receiptTaxTotal").text(null);
        $(".receiptTaxTotal").append(`Total: $${taxTotalVar.toFixed(2)}`);
        $(".amtDue").text(null);
        $(".amtDue").append(`Total: $${taxTotalVar.toFixed(2)}`);
    };

    let update = () => {
        if (vinylTotal > 0) {
            vinylTotal = $(".vinylQtyCart").val() * $("#vinylPrice").val();
        }
        if (cdTotal > 0) {
            cdTotal = $(".cdQtyCart").val() * $("#cdPrice").val();
        }
        if (burShirtTotal > 0) {
            burShirtTotal = $(".burShirtQtyCart").val() * $("#burShirtPrice").val()
            burShirtTax = $(".burShirtQtyCart").val() * $("#burShirtPrice").val()
        }
        if (blkShirtTotal > 0) {
            blkShirtTotal = $(".blkShirtQtyCart").val() * $("#blkShirtPrice").val()
        }
        if (whiteShirtTotal > 0) {
            whiteShirtTotal = $(".whiteShirtQtyCart").val() * $("#whiteShirtPrice").val();
        }
        if (post1Total > 0) {
            post1Total = $(".post1QtyCart").val() * $("#p1Price").val();
        }
        if (post2Total > 0) {
            post2Total = $(".post2QtyCart").val() * $("#p2Price").val();
        }
        if (post3Total > 0) {
            post3Total = $(".post3QtyCart").val() * $("#p3Price").val();
        }
        if (cymTotal > 0) {
            cymTotal = $(".cymQtyCart").val() * $("#cymbalPrice").val();
        }
        if (hatTotal > 0) {
            hatTotal = $(".hatQtyCart").val() * $("#hatPrice").val();
        }
        if (tix1Total > 0) {
            tix1Total = $(".tix1QtyCart").val() * $("#tix1Price").val();
        }
        if (tix2Total > 0) {
            tix2Total = $(".tix2QtyCart").val() * $("#tix2Price").val();
        }

        total();
    }

    let clear = () => {
        cdTotal = 0;
        vinylTotal = 0;
        burShirtTotal = 0;
        blkShirtTotal = 0;
        whiteShirtTotal = 0;
        post1Total = 0;
        post2Total = 0;
        post3Total = 0;
        cymTotal = 0;
        hatTotal = 0;
        tix1Total = 0;
        tix2Total = 0;
    }

    total();
    $("#apparelcarousel").show();
    $("#musiccarousel").hide();
    $("#collectiblescarousel").hide();
    $("#ticketscarousel").hide();

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

    // Carousel Toggle Buttons
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
    // End Carousel Toggle Buttons

    // Add Items to Cart
    // Add Vinyl
    $("body").on("click", "#vinylRecord", (e) => {
        $(".itemContainer").append(`<section class="items">
        <section class="itemName">${$(".nameVinyl").text()}</section>
        <section class="itemQuantity">
            <input type="number" class="vinylQtyCart" value="${$(".vinylQty").val()}">
        </section>
            <section class="itemPrice"> @ $${($("#vinylPrice").val())} each</section>
            <button type="button" class="vinClear">
                <i class="material-icons">clear</i>
            </button>
        </section>
    </section>`);
        vinylTotal += $(".vinylQty").val() * $("#vinylPrice").val();
        total();
        $("#hidePopupVinyl").hide();
        $(".hideAdded").toggle();
    });
    $("body").on("click", ".vinClear", (e) => {
        $(".vinClear").parent().empty();
    });
    // End Add Vinyl
    // Add CD
    $("body").on("click", "#compactDisc", (e) => {
        $(".itemContainer").append(`<section class="items">
        <section class="itemName">${$(".nameCD").text()}</section>
        <section class="itemQuantity">
            <input type="number" class="cdQtyCart" value="${$(".cdQty").val()}">   
        </section>
            <section class="itemPrice"> @ $${($("#cdPrice").val())} each</section>
            <button type="button" class="cdClear">
                <i class="material-icons">clear</i>
            </button>
        </section>
    </section>`);
        cdTotal += $(".cdQty").val() * $("#cdPrice").val();
        total();
        $("#hidePopupCD").hide();
        $(".hideAdded").toggle();
    });
    $("body").on("click", ".cdClear", (e) => {
        $(".cdClear").parent().empty();
    });
    // End Add CD
    // Add Burgundy Shirt
    $("body").on("click", "#burShirt", (e) => {
        $(".itemContainer").append(`<section class="items">
        <section class="itemName">${$(".nameBurShirt").text()}</section>
        <section class="itemQuantity">
            <input type="number" class="burShirtQtyCart" value="${$(".burShirtQty").val()}">
        </section>
            <section class="itemPrice"> @${($("#burShirtPrice").val())} each</section>
            <button type="button" class="burClear">
                <i class="material-icons">clear</i>
            </button>
        </section>
    </section>`);
        burShirtTotal += $(".burShirtQty").val() * $("#burShirtPrice").val();
        total();
        $("#hidePopupBurgundy").hide();
        $(".hideAdded").toggle();
    });
    $("body").on("click", ".burClear", (e) => {
        $(".burClear").parent().empty();
    });
    // End Add Burgundy Shirt
    // Add Black Shirt
    $("body").on("click", "#blkShirt", (e) => {
        $(".itemContainer").append(`<section cless="delContainer">
        <section class="items">
            <section class="itemName">${$(".nameBlkShirt").text()}</section>
            <section class="itemQuantity">
                <input type="number" class="blkShirtQtyCart" value="${$(".blkShirtQty").val()}">
            </section>
                <section class="itemPrice"> @ $${($("#blkShirtPrice").val())} each</section>
                <button type="button" class="blkClear">
                    <i class="material-icons">clear</i>
                </button>
            </section>
        </section>
        </section>`)
        blkShirtTotal += $(".blkShirtQty").val() * $("#blkShirtPrice").val();
        total();
        $("#hidePopupBlack").hide();
        $(".hideAdded").toggle();
    });
    $("body").on("click", ".blkClear", (e) => {
        $(".blkClear").parent().empty();
    });
    // End Add Black Shirt
    // Add White Shirt
    $("body").on("click", "#whtShirt", (e) => {
        $(".itemContainer").append(`<section class="items">
            <section class="itemName">${$(".nameWhiteShirt").text()}</section>
            <section class="itemQuantity">
                <input type="number" class="whiteShirtQtyCart" value="${$(".whiteShirtQty").val()}">
             </section>
                <section class="itemPrice"> @ $${($("#whiteShirtPrice").val())} each</section>
                <button type="button" class="whtClear">
                    <i class="material-icons">clear</i>
                </button>
            </section>
        </section>`);
        whiteShirtTotal += $(".whiteShirtQty").val() * $("#whiteShirtPrice").val();
        total();
        $("#hidePopupWhite").hide();
        $(".hideAdded").toggle();
    });
    $("body").on("click", ".whtClear", (e) => {
        $(".whtClear").parent().empty();
    });
    // End Add White Shirt
    // Add Dad Hat
    $("body").on("click", "#dadHat", (e) => {
        $(".itemContainer").append(`<section class="items">
            <section class="itemName">${$(".nameHat").text()}</section>
            <section class="itemQuantity">
                <input type="number" class="hatQtyCart" value="${$(".hatQty").val()}">
            </section>
                <section class="itemPrice"> @ $${($("#hatPrice").val())} each</section>
                <button type="button" class="hatClear">
                    <i class="material-icons">clear</i>
                </button>
            </section>
        </section>`);
        hatTotal += $(".hatQty").val() * $("#hatPrice").val();
        total();
        $("#hidePopupHat").hide();
        $(".hideAdded").toggle();
    });
    $("body").on("click", ".hatClear", (e) => {
        $(".hatClear").parent().empty();
    });
    // End Add Dad Hat
    // Add Cymbal
    $("body").on("click", "#usedCymbal", (e) => {
        $(".itemContainer").append(`<section class="items">
                <section class="itemName">${$(".nameCymbal").text()}</section>
                <section class="itemQuantity">
                    <input type="number" class="cymQtyCart" value="${$(".cymQty").val()}">
                </section>
                    <section class="itemPrice"> @ $${($("#cymbalPrice").val())} each</section>
                    <button type="button" class="cymClear">
                        <i class="material-icons">clear</i>
                    </button>
                </section>
            </section>`);
        cymTotal += $(".cymQty").val() * $("#cymbalPrice").val();
        total();
        $("#hidePopupCymbal").hide();
        $(".hideAdded").toggle();
    });
    $("body").on("click", ".cymClear", (e) => {
        $(".cymClear").parent().empty();
    });
    // End Add Cymbal
    // Add Poster 1
    $("body").on("click", "#p1", (e) => {
        $(".itemContainer").append(`<section class="items">
                <section class="itemName">${$(".nameP1").text()}</section>
                <section class="itemQuantity">
                    <input type="number" class="post1QtyCart" value="${$(".post1Qty").val()}">
                </section>
                    <section class="itemPrice"> @ $${($("#p1Price").val())} each</section>
                    <button type="button">
                        <i class="material-icons" class="p1Clear">clear</i>
                    </button>
                </section>
            </section>`);
        post1Total += $(".post1Qty").val() * $("#p1Price").val();
        total();
        $("#hidePopupP1").hide();
        $(".hideAdded").toggle();
    });
    $("body").on("click", ".p1Clear", (e) => {
        $(".p1Clear").parent().empty();
    });
    // End Add Poster 1
    // Add Poster 2
    $("body").on("click", "#p2", (e) => {
        $(".itemContainer").append(`<section class="items">
                <section class="itemName">${$(".nameP2").text()}</section>
                <section class="itemQuantity">
                    <input type="number" class="post2QtyCart" value="${$(".post2Qty").val()}">
                </section>
                    <section class="itemPrice"> @ $${($("#p2Price").val())} each</section>
                    <button type="button" class="p2Clear">
                        <i class="material-icons">clear</i>
                    </button>
                </section>
            </section>`)
        post2Total += $(".post2Qty").val() * $("#p2Price").val();
        total();
        $("#hidePopupP2").hide();
        $(".hideAdded").toggle();
    });
    $("body").on("click", ".p2Clear", (e) => {
        $(".p2Clear").parent().empty();
    });
    // End Add Poster 2
    // Add Poster 3
    $("body").on("click", "#p3", (e) => {
        $(".itemContainer").append(`<section class="items">
                        <section class="itemName">${$(".nameP3").text()}</section>
                        <section class="itemQuantity">
                            <input type="number" class="post3QtyCart" value="${$(".post3Qty").val()}">
                        </section>
                            <section class="itemPrice"> @ $${($("#p3Price").val())} each</section>
                            <button type="button" class="p3Clear">
                                <i class="material-icons">clear</i>
                            </button>
                        </section>
                    </section>`);
        post3Total += $(".post3Qty").val() * $("#p3Price").val();
        total();
        $("#hidePopupP3").hide();
        $(".hideAdded").toggle();
    });
    $("body").on("click", ".p3Clear", (e) => {
        $(".p3Clear").parent().empty();
    });
    // End Add Poster 3
    // Add Tix 1
    $("body").on("click", "#tickets1", (e) => {
        $(".itemContainer").append(`<section class="items">
                            <section class="itemName">${$(".nameTix1").text()}</section>
                            <section class="itemQuantity">
                                <input type="number" class="tix1QtyCart" value="${$(".tix1Qty").val()}">
                            </section>
                                <section class="itemPrice"> @ $${($("#tix1Price").val())} each</section>
                                <button type="button" class="tix1Clear">
                                    <i class="material-icons">clear</i>
                                </button>
                            </section>
                        </section>`);
        tix1Total += $(".tix1Qty").val() * $("#tix1Price").val();
        total();
        $("#hidePopupTix1").hide();
        $(".hideAdded").toggle();
    });
    $("body").on("click", ".tix1Clear", (e) => {
        $(".tix1Clear").parent().empty();
    });
    // End Add Tix 1
    // Add Tix 2
    $("body").on("click", "#tickets2", (e) => {
        $(".itemContainer").append(`<section class="items">
                        <section class="itemName">${$(".nameTix2").text()}</section>
                        <section class="itemQuantity">
                            <input type="number" class="tix2QtyCart" value="${$(".tix2Qty").val()}">
                        </section>
                            <section class="itemPrice"> @ $${($("#tix2Price").val())} each</section>
                            <button type="button" class="tix2Clear">
                                <i class="material-icons">clear</i>
                            </button>
                        </section>
                    </section>`);
        tix2Total += $(".tix2Qty").val() * $("#tix2Price").val();
        total();
        $("#hidePopupTix2").hide();
        $(".hideAdded").toggle();
    });
    $("body").on("click", ".tix2Clear", (e) => {
        $(".tix2Clear").parent().empty();
    });
    // End Add Tix 2


    $("body").on("click", ".closeAdded", (e) => {
        $(".hideAdded").toggle();
    });

    // Cart Buttons
    $("body").on("click", ".clear-button", (e) => {
        $(".itemContainer").html("")
        clear();
        total();
    });

    $("body").on("click", ".update-button", (e) => {
        update();
    })


    //CD QTY BTNS
    $("body").on("click", ".cdQtyAdd", (e) => {
        let qty = $(".cdQty").val();
        qty++;
        $(".cdQty").val(qty);
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
        $(".vinylQty").val(qty);
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
        $(".blkShirtQty").val(qty);
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
        $(".burShirtQty").val(qty);
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
        $(".whiteShirtQty").val(qty);
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
        $(".hatQty").val(qty);
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
        $(".post1Qty").val(qty);
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
        $(".post2Qty").val(qty);
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
        $(".post3Qty").val(qty);
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
        $(".cymQty").val(qty);
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
        $(".tix1Qty").val(qty);
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
        $(".tix2Qty").val(qty);
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
    $("body").on("click", "#checkoutbtn", (e) => {
        $("#mainpagehide").hide();
        $(".hidecheckout").removeClass().addClass("checkout-page");
    });
    $("body").on("click", ".contShop", (e) => {
        $("#mainpagehide").show();
        $(".hidecheckout").hide();
        $(".checkout-page").hide();
        $("#hideCart").toggle();
    });

    // Add Item to checkout from Cart
    $("body").on("click", "#compactDisc", (e) => {
        $(".columnscheckout").append(`<section class="items">
        <section class="itemName">${$(".nameCD").text()}</section>
        <section class="itemQuantity">${$(".cdQtyCart").val()}</section>
            <section class="itemPrice"> @ $${($("#cdPrice").val())} each</section>
            <section>$${cdTotal}.00</section>
            <button type="button" class="cdClear">
                <i class="material-icons">clear</i>
            </button>
            
    </section>`);
    });
    $("body").on("click", "#vinylRecord", (e) => {
        $(".columnscheckout").append(`<section class="items">
        <section class="itemName">${$(".nameVinyl").text()}</section>
        <section class="itemQuantity">${$(".vinylQtyCart").val()}</section>
            <section class="itemPrice"> @ $${($("#vinylPrice").val())} each</section>
            <section>$${vinylTotal}.00</section>
            <button type="button" class="vinClear">
                <i class="material-icons">clear</i>
            </button>            
    </section>`);
    });
    $("body").on("click", "#burShirt", (e) => {
        $(".columnscheckout").append(`<section class="items">
        <section class="itemName">${$(".nameBurShirt").text()}</section>
        <section class="itemQuantity">${$(".burShirtQtyCart").val()}</section>
            <section class="itemPrice"> @$${($("#burShirtPrice").val())} each</section>
            <section>$${burShirtTotal}.00</section>
            <button type="button" class="burClear">
                <i class="material-icons">clear</i>
            </button>            
        </section>`);
    });
    $("body").on("click", "#blkShirt", (e) => {
        $(".columnscheckout").append(`<section cless="delContainer">
        <section class="items">
            <section class="itemName">${$(".nameBlkShirt").text()}</section>
            <section class="itemQuantity">${$(".blkShirtQtyCart").val()}</section>
                <section class="itemPrice"> @ $${($("#blkShirtPrice").val())} each</section>
                <section>$${blkShirtTotal}.00</section>
                <button type="button" class="blkClear">
                    <i class="material-icons">clear</i>
                </button>
            </section>            
        </section>`);
    });
    $("body").on("click", "#whtShirt", (e) => {
        $(".columnscheckout").append(`<section class="items">
            <section class="itemName">${$(".nameWhiteShirt").text()}</section>
            <section class="itemQuantity">${$(".whiteShirtQtyCart").val()}</section>
                <section class="itemPrice"> @ $${($("#whiteShirtPrice").val())} each</section>
                <section>$${whiteShirtTotal}.00</section>
                <button type="button" class="whtClear">
                    <i class="material-icons">clear</i>
                </button>
        </section>`);
    });
    $("body").on("click", "#dadHat", (e) => {
        $(".columnscheckout").append(`<section class="items">
            <section class="itemName">${$(".nameHat").text()}</section>
            <section class="itemQuantity">${$(".hatQtyCart").val()}</section>
                <section class="itemPrice"> @ $${($("#hatPrice").val())} each</section>
                <section>$${hatTotal}.00</section>
                <button type="button" class="hatClear">
                    <i class="material-icons">clear</i>
                </button>
                </section>`);
    });
    $("body").on("click", "#usedCymbal", (e) => {
        $(".columnscheckout").append(`<section class="items">
                <section class="itemName">${$(".nameCymbal").text()}</section>
                <section class="itemQuantity">${$(".cymQtyCart").val()}</section>
                    <section class="itemPrice"> @ $${($("#cymbalPrice").val())} each</section>
                    <section>$${cymTotal}.00</section>
                    <button type="button" class="cymClear">
                        <i class="material-icons">clear</i>
                    </button>                    
            </section>`);
    });
    $("body").on("click", "#p1", (e) => {
        $(".columnscheckout").append(`<section class="items">
                <section class="itemName">${$(".nameP1").text()}</section>
                <section class="itemQuantity">${$(".post1QtyCart").val()}</section>
                    <section class="itemPrice"> @ $${($("#p1Price").val())} each</section>
                    <section>$${post1Total}.00</section>
                    <button type="button">
                        <i class="material-icons" class="p1Clear">clear</i>
                    </button>
                </section>`);
    });
    $("body").on("click", "#p2", (e) => {
        $(".columnscheckout").append(`<section class="items">
                <section class="itemName">${$(".nameP2").text()}</section>
                <section class="itemQuantity">${$(".post2QtyCart").val()}</section>
                    <section class="itemPrice"> @ $${($("#p2Price").val())} each</section>
                    <section>$${post2Total}.00</section>
                    <button type="button" class="p2Clear">
                        <i class="material-icons">clear</i>
                    </button>
                </section>`);
    });
    $("body").on("click", "#p3", (e) => {
        $(".columnscheckout").append(`<section class="items">
                        <section class="itemName">${$(".nameP3").text()}</section>
                        <section class="itemQuantity">${$(".post3QtyCart").val()}</section>
                            <section class="itemPrice"> @ $${($("#p3Price").val())} each</section>
                            <section>$${post3Total}.00</section>
                            <button type="button" class="p3Clear">
                                <i class="material-icons">clear</i>
                            </button>
                       </section>`);
    });
    $("body").on("click", "#tickets1", (e) => {
        $(".columnscheckout").append(`<section class="items">
                            <section class="itemName">${$(".nameTix1").text()}</section>
                            <section class="itemQuantity">${$(".tix1QtyCart").val()}</section>
                                <section class="itemPrice"> @ $${($("#tix1Price").val())} each</section>
                                <section>$${tix1Total}.00</section>
                                <button type="button" class="tix1Clear">
                                    <i class="material-icons">clear</i>
                                </button>
                        </section>`);
    });
    $("body").on("click", "#tickets2", (e) => {
        $(".columnscheckout").append(`<section class="items">
                        <section class="itemName">${$(".nameTix2").text()}</section>
                        <section class="itemQuantity">${$(".tix2QtyCart").val()}</section>
                            <section class="itemPrice"> @ $${($("#tix2Price").val())} each</section>
                            <section>$${tix2Total}.00</section>
                            <button type="button" class="tix2Clear">
                                <i class="material-icons">clear</i>
                            </button>
                    </section>`);
    });
    // End Checkout Items

    // Start Receipt Items
    // Add CD
    $("body").on("click", "#compactDisc", (e) => {
        $(".receiptcheckout").append(`<section class="items" id="delCd">
        <section class="itemName">${$(".nameCD").text()}</section>
        <section class="itemQuantity">${$(".cdQtyCart").val()}</section>
            <section class="itemPrice"> @ $${($("#cdPrice").val())} each</section>
            <section>$${cdTotal}.00</section>
     </section>`);
    });
    // End Add CD
    // Add Vinyl
    $("body").on("click", "#vinylRecord", (e) => {
        $(".receiptcheckout").append(`<section class="items" id="delVinyl">
        <section class="itemName">${$(".nameVinyl").text()}</section>
        <section class="itemQuantity">${$(".vinylQtyCart").val()}</section>
            <section class="itemPrice"> @ $${($("#vinylPrice").val())} each</section>
            <section>$${vinylTotal}.00</section>
    </section>`);
    });
    // End Add Vinyl
    // Add Burgundy Shirt
    $("body").on("click", "#burShirt", (e) => {
        $(".receiptcheckout").append(`<section class="items" id="delBur">
        <section class="itemName">${$(".nameBurShirt").text()}</section>
        <section class="itemQuantity">${$(".burShirtQtyCart").val()}</section>
            <section class="itemPrice"> @$${($("#burShirtPrice").val())} each</section>
            <section>$${burShirtTotal}.00</section>
        </section>`);
    });
    // End Add Burgundy Shirt
    // Add Black Shirt
    $("body").on("click", "#blkShirt", (e) => {
        $(".receiptcheckout").append(`
        <section class="items" id="delBlk">
            <section class="itemName">${$(".nameBlkShirt").text()}</section>
            <section class="itemQuantity">${$(".blkShirtQtyCart").val()}</section>
                <section class="itemPrice"> @ $${($("#blkShirtPrice").val())} each</section>
                <section>$${blkShirtTotal}.00</section>
        </section>`);
    });
    // End Add Black Shirt
    // Add White Shirt
    $("body").on("click", "#whtShirt", (e) => {
        $(".receiptcheckout").append(`<section class="items" id="delWht">
            <section class="itemName">${$(".nameWhiteShirt").text()}</section>
            <section class="itemQuantity">${$(".whiteShirtQtyCart").val()}</section>
                <section class="itemPrice"> @ $${($("#whiteShirtPrice").val())} each</section>
                <section>$${whiteShirtTotal}.00</section>
        </section>`);
    });
    // End Add White Shirt
    // Add Dad Hat
    $("body").on("click", "#dadHat", (e) => {
        $(".receiptcheckout").append(`<section class="items" id="delHat">
            <section class="itemName">${$(".nameHat").text()}</section>
            <section class="itemQuantity">${$(".hatQtyCart").val()}</section>
                <section class="itemPrice"> @ $${($("#hatPrice").val())} each</section>
                <section>$${hatTotal}.00</section>
        </section>`);
    });
    // End Add Dad Hat
    // Add Cymbal
    $("body").on("click", "#usedCymbal", (e) => {
        $(".receiptcheckout").append(`<section class="items" id="delCym">
                <section class="itemName">${$(".nameCymbal").text()}</section>
                <section class="itemQuantity">${$(".cymQtyCart").val()}</section>
                    <section class="itemPrice"> @ $${($("#cymbalPrice").val())} each</section>
                    <section>$${cymTotal}.00</section>
            </section>`);
    });
    // End Add Cymbal
    // Add Poster 1
    $("body").on("click", "#p1", (e) => {
        $(".receiptcheckout").append(`<section class="items" id="delP1">
                <section class="itemName">${$(".nameP1").text()}</section>
                <section class="itemQuantity">${$(".post1QtyCart").val()}</section>
                    <section class="itemPrice"> @ $${($("#p1Price").val())} each</section>
                    <section>$${post1Total}.00</section>
            </section>`);
    });
    // End Add Poster 1
    // Add Poster 2
    $("body").on("click", "#p2", (e) => {
        $(".receiptcheckout").append(`<section class="items" id="delP2">
                <section class="itemName">${$(".nameP2").text()}</section>
                <section class="itemQuantity">${$(".post2QtyCart").val()}</section>
                    <section class="itemPrice"> @ $${($("#p2Price").val())} each</section>
                    <section>$${post2Total}.00</section>
                     </section>`);
    });
    // End Add Poster 2
    // Add Poster 3
    $("body").on("click", "#p3", (e) => {
        $(".receiptcheckout").append(`<section class="items" id="delP3">
                        <section class="itemName">${$(".nameP3").text()}</section>
                        <section class="itemQuantity">${$(".post3QtyCart").val()}</section>
                            <section class="itemPrice"> @ $${($("#p3Price").val())} each</section>
                            <section>$${post3Total}.00</section>
                            </section>`);
    });
    // End Add Poster 3
    // Add Tix 1
    $("body").on("click", "#tickets1", (e) => {
        $(".receiptcheckout").append(`<section class="items" id="delTix1">
                            <section class="itemName">${$(".nameTix1").text()}</section>
                            <section class="itemQuantity">${$(".tix1QtyCart").val()}</section>
                                <section class="itemPrice"> @ $${($("#tix1Price").val())} each</section>
                                <section>$${tix1Total}.00</section>
                            </section>`);
    });
    // End Add Tix 1
    // Add Tix 2
    $("body").on("click", "#tickets2", (e) => {
        $(".receiptcheckout").append(`<section class="items" id="delTix2">
                        <section class="itemName">${$(".nameTix2").text()}</section>
                        <section class="itemQuantity">${$(".tix2QtyCart").val()}</section>
                            <section class="itemPrice"> @ $${($("#tix2Price").val())} each</section>
                            <section>$${tix2Total}.00</section>
            </section>`);
    });
    // End Checkout Items
    // Start Cash/Credit Fields
    $("body").on("click", ".cash", (e) => {
        $(".cash-form").show();
    });
    $("body").on("click", ".credit", (e) => {
        $(".credit-form").show();
    });
    $("body").on("click", "#place-order", (e) => {
        let pmtTotal = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        if ($(".ccnumber").val() > 0 || ($(".cashInput").val() - pmtTotal) >= 0) {
            $(".hideReceipt").toggle();
            $(".hidecheckout").toggle();
        } else {
            alert("Please Enter a Valid Payment Method")
        }
    });
    $("body").on("click", ".pmtBtn", (e) => {
        let pmtTotal = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $(".changeDue").text(null);
        let change = (($(".cashInput").val() - pmtTotal)).toFixed(2)
        $(".changeDue").append(`$${change}`);
    });
    // End Cash/Credit Fields
    //Adjusting Subtotal in cart when removing items
    $("body").on("click", ".burClear", (e) => {
        let cartSub = ($("#cartsubtotal").text());
        let cartSubint = cartSub.slice(1);
        let taxVar = cdTotal * .06 + vinylTotal * .06 + blkShirtTotal * .06 + burShirtTotal * .06 + whiteShirtTotal * .06 + post1Total * .06 + post2Total * .06 + post3Total * .06 + cymTotal * .06 + hatTotal * .06 + tix1Total * .06 + tix2Total * .06;
        let taxTotalVar = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $("#cartsubtotal").text(`$${cartSubint - burShirtTotal}`);
        $(".subtotal").text(`$${cartSubint - burShirtTotal}`);
        $(".receiptSubtotal").text(`$${cartSubint - burShirtTotal}`);
        $("#delBur").remove();
        let newtax = (taxVar - (burShirtTotal * 0.06 ));
        $(".tax").text(newtax.toFixed(2));
        $(".receiptTax").text(newtax.toFixed(2));
        let newTaxTotal = (taxTotalVar - (burShirtTotal * 1.06 ));
        $(".taxTotal").text(newTaxTotal.toFixed(2));
        $(".receiptTaxTotal").text(newTaxTotal.toFixed(2));
        $(".amtDue").text(newTaxTotal.toFixed(2));
        let newChange = ($(".cashInput").val() - newTaxTotal).toFixed(2)
        $(".changeDue").text(`$${newChange}`);
    });
    $("body").on("click", ".blkClear", (e) => {
        let cartSub = ($("#cartsubtotal").text());
        let cartSubint = cartSub.slice(1);
        let taxVar = cdTotal * .06 + vinylTotal * .06 + blkShirtTotal * .06 + burShirtTotal * .06 + whiteShirtTotal * .06 + post1Total * .06 + post2Total * .06 + post3Total * .06 + cymTotal * .06 + hatTotal * .06 + tix1Total * .06 + tix2Total * .06;
        let taxTotalVar = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $("#cartsubtotal").text(`$${cartSubint - blkShirtTotal}`);
        $(".subtotal").text(`$${cartSubint - blkShirtTotal}`);
        $(".receiptSubtotal").text(`$${cartSubint - blkShirtTotal}`);
        $("#delBlk").remove();
        let newtax = (taxVar - (blkShirtTotal * 0.06 ));
        $(".tax").text(newtax.toFixed(2));
        $(".receiptTax").text(newtax.toFixed(2));
        let newTaxTotal = (taxTotalVar - (blkShirtTotal * 1.06 ));
        $(".taxTotal").text(newTaxTotal.toFixed(2));
        $(".receiptTaxTotal").text(newTaxTotal.toFixed(2));
        $(".amtDue").text(newTaxTotal.toFixed(2));
        let newChange = ($(".cashInput").val() - newTaxTotal).toFixed(2)
        $(".changeDue").text(`$${newChange}`);
    });
    $("body").on("click", ".whtClear", (e) => {
        let cartSub = ($("#cartsubtotal").text());
        let cartSubint = cartSub.slice(1);
        let taxVar = cdTotal * .06 + vinylTotal * .06 + blkShirtTotal * .06 + burShirtTotal * .06 + whiteShirtTotal * .06 + post1Total * .06 + post2Total * .06 + post3Total * .06 + cymTotal * .06 + hatTotal * .06 + tix1Total * .06 + tix2Total * .06;
        let taxTotalVar = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $("#cartsubtotal").text(`$${cartSubint - whiteShirtTotal}`);
        $(".subtotal").text(`$${cartSubint - whiteShirtTotal}`);
        $(".receiptSubtotal").text(`$${cartSubint - whiteShirtTotal}`);
        $("#delWht").remove();
        let newtax = (taxVar - (whiteShirtTotal * 0.06 ));
        $(".tax").text(newtax.toFixed(2));
        $(".receiptTax").text(newtax.toFixed(2));
        let newTaxTotal = (taxTotalVar - (whiteShirtTotal * 1.06 ));
        $(".taxTotal").text(newTaxTotal.toFixed(2));
        $(".receiptTaxTotal").text(newTaxTotal.toFixed(2));
        $(".amtDue").text(newTaxTotal.toFixed(2));
        let newChange = ($(".cashInput").val() - newTaxTotal).toFixed(2)
        $(".changeDue").text(`$${newChange}`);
    });
    $("body").on("click", ".hatClear", (e) => {
        let cartSub = ($("#cartsubtotal").text());
        let cartSubint = cartSub.slice(1);
        let taxVar = cdTotal * .06 + vinylTotal * .06 + blkShirtTotal * .06 + burShirtTotal * .06 + whiteShirtTotal * .06 + post1Total * .06 + post2Total * .06 + post3Total * .06 + cymTotal * .06 + hatTotal * .06 + tix1Total * .06 + tix2Total * .06;
        let taxTotalVar = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $("#cartsubtotal").text(`$${cartSubint - hatTotal}`);
        $(".subtotal").text(`$${cartSubint - hatTotal}`);
        $(".receiptSubtotal").text(`$${cartSubint - hatTotal}`);
        $("#delHat").remove();
        let newtax = (taxVar - (hatTotal * 0.06 ));
        $(".tax").text(newtax.toFixed(2));
        $(".receiptTax").text(newtax.toFixed(2));
        let newTaxTotal = (taxTotalVar - (hatTotal * 1.06 ));
        $(".taxTotal").text(newTaxTotal.toFixed(2));
        $(".receiptTaxTotal").text(newTaxTotal.toFixed(2));
        $(".amtDue").text(newTaxTotal.toFixed(2));
        let newChange = ($(".cashInput").val() - newTaxTotal).toFixed(2)
        $(".changeDue").text(`$${newChange}`);
    });
    $("body").on("click", ".cymClear", (e) => {
        let cartSub = ($("#cartsubtotal").text());
        let cartSubint = cartSub.slice(1);
        let taxVar = cdTotal * .06 + vinylTotal * .06 + blkShirtTotal * .06 + burShirtTotal * .06 + whiteShirtTotal * .06 + post1Total * .06 + post2Total * .06 + post3Total * .06 + cymTotal * .06 + hatTotal * .06 + tix1Total * .06 + tix2Total * .06;
        let taxTotalVar = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $("#cartsubtotal").text(`$${cartSubint - cymTotal}`);
        $(".subtotal").text(`$${cartSubint - cymTotal}`);
        $(".receiptSubtotal").text(`$${cartSubint - cymTotal}`);
        $("#delCym").remove();
        let newtax = (taxVar - (cymTotal * 0.06 ));
        $(".tax").text(newtax.toFixed(2));
        $(".receiptTax").text(newtax.toFixed(2));
        let newTaxTotal = (taxTotalVar - (cymTotal * 1.06 ));
        $(".taxTotal").text(newTaxTotal.toFixed(2));
        $(".receiptTaxTotal").text(newTaxTotal.toFixed(2));
        $(".amtDue").text(newTaxTotal.toFixed(2));
        let newChange = ($(".cashInput").val() - newTaxTotal).toFixed(2)
        $(".changeDue").text(`$${newChange}`);
    });
    $("body").on("click", ".p1Clear", (e) => {
        let cartSub = ($("#cartsubtotal").text());
        let cartSubint = cartSub.slice(1);
        let taxVar = cdTotal * .06 + vinylTotal * .06 + blkShirtTotal * .06 + burShirtTotal * .06 + whiteShirtTotal * .06 + post1Total * .06 + post2Total * .06 + post3Total * .06 + cymTotal * .06 + hatTotal * .06 + tix1Total * .06 + tix2Total * .06;
        let taxTotalVar = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $("#cartsubtotal").text(`$${cartSubint - post1Total}`);
        $(".subtotal").text(`$${cartSubint - post1Total}`);
        $(".receiptSubtotal").text(`$${cartSubint - post1Total}`);
        $("#delP1").remove();
        let newtax = (taxVar - (post1Total * 0.06 ));
        $(".tax").text(newtax.toFixed(2));
        $(".receiptTax").text(newtax.toFixed(2));
        let newTaxTotal = (taxTotalVar - (post1Total * 1.06 ));
        $(".taxTotal").text(newTaxTotal.toFixed(2));
        $(".receiptTaxTotal").text(newTaxTotal.toFixed(2));
        $(".amtDue").text(newTaxTotal.toFixed(2));
        let newChange = ($(".cashInput").val() - newTaxTotal).toFixed(2)
        $(".changeDue").text(`$${newChange}`);
    });
    $("body").on("click", ".p2Clear", (e) => {
        let cartSub = ($("#cartsubtotal").text());
        let cartSubint = cartSub.slice(1);
        let taxVar = cdTotal * .06 + vinylTotal * .06 + blkShirtTotal * .06 + burShirtTotal * .06 + whiteShirtTotal * .06 + post1Total * .06 + post2Total * .06 + post3Total * .06 + cymTotal * .06 + hatTotal * .06 + tix1Total * .06 + tix2Total * .06;
        let taxTotalVar = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $("#cartsubtotal").text(`$${cartSubint - post2Total}`);
        $(".subtotal").text(`$${cartSubint - post2Total}`);
        $(".receiptSubtotal").text(`$${cartSubint - post2Total}`);
        $("#delP2").remove();
        let newtax = (taxVar - (post2Total * 0.06 ));
        $(".tax").text(newtax.toFixed(2));
        $(".receiptTax").text(newtax.toFixed(2));
        let newTaxTotal = (taxTotalVar - (post2Total * 1.06 ));
        $(".taxTotal").text(newTaxTotal.toFixed(2));
        $(".receiptTaxTotal").text(newTaxTotal.toFixed(2));
        $(".amtDue").text(newTaxTotal.toFixed(2));
        let newChange = ($(".cashInput").val() - newTaxTotal).toFixed(2)
        $(".changeDue").text(`$${newChange}`);
    });
    $("body").on("click", ".p3Clear", (e) => {
        let cartSub = ($("#cartsubtotal").text());
        let cartSubint = cartSub.slice(1);
        let taxVar = cdTotal * .06 + vinylTotal * .06 + blkShirtTotal * .06 + burShirtTotal * .06 + whiteShirtTotal * .06 + post1Total * .06 + post2Total * .06 + post3Total * .06 + cymTotal * .06 + hatTotal * .06 + tix1Total * .06 + tix2Total * .06;
        let taxTotalVar = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $("#cartsubtotal").text(`$${cartSubint - post3Total}`);
        $(".subtotal").text(`$${cartSubint - post3Total}`);
        $(".receiptSubtotal").text(`$${cartSubint - post3Total}`);
        $("#delP3").remove();
        let newtax = (taxVar - (post3Total * 0.06 ));
        $(".tax").text(newtax.toFixed(2));
        $(".receiptTax").text(newtax.toFixed(2));
        let newTaxTotal = (taxTotalVar - (post3Total * 1.06 ));
        $(".taxTotal").text(newTaxTotal.toFixed(2));
        $(".receiptTaxTotal").text(newTaxTotal.toFixed(2));
        $(".amtDue").text(newTaxTotal.toFixed(2));
        let newChange = ($(".cashInput").val() - newTaxTotal).toFixed(2)
        $(".changeDue").text(`$${newChange}`);
    });
    $("body").on("click", ".tix1Clear", (e) => {
        let cartSub = ($("#cartsubtotal").text());
        let cartSubint = cartSub.slice(1);
        let taxVar = cdTotal * .06 + vinylTotal * .06 + blkShirtTotal * .06 + burShirtTotal * .06 + whiteShirtTotal * .06 + post1Total * .06 + post2Total * .06 + post3Total * .06 + cymTotal * .06 + hatTotal * .06 + tix1Total * .06 + tix2Total * .06;
        let taxTotalVar = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $("#cartsubtotal").text(`$${cartSubint - tix1Total}`);
        $(".subtotal").text(`$${cartSubint - tix1Total}`);
        $(".receiptSubtotal").text(`$${cartSubint - tix1Total}`);
        $("#delTix1").remove();
        let newtax = (taxVar - (tix1Total * 0.06 ));
        $(".tax").text(newtax.toFixed(2));
        $(".receiptTax").text(newtax.toFixed(2));
        let newTaxTotal = (taxTotalVar - (tix1Total * 1.06 ));
        $(".taxTotal").text(newTaxTotal.toFixed(2));
        $(".receiptTaxTotal").text(newTaxTotal.toFixed(2));
        $(".amtDue").text(newTaxTotal.toFixed(2));
        let newChange = ($(".cashInput").val() - newTaxTotal).toFixed(2)
        $(".changeDue").text(`$${newChange}`);
    });
    $("body").on("click", ".tix2Clear", (e) => {
        let cartSub = ($("#cartsubtotal").text());
        let cartSubint = cartSub.slice(1);
        let taxVar = cdTotal * .06 + vinylTotal * .06 + blkShirtTotal * .06 + burShirtTotal * .06 + whiteShirtTotal * .06 + post1Total * .06 + post2Total * .06 + post3Total * .06 + cymTotal * .06 + hatTotal * .06 + tix1Total * .06 + tix2Total * .06;
        let taxTotalVar = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $("#cartsubtotal").text(`$${cartSubint - tix2Total}`);
        $(".subtotal").text(`$${cartSubint - tix2Total}`);
        $(".receiptSubtotal").text(`$${cartSubint - tix2Total}`);
        $("#delTix2").remove();
        let newtax = (taxVar - (tix2Total * 0.06 ));
        $(".tax").text(newtax.toFixed(2));
        $(".receiptTax").text(newtax.toFixed(2));
        let newTaxTotal = (taxTotalVar - (tix2Total * 1.06 ));
        $(".taxTotal").text(newTaxTotal.toFixed(2));
        $(".receiptTaxTotal").text(newTaxTotal.toFixed(2));
        $(".amtDue").text(newTaxTotal.toFixed(2));
        let newChange = ($(".cashInput").val() - newTaxTotal).toFixed(2)
        $(".changeDue").text(`$${newChange}`);
    });
    $("body").on("click", ".cdClear", (e) => {
        let cartSub = ($("#cartsubtotal").text());
        let cartSubint = cartSub.slice(1);
        let taxVar = cdTotal * .06 + vinylTotal * .06 + blkShirtTotal * .06 + burShirtTotal * .06 + whiteShirtTotal * .06 + post1Total * .06 + post2Total * .06 + post3Total * .06 + cymTotal * .06 + hatTotal * .06 + tix1Total * .06 + tix2Total * .06;
        let taxTotalVar = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $("#cartsubtotal").text(`$${cartSubint - cdTotal}`);
        $(".subtotal").text(`$${cartSubint - cdTotal}`);
        $(".receiptSubtotal").text(`$${cartSubint - cdTotal}`);
        $("#delCd").remove();
        let newtax = (taxVar - (cdTotal * 0.06 ));
        $(".tax").text(newtax.toFixed(2));
        $(".receiptTax").text(newtax.toFixed(2));
        let newTaxTotal = (taxTotalVar - (cdTotal * 1.06 ));
        $(".taxTotal").text(newTaxTotal.toFixed(2));
        $(".receiptTaxTotal").text(newTaxTotal.toFixed(2));
        $(".amtDue").text(newTaxTotal.toFixed(2));
        let newChange = ($(".cashInput").val() - newTaxTotal).toFixed(2)
        $(".changeDue").text(`$${newChange}`);
        
    });
    $("body").on("click", ".vinClear", (e) => {
        let cartSub = ($("#cartsubtotal").text());
        let cartSubint = cartSub.slice(1);
        let taxVar = cdTotal * .06 + vinylTotal * .06 + blkShirtTotal * .06 + burShirtTotal * .06 + whiteShirtTotal * .06 + post1Total * .06 + post2Total * .06 + post3Total * .06 + cymTotal * .06 + hatTotal * .06 + tix1Total * .06 + tix2Total * .06;
        let taxTotalVar = cdTotal * 1.06 + vinylTotal * 1.06 + blkShirtTotal * 1.06 + burShirtTotal * 1.06 + whiteShirtTotal * 1.06 + post1Total * 1.06 + post2Total * 1.06 + post3Total * 1.06 + cymTotal * 1.06 + hatTotal * 1.06 + tix1Total * 1.06 + tix2Total * 1.06
        $("#cartsubtotal").text(`$${cartSubint - vinylTotal}`);
        $(".subtotal").text(`$${cartSubint - vinylTotal}`);
        $(".receiptSubtotal").text(`$${cartSubint - vinylTotal}`);
        $("#delVinyl").remove();
        let newtax = (taxVar - (vinylTotal * 0.06 ));
        $(".tax").text(newtax.toFixed(2));
        $(".receiptTax").text(newtax.toFixed(2));
        let newTaxTotal = (taxTotalVar - (vinylTotal * 1.06 ));
        $(".taxTotal").text(newTaxTotal.toFixed(2));
        $(".receiptTaxTotal").text(newTaxTotal.toFixed(2));
        $(".amtDue").text(newTaxTotal.toFixed(2));
        let newChange = ($(".cashInput").val() - newTaxTotal).toFixed(2)
        $(".changeDue").text(`$${newChange}`);
    });
});
