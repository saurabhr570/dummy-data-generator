class animal{
   constructor(name,color,fruit){
    this.name=name
    this.color=color
    this.fruit=fruit
    console.log(this.color+" "+this.name+" is eating "+this.fruit)
   }
ill(){
    console.log(this.name+" is ill dont feed him "+this.fruit)
}
}
class play extends animal{
    game(){
        console.log(this.name+" likes to play ")
    }
}
class jumping extends play{
    jumping1(){
        console.log(`${this.name} likes to eat ${this.fruit} and also jumping and his color is ${this.color}`)
    }
}
let monkey=new animal("monkey","brown","banana")
monkey.ill()
let gorilla=new jumping("gorilla","black","mango")
gorilla.jumping1()


