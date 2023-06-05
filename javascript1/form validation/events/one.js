let set=document.getElementById("set")
// // addEventListener("mouseover",function(){
// //     alert("mouse in")
// // })
// // set.addEventListener("mouseout",function(){
// //     alert("mouse out")
// })
let btn=document.getElementById("btn")
    btn.addEventListener("click",function(){
       if(set!="hello world") {
        console.log(set.style.backgroundColor='red')
        }
        else{
            console.log("bye bye")
        }
    })
