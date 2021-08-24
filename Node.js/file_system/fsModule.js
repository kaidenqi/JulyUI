

var fs = require('fs');

// 1. append data

// //Solution1: using {'flag':'a'} as a param to append data
// var readMe = fs.readFileSync('data.txt', 'utf-8');
// // fs.writeFileSync('write.txt',readMe, {'flag':'a'});
// // console.log(readMe);

// //Solution2: using appendFile to append data
// fs.appendFile('write.txt', readMe, (err)=>{
//     if (err) throw err;
// });


//2. delete a non-emoty folder in NodeJS

fs.rmdir('deleted',{recursive:true},(err)=>{
    if (err) throw err;
});

//  3. Encoding and character set
// (1) character set is the set of characters you can use.
// (2) encoding is the way these characters are stored into memory.


// 4. CommonJS VS AMD
// CommonJS is a project to define a common API and module specification.
// AMD is Asynchronus Module Definition. The main difference is that AMD 
// specifies that modules are loaded asynchronously.

