let a1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value1")

    },8000)
})
let a2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       // reject(new Error("error"))
       reject(new Error("error"))

    },4000)
})
let a3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value3")

    },6000)
})
// a1.then((value)=>{
//     console.log(value)
// })
// a2.then((value)=>{
//     console.log(value)
// })
// a3.then((value)=>{
//     console.log(value)
// })
// let promise_all= Promise.all([a1,a2,a3])
// promise_all.then((value)=>{
// console.log(value)
// })
// let promise_all= Promise.allSettled([a1,a2,a3])
// promise_all.then((value)=>{
// console.log(value)
// })
// let promise_all= Promise.race([a1,a2,a3])
// promise_all.then((value)=>{
// console.log(value)
// })
 let promise_all= Promise.any([a1,a2,a3])
promise_all.then((value)=>{
console.log(value)
})



