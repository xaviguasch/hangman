const getPuzzle = async (wordCount) => {
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }
}

// OLD VERSION
//
// const getPuzzleOld = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Unable to fetch puzzle')
//     }
//   }).then((data) => {
//     return data.puzzle
//   })
// }


// adding async/await
const getCountry = async (countryCode) => {
  const response = await fetch(`https://restcountries.eu/rest/v2/all`)
      if (response.status === 200) {      
        const data = await response.json()
        return data.find(((country) => country.alpha2Code === countryCode))
      } else {
        throw new Error('Unable to fetch the country')
      }
}


// adding async/await
const getLocation = async () => {
  const response = await fetch(`https://ipinfo.io/json?token=456f3ad10cca05`)
    if (response.status === 200) {            
      const data = await response.json()
      return data
    } else {
      throw new Error('Unable to get the current location')
    }
  }

const getCurrentCountry = async () => {
  const location = await getLocation()  
  const country = await getCountry(location.country)  
  return country
}



// const getCountry = (countryCode) => {
//   return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
//     if (response.status === 200) {      
//       return response.json()
//     } else {
//       throw new Error('Unable to fetch data')
//     }
//   }).then((data) => {        
//     return data.find(((country) => country.alpha2Code === countryCode))
//   })
// }


// const getLocation = () => {
//   return fetch(`http://ipinfo.io/json?token=456f3ad10cca05`).then((response) => {
//     if (response.status === 200) {            
//       return response.json()
//     } else {
//       throw new Error('Unable to fetch geolocation data')
//     }
//   })
// }










// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//   const countryRequest = new XMLHttpRequest()

//   countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       const country = data.find(((e) => e.alpha2Code === countryCode))
//       resolve(country)
//     } else if (e.target.readyState === 4) {
//       reject('There has been an error')
//     }
//   })
//   countryRequest.open('GET', `http://restcountries.eu/rest/v2/all`)
//   countryRequest.send()
// })














// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//   const request = new XMLHttpRequest() 

//   request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)      
//       resolve(data.puzzle)
//     } else if (e.target.readyState === 4) {
//       reject('An error has taken place')

//     }
//   })

//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//   request.send()

// })


// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//   const countryRequest = new XMLHttpRequest()

//   countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       const country = data.find(((e) => e.alpha2Code === countryCode))
//       resolve(country)
//     } else if (e.target.readyState === 4) {
//       reject('There has been an error')
//     }
//   })
//   countryRequest.open('GET', `http://restcountries.eu/rest/v2/all`)
//   countryRequest.send()
// })












// CALLBACKS

// const getPuzzle = (wordCount, callback) => {
//   const request = new XMLHttpRequest() 

//   request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       callback(undefined, data.puzzle)
//     } else if (e.target.readyState === 4) {
//       callback('An error has taken place', undefined)
      
//     }
//   })

//   request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//   request.send()
// }

// const getCountry = (countryCode, callback) => {

//   const countryRequest = new XMLHttpRequest()

//   countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       const country = data.find(((e) => e.alpha2Code === countryCode))
//       callback(undefined, country)
//     } else if (e.target.readyState === 4) {
//       callback('There has been an error', undefined)
//     }
//   })
//   countryRequest.open('GET', `http://restcountries.eu/rest/v2/all`)
//   countryRequest.send()
// }



// const getPuzzleSync = () => {
//   const request = new XMLHttpRequest() 
//   request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3', false)
//   request.send()

//   if (request.readyState === 4 && request.status === 200) {
//     const data = JSON.parse(request.responseText)
//     return data.puzzle
//   } else if (request.readyState === 4) {
//     throw new Error('Things did not go well!!!!')
//   }
// }