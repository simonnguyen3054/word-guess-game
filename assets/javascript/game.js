// 3. Use key events to listen for the letters that your players will type.

// 4. Display the following on the page:

// 5. Press any key to get started!


// 6. Wins: (# of times user guessed the word correctly).

//    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

// 7. Number of Guesses Remaining: (# of guesses remaining for the user).

// 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// 9. After the user wins/loses the game should automatically choose another word and make the user play it.


//============================================//
//1) Problem: Prompt the user to start the game
//1) Solution: in html add div element "Press any key to get started!"

//1a) Problem: what are the initial values of the game when it starts.
//    Solution: Set initial value of a game in a function. Call the function when lose/win event takes place

// function startGame () {
//   document.querySelector('#win').innerText = 0;
//   document.querySelector('#name').innerText = "country";
//   document.querySelector('#remaining-guesses').innerText = 10;
// }

// document.onkeypress = startGame;

//2) Problem: Add the number of times user win
//2) Solution: First show default value is 0. Then increment 1 when user guess right.

// var wins = 0;
// function correctGuess() {
//   wins++;
//   document.querySelector('#win').innerText = wins;
// }

// document.onkeypress = correctGuess;

//3) Problem: Display the number of blank letters to fill in based on the letter number of the word
//3) Solution:
// - Select randomly the word from the array of words. Store the word in a variable
// - Loop through the word and replace with _ for each index of the string. Display _ on html

var countries = ["England", "France", "Brazil", "Russia", "Korea"];
var randomCountryIndex = Math.floor(Math.random() * countries.length);
var randomCountrySelected = countries[randomCountryIndex];

for (i=0; i < randomCountrySelected.length; i++){
  var underscore = randomCountrySelected[i].replace(randomCountrySelected[i], '_');
  document.getElementById('#country-selected').innerText = "hw"
  console.log(underscore);

}

//4) Problem: As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
//4) Solution: Use indexOf to determine if the letter exists. If letter exists (0). Replace _ with that letter.

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

