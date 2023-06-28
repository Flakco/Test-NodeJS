const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`the sum is: ${num1 + num2}`)
}
// If we have a function call in the module, it will run even if is not assigned to a variable (require)
// When you import you are invoking
addValues()