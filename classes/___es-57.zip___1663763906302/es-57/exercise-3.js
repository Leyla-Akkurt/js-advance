//"The fromObject method should return a new person object created using the properties inside the obj object"
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  static fromObject(obj) {
    return new Person(obj.firstName, obj.lastName);
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);
//console.log(person);

 /*
const person2= new Person("Leyla","Akkurt");
console.log(person2);*/



