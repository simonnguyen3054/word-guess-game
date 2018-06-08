var correctGuess = 0;
var countries = ["russia", "costa rica", "argentina", "mexico", "brazil", "saudi arabia", "south korea"];
var randomCountryIndex = Math.floor(Math.random() * countries.length);
var randomCountrySelected = countries[randomCountryIndex];

var wins_span = document.querySelector('#win');
var countryTeam_span = document.querySelector('#country-selected');
var remainingGuesses = document.querySelector('#remaining-guesses');

var hiddenCountryName = hideCharacters(randomCountrySelected);
countryTeam_span.innerText = hiddenCountryName;

// Start the game
  function startGame() {
    wins_span.innerText = 0;
    countryTeam_span.innerText = randomCountrySelected;
    remainingGuesses.innerText = 9;
  }

//Increment correct guess by 1
function correctGuess() {
  correctGuess++;
  wins_span.innerText = correctGuess;
}

//Hide the characters of the country team and turn to blanks
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

function checkAnswer(event) {
  var userGuess = event.key;
  var letterIndices = [];

  //Find index and loop through push to new array
  for (var letterIndex = 0; letterIndex < randomCountrySelected.length; letterIndex++ ) {
    if(userGuess == randomCountrySelected[letterIndex]) {
      letterIndices.push(letterIndex);
    }
  }

  //function to replace char
  String.prototype.strReplace = function(index, letterToReplace) {
    return this.substr(0, index) + letterToReplace+ this.substr(index + letterToReplace.length);
  }

  //Take out letter at specific index
  for (var a = 0; a < letterIndices.length; a++ ) {
    hiddenCountryName = hiddenCountryName.strReplace(letterIndices[a], userGuess);
  }
  countryTeam_span.innerText = hiddenCountryName;
}

console.log(randomCountrySelected);
document.onkeypress = checkAnswer;

//5) Problem: Number of Guesses Remaining: (# of guesses remaining for the user)
//6) Solution:
// - Count how many letters in the word and add 3 to it. Display the initial number of guesses the user is given.
// - Subtract 1 from the number of guesses everytime the user press a key until 0.
//When user hits 0, refresh with new game. Set all values back to initial values

//7) Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).
//7) Solution:
//  - Store each key that user guess in an array. Display the array to the html.
//  - Loop through the array to compare if each value of the index is equal to the key user entered. If value is equal then do not add the letter to the array and do not display in html

//8 - refresh the game if user guess all letters right in the word
//Set all values back to initial values

