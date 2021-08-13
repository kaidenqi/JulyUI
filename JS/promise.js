


let promise = new Promise(resolve=>{
    setTimeout(
        ()=>resolve("Successfully"),2000
    )}
);

promise.then(
    result=>console.log(result)
).catch(
    err=>console.log("Error:",err)
).finally(
    ()=>console.log("Always Run")
);