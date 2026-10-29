binaryGap(str){
    let start=-1;
    let gap;
    let arr = [...str];
    for (i=0;i<arr.length-1;i++){
        for (j=i;j<arr.length-1;j++){
            if(arr[j]==='1'){
                start++;
            }else if(arr[j]==='0'){
                temp++;
            }
        }
    }
}