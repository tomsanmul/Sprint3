const Operation = require('./Operation.js');

let operations = [
    new Operation('addition',2,2),
    new Operation('subtraction',4,2),
    new Operation('multiply',3,2),
    new Operation('divide',10,5),
    new Operation('rest',13,5)
]

//force error if operation is not supported
try{
    new Operation('percentage',2,2); 
}
catch(err){
    console.log(err.message);
}


console.table(operations);

//Calls the Calculate function
for (let i = 0; i < operations.length; i++) {
      console.log(`The ${operations[i].op} of ${operations[i].number1} and ${operations[i].number2} is = ${operations[i].calculate(operations[i].op)}`);
  };


//change the even operations of the array to subtraction
for (let i = 0; i < operations.length; i++) {
    if (i % 2 == 0){
        operations[i].op = 'subtraction'   ;   
    }
};
console.table(operations);

//Re-calls the Calculate function with then news Operations
for (let i = 0; i < operations.length; i++) {
    console.log(`The ${operations[i].op} of ${operations[i].number1} and ${operations[i].number2} is = ${operations[i].calculate(operations[i].op)}`);
};