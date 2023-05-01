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
