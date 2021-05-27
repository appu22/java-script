// Ubed Class -------------------

// function users(name,age,...languages)
//  {
//      return {name,age,languages};
//  }
//  console.log(users("appu",24,"java","python"));

//  let a=arguments;
//  console.log(typeof(a));
 
// function with default parameter(es6)

// function appu(x,y="rani")
// {
//     return {x,y}
// }
// console.log(appu("ubed"));

//arrow function 
//syntax
//only work with ananomous func and expression func
// ()=>{
//     //code..
// }

// let b=function()
// {
// console.log("i am normal function");
// }
// b();

// let arrowfunction=()=>{
//     console.log("i am arrow function")
// }
// arrowfunction()


// let arrowfunction=arrow()=>{//Malformed arrow function parameter list
//     console.log("i am arrow function")
// }
// arrowfunction()


//normal function
//normal function return keyword is mandatory

// let x=function()
// {
//     return "i am x"
// }

// console.log(x());

// //arrow function
// //in not used return keyword

// let y=()=>"i am y"
// console.log(y());

// let z=_=>"i am z"
// console.log(z());


//normal function with array

// let normalfunctionwitharray =function(x,y)
// {
//     return[x,y]
// }

// console.log(normalfunctionwitharray("ubed","appu"));

// //arrow function with array

// let arrowwitharray = (x,y) => [x,y]
// console.log(arrowwitharray("kiran","rahul"));

//normal function with object
// let normalfunctionwithobject =function(x,y)
// {
//     return{x,y}
// }
// console.log(normalfunctionwithobject("xyz","abc"));

// //arrow function with object
// let arrowfunctionwithobject =(x,y) => ({x,y})
// console.log(arrowfunctionwithobject("appu","kiran"));

//callback function

// function child()
// {
//     console.log("i am child");
// }

// function parent(callback)
// {
   
    
//     return callback();
   
// }
// parent(child);

//ananomous with callback  function

function carobject(carname)
{
    return carname();
}

carobject(function(){
    console.log("appu is chombu");
})

//callback using aroow func

let add = (a,b) =>{
    return a+b
}

let multiply=(a,b) =>{
    return a*b;
}

function calculation(num1,num2,callback)
{
    return callback(num1,num2)
}

console.log(calculation(10,20,add));
console.log(calculation(10,10,multiply));

