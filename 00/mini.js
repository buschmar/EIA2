function hallo() {
    var eingabe = prompt("Hey, ich bin Marius! Wie ist dein Name?", "");
    if (eingabe != null) {
        document.getElementById("whatsup").innerHTML =
            "Sehr erfreut, " + eingabe + "! ";
    }
}
