window.addEventListener("load", function(){
    let wordsPL;
    wordsPL = ["rower","słowo","tależ"];
    let word;

    document.getElementById('log').value = "";

    var text
    var length
    let line = 1;
    document.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        text = document.getElementById('input').value
        length = text.length;

        if(wordsPL.includes(text)){
            console.log("correct word entered: "+text);
        }

        if(length === 5 && wordsPL.includes(text)){
        

            document.getElementById(line+"1").value = text.toUpperCase()[0];
            document.getElementById(line+"2").value = text.toUpperCase()[1];
            document.getElementById(line+"3").value = text.toUpperCase()[2];
            document.getElementById(line+"4").value = text.toUpperCase()[3];
            document.getElementById(line+"5").value = text.toUpperCase()[4];
            document.getElementById("input").value = "";

            let correctLetters = 0;
            if(document.getElementById(line+"1").value == word.toUpperCase()[0]) {document.getElementById(line+"1").classList.add("green"); correctLetters++};
            if(document.getElementById(line+"2").value == word.toUpperCase()[1]) {document.getElementById(line+"2").classList.add("green"); correctLetters++};
            if(document.getElementById(line+"3").value == word.toUpperCase()[2]) {document.getElementById(line+"3").classList.add("green"); correctLetters++};
            if(document.getElementById(line+"4").value == word.toUpperCase()[3]) {document.getElementById(line+"4").classList.add("green"); correctLetters++};
            if(document.getElementById(line+"5").value == word.toUpperCase()[4]) {document.getElementById(line+"5").classList.add("green"); correctLetters++};

            for(let i=0; i<5; i++){
                if(document.getElementById(line+"1").value.includes(word.toUpperCase()[i]) && !(document.getElementById(line+"1").value == word.toUpperCase()[0])) {document.getElementById(line+"1").classList.add("yellow");};
                if(document.getElementById(line+"2").value.includes(word.toUpperCase()[i]) && !(document.getElementById(line+"2").value == word.toUpperCase()[1])) {document.getElementById(line+"2").classList.add("yellow");};
                if(document.getElementById(line+"3").value.includes(word.toUpperCase()[i]) && !(document.getElementById(line+"3").value == word.toUpperCase()[2])) {document.getElementById(line+"3").classList.add("yellow");};
                if(document.getElementById(line+"4").value.includes(word.toUpperCase()[i]) && !(document.getElementById(line+"4").value == word.toUpperCase()[3])) {document.getElementById(line+"4").classList.add("yellow");};
                if(document.getElementById(line+"5").value.includes(word.toUpperCase()[i]) && !(document.getElementById(line+"5").value == word.toUpperCase()[4])) {document.getElementById(line+"5").classList.add("yellow");};
            }

            if(correctLetters>4){
                console.log("win: guessed");
                document.getElementById("input").disabled = "true";
            }

            if(line<6){
                line++;
            }else{
                console.log("lose: full");
                document.getElementById("input").disabled = "true";
            }

        }else if(length === 5 && !(wordsPL.includes(text))){
            log('Niepoprawne słowo: '+text);
            document.getElementById("input").value = "";
        }else if(!(length === 5)){
            log('Słowo musi mieć co najmniej 5 liter.')
        }
    }
    });

    function reset(){
        for(let i=1; i<7; i++){
        document.getElementById(i+"1").value = "";
        document.getElementById(i+"2").value = "";
        document.getElementById(i+"3").value = "";
        document.getElementById(i+"4").value = "";
        document.getElementById(i+"5").value = "";

        document.getElementById(i+"1").classList.remove("green");
        document.getElementById(i+"2").classList.remove("green");
        document.getElementById(i+"3").classList.remove("green");
        document.getElementById(i+"4").classList.remove("green");
        document.getElementById(i+"5").classList.remove("green");

        document.getElementById(i+"1").classList.remove("yellow");
        document.getElementById(i+"2").classList.remove("yellow");
        document.getElementById(i+"3").classList.remove("yellow");
        document.getElementById(i+"4").classList.remove("yellow");
        document.getElementById(i+"5").classList.remove("yellow");
        }

        document.getElementById("input").value = "";
        line = 1;
        document.getElementById("input").disabled = "";

        word = GenerateNewRandomWord();

        document.getElementById('log').value = "erdtwer"
    }


    function GenerateNewRandomWord(){
        const Gword = wordsPL[randomIntFromInterval(0, wordsPL.length-1)];
        console.log(Gword);
        return Gword
    }

    window.addEventListener("load", function(){
        reset();
    })

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    
    function log(log){
        document.getElementById('log').value = log
        setTimeout(function(){

        }, 5000);
    }
    


    let timeS;
    let timeMs;
    let time;

    setInterval(function(){
        timeS++;
        timeMs = 0;
    }, 1000);

    setInterval(function(){
        timeMs++;
    }, 1);

    setInterval(function(){
        time = timeS.toString()+timeMs.toString();
        document.getElementById('Timer').textContent = time;
    }, 1);


});