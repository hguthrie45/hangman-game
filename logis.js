//global variables
//arrays and variable for holding data
var randomwords = ["baseball", "hockey", "football", "doctor", "outsource"]

var selectedWord = "";

var lettersinWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongLetters = [];



//game counters

var winCount = 0;

var lossCount = 0;

var guessesleft = 9;






//functions

function startGame() {
    selectedWord = randomwords[Math.floor(Math.random() * randomwords.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //reset
    guessesleft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //populate blanks and success
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_")
    }

    //change html to reflect round conditions
    document.getElementById("wordtoGuess").innerHTML = blanksAndSuccesses.join("");
    document.getElementById("numGuesses").innerHTML = guessesleft;
    document.getElementById("lossCounter").innerHTML = lossCount;


    console.log(lettersinWord);
    console.log(selectedWord);
    console.log(numBlanks);


}

function checkLetters(letter) {
    //check if letter exist
    
    var isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        Things[i]
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
            alert("letter found");
        }
    }

    //check where in word letter exist
    if(isLetterInWord){
    for (var i = 0; i < numBlanks; i++) {
    	if(selectedWord[i]== letter) {
    		blanksAndSuccesses[i] = letter;
    	}
    }
    }
    else {
    	wrongLetters.push(letter);
    	numGuesses
    }
    conole.log(blanksAndSuccesses);



}

function roundcomplete(){
	conole.log("Win Count: " + winCount + "loss count " + lossCount + " guessesleft"
		+ guessesleft + )

	

	document.getElementById("guessesleft").innerHTML = guessesleft;
	document.getElementById('wordtoGuess').innerHTML = blanksAndSuccesses.join("");
	document.getElementById("wrongLetters").innerHTML= wrongLetters.join("");

	//if won
	if(isLetterInWord.toString() == blanksAndSuccesses.toString()){
		winCount++;
		alert("you won!")
	}
	//update win counter
	document.getElementById("winCounter").innerHTML = winCount;


}


startGame();
 else if (guessesleft == 0)[
   	lossCount++;
   	alert("you lost!")
   	]

   	document.getElementById("lossCounter").innerHTML = lossCount;

   	startGame();

//main process

//register keyclicks

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed;
    	roundcomplete();









    console.log(letterGuessed);



}