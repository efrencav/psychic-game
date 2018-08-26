// psychic game javascript
// You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
// 3. Guess what letter I'm thinking of
// 4. Wins: (# of times the user has guessed the letter correctly)
// 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// 6. Guesses Left: (# of guesses left. This will update)
// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

// Variables
var letters = ["a", "e", "i", "o", "u"];
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var guessedLetters = [];

document.onkeyup = function(event) {
    var userGuess = event.key;
    guessedLetters.push(userGuess);
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    var reset = function() {
        guessesRemaining = 10;
        guessedLetters = [];
    }

  
    // user key inputs
    if (userGuess === computerGuess) {
        wins++;
        guessesRemaining = 9;
        alert("Yay, you won!");
    } else {
        guessesRemaining--;
    }
    if (guessesRemaining === 0) {
        losses++;
        guessesRemaining = 9;
        reset();
    }
    
    // Create variables that hold references to the places in the HTML where we want to display things.
    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesRemainingText = document.getElementById("guessesRemaining-text");

    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesRemainingText.textContent = "You have " + guessesRemaining + " guesses remaining.";
    directionsText.textContent = "Press any key to get started";
};