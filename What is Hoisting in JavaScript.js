// Hoisting with var
console.log(a); // undefined
var a = 5;

// Hoisting with function
greet(); // "Hello"
function greet() {
  console.log("Hello");
}
