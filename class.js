class Person
{
    constructor(id,name,email,address,type)
    {
    this.id = id;
    this.name = name;
    this.address = address; 
    this.email=email;
    this.type=type
    }
}
class Student extends Person
{
     constructor(id,name,email,address,type,math,physic,chemistry){
    super(id,name,email,address,type)
    this.math = math;
    this.physic=physic;
    this.chemistry =chemistry;
    }
    calculate(){
    return Math.floor((this.math + this.physic + this.chemistry) / 3);;
}
}
class Employee extends Person
{
     constructor(id,name,email,address,type,day,profit){
    super(id,name,email,address,type);
    this.day=day;
    this.profit = profit;
     }
     allProfit(){
    return (this.profit*this.day)
}
}
class Customer extends Person
{
    constructor(id,name,email,address,type,company,bill,review){
    super(id,name,email,address,type)
    this.company = company;
    this.bill = bill;
    this.review = review;
    }
}


function getEle(selector){
    return document.querySelector(selector)
}


class PersonList
{
      constructor(){
        this.member=[]
      }
      createMem(memberList){
        this.member.push(memberList)
      }
      Update(memberList,index){
         this.member.slice(index,1,memberList[index])
      }
      deleteMember(id){
        this.member=this.member.filter(mEmber=>mEmber.id!==id)
      }
}




