let arr=[12,34,67,80,0,78]
let a=arr.map((value)=>{
    return value+2
})
console.log(a)
a.forEach((element) => {
    console.log((`${element} x ${element} is equal to `) +element*element ) 
});
let arr1=[67,8,50,78]
arr1.map((b,index,arr1)=>{
    console.log(b*b)
})
// arr1.filter(())
let fe=[425,67,89,54,]
let df=fe.map((element,index,fe)=>{
   console.log(element+1,1,fe)
})
console.log(df)
fe.filter((c)=>{
    if(c>100){
        console.log(c)
    }
})
let j=fe.reduce((a1,a2)=>{
    return a1-a2
})
console.log(j)