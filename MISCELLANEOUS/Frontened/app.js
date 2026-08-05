// let arr=[2,3,4,9,5,6];
// console.log(arr.pop())
// arr.push(4);
// console.log(arr.pop())



// CONSTRUCTOR CALLING(new operator)
// function person(name, age){
//     this.name=name;
//     this.age=age;
// }


// person.prototype.talk=function(){
//     console.log(` hi. my name is ${this.name}`);
// }


class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hi, i am ${this.name}`);
    };
}
let p1= new Person("santosh",20);
let p2= new Person("aditya",30);