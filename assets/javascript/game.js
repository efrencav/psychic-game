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
var guesses = 0;

document.onkeyup = function(event) {
    // key pressed
    var user = event.key;
    // computer guess and random number generator
    var computer = letters[Math.floor(Math.random() * letters.length)];
    // user key inputs
    if (user === "a") {
        wins++;
    } else {
        guesses++;
        losses++;
        console.log("Nice try, but it\'s not correct");
    }
    if (user === "e") {
        wins++;
    } else {
        guesses++;
        losses++;
        console.log("Nice try, but it\'s not correct");
    }
    if (user === "i") {
        wins++;
    } else {
        guesses++;
        losses++;
        console.log("Nice try, but it\'s not correct");
    }
    if (user === "o") {
        wins++;
    } else {
        guesses++;
        losses++;
        console.log("Nice try, but it\'s not correct");
    }
    if (user === "u") {
        wins++;
    } else {
        guesses++;
        losses++;
        console.log("Nice try, but it\'s not correct");
    }
   
    var usersChoice = document.getElementById("userChoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesText = document.getElementById("guesses-text");
}