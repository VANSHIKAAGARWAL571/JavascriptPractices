 let myDate = new Date()
 console.log(myDate.toString());
 console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// // Sun Dec 31 2023 08:27:35 GMT+0000 (Coordinated Universal Time)
// // 12/31/2023, 8:27:35 AM
// // Sun Dec 31 2023
// // 2023-12-31T08:27:35.563Z
// // 2023-12-31T08:27:35.563Z
// let myCreatedDate= new Date(2023, 0, 24)
// console.log(myCreatedDate.toDateString())
// let myCraetedDate= new Date(2023, 0,23, 5, 3);
// console.log(myCraetedDate.toLocaleString());
 let myDate1= new Date("01-14-2023")
// console.log(myDate1.toLocaleString())
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myDate1.getTime()) //milliseconds
console.log(Date.now()/1000) //seconds
console.log(Math.floor(Date.now()/1000))
 let newDate= new Date();
 console.log(newDate);
 console.log(newDate.getMonth());
 console.log(newDate.getDay());
 console.log(Date.toString())

 console.log(newDate.toLocaleString('default',{
    weekday: "long",
 }))
 





