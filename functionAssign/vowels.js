function containsVowel(str){
    let found = false;
    let lowerStr = str.toLowerCase();
    let newStr = lowerStr.split("");

    for(let i=0;i<newStr.length;i++){
        if (newStr[i]==='a'||newStr[i]==='e'||newStr[i]==='i'||newStr[i]==='o'||newStr[i]==='u')
        {
            found = true;
            break;
        }
    }
    

    let result = "";
    if(found){
        result = "Vowel found";
    }
    else{
        result = "No vowel";
    }
    
    return result;
}

console.log(containsVowel("Vibhuti"));