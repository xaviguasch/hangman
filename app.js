const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1



window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  render()
})

const render = () => {
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}



document.querySelector('#reset').addEventListener('click', startGame)
// SAME AS ABOVE
// document.querySelector('#reset').addEventListener('click', () => {
//   startGame()
// })


startGame()


// getPuzzle('2').then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {  
//   console.log(country.name)
// }).catch((error) => {
//   console.log(error)
// })






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





