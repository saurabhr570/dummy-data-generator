class schoolform{
    fathermothername(){
        alert("your father name : " + this.name + " and " +" mother name "+this.name1+ " is submitted")
    }
    location(){
        alert("your location  is: " + this.name2 + " is submitted")
    }
    value(name,name1,name2){
        this.name=name
        this.name1=name1
        this.name2=name2
    }
}
saurabhform=new schoolform()
saurabhform.value("sn rathore","parakash devi","namana bundi rajasthan")

harshpriyaform=new schoolform()
harshpriyaform.value("ashok","renu","ashok vihar paramhansh colony jaipur")
saurabhform.fathermothername()
harshpriyaform.fathermothername()
saurabhform.location()
harshpriyaform.location()
