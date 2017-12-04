namespace A7 {
    
        interface StudentData {
        matrikelNr: number;
        name: string;
        surname: string;
        age: number;
        sex: boolean;
        comment: string;
    }
    let students: StudentData[] = [];
    let stop: boolean = false;

    while (!stop) {
        let action: string = prompt(    "Datensatz anlegen (n) oder Abfrage (a) oder Programm beenden (s).     (n), (a) oder (s) eingeben!");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (weiblich=0 oder männlich=1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        
        let splitString: string[] = _input.split(",", 6);
        for (let i: number = 0; i < splitString.length; i++) {
            splitString[i] = splitString[i].replace(/\ /, "");
            }
        if (Number.isNaN(parseInt(splitString[0]))) {
            return "Für Matrikelnummer wurde keine Nummer verwendet...";
        }else if (splitString[1] == "") {
            return "Für Name wurde kein Wort verwendet...";
        }else if (splitString[2] == "") {
            return "Für Vorname wurde kein Wort verwendet...";
        }else if (Number.isNaN(parseInt(splitString[3]))) {
            return "Für Alter wurde keine Nummer verwendet...";
        }else if (parseInt(splitString[4]) != 0 && parseInt(splitString[4]) != 1) {
            return "Für Geschlecht wurde nicht weiblich=0 oder männlich=1 verwendet...";
        }else if (splitString[5] == "") {
            return "Für KOmmentar wurde kein Wort</b verwendet...";
        }else {
            console.log(parseInt(splitString[0]));
            let student: StudentData = {
                matrikelNr: parseInt(splitString[0]),
                surname: splitString[1],
                name: splitString[2],
                age: parseInt(splitString[3]),
                sex: parseInt(splitString[4]) == 1,
                comment: splitString[5]
                };
            students.push(student);
            return "Data saved.";
            }
        
        
        
    }
    function queryData(_matrikel: number): string {
        for (let i: number = 0; i < students.length; i++) {
            if (students[i].matrikelNr == _matrikel) {
                let matrikelOut: string = "Matrikelnummer: " + students[i].matrikelNr;
                let surnameOut: string = "Name: " + students[i].surname;
                let nameOut: string = "Vorname: " + students[i].name;
                let ageOut: string = "Alter: " + students[i].age;
                let sexOut: string = "Geschlecht: ";
                if (students[i].sex) {
                    sexOut += "männlich";
                    } else sexOut += "weiblich";
                let commentOut: string = "Kommentar: " + students[i].comment;
        return matrikelOut + surnameOut + nameOut + ageOut + sexOut + commentOut;
    }
            }
        }
    
    
    
}