// Evite les conflit en cas d'utilisation d'autres bibliothèques js
// @voir http://codeimpossible.com/2010/01/13/solving-document-ready-is-not-a-function-and-other-problems/
(function ($) {
    $(document).ready(function () {

        /* ------------------------------------------------------------ */
        /* Remplacement des vieilles fonctions qui plantent avec jQuery */
        /* ------------------------------------------------------------ */
        box_show_admin = function (i) {
            $('#box_admin_' + i).css('display', 'block');
        };

        box_hide_admin = function (i) {
            $('#box_admin_' + i).css('display', 'none');
        };






    });
})(jQuery);