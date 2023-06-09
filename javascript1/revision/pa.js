let p1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(1)
    },2000)
})
let p2=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(3)
    },3000)
})
let p3=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(5)
    },5000)
})
let p5=new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(new Error("error"))
    },6000)
})
// let p4=Promise.all([p1,p2,p3])
let p4=Promise.allSettled([p1,p2,p3,p5])
p4.then((value)=>{
    console.log(value)
})