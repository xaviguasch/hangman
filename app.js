// Primitive value: string, number, boolean, null, undefined

// Objects: objects, arrays and functions. They are all objects




// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null


// const product = 'Computer'
// console.log(product);
// const otherProduct = new String('Phone')
// console.log(otherProduct);




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