let p=fetch("https://animechan.vercel.app/api/random/character?name=saitama")
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()

}).then((value)=>{
    console.log(value)
})