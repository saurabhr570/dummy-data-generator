let p= new Promise((resolve, reject) => {
    console.log("hey i am pending")
    setTimeout(()=>{
        console.log("hey i have been fulfilled ")
        reject(new Error("hey something is wrong"))
    },3000)
})
p.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)

})
