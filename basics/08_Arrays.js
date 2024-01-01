const arr= ["hi","vanshi","u"]
console.log(typeof(arr));
const arr1= new Array("hi","gia", 4);
console.log(arr1) //Resizable, Can contain multiple data types
console.log(arr.length)

//Array methods
// arr1.push(8);
// console.log(arr1)
// arr1.push(7);
// arr1.pop() //removes last element
arr1.unshift(9); //add to the 0th pos
console.log(arr1)
arr1.shift()
console.log(arr1);// remove el from 0th pos
console.log(arr1.includes(9))
console.log(arr1.indexOf(40))//-1 dont know if it exist
console.log(arr1.indexOf(6))// -1 dont know if it exist
const newArr= arr1.join(":") // can be arr1.join() will be seperated as in original array i.e. ","
console.log(newArr);
console.log(arr1);
const arr2= [0,1,2,3,4,5]
const mynew= arr2.slice(1,3);
console.log(arr2); //original array does not get changed
console.log(mynew);
const mynew1= arr2.splice(1,3);
console.log(arr2); //original array got changed in splice 1,2,3 got removed 
console.log(mynew1);