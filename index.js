// function b(){
//     console.log(myVar)
// }

// function testFunction() {

//     var ms = 3000 + new Date().getTime();
//     while(new Date()< ms) {}
//     console.log('finished function')
// }

// function clickHandler(){
//     console.log("CLICK")
// }

// document.addEventListener('click', clickHandler)

// testFunction();

// console.log("finished execution")

//CREATING SUBCONTEXT

var c = {
  name: "The c object",
  log: function () {
    console.log(this);
  },
};

c.log();

//IIFEs

(function (name) {
  console.log(name);
})("milan");

//or

(function (name) {
  console.log(name);
})("milan");

//Closures
// we are IIFEs to have closure for every loop
function buildFunctions() {
  var arr = [];
  for (i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {
  var arr2 = [];
  for (i = 3; i < 7; i++) {
    arr2.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }

  return arr2;
}

var fs2 = buildFunctions2();

fs2.forEach((fs2Item) => {
  fs2Item();
});

//two functions are created englishGreeting and spanisGreeting, they are possible to execute because of closure, language var stays in memory even thou execution context finished, and functions still have access to it
var makeGreeting = function (language) {
  return function (firstName) {
    if (language === "en") {
      console.log(`Hello ${firstName}`);
    }

    if (language === "es") {
      console.log(`Hola ${firstName}`);
    }
  };
};

var englishGreeting = makeGreeting("en");
var spanisGreeting = makeGreeting("es");

englishGreeting("Aleksandar");

spanisGreeting("Natalija");

//This is example of using closure when the execution context finishes for sayHiLater function, sayHi var still stayed in memory
var sayHiLater = function () {
  var sayHi = "Hi later";

  setTimeout(function () {
    console.log(sayHi);
  }, 3000);
};

// sayHiLater();

var person = {
  fname: "John",
  lname: "Doe",
  getFullName: function () {
    var fullname = this.fname + " " + this.lname;
    return fullname;
  },
};

var logName = function (lang1, lang2) {
  console.log("Logged: " + this.getFullName());
};

var logPersonName = logName.bind(person); //we do this to bind this object from the "person" object context to logName function, we could also did this on the fly
// var logname = function() {...}.bind(person), so we would not need to create logPeronName function but just call logName.

logPersonName();

logName.call(person, "en", "es"); // call works like a regular call "()" but you can pass it a bind object as a first parametar.

logName.apply(person, ["en", "es"]); // apply is same as call but requires an array of arguments

//function borrowing

var person2 = {
  fname: "Aleksandar",
  lname: "Beric",
};

console.log(person.getFullName.apply(person2));

//function currying --> creating a copy of the function but with preset parameters

function multiply(a, b) {
  return a * b;
}

var multiplyByTwo = multiply.bind(this, 2); // bind made a copy of the multiply funtion and such that 2 is permanent first argument

console.log(multiplyByTwo(3));

//functional programming

function mapForEach(arr, fn) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
}

var firstArr = [1, 2, 3];
console.log(firstArr);

var secondarr = mapForEach(firstArr, function (item) {
  return item * 2;
});

console.log(secondarr);
