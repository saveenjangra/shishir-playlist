// 1@
// let a=[]
// let b=[]
// console.log(a==b);
// console.log(a===b);
// memory location of 2 array are not compaired

// 1(2) @
// let a=[]
// let b=a;
// console.log(a==b);
// console.log(a===b);
// true
// true

// 1(3)@
// let a=[20];
// let b=[20]
// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);
// it compare the value of element not memory
// true
// true

// 2
// let z=[1,2,3,4]
// let a={name:"anil"}
// console.log(...z);
// 1234 out from array or object

//  3@
//  console.log(typeof NaN);
//  number

// 4@
// let data=10 - -10;
// console.log(data);
// 20

// 5
// const set=new Set([1,1,2,3,4])
// console.log(set);
// {1,2,3,4}
// removes duplicate No

// 6(1)@
// let data={name:"anil"}
// console.log(delete data.name);
// true
// console.log(data);
// {}

// 6(2)@
// let data={name:"anil"}
// console.log(delete data);
// u cn't delete data obj u cn delete property of obj
// false
// console.log(data);
// {name:"anil"}

// 7
// const data=["peter","anil","sam"]
// const [y]=data;
// console.log(y);
// peter

// 7 (1) need sec. value
// const data=["peter","anil","sam"]
// const [,y]=data;
// console.log(y);
// anil

//  7(2)
// const data={name:"anil",age:"22"};
// // how to get name property without .operater
// const {name}=data;
// console.log(name);

// 8
// how to merge two object
// let data={name:"anil",age:"22"};
// let info={city:"hsr",exper:"2"};
//  data3 ={...data,...info}
// console.log(data3);

// 8(1)?
// let data={name:"anil",age:"22"};
// let info={city:"hsr"};
//  data ={data,...info}
// console.log(data);

// 8(2)
// let data={name:"anil",experience:"66",age:"22"};
// let info={city:"hsr",age:"2"};
//  data3 ={...data,...info}
// console.log(data3);
// postion is same but value will got second Object

// 9
// const name="Anil"
// console.log(name());
// this is not a function u cnt call it

// 10
// const result=false || {} || null
// console.log(result);
// false is false than it goes farward and get {} that
// is true if or get true than it will not go upto null

// 10(1)
// const result=null || false || ''
// console.log(result);
// null is false than it goes farward and get false that
// is false than it will go upto '' if not got any true
// value than it will took last value that is false

// 10(2)
// const result =[] || 0 || true
// console.log(result);
// we consider array and obj true

// 10(3)
// console.log(Promise.resolve(5));
// gives promise fullfilled bcz it itself contained promise

// 11
// console.log("dil"==="dil");
// dil emoje made up of same unicode that gives true value

// 12
// JSON.parse()
// parses JSON to Javascript

// 13
// let name="sidhu"
// function getName(){
//     console.log(name);
//     let name="anil"
// }
// getName()
// cn not access name before initializtion

// 13(1)
// let name="sidhu"
// function getName(){
//     console.log(name);

// }
// getName()

// 14
// console.log(`${(x=>x)('i love')} to program`);

// 15
// function sumValues(x,y,z){
//     return x+y+z;
// }
// console.log(sumValues(...[1,2,3]));

// 16
// const name="saveen"
// console.log(!typeof name==='object');
// console.log(!typeof name==='string');

// ans
// // console.log(typeof name);string
// console.log(!typeof name);gives false
// and false is compared to obj or string gives false

// 17
// const name ="saveen";
// const age=22;
// console.log(isNaN(name));
// console.log(isNaN(age));
// true
// false

// 18
// let person ={name:"Anil"}
// // how cn modify person object
// // means inside value not like person="hello"
// Object.seal(person)
// person.age="22"

// // when u apply seal u cn t nt add value bt cn modify

// person.name="sifhi"
// console.log(person);

// 19
// let data=[2,3,4,5]
// remove ist element
// data.shift()
// remove last element
// data.pop()
// console.log(data);

// 20
// let data="true"
// convert data to boolean true value
// console.log(typeof !data);
// string k aage negation lagane se boolean bn jaati h or
// dubara negation se vo true ho jaaegi
// console.log(!!data);

// 21 diff b/n map and for each
// map always retrurn something and for each not

// 22
// let data=["anil","peter","bruce"]
// delete data[1]
// console.log(data);
// console.log(data.length);
// make empty at peter place,3

// 23
// let a=[1,2,3,4]
// let b=[4,5,6]
// let c=[...a,...b]
// console.log(c);
// it does not takes second array value 4

// 24
// let a=2
// setTimeout(()=>{
//     console.log(a);
// },0)
// a=100

// 25@
// let a="like"
// let b=`like`
// console.log(a===b);

// 26(1)
// let a=1;
// let c=2;
// console.log(--c === a);
// --2=>1

// 26(2)
// let a=1;
// let b=1
// let c=2
// console.log(a===b=== --c);
// a and b both are no gives true
// and true and comparing with no ie 1 gives false

// 27
// console.log(3*3);
// console.log(3**3);
// console.log(3***3); not exist

