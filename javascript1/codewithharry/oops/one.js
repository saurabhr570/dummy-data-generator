let a={
    name:"saurabh",
    run:()=>{
        console.log("hey i am proto")
    }
}
a.run()
let p={
    name1:"harshpriya",
    loc:"jaipur"
}
a.__proto__=p
console.log(a.loc)
p.__proto__={
    MN:9023908876
}
console.log(a.MN)
console.log(p.MN)
