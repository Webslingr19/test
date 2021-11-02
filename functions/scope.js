// var number = 123; // Global Variable

// function changeNumber() {

//     number = 456; // Local Variable

//     var number = 789; // Local Variable

//     console.log(`inside: number = ${number}`);

// }

// console.log(`before: number = ${number}`);
// changeNumber();
// console.log(`after : number = ${number}`);




var number = 123; // Global Variable

function changeNumber() {

    number = 456; // Local Variable

    console.log(`inside 1: number = ${number}`);

    var number = 789; // Local Variable

    console.log(`inside 2: number = ${number}`);

}

console.log(`before: number = ${number}`);
changeNumber();
console.log(`after : number = ${number}`);