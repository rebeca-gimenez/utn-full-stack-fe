// VAR

// We can reassign and redeclare
// VAR has hoisting we can call a variable before we declare it
// Not in use
console.log(a_name)
var a_name = 'pepe'
console.log(a_name)
a_name = 'juan'
var name = 'pedro'
console.log(a_name)

console.log(last_name)
var last_name = null
console.log(last_name)

// LET
// Doesn't have hoisting, cannot de declared twice in the same block
let another_name
console.log(another_name)
another_name = 'steven'
console.log(another_name)
another_name = "melanie"
console.log(another_name)

let my_name, my_last_name = null
console.log(my_name)
console.log(my_last_name)

// This is the main block
if(true) {
    //This is a secondary block
    console.log("I'm inside a block!")
    console.log("This is a local variable:")
    let another_name
    console.log(another_name)
}

let a_number = 70
{
    a_number = 100
}
console.log(a_number)

//CONST
//No hoisting, no redeclaring, no reassignment
//Has to be initialized
const username = "name"
console.log(username)