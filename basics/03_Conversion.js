/*let score= "33"
let score2= "33feaf"
let score3= null;
let score4;
let score5= true
console.log(typeof(score)) 
console.log(typeof score)  
console.log(typeof score3)
console.log(typeof score4);
console.log(typeof score5);
let conversion= Number(score);
let conversion2= Number(score2);
let conversion3= Number(score3)
let conversion33= String(score3)
let conversion4 = Number(score4);
let conversion44 = String(score4);
let conversion5 = Number(score5);
let conversion55= String(score5);
console.log(typeof conversion)
console.log(typeof conversion2);// though IT IS SHOWING ITS TYPE AS NUMBER BUT IT ACTUALLY CONTAINS NaN
console.log(conversion2)// NaN is coming 
console.log(typeof conversion3)
console.log(conversion3)
console.log(typeof conversion33)
console.log(conversion33)
console.log(typeof conversion4)
console.log(conversion4)
console.log(typeof conversion44)
console.log(conversion44)
console.log(typeof conversion5)
console.log(conversion5)
console.log(typeof conversion55)
console.log(conversion55)
let score6= 66;
let conversion6 = String(score6);
console.log(conversion6);
console.log(typeof conversion6)
*/
//"33" => 33 (type: number)
//"33fef" => NaN (type: number)
// null =>  0 (type: number)
// null => null (type: string)
//undefineed => NaN (type: number)
// undefined => undefined (type: string)
//boolean(true) => 1 (type: number)
//boolean(true) => true (type: string)


/*let score7 = ""
let conversion7= Boolean(score7)
console.log(conversion7)
console.log(typeof conversion7);


let score8;
let conversion8= Boolean(score8);
console.log(typeof conversion8);
console.log(conversion8)

let score9= "ffedf"
let conversion9= Boolean(score9);
console.log(typeof conversion9);
console.log(conversion9)

let score10= null
let conversion10= Boolean(score10);
console.log(typeof conversion10);
console.log(conversion10)

//Boolean Conversion
//number=> true
// emptystring => false
//undefined => false
//string => true
//null => false
//1 => true
//0=> false


*/

/***********************OPERATIONS***************************** */


let value= "fff"
let negvalue= -value;
console.log(negvalue)//NaN

let value1= 44
let negvalue1= -value1;
console.log(negvalue1)

let str1= "hello"
let str2= 44
console.log(str1 + str2);


console.log("1"+"2"+3)
console.log(1+"2");
console.log("1"+2);
console.log(2+3+"6")

console.log(null+4);//4
console.log(null+"4"+7); //null47
console.log(4+7+"8"+null)//118null
console.log(undefined+44); //NaN
console.log(undefined+77+"fsdf"); //NaNfsdf
console.log(+true);//1
console.log(-true);//-1
console.log(+false); //0
console.log(-false);//-0
console.log(+"") //0
console.log(-"")//-0
console.log(+null) //0
console.log(+undefined) //NaN
//console.log(true+); error

let num1, num2, num3;
num1=num2=num3=2+2
console.log(num1)
let gameCounter=100;
++gameCounter;
console.log(gameCounter)

let x= 3
let y= ++x
console.log(x , y)
let x1=5n
let y1= x1++;
console.log(x1, y1)
console.log(y1);
let z1= y1+x1;
console.log(z1);
