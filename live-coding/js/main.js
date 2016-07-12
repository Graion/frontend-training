(function () {
    var menuToggleButton = document.getElementsByClassName('js-menu-toggle-button')[0];
    var menu = document.getElementsByClassName('js-menu')[0];
    menuToggleButton.onclick = function() {
        var currentDisplay = menu.style.display || 'none';
        if (currentDisplay === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    };
})();