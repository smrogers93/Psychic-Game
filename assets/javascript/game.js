var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;

    var guesses = document.getElementById("guesses-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var tiesText = document.getElementById("ties-text");
    var guessesLeftText = document.getElementById("guessesLeft-text");
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    document.onkeyup = function(event) {
      var userGuess = event.key;      
      if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

        if (userGuess === computerGuess) {
          wins++;
          guessesLeft + 10;
        } 
          else if (userGuess != computerGuess) {
          guesses++;
          guessesLeft--;
        } 
          if (guessesLeft = 0) {
          losses++;
          guessesLeft + 10;
        }

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guesses.textContent = "Guesses: " + userGuess;
      }
    };