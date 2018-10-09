// 1. Display the puzzle to the browser instead of the console
// 2. Display the guesses left to the browser instead of the console
// 3. Separate the Hangman definition from the rest of the app code (use app.js)




const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuesses




window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.getPuzzle()
  guessesEl.textContent = game1.remainingGuesses

 
  

})
///////////////////////////////











// const game2 = new Hangman('New Jersey', 4)

// console.log(game2.makeGuess('w'));
// console.log(game2.makeGuess('e'));
// console.log(game2.makeGuess('p'));


// console.log(game2.getPuzzle()) // *ew *e**e*

// // Print remaining guesses (should be 3)
// console.log(game2.remainingGuesses);
// console.log(game2.guessedLetters);










