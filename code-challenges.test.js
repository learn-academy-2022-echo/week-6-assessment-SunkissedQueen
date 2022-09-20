// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("upName", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  const output = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(upName(people)).toEqual(output)
  })
})

// b) Create the function that makes the test pass.

// Function Signature
// input: array of objects
// output: an array with a sentence about each person with their name capitalized

// Examples
// input: [
  //   { name: "ford prefect", occupation: "a hitchhiker" },
  //   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  //   { name: "arthur dent", occupation: "a radio employee" }
  // ] 
// output --> ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// Process
// create a function called aboutThem that takes array of objects called array
// need to access the first key:value pair to capitalize the first letter of each word
// include the word "is" between the first value and second value to make a sentence
// return array with objects that are a sentence of capitalized first value, the word "is", and last value with a period at the end

// const aboutThem = (array) => {
//   return array.map(object => {
//     let first = object.name.split(" ")[0][0].toUpperCase() + object.name.slice(1, object.name.split(" ")[0].length)
//     let second = object.name.split(" ")[1][0].toUpperCase() + object.name.slice(object.name.split(" ")[0].length + 2)
//     return `${first} ${second} is ${object.occupation}.`
//   })
// }

// Refactor From Developer Joyce
  // declare a function named upName
    // iterate through the array using .map and use dot notation to access the values of name and use split(" ") to separate out the name from the object and to have first and last name in 2 different strings.
      // Once you have access to the separate strings - iterate through the strings and use charAt(0) to point to the 0 index element and use .toUpperCase to upcase that 0 index
      // To add the rest of the name back on, we must use slice(1) 
      // use join(" ") to join the first name and last name into one string
      // using string interpolation add the rest of the sentence using dot notation to access value of occupation key 

const upName = (array) => {
  return array.map(value => value.name.split(" ").map(fullName => fullName.charAt(0).toUpperCase() + fullName.slice(1)).join(" ") + ` is ${value.occupation}.`
 
   )
 }

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
// From Developer Holden
describe("remainderThree", () => {
  it("return an array of remainders from a mixed array. These remainders are of each number in the array when divided by three", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]

    expect(remainderThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainderThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

//Pseudo Code:
//1. Create a function called remainderThree that takes an array as input
//2. use .filter built in method to build an array of numbers
//3. take each number in the new array and use .map to return numbers modded by three inside an array

// const remainderThree = (array) => {
//   const intArray = array.filter(value => typeof value === "number")
//   return remainderArray = intArray.map(value => {
//     return value % 3
//   })

// }

// Refactor
const remainderThree = array => {
  return array.filter(value => typeof value === "number").map(value => value % 3)
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
// From Developer Hieu

describe("cubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(cubed(cubeAndSum1)).toEqual(99)
    expect(cubed(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

// PSUEDO CODE:
// create a function that takes in an array of numbers
// create an empty array to hold the numbers
// iterate through the array with map
// operate on the numbers and push to new array
// return new array

const cubed = (arr) => {
  let cubed_nums = 0
  arr.map(value => {
    cubed_nums += (value ** 3)
  })
  return cubed_nums
}

// // Refactor
// const cubed = (arr) => {
//   return arr.map(value => 
//     value ** 3).reduce((a, b) => a + b)
// }
