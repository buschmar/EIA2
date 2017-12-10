namespace A8 {
    
     window.addEventListener("load", init);
    
    function init(): void {
        var anzahl: string = prompt("Hier die Anzahl der Vierecke eingeben:");
        var anzahlNr: number = parseInt(anzahl);
        
        var width: string = prompt("Hier die Breite in px eingeben:");
        var widthNr: number = parseInt(width);

        var height: string = prompt("Hier die Höhe in px eingeben:");
        var heightNr: number = parseInt(height);

        if (anzahlNr >= 10 && anzahlNr <= 100) {
            for (var i: number = 0; i < anzahlNr; i++) {
                draw(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 50%, 60%)", widthNr, heightNr);
            }
        } else {
            window.alert("Die Anzahl der Vierecke muss zwischen 10 und 100 liegen!");
            init();

        }
    }

    function draw(_x: number, _y: number, _color: string, _width: number, _height: number): void {

        let div: HTMLDivElement = document.createElement("div");
        div.style.width = _width.toString();
        div.style.height = _height.toString();
        div.style.marginLeft = _x.toString(); 
        div.style.marginTop = _y.toString();
        div.style.backgroundColor = _color;
        document.body.appendChild(div);
    }
}