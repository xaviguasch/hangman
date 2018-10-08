// Create a method for making a guess
// 1. Should accept a character for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match


const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
}


Hangman.prototype.getPuzzle = function () {
  
  let result = ''
  this.word.forEach((indLetter) => {
    if (this.guessedLetters.includes(indLetter) || indLetter === '') {
      result += indLetter    
    } else {
      result += '*'
    }
  })
  return result  
}

const hangy1 = new Hangman('Cat', 2)
console.log(hangy1);
console.log(hangy1.getPuzzle())

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if (guess.length === 1 && isUnique) {
    this.guessedLetters.push(guess)
  } 

  if (isUnique && isBadGuess) {
    this.remainingGuesses--
  }
  
}


window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  console.log(guess);
  hangy1.makeGuess(guess)
  console.log(hangy1.getPuzzle()) 
  console.log(hangy1.remainingGuesses);
  console.log(hangy1.guessedLetters);
  

})







// const game2 = new Hangman('New Jersey', 4)

// console.log(game2.makeGuess('w'));
// console.log(game2.makeGuess('e'));
// console.log(game2.makeGuess('p'));


// console.log(game2.getPuzzle()) // *ew *e**e*

// // Print remaining guesses (should be 3)
// console.log(game2.remainingGuesses);
// console.log(game2.guessedLetters);










