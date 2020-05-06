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
        if(!this.validate(node)){ // add a new node only if node with such exponential already exists

            if (this.head === null) {
                this.head = node;
            } else {
                // while adding already sort from highest to the lowest exponential (we already know they do not repeat)
                let current = this.head;
                let previous = null;
                let i = 0;
                let diff = Number.MAX_SAFE_INTEGER;
                let nearestIdx = 0;
                while (current !== null) {
                    //find where to insert (find closest index)
                    if (Math.abs(node.exponent - current.exponent) < diff) {
                        nearestIdx = i;
                        diff = Math.abs(node.exponent - current.exponent);
                    }

                    previous = current;
                    current = current.next;
                    i++;
                }

                let nearest = this.get(nearestIdx);
                //if found nearest index node exponent is bigger than node exponent then insert after this index
                if(nearest.exponent > node.exponent){
                    this.insertNth(nearestIdx + 1, node);
                } else { //if found nearest index exponent is smaller than node exponent then insert before this index
                    this.insertNth(nearestIdx , node);
                }

            }



        }
    }

    //returns true if inserted correctly
    insertNth(index, node){
        if(this.head ===null){
            if(index != 0){
                throw new RangeError(`There is no head! You can't insert node at ${index}'th position.`);
            } else {
                this.head = node;
            }
        }


        if(this.head !== null && index == 0){
            node.next = this.head;
            this.head = node;
            return true;
        }
        let current = this.head;
        let previousIdx = 0;
        let i = 0;
        while(i < index){
            previousIdx = i;
            current = current.next;
            if(current === null){ //if reaches end of list
                break;
            }
            i++;
        }
        let previous = this.get(previousIdx);
        node.next = current;
        previous.next = node;

        return true;
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
    validate(node){
        //after adding new node we have to go through each existing node to check if a node with existing exponent already exists
        //return true if node was found, return false if such node does not exist;
        let current = this.head;
        let index = 0;
        while(current !== null){
            // if it exists then just update coefficient
            if(current.exponent == node.exponent){
                current.coeficient += node.coeficient;
                //if coefficienst is ZERO then remove the node
                if(current.coeficient == 0){
                    this.remove(index);
                }
                return true;

            }
            current = current.next;
            index++;
        }
        return false;
    }


    remove(index){
        if(this.head === null || index < 0) throw new RangeError(`Index ${index} doesn't exist.`);
        if(index === 0){
            let coefficient = this.head.coefficient;
            let exponent = this.head.exponent;
            this.head = this.head.next;
            return [coefficient, exponent];
        }
        let current = this.head;
        let previous = null;
        let i = 0;
        while(current !== null && i < index){
            previous = current;
            current = current.next;
            i++
        }
        if(current !== null){
            previous.next = current.next;
            return [current.coeficient, current.exponent];
        }

        throw new RangeError(`Index ${index} doesn't exist.`);

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


    // TODO: finish adding two polynomials
    addPolynomial(secondPolynomial){
        let resultPolynomial = new PolynomialLinked();

        let current = this.head;
        while (current !== null){
            resultPolynomial.add(current.coeficient, current.exponent);
            current = current.next;
        }
        let secondCurrent = secondPolynomial.head;
        while(secondCurrent !== null){
            resultPolynomial.add(secondCurrent.coeficient, secondCurrent.exponent);
            secondCurrent = secondCurrent.next;
        }

        return resultPolynomial;
    }
}

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
firstPoly.display();
console.log("First Polynomial:");
secondPoly.display();
let sum = firstPoly.addPolynomial(secondPoly);
console.log("Sum:");
sum.display();