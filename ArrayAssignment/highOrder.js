const automationTools = ['Selenium',"Playwright",'Cypress','Webdriverio']
    const response = automationTools.some(val =>  val==='Playwright')
    
    if(response){
        console.log('Playwright is supported')
    }else{
        console.log("Playwright not found in supported tools");
    }

    const strTools = "regression,smoke,api,sanity"

    const arrTools = strTools.split(',')
   
    const resp2 = arrTools.some(val=>val==="smoke")
    if(resp2){
        console.log('Smoke tests will be executed')
    }
    
    const resp3 = arrTools.some(val=>val==="Performance");
    
    if(resp3){
        console.log("Performance tests will be executed");
    }

    const emailAdde = "mukesh@test.com"

    const validEmail = emailAdde.includes('@') && emailAdde.endsWith('.com')
    if(validEmail){
        console.log('Email is valid')
    }else{
        console.log('invalid email format');
     }