// 1. callback function=>a callback is a function passed as an argument to another function

// function show1(int){
// console.log("show1data"+" "+int);
// }
// function show2(int1,int2,callback){
//     let int=int1+int2

// callback(int)
// }
// show2(5,6,show1)

// 2.promises are introduced in ES6 version in 2015,it can be producing code or consuming code

// let mypromise=new Promise(function(resolve,reject){
// let x=3;
// if (x>=5){
//     resolve(x)
// }else{
//     reject(x)
// }
// })this is producing code
//

// mypromise.then((value)=>{
//  alert("success"+value)
// })
// .catch((error)=>{
//     alert("error"+error)
// })
// this is consuming code

// 3.difference let and var

// let                var
// blockedscoped     fumction scoped
// does not allow       allow
// to redeclare variable
// features of ES6       var is ECMA script  feature
// hoisting is not allowed with let  hoisting is allowed

// 4 hoisting=>use of variable before it has been declared

// x=5;
// console.log(x);
// var x;

// 5 clouser =>clouser is a inner function that can acccess the outer function variable as well as global variables

// const outerFunction = (a) => {
//   let b = 20;
//   const innnerFunction = () => {
//     let c = a + b;
//     console.log(c);
//   };
//   return innnerFunction;
// };
// let result = outerFunction(10);
// result()

// 6.function and class componet
// we create a simple j.s function
// we use props as argument
// we use return statement to return react element
// No life cycles methods
// constructor are not used
// it has hooks
// we create a class also extend react
// we use this.props.name to access props
// we use render function to return react element
// it has life cycle methods
// constructor are used
// no hooks present

// 6.useState
// use state is a hook,used in functional component to track state,state is like data or properties.

// ist import
// const[number,setNumber]=useState("")
// number=to get value
// setNumber('blue')=to set value ,this is a fucntion

// 7 JSx java script xml
// we use jsx to create user interface
// with the help of this we write html inside j.s
// browser can t read jsx,so babel is a complier to convert jsx to regular javascript code

// let Edit=()=>{
//     let number=8;
//     return <>
//         <h2>Edit</h2>
//         {number}
//     </>
// }
// export default Edit;

// here function edit is a j.s feature and h2 inside it is a html

// 8 settimeout and settimeinterval
// setTimeout() method calls a function at specified time
// setTimeout() method calls a function again and again at specified time

// function show(){
//     console.log("show data");
// }
// const TimeoutFun= setTimeout(show,2000)

// function show(){
//     console.log("show data");
// }
// const TimeoutFun= setInterval(show,2000)

// 9.npm vs yarn
// npm package manager
// npm manage a projects dependencies
// node package manager
// npm is installed with node automatically
// it install package sequentially
// tried to fix vulnerabilities
// in terms speed and performance is good

// yarn package manager
// yarn manage a projects dependencies
// yet another resource negotiator
// we use npm install yarn --global
// intall packages parallely
// yarn is more secure than npm
// in terms of speed and performance yarn is better than npm

// 10 flux
// flux is an application architecture,created by facebook
// it is not a library not a framework
// facebook uses internally for building the client-side web applivation with react.
// it is unidirectional data flow pattern to solve state managment complexity,
// Redux is a more advanced version of flux

// npm installl flux@3.1.3

// flux data flow
// Dispatcher=>Actions=>Stores=>View

// 11 Event Listner
// it is a j.s method that allows adding more than one handler for an event

// document.getElementById("btnSubmit").addEventListener("click",function1);
// document.getElementById("btnSubmit").addEventListener("click",function2);
// document.getElementById("btnSubmit").addEventListener("click",function3);

// button pe ek se jydaa event lga diye

// 12.reverse() method
// j.s reverse method reverse the array method

// const names=["1","2","3","4"]
// console.log(names.reverse());

// 13.what is the use of refs
// using useRef hook we can handle Dom element manipulation , for this we add a ref attribute to an element to access it directly in the Dom

// import {useRef} from "react"
// const ElementRef=useRef("")
// <input ref={ElementRef} type="text" value="Rajesh"/>
// ElementRef.current.style.color="red"

// 14.props in react
// props stand for property,props are passed as a argument to components just like htmk attributes

