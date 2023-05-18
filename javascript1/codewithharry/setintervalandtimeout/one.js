// let a=setTimeout(function() {
//     alert("i am gonna do it")
// },5000)
// console.log(a)
// let b=prompt("do YOu wan to proceed")
// if('n'==b){
//     clearTimeout(a)
// }
// console.log(a)
const add=(a,b)=>{
    console.log(a+b)
}
add(20,40)
setTimeout(add,5000,10,20)