function vowels(str){
    let arr = [...str];
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]=='a'|| arr[i]=='e'||arr[i]=='i' ||arr[i]=='o' ||arr[i]=='u'){
            newArr.push(arr[i]);
            arr.shift();
        }

    }
    let newStr = newArr.join();
    return (newStr);
}

console.log(vowels('ashutosh'));