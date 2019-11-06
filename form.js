// function multiply(num1,num2)
// {
//     var value = num1*num2;
//     return value;
// }

// let value = multiply(2,3);
// console.log(value);

// ES 5:-

// let multiply = function (num1,num2)
// {
//     return num1*num2;
// }
// let result = multiply(2,5);
// console.log(result);

// ES6 :-

// let multiply = (num1,num2)=>
// {
//     return num1*num2;
// }
// let result = multiply(10,10);
// console.log(result);

// To print the Square

// let numSquare = (num)=>
// {
//     return num*num;
// } 

// let result = numSquare(7);
// console.log(result);

// Call Back

// let getElement = (id,callback)=>
// {
//     console.log("Element = "+ id);
//     callback();
// }
// getElement(3,()=>{
//     console.log("Finished");
// })

// Call back with arguments

// let getDetails = (id,callback)=>
// {
//     console.log("Inside the Function");
//     console.log("id:"+id);
//     callback({id:id,name:'meera'});
// }
// getDetails(3,(person)=>
// {
//     console.log(person);
//     console.log("Finished");
// });

// Asynchrounous javascript

// console.log("Before");
//     setTimeout(()=>{
//      console.log("inside");
//  },2000);
//     console.log("After");

// function getUser(id)
// {
//     setTimeout(()=>{
//         return ({id:id,name:'Meera'});
//     },2000);
// }
// console.log('Before');
// const user = getUser(1);
// console.log(user);
// console.log('After');

 //Asynchronous with Callback

let getUser = (id,callback)=>
{
    setTimeout(()=>
    {
        callback({id:id,name:'Meera'});
    },2000);
}
console.log("Before");
getUser(3,(user)=>
{
    console.log(user);
});
console.log("After");

// object using New keyword

// var person = new Object();
// person.name = "Anila";
// person.age = 25;
// person.setValues = function(n,a)
// {
//     this.name = n;
//     this.age = a;
// }
// person.getValues = function()
// {
//     console.log("Name is "+this.name);
//     console.log("Age is"+this.age);
// }
// person.setValues('Binitha',28);
// person.getValues();

// Object using Comstructors

// function person(firstname,lastname)
// {
//     this.firstname = firstname;
//     this.lastname = lastname;
// }
// person.prototype.getDetails = function()
//     {
//         console.log('The name of the person is '+this.firstname+' '+this.lastname );
//     }
//     let person1 = new person('Mukul','ks');
//     let person2 = new person('Zumaira','parveen');

//     person1.getDetails();
//     person2.getDetails();

// Using Object.create(some pototype)

// var coder = {
//     isStudying : false,
//     printIntroduction : function(){
//         console.log(`My name is ${this.name}. Am I studying? : ${this.isStudying}`);
//     }
// }

// var m1 = Object.create(coder);
// m1.name = 'Mukul';
// m1.isStudying = 'True';
// m1.printIntroduction();
// var m2 = Object.create(coder);
// m2.name = 'Aravind';
// m2.printIntroduction();

// ES 6 Class concept

// class Vehicle{
//     constructor(name,maker,engine)
//     {
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }
//     getDetails()
//     {
//         return (`The name of the bike is ${this.name}`);
//     }
// }
// let bike1 = new Vehicle('h1','a1','b1');
// let bike2 = new Vehicle('h2','a2','b2');
// console.log(bike1.name);
// console.log(bike2.maker);

// Inheritance

// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }
// class Students extends Person{
//     constructor(name,id){
//         super(name);
//         this.id = id;
//     }
//     toString(){
//         return (`Name of the person: ${this.name},Student Id: ${this.id}`);
//     }
// }
// let student1 = new Students('Mukul',22);
// console.log(student1.toString());

// var readline = require('redline-sync') ;
// var name = readline.question("What is your Name?");
// console.log("Hi"+name+", nice to meet you!");