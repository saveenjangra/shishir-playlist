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


