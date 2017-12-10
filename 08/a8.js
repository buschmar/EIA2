var A8;
(function (A8) {
    window.addEventListener("load", init);
    function init() {
        var anzahl = prompt("Hier die Anzahl der Vierecke eingeben:");
        var anzahlNr = parseInt(anzahl);
        var width = prompt("Hier die Breite in px eingeben:");
        var widthNr = parseInt(width);
        var height = prompt("Hier die Höhe in px eingeben:");
        var heightNr = parseInt(height);
        if (anzahlNr >= 10 && anzahlNr <= 100) {
            for (var i = 0; i < anzahlNr; i++) {
                draw(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 50%, 60%)", widthNr, heightNr);
            }
        }
        else {
            window.alert("Die Anzahl der Vierecke muss zwischen 10 und 100 liegen!");
            init();
        }
    }
    function draw(_x, _y, _color, _width, _height) {
        let div = document.createElement("div");
        div.style.width = _width.toString();
        div.style.height = _height.toString();
        div.style.marginLeft = _x.toString();
        div.style.marginTop = _y.toString();
        div.style.backgroundColor = _color;
        document.body.appendChild(div);
    }
})(A8 || (A8 = {}));
//# sourceMappingURL=a8.js.map