/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
The fn function takes one or two arguments:
arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to 
a truthy value. A truthy value is a value where Boolean(value) returns true.
Please solve it without the built-in Array.filter method.
*/

// var filter = function(arr, fn) {
//   const filteredArray = [];

//   for (let i = 0; i < arr.length; i++){
//       if(fn(arr[i], i)){
//           filteredArray.push(arr[i]);
//       }
//   }

//   return filteredArray;
// };


// array = [0, 10, 20, 30];

// fun = function greaterThan(n){
//   return n > 10;
// }

// console.log(filter(array, fun)); //[20, 30]



// var once = function(fn) {
//   let called = false;
//   let result;
  
//   return function(...args){
//       if(!called){
//           called = true;
//           result = fn(...args);
//           return result;
//       }
//       return undefined;
//   }
// };

// let fn = (a,b,c) => (a + b + c)
// let onceFn = once(fn)

// console.log(onceFn(1,2,3)); // 6
// console.log(onceFn(2,3,6)); // returns undefined without calling fn



// var argumentsLength = function(...args) {
//   return args.length;
// };


// console.log(argumentsLength(1, 2, 3,5,6)); // 3



// var reduce = function(nums, fn, init) {
//   let res = init;

//   for(let i=0; i < nums.length; i++){
//       res = fn(res, nums[i]);
//   }
//   return res;
// };

// const nums = [1,4,3,5,7];
// const fn = (a,b) => a+b;
// console.log(reduce(nums, fn, 0))



// var map = function(arr, fn){
//   const res = [];

//   for(const i in arr){
//     res.push(fn(arr[i], Number(i)));
//   }
//   return res;
// }

// const array = [1,2,3];
// const fun = (value, index) => value * 2 + index;

// console.log(map(array, fun));





