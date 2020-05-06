
const Polynomial = require('./../../Polynomial');
const PolynomialLinked = Polynomial.PolynomialLinked;

describe("Creating Polynomial:", ()=>{
    
        //constructing
        it("constructor", ()=>{
            const poly = new PolynomialLinked();
            expect(poly.head).toBe(null);
        });


        //TODO: ---------
        //validation

        //removing

        //getting
        // TODO: ----------



        //inserting in nth place
        it("adding experssions", ()=>{
            let poly = new PolynomialLinked();
            poly.add(4,5)
            expect(poly.display()).toMatch("4x^5 ");
            poly.add(4,5)
            poly.add(2,-4)
            expect(poly.display()).toMatch("8x^5 +2x^-4 ");
        });


        //adding two polynomials
        it("adding two polynomials", ()=>{
            let poly1 = new PolynomialLinked();
            let poly2 = new PolynomialLinked();
            poly1.add(4,5);
            poly2.add(-4,5);
            let sum = poly1.addPolynomial(poly2);
            expect(sum.display()).toMatch("");
        });



    });