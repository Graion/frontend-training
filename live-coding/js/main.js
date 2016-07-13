(function () {
    var menuToggleButton = document.getElementsByClassName('js-menu-toggle-button')[0];
    var menu = document.getElementsByClassName('js-menu')[0];
    menuToggleButton.onclick = function() {
        menu.classList.toggle('visible');
    };
})();