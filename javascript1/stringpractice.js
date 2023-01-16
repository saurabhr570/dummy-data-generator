//write a program to find given word or string is available in other string or not
let str="coding is in my blood you will see one day"
let word="blood"
console.log(`the word "${word}"${str.includes(word)  ?"is": "is not"} in the str`)
let sentns="a monkey is sitting on the roof"
let char="monkey is dancing"
console.log(`the word "${char}" ${sentns.includes(char)?"is":"is not"} present in the sentense`)
//write a program to print amount from a string in to number
let strg="i have 10000000 in my bank account"
let amount=(strg.slice(7,15))
console.log(amount)