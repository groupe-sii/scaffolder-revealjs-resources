(function() {
    var init = function() {
        var dot_nodes = document.querySelectorAll('pre code.lang-dot'),
        	i = 0,
			len = dot_nodes.length;
		for (i; i<len; i++) {
			var result = Viz(dot_nodes[i].innerText);
			dot_nodes[i].parentNode.outerHTML = result;
		}
    }

    if (Reveal.isReady()) {
        init();
    }
})();
