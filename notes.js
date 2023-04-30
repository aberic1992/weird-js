//All variables in js are initially set to undefined but functions are written to the memory as a whole, this is called HOISTING!

//example:

// b(); //this will return "b is executed!"
// console.log(a); //this will return "undefined"

// var a= "variable a";

// function b(){
//     console.log("b is executed!");
// }
//****************************************************************************************

//Objects are passed by reference not by value
// so var a = {}; var b=a  ===> b will point to the same object on a memory as a, so if we change b it fill also affect a!!!!

//Important terminology :
// Global execution context,
// scope chain,
// execution stack,
// event queue (events are added to the execution stack one by one), --> event queue is not processed until execution stack is empty
// Dynamic typing
// Coercion -> js compiler figuring out when you wan to add number and a string -> it will convert the number to a string and concatenate two strings
// Mutate to change something, Immutable means in can't be change

// "this" is created for every execution context, aka every time function is run, and js decides what this will point at, so, if we console log "this" in a function it will point to the window object but if we console log this from a function that is a property of an object we created it will point to that object.
