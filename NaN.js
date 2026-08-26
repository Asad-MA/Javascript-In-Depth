console.log(' NaN: Not A Number ');

// NaN is the property of global object OR Variable in the Global Scope
//Operations that produced NaN
/*
1. Failed Number conversion i.e: Number("This is not a Number")
2. Math operation where the result is not a real number i.e: Math.sqrt(-1)
3. Any illegal mathematical operation in JS i.e: 0 * Infinity, infinity / infinity
4. Method or expression whose operands is NaN or coerced to NaN i.e: (1 * 'abc'), 0 ** NaN 
5. When we try to represent invalid value to numbers i.e: new Date('This is Invalid').getTime()
*/

console.log(Number("This is not a Number"))

console.log(Math.sqrt(-1));

console.log(0 * Infinity); console.log(Infinity - Infinity); console.log(1 ** Infinity)

console.log(0 * NaN); console.log(1 * 'abc')

console.log(new Date('Invalid Date').getTime());

//IMPORTANT: NaN is not equal to NaN it self

console.log(NaN === NaN)

console.log(Number.NaN === NaN)

console.log(isNaN(NaN))

console.log(Number.isNaN(NaN))

console.log(Number.isNaN('NotANumber')) //false: Because it only checks if it actually a NaN

console.log(isNaN('NotANumber'))

//when try to check isNaN using BigInt it throws errors because BigInt to Number is not allowed

//isNaN(1n) //error: becuase the global isNaN function try to convert provided value to number and then check if it is NaN or not

console.log(Number.isNaN(1n)) //false: Because ut only checks if it is NaN or not without converting



/* Some Array Methods are also unable to find NaN while some can */
//Index finding cannot find the NaN 

const array = [1,2,3,4, NaN];

console.log(array.indexOf(4)); //3
console.log(array.indexOf(NaN)); //-1

console.log(array.lastIndexOf(NaN))

//Value finding can find the NaN
console.log(array.includes(NaN));
console.log(array.findIndex(n => Number.isNaN(n))) //4


/* Brainstroming */
/*

🧠 Brainstorming Task: Transaction Analyzer — NaN Edition

You receive transaction data where amount can be:

a valid number
NaN
a numeric string
a non-numeric string
null
undefined
Infinity
-Infinity

Your job is to build a function:

function analyzeTransactions(transactions) {
    // your implementation
}

Example input:

const transactions = [
    { id: 1, amount: 1500 },
    { id: 2, amount: NaN },
    { id: 3, amount: "2500" },
    { id: 4, amount: "abc" },
    { id: 5, amount: null },
    { id: 6, amount: undefined },
    { id: 7, amount: Infinity },
    { id: 8, amount: -Infinity },
    { id: 9, amount: 500 }
];

Your analyzer should produce something conceptually like:

{
    validNumbers: 2,
    nanValues: 1,
    numericStrings: 1,
    invalidStrings: 1,
    nullValues: 1,
    undefinedValues: 1,
    infiniteValues: 2,

    totalValidAmount: 2000,
    averageValidAmount: 1000
}

*/

function analyzeTransactions(transactions) {
    const result = {    
        validNumbers: 0,
        nanValues: 0,
        numericStrings: 0,
        invalidStrings: 0,
        nullValues: 0,
        undefinedValues: 0,
        infiniteValues: 0,
        totalValidAmount: 0,
        averageValidAmount: 0
    }
    transactions.forEach(transaction => {
        const {amount} = transaction;
        const type = typeof amount;
        if(type === 'number'){
            if(Number.isFinite(amount)){
                result.validNumbers++;
                result.totalValidAmount += amount;
                result.averageValidAmount = result.totalValidAmount / result.validNumbers;
            }
           else if(Number.isNaN(amount)){
                result.nanValues++;
           }
           else{
                result.infiniteValues++;
           }
        }
        else if(type === 'string' ){
            (amount.trim().length && !isNaN(amount)) ? result.numericStrings++ : result.invalidStrings++;
        }
        else if(type === 'undefined'){
            result.undefinedValues ++;
        }
        else if(amount === null){
            result.nullValues ++;
        }
    });

    return result;
}


const transactions = [
    { id: 1, amount: 1500 },
    { id: 2, amount: NaN },
    { id: 2, amount: NaN },

    { id: 2, amount: NaN },

    { id: 3, amount: "2500" },
    { id: 4, amount: "abc" },
    { id: 5, amount: null },
    { id: 5, amount: null },
    { id: 5, amount: 'null' },
    { id: 6, amount: undefined },
    { id: 6, amount: undefined },
    { id: 6, amount: undefined },
    { id: 6, amount: undefined },
    { id: 7, amount: Infinity },
    { id: 8, amount: -Infinity },
    { id: 9, amount: 500 }
];

const analyzer = analyzeTransactions(transactions);

console.log(analyzer)