function removeDup(str){
    let arr = [...str];
    let newArr = arr;
    let uniqStr = '';
    for(let i=0;i<arr.length-1;i++){
        for(j=i+1;j<arr.length-1;j++){
            if(arr[i]===newArr[j]){
                uniqStr = uniqStr+ arr[i]
            }
        }
    }
    return uniqStr;
}

console.log(removeDup('junjun'));