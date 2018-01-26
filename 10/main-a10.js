/*   Name:      Marius Busch
     Matrikel:  254565
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var A11_;
(function (A11_) {
    window.addEventListener("load", configuration);
    window.addEventListener("change", basket);
    var name;
    var strasse;
    var hNr;
    var ort;
    var plz;
    var mail;
    var zusatz;
    var label;
    var basketBaumart = [A11_.bA[0][0], "" + A11_.bA[0][1]];
    var basketStaender = [A11_.bB[0][0], "" + A11_.bB[0][1]];
    ;
    var basketBeleuchtung = [A11_.b[0][0], "" + A11_.b[0][1]];
    var basketSchmuck = [];
    var basketLieferopt = ["keine Lieferoption ausgewählt", "0"];
    let feedback = document.createElement("div");
    function configuration() {
        let baumart = document.getElementById("baumart");
        let selectBox = document.createElement("select");
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        baumart.appendChild(selectBox);
        for (let i = 0; i < A11_.posten.length; i++) {
            if (A11_.posten[i].art == "Baumart") {
                var opt = document.createElement("option");
                opt.innerText = A11_.posten[i].name;
                opt.id = "option" + i;
                selectBox.appendChild(opt);
            }
        }
        /*
        let staender: HTMLDivElement = <HTMLDivElement>document.getElementById("staender");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Staender") {
                var radioB: HTMLInputElement = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                staender.appendChild(radioB);

                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = posten[i].name;
                staender.appendChild(label);
            }
        }
        */
        let beleuchtung = document.getElementById("beleuchtung");
        let selectBox2 = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        for (let i = 0; i < A11_.posten.length; i++) {
            if (A11_.posten[i].art == "Beleuchtung") {
                var opt2 = document.createElement("option");
                opt2.innerText = A11_.posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }
        let staender = document.getElementById("staender");
        let selectBox3 = document.createElement("select");
        selectBox3.name = "SelectStaender";
        selectBox3.id = "selectStaender";
        staender.appendChild(selectBox3);
        for (let i = 0; i < A11_.posten.length; i++) {
            if (A11_.posten[i].art == "Staender") {
                var opt3 = document.createElement("option");
                opt3.innerText = A11_.posten[i].name;
                opt3.id = "option3." + i;
                selectBox3.appendChild(opt3);
            }
        }
        let schmuck = document.getElementById("schmuck");
        for (let i = 0; i < A11_.posten.length; i++) {
            if (A11_.posten[i].art == "Schmuck") {
                var checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuck.appendChild(checkB);
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = A11_.posten[i].name;
                schmuck.appendChild(label2);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "15";
                stepper.step = "1";
                schmuck.appendChild(stepper);
                var br = document.createElement("br");
                schmuck.appendChild(br);
            }
        }
        let data = document.getElementById("data");
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        data.appendChild(name);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Straße";
        strasse.pattern = "[a-zA-Z]{1,}";
        strasse.required = true;
        data.appendChild(strasse);
        hNr = document.createElement("input");
        hNr.type = "text";
        hNr.name = "DatenHausnummer";
        hNr.placeholder = "Hausnummer";
        hNr.pattern = "[0-9]{1,}";
        hNr.required = true;
        data.appendChild(hNr);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.pattern = "[a-zA-Z]{1,}";
        ort.required = true;
        data.appendChild(ort);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        data.appendChild(plz);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        data.appendChild(mail);
        let versand = document.getElementById("versand");
        for (let i = 0; i < A11_.posten.length; i++) {
            if (A11_.posten[i].art == "Lieferung") {
                var radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                versand.appendChild(radioB2);
                var label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = A11_.posten[i].name;
                versand.appendChild(label3);
            }
        }
        let button = document.getElementById("button");
        let submit = document.createElement("button");
        submit.type = "submit";
        submit.innerText = "BESTELLEN";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    function basket(_event) {
        let target = _event.target;
        let stepper = [];
        let checkBoxes = [];
        let gesamtpreis = 0;
        for (let i = 0; i < A11_.posten.length; i++) {
            console.log(_event.target);
            if (A11_.posten[i].art == "Schmuck") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            }
            if (target.value == A11_.posten[i].name && target.id == "selectBaumart") {
                basketBaumart[0] = A11_.posten[i].name;
                basketBaumart[1] = "" + A11_.posten[i].preis;
            }
            if (target.value == A11_.posten[i].name && target.id == "selectStaender") {
                basketStaender[0] = A11_.posten[i].name;
                basketStaender[1] = "" + A11_.posten[i].preis;
            }
            if (target.id == "radio2." + i) {
                basketLieferopt[0] = A11_.posten[i].name;
                basketLieferopt[1] = "" + A11_.posten[i].preis;
            }
            if (target.value == A11_.posten[i].name && target.id == "selectBeleuchtung") {
                basketBeleuchtung[0] = A11_.posten[i].name;
                basketBeleuchtung[1] = "" + A11_.posten[i].preis;
            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [A11_.posten[i].name, "" + (A11_.posten[i].preis * parseInt(stepper[i].value))];
            }
        }
        let korb = document.getElementById("korb");
        korb.innerHTML = "<span class='wk'>Warenkorb</span><hr>";
        korb.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + "€ <br>";
        korb.innerHTML += "Weihnachtsbaumständer: " + basketStaender[0] + " " + basketStaender[1] + "€ <br>";
        korb.innerHTML += "" + basketBeleuchtung[0] + " " + basketBeleuchtung[1] + "€ <br>";
        korb.innerHTML += " " + basketLieferopt[0] + " " + basketLieferopt[1] + "€ <br>";
        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketStaender[1]) + parseFloat(basketBeleuchtung[1]) + parseFloat(basketLieferopt[1]);
        for (let i = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(basketSchmuck[i][1]);
                korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "€ <br>";
            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + "€";
    }
    function handleMouseDown(_event) {
        feedback.innerText = " ";
        feedback.style.paddingBottom = "1em";
        if (name.checkValidity() == false || strasse.checkValidity() == false || hNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Das stimmt was nicht! Bitte überprüfe deine Daten...";
            feedback.style.color = "red";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Vielen Dank für Ihre Bestellung!";
            feedback.style.color = "green";
            document.body.appendChild(feedback);
        }
    }
})(A11_ || (A11_ = {}));
//# sourceMappingURL=main-a10.js.map