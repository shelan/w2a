// Agency Theme JavaScript
console.log('hola');
(function($) {
    "use strict"; // Start of use strict

    $('.show-donor-box').on('click', function(event) {
        event.preventDefault();
        $('#donorbox-wrapper-wrapper').removeClass('hidden');
        $('#share-or-push').addClass('hidden');
    });

    $('.show-share-buttons').on('click', function(event) {
        event.preventDefault();
        $('#share-buttons').removeClass('hidden');
        $('#share-or-push').addClass('hidden');
    });

})(jQuery); // End of use strict
