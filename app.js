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




getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})









// Making an HTTP request


/////////////
// const countryRequest = new XMLHttpRequest()
// const countryCode = 'ES'

// countryRequest.addEventListener('readystatechange', (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText)
//     const country = data.find(((e) => e.alpha2Code === countryCode))
//     console.log(country.name);
//   } else if (e.target.readyState === 4) {
//     console.log('An error has taken place');
//   }
// })
// countryRequest.open('GET', `http://restcountries.eu/rest/v2/all`)
// countryRequest.send()
