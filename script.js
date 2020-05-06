const PolynomialLinked = require('./Poly');;

let firstPoly = new PolynomialLinked();
let secondPoly = new PolynomialLinked();


firstPoly.add(-4,4);
firstPoly.add(3,3);
firstPoly.add(2,2);
firstPoly.add(-5,-1);


secondPoly.add(-4,4);
secondPoly.add(3,3);
secondPoly.add(2,2);
secondPoly.add(-5,-1);



firstPoly.display();
secondPoly.display();