// in functional component =>functional component receive as function argument
// class component receive by this.props properties

// 15.controlled and uncontrolled components
// we use use state hook in controlled component for handling data'
// in uncontrolled component we use useRef for dom manipulation

// 16.@@prop drilling
// prop drilling is a situation when we passing some data to every level and our requirement is to final level component so we are unnecessary passing data.
// to avoid this issue we use redux,context,componet composition

// 17shallow copy and deep copy in js
// shallow=>coping only top level elements,it means certain values are still connetctd to original variabele

// deep copy=>coping top level and nested elements, it makes a copy of all attributes of the old object and allocates seprate memory addressess for the new obj

// let personObj = {
//   Name: "dmon",
//   add: {
//     city: "delhi",
//   },
// };
// let personObj1 = personObj;
// console.log(personObj1);

// let personObj2 = Object.assign({}, personObj);
// console.log(personObj2);

// let personObj3 = JSON.parse(JSON.stringify(personObj));
// console.log(personObj3);

// 17.event loop in j.s
// callback queue things goes instack this process is done by event loop

// 18 rest operator=>is the last parameter in which values are contained npt like this 
// fucntion show(a,b,...others,p,v)

// .it packs the element into array

// function show(a,b,...others){
//   console.log(a);
//   console.log(b);
//   console.log(others);
// }
// show(2,3,4,5,6,7,)

// 19spread operator =>it unpack the elements of an object

// const myarray1=[2,3,4]
// const myarray2=[5,6,7]
// const myarray3=[myarray1,myarray2]
// const myarray4=[...myarray1,...myarray2]

// console.log(myarray3);
// console.log(myarray4);

// 20 destructring
// const names=['rajesh','saveen','naveen'];
// const [name1,name2,name3]=names
// console.log(name1);
// console.log(name2);
// console.log(name3);

// 21 virtual dom vs real dome
// virtual dom followed by react
// real dom followed by angular
// in vartual dom makes a copy of it on browser and than changes takes place than it compare the changes with copy and updates only changed portion and in real dom directly changes take place on browser

// 22 what is semantic ui

// material ui
// ant design
// fluent Ui
// react bootstarap
// redux
// semantic Ui

// npm i semantic-ui-react 

// 23
// let arr=[1,2,3]
// console.log(arr);
// console.log(...arr);
// console.log({...arr});
// console.log({arr});

// 24 map() =>creating a new array from calling a function for every array element 

// const arr=[1,2,3,4,5]
//  arr.map((input)=>{
//   console.log(input);
// })


// 24 filter
// const arr=[1,2,3,4,5]
// const hello=arr.filter((input)=>{
//   if(input%2==0){
//     return input
//   }
// })
// console.log(hello);

// 25.@@@ local storage
// 1.it allows save value in browser
// 2.right click inspect element you can see local storage
// 3 local storage has no expiration date
// 4 when browser is closed ,no date is deleted

// localStorage.setItem("user1","saveee")
// localStorage.getItem("user1")
// localStorage.removeItem("user1")
// localStorage.clear()

// 26.how redux work
// redux is a state mangmt lib,it is third party lib,we cn use redux anywhere like angular,vue,react

// store=>where we store all states
// components=>here we use useStates
// Action=>it containes type n payload
// dispatcher=>dispatch is the method used to dispatch actions and trigger state changes to the store
// reducer=>here we can write ligic to change the states

//  27 javaScript entries
// the entries() method returns key and value of array,it does not change the original array
// means to say it gives index with key value

// const input=[3,4,5,67,7,4]
// const arr=input.entries()
// for (let x of arr){
//   console.log(x);
// }

// 28 index of
// this method return first index of value and if value not found then return -1;

// const input=[2,3,4,5,6,7]
// const hello=input.indexOf(4)
// console.log(hello);

// 29 for each=>this method calls a fucntion for each element in an array,if arrau is empty then method is not executed

// const input=[1,2,3,4,5,6]
// input.forEach(hi)

// function hi(item){
//   console.log(item);
// }

// 30 
// function show(){
//    a=10;
//   let b=50;
// }
// show()
// console.log(a); 
// console.log(b);

