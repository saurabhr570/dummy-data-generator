class employee{
    constructor(name){
        this._name=name
        console.log(this.name+" is here in the company premises")
    }
        login(){
            console.log(this.name+" has been loged in")

        }
        logout(){
            console.log(this.name+" has been loged out")

        }
        get name (){
           return this._name
        }
        set name(newname){
            this._name=newname

        }
}
a=new employee("saurabh")
console.log(a.name)
a.login()
a._name="gorav"
console.log(a.name)
console.log(a instanceof employee)