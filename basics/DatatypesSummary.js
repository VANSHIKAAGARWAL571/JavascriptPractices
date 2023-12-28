// primitive: call by value
// string, number, boolean, null, undefined , Symbol, BigInt

// Reference Type Non Primitive
// Array, Objects, Functions
//  Javascript: JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
const id= Symbol("123")
const anotherid= Symbol("123")
console.log(id=== anotherid);
console.log(id , anotherid);


const heros= ["Spiderman", "Batman", "Superman"]
let obj= {
    name: "Vanshika",
    age: 22,
}
const myfunc= function(){
console.log("hello")
}

console.log(myfunc);
console.log(typeof(heros))
console.log(typeof(myfunc))
//Number: Number
// String:String
// undefined: undefined
// null: object
// boolean: boolean
// Symbol: Symbol
// Arrays: Object
// Object: Object
// Functions: function/ function object
