function convertTemp(value,type){
    if(type==='C'|| type==='c'){
        return (((value-32) *5) /9)
    }else{
        if(type==='F'|| type==='f'){
            return (((value*9)/5)+32)
        }
        else{
            return "Invalid parameters"
        }
    }
}

console.log(convertTemp(100,'C'));


