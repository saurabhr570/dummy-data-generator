let a={name2:"saurabh",loc:"jaipur",
run:()=>{
    alert("selfrun")}}
console.log(a)
a.valueOf()
let p={
  run:()=>{
    alert("run")}
}
console.log(p)
a.__proto__=p
p.run()
p.__proto__={
    name:"rakesh"
}
console.log(a.name)