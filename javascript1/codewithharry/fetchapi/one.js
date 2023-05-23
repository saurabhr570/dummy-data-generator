let p=fetch("https://goweather.herokuapp.com/weather/hyderabad")
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()

}).then((request)=>{
    console.log(request)
})