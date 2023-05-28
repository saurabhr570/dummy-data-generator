// arr=[1,23,56,78,0,53,45]
// let [a,b,...rest]=arr
// console.log( "",a*b,rest[2])
// spread operator
let arr1 = [1, 7, 4];
let obj1 = { ...arr1 };
console.log(obj1);
function sum(v1, v2, v3) {
  return v1 + v2 + v3;
}
console.log(sum(...arr1));
