// class Solution {
//     twoSum(nums, target) {
//         let result = [];
//         let position1;
//         let position2;
//         for (let i = 0; i < nums.length; i++) {
//             for (let j = i + 1; j < nums.length; j++) {
//                 if (nums[i] + nums[j] === target) {
//                     result.push([i, j]); 
//                 }
//             }      
//         }     
        
//         return result;
//     }
// }
// let arr = new Solution();
// console.log(arr.twoSum([2,7,11,15],9));

// const multiply = (a, b) => a * b;
// console.log(multiply(5, 10));

const arr = [1,2,3,4,5,6,7,8,9,10];
// const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (const num of arr) {
//     console.log(num);
// }
const evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers);