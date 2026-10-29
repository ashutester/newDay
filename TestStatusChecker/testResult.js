const response=404;

if(response ===200){
    console.log("Test Passed");
}else{
    if(response===404){
        console.log("Page not found");
    }
    else{
        if(response==500){
            console.log("Server error");
        }else{
            console.log("Unknown status")
        }

    }
}

//everything is going well
