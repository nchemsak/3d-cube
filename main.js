Element.prototype.hasClassName = function(a) {
    return new RegExp("(?:^|\\s+)" + a + "(?:\\s+|$)").test(this.className);
};

Element.prototype.addClassName = function(a) {
    if (!this.hasClassName(a)) {
        this.className = [this.className, a].join(" ");
    }
};

Element.prototype.removeClassName = function(b) {
    if (this.hasClassName(b)) {
        var a = this.className;
        this.className = a.replace(new RegExp("(?:^|\\s+)" + b + "(?:\\s+|$)", "g"), " ");

    }
};

Element.prototype.toggleClassName = function(a) {
    this[this.hasClassName(a) ? "removeClassName" : "addClassName"](a);
};

var init = function() {
    var box = document.querySelector('.container').children[0],
        showPanelButtons = document.querySelectorAll('#controls button'),
        panelClassName = 'show-front',

        onButtonClick = function(event) {
            box.removeClassName(panelClassName);
            panelClassName = event.target.className;
            box.addClassName(panelClassName);
        };

    for (var i = 0, len = showPanelButtons.length; i < len; i++) {
        showPanelButtons[i].addEventListener('click', onButtonClick, false);
    }

    document.getElementById('toggle-backface-visibility').addEventListener('click', function() {
        box.toggleClassName('panels-backface-invisible');
    }, false);

};

window.addEventListener('DOMContentLoaded', init, false);
