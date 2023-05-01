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
