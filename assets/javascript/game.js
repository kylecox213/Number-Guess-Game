// variables for the game

var guess = 0;
var alphabet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
 "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"];

 
 
 
 
 
 var wins = 0;
 var losses = 0;
 var guesses = 9;

 var computer = alphabet[Math.floor(Math.random() * alphabet.length)];

 console.log(computerChoice)

 document.onkeypress = function(event) {
     var userGuess = event.key;
     if (userGuess === computerChoice) {
         wins++;
     } else {
        guesses--;
     }
     if (guesses === 0){
         losses++;
     }
    

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
    }

