// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Respone - What was actually done


const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
})


// Promises

getPuzzle('2').then((puzzle) => {
  console.log(puzzle)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

getCurrentCountry().then((country) => {  
  console.log(country.name)
}).catch((error) => {
  console.log(error)
})






// OLD VERSIONS

// getLocation().then((location) => {  
//   return getCountry(location.country)
// }).then((country) => {
//   console.log(country.name)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })

  
// getCountry('US').then((country) => {
//     console.log(`Country name: ${country.name}`);
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })


// getCountry('ES').then((countryObj) => {
//   console.log(`Country name: ${countryObj.name}`);
// }, (err) => {
//   console.log(`Error: ${err}`)
// })


// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//   if (response.status === 200) {    
//     return response.json() // it returns a promise
//   } else {
//     throw new Error('Unable to fetch the puzzle')
//   }  
// }).then((data) => {
//   console.log(data.puzzle) 
// }).catch((err) => {
//   console.log(err)
// })



// Callbacks

// getCountry('MX', ((error, countryObj) => {
//   if (error) {
//     console.log(`Error: ${error}`)
//   } else {
//     console.log(`Country name: ${countryObj.name}`)
//   }
// }))





