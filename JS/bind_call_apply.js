let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};

//Unlike the call() and apply() methods, 
// the bind() method doesn’t immediately execute the function.


// let f = person.getName.bind(person);
// f();

// let f = person.getName.call(person);

let f = person.getName.apply(person);
