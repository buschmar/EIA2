/*   Name:       Marius Busch
     Matrikel:  256545  
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */

namespace A11_ {
   
    export interface Bestellposten {
        art: string;
        name: string;
        preis: number;
    }

    export let posten: Bestellposten[] = [
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
    
    export let bA: string[][] = [];
    export let b: string[][] = [];
    export let bB: string[][] = [];
    
    for (var i: number = 0; i < posten.length; i++) {
       
        if (posten[i].art == "Baumart") {
           var temp: any = [posten[i].name, posten[i].preis]; 
           bA.push(temp);
        }

        if (posten[i].art == "Beleuchtung") {
           var temp: any = [posten[i].name, posten[i].preis]; 
           b.push(temp);
        }
        
     434edscx   if (posten[i].art == "Staender") {
           var temp: any = [posten[i].name, posten[i].preis]; 
           bB.push(temp);
        }
    }
}