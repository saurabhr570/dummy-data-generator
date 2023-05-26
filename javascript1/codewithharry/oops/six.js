class math{
constructor(name){
    this.name=name
    console.log("my name is "+math.captilize(this.name))
}
play(){
    console.log(math.captilize(this.name)+" likes to  play cricket")
    
}
static captilize(name){
    return name.charAt(0).toUpperCase()+name.substr(1,name.length)
    
}
}
saurabh=new math("saurabh")
saurabh.play()