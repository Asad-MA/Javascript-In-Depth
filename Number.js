//Number
let num = Number(100); //By using Number() constructor, we can create a number object. However, it is not recommended to use Number() constructor to create a number object because it creates an object and not a primitive value. It is better to use number literal to create a number primitive value.
let num1 = 10;

console.log(num, num1);

console.log(typeof num); //number

//Parsing other types to number datatype

console.log('Number(null) = ', Number(null)) //0  when we try to convert null to number, it returns 0

console.log('Number(undefined) = ', Number(undefined)) //NaN  when we try to convert undefined to number, it returns NaN

console.log('Number("100") = ', Number("100")) //100  when we try to convert string to number, it returns number

console.log('Number("100abc") = ', Number("100abc")) //NaN  when we try to convert string to number, it returns NaN

console.log('Number(true) = ', Number(true)) //1  when we try to convert boolean to number, it returns 1

console.log('Number(false) = ', Number(false)) //0  when we try to convert boolean to number, it returns 0

console.log('Number({}) = ', Number({})) //NaN  when we try to convert object to number, it returns NaN

console.log('Number([]) = ', Number([])) //0  when we try to convert empty array to number, it returns 0

console.log(typeof Infinity) //Number


//Checking the Number DataType Properties and Methods
console.log(Number.prototype)
console.log(Object.getPrototypeOf(num));


//Number Properties


const number = 20;

console.log('number.EPSILON: ', number.EPSILON) //undefined  EPSILON is a static property of Number, so it can only be accessed through the Number object, not through an instance of Number.

//There are no instance properties of Number.

//Number Static Properties
console.log(Number.EPSILON) //2.220446049250313e-16  The smallest interval between two representable numbers.;

console.log(Number.MAX_SAFE_INTEGER) //9007199254740991  The largest integer that can be represented as a safe integer.

/*
There are also some other useful static properties of Number, such as:
- Number.MIN_SAFE_INTEGER
- Number.MAX_VALUE
- Number.MIN_VALUE
_ Number.NaN
- Number.NEGATIVE_INFINITY
- Number.POSITIVE_INFINITY
*/


//Number Static Methods
/* The static methods are accessed through the Number object, not through an instance of Number. */

console.log('is 10 a Finite number? : ', Number.isFinite(10)) //true  The isFinite() method determines whether the passed value is a finite number.

console.log('is 10 a NAN? ', Number.isNaN(10)) //false

console.log(Number.isNaN('Hello')); //false

console.log(Number('Hello')) //NaN

/**IMP: The JS also provide the Number static Methods as a standalone functions like isNaN, inFinite, parseFloat etc. Comparing side by side both**/

const strNum = 'a12';
console.log('isNaN(strNum) Function: ', isNaN(strNum)); //true: because it try to convert the string to Number that is why it is returning true

console.log('Number.isNaN(strNum): ', Number.isNaN(strNum));//false: because it only check whether it is NaN or not with doing conversion

const numm = 50;
console.log('isFinite(numm): ', isFinite(numm)); //true

console.log('Number.isFinite(numm): ', Number.isFinite(numm)); //true

//Checking with strings
console.log('isFinite(strNum): ', isFinite(strNum)); //false: It converts the strNum to a Number first and then check isFinite

console.log('Number.isFinite(strNum): ', Number.isFinite(strNum)); //false: It doesn't perform any conversion 

//parseInt
console.log('parseInt(strNum): ', parseInt(strNum)); //NaN: Because string is starting from a invalid number (char)
console.log('parseInt("50c"): ', parseInt("50c")); //50: becuase string is starting from a number
console.log('parseInt("40"): ', parseInt("40")); //40


console.log('Number.parseInt(strNum): ', Number.parseInt(strNum)); //NaN
console.log('Number.parseInt("50c"): ', Number.parseInt("50c")); //50
console.log('Number.parseInt("40"): ', Number.parseInt("40")); //40

/* parseInt and Number.parseInt both are same internally: verify parseInt == Number.parseInt */

console.log(parseInt == Number.parseInt); //true: Because both reference to the same function

/*Verify Other global functions as well*/
console.log(isNaN == Number.isNaN) //false: Both are different functions
console.log(isFinite == Number.isFinite); //false: Both are different functions
console.log(parseFloat == Number.parseFloat); //true: Because both reference to the same function

//Rest Static Methods

console.log(Number.isSafeInteger('50c')); //false
console.log(Number.isSafeInteger('')); //false
console.log(Number.isSafeInteger('50')); //false
console.log(Number.isSafeInteger(50e100)); //false : too big integer
console.log(Number.isSafeInteger({})); //true
console.log(Number.isSafeInteger(50)); //true
console.log(Number.isSafeInteger(50e10)); //true
console.log(Number.isSafeInteger(NaN)); //false


// Number Methods




//🔥 Challenge: Mini Financial Transaction Engine
/*
Build a JavaScript function:

processTransactions(transactions)

It receives an array of transaction objects:

const transactions = [
    { id: 1, amount: "1500" },
    { id: 2, amount: "250.50" },
    { id: 3, amount: "50px" },
    { id: 4, amount: 0 },
    { id: 5, amount: "-350" },
    { id: 6, amount: "abc" },
    { id: 7, amount: Infinity },
    { id: 8, amount: "9007199254740992" },
    { id: 9, amount: "75.25" },
    { id: 10, amount: null }
];

Your function should produce a report containing:

Total valid transactions
Total invalid transactions
Total amount
Average amount
Highest transaction
Lowest transaction
Positive transactions
Negative transactions
Zero transactions
Unsafe integer transactions
NaN transactions
Infinite transactions
But here's the difficult part

You cannot simply do:

Number(amount)

and call it a day.

You need to decide what constitutes a valid financial amount.

For example, decide what should happen with:

"1500"       // ?
"1500.50"    // ?
"50px"       // ?
""
" "
null
undefined
true
Infinity
NaN
"9007199254740992"
0
-50

You have to establish the rules yourself.

*/

