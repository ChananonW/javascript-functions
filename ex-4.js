// Start coding here
let calculator = {
    add: function(a, b) {
        return a + b; 
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return  a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};

let a = 10
let b = 20
let addResult = calculator.add(a, b);
console.log(addResult)

let aForDivide = 3000;
let bForDivide = 10;
let divideResult = calculator.divide(aForDivide, bForDivide);
console.log(divideResult)
