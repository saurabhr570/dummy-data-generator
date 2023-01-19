//write a function to print an array value in ascending order
/*let arr=[12,34,56,43,34,27,19,67,89,56]
let compare=(a,b)=>{
    return a-b
}
arr.sort(compare)
console.log(arr)*/
//write a function to print an array value in descending order
let arr=[12,34,56,43,34,27,19,67,89,56]
let compare=(a,b)=>{
    return b-a
}
arr.sort(compare)
console.log(arr)