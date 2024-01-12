// 
//object initialization

const obj={
    key1: "1",
    key2: "2",
    key3: "3",
    key4: function abc(){
       console.log("hello");
       return 1;
    }
}
console.log(typeof(obj));


const person= new Object();
person.firstname="vanshika";
person.lastname="agarwal";
person.email= function myemail(){
    console.log("vanshikaaga@.com")
    return 0;}

    console.log(person.firstname);

//***********************//

    function Person(fname, lname){
        this.firstname=fname;
        this.lastname=lname;
        
    }

    const person1= new Person("hi","hello");
    console.log(person1.firstname)
   
