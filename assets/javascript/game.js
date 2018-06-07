var correctGuess = 0;
var countries = ["Viet Nam", "China", "North Korea", "France"];
var randomCountryIndex = Math.floor(Math.random() * countries.length);
var randomCountrySelected = countries[randomCountryIndex];

var wins_span = document.querySelector('#win');
var countryTeam_span = document.querySelector('#country-selected');
var remainingGuesses = document.querySelector('#remaining-guesses');

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
      blank2 = blank1.concat("_");
    }

    return blank1 + " " + blank2;
  } else {
    var string1 = stringArr[0];
    var blank1 = "";

    for (var i = 0; i < string1.length; i++) {
      blank1 = blank1.concat("_");
    }
    return blank1;
  }
}

var hiddenCountryName = hideCharacters(randomCountrySelected);
console.log(hiddenCountryName);
countryTeam_span.innerText = hiddenCountryName;

//4) Problem: As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
//4) Solution: Use indexOf to determine if the letter exists. If letter exists (0). Replace _ with that letter.

        // //What is the user guess?
        // var userGuess = "";

        // function checkAnswer(event) {
        //   //Store they key user press in the variable
        //   userGuess = event.key;

        //   //Store the letter index user selected if it exists in the country selected
        //   var letterIndex = randomCountrySelected.toLowerCase().indexOf(userGuess);
        //   // 'f is at index 0 in the country name'
        //   var correctLetter = randomCountrySelected[letterIndex];
        //   var currentString = document.querySelector('#country-selected').textContent;
        //   console.log(correctLetter);

        //   for (i = 0; i < currentString.length; i++) {
        //     if (currentString[i] == '_' && randomCountrySelected[i] == correctLetter) {
        //       var letterToReplace = currentString[i].replace(currentString[i], correctLetter);
        //       var selectedStrToReplace = document.querySelector('#country-selected');
        //       selectedStrToReplace.innerText = letterToReplace;
        //       console.log("correct")
        //     }

        //     //undefined is equal to not exist
        //     // if (correctLetter == undefined) {
        //     //   console.log("Select another letter")
        //     // }
        //   }

        // }

        // document.onkeypress = checkAnswer;

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

