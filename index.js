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

// console.log("finished exectuion")

function func() {
  console.log("func");
}

func.primary = "text";

func();
console.log(func.primary);

(() => {
  console.log("kkk");
})();
