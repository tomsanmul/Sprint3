class Operation {
    constructor(op, number1, number2){

        if (!['addition', 'subtraction', 'multiply', 'divide', 'rest'].includes(op)){
            throw new Error(`Operation ${op} not supported`);
        }
        this.op = op,
        this.number1 = number1,
        this.number2 = number2
    }

    calculate(op){
        switch( op ){
            case 'addition': return(this.number1 + this.number2);
            case 'subtraction': return(this.number1 - this.number2);
            case 'multiply': return(this.number1 * this.number2);
            case 'divide': return((this.number1 / this.number2).toFixed(2));
            case 'rest': return(this.number1 % this.number2);
            default : return(console.log("Operation not supported"));
        }
    }
}

module.exports = Operation;