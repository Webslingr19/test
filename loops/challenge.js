// Challenge 
// Create a program that determines if a word is a palindrome
// var prompt = require("prompt-sync")()

// var userInput = prompt("Enter a word: ")
var userInput = "racecar"


// If user input space dont add in array
// var cleanPhrase = []

// for (var i =0; i < userInput.length; i++){
//     if(userInput !== " "){
//         cleanPhrase.push(userInput[i])
//     }
// }
// userInput = cleanPhrase.join('')


var reversed = Array.from(userInput).reverse().join('')
// for  (let i = userInput.length -1; i >=0; i--) {
//     reversed += userInput[i]
// }

if(userInput === reversed) {
    console.log("The word is a palindrome.")
}
else{
    console.log("The word is NOT a palindrome.")
}
