//this var needs to set globally
var incorrectChars = "";
var countries = ["russia", "costa rica", "argentina", "mexico", "brazil", "saudi arabia", "korea republic", "germany", "spain", "portugal", "france", "belgium", "japan", "australia",
"egypt", "morocco", "nigeria", "senegal", "tunisia", "iran", "croatia", "denmark", "iceland", "poland", "serbia", "sweden", "switzerland", "panama", "columbia", "peru", "uruguay", "england"];

var videos = {
  "costa rica": "https://www.youtube.com/embed/itnXvsTDdp8?autoplay=1",
  "saudi arabia": "https://www.youtube.com/embed/JetdoFgiYfM?autoplay=1",
  "korea republic": "https://www.youtube.com/embed/yAJ4bjpl-dM?autoplay=1",
  egypt: "https://www.youtube.com/embed/PU4zmc-6alc?autoplay=1",
  argentina: "https://www.youtube.com/embed/uWPNg6PUq7Q?autoplay=1",
  russia: "https://www.youtube.com/embed/V15BYnSr0P8?autoplay=1",
  mexico: "https://www.youtube.com/embed/2dwnKBcH84Q?autoplay=1",
  brazil: "https://www.youtube.com/embed/G9OJhreMkow?autoplay=1",
  germany: "https://www.youtube.com/embed/qJs5ENXuzcg?autoplay=1",
  spain: "https://www.youtube.com/embed/dirc8CQo4ys?autoplay=1",
  portugal: "https://www.youtube.com/embed/c03lGwGUBEg?autoplay=1",
  france: "https://www.youtube.com/embed/QdjDbPvlXLc?autoplay=1",
  belgium: "https://www.youtube.com/embed/CuHmWVy8DUQ?autoplay=1",
  japan: "https://www.youtube.com/embed/A6m5Hqt3Qc8?autoplay=1",
  australia: "https://www.youtube.com/embed/1KObM0_s_Qc?autoplay=1",
  morocco: "https://www.youtube.com/embed/yd5FR_j08z0?autoplay=1",
  nigeria: "https://www.youtube.com/embed/1nbXacLQrXw?autoplay=1",
  senegal: "https://www.youtube.com/embed/sOOvKLvrX2A?autoplay=1",
  tunisia: "https://www.youtube.com/embed/KV2WpPMM90E?autoplay=1",
  iran: "https://www.youtube.com/embed/ComRJnVF6ZY?autoplay=1",
  croatia: "https://www.youtube.com/embed/ixsSqL-9LJU?autoplay=1",
  denmark: "https://www.youtube.com/embed/W1-69o-dRkE?autoplay=1",
  iceland: "https://www.youtube.com/embed/doGMX5Ik76k?autoplay=1",
  poland: "https://www.youtube.com/embed/x4NCcFyLhTc?autoplay=1",
  serbia: "https://www.youtube.com/embed/0kigjF2mzEg?autoplay=1",
  sweden: "https://www.youtube.com/embed/21i5RSAbBKM?autoplay=1",
  switzerland: "https://www.youtube.com/embed/o79XJtuQq5Y?autoplay=1",
  panama: "https://www.youtube.com/embed/2eGRbjOsxQA?autoplay=1",
  columbia: "https://www.youtube.com/embed/zZRjeHPoiRQ?autoplay=1",
  peru: "https://www.youtube.com/embed/XBML7RkYCgw?autoplay=1",
  uruguay: "https://www.youtube.com/embed/nu9cgDyE1nw?autoplay=1",
  england: "https://www.youtube.com/embed/mNi_mEo6JJE?autoplay=1"
};

var videoAttr = {
  width: "750",
  height: "410",
  frameborder: "0",
  allow: "autoplay; encrypted-media",
  allowfullscreen: "true"
}

var wins_span = document.querySelector('#win');
var countryTeam_span = document.querySelector('#country-selected');
var remainingGuesses_span = document.querySelector('#remaining-guesses');
var incorrectGuesses_span = document.querySelector('#incorrect-guesses');
var gameStatus = document.querySelector('#status');
var iframe = document.createElement('iframe');
var modalBody = document.querySelector('.modal-body');
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
            gameStatus.innerText = 'You Won!';

            //Set attribute for iframe by looping over videoAttr object
            for (key in videoAttr) {
              iframe.setAttribute(key, videoAttr[key])
            }

            //set video src for iframe
            for (key in videos) {
              if (key == randomCountrySelected) {
                var rawVideoURL = videos[key];
                iframe.setAttribute('src', rawVideoURL);
              }
            }
            modalBody.appendChild(iframe);

            //Trigger modal
            $('#statusModal').modal('show');
            //When modal is closed, set raw url to not autoplay
            $('#statusModal').on('hidden.bs.modal', function(e) {
              rawVideoURL = rawVideoURL.replace("?autoplay=1", "");
              iframe.setAttribute('src', rawVideoURL);
          });
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
        // //Set attribute for iframe by looping over videoAttr object
        // for (hostKey in videoAttr) {
        //   iframe.setAttribute(hostKey, videoAttr[hostKey])
        // }

        // iframe.setAttribute('src', videos['russia']);

        $('#statusModal').modal('show');
        // $('#statusModal').on('hidden.bs.modal', function(e) {
        //   hostVideoURL = hostVideoURL.replace("?autoplay=1", "");
        //   iframe.setAttribute('src', hostVideoURL);
        // });
        resetGame();
      }

    }
  } else {
    resetGame();
  }
}

document.onkeypress = checkAnswer;
