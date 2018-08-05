" use strict";
$(document).ready(() => {
    let cdTotal = 0;
    let vinylTotal = 0;
    let burShirtTotal = 0;
    let blkShirtTotal = 0;
    let whiteShirtTotal = 0;
    let post1Total = 0;
    let post2Total = 0;
    let post3Total = 0;
    let cymTotal = 0;
    let hatTotal = 0;
    let tix1Total = 0;
    let tix2Total = 0;

    let total = () => {
        $(".total").text(null);
        $(".total").append(`$${cdTotal + vinylTotal + burShirtTotal + blkShirtTotal + whiteShirtTotal + post1Total + post2Total + post3Total + cymTotal + hatTotal + tix1Total + tix2Total}`)
    };

    let update = () => {
        if (vinylTotal > 0) {
            vinylTotal = $(".vinylQtyCart").val() * $("#vinylPrice").val();
        }
        if (cdTotal > 0) {
            cdTotal = $(".cdQtyCart").val() * $("#cdPrice").val();
        }
        if (burShirtTotal > 0) {
            burShirtTotal = $(".burShirtQtyCart").val() * $("#burShirtPrice").val();
        }
        if (blkShirtTotal > 0) {
            blkShirtTotal = $(".blkShirtQtyCart").val() * $("#blkShirtPrice").val();
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
                        tix1Total += $(".tix1Qty").val() *  $("#tix1Price").val();
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
                    tix2Total += $(".tix2Qty").val() *  $("#tix2Price").val();
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
    $("body").on("click", ".indvClear", (e) => {
        $(".indvClear").parent().empty();
    });
    $("body").on("click", "#checkoutbtn", (e) => {
        $(".itemName").text(function(i, itemtext) {
            console.log(itemtext, i);
            $(".columnscheckout").append(`<section class="itemnamecheckout">${itemtext}`);
        })
    });    
});