
class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = [],
    this.status = 'playing'
  }

  getPuzzle() {
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

  makeGuess(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    
    if (this.status !== 'playing' ) {
      return
    }
    
    if (guess.length === 1 && isUnique) {
      this.guessedLetters.push(guess)
    } 
    if (isUnique && isBadGuess) {
      this.remainingGuesses--
    }
    this.calculateStatus()
  }

  calculateStatus() {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))
    if (this.remainingGuesses === 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }  
    
    return this.status
  }
  
  getStatusMessage() {
    if (this.status === 'playing') {
      return `You have ${this.remainingGuesses} guesses left.`    
    } else if (this.status === 'failed') {
      return `Nice try! The word was "${this.word.join('')}".`
    } else {
      return 'Great Work! You guessed the word.'
    }
  }
}



// const Hangman = function (word, remainingGuesses) {
//   this.word = word.toLowerCase().split('')
//   this.remainingGuesses = remainingGuesses
//   this.guessedLetters = [],
//   this.status = 'playing'

// }


// Hangman.prototype.getPuzzle = function () {
//   let result = ''
//   this.word.forEach((indLetter) => {
//     if (this.guessedLetters.includes(indLetter) || indLetter === '') {
//       result += indLetter    
//     } else {
//       result += '*'
//     }
//   })
//   return result  
// }

// Hangman.prototype.makeGuess = function (guess) {
//   guess = guess.toLowerCase()
//   const isUnique = !this.guessedLetters.includes(guess)
//   const isBadGuess = !this.word.includes(guess)
  
//   if (this.status !== 'playing' ) {
//     return
//   }

//   if (guess.length === 1 && isUnique) {
//     this.guessedLetters.push(guess)
//   } 
//   if (isUnique && isBadGuess) {
//     this.remainingGuesses--
//   }
//   this.calculateStatus()

// }

// Hangman.prototype.calculateStatus = function () {
//   const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

//   // OTHER WAY OF DOING IT
//   // const lettersUnguessed = this.word.filter((letter) => {
//   //   return !this.guessedLetters.includes(letter)
//   // })
  
//   // const finished = lettersUnguessed.length === 0

//   if (this.remainingGuesses === 0) {
//     this.status = 'failed'
//   } else if (finished) {
//     this.status = 'finished'
//   } else {
//     this.status = 'playing'
//   }  

//   return this.status
  

//   //------------------------------------------
//   // ALTERNATIVE SOLUTION
//   // const wordString = this.word.join('')
//   // if (this.remainingGuesses === 0) {
//   //   this.status = 'failed'
//   // }
//   // if(this.getPuzzle() === wordString) {
//   //   this.status = 'finished'    
//   // }
//   // return this.status
// }

// Hangman.prototype.getStatusMessage = function () {
//   if (this.status === 'playing') {
//     return `You have ${this.remainingGuesses} guesses left.`    
//   } else if (this.status === 'failed') {
//     return `Nice try! The word was "${this.word.join('')}".`
//   } else {
//     return 'Great Work! You guessed the word.'
//   }

// }






