class Person {
    constructor(firstName,lastName,age){
      this._firstName=firstName;
      this._lastName=lastName;
      this._age=age;
      this._fullName= "";
    }
    get firstName() {
      return this._firstName;
    }
    set firstName(firstName) {
      this._firstName =firstName; 
    }
    get lastName() {
      return this._lastName;
    }
    set lastName(lastName) {
      this._lastName =lastName; 
    }
    get age() {
      return this._age;
    }
    set age(age) {
      this._age =age; 
    }
    get fullName(){
      return (`${this._firstName} ${this._lastName}`);
    }
  
    set fullName(fullName){
       const firstName = fullName.split(" ")[0];
       const lastName = fullName.split(" ")[1];
       this._firstName = firstName;
       this._lastName = lastName;
    }
  }

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);


  //const person = new Person('Mario', 'Rossi', 25);
  // console.log(person);
  
  //console.log("Before setter " + person.fullName);
  
  /*person.firstName = 'Maria';
  person.lastName = 'Verdi';
  person.fullName = 'Mario Verdi';
  console.log("After setter " +person.fullName);
  console.log(person.firstName);
  console.log(person.lastName);*/