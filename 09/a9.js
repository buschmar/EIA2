var A9;
(function (A9) {
    window.addEventListener("load", init);
    window.addEventListener("keydown", handleKeydown);
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let letter = "";
    let clickedLetter;
    function init(_event) {
        for (let i = 0; i < alphabet.length; i++) {
            let letter = document.createElement("div");
            letter.style.width = "2em";
            letter.style.height = "1.5em";
            letter.style.border = "0.1em solid black";
            letter.style.margin = "0.05em";
            letter.style.paddingTop = "0.5em";
            letter.style.textAlign = "center";
            letter.style.display = "inline-block";
            letter.innerText = alphabet[i];
            letter.id = alphabet[i].toLowerCase();
            letter.className = "letterboxes";
            letter.addEventListener("mousedown", handleClick);
            document.body.appendChild(letter);
        }
        let textBackground = document.createElement("div");
        textBackground.style.width = "59.5em";
        textBackground.style.height = "30em";
        textBackground.style.backgroundImage = "url('erpresserbrief.jpg')";
        textBackground.addEventListener("mousedown", writeLetter);
        document.body.appendChild(textBackground);
    }
    function writeLetter(_event) {
        let write = document.createElement("div");
        if (letter == "")
            return;
        write.innerText = letter;
        write.style.fontSize = "3em";
        write.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 70%, 60%)";
        write.style.position = "absolute";
        write.style.left = 0 + _event.pageX + "px";
        write.style.top = 0 + _event.pageY + "px";
        write.addEventListener("mousedown", handleClickDelete);
        document.body.appendChild(write);
        let clickedLetter = document.getElementById(letter.toLowerCase());
        clickedLetter.style.color = "red";
        clickedLetter.style.border = "0.1em solid red";
        letter = "";
    }
    function handleClick(_event) {
        if (letter == "") {
            let clicked = _event.target;
            clicked.style.border = "0.1em solid red";
            clicked.style.color = "red";
            letter = clicked.id.toUpperCase();
        }
    }
    function handleKeydown(_event) {
        if (alphabet.indexOf(_event.key.toUpperCase()) != -1) {
            let s = document.getElementById(_event.key);
            s.style.color = "red";
            s.style.border = "0.1em solid red";
            letter = _event.key.toUpperCase();
        }
    }
    function handleClickDelete(_event) {
        if (_event.altKey == false)
            return;
        else {
            let remove = _event.target;
            document.body.removeChild(remove);
        }
    }
})(A9 || (A9 = {}));
//# sourceMappingURL=a9.js.map