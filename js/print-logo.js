if (window.location.search.match( /print-pdf/gi )) {
    Reveal.addEventListener( 'pdf-ready', function( event ) {
        var slidesNodes = document.querySelectorAll('.pdf-page');
        var logo = document.querySelector('.logo-sii');
        for (var i = 0; i < slidesNodes.length; i++) {
            if (typeof logo !== 'undefined') {
                var logoCopy = logo.cloneNode(true);
                slidesNodes[i].appendChild(logoCopy);
            }
        }
    });
}