var prompt = require("prompt-sync")()

// ask the user to type in numbers until they are done
// var num = 0
// var end = ""
// while(end != "Y") {
//     num = prompt("Enter a number: ")
//     end = prompt("Enter 'Y' to end.")
// }

// ask the user to type in numbers until they are done
// var num = 0
// var end = "Y"
// while(end == "Y") {
//     num = prompt("Enter a number: ")
//     end = prompt("Enter 'Y' to enter a number: ")
// }

// ask the user to type in numbers until they are done

do {
    var num = prompt("Enter a number: ")
    var end = prompt("Enter 'Y' to enter a number: ")
} while(end == "Y")