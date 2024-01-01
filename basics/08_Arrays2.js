const arr= ["Vanshika","Shreya","Radha"]
const arr1= ["Rohan","Hriday", "Suyash"]
//console.log(arr1.push(arr)) //giving total length after inserting i.e.
//arr1.push(arr)
//console.log(arr1);
//console.log(arr1[3][2]);
// concat is bit diffrent it returns a whole new array merging 2 arrays
// const newarr= arr1.concat(arr);
// console.log(newarr)
const newarray= [...arr , ...arr1];
console.log(typeof(newarray))
console.log(newarray)
const arr3= [1,2,3,[4,5,6],[6,7,9,[8,0]],10]
const real_array= arr3.flat(2) //depth defined inside bracket like infinity or number 
console.log(real_array)
console.log(Array.isArray("Vanshika"))
console.log(Array.from("Vanshika"))
console.log(Array.of(500, "diua"))
console.log(Array.from({name: "Vanshika"})) //interesting case isse batana hoga ki keys se banana hai ya value se
let s=100;
let s1=500;
let s2=600
console.log(Array.of(s,s1,s2))
