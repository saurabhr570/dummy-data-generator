class college_id {
  constructor(name, qualification, percent, pocketmoney) {
    this.name = name;
    this.qual = qualification;
    this.perc = percent;
    this.pm = pocketmoney;
  }
}
let a1=new college_id("saurabh","bcom",60,20000)
let a2=new college_id("manish","bsc",61,10000)
console.log(a1)
console.log(a2.perc)