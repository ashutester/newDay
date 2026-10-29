let arr = [];
for(let i=2;i<=100;i++){
    let isPrime=false;
    let result = 0;

    for(j=2;j<i;j++){  
        result = i%j;
        if(!result){
           isPrime = true     
        }
    }    
    if(!isPrime){
        arr.push(i);
    }
}
console.log(arr);

//This is nice