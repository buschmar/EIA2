/*   Name:       Marius Busch
     Matrikel:  256545
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var A10;
(function (A10) {
    A10.posten = [
        { art: "Baumart", name: "Nordmanntanne", preis: 39.99 },
        { art: "Baumart", name: "Fichte", preis: 34.99 },
        { art: "Baumart", name: "Kiefer", preis: 29.99 },
        { art: "Staender", name: "schwarz", preis: 14.99 },
        { art: "Staender", name: "silber", preis: 14.99 },
        { art: "Staender", name: "grün", preis: 14.99 },
        { art: "Beleuchtung", name: "Lichterkette", preis: 19.99 },
        { art: "Beleuchtung", name: "Kerzen", preis: 29.99 },
        { art: "Schmuck", name: "Kugel, rot", preis: 0.99 },
        { art: "Schmuck", name: "Kugel, blau", preis: 0.99 },
        { art: "Schmuck", name: "Kugel, silber", preis: 0.99 },
        { art: "Schmuck", name: "Kugel, gold", preis: 0.99 },
        { art: "Schmuck", name: "Stern, rot", preis: 1.49 },
        { art: "Schmuck", name: "Stern, silber", preis: 1.49 },
        { art: "Schmuck", name: "Stern, gold", preis: 1.49 },
        { art: "Schmuck", name: "Herz, rot", preis: 1.79 },
        { art: "Schmuck", name: "Herz, gold", preis: 1.79 },
        { art: "Schmuck", name: "Herz, silber", preis: 1.79 },
        { art: "Schmuck", name: "Glocke, silber", preis: 3.99 },
        { art: "Schmuck", name: "Glocke, gold", preis: 3.99 },
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 9.99 }
    ];
    A10.bA = [];
    A10.b = [];
    A10.bB = [];
    for (var i = 0; i < A10.posten.length; i++) {
        if (A10.posten[i].art == "Baumart") {
            var temp = [A10.posten[i].name, A10.posten[i].preis];
            A10.bA.push(temp);
        }
        if (A10.posten[i].art == "Beleuchtung") {
            var temp = [A10.posten[i].name, A10.posten[i].preis];
            A10.b.push(temp);
        }
        if (A10.posten[i].art == "Staender") {
            var temp = [A10.posten[i].name, A10.posten[i].preis];
            A10.bB.push(temp);
        }
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=data-a10.js.map