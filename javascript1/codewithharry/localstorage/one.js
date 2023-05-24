let key=prompt("enter your key")
let value=prompt("enter the value")
localStorage.setItem(key,value)
console.log(`the value of ${key} is ${localStorage.getItem(key)}`)