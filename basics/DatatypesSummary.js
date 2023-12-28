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



//++++++++++++++++++++Memory++++++++++++++++++++++++//
//Stack(Primitive) copy is sent so original value remain intact , Heap(NonPrimitive) direct reference is given so original value gets changed
let anothername="Vanshika";
let name1= anothername;
name1= "Radha"
console.log(anothername)
console.log(name1) //Primitive
let user1={
    email:"google@gmail.com",
    upiid: "user@yid",
}
let user2= user1;
user2.email="vanshika@gmail.com"
console.log(user1.email)
console.log(user2.email) //NonPrimitive


