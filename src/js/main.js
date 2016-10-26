"use strict";
document.addEventListener("DOMContentLoaded", ready);

function ready() {

    var mainMenuMobile = document.querySelector( ".main-menu-mobile" );
    var closeButton = document.querySelector( ".main-menu__close" );

    var closeButtonBars = closeButton.querySelectorAll("div");

    closeButton.addEventListener( "click", function( event ) {
        toggleMobileMenu();
    } );

    // Hide menu if JS available
    toggleMobileMenu();

    function toggleMobileMenu() {
        [].forEach.call( closeButtonBars, function(el) {
            el.classList.toggle( "main-menu__close-bar" );
            el.classList.toggle( "main-menu__close-bar--opened" );

            mainMenuMobile.classList.toggle( "hidden" );
        } );
    }

    var toggleBtnHotelOrderForm = document.querySelector( ".hotel-order__title" );
    var hotelOrderForm = document.querySelector( ".hotel-order__form" );

    // Hide Form if JS available
    hotelOrderForm.style.display = "none";

    toggleBtnHotelOrderForm.addEventListener( "click", ToggleHotelOrderForm);

    function ToggleHotelOrderForm() {
        if (hotelOrderForm.style.display === "block" || hotelOrderForm.style.display === "") {
            hotelOrderForm.style.display = "none";
            return ;
        }

        hotelOrderForm.style.display = "block";
    }
    
    var hotelOrderFormInputAdult = document.getElementById( "adult" );
    var adultPlusBtn = document.querySelector(".hotel-order__input-count--adult");
    var adultMinusBtn = adultPlusBtn.querySelector('.hotel-order__input-count-minus');
        adultPlusBtn = adultPlusBtn.querySelector('.hotel-order__input-count-plus');

    var hotelOrderFormInputChildren = document.getElementById( "children" );
    var childrenPlusBtn = document.querySelector(".hotel-order__input-count--children");
    var childrenMinusBtn = childrenPlusBtn.querySelector('.hotel-order__input-count-minus');
        childrenPlusBtn = childrenPlusBtn.querySelector('.hotel-order__input-count-plus');

    adultMinusBtn.addEventListener( "click", function () {
       PlusMinusFormCount(hotelOrderFormInputAdult, false);
    });

    adultPlusBtn.addEventListener( "click", function () {
        PlusMinusFormCount(hotelOrderFormInputAdult, true);
    } );

    childrenMinusBtn.addEventListener( "click", function () {
        PlusMinusFormCount(hotelOrderFormInputChildren, false);
    });

    childrenPlusBtn.addEventListener( "click", function () {
        PlusMinusFormCount(hotelOrderFormInputChildren, true);
    } );

    function PlusMinusFormCount(input, plus) {
        var value = input.value;

        if (value <= 1 && !plus) {
            input.value = "";
            input.focus();
            return;
        }

        if (value && !plus) {
            input.value--;
        }

        if (plus) {
            input.value++;
        //
        }
        input.focus();
    }
}


