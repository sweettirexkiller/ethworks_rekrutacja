class ExpressionNode {
    constructor(_coefficient, _exponent){
        this.coeficient = _coefficient;
        this.exponent = _exponent;
        this.next=null;
    }
}
const head = Symbol("head"); // unique object property

class PolynomialLinked {
    constructor() {
        this.head = null;
    }

    //adding next expression to polynomial with coefficient and exponent
    add(_coefficient, _exponent) { // O(n) complexity
        let node = new ExpressionNode(_coefficient, _exponent);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    get(index){ // O(n) complexity
        if(index > -1){
            let current = this.head;
            let i = 0;
            while(current !== null && i < index){
                current = current.next;
                i++;
            }
            return current !== null ? current : undefined;
        }else  {
            return undefined;
        }
    }
    display(){
        let current = this.head;
        let PolynomialString =  String();
        while(current !== null){
            let expressionString;
            if(current.coeficient < 0){ //TODO: possible refactoring for KISS and DRY
                expressionString =  String(`${current.coeficient}x^${current.exponent} `);
            }else{
                expressionString =  String(`+${current.coeficient}x^${current.exponent} `);
            }
            PolynomialString = PolynomialString.concat(expressionString);
            current = current.next;
        }
        if(PolynomialString.charAt(0) =='+'){
            console.log(PolynomialString.substr(1)); // we remove "+" sing
        } else {
            console.log(PolynomialString);
        }
    }


    *values(){
        let current = this.head;
        while(current!==null) {
            yield current;
            current = current.next;
        }
    }
    [Symbol.iterator](){
        return this.values();
    }

}

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