function processTransactions(transactions) {
    const transactionLogs = {
        validTransactions: 0,
        invalidTransactions: 0,
        totalAmount: 0,
        averageAmount: 0,
        highestTransactions: 0,
        lowestTransactions: 0,
        positiveTransactions: 0,
        negativeTransactions: 0,
        zeroTransactions: 0,
        NaNTransactions: 0,
        unsafeIntegerTransactions: 0,
        infiniteTransactions: 0,
    };
    const parsedTransaction = [];
    transactions.forEach(transaction => {
        let amount = typeof transaction.amount == 'string' ? parseFloat(transaction.amount) : transaction.amount;
        parsedTransaction.push({ id: transaction.id, amount })
        if (Number.isNaN(transaction.amount)) {
            transactionLogs.NaNTransactions++;
            transactionLogs.invalidTransactions++;
            return;
        }
        if (Number.isNaN(amount)) {
            transactionLogs.invalidTransactions++;
            return;
        }
        if (!Number.isFinite(amount) && typeof amount == 'number') {
            transactionLogs.invalidTransactions++;
            return
        }
        if (amount == 0) {
            transactionLogs.zeroTransactions++;
            transactionLogs.validTransactions++;
            return
        }
        if (amount > 0 && typeof amount == 'number') {
            transactionLogs.positiveTransactions++;
            transactionLogs.validTransactions++;
            transactionLogs.totalAmount += amount;
            return;
        }
        if (amount < 0 && typeof amount == 'number') {
            transactionLogs.negativeTransactions++;
            transactionLogs.validTransactions++;
            transactionLogs.totalAmount += amount;
            return;
        }
        if (!Number.isSafeInteger(amount)) {
            transactionLogs.unsafeIntegerTransactions++;
            transactionLogs.invalidTransactions++;
            return;
        }
    });

    const minTransaction = parsedTransaction.reduce((min, transaction) => {
        return transaction.amount < min ? transaction.amount : min
    }, parsedTransaction[0].amount);


    const maxTransaction = parsedTransaction.reduce((max, transaction) => {
        return transaction.amount > max ? transaction.amount : max
    }, parsedTransaction[0].amount);

    transactionLogs.averageAmount = transactionLogs.totalAmount / transactions.length;
    transactionLogs.lowestTransactions = minTransaction;
    transactionLogs.highestTransactions = maxTransaction;
    return transactionLogs;
}


const transactions = [
    { id: 1, amount: "1500" },
    { id: 2, amount: "250.50" },
    { id: 3, amount: "50px" },
    { id: 4, amount: 0 },
    { id: 5, amount: "-350" },
    { id: 6, amount: "-800" },
    { id: 7, amount: Infinity },
    { id: 8, amount: "9007199254740992" },
    { id: 9, amount: "75.25" },
    { id: 10, amount: null },
    { id: 11, amount: true },
    { id: 12, amount: NaN },
    { id: 13, amount: "  " }
];



function refactorProcessTransaction(transactions) {
    const transactionLogs = {
        validTransactions: 0,
        invalidTransactions: 0,
        totalAmount: 0,
        averageAmount: 0,
        highestTransaction: Number.MIN_SAFE_INTEGER,
        lowestTransaction: Number.MAX_SAFE_INTEGER,
        positiveTransactions: 0,
        negativeTransactions: 0,
        zeroTransactions: 0,
        NaNTransactions: 0,
        unsafeIntegerTransactions: 0,
        infiniteTransactions: 0,
    };
    for (const transaction of transactions) {
        let amount = transaction.amount;

        if (typeof amount === 'string') {
            if (amount.trim().length && !isNaN(amount.trim()))
                amount = Number(amount.trim())
            else
                transactionLogs.invalidTransactions++;
        }
        if (typeof amount === 'number') {
            if (Number.isFinite(amount)) {
                transactionLogs.validTransactions++;
                transactionLogs.totalAmount += amount;
                transactionLogs.highestTransaction = transactionLogs.highestTransaction < amount ?
                    amount : transactionLogs.highestTransaction;
                transactionLogs.lowestTransaction = transactionLogs.lowestTransaction > amount ?
                    amount : transactionLogs.lowestTransaction;

                if(Number.isInteger(amount) && !Number.isSafeInteger(amount)){
                    transactionLogs.unsafeIntegerTransactions++;
                }

                if (amount > 0)
                    transactionLogs.positiveTransactions++;
                else if (amount === 0) {
                    transactionLogs.zeroTransactions++;
                }
                else {
                    transactionLogs.negativeTransactions++;
                }
            }
            else if (Number.isNaN(amount)) {
                transactionLogs.NaNTransactions++;
                transactionLogs.invalidTransactions++;
            }
            else {
                transactionLogs.infiniteTransactions++;
                transactionLogs.invalidTransactions++;
            }
        }
        else {
            transactionLogs.invalidTransactions++;
        }
    }

transactionLogs.averageAmount = transactionLogs.totalAmount / transactionLogs.validTransactions;

return transactionLogs;
}

const LOGS = refactorProcessTransaction(transactions);
console.log(LOGS);