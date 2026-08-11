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



//Number Static Properties





// Number Methods




//Number Static Methods