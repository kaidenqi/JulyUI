
//Closure Sample
function outer(){
    let x =10, y= 8;
    console.log("outer function");
    return function inner(){
        console.log(x);
    }
}

let test = outer();
test();

//What is closure?
// A closure is the combination of a function and its surrounding state.
// a closure gives you access to an outer function’s scope from an inner function.

// closure VS garbadge collector

// broswer is very smart. Closure variables which will be referenced are not collected.
// x = 10 不会被GC回收，因为x后面要被inner function引用。
// y = 8 会被回收，因为不会被引用。

