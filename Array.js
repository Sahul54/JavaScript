// Array ->  Collection of items

let fruits =["apple", "banana", "papaya" ];
console.log(fruits)

// let marks = [1,2,3,4,5,6,7];
// console.log(marks);
// console.log(marks.length); // property --> return value   // method --> some work
// console.log(typeof(fruits));
// marks[2] =33   // it is mutuabale  --> string is in mutuable
// console.log(marks);

// let info = ["aa",5, "fg"]
// console.log(info);   // not prefre this array  ---> differtent iteam use for object

// for (let mark of marks) {  // of value
//   console.log(mark);
  
// }

// for (let mark of marks) {  // of index
//   console.log(mark);
  
// }
  //  Pratice question of 1
// let marks = [54,89,77,52,58];
// let sum = 0;

// for (let val of marks){
//   sum += val;

// }
// console.log("total marks : "+ sum);

// let avg = sum / marks.length;
// console.log("avg marks of this class : "+ avg);

// Pratice of question 2

// let items = [ 250, 645, 300, 900, 50];

// let i =0;
// for(let val of items){
//   console.log("value of index " + i + " = " + val);

// let offer = val/10;
// items[i] = items[i] - offer;
//  console.log("value of after = " + items[i]) ;
//   i++;
// }

// ------------Array method-------------


/*
  1. push(): add to end
  2. pop(): delete from & return
  3. tostring(): convert array to String
  4. concat(): join multiple arrays & return result
  5. unshift(): add to start
  6. shift(): detete from start & Return
  7. slice(): return a piece of the array & don't change original array
   slice(stsrtdx, endldx)
  8. splice(): change original array (add, remove, replace )
  splice(startdx, delcount,  newEl1...)
  */

  // let veggies = ["potato", "onion", "chilli"];
  // console.log(veggies);

  // veggies.push("carrot", "radish", "tamato");
  // console.log(veggies);

  // veggies.pop();
  // console.log(veggies);
  // console.log(veggies.toString());  //return string


  //  ====> NOTE: method is always start small   =========

  let list =["che", "math", "eng"];
  // list.unshift("phy"); //add to started
  // console.log(list);
  // list.shift(); // delete to end
  // console.log(list);

  // console.log(list.slice(0,));

  let arr = [1,2,3,4,5,6];
  arr.splice(2,2,7,8);
  console.log(arr);
