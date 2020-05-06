const Polynomial = require('./Polynomial');
const PolynomialLinked = Polynomial.PolynomialLinked;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
// });
//
// readline.on("close", ()=>{
//     console.log("\n Bye!");
//     process.exit(0);
// });

//TODO: interface for taking  two polynomials as input
//TODO: testing

let firstPoly = new PolynomialLinked();
let secondPoly = new PolynomialLinked();


firstPoly.add(3,3);
firstPoly.add(5,5);
firstPoly.add(5,5);
firstPoly.add(-15,5);


firstPoly.add(2,2);
firstPoly.add(-5,-1);
firstPoly.add(-5,0);
firstPoly.add(-5,0);

secondPoly.add(-4,4);
secondPoly.add(3,3);
secondPoly.add(2,2);
secondPoly.add(-5,-1);


console.log("First Polynomial:");
console.log(firstPoly.display());
console.log("First Polynomial:");
console.log(secondPoly.display());
let sum = firstPoly.addPolynomial(secondPoly);
console.log("Sum:");
console.log(sum.display());

