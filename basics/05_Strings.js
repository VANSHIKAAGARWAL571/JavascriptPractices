const name= "Vanshika"
const repoCount= 20
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //a good method to write in console using backticks and $ for variable injection
//above called as stringintercollation
const gameName= new String ("Vanshika-VA-Agarwal")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(name[0])
console.log(name.charAt(3))
console.log(gameName.toLocaleUpperCase());
console.log(gameName.toUpperCase())
console.log(gameName.indexOf('a'))
console.log(gameName.indexOf('a',2))
const newString = gameName.substring(0,4);
console.log(newString)
const anotherString= gameName.slice(-10, 7);
console.log(anotherString)
const newString1= "    vanshika     "
console.log(newString1.trim());
const url ="https://vanshika.agarwal.com/vanshika%20agarwal"
console.log(url.replace("%20", "-"))
console.log(url.includes("vanshika"))
console.log(gameName.split("-"))
const str = "The quick red fox jumped over the lazy dog's back.";

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
}




