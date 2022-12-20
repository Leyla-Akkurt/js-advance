class Person {
  constructor(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
  }
  get fullName(){
    return (`${this.firstName} ${this.lastName}`);}

  set fullName(fullName){
     this.fullName=this.firstName+" "+this.lastName;
  }
}

const person = new Person('Ali', 'Akkurt', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
console.log(person)