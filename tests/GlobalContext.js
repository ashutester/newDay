console.log("This is the global context.");
var x = 10
console.log(`Value of x: ${x}`);
var x = 15
console.log(`Value of x: ${x}`);
function test(y) {
    console.log("This is a function in the global context."+y);
    for (let i = 0; i < y; i++) {
        console.log(i);
    }
}    
test(x);
console.log(x.__proto__);
