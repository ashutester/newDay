"use strict";
// const arrOne:number[] = [1, 2, 3, 4, 5];
// console.log(arrOne);
// arrOne.push(6);
// console.log(arrOne);
// arrOne.pop();
// console.log(arrOne);
const multiArr = [[1, 2], [3, 4], [5, 6]];
multiArr.push([7, 8]);
multiArr.forEach(subArr => console.log(subArr));
multiArr.push([9, 10]);
for (const subArr of multiArr) {
    console.log(subArr);
}
console.log("----------------------");
multiArr.filter(subArr => subArr[0] > 3).forEach(subArr => console.log(subArr));
const num = 3;
const founder = [];
for (let i = 3; i <= 30; i += 3) {
    founder.push(i);
}
console.log(founder);
const sum = founder.reduce((acc, val) => acc + val, 0);
console.log(sum);
founder.forEach(num => console.log(num * num));
