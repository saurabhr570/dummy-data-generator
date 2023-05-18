let p = new Promise((resolve, reject) => {
    console.log("hey i am pending")
  setTimeout(() => {
    console.log("hey i am fullfilled")
    resolve("yup");
  }, 5000);
 
});
console.log(p)
let p1 = new Promise((resolve, reject) => {
    console.log("hey i am pending")
  setTimeout(() => {
    console.log("hey i am rejected")
    reject(new Error("hey i am an error"));
  }, 5000);
 
});
p.then((value)=>{
    console.log(value)
})
p1.catch((error)=>{
console.log("hey i am an error and i ve been caught")
})
let promise=new Promise(resolve=>{
    setTimeout(()=>resolve("done")

    ,2000)
})
promise.then(alert)