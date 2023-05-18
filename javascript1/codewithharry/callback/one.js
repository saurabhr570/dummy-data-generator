function loadscript(src,callback){
    var script=document.createElement("script")
    script.src=src
    script.onload=function(){
        console.log("script loaded with SRC:" + src)
        callback(null,src)
    }
    script.onerror=function(){
        console.log("error with SRC:"+src)
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script)
}
function hello(error,src){
    if (error){
        console.log("this is wrong script" + src)
        return
    }
    alert("hello world")
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",hello)