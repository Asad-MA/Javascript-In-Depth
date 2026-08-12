//Number
let num = Number(100); //By using Number() constructor, we can create a number object. However, it is not recommended to use Number() constructor to create a number object because it creates an object and not a primitive value. It is better to use number literal to create a number primitive value.
let num1 = 10;

console.log(num, num1);

console.log(typeof num); //number

//Parsing other types to number datatype

console.log('Number(null) = ' , Number(null)) //0  when we try to convert null to number, it returns 0

console.log('Number(undefined) = ' , Number(undefined)) //NaN  when we try to convert undefined to number, it returns NaN

console.log('Number("100") = ' , Number("100")) //100  when we try to convert string to number, it returns number

console.log('Number("100abc") = ' , Number("100abc")) //NaN  when we try to convert string to number, it returns NaN

console.log('Number(true) = ' , Number(true)) //1  when we try to convert boolean to number, it returns 1

console.log('Number(false) = ' , Number(false)) //0  when we try to convert boolean to number, it returns 0

console.log('Number({}) = ' , Number({})) //NaN  when we try to convert object to number, it returns NaN

console.log('Number([]) = ' , Number([])) //0  when we try to convert empty array to number, it returns 0

console.log(typeof Infinity) //Number


//Checking the Number DataType Properties and Methods
console.log(Number.prototype)
console.log(Object.getPrototypeOf(num));


//Number Properties


const number = 20;

console.log('number.EPSILON: ' , number.EPSILON) //undefined  EPSILON is a static property of Number, so it can only be accessed through the Number object, not through an instance of Number.

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

console.log('is 10 a Finite number? : ' , Number.isFinite(10)) //true  The isFinite() method determines whether the passed value is a finite number.

console.log('is 10 a NAN? '  , Number.isNaN(10)) //false

console.log(Number.isNaN('Hello')); //false

console.log(Number('Hello')) //NaN

/**IMP: The JS also provide the Number static Methods as a standalone functions like isNaN, inFinite, parseFloat etc. Comparing side by side both**/

const strNum = 'a12';
console.log('isNaN(strNum) Function: ' , isNaN(strNum)); //true: because it try to convert the string to Number that is why it is returning true

console.log('Number.isNaN(strNum): ',  Number.isNaN(strNum));//false: because it only check whether it is NaN or not with doing conversion

const numm = 50;
console.log('isFinite(numm): ' , isFinite(numm)); //true

console.log('Number.isFinite(numm): ' , Number.isFinite(numm)); //true

//Checking with strings
console.log('isFinite(strNum): ' , isFinite(strNum)); //false: It converts the strNum to a Number first and then check isFinite

console.log('Number.isFinite(strNum): ' , Number.isFinite(strNum)); //false: It doesn't perform any conversion 

//parseInt
console.log('parseInt(strNum): ' , parseInt(strNum)); //NaN: Because string is starting from a invalid number (char)
console.log('parseInt("50c"): ' , parseInt("50c")); //50: becuase string is starting from a number
console.log('parseInt("40"): ' , parseInt("40")); //40


console.log('Number.parseInt(strNum): ' , Number.parseInt(strNum)); //NaN
console.log('Number.parseInt("50c"): ' , Number.parseInt("50c")); //50
console.log('Number.parseInt("40"): ' , Number.parseInt("40")); //40

/* parseInt and Number.parseInt both are same internally: verify parseInt == Number.parseInt */

console.log(parseInt == Number.parseInt); //true: Because both reference to the same function


// Number Methods




