var prompt = require("prompt-sync")()

// ask a user for their password
var password = ""
while(password === ""){
    password = prompt("Enter a password: ")
}
console.log("Welcome to the matrix!")