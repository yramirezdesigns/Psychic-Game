function myPsychicGame (){

    var computerPicks = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10; 
    var guessesSoFar = " ";

    var winsElements = document.getElementById("winsNum");
    var lossesElements = document.getElementById("lossesNum");
    var guessesLeftElements = document.getElementById("guessesLeftNum");
    var guessesSoFarElements = document.getElementById("guessesSoFarLet");
     
    document.onkeyup = function(event){
        var userSelects = event.key;
        var compSelected = computerPicks[Math.floor(Math.random() * computerPicks.length)];
           
        // This is the win case
        if (userSelects === compSelected){
            wins++;
            winsElements.innerText=wins;
            reset();
            renderGuesses();
        }
        // This is the lost case
        else if (userSelects !== compSelected && guessesLeft === 0){
            losses++;   
            lossesElements.innerText=losses;
            reset();
            renderGuesses();
        }
        // This is the not losses but turns left case
        else {
            guessesLeft--;
            guessesSoFar += userSelects; // short hand for > guessesSoFar = guessesSoFar + userSelects. Taking my empty string "" or what ever is in the string and adding what user selected (event.key) and storing in with the new value.
            renderGuesses();
        }
    }   

    function reset (){
        guessesLeft = 10;
        guessesSoFar = " "; 
    }

    function renderGuesses (){
        guessesLeftElements.innerText=guessesLeft;
        guessesSoFarElements.innerText=guessesSoFar;
    }
}

myPsychicGame();