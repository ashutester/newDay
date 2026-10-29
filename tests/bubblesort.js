function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-1;j++){
            if (arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }    
        }
        
    }
    return arr;
}

let arr = [20,10,30,7,50]
console.log(bubbleSort(arr));