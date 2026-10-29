const arr = [15,25,35, 78,45];
let sum=0; avg=0;
for(let val =0; val < arr.length;val++){
    sum= sum+arr[val];
}
avg = sum/arr.length;

console.log("The total sum: "+sum);
console.log("The calculated average: "+ avg);