// by default a is defined by var
// b is begining with let it has scoped only inside it is blocked scoped

// 31@@use Reducer
// useReducer hook is similar to the usestate hook
// useReducer(<reducer>,<initialStat>)
// this hook returns current state and a dispatch method.

// import {useReducer} from 'react'
// function App(){
//   const initialQty=0;
//   const reducer=(state,action)=>{

//   }
//   const [totalProduct,dispatch]=useReducer(reducer,initialQty)

// return<>
//   {totalProduct}
//   <button onClick={()=>dispatchEvent("add")}>Add Product </button>
// </>
// }
// export default App;

// 32 @@memoiztion
// it is a technique for speeding up
// applications by caching

// chashing =>suppose we have a func
// and we are callig it with parameter now we want to call again this fucntion with same parameter it is not necessary to call again the result of func one can be stored in cashing,it cn be done by j.s and usememo hook

// 33 higher order component

// it is a component,it takes another function as an argument,it returns a new component 

// function HOC(props){
//   return <h2>props.mycomp</h2>
// }
// function Blog(props){
//   return <h2></h2>
// }
// function App(props){
//   return <HOC mycomp={Blog}/>
// }

// 34Life cycle method in react
// in react each component has the=ree pahases that is mounting,updating, and unmounting

// mounting=>putting element in dom updatign=>updating a component unmounting=>removed from the dom

// mounting methods
// constructor()
// getderivedStatefromprops()
// render()
// componentDidMount()

// unmounting
// getderivedStateFromProps()
// shouldcomponentUpdate
// render
// getSnapShotBeforeupdate
// componentDidUpdate

// unmounting 
// componentwillUnmout

// 35.redux thunk
// redux thunk is a middleware.it is a function that return another function, and the purpose of middleware is to intercept an action before it reaches the reducer ,insted of sending the action to the reducer directly,first it will go to middleware by thunk and if need some change like type,payload the do it and then pass to reducers

// 36lexical scoping 
// using lexcial scoping ,in inner function we can access the variable of the outer fuction ,mean we access variable of the outer scope from the inner scope,the child function is seen to have lexically bound the parent function .it is also called static scoping

// var a=10;
// function outer(){
//   var b=20
//   function inner(){
//     var c=30
//     console.log(a+b+c);

//   }
//   inner()
// }
// outer()

// 37.pure function in j.s
// a function that accept argument and return a value.it is depend upon what argument are you passing.it doesnot modifying any value.its output does not get affected by any other values and state
 

// pure function
// x=9;
// function sqr(x){
//   return x*x;
// }
//  console.log(sqr(5));


// impure function
//  x=9;
//  function sqr(){
//    return x*x;
//  }
//   console.log(sqr());

// 38 purecomponent.it exist in both class as well as fuction component

// pure component in class component
// normal component re render ageain and again but purecomponent rerenders when changes in its props and state

// class Greeting extends PureComponent{
//   render()[
//     return <h1>hello ,{this.PaymentResponse.name}<h1/>
//   ]
// }

// bas pure keyword lga kr k hm normal se pure function bna sakte h

// but in fucntional componet we use react.memo()

// react.memo() is a higher order component that takes a react component as its first argument and returns a pure react component

// import {memo,useState} from 'react'

// 39 unidirectional data flow in react js or oneway binding

// u cn pass data from parent compinent by props and can receieve in child component but we cn t pass data from child component to paresnt component also child components can not update or modify the data pn theie own 

// we cna say react follow clean data flow architecture

// advantages
// debugging,better control,effienciecy

// 40 hw to pass data from child to parent component

// parent component
// import react from react
// import child 

// export const Parent=()=>{
//   const show=(message)=>{
//     return <>
//              {message}
//            </>
//   }
//   return(
//           <>child callchild={show}</>
//         )
// }

// // child component
// import react from react
// const child =(props)=>{
//   return(
//     <>
//       {props.callchild('text msg')}
//     </>
//   )
// }
// export default child


//  41 in how many ways to call api in react
// 3 ways 
// xml http request,fetch api,axios

// 42what are the advantages of redux with react js
// centalized state mangamt system that is store,easy state transfer btwn compoents,easy to debug,performance optiomiztions,great supportive community,storing long term data







