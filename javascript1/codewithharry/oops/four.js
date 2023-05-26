class employee {
  name(name1) {
    this.name = name1;
    console.log(`the employee name is${this.name}`);
  }
  add(adress) {
    this.adress = adress;
    console.log(`the employee address is should be ${this.adress}`);
  }
}
class servent extends employee {
    add(adress) {
        super.add("jaipur")  
        console.log("adress updated")
    //     this.adress = adress;
    //     console.log(`the employee address is ${this.adress}`);
      }
}
saurabhemployee = new servent();
saurabhemployee.add();
