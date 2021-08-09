
// function sum(){
//     let sum = 0;
//     for(let i=0; i<arguments.length ; i++){
//         sum += arguments[i]
//     }
//     console.log("SUM:", sum)
//     console.log(arguments instanceof Array)
// }
// sum(1,2,3,4)

// // a b 是占位符，我后面要计算的是args，也就是ab之后的数字才是args
// function sum(a,b,...args){
//     let sum = 0;
//     for(let i=0; i<args.length ; i++){
//         sum += args[i]
//         console.log(args[i]);
//     }
//     console.log("SUM:", sum)
//     console.log(args instanceof Array)
// }
// sum(1,2,3,4,1)


var funcs = []
for(var i=0; i<3;i++){
    funcs[i] = function(){
        console.log("My Value:"+i)
    }
}

for(let j=0; j<3;j++){
    funcs[j]();
}