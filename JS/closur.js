

function outer(a){
    let outerA = 99;

    return function inner(){
        let c = 88;
        console.log(outerA);
        console.log(a);
        function inerrineer(){
            console.log(outerA);
            console.log(a);
            console.log(c);
        }
        inerrineer();
    }
}

let inner = outer(1);
setTimeout(
    ()=>{inner()}, 2000
);