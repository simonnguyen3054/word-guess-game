//this var needs to set globally
var incorrectChars = "";
var countries = ["russia", "costa rica", "argentina", "mexico", "brazil", "saudi arabia", "korea republic", "germany", "spain", "portugal", "france", "belgium", "japan", "australia",
"egypt", "morocco", "nigeria", "senegal", "tunisia", "iran", "croatia", "denmark", "iceland", "poland", "serbia", "sweden", "switzerland", "panama", "columbia", "peru", "uruguay"];

var wins_span = document.querySelector('#win');
var countryTeam_span = document.querySelector('#country-selected');
var remainingGuesses_span = document.querySelector('#remaining-guesses');
var incorrectGuesses_span = document.querySelector('#incorrect-guesses');
var gameStatus_span = document.querySelector('#game-status');
var gameStatus = document.querySelector('#status');
var randomCountryIndex = Math.floor(Math.random() * countries.length);
var randomCountrySelected = countries[randomCountryIndex];

//Function to hide all char
function hideCharacters(countryTeam) {
  var stringArr = countryTeam.split(" ");

  if(stringArr.length == 2){
    var blank1 = "";
    var blank2 = "";
    var string1 = stringArr[0];
    var string2 = stringArr[1];

    for (var i = 0; i < string1.length; i++) {
      blank1 = blank1.concat("_");
    }

    for (var j = 0; j < string2.length; j++) {
      blank2 = blank2.concat("_");
    }

    var blank =  blank1 + " " + blank2;
    return blank;

  } else {
    var string1 = stringArr[0];
    var blank1 = "";

    for (var i = 0; i < string1.length; i++) {
      blank1 = blank1.concat("_");
    }
    return blank1;
  }
}

function resetGame() {
  remainingGuesses = 10;
  remainingGuesses_span.innerText = remainingGuesses;

  randomCountryIndex = Math.floor(Math.random() * countries.length);
  randomCountrySelected = countries[randomCountryIndex];

  hiddenCountryName = hideCharacters(randomCountrySelected);
  countryTeam_span.innerText = hiddenCountryName;

  incorrectChars = ""
  incorrectGuesses_span.innerText = incorrectChars;

  gameStatus_span.innerHTML = "";
};

//show the win score
var wins = 0;
wins_span.innerText = wins;

//show the remaining guesses
var remainingGuesses = 10;
remainingGuesses_span.innerText = remainingGuesses;

//show the hidden country team
var hiddenCountryName = hideCharacters(randomCountrySelected);
    countryTeam_span.innerText = hiddenCountryName;

//Check answer function
function checkAnswer(event) {
  var userGuess = event.key;
  var letterIndices = [];

  if (hiddenCountryName !== randomCountrySelected) {
    //continue the game
    //answer correct
    for (var letterIndex = 0; letterIndex < randomCountrySelected.length; letterIndex++ ) {
      //If char is guessed correctly
      if(userGuess == randomCountrySelected[letterIndex]) {
        letterIndices.push(letterIndex);
        //function to replace char
        String.prototype.strReplace = function(index, letterToReplace) {
          return this.substr(0, index) + letterToReplace+ this.substr(index + letterToReplace.length);
        }

        //Take out letter at specific index and replace with correct char
        for (var a = 0; a < letterIndices.length; a++ ) {
          hiddenCountryName = hiddenCountryName.strReplace(letterIndices[a], userGuess);
        }
        countryTeam_span.innerText = hiddenCountryName;

        //increment win by 1
        if (hiddenCountryName == randomCountrySelected) {
          wins++;
          wins_span.innerText = wins;
          gameStatus.innerText = "You Won!";
          $('#statusModal').modal('show');
        }
      }
    }

    //Answered Incorrect
    if (randomCountrySelected.indexOf(userGuess) == -1 && incorrectChars.includes(userGuess) === false ) {

      incorrectChars = incorrectChars + userGuess;
      remainingGuesses = remainingGuesses - 1;
      remainingGuesses_span.innerText = remainingGuesses;
      incorrectGuesses_span.innerText = incorrectChars;

      //if guesses hit 0 restart the game
      if (remainingGuesses == 0) {
        gameStatus.innerText = "You Lost!";
        $('#statusModal').modal('show');
        resetGame();
      }

    }
  } else {
    resetGame();
  }
}

document.onkeypress = checkAnswer;
