class vacancy {
  constructor(requirments, graduation, experience) {
    this.requirments = requirments;
    this.graduation = graduation;
    this.experience = experience;
    console.log(
      "i need job in " +
        this.requirments +
        " i have completed my gradution in " +
        this.graduation +
        " and also i have " +
        this.experience +
        " of experience."
    );
    
  }
}
let saurabhskill = new vacancy("datascientist", "b.com", "two_years");
let chodryskill = new vacancy("teacher"," msc", "freshers");
