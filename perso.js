// Evite les conflit en cas d'utilisation d'autres bibliothèques js
// @voir http://codeimpossible.com/2010/01/13/solving-document-ready-is-not-a-function-and-other-problems/
(function ($) {
    $(document).ready(function () {

        /* ------------------------------------------------------------ */
        /*  Rajout de fonctions pour obtenir un fonctionnement correct  */
        /* ------------------------------------------------------------ */
        // Evite la redirection au clic sur les items de configuration des boxs des boxs
        var boutonsConfigurationBox = $(this).find("div[id^='box_admin_']").find('a');
        boutonsConfigurationBox.click(function (event) {
            event.preventDefault();
        });

        /* ------------------------------------------------------------ */
        /* Remplacement des vieilles fonctions qui plantent avec jQuery */
        /* ------------------------------------------------------------ */
        // Affiche (au survol de la souris) les items permettant d'éditer les box
        box_show_admin = function (i) {
            $('#box_admin_' + i).css('display', 'block');
        };

        // Cache (quand la souris quitte le survol) les items permettant d'éditer les box
        box_hide_admin = function (i) {
            $('#box_admin_' + i).css('display', 'none');
        };

        // Vérifie que les requêtes envoyées par les clicks ont fonctionné
        // Si oui, recharge la page
        // Si non, affiche un message d'erreur
        do_nothing = function (msg, i) {
            if (msg === 'RELOAD') {
                // TODO décommenter ça
//                window.location.reload();
                console.log('reload');
                die();
            } else {
                if (msg !== 'ok') {
                    console.log("Une erreur s'est produite :");
                    console.debug(msg);
                    alert("Une erreur s\'est produite : " + msg);
                } else {
                    $("#box_" + i).hide();
                }
            }
        };

        // Détruit une box
        box_kill = function (i) {
            $.ajax({
                url: 'http://testing.karmaos.com/box/delete/' + i,
                // TODO échanger les URLS
//                url: '/box/delete/' + i,
                data: 'toto=titi&tutu=tata',
                context: document.body
            }).complete(function (msg) {
                do_nothing(msg, i);
            }).done(function (json) {
                $(this).addClass("done");
            });
        };

        // Affiche la configuration de la box
        // Ouvre la modification des widgets dans les colonnes au clic sur le petit (?)
        show_z2 = function (url) {
            // TODO : enlever cette ligne (permet de récupérer le truc correctement)
            url = 'http://testing.karmaos.com/box/get_conf/3106';
            //	$('page').style.opacity = .5;
            $('body_z2').css('display', 'block');

            $.ajax({
                url: url,
                data: 'toto=titi&tutu=tata',
                context: document.body
            }).complete(function (msg) {
                do_nothing(msg, i);
            }).done(function (json) {
                $(this).addClass("done");
            });
        };

        // TODO remove it, for testing
        $("a").click(function() {
           console.debug(this) ;
        });
    });
})(jQuery);