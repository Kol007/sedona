"use strict";
document.addEventListener("DOMContentLoaded", ready);
// ID modal-login-form
function ready() {

    var mainMenuMobile = document.querySelector( ".main-menu-mobile" );
    var closeButton = document.querySelector( ".main-menu__close" );

    console.log(closeButton);

    var closeButtonBars = closeButton.querySelectorAll("div");


    closeButton.addEventListener( "click", function( event ) {
        toggleMobileMenu();
        console.log(111);
    } );

    toggleMobileMenu();



    function toggleMobileMenu() {
        console.log( closeButtonBars );
        [].forEach.call( closeButtonBars, function(el) {
            console.log(el , ">>>");
            el.classList.toggle( "main-menu__close-bar" );
            el.classList.toggle( "main-menu__close-bar--opened" );

            mainMenuMobile.classList.toggle( "hidden" );//aa
        } );
    }
}


