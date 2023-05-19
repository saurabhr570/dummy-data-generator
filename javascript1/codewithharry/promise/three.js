async function saurabh(){
    let raj_pop=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("3 crore")
    },3000)
})
let UP_pop=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("22 crore")
    },5000)
})
console.log("fetching population of rajasthan")
let rajp=await raj_pop
console.log("population fetched and the total is :"+rajp)
console.log("fetching population of up")
let upp=await UP_pop
console.log("population fetched and the total is :"+upp)
 return[rajp,upp]
// raj_pop.then(alert)
// UP_pop.then(alert)
}
console.log("welcome to janganana kendra")
let a=saurabh()
a.then((value)=>{
    console.log(value)
})




//  async function saurabh(){
//     return 5079
// }
// saurabh().then((x)=>{
// alert(x)
// })