



const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = [],
  this.status = 'Playing'

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
  this.calculateStatus()
}

Hangman.prototype.calculateStatus = function () {
  const finished = this.word.every((letter) => {
    return this.guessedLetters.includes(letter)
  })

  // OTHER WAY OF DOING IT
  // const lettersUnguessed = this.word.filter((letter) => {
  //   return !this.guessedLetters.includes(letter)
  // })
  
  // const finished = lettersUnguessed.length === 0

  if (this.remainingGuesses === 0) {
    this.status = 'failed'
  } else if (finished) {
    this.status = 'finished'
  } else {
    this.status = 'playing'
  }  

  return this.status
  

  //------------------------------------------
  // ALTERNATIVE SOLUTION
  // const wordString = this.word.join('')
  // if (this.remainingGuesses === 0) {
  //   this.status = 'failed'
  // }
  // if(this.getPuzzle() === wordString) {
  //   this.status = 'finished'    
  // }
  // return this.status
}







