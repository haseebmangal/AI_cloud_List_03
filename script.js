// es6 practices
// functions 

// function undFunc(a,b){
//     return a === b ;

// }
// console.log(undFunc(20,45));
// in javascript we had three types of functions before ecma script
// 01 function statement
// 02 function expression
// 03 anonymous function

// simple function///////////////////////////////////


// function string(str){
//     return str;
// }
// console.log(string("haseeb"));

// Arrow func tion have 3 variation known as
// 01 


// arrow function/////////////////////////////////////

// var arrFunc = (x) => 
//     x + x;
// console.log(arrFunc(5));

// let arrFunc = (y) =>
//     y + y;
// console.log(arrFunc(60));

// const arrFunc = (z)=>
//     z * z;
// console.log(arrFunc(50));

// const arroFunc = (a) =>
//     a + a ;
// console.log(arroFunc(50));

// const arroFunc = (b) => 
//     b * b + b;
// console.log(arroFunc(2));

// function simpleFunc(a,b,c){
//     return a + b - c;
// }
// console.log(simpleFunc(10,20,40));

// function simFunc(a,b){
//     return a + b ;
// };
// console.log(simFunc(10,20));

// const arrFunc = (x,y)=>{
//     return x + x * y;
// }
// console.log(arrFunc(10,13));

// template literals interpolation////////////////////////////////
// const name = "haseeb";
// const age  = 25;
// console.log(`my name is ${name} and i am ${age} years old.`)

// const mess = "This is my message."
// console.log(mess);

// const mess1 = `this is how we write
// multiline string through multiline template literals. `
// console.log(mess1);

// const tempLit = "Abdul haseeb"
// const age1 = 29;
// console.log(`My name is ${tempLit}, and i am ${age1} years old.`)

// console.log(`the sum of 2 + 2 = ${2 + 2} .`)

// default parameters
// function defFunc(a=0, b= 0){
//     return a * b ;
// }
// console.log(defFunc());

//  destructuring 
// const arr = ["haseeb", "ali", "abdul", "shoaib", "irfan", "kashif", "shah"]
// const [a,c,e,g,f,i] = arr;
// console.log(a,c,e,g,f,i);

// const arr1 = ["haseeb", "ali", "abdul", "shoaib", "irfan", "kashif", "shah"]
// const [ ,a,b,c,d,,e] = arr1;
// console.log(a);

// spread operators
// const arr1 = ["haseeb", "ali", "abdul", "shoaib", "irfan", "kashif", "shah"];
// const arr2 = ["haseeb1", "ali1", "abdul1", "shoaib1", "irfan1", "kashif1", "shah1"];
// const newArr = [...arr1,...arr2]
// console.log(newArr);

// const arr3 = ["haseeb", "ali", "abdul", "shoaib", "irfan", "kashif", "shah"];
// const arr4 = [...arr3];
// console.log(arr4);

// class and constructors
// class Users {
//     constructor(email, name, age){
//         this.email = email;
//         this.name = name;
//         this.age = age;
//     }
// }
// const user1 = new Users("haseeb@gmail.com", "haseeb", 29)
// const user2 = new Users("shoaib@gmail.com", "shoaib", 22)
// const user3 = new Users("irfan@gmail.com", "irfan", 19)

// console.log(user1)
// console.log(user2)
// console.log(user3)

// class Animals{
//     constructor(name, catogry){
//         this.name = name;
//         this.catogry = catogry;
//     }
// }
// const animal1 = new Animals("cat","pet")
// const animal2 = new Animals("Lion", "junglee")

// console.log(animal1);
// console.log(animal2);

// example of class
// class Pakistan{
//     constructor(establishment, politicians){
//         this.establishment = establishment;
//         this.politicians = politicians;
//     }
// }
// const pak = new Pakistan("COAS munir", "Imran");
// const pak1 = new Pakistan("faiz", "gandapoor")
// console.log(pak);
// console.log(pak1);

// Functions: passing them data.
// parameter vs arguments.

// Parameter
// The data inside the paranthesis is called parameter;
// Exp; num1 is the parameter
// function callNum(num1){ 
// }

// Argument
// The data inside the Function call is called argument.
// exp: the data (1045) is the argument.
// function callNum(){
// }
// callNum(1045); 

// function userDetail(name,age,isMarried){
//     alert(`Your name is ${name}, and you are ${age} years old and maritial status is ${isMarried}.`)
// }
// userDetail("Haseeb", 29, false);

// How to get back data from function.
// we can get back data from function through "return" key word.
// function calculateNum(num1, num2, num3){
//     console.log(num1 + num2 * num3);
// }
// calculateNum(12,34,56);
// by doing console it does show the data only

// function calculateNum(n1 , n2, n3){
//     let sum = 0;
//     sum = n1 + n2 * n3;
//     return sum;
// }
// console.log(calculateNum(34,45,65));
// console.log(calculateNum(34,45,65));
// console.log(calculateNum(34,457,65));
// console.log(calculateNum(3,45,65));

// calculating and percentage of marks
// function sumObtMarks(marks){
//     let sum = 0;
//     for (let i = 0; i < marks.length; i++){
//         sum += marks[i];
//     }
//     return sum;
// }
// const obtainedMarks = sumObtMarks([70, 67, 45, 64, 47, 41, 55, 66, 73]);
// const totalMarks = 600;
// const matricPercentage = (obtainedMarks / totalMarks * 100).toFixed(1)
// console.log(obtainedMarks);
// console.log(` The percentage in Matric marks is ${ matricPercentage}%, and the Total marks are :${obtainedMarks}.`);

// local variabel vs global variable
// exp: the variable which can't be accessed out of the function is called local variable.
// the variabel which can be accessed inside and outside of the function is called global varaible

//  const channelName = "CS with ALam"

//  function printChannelName(){
//     const channelName = "CS with ALam"
//     document.write(channelName + "<br>");
//  }
//  printChannelName();
//  document.write(channelName + "<br>");


 