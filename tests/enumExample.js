function maxCounter(arr){

  let nLength = Math.max(...arr);
  let n = []
  for (let j=0;j<nLength;j++){
    n[j] = 0;
  }
  console.log('Before: '+n)
  for(let i=0;i<arr.length;i++){
    let num = arr[i];
    n[num-1]++;
  }
  console.log('After: '+n)
return n;
}
let original=[4,2,6,2,2,1]
console.log(maxCounter(original));