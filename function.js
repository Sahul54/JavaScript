/*
===========Function=========
Function is Block of code that perfroms a specific task, can be invoked whenever needed.
*/


/*
function functionname(){        // function defination
  console.log("Hii coder");
}

functionname();  // function call
*/

// function sum(a,b) {
//   // act as local variable
//   s = a+b;
//   console.log("After return")
//   return s;
//   // console.log("before return"); // can't this line execute
  
// }

// let sumof = sum(1,2);
// console.log(sumof);

// function calculate(num){
//   return num;
// }

// console.log(calculate(100));

// function calculate(num1,...num){  //... rest opterator
  
//   console.log(num1);
//   return num;
  
// }

// console.log(calculate(100,200,300));

// let arr = [1,2,3,5,6,7]

// function returnarr(getarr){
//   return getarr[3];
// }

// console.log(returnarr(arr));


// =============Scop==============
  

// // let a = 10;
// const b = 30  // global Scop
//  if(true)
//  {
//   let a = 10;
//   const b = 30  // Local/block Scaop
 // var c = 90   //  always glbal scop

//   console.log(a);
//   console.log(b);
//  }
 
//  console.log(c)


// ============nested function==========
  function one(){
    const username = "sahul"

    function two(){
      const webpage = "youtube"
      // console.log(username);
      // console.log(webpage);
    }
    // console.log(webpage);
    two()

  }

  one()




// ===========Arrow Function=============
  //  Compact way of writing a function



const user  = {
    username: "sahul",
    price: 999,

    welcomemessage : function(){
      console.log(`${this.username}, welcome the web site `);
    // console.log(this);
    }
}

// user.welcomemessage()
// user.username = "saa"
// user.welcomemessage()

// function chai (){

//   let username = "sahul"
//   console.log(this.username);
// }

// const chai = function(){

//   let username = "sahul"
//   console.log(this.username);
// }

// const chai = () => {

//     let username = "sahul"
//     console.log(this);
//   }
  //  chai()

// const add = (num1,num2) => {   //expelesite return
//   return num1 + num2
// }

// +++++++++++++++++inplesit return++++++++++++++++++++++


// const add = (num1,num2) => (num1 + num2)
// console.log(add(4,5));

const add = (num1,num2) => ({username : "saa"})
console.log(add(4,8));


// ============IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)====================


(function chai () {
   console.log("DB connected");
})();  //end

// (defination)(call)




