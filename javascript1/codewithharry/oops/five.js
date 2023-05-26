class employee {
    constructor(name) {
      this.name = name;
      console.log(`the employee name is ${this.name}`);
    }
    add() {
      
      console.log(`the employee address is should be ${this.name}`);
    }
  }
  class servent extends employee {
    constructor(name) {
        super(name) 
        console.log(`the employee  who is boring name is ${this.name}`);
      }
superman(){
    console.log(`this is a superman  name ${this.name}`)
}
  }
  saurabhemployee = new servent("saurabh");
  saurabhemployee.superman() 
  saurabhemployee.add()