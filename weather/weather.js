let temperature = 28;

if(temperature >35){
    console.log("Wear light cotton cloths");
}else{
    if(temperature >=20 && temperature<=35){
        console.log("Normal casual wear");
    }
    else{
        if(temperature >=10 && temperature<=19){
            console.log("Wear a jacket")
        }
        else{
            console.log("Stay indoors, it's too cold!")
        }
    }
}