// 28(1)
// console.log(a);
// var a;
// undefined=>we declared it bt value and nt defined

// 28(2)
// console.log(b);
// not defined=>we still nt declared

// 29
// console.log([[[[]]]]);
// nt gives error ;
// 4 array ist 3 array contains value 1 and last one contained zero.

// 30 how to find operating system name
// navigator.platform

// 31
// let for=100;
// is it run
// no for is a reserved keyword

// 32
// function fruit(){
//     console.log(name);
//     console.log(price);
//     var name="apple"
//     let price=20
// }
// fruit()
// in hoising u cn use varible ist and declare it late in case of var
// but u cn not do it so in case of let

// 33 @?
// for(var i=0; i<3;i++){
//     setTimeout(()=>console.log(i),1  )
// }

// 33 (2) @?
// for(let i=0; i<3;i++){
//     setTimeout(()=>console.log(i),1  )
// }

// 34
// console.log(+true)
// console.log(typeof +true)

// 35
// console.log(!"first")
// console.log(typeof("first"))
// false
// string

// 36
// let data="size"
// const bird={
//     size:"small",
// }
// console.log(bird[data])
// console.log(bird["size"])
// console.log(bird.size)
// console.log(bird.data)

// 37
// let c={name:"peter"}
// let d;
// d=c;
// c.name="anil"
// console.log(d.name)

// 38
// var x;
// var x=10
// console.log(x)

// 38(1)
// var x;
// let x=10
// console.log(x)

// 39
// let a=3;
// let b=new Number(3)
// console.log(a==b)
// console.log(a===b)
// true
// false(bcz it become object)

// 40
// function fruit(){
//     console.log("woof")
// }
// fruit.name="apple"
// fruit()
// does nt effect not gives any error

// 41
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,"2"))
// number +string =>number

// 42
// let number=0;
// console.log(number++)
// console.log(++number)
// console.log(number)
// 0
// 2
// 2

// 43
// function getAge(...args){
//     console.log(typeof args)
// }
// getAge(21)
// [21]
// object type bcz j,s main data type kbhi array nhi hota

// 44
// function age(){
//  'use strict'
//     age=21;
//     console.log(age)
// }
// age()

// 45
// const sum=eval('10*10+5')
// console.log(sum)

// 46
// const obj={1:"a",2:"b",3:"c"}
// console.log(obj.hasOwnProperty("1"))
// console.log(obj.hasOwnProperty(1))
// both are true

// 47
// const obj={a:"one",b:"two",a:"repeat"}
// console.log(obj)
// postion of a is same but tokes value repeat

// 48
// for (let i=1; i<5;i++){
//     if(i===3)continue
//     console.log(i)
// }
// 1 2 4

// 49
// const foo=()=>console.log("first")
// const bar=()=>setTimeout(()=>console.log("second"))
// const baz=()=>console.log("third")
// bar();
// foo()
// baz()

// 50
// const person={name:"anil"}

// function sayHi(age){
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,21))
// console.log(sayHi.bind(person,21))

// anil is 21
// bind gives whole function if u want to get value u have to call it

// console.log(sayHi.bind(person,21)())

// 51
// function sayHi(){
//     return (()=>0)();

// }
// console.log(typeof sayHi())

// 51(1)
// function sayHi(){
//     return (()=>0);

// }
// console.log(typeof sayHi())

// 52
// console.log(typeof typeof 1)
// number ki type string

// 53
// const numbers=[1,2,3];
// numbers[6]=11
// console.log(numbers)
// [1,2,3,empty,empty,empty,11]

// 54
// const numbers=[1,2,3];
// numbers[6]=numbers
// console.log(numbers)
// infinite array and every 6th position the array numbers Comes

// 55
// everything in J.s is either a premitive or object not only Object'

// 56
// console.log(!!null)
// console.log(!!"")
// console.log(!!1)

// 57
// console.log([..."anil"])

// 58
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });
// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });
// Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));

// 59
// let person={name:'peter'}
// const members=[person]
// person=null
// console.log(members)

// 60
// const person={
//     name:'batman',
//     age:21,
// }
// for(const item in person){
//     console.log(item)
// }

// 61
// let data=3+4+'5'
// console.log(typeof data)

// 62(1)
// console.log(typeof 3+4+'5')

// 62(2)
// console.log(typeof (3+4+ +'5'))
// +before string makes it number 

// 63
// let data=[1,2,3].map(num=>{
//     if(typeof num==='number')return;
//     return num*2
// })
// console.log(data)

// 64
// function getInfo(member){
//     member.name="anil"
// }
// const person={name:'sarah'}
// getInfo(person)
// console.log(person)

// 65?
// function Car(){
//     this.make='tata'
//     return {make:'kia'}
// }
// const myCar=new Car();
// console.log(myCar.make)

// 66
// (()=>{ let x=(y=10)})
// ();
// console.log(typeof x)
// undefined

// 67
// (()=>{
//     let x=y=10;
// })
// ()
// console.log(typeof y)
// ans=>Number
// let x=10
// y=10
// it is not made up of any let ,var so its scope is out of it 

// 68
// console.log(!true-true)

// 68(1)
// console.log(true + +'10')