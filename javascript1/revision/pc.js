// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("i am fullfilled in three second");
//     resolve("56");
//   }, 3000);
// })
//   .then((value) => {
//     console.log(value);
//     let p2 = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("i am the value");
//       }, 3000);
//     });
//     return p2;
//   })
//   .then((value) => {
//     console.log(value);
//   });
// making loadscript function with the help of promise
const loadscript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload=() => {
      resolve(1);
    };
    script.onerror=() => {
      reject("this is an error")
    };
  });
};
let p1=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value);
    let p2= new Promise((resolve, reject) => {
        resolve(6)
    })
    return p2
  }).then((value)=>{
    console.log(value)
  }).catch((error) => {
    console.log(error);
  });
  
