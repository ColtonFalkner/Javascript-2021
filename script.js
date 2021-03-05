let country = 'United States of America'
const continent = 'North America'
let population = 328000000

console.log(country)
console.log(continent)
console.log(population)

const isIsland = false
let language = 'English'

// console.log(typeof country)
// console.log(typeof continent)
// console.log(typeof population)
// console.log(typeof isIsland)
// console.log(typeof language)

//  population = population / 2
// population++

// console.log(population >= 33000000)

// description = `${country} is in ${continent}, and it's ${population} speak ${language}`
// console.log(description)

// if (population >= 33000000) {
//   console.log("America's population is above average")
// } else {
//   console.log("America's population is below average")
// }

// console.log('9' - '5')

// console.log('19' - '13' + '17')
// console.log('19' - '13' + 17)
// console.log('123' < 57)
// console.log(5 + 6 + '4' + 9 - 4 - 2)

// const numNeighbors = prompt('How many neighbors does your country have?')
// if (numNeighbors == 1) {
//   console.log('Only one border')
// } else if (numNeighbors == 2) {
//   console.log('You got them two neighbors over there do ya?')
// } else {
//   console.log('There are no neighbors. What is this an island?')
// }

// switch (language) {
//   case 'Chinese':
//   case 'Mandarin':
//     console.log('Most Number of native Speakers')
//     break
//   case 'Spanish':
//     console.log('Second most spoken language')
//     break
//   case 'English':
//     console.log('third place bababy')
//     break
//   case 'Hindi':
//     console.log('fourth placed language')
//     break
//   case 'Arabic':
//     console.log('Fifth place, but on the rise.')
//     break

//   default:
//     console.log('Not bad either!!')
// }

// const popCheck =
//   population >= 330000000
//     ? "America's population is higher than average"
//     : "America's population is below average."

// console.log(popCheck)

function describeCountry(country, population, capitalCity) {
  const string = `${country} has ${population} and its capital is ${capitalCity}.`
  return string
}

let America = describeCountry(
  'The United States',
  'about 328 million',
  'Washington, D.C.'
)
console.log(America)
