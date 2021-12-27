// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// function sumAll(arr) {
//   return 1;
// }
// sumAll([1, 4]);

// The lowest number will not always come first.

// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.





function sumAll(arr) {
    let sum =0;
  for (let i =arr[0]; i<=arr[arr.length-1]; i++) {
     
    sum+=i;
      
  }
console.log(sum);
  return 1;


}
sumAll([5, 10]);