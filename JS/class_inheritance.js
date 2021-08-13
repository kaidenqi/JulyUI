
// class A{
//     constructor(x){
//         this.a = x;
//     }

//     dis(){
//         console.log('A:', this.a);
//     }
// }

// class B extends A{
//     constructor(x,y){
//         super(x);
//         this.b = y;
//     }

//     dis(){
//         super.dis();
//         console.log('B:', this.b);
//     }
// }

// class C extends B{
//     constructor(x,y,z){
//         super(x,y);
//         this.c = z;
//     }
//     dis(){
//         super.dis();
//         console.log('C:',this.c);
//         console.log(`A:${this.a} B:${this.b} C:${this.c}`);//` 这个标点位于键盘左上角的tild那个点
//     }
// }

// let c = new C(11,22,33);
// c.dis();


//Lion


class God{
    hi(){
        console.log("He is the GOD")
    }
}
class Animal extends God{
    constructor(name, height){
        super();
        this.name = name;
        this.height = height
    }
    hello(){
        console.log(`Hello I am ${this.name} from the animal kingdom`)
        console.log(`${this.name}`);
    }
}
// console.dir(Animal)
// let king = new Animal("Lion King",4.5)
// console.log(king)
// king.hello()
// king.hi()

class Lion extends Animal{
    constructor(name, height, color){
        super(name, height);
        this.color = color;
    }
    //inherited hello() -- similr to overriding
    // hello(){
    //     console.log(`Hello  from  CHILD ${this.name}`)
    // }
}

let lion = new Lion("Lion King", 4.5, "golden")
lion.hello()





  